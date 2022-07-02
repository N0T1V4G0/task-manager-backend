import { app } from './app';
import { appDataSource } from './database/app-data-source';
import 'dotenv/config';

appDataSource
  .initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch((err) => console.log('Error during Data Source initialization:', err));

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
