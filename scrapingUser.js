const { Client } = require('discord.js-selfbot-v13')
const client1 = new Client({ checkUpdate: false, })
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require('fs/promises')
const axios = require('axios');
const fetch = require('node-fetch')
const {HttpsProxyAgent} = require('https-proxy-agent')







const apiKey = 'CAP-054372CAF1BC413F867F70D3C5E378CF';
const captchaUrl = 'https://discord.com/';
const websiteKey = '00000000-0000-0000-0000-000000000000';


const proxyWebType = 'http'
const proxyIP = '43.157.12.31'
const proxyWebPort = 25588




/**
 * This function will take captcha challenges by discord and solve them
 * Then it will return a reponse for the challenge
 */
async function solveCaptcha() {

  axios.post('https://api.CapSolver.com/createTask', {
    clientKey: apiKey,
    task: {
      type: 'HCaptchaTurboTask',
      websiteURL: captchaUrl,
      websiteKey: websiteKey,

      proxyType: proxyWebType,
      proxyAddress: proxyIP,
      proxyPort: proxyWebPort,
    },
  })
    .then((response) => {
      const taskId = response.data.taskId;
      console.log('Task created successfully. Task ID:', taskId);
      // Continue to the next step
    })
    .catch((error) => {
      console.error('Error creating task:', error.response.data);
    });

}




const getRandomIP = () => {
  const ipPool = [
    '43.157.12.31:25588',   '43.157.12.31:25595',   '43.157.12.31:25739',
    '43.157.12.31:25935',   '43.157.12.31:25722',   '43.157.12.31:25507',
    '43.157.12.31:25987',   '43.157.12.31:25618',   '43.157.12.31:25704',
    '43.130.40.141:28275',  '43.130.40.141:28036',  '43.130.40.141:28210',
    '43.130.40.141:28090',  '43.130.40.141:28011',  '43.130.40.141:28400',
    '43.130.40.141:28161',  '43.130.40.141:28347',  '43.130.40.141:28257',
    '43.157.12.31:28457',   '43.157.12.31:28343',   '43.157.12.31:28243',
    '43.157.12.31:28013',   '43.157.12.31:28470',   '43.157.12.31:28487',
    '43.157.12.31:28459',   '43.157.12.31:28290',   '43.157.12.31:28353',
    '150.109.94.225:38630', '150.109.94.225:38952', '150.109.94.225:38932',
    '150.109.94.225:38675', '150.109.94.225:38784', '150.109.94.225:38933',
    '150.109.94.225:38960', '150.109.94.225:38701', '150.109.94.225:38803',
    '43.128.102.56:28509',  '43.128.102.56:28740',  '43.128.102.56:28900',
    '43.128.102.56:28558',  '43.128.102.56:28767',  '43.128.102.56:28975',
    '43.128.102.56:28542',  '43.128.102.56:28595',  '43.128.102.56:28752',
    '43.130.40.141:29324',  '43.130.40.141:29431',  '43.130.40.141:29205',
    '43.130.40.141:29103',  '43.130.40.141:29315',  ''
  ]
  
  const random = Math.floor(Math.random() * ipPool.length)

  const randomIP = ipPool[random]

  return {randomIP}

}


/**
 * This functions stores messages to be sent for users
 * @returns random_message
 */
const getRandomMessage = () => {
  const mess = ['Hi! Sorry to disturb you. Are you selling Albion items?',
    'Hello, I am from Albion Market server and I saw that you were here. I am just wondering if you are interested in selling items?',
    'Good morninggg, I do not know what time it is from your time zone. I do not want to bother you but do you by any chance sell Albion items?',
    'Heyyy, I hope you dont mind. I am currently looking to buy Albion items for a fresh start of season',
    'Nice to meet yaaaa. I am looking to buy items from Albion, if you are interested, please let me knowww']

  const random = Math.floor(Math.random() * mess.length)

  const random_message = mess[random]                                                                                                                                        

  return { random_message }
}    




