const I = actor();

module.exports = {

    // setting locators
    elements: {
        payerCodeZkuMoscowInput: '#payerCode',
        paymentZKUMoscowButton: '.ui-form__component button',
        erorMessageFieldRequired: '//div[contains(., "Поле обязательное")]',
        errorMessageFieldIncorrectly: '//div[contains(., "Поле неправильно заполнено")]',
        periodPaymentZKUMoscowField: '#period',
        errorMessageFieldPeriodIncorrectly: '//div[contains(., "Поле заполнено некорректно")]',
        insuranceInput: '.Input__valueContent_1Os4v.Input__valueContent_primary_3sxF0',
        errorMessageFieldInsuranceIncorrectly: '//div[contains(., "Поле заполнено неверно")]',
        summPaymentInput:'[data-qa-file="FormFieldSet"] [data-qa-file="StatelessInput"] input',
        errorMessageTooSmallNumberInSummPayment:'//div[contains(., "Минимум — 10")]',
    },

    elementsText: {
        paymentNameOfPageZKUMoskow: 'Оплатите ЖКУ в Москве',
    },
    //Оставление поле Код плательщика пустым
    inputEmptyPayerCode(){
        I.waitForElement(this.elements.payerCodeZkuMoscowInput);
        I.fillField(this.elements.payerCodeZkuMoscowInput, '');
    },
    //Нажатие на кнопку оплаты
    clickOnPaymentButton(){
        I.waitForElement(this.elements.paymentZKUMoscowButton);
        I.waitForVisible(this.elements.paymentZKUMoscowButton);
        I.click(this.elements.paymentZKUMoscowButton);
    },
    //Ожидание уведомления о неверно заполненном поле
    waitErrorNecessarilyField(){
        I.waitForElement(this.elements.erorMessageFieldRequired, 1);
    },
    //Ввод недостаточного количества цифр в поле код плательщика
    inputNotEnoughLengthPayerCode(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.payerCodeZkuMoscowInput, '1111');
    },
    //Ожидание уведомления о неверно заполненном поле
    waitErrorIncorrectlyField(){
        I.waitForElement(this.elements.errorMessageFieldIncorrectly)
    },
    //Ввод нечислового значения в поле код плательщика
    inputLettersInPayerCode(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.payerCodeZkuMoscowInput, 'fffff');
    },
    //Ввод цифр больше максимально допустимого в поле код плательщика
    inputManyNumbersInPayerCode(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.payerCodeZkuMoscowInput, '11111111118888');
    },
    //Проверка введенных символов в поле код плательщика
    quantityOfNumbersInPayerCode(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.seeInField(this.elements.payerCodeZkuMoscowInput, '1111111111');
        I.dontSeeInField(this.elements.payerCodeZkuMoscowInput, '1111111111888');
    },
    //Ввод недостточного количества цифр в поле Периоод оплаты
    inputNotEnoughLengthInPeriod(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.periodPaymentZKUMoscowField, '11111');
    },
    //Ожидание уведомления о неверно заполненном поле
    waitErrorIncorrectlyPeriodField(){
        I.waitForElement(this.elements.errorMessageFieldPeriodIncorrectly);
    },
    //Ввести несуществующую дату в поле Периоод оплаты
    inputNonExistentPeriod(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.periodPaymentZKUMoscowField, '132018');
    },
    //Вводд отрицательного числа в поле Сумма страховки
    inputNegativeNumberInSummInsurance(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.insuranceInput, '-2000');
    },
    //Ожидание уведомления о неверно заполненном поле
    waitErrorIncorrectlyFieldInsurance(){
        I.waitForElement(this.elements.errorMessageFieldInsuranceIncorrectly);
    },
    //Ввод формулы деления на 0 в поле Сумма страховки
    inputFormulaInInsurance(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.insuranceInput, '100/0');
    },
    //Ввод отрицательного числа в поле Сумма платежа
    inputNegativeNumberInSummPayment(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.summPaymentInput, '-33333');
    },
    //Ввод числа меньше допустимых 10 в поле Сумма платежа
    inputSmallNumberInSummPayment(){
        I.waitForText(this.elementsText.paymentNameOfPageZKUMoskow);
        I.fillField(this.elements.summPaymentInput, '5');
    },
    //Ожидание уведомления о неверно заполненном поле
    waitErrorTooSmallNumberInSummPayment(){
        I.waitForElement(this.elements.errorMessageTooSmallNumberInSummPayment);

    },



};