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



// This set contains an array with each account including email, password, user discrod ID and user discord token respectively
// !!!NOTE!!! Discord tokens always need to be retrieved again after resetting password
accountFirstSet = [['kasjasdj@hotmail.com','Kenzdz97pro@', 623735807504809986],
  ['blancomirko@hotmail.com','Kenzdz97pro@', 675844912281026570],
  ['bloindieblueyes@hotmail.co','Kenzdz97pro@', 426133176231133184],
  ['chophaka19@hotmail.com','Kenzdz97pro@', 414103428738973706],
  ['dreambowden@hotmail.com','Kenzdz97pro@', 1072025999518224384],
  ['xaprio08@hotmail.com','Kenzdz97pro@', 984227881850929162],
  ['cristofer_85133984@hotmail.com','Kenzdz97pro@', 828459051498209300],
  ['tpsampaioramos@hotmail.com','Kenzdz97pro@', 711485597427957760],
  ['batuhanerenguc19981@hotmail.com','sdvxmja@', 459468404751990787],
  ['pyeisonandre@hotmail.com','Kenzdz97pro@', 852155933538254859]

]


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
      [ '43.159.50.117', '36914' ],
      [ '43.159.50.117', '36856' ],
      [ '43.159.50.117', '36644' ],
      [ '43.159.50.117', '36579' ],
      [ '43.159.50.117', '36911' ],
      [ '43.159.50.117', '36681' ],
      [ '43.159.50.117', '36796' ],
      [ '43.159.50.117', '36981' ],
      [ '43.159.50.117', '36966' ],
      [ '43.157.21.32', '32784' ],
      [ '43.157.21.32', '32614' ],
      [ '43.157.21.32', '32705' ],
      [ '43.157.21.32', '32995' ],
      [ '43.157.21.32', '32838' ],
      [ '43.157.21.32', '32624' ],
      [ '43.157.21.32', '32712' ],
      [ '43.157.21.32', '32979' ],
      [ '43.157.21.32', '32864' ],
      [ '43.130.10.70', '23400' ],
      [ '43.130.10.70', '23189' ],
      [ '43.130.10.70', '23367' ],
      [ '43.130.10.70', '23285' ],
      [ '43.130.10.70', '23408' ],
      [ '43.130.10.70', '23446' ],
      [ '43.130.10.70', '23017' ],
      [ '43.130.10.70', '23242' ],
      [ '43.130.10.70', '23312' ],
      [ '43.157.21.32', '34193' ],
      [ '43.157.21.32', '34387' ],
      [ '43.157.21.32', '34141' ],
      [ '43.157.21.32', '34420' ],
      [ '43.157.21.32', '34372' ],
      [ '43.157.21.32', '34411' ],
      [ '43.157.21.32', '34156' ],
      [ '43.130.10.70', '22980' ],
      [ '43.130.10.70', '22881' ],
      [ '43.130.10.70', '22684' ],
      [ '43.130.10.70', '22968' ],
      [ '43.130.10.70', '22596' ],
      [ '43.130.10.70', '22774' ],
      [ '43.130.10.70', '22652' ],
      [ '43.130.10.70', '22610' ],
      [ '43.130.10.70', '22736' ],
      [ '43.128.71.89', '28833' ],
      [ '43.128.71.89', '28666' ],
      [ '43.128.71.89', '28504' ],
      [ '43.128.71.89', '28734' ],
      [ '43.128.71.89', '28613' ],
    ]
    
    const random = Math.floor(Math.random() * ipPool.length)
  
    const randomIP = ipPool[random]
    
  
    return {randomIP}
  
  }
  
  const proxyWebType = 'http'
  const proxyIP = getRandomIP().randomIP[0]
  const proxyWebPort = Number(getRandomIP().randomIP[1])


/**
 * This functions stores messages to be sent for users
 * @returns random_message
 */
const getRandomMessage = () => {
  const mess = ["Hi, I'm looking to buy everyday: OSRS gold 2 Billions - rate 0.165$/M, RS3 10 Billions - rate 0.02$/M\nPayment: Paypal, Binance (USDT)\nMy reputation on: g2g.com, playerauctions.com, epicnpc.com,... (store name: FFXIVGILSHOP)\nMy official Discord (online 24/24): ffshop_official\nLooking forward to doing business with you. And sorry if I'm bothering you. Thanksssss",
  "Hey there, I'm on the hunt for some stuff: 2 billion OSRS gold at $0.165 per million, and 10 billion RS3 gold at $0.02 per million\nI can pay you through PayPal or Binance (USDT)\nYou can check out my good reputation on sites like g2g.com, playerauctions.com, and epicnpc.com under the name FFXIVGILSHOP\nHit me up on my 24/7 Discord at ffshop_official\nExcited to do business with you, and sorry if I'm being a pain. Thankssss",
  "Yo, I'm in the market for some gaming currency: 2 billion OSRS gold at a rate of $0.165 per million and 10 billion RS3 gold at $0.02 per million\nI can pay you via PayPal or Binance (USDT)\nCheck out my reputation on sites like g2g.com, playerauctions.com, and epicnpc.com - you'll find me under FFXIVGILSHOP\nShoot me a message on my round-the-clock Discord at ffshop_official\nCan't wait to do business with you, and sorry if I'm bugging you. Thanksssss",
  "Hey, I'm on the lookout for some game gold: 2 billion OSRS gold at a rate of $0.165 per million and 10 billion RS3 gold at $0.02 per million\nI can pay using PayPal or Binance (USDT)\nYou can verify my good standing on websites like g2g.com, playerauctions.com, and epicnpc.com, where I go by the name FFXIVGILSHOP\nYou can reach me anytime on my Discord, ffshop_official, which is online 24/7\nExcited to do business with you, and I'm sorry if I'm being a bother. Thankssss",
  "Hi there, I'm in the market for some in-game cash: 2 billion OSRS gold at $0.165 per million and 10 billion RS3 gold at $0.02 per million\nI can make payments through PayPal or Binance (USDT)\nYou can check my reputation on websites like g2g.com, playerauctions.com, and epicnpc.com under the username FFXIVGILSHOP\nYou can hit me up anytime on my Discord, ffshop_official, which is always online\nLooking forward to doing business with you, and apologies if I'm intruding. Thankssss"]
  
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
  await scrapeJob()
  const all_guilds = client1.guilds.cache.map(guild => guild)
  readline.question(`Please enter your guild scraping index: `, async guild_num => {
    console.log(`Guild index number is: ${guild_num}`);


    const all_mem = await all_guilds[guild_num].members.fetch()   //Change guild index to change guild
    const mem_list = Array.from(all_mem)
    console.log(mem_list.length)




    for (let [index, mem] of mem_list.entries()) {
      if (mem[1].user.bot == false && mem[1].user.system == false && mem[1].user.id != '675844912281026570' && index < 24) {
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
          else if (index == 0 || index == 100) {
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
              console.log(`Internal stack error found at sending message`)
              console.log(err)
              await solveCaptcha()
            
            }
          })
          .catch(err => {
            console.log(`I found an error ${err.message}`)
          }
            
          )
        await sleep(3600000)

      }else{
        console.log('Message did not send!')
      }
      
    }

  })

}


client1.on('ready', sendMessage)




client1.login('')



module.exports = scrapeJob