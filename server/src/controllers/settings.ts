import { Response, Request } from 'express';
import { dbConnect, initSettings, getSettings } from '../database/database';

const getSettingsController = async (req: Request, res: Response) => {
  dbConnect()
    .then(() => {
      return initSettings();
    })
    .then(() => {
      res.send(JSON.stringify({ settings: getSettings() }));
    })
    .catch((err) => console.log(err));
};

export { getSettingsController };
