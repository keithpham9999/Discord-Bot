/**
 * This is a test file with functions for testing purposes only
 */


const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false, })


 

/**
 * This is an async test function only
 */
async function startJob() {
    const profile = await client.user.getProfile(client.user.id)
    console.log(profile)

    // id: 1137320002517749791 - The id to send message to


    //This mapping will return all guilds from my discord with specified token

    const all_guilds = client.guilds.cache.map(guild => guild)
    console.log(all_guilds[3])

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


client.on('ready', filterBot)




client.login('MTEzNzMxODg3MzExNzQ5NTM2Ng.GqA4OK.jHkJW9Kt_Qm85R-z-i0MftRiA2zkbqjaLAvGHY')

module.exports = filterBot