import { Schema } from 'mongoose';

const UserSettingsSchema = new Schema({
  userID: { type: String, unique: true, required: true },
  is12HourMode: { type: Boolean, required: true },
  isDarkMode: { type: Boolean, required: true },
  isSquareEdges: { type: Boolean, required: true },
  isHideFullClasses: { type: Boolean, required: true },
  isDefaultUnscheduled: { type: Boolean, required: true },
  isHideClassInfo: { type: Boolean, required: true },
});

export { UserSettingsSchema };
