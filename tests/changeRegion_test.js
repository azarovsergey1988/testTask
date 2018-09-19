const home = require('../pages/home');
const payments = require('../pages/payments');
const kommunalniePlatezhi = require('../pages/kommunalniePlatezhi');
const zhkuMoskva = require('../pages/zhkuMoskva');
const zhkuMoskvaOplata = require('../pages/zhkuMoskvaOplata');
Feature('Проверка смены региона');

Scenario('Переход на страницу платежей через поиск на странице платижей', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.inputTextInSearchFieldMoscow();
    payments.foundInDropDownListMoscow();
    payments.clickFirstLinkInDropDownList();
    zhkuMoskva.foundNameOfPage();
});

Scenario('Отсутствие ЖКУ-Москва при поиске Санкт-Петербург на странице платижей', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.inputTextInSearchFieldPiter();
    payments.foundInDropDownListNoMoscow();
});