import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=`,
});

export default async function getGifRecipe(recipe) {
  const q = `${recipe}`;

  const res = await api.get(q);

  return res.data[0].url;
}
