FROM node:10-alpine
WORKDIR /code
RUN wget https://github.com/krallin/tini/releases/download/v0.18.0/tini-static -O /tini \
    && chmod +x /tini
COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force
COPY . ./
RUN npm run build
EXPOSE 3000
CMD ["/tini", "--", "./node_modules/.bin/ecstatic", "dist/", "--port", "3000"]