/**
 * This function returns a random index to be accessed in an array
 * @param {*} min 
 * @param {*} max 
 * @returns a random index in the array
 */
function getRandomInclusive(min, max) {

  return Math.random() * (max - min + 1) + min // The maximum is inclusive and the minimum is inclusive
}


/**
 * This function sets a sleep time for system with 1000 units equal 1 second
 * @param {*} ms 
 * @returns sleep time 
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * This is the main async function to scrape users's data
 */
async function scrapeJob() {


  const all_guilds = client1.guilds.cache.map(guild => guild)

  //console.log(all_guilds[2].name)
  //const all_mem = all_guilds[3].members.cache.map(member => member)

  for (let i = 0; i < all_guilds.length; i++) {

    const all_mem = await all_guilds[i].members.fetch()   //Change guild index to change guild
    const mem_list = Array.from(all_mem)
    console.log('\nGuild index: ' + i + '\nGuild name: ' + all_guilds[i].name + '\nAll members including bots: ' + mem_list.length + '\n')

  }



  /*     let content = all_guilds[guild_num].name + '\n\n'             //Also change guild index for this one
      fs.writeFile('C:\\Users\\RnD PC\\BotJS\\supplier_list_user2\\supplier ' + all_guilds[guild_num].name + '.txt', content, err => {    //Change guild index here as well
        if (err) {
          console.log(err)
        }
      }) */



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



  /*     for (const mem of mem_list) {
        content = (mem[1].user.username).toString() + '\n'
  
        if (mem[1].user.bot == false && mem[1].user.system == false) {
          await fs.appendFile('C:\\Users\\RnD PC\\BotJS\\supplier_list_user2\\supplier ' + all_guilds[guild_num].name + '.txt', content, err => {
            //Change guild index here too with variable guild_num
            if (err) {
              console.log(err)
            }
  
  
          })
        }
  
      } */


  //These brackets are for the read statement
}




/**
 * This function sends message to discord users
 */
async function sendMessage() {
  const all_guilds = client1.guilds.cache.map(guild => guild)
  readline.question(`Please enter your guild scraping index: `, async guild_num => {
    console.log(`Guild index number is: ${guild_num}`);


    const all_mem = await all_guilds[guild_num].members.fetch()   //Change guild index to change guild
    const mem_list = Array.from(all_mem)
    console.log(mem_list.length)




    for (let [index, mem] of mem_list.entries()) {
      if (mem[1].user.bot == false && mem[1].user.system == false && mem[1].user.id != '1046836746538713248') {
                                                                                        // Change userID every time log in into a new account
        /*       client1.users.fetch(mem[1].user.id, false).then((user) => {
                user.send(mess)
                console.log('Message sent to ' + user.username)
                ` 
               })
               .catch((e) => {
        
                console.log(e.message)
                console.log('\nError found!')
                
             }) */

        const giveItABreak = async () => {
          if (index % 3 != 0) {
            await sleep(getRandomInclusive(600000.823749823, 900000.287645378))
          }
          else if (index == 0) {
            await sleep(getRandomInclusive(1000, 5000))
          }
          else {
            await sleep(getRandomInclusive(180000.901235434, 300000.021128729))
          }
        }

        client1.users.fetch(mem[1].user.id, false)
          .then(async (user) => {
            try {
              const { random_message } = getRandomMessage()
              await user.send(random_message)
              console.log(` Message sent to ${user.username} `)
            } catch (err) {
              await solveCaptcha()
              console.log(`Internal stack error found at sending message`)
              console.log(err)
            }
          })
          .catch(err => {
            console.log(`I found an error ${err.message}`)
          }
            
          )
        await giveItABreak()

      }
    }

  })

}


client1.on('ready', sendMessage)




client1.login('MTA0NjgzNjc0NjUzODcxMzI0OA.Gq1ExB.b4peMRs9H-wfAv-Uuy7rBClkBet7pvvCTeI7qA')



module.exports = scrapeJob
