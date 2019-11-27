# use latest version of node
FROM mhart/alpine-node:latest

# set working directory
WORKDIR /dist

#copy package json
COPY package*.json ./

#installing dependencies
RUN npm install

# bundle source code
COPY . .

# build the project
RUN npm run build

# expose port 4000
EXPOSE 4000

# start app with yarn
CMD ["npm", "start"]
