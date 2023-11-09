import Joi from "npm:joi@17.11.0";

const user = Joi.object({
  name: Joi.string().required().max(20),
  email: Joi.string().email(),
  password: Joi.string().required(),
  refreshToken: Joi.string().allow(null),
});

export default user;
