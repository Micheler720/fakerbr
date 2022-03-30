
import { fakerBr } from '../index';
import { expect } from 'chai';

describe('Initial test', () => {
  it('Import', () => {

    // expect(utilsBr.isPresent).to.exist;
    // expect(utilsBr.isArray).to.exist;
    // expect(utilsBr.isString).to.exist;
    // expect(utilsBr.isNumber).to.exist;
    // expect(utilsBr.isNil).to.exist;
    // expect(utilsBr.processCaretTraps).to.exist;
    // expect(utilsBr.allNumbersAreSame).to.exist;
    // expect(utilsBr.getAllDigits).to.exist;
    // expect(utilsBr.getAllWords).to.exist;
    // expect(utilsBr.currencyToNumber).to.exist;
    // expect(utilsBr.numberToCurrency).to.exist;
    // expect(utilsBr.slugify).to.exist;
    // expect(utilsBr.fillString).to.exist;
    // expect(utilsBr.randArray).to.exist;
    // expect(utilsBr.rand).to.exist;
    // expect(utilsBr.randomNumber).to.exist;
    // expect(utilsBr.randomLetter).to.exist;
    // expect(utilsBr.randomLetterOrNumber).to.exist;
    // expect(utilsBr.getSpecialProperty).to.exist;

    // expect(utilsBr.MASKS).to.exist;

    expect(fakerBr.cep).to.exist;
    expect(fakerBr.cnpj).to.exist;
    expect(fakerBr.cpf).to.exist;
    // expect(fakerBr.currency).to.exist;
    expect(fakerBr.inscricaoestadual).to.exist;
    expect(fakerBr.porcentagem).to.exist;
    expect(fakerBr.rg).to.exist;
    expect(fakerBr.placa).to.exist;
    expect(fakerBr.telefone).to.exist;
    expect(fakerBr.time).to.exist;
    expect(fakerBr.titulo).to.exist;
  });
});