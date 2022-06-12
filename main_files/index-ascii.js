// ^ IMPORTS ------------------------------
const readline = require('readline')
const fs = require('fs')
// ^ --------------------------------------

// TODO ============== Currently working on this ===================

// ~ printImage ----------
// The userInput we recieve is a string always
function printImage(userInput, imageMenu, rl) {
  if (isNaN(parseInt(userInput))) {
    // Its a letter
    const upperUserInput = userInput.toUpperCase()
    switch (upperUserInput) {
      case 'Q':
        process.exit()
        break
      case 'C':
        // code to create new comments fs.append
        addNewComment(rl)
        break
      case 'V':
        // code to read the comments
        viewComments()
        break
      case 'D':
        /* 
        code to delete comments:
        errase comments file
        create it again file and initializing counter of comments
         */
        break
      default:
        wrongSelection(userInput)
    }
  } else {
    // is a number
    getImagePath(userInput, imageMenu)
  }
}

/* 
todo -------------------------------------------------------------------------------
todo:  - Change printMenu function so it can read the directory data and generate the
todo:  imageMenu variable (array) by itself
      Cant do it following instructions since i will need a new directory for comments
      to avoid adding comments.txt to my array, but maybe i do want to be able to choose
      to print the comments
todo:  - Write code for commenting and adding new comments
todo:  - Write code for viewing comments
*/

// TODO ------- ^^^^^^^ Currently working on this ^^^^^^^^-------

// ^ ------------------
// ^ --- FUNCTIONS
// ^ ------------------
// ~ -------------------------
// ~ welcomeMessage ---------
function welcomeMessage() {
  log(`Welcome human!\n`)
  printMenu()
}
// ~ -------------------------
// ~ printMenu ---------------
function printMenu() {
  let utilityMenu = [
    `Press: 'Q' to quit`,
    `Press: 'C' to add a comment`,
    `Press: 'V' to view the comments`,
  ]
  let imageMenu = [
    `kea.txt`,
    `kiwi.txt`,
    `manaia.txt`,
    `nikau.txt`,
    `pohutukawa.txt`,
  ]
  log(`Choose the image you would like to print:\n`)
  imageMenu.forEach((element, idx) =>
    log(`${idx + 1}. ${element.slice(0, -4)}`)
  )
  log(``)
  utilityMenu.forEach((element) => log(element))
  log(``)

  getInput(imageMenu)
}
// ~ -------------------------
// ~ getInput ----------------
function getInput(imageMenu) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Which file should I load?\n', (userInput) => {
    printImage(userInput, imageMenu, rl)
    rl.close()
  })
}
// ~ ------------------------
// ~ getImagePath ------------
function getImagePath(userInput, imageMenu) {
  let imagePath = `./data/${imageMenu[parseInt(userInput) - 1]}`
  fs.readFile(imagePath, 'utf-8', (err, data) => {
    if (err) {
      wrongSelection(userInput)
    } else {
      log(data)
      setTimeout(() => {
        printMenu()
      }, 300)
    }
  })
}
// ~ -------------------------
// ~ addNewComment -----------
function addNewComment() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Which file should I load?\n', (userInput) => {
    printImage(userInput, imageMenu, rl)
    rl.close()
  })
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  // })
  // rl.question('comment?\n', (userInput) => {
  //   log(`So the new comment is:\n ${userInput}`)
  // })
}
// ~ -------------------------
// ~ viewComments -----------
function viewComments() {
  fs.readFile('./data/comments.txt', 'utf-8', (err, data) => {
    if (err) {
      log(`Impossibruuuh error`)
    } else {
      log(data)
      setTimeout(() => {
        printMenu()
      }, 1500)
    }
  })
}
// ~ wrongSelection ----------
function wrongSelection(userInput) {
  log(`Your selection was: ${userInput}
Please select a valid option
==================================================================\n`)
  setTimeout(() => {
    printMenu()
  }, 1000)
}
// ~ -------------------------

// ~ log ---------------------
// ? --log : function to log messages on the console
//  - created to be able to test this code since logs act weird on jest
function log(msg) {
  console.log(msg)
}
// ~ -------------------------
//  ? --------------------------------------

// ^ --- Calling the function ---------------------------------
welcomeMessage()
// ^ ----------------------------------------------------------
