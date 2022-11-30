import { Router, Request, Response } from "express";
import TodoService from "../service/TodoService";
import { isEmpty } from "../utils/utils";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    var result = await TodoService.getAllTodos();

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    var result = await TodoService.getTodo(+req.params.id)

    res.json(result)
  } catch (error) {}
});

router.post("/", async (req: Request, res: Response) => {
  try {
    var result = await TodoService.createTodo(req.body.title, req.body.date);

    return res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.put("/", async (req: Request, res: Response) => {
  try {
    var result = await TodoService.updateTodo(
      req.body.todo
    );

    return res.json(result.affected);
  } catch (error) {
    console.log(error);
  }
});

router.put("/title", async (req: Request, res: Response) => {
  try {
    var result = await TodoService.updateTodoTitle(
      req.body.id,
      req.body.title
    );

    return res.json(result.affected);
  } catch (error) {
    console.log(error);
  }
});

router.put("/status", async (req: Request, res: Response) => {
  try {
    var result = await TodoService.updateTodoStatus(
      req.body.id,
      req.body.status
    );

    return res.json(result.affected);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    var result = await TodoService.deleteTodo(
      req.body.id
    );

    return res.json(result.affected);
  } catch (error) {
    console.log(error);
  }
});

export default router;
