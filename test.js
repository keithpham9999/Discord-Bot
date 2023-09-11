/**
 * This is a test file with functions for testing purposes only
 */

const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false })

const { HttpsProxyAgent } = require('https-proxy-agent')
const axios = require('axios') 
let proxyArray = []


/**
 * This function retrives IP addresses from IP pool of LunaProxy
 */
async function getIP(){
  try {
    const url = 'http://tq.lunaproxy.com/getflowip?neek=1074548&num=50&type=1&sep=1&regions=all&ip_si=2&level=1&sb='
    const response = await axios.get(url)
    const array = (response.data)
    const newArray = array.split('\r\n')
    proxyArray = proxyArray.concat(newArray)
    console.log(newArray)
    console.log(proxyArray)
  }
  catch (err) {
    console.log(err)
  }
  
}







client.on('ready', getIP)


client.login('MTA5NjM0NDI0MzgyNTU1MzQzOQ.G-Kjat.O36Bs4tnfXcL8sd6eCe19yVeMbJbH_TuGCn6Ak')


 


