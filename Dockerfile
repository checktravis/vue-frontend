FROM node:8

# Create app directory
WORKDIR /usr/src/app

COPY package.prod.json ./package.json
COPY dist/ ./dist/
COPY index.js ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "serve" ]

