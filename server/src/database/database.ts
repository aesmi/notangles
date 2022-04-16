import * as mongoose from 'mongoose';
import { config } from '../config';
import { UserSettings } from './models';

const dbConnect = async () => {
  await mongoose.connect(config.database);
  console.log(`Connected to database at ${config.database}!`);
};

const initSettings = async () => {
  const defaultSettings = new UserSettings({
    userID: '1',
    is12HourMode: false,
    isDarkMode: false,
    isSquareEdges: false,
    isHideFullClasses: false,
    isDefaultUnscheduled: false,
    isHideClassInfo: false,
  });

  await defaultSettings.save();
};

const getSettings = async (userID: string) => {
  const settings = await UserSettings.findOne({
    userID,
  });

  return settings;
};

export { dbConnect, initSettings, getSettings };
