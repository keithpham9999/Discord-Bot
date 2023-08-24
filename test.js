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


async function sendBabyDinkyLove () {
  client.users.fetch( '794935952752902144', false ).then((user) => {
    user.send("Every moment with you feels like a dream come true. I'm so grateful to have you in my life ☀️ 😇 ❤️")
  })
}


client.on('ready', sendBabyDinkyLove)




client.login('NTgzOTcxODI5MjQ5NjA1NjMz.GdqeYT.z8lqkTLQbayWHoNUKMGQa8l5hZ3Kx5WXWXBI2k')

module.exports = filterBot