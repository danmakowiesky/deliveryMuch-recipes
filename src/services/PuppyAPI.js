import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.recipepuppy.com/api/',
});

export default async function recipes(i) {
  const res = await api.get(`?i=${i}`);

  if (res.status !== 200) {
    return {
      error:
        'The recipepuppy api is not responding at the moment, please try again later',
    };
  }

  if (res.data.results.length === 0)
    return {
      error: 'There are no recipes for these researched ingredients',
    };

  // eslint-disable-next-line no-shadow
  const recipes = res.data.results.map((recipe) => {
    // eslint-disable-next-line no-shadow
    const i = recipe.ingredients.split(',');
    return {
      title: recipe.title,
      href: recipe.href,
      igredients: i.sort(),
    };
  });
  return recipes;
}
