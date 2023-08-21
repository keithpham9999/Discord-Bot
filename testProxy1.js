const proxyjs = require("./proxy");
const axios = require("axios");





async function changeProxy() {
  let proxy = await proxyjs.GetRandom();
  console.log(proxy);
  // { ip: '127.0.0.1', port: '8080' }

  // example proxy usage
  let Request = await axios({
    url: "https://discord.com/channels/355013337748209665/388081215695224832",
    method: "get",
    headers: { "user-agent": "Mozilla" },
    proxy: {
      host: proxy.ip,
      port: proxy.port
    }
  });

  //console.log(Request.data);
  // request body
}

module.exports.changeProxy = changeProxy 