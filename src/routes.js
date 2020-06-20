import { Router } from 'express';
import RecipeController from './controller/RecipeController';

const routes = new Router();

routes.get('/recipes', RecipeController.recipe);

export default routes;
