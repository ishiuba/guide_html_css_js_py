/* 
PROMISE = An Object that manages asynchronous operations.
Wrap a Promise Object Around (asynchronous code)
"I promise to return a value"
PENDING -> RESOLVED or REJECTED
new Promise((resolve, reject) => {asynchronous code})

DO THESE CHORES IN ORDER

1. WALK THE DOG
2. CLEAN THE KITCHEN
3. TAKE OUT THE TRASH
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
      }
      else {
        reject("YOU DIDN'T TAKE OUT THE TRASH");
      }
    }, 500);
  });
}

walkDog()
    .then((value) => {
        console.log(value);
        return cleanKitchen();
    })
    .then((value) => {
        console.log(value);
        return takeOutTrash();
    })
    .then((value) => {
        console.log(value);
        console.log("YOU FINISHED ALL THE CHORES!");
    }).catch(error => console.error(error));
