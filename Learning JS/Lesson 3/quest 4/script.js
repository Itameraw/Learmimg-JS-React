// Дано: об'єкт у якому необхідно переписати існуючу функція на стрілочну, щоб він почав виконуватись коректно
// Результат: вивести у консоль “bark”

// const dog = {
//  sound: 'bark',
//  greet: function() {
//      setTimeout(function () { // fix code in this line
//          console.log(this.sound)
//      },0)
//    }
// }

// dog.greet();
const dog = {
  sound: "bark",
  greet: function () {
    setTimeout(() => {
      // fix code in this line
      console.log(this.sound);
    }, 0);
  },
};

dog.greet();
