const {Router} = require('express');

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json({message: 'Delivery Much, quero fazer parte do time de vocês!!!!'})
});

module.exports = routes;