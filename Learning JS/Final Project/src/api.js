class Api {
  constructor() {
    this.url = "https://api-nodejs-todolist.herokuapp.com/";
    this.headers = { "Content-Type": "application/json" };
  }
  async register(reg) {
    const res = await fetch(`${this.url}user/register`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(reg),
      redirect: "follow",
    });
    const data = await res.json();
    return data;
  }

  async login(log) {
    const res = await fetch(`${this.url}user/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ log }),
      redirect: "follow",
    });
    const data = await res.json();
    this.headers.Authorization = `Bearer ${data.token}`;
  }

  // Написати функцію яка повертає масив ToDo елементів із API
  async fetchAllTodoItems() {
    const res = await fetch(`${this.url}task`);
    const responce = await res.json();

    return responce;
  }

  // Написати функцію яка відсилає ToDo елемент до API та повертає результат
  async addTodoItem(todoDescription) {
    const res = await fetch(`${this.url}task`, {
      method: "POST",
      heades: this.headers,
      body: JSON.stringify(todoDescription),
    });
    const data = await res.json;
    this.headers.Authorization = `Bearer ${data.token}`;
  }

  // Написати функцію яка видаляє ToDo елемент з API
  async removeTodoItem(id) {
    const res = await fetch(`${this.url}task/${id}`, {
      method: "DELETE",
    });
    this.headers.Authorization = `Bearer ${data.token}`;
  }

  // Написати функцію яка оновляє ToDo елемент у API
  async updateTodoItem(id, completed) {
    const res = await fetch(`${this.url}task/${id}`, {
      method: "PUT",
      heades: this.headers,
      body: JSON.stringify(completed),
    });
    const responce = res.json();
    this.headers.Authorization = `Bearer ${data.token}`;
    return responce;
  }
}
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  name: "Muhammad Nur Ali",
  email: "muh.nurali43@gmail.com",
  password: "12345678",
  age: 20,
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://api-nodejs-todolist.herokuapp.com/user/register", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
export default new Api();
