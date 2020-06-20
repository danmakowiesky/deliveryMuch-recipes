/* eslint-disable no-use-before-define */
import getRecipes from '../services/PuppyAPI';
import getGifRecipe from '../services/GiphyAPI';

class RecipeController {
  async recipe(req, res) {
    const { i } = req.query;
    if (i.split(',').length > 3) {
      return res
        .status(400)
        .send({ message: 'It is allowed to pass a maximum of 3 parameters.' });
    }
    if (i.length === 0) {
      return res.status(400).send({
        message: 'Check if the fields you are passing are valid or not null.',
      });
    }

    const ingredients = i.split(',');

    const recipes = await getRecipes(i);

    for (let i = 0; i < recipes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const getGif = await getGifRecipe(recipes.title);
      recipes[i].gif = getGif;
    }
    const objReturnRecipes = {
      keywords: ingredients,
      recipes,
    };

    return res.status(200).send(objReturnRecipes);
  }
}

export default new RecipeController();
