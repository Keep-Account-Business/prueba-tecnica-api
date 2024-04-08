import Joi from "joi";

export const validateProduct = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().valid(
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"
      ).required().messages({
        "any.only": "Invalid category",
      }),
    image: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};