/* eslint-disable sonarjs/no-duplicate-string */
const swaggerFile = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'REST API',
    description: '',
  },
  host: 'localhost:3010',
  basePath: '/',
  schemes: [
    'http',
  ],
  paths: {
    '/products': {
      post: {
        description: '',
        parameters: [
          {
            name: 'body',
            in: 'body',
            schema: {
              type: 'object',
              properties: {
                name: {
                  example: 'any',
                },
                amount: {
                  example: 'any',
                },
              },
            },
          },
        ],
        responses: {
          400: {
            description: 'Bad Request',
          },
          422: {
            description: 'Unprocessable Entity',
          },
        },
      },
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/users': {
      post: {
        description: '',
        parameters: [
          {
            name: 'body',
            in: 'body',
            schema: {
              type: 'object',
              properties: {
                username: {
                  example: 'any',
                },
                classe: {
                  example: 'any',
                },
                level: {
                  example: 'any',
                },
                password: {
                  example: 'any',
                },
              },
            },
          },
        ],
        responses: {
          400: {
            description: 'Bad Request',
          },
          422: {
            description: 'Unprocessable Entity',
          },
        },
      },
    },
    '/login': {
      post: {
        description: '',
        parameters: [
          {
            name: 'body',
            in: 'body',
            schema: {
              type: 'object',
              properties: {
                username: {
                  example: 'any',
                },
                password: {
                  example: 'any',
                },
              },
            },
          },
        ],
        responses: {
          400: {
            description: 'Bad Request',
          },
        },
      },
    },
    '/orders': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
  },
};

export default swaggerFile;
