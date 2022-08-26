# update this version as required
FROM cypress/included:10.6.0
RUN mkdir /cypress-container
WORKDIR /cypress-container
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
RUN npm install
ENTRYPOINT ["npm", "run"]