import * as mongoose from 'mongoose';
import { config } from '../config';
import { UserSettings } from './models';

const dbConnect = async () => {
  await mongoose.connect(config.database);
  console.log(`Connected to database at ${config.database}!`);
};

const initSettings = async () => {
  const defaultSettings = new UserSettings({
    user_id: '1',
    is12HourMode: false,
    isDarkMode: false,
    isSquareEdges: false,
    isHideFullClasses: false,
    isDefaultUnscheduled: false,
    isHideClassInfo: false,
  });

  await defaultSettings.save();
};

const getSettings = async () => {
  const settings = await UserSettings.find();
  console.log(settings);
};

export { dbConnect, initSettings, getSettings };
