// Створити ф-ію timer, яка приймає число(секунди) та імітує поведінку таймера: кожну секунду виводить в консоль стрічку
//  Timer: ${s}, де ${s} - кількість секунд що залишилось
function timer(seconds) {
  let time = seconds;
  let timer = setInterval(() => {
    if (time <= 0) {
      clearInterval(timer);
    }
    console.log(time);
    time -= 1;
  }, 1000);
}
timer(5);
