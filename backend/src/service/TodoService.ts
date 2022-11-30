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
    var result = await todo.find()

    result = result.sort((a:any,b:any) => a.title - b.title);

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
    })

    return result
  }

  async updateTodoTitle(id: number,title:string) {
    let todo = getRepository(Todo)
    var result = todo.update({id},{
      title,
    })

    return result
  }

  async updateTodoStatus(id: number,status:boolean) {
    let todo = getRepository(Todo)
    var result = todo.update({id},{
      status,
    })

    return result
  }
}

export default new TodoService();
