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

const proxy = '162.62.61.205:34930'

const agent = new HttpsProxyAgent(
  `http://@${proxy}`
);




const apiKey = 'CAP-054372CAF1BC413F867F70D3C5E378CF';
const captchaUrl = 'https://newassets.hcaptcha.com/captcha/v1/937a50f/static/hcaptcha.html';
const websiteKey = '00000000-0000-0000-0000-000000000000';
const fetchRequestContent = 'fetch("https://hcaptcha.com/checksiteconfig?v=937a50f&host=discord.com&sitekey=f5561ba9-8f1e-40ca-9b5b-a0b3f719ef34&sc=1&swa=1&spst=1", { "headers": { "accept": "application/json", "accept-language": "en,vi-VN;q=0.9,vi;q=0.8", "content-type": "text/plain", "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"", "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": "\"Windows\"", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site", "cookie": "hmt_id=139f8251-50be-4a34-b429-1495cfb00d52", "Referer": "https://newassets.hcaptcha.com/", "Referrer-Policy": "strict-origin-when-cross-origin" }, "body": null, "method": "POST" });';






/**
 * This function will take captcha challenges by discord and solve them
 * Then it will return a reponse for the challenge
 */
async function solveCaptcha() {

  axios.post('https://api.CapSolver.com/createTask', {
    clientKey: apiKey,
    task: {
      type: 'HCaptchaTaskProxyLess',
      websiteURL: captchaUrl,
      websiteKey: websiteKey,
      isInvisible: true,
      getCaptcha: fetchRequestContent,
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







/**
 * This functions stores messages to be sent for users
 * @returns random_message
 */
const getRandomMessage = () => {
  const mess = ['Hi! Sorry to disturb you. Are you selling FFXIV Gil?',
    'Hello, I am from Bun Stuff HQ server. I am just wondering if you are interested in selling gear, food or potions?',
    'Good morninggg, I do not know what time it is from your time zone. I do not want to bother you but do you by any chance sell FF14 items?',
    'Heyyy, I hope you dont mind. I am currently looking to buy FF14 items for a fresh start of season',
    'Nice to meet yaaaa. I am looking to buy gil from FFXIV, if you are interested, please let me knowww']

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
    console.log('\nGuild index: ' + i + '\n  Guild name: ' + all_guilds[i].name + '\nAll members including bots: ' + mem_list.length + '\n')

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
      if (mem[1].user.bot == false && mem[1].user.system == false && mem[1].user.id != '1137318873117495366') {

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
          .catch(err =>
            console.log(`I found an error ${err.message}`)
          )


        await giveItABreak()

      }
    }

  })

}



client1.on('ready', sendMessage)



client1.login('MTEzNzMxODg3MzExNzQ5NTM2Ng.Gz5Zi1.QLMpx-RJueiVGceizh0O4U5Qvr7HHx636baZVA')



module.exports = scrapeJob
