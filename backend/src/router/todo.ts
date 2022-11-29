import { Router, Request, Response } from "express";
import TodoService from "../service/TodoService";
import { isEmpty } from "../utils/utils";
const router = Router();


router.get("/", async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
  } catch (error) {
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

router.post("/todos", async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
  }
});



export default router;
