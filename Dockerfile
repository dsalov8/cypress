FROM cypress/base:16.17.1
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ("run", "cy:run")
