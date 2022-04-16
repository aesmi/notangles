import app from './src/app';
import { dbConnect } from './src/database/database';
import { UserSettings } from './src/database/models';

const eraseDBOnSync = true;

const server = dbConnect().then(async () => {
  if (eraseDBOnSync) {
    await Promise.all([UserSettings.deleteMany({})]);
  }

  const port = app.get('port');
  const env = app.get('env');

  app.listen(port, () => {
    console.log(`App is running at http://localhost:${port} in ${env} mode. Press CTRL-C to stop`);
  });
});

export default server;
