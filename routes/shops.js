// routes/shops.js
const GROUP_NAME = 'shops';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
        reply(GROUP_NAME);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      reply();
    }
  },
];
