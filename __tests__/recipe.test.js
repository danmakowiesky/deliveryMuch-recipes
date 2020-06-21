/* eslint-disable no-undef */
/**
 * @jest-environment node
 */

import request from 'supertest';
import app from '../src/app';

describe('get recipes', () => {
  it('Should return status 400 if the user enters without ingredients', async () => {
    const response = await request(app).get('/recipes?i=');
    expect(response.status).toBe(400);
    expect(response.text).toBe(
      JSON.stringify({
        message: 'Check if the fields you are passing are valid or not null.',
      })
    );
  });

  it('Should return status 400 when the user enter more than 3 ingredients', async () => {
    const ingredients = 'tomato,onions,beef,milk';

    const response = await request(app).get(`/recipes?i=${ingredients}`);
    expect(response.status).toBe(400);
    expect(response.text).toBe(
      JSON.stringify({
        message: 'It is allowed to pass a maximum of 3 parameters.',
      })
    );
  });

  it('Should return status 200 when the user enter with 1 ingredient', async () => {
    const response = await request(app).get('/recipes?i=egg');
    expect(response.status).toBe(200);
  }, 30000);

  it('Should return 200 when the user enter with 2 ingredients', async () => {
    const response = await request(app).get('/recipes?i=egg,bacon');
    expect(response.status).toBe(200);
  }, 30000);

  it('Should return 200 when the user enter with 3 ingredients', async () => {
    const response = await request(app).get('/recipes?i=egg,bacon,avocado');
    expect(response.status).toBe(200);
  }, 30000);
});
