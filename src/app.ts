import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import userRouter from './resources/users/user.router.js';
import boardsRouter from './resources/boards/board.router.js';
import tasksRouter from './resources/tasks/task.router.js';
import requestLogger from './common/requestLogger.js'
import { handleError } from './common/errorHandler.js';
import fatalErrorHandlers from './common/fatalErrorHandlers.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
fatalErrorHandlers();

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(requestLogger);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardsRouter);
boardsRouter.use('/:boardId/tasks', tasksRouter);

app.use(handleError);

export default app;
