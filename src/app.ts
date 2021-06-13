import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { usersRouter } from './resources/users/user.router';
import { boardsRouter } from './resources/boards/board.router';
import { tasksRouter } from './resources/tasks/task.router';
import { requestLogger } from './common/requestLogger'
import { handleError } from './common/errorHandler';
import { fatalErrorsHandle } from './common/fatalErrorHandlers'; // Test

fatalErrorsHandle();

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

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
boardsRouter.use('/:boardId/tasks', tasksRouter);

app.use('/error', () => {
  Promise.reject(Error('Fatal error!'));
});
 
app.use(handleError );

export { app };
