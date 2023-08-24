const https = require('https')
const { HttpsProxyAgent } = require('https-proxy-agent')
const WebSocket = require('ws')


const username = 'user-lu6186014'
const password = 'DfIYtv'
const proxy_list = ["43.157.122.238:34417", "43.157.122.238:34488", "43.157.122.238:34362", "43.157.122.238:34194", "43.157.122.238:34080", "43.157.122.238:34256", "43.157.122.238:34142", "43.157.122.238:34439", "43.157.122.238:34231", "43.157.122.238:24070", "43.157.122.238:24036", "43.157.122.238:24076", "43.157.122.238:24359", "43.157.122.238:24280", "43.157.122.238:24053", "43.157.122.238:24110", "43.157.122.238:24168", "43.157.122.238:24496", "43.157.122.238:34523", "43.157.122.238:34996", "43.157.122.238:34694", "43.157.122.238:34925", "43.157.122.238:34723", "43.157.122.238:34559", "43.157.122.238:34947", "43.157.122.238:34626", "43.157.122.238:34632", "43.157.122.238:28385", "43.157.122.238:28074", "43.157.122.238:28401", "43.157.122.238:28361", "43.157.122.238:28027", "43.157.122.238:28490", "43.157.122.238:28109", "43.157.122.238:28060", "43.157.122.238:28324", "101.32.166.145:28841", "101.32.166.145:28695", "101.32.166.145:28772", "101.32.166.145:28508", "101.32.166.145:28897", "101.32.166.145:28749", "101.32.166.145:28586", "101.32.166.145:28631", "101.32.166.145:28578", "101.32.166.145:35610", "101.32.166.145:35726", "101.32.166.145:35622", "101.32.166.145:35505", "101.32.166.145:35619"]

proxy = proxy_list[Math.floor(Math.random() * proxy_list.length)]
const agent = new HttpsProxyAgent(proxy);
console.log('Using proxy server %j', proxy)

const socket = new WebSocket('ws://echo.websocket.org', { agent });


socket.on('open', function () {
    console.log('"open" event!');
    socket.send('hello world');
  });
  
  socket.on('message', function (data, flags) {
    console.log('"message" event! %j %j', data, flags);
    socket.close();
  });









async function connectProxy() {

    const agent = new HttpsProxyAgent(`http://${username}:${password}@${proxy}`)

    const response = await fetch('http://www.google.com', {
        method: 'get',
        agent: agent,
    });

    return agent.proxy.port
}




module.exports = connectProxy