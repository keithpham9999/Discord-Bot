

const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false, })
const fetch = require('node-fetch')
const {HttpsProxyAgent} = require ('https-proxy-agent')

const proxy = '162.62.61.205:34930'

const agent = new HttpsProxyAgent(
  `http://@${proxy}`
);

async function getIP() {
  const response = await fetch('http://httpbin.org/ip', {
    method: 'get',
    agent: agent,
  });
  
  console.log(await response.text());
 
}

client.on('ready', getIP)


client.login('MTEzNzMxODg3MzExNzQ5NTM2Ng.GRbEdu.rH2zJwGJUTVpDTkvbE3PAkAetNiEJiipkyPynM')
