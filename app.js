// APP 入口的 JS
const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesOrders = require('./routes/orders');
const routesShops = require('./routes/shops');


const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routesOrders,
    ...routesShops,
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
