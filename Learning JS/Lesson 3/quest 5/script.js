// Дано: написати Анонімну функцію та присвоїти її значення змінній convert, функція має приймати число,
// яке є кількістю байтів та повертати стрічку із переведеними байтами в мб, з двома знаками
// після коми в форматі "100.00 Mb" та викликати цю функцію використовуючи call
// Результат: функція приймає число (байти) та перетворює у стрічку у форматі Мб наприклад:
// 10000 -> 0.01 Mb
let convert = function (value) {
  const mb = value / 1000000;
  if (Number.isInteger(mb)) {
    const mb2 = mb.toFixed(2);
    const strMB = mb2.toString();
    console.log(strMB, "Mb");
  } else {
    const strMB = mb.toString();
    console.log(strMB, "Mb");
  }
};
convert.call(this, 10000000000);
