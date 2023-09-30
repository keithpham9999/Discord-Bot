/**
 * This is a test file with functions for testing purposes only
 */



const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false })
const http = require('http')
const https = require('https')

const { HttpsProxyAgent } = require('https-proxy-agent')
const axios = require('axios') 




const getRandomIP = async () => {
  try {
    const url = 'https://tq.lunaproxy.com/getflowip?neek=1074548&num=50&type=1&sep=1&regions=all&ip_si=1&level=1&sb='
    const response = await axios.get(url)
    console.log(response)
    const lunaIP = String(response.data)
    const ipArray = lunaIP.split('\r\n')
     
    ipArray.splice(-1)          // Remove the last empty IP of the array
    
    const newArray = ipArray.map(element => element.split(':'))
    
    
    //console.log('my new array', newArray) 

    const random = Math.floor(Math.random() * newArray.length)
  
    const randomIP = newArray[random]

    //console.log(randomIP)
    
    return {randomIP, newArray}
    
    
  }
  catch (err) {
    console.log(err)
  }
  
}




const getIPandPort = async () => {

  const {randomIP , newArray} = await getRandomIP()

  return { ip: randomIP[0], port: Number(randomIP[1]), ar: newArray }

}



const getRawIP = async () => {
  try {
    const url = 'https://tq.lunaproxy.com/getflowip?neek=1074548&num=50&type=1&sep=1&regions=all&ip_si=1&level=1&sb='
    const response = await axios.get(url)
    console.log(response)
    const lunaIP = String(response.data)
    const ipArray = lunaIP.split('\r\n')
     
    ipArray.splice(-1)          // Remove the last empty IP of the array
    
    const random = Math.floor(Math.random() * ipArray.length)
  
    const randomIP = ipArray[random]


    return {randomIP, ipArray}
    
    
  }
  catch (err) {
    console.log(err)
  }
}
 
const getProxy = async () => {
  const {randomIP, ipArray} = await getRawIP()
  const proxy = randomIP
  const host = proxy.split(':')[0]
  const port = proxy.split(':')[1]


  const agent = new HttpsProxyAgent(
    `http://@${proxy}`
  )


  http.get('http://httpbin.org/ip', { agent }, (res) => {
  console.log('"response" event!', res.headers)
  res.pipe(process.stdout)
})


return { host, port }


}


const getProxyForDiscordWithData = async () => {
  const {randomIP, ipArray} = await getRawIP()
  const proxy = randomIP
  const host = proxy.split(':')[0]
  const port = proxy.split(':')[1]

  const agent = new HttpsProxyAgent(
    `http://@${proxy}`
  )


  https.get('https://discord.com', { agent }, (res) => {
  console.log('"response" event!', res.headers)
  res.pipe(process.stdout)
})

return { host, port }


}



const getProxyForDiscord = async () => {
  const {randomIP, ipArray} = await getRawIP()
  const proxy = randomIP
  const host = proxy.split(':')[0]
  const port = proxy.split(':')[1]

  const agent = new HttpsProxyAgent(
    `http://@${proxy}`
  )


  https.get('https://discord.com', { agent })

return { host, port }


}




module.exports = { getIPandPort, getProxyForDiscord, getProxyForDiscordWithData, getProxy }