import express, { Application } from 'express';
import cors from 'cors';
// Router
import router from './router/todoRouter';

const app: Application = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', router);

app.listen(process.env.PORT, (): void =>
  console.log(`Server running at port ${process.env.PORT}`)
);
