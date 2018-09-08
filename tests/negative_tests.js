module.exports = {
  // проверяем можно ли выбрать больше одной оценки
  'negative test' : function (browser) { 
    browser
      .url('https://survey.testlab.firmglobal.net/wix/56789/p8237106.aspx')
      .pause(2000)
      .click('span[id="q1_1"]')
      .click('span[id="q1_10"]')
      .assert.cssClassPresent('span[id="q1_10"]', 'cf-hrs-single__scale-item--selected')
      .assert.cssClassNotPresent('span[id="q1_1"]', 'cf-hrs-single__scale-item--selected')
  },
  // проверяем получение ошибки при заполнении только блока оценок
  'negative test2' : function (browser) { 
    browser
      .pause(2000)
      .click('span[id="q1_3"]')
      .click('button[class="cf-navigation__button cf-navigation-next"]')
      .pause(2000)
      .assert.cssClassNotPresent('div[class="cf-toast cf-toast--error"]', 'cf-toast--hidden')
      .assert.containsText('div[class="cf-toast cf-toast--error"]', 'Something went wrong!')
      .assert.containsText('div[class="cf-question cf-question--open cf-question--error"]', 'Please provide an answer')
  },
    // проверяем получение ошибки при заполнении только текстового блока
  'negative test3' : function (browser) { 
    browser
      .url('https://survey.testlab.firmglobal.net/wix/56789/p8237106.aspx')
      .pause(2000)
      .setValue('textarea[id="q2_input"]', 'I\'m great engineer')
      .click('button[class="cf-navigation__button cf-navigation-next"]')
      .assert.cssClassNotPresent('div[class="cf-toast cf-toast--error"]', 'cf-toast--hidden')
      .assert.containsText('div[class="cf-toast cf-toast--error"]', 'Something went wrong!')
      .assert.containsText('div[class="cf-question cf-question--hrs-single cf-question--error"]', 'Please select an answer')
  },
    // проверяем получение ошибки при отправке пустой формы
    'negative test4' : function (browser) { 
    browser
      .url('https://survey.testlab.firmglobal.net/wix/56789/p8237106.aspx')
      .pause(2000)
      .click('button[class="cf-navigation__button cf-navigation-next"]')
      .assert.cssClassNotPresent('div[class="cf-toast cf-toast--error"]', 'cf-toast--hidden')
      .assert.containsText('div[class="cf-toast cf-toast--error"]', 'Something went wrong!')
      .assert.containsText('div[class="cf-question cf-question--hrs-single cf-question--error"]', 'Please select an answer')
      .assert.containsText('div[class="cf-question cf-question--open cf-question--error"]', 'Please provide an answer')
      .end();
  }
};
