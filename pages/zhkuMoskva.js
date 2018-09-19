const I = actor();

module.exports = {

    // setting locators
    elements: {
        paymentZKUMoscowTab: '[class="Tab__tab_23tRq"]',
    },

    elementsText: {
        zhkuMoskvaNameOfPage: 'Узнайте задолженность по ЖКУ в Москве',
        paymentZKUMoscowLink: 'Оплатить ЖКУ в Москве',
    },
    //Клик по вкладке Оплатить ЖКУ в Москве
    clickOnPaymantZKU(){
        I.waitForElement(this.elements.paymentZKUMoscowTab);
        I.click(this.elementsText.paymentZKUMoscowLink);
    },
    //Поиск названия страницы
    foundNameOfPage(){
        I.waitForText(this.elementsText.zhkuMoskvaNameOfPage);
        I.see(this.elementsText.zhkuMoskvaNameOfPage);
    },



};