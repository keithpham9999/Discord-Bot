/**
 * This is a test file with functions for testing purposes only
 */

const { getIPandPort, getProxyForDiscord, getProxy } = require('./proxy')

async function autoDiscord(){
  const {ip, port, ar} = await getIPandPort()

  console.log(ip, port, ar)
}


const tryHard = () => {
  const proxy = "43.153.71.184:31087"
  const host = proxy.split(':')[0]
  const ip = proxy.split(':')[1]
  console.log(host, ip)
}

const testProxy = async () => {
  const {host, port} = await getProxy()

  console.log(host, port)
}


testProxy()
