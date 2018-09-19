const I = actor();

module.exports = {

    // setting locators
    elements: {
        imgOnPage: '[data-qa-file="IconWithText"]',
        inputInSearchField: '.Input__valueContent_1Os4v.Input__valueContent_alone_2RBHi.Input__valueContent_primary_3sxF0',
        firstLinkInDropDownList: '[data-qa-file="SearchSuggested"] [data-qa-file="SearchSuggested"] [data-qa-file="Text"]',

    },
    elementsText: {
        zkhLocator: 'ЖКХ',
        zkuMoskowLink: 'ЖКУ-Москва',
        zkuMoscow:'ЖКУ-Москва',
        sPiterburg:'Санкт-Петербург',
    },
    // клик на линк ЖКХ
      clickOnJKH(){
        I.waitForElement(this.elements.imgOnPage);
        I.click(this.elementsText.zkhLocator);
    },
    //клик на линк ЖКУ-Москва
    clickOnZKU_Moscow(){
        I.waitForText(this.elementsText.zkuMoskowLink);
        I.click(this.elementsText.zkuMoskowLink);
    },
    //Ввод текста в поле Поиск по платежам
    inputTextInSearchFieldMoscow() {
        I.waitForElement(this.elements.imgOnPage);
        I.fillField(this.elements.inputInSearchField, this.elementsText.zkuMoscow);
    },
    // Поиск в ниспадающим списке ЖКУ-Москва
    foundInDropDownListMoscow() {
        I.see(this.elementsText.zkuMoscow, this.elements.firstLinkInDropDownList);
    },
    //Клик по первой записи в ниспадающем списке
    clickFirstLinkInDropDownList() {
        I.click(this.elements.firstLinkInDropDownList);
    },
    //Ввод в Поиск по платежам Санкт-Петербург
    inputTextInSearchFieldPiter() {
        I.waitForElement(this.elements.imgOnPage);
        I.fillField(this.elements.inputInSearchField, this.elementsText.sPiterburg);
    },
    //Проверка отсутствия в ниспадающем списке ЖКУ-Москва
    foundInDropDownListNoMoscow() {
        I.waitForElement(this.elements.imgOnPage);
        I.dontSee(this.elementsText.zkuMoscow, this.elements.firstLinkInDropDownList);
    },
};