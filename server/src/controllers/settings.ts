import { Response, Request } from 'express';
import { initSettings, getSettings } from '../database/database';

const getSettingsController = async (req: Request, res: Response) => {
  const _ = await initSettings();

  const userID = req.params.userID;

  if (!userID) return res.status(400).send('Missing user id');

  const settings = await getSettings(userID);
  res.send(JSON.stringify({ settings }));
};

export { getSettingsController };
