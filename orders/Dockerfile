FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn --frozen-lockfile

COPY . .

# build application
RUN yarn run build

# remove development dependencies
RUN yarn install --prod --frozen-lockfile

# prune unnecessary files from the node_modules folder
RUN yarn autoclean --force

FROM node:22-alpine

# copy from builder
COPY --from=builder /app ./

EXPOSE 3100

CMD ["yarn", "run", "start"]

