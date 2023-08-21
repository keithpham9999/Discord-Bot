/**
 * This is a test file with functions for testing purposes only
 */


const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false, })

const proxyjs = require("./proxy");
const axios = require("axios");



 

/**
 * This is an async test function only
 */
async function startJob() {
    const profile = await client.user.getProfile(client.user.id)
    console.log(profile)

    // id: 1137320002517749791 - The id to send message to


    //This mapping will return all guilds from my discord with specified token

    const all_guilds = client.guilds.cache.map(guild => guild)
    console.log(all_guilds[3].name)

}

/**
 * This function is created to filter bot out of supplier list
 */
async function filterBot() {
    const all_guilds = client.guilds.cache.map(guild => guild)
    const all_mem = await all_guilds[4].members.fetch()
    const mem_list = Array.from(all_mem)



    

    console.log(mem_list[1][1].user)
    mem_list.forEach(element => {
        console.log(element[1].user)
    }) 
 

    
    
  


}



async function changeProxy() {

    let proxy = await proxyjs.GetRandom();
    console.log(proxy);
        // { ip: '127.0.0.1', port: '8080' }
  
    // example proxy usage
    let Request = await axios({
      url: "https://discord.com/channels/268675600921657345/271255075794452480",
      method: "get",
      headers: { "user-agent": "Mozilla" },
      proxy: {
        host: proxy.ip,
        port: proxy.port
      }
    });
  
    console.log(Request.data);
        // request body
  }



client.on('ready', changeProxy)




client.login('MTA5NjM0NDI0MzgyNTU1MzQzOQ.GZ8h5H.MJVqHkyncXGghlbrBp0NaQGD4ohSvxKG06MSMM')

module.exports = filterBot