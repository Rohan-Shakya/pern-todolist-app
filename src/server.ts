import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, (): void =>
  console.log(`Server running at port ${process.env.PORT}`)
);
