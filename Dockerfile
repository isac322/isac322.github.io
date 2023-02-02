FROM ruby:3.2-slim
EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0", "--watch", "--force_polling", "--verbose"]
WORKDIR "/app"

RUN apt-get update -qq && apt-get install -y --no-install-recommends make g++

COPY Gemfile Gemfile
RUN bundle install

COPY assets assets
COPY images images
COPY index.md index.md
COPY _config.yml _config.yml
