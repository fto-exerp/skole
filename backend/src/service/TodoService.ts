import { getRepository } from "typeorm";
import { Todo } from "../entity/todo";
import { isEmpty } from "../utils/utils";
import CryptoJS from "crypto-js";

class TodoService {
  async createTodo(title: string, date: string, status: boolean = false) {
    let todo = getRepository(Todo);

    await todo.save({
      date,
      status,
      title
    });
  }

  async getAllTodos() {
    let todo = getRepository(Todo);
    var result = todo.find()
    return result;
  }

  async getTodo(id: number) {
    let todo = getRepository(Todo);
    var result = todo.findOne(id)
    return result;
  }

  async deleteTodo(id: number) {
    let todo = getRepository(Todo);
    var result = todo.delete(id)
    return result;
  }

  async updateTodo(obj: any) {
    let todo = getRepository(Todo)
    var result = todo.update({id: obj.id},{
      status: obj.status,
      title: obj.title,
      date: obj.date,
    })

    return result
  }
}

export default new TodoService();
