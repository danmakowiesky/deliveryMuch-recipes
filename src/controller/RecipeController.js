class RecipeController {
  async recipe(request, response) {
    response.json({ message: 'recipe' });
  }
}

export default new RecipeController();
