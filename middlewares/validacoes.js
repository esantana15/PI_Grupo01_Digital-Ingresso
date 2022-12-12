const path = require ('path');
const {check, body} = require("express-validator");

module.exports = [
    body("nome")
        .notEmpty().withMessage("Favor Insira seu nome completo"),
    body('cpf')
        .notEmpty().withMessage('Favor Insira seu CPF'),
    body('data')
        .notEmpty().withMessage('Favor Insira sua data de nascimento'),
    body('sexo')
        .notEmpty().withMessage('Favor Insira sua rua'),
    body('rua')
        .notEmpty().withMessage('Favor Insira sua senha'),
    body('numero')
        .notEmpty().withMessage('Favor Insira o número da residencia'),
    body('complemento')
        .notEmpty().withMessage('Favor Insira seu complemento'),
    body('bairro')
        .notEmpty().withMessage('Favor Insira seu bairro'),
     body('cidade')
        .notEmpty().withMessage('Favor Insira sua cidade'),
    body('estado')
        .notEmpty().withMessage('Favor Insira uma UF'),
    body('pais')
        .notEmpty().withMessage('Favor Insira o país'),
    body('pais')
        .notEmpty().withMessage('Favor Insira seu CEP'),

];

return true