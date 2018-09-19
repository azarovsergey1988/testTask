const home = require('../pages/home');
const payments = require('../pages/payments');
const kommunalniePlatezhi = require('../pages/kommunalniePlatezhi');
const zhkuMoskva = require('../pages/zhkuMoskva');
const zhkuMoskvaOplata = require('../pages/zhkuMoskvaOplata');
Feature('Проверка валидации формы оплаты ЖКУ');



Scenario('Пустая форма оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputEmptyPayerCode();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorNecessarilyField();
});

Scenario('Недостаточное количество символов в коде плательщика на форме оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputNotEnoughLengthPayerCode();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorIncorrectlyField();
 });

Scenario('Ввод нечисловых значений в коде плательщика на форме оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputLettersInPayerCode();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorNecessarilyField();
});

Scenario('Ввод большого количества чисел в коде плательщика на форме оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputManyNumbersInPayerCode();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.quantityOfNumbersInPayerCode();
});
Scenario('Ввод недостаточного количества чисел в поле периода оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputNotEnoughLengthInPeriod();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorIncorrectlyPeriodField();
 });
Scenario('Ввод несуществующей даты в поле периода оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputNonExistentPeriod();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorIncorrectlyPeriodField();
});
Scenario('Ввод отрицательного числа в поле сумма страховки на странице оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputNegativeNumberInSummInsurance();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorIncorrectlyFieldInsurance();
});
Scenario('Ввод формулы в поле сумма страховки на странице оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputFormulaInInsurance();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorIncorrectlyFieldInsurance();

});
Scenario('Ввод отрицательного числа в поле сумма платежа на странице оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputNegativeNumberInSummPayment();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorIncorrectlyFieldInsurance();
});
Scenario('Ввод числа меньше 10 в поле сумма платежа на странице оплаты ЖКУ', (I) => {
    home.goToHomePage();
    home.clickOnPayments();
    payments.clickOnJKH();
    kommunalniePlatezhi.clickOnChangeRegion();
    kommunalniePlatezhi.clickOnFirstLink();
    payments.clickOnZKU_Moscow();
    zhkuMoskva.clickOnPaymantZKU();
    zhkuMoskvaOplata.inputSmallNumberInSummPayment();
    zhkuMoskvaOplata.clickOnPaymentButton();
    zhkuMoskvaOplata.waitErrorTooSmallNumberInSummPayment();
});

