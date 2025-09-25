import { observable, watchEffect } from '~/lib/voy';

export class Database {
  #name;
  #data;

  constructor(name, initialData) {
    this.#name = name;
    const data = localStorage.getItem(name);
    if (data) {
      this.#data = observable(JSON.parse(data));
    } else {
      this.#data = observable(initialData);
    }
    watchEffect(() => {
      localStorage.setItem(name, JSON.stringify(this.#data.value));
    });
  }

  getName() {
    return this.#name;
  }

  getData() {
    return this.#data.value;
  }
}
