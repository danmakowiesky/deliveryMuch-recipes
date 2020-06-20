import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

export default async function getGifRecipe(recipe) {
  const q = `search?api_key=${process.env.GIPHY_API_KEY}&q=${recipe}`;

  const res = await api.get(q);
  if (res.status !== 200) {
    return {
      error:
        'The giphy api is not responding at the moment, please try again later',
    };
  }

  if (res.data.data.results.length === 0)
    return {
      error: 'No gif found based on your search',
    };

  return res.data.data[0].url;
}
