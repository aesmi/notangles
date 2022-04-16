import { Schema } from 'mongoose';

const UserSettingsSchema = new Schema({
  user_id: String,
  is12HourMode: Boolean,
  isDarkMode: Boolean,
  isSquareEdges: Boolean,
  isHideFullClasses: Boolean,
  isDefaultUnscheduled: Boolean,
  isHideClassInfo: Boolean,
});

export { UserSettingsSchema };
