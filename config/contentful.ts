const contentful = require('contentful')

export const client = contentful.createClient({
  space: '0anhe45tc9s2',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '8ppxgHOs4YOE0wvbYucccGnV9ANlezXAVapLKdL1j-8'
})