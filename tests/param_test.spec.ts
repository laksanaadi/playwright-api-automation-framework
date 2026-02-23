import { test, expect } from '@playwright/test';

test('Get movie success - OMDB', async ({ request }) => {

  const response = await request.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'cc99fc43',
      t: 'lord'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.Title)
    .toBe('The Lord of the Rings: The Fellowship of the Ring');

  expect(body.Response).toBe('True');
});