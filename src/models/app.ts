import express from "express";
import type { Request, Response, NextFunction} from "express";
import usuarioRouter from ""

const app = express();

app.use(express.json());

app.get("/", usuarioRouter);

app.use((req: Request, res: Response, next: NextFunction ) => {
    res.send("Hello World");
});

export default app;