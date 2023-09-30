/**
 * This is a test file with functions for testing purposes only
 */

const { getIPandPort, getProxyForDiscord, getProxyForDiscordWithData, getProxy } = require('./proxy')
const { setIntervalAsync, clearIntervalAsync } = require('set-interval-async')

async function autoDiscord(){
  const {ip, port, ar} = await getIPandPort()

  console.log(ip, port, ar)
}


const testProxy = async () => {
  const {host, port} = await getProxy()

  console.log(host, port)
}



const testProxyForDiscord = async () => {
  const {host, port} = await getProxyForDiscord()
  console.log (host, port)
  return { host, port }
}

testProxy()
