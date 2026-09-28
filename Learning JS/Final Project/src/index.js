import Api from "./api.js";
import { insertAllTodosToHtml, insertSingleTodoToHtml } from "./webApi.js";
const user = {
  name: "Muhammad Nur Ali",
  email: "muh.nurali43@gmail.com",
  password: "12345678",
  age: 20,
};
const loginToUser = {
  email: "muh.nurali43@gmail.com",
  password: "12345678",
};
// Написати функцію яка залогінює користувача, фетчить список ToDo елементів та добавляє їх на фронт (нові мають бути зверху)
window.login = async () => {
  await Api.login(loginToUser);
  const todos = await Api.fetchAllTodoItems();
  insertAllTodosToHtml(todos);
};

// Написати функцію яка реєструє користувача, фетчить список ToDo елементів та добавляє їх на фронт (нові мають бути зверху)
window.register = async () => {
  await Api.register(user);
  const todos = await Api.fetchAllTodoItems();
  insertAllTodosToHtml(todos);
};

// Написати функцію яка добавляє ToDo елемент до API та фронта
window.addTodo = async () => {
  const input = document.getElementById("descriptionInput");
  const description = input.value;
  Api.addTodoItem(description);
  insertSingleTodoToHtml(description);

  // Очищає інпут
  input.value = "";
};

// Написати функцію(приймає id та completed - поточний стан ToDo елемента) яка модифікує Todo елемента на API та фронті.
window.modifyTodo = (_id, completed) => {
  // Писати код тут
};

// Написати функцію(приймає id ) яка видаляє ToDo елемент із API та фронта.
window.removeTodo = (_id) => {
  // Писати код тут
};
