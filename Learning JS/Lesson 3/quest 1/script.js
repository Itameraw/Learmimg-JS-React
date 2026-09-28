
// Global Scope: створити змінну в глобальній 
// області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
// Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати 
// вивести цю змінну в консоль всередині функції, та за межами функції
// Block Scope: Створити функцію, в функції написати блок {} всередині якого 
// оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну 
// за межами блоку, та подивитись на результат


const global1 = "Global";
function globalScope() {
  console.log(global1)
}
globalScope()
function blockScope() {

  function block() {
    const bl = "block"
    console.log(bl)
  }
  block()
  console.log(bl)
}
blockScope()


function functionScope() {
  const local = "local"
  console.log(local)
}
functionScope()
console.log(local)
