import Joi from "npm:joi";

const user = Joi.object({
  name: Joi.string().required().max(20),
  email: Joi.string().email(),
  password: Joi.string().required(),
});

export default user;
