import { getRepository } from "typeorm";
import { Todo } from "../entity/todo";
import { isEmpty } from "../utils/utils";
import CryptoJS from "crypto-js";

class TodoService {
  async createTodo(userId: number, desc: string, date: Date) {
    let todo = getRepository(Todo);

    await todo.save({
    });
  }

  async createTodoWithTodos(
    userId: number,
    tododesc: string,
    tododate: Date
  ): Promise<void> {
    let todo = getRepository(Todo);
  }

  async getAllTodos() {
    let todo = getRepository(Todo);

    return todo;
  }

  async getTodoWithUser(userId: number) {
    let todo = getRepository(Todo);

  }
}

export default new TodoService();
