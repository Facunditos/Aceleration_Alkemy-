'use strict';
const {check}= require('express-validator');
const {validate}=require('../util/validateHelper')

const validateUpdateContacto = [
    check('facebook').isString().isURL().notEmpty(),
    check('instagram').isString().isURL().notEmpty(),
    check('linkedin').isString().isURL().notEmpty(),

    (req, res, next) => validate(req, res, next)
]

const validateCreateContacto = [
    check('name').notEmpty().withMessage('El nombre es requerido').bail().isString(),
    check('email').notEmpty().withMessage('El email es requerido').bail().isEmail(),
]

module.exports = { validateUpdateContacto, validateCreateContacto }