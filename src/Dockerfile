FROM node:12
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .
COPY package-lock.json .
COPY src .


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source : you have to create a docker ignore to the node module because they earlier it was COPY now it's ADD
ADD  . .
EXPOSE 8080
CMD [ "npm", "start" ]