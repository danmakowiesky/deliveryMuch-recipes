import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.recipepuppy.com/api/?i=',
});

export default async function recipes(i) {
  const res = await api.get(i);

  return res;
}
