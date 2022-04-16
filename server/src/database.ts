import * as mongoose from 'mongoose';
import { config } from './config';

const dbConnect = async () => {
  await mongoose.connect(config.database);
};

dbConnect().catch((err) => console.log(err));
