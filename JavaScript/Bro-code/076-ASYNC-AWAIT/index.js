/*
Async/Await = 
Async = makes a function return a Promise
Await = makes a function wait for a Promise

Allows you write asynchronous code in a synchronous manner
Async doesn't have resolve or reject parameters
Everything after Await is placed in an event queue
*/

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("YOU WALK THE DOG 🐕");
      } else {
        reject("YOU DIDN'T WALK THE DOG");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kithenCleaned = true;

      if (kithenCleaned) {
        resolve("YOU CLEAN THE KITCHEN 🧹");
      } else {
        reject("YOU DIDN'T CLEAN THE KITCHEN");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;

      if (trashTakenOut) {
        resolve("YOU TAKE OUT THE TRASH ♻️");
      } else {
        reject("YOU DIDN'T TAKE OUT THE TRASH");
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
  }
  catch (error) {
    console.error(error);
  }
}

doChores();
