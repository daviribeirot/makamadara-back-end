import Joi from 'joi';

export const attendanceSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});