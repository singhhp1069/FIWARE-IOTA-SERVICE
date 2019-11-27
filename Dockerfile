# use latest version of node
FROM node:alpine

# set working directory
WORKDIR /dist

#copy package json
COPY package*.json ./

#installing dependencies
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp
# bundle source code
COPY . .

# build the project
RUN npm run build

# expose port 4000
EXPOSE 4000

# start app with yarn
CMD ["npm", "start"]
