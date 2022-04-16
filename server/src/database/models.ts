import * as mongoose from 'mongoose';
import { UserSettingsSchema } from './schemas';

const UserSettings = mongoose.model('UserSettings', UserSettingsSchema);

export { UserSettings };
