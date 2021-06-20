import { createConnection } from 'typeorm';
import { PORT } from './common/config';
import { app } from './app';

createConnection().then(() => {
  app.listen(PORT, () =>
    process.stdout.write(`App is running on http://localhost:${PORT}`)
  );
}).catch((e) => {
  process.stderr.write('Failed to connect DB', e.message);
  process.exit(1);
});
