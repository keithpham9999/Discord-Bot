const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false, })
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require('fs/promises')

const mess = 'Hi! Sorry to disturb. Is your FC looking for member ?'


function getRandomInclusive(min, max) {
  return Math.random() * (max - min + 1) + min // The maximum is inclusive and the minimum is inclusive
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * This is the main async function to scrape users's data
 */
async function scrapeJob() {


  const all_guilds = client.guilds.cache.map(guild => guild)
  

  //console.log(all_guilds[2].name)
  //const all_mem = all_guilds[3].members.cache.map(member => member)
  

  readline.question(`Please enter your guild scraping index: `, async guild_num => {
    console.log(`Guild index number is: ${guild_num}`);



    const all_mem = await all_guilds[guild_num].members.fetch()   //Change guild index to change guild
    const mem_list = Array.from(all_mem)
    console.log('\nGuild name: ' + all_guilds[guild_num].name + '\nAll members including bots: ' + mem_list.length)
    
    let content = all_guilds[guild_num].name + '\n\n'             //Also change guild index for this one
    fs.writeFile('C:\\Users\\RnD PC\\BotJS\\supplier_list\\supplier ' + all_guilds[guild_num].name + '.txt', content, err => {    //Change guild index here as well
      if (err) {
        console.log(err)
      }
    })



    /*   // This loop iterates through the member list in the guild and gets the username from them 
      for (i = 0; i < mem_list.length - 1; i++) { 
            //console.log(mem_list[i][1].user.username)
            content = (mem_list[i][1].user.username).toString() + '\n'
            
            fs.appendFile('C:\\Users\\RnD PC\\BotJS\\supplier_list\\supplier ' + all_guilds[guild_num].name + '.txt', content, err => { 
              //Change guild index here too, there will be a loop to avoid having to change guild index manually
              if (err) {
                console.log(err)
              }
              
              
            });
    
            }
    
         for (i = 8100; i < mem_list.length - 1; i++) {
          content = (mem_list[i][1].user.username).toString() + '\n'
            
            await fs.appendFile('C:\\Users\\RnD PC\\BotJS\\supplier_list\\supplier ' + all_guilds[guild_num].name + '.txt', content, err => { 
              //Change guild index here too, there will be a loop to avoid having to change guild index manually
              if (err) {
                console.log(err)
              }
              
              
            });
        }
           
        })
         */



    for (const mem of mem_list) {
      content = (mem[1].user.username).toString() + '\n'

      if (mem[1].user.bot == false && mem[1].user.system == false) {
        await fs.appendFile('C:\\Users\\RnD PC\\BotJS\\supplier_list\\supplier ' + all_guilds[guild_num].name + '.txt', content, err => {
          //Change guild index here too with variable guild_num
          if (err) {
            console.log(err)
          }


        })
      }

    }


  }) //These brackets are for the read statement
}



async function sendMessage() {
  
  const all_guilds = client.guilds.cache.map(guild => guild)

  readline.question(`Please enter your guild scraping index: `, async guild_num => {
    console.log(`Guild index number is: ${guild_num}`);


    const all_mem = await all_guilds[guild_num].members.fetch()   //Change guild index to change guild
    const mem_list = Array.from(all_mem)
    console.log(mem_list.length)


  

  for (const [index, mem] of mem_list.entries()) {
    if (mem[1].user.bot == false && mem[1].user.system == false && mem[1].user.id != '1137318873117495366') {
       


      client.users.fetch(mem[1].user.id, false).then((user) => {
        user.send(mess);
        console.log('Message sent to ' + user.username)
       })
       .catch((e) => {

          console.log(e.message)

       })
       
      
      


    }

    if (index % 3 != 0) {
    await sleep(getRandomInclusive(600000.823749823, 900000.287645378))
    }
    else if (index == 0){
      await sleep(getRandomInclusive(1000.772949823, 3000.000245378))
  }
    else {
      await sleep(getRandomInclusive(300000.901235434, 600000.021128729))
    }

  }

  })

}

client.on('ready', sendMessage)



client.login('MTEzNzMxODg3MzExNzQ5NTM2Ng.GOkQpq.kvOuawvDp4lcNLgYDzq0VONWddvyXfl_hiKGSY')


module.exports = scrapeJob
