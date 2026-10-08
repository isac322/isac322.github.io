import { Marked, type Token, type Tokens } from "marked";

const marked = new Marked({ gfm: true, async: false });

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

marked.use({
  renderer: {
    // marked ≥8 passes the parsed token object; `this.parser` is the
    // active parser instance, so link children render through the same
    // configured renderer.
    link(
      this: { parser: { parseInline(tokens: Token[]): string } },
      { href, title, tokens }: Tokens.Link,
    ): string {
      const text = this.parser.parseInline(tokens);
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
      // External http(s) links open in a new tab; #anchors and mailto: stay put.
      const externalAttrs = /^https?:\/\//.test(href)
        ? ' target="_blank" rel="noopener"'
        : "";
      return `<a href="${escapeAttr(href)}"${titleAttr}${externalAttrs}>${text}</a>`;
    },
  },
});

/** Render a markdown block (lists, paragraphs, raw inline HTML like <mark>). */
export function renderBlock(markdown: string): string {
  return marked.parse(markdown, { async: false });
}

/** Render a single-line markdown string without a wrapping <p>. */
export function renderInline(markdown: string): string {
  return marked.parseInline(markdown, { async: false });
}
