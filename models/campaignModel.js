import nedb from 'nedb-promises';
import Joi from 'joi';

export const campaignDb = nedb.create({
    filename: 'config/campaigns.db',
    autoload: true
});

export const campaignAddedschema = Joi.object({
    price: Joi.number().positive().required(),
    prod1: Joi.string().required(),
    prod2: Joi.string().required()
});