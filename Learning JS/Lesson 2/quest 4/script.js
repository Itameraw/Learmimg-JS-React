// Дано: Функція приймає Об’єкт типу {[name]: {age: number, city: string}}
// Результат: Вивести у консоль масив із іменами людей які із міста "London" та старше 18 років
// Приклад:
// {Max: {age: 23, city: “London”}, Mike: {age: 20: city: “NY”}} => [“Max”]
function findUser(initialObject) {
  const user = Object.entries(initialObject).filter(
    ([key, value]) => value.city == "London" && value.age > 18
  );

  console.log(user);
}

findUser({ Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } });
