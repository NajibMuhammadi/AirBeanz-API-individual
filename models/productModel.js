import nedb from 'nedb-promises';
import Joi from 'joi';

export const productSchema = Joi.object({
    _id: Joi.string().max(30),
    id: Joi.number().required(),
    desc: Joi.string().max(30).required(),
    title: Joi.string().max(30).required(),
    price: Joi.number().positive().required(),
    estimatedTimeInMinutes: Joi.number().positive().required(),
});

export const productDb = nedb.create({
    filename: 'config/products.db',
    autoload: true
});

export const productAddedSchema = Joi.object({
    desc: Joi.string().min(10).required(),
    title: Joi.string().min(5).required(),
    price: Joi.number().positive().required()
});
