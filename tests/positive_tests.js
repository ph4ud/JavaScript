module.exports = {
  // проверяем, что при открытии отображаются все ожидаемые элементы
  'positive test' : function (browser) { 
    browser
      .url('https://survey.testlab.firmglobal.net/wix/56789/p8237106.aspx')
      .pause(2000)
      .assert.containsText('div[class="cf-question cf-question--info"]', 'It\'s a simple QA skills assessment survey')
      .assert.containsText('div[class="cf-question cf-question--hrs-single"]', 'Please rate your QA skills')
      .assert.containsText('div[class="cf-question cf-question--open"]', 'Explain why you rated it so')
      .assert.elementPresent('button[class="cf-navigation__button cf-navigation-next"]')
  },  
  // проверяем, что при заполнении валидными значениями получим позитивное прохождение опроса
  'positive test2' : function (browser) { 
    browser  
      .click('span[id="q1_9"]')
      .setValue('textarea[id="q2_input"]', 'I\'m great engineer')
      .click('button[class="cf-navigation__button cf-navigation-next"]')
      .pause(2000)
      .assert.containsText('div[id="Internal_Finished"]', 'Thank you very much for your time.')
      .assert.elementPresent('button[class="cf-navigation__button cf-navigation-ok"]')
  },
  // проверяем ввод короткого значения в текстовом поле
  'positive test3' : function (browser) { 
    browser
      .url('https://survey.testlab.firmglobal.net/wix/56789/p8237106.aspx')
      .pause(2000)
      .click('span[id="q1_7"]')
      .setValue('textarea[id="q2_input"]', 'I')
      .click('button[class="cf-navigation__button cf-navigation-next"]')
      .pause(2000)
      .assert.containsText('div[id="Internal_Finished"]', 'Thank you very much for your time.')
      .assert.elementPresent('button[class="cf-navigation__button cf-navigation-ok"]')
  },
  // проверяем ввод короткого значения в текстовом поле
  'positive test4' : function (browser) { 
    browser
      .url('https://survey.testlab.firmglobal.net/wix/56789/p8237106.aspx')
      .pause(2000)
      .click('span[id="q1_2"]')
      .setValue('textarea[id="q2_input"]', 'Vivamus molestie erat ac ligula convallis, sed pellentesque eros varius. Donec tincidunt non mi at interdum. Sed posuere vulputate rutrum. Aenean nulla eros, venenatis non iaculis non, eleifend in risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at adipiscing nibh. Cras a sapien non nisl gravida laoreet. Morbi enim eros, faucibus ac pharetra nec, mattis eget elit. Nam pulvinar odio eu odio consequat venenatis. Proin aliquam nunc felis, non eleifend sem condimentum quis. Phasellus ornare tellus orci, sed ornare diam condimentum tristique. Cras ornare velit ac ullamcorper rhoncus. Pellentesque pellentesque eget ipsum ut elementum. In ac sapien turpis. Pellentesque venenatis felis et mollis luctus. Vivamus molestie erat ac ligula convallis, sed pellentesque eros varius. Donec tincidunt non mi at interdum. Aliquam sed consectetur massa. Aenean ut mi dignissim, congue ipsum in, venenatis tortor. Vivamus at dignissim erat, sed pellentesque mi. Vivamus molestie erat ac ligula convallis, sed pellentesque eros varius. Nunc at turpis massa. Morbi enim eros, faucibus ac pharetra nec, mattis eget elit. Donec nec posuere risus. Quisque ultricies auctor neque aliquet ullamcorper. Ut dignissim augue quis varius gravida. Pellentesque pellentesque eget ipsum ut elementum. Aliquam erat volutpat. Vivamus iaculis dignissim est, at lacinia enim adipiscing a. Aliquam velit enim, dapibus eu purus at, tempor tristique ligula. Integer ultrices enim nisi, condimentum suscipit metus varius vitae. Vivamus molestie erat ac ligula convallis, sed pellentesque eros varius. Donec nec posuere risus. Aenean nulla eros, venenatis non iaculis non, eleifend in risus. Vivamus at dignissim erat, sed pellentesque mi. Donec nec posuere risus. Suspendisse fringilla ligula aliquam neque faucibus, vel consectetur dolor sollicitudin. Vivamus iaculis dignissim est, at lacinia enim adipiscing a. Nam pulvinar odio eu odio consequat venenatis. Vivamus molestie erat ac ligula convallis, sed pellentesque eros varius. Integer ac interdum arcu, eu pellentesque velit. Morbi sed libero eget erat malesuada pellentesque. In ac nunc est. Vivamus iaculis dignissim est, at lacinia enim adipiscing a. Aenean ut mi dignissim, congue ipsum in, venenatis tortor. Aenean nulla eros, venenatis non iaculis non, eleifend in risus. Vivamus molestie erat ac ligula convallis, sed pellentesque eros varius. Integer ac interdum arcu, eu pellentesque velit. Aenean sed est tristique, congue dolor ut, facilisis risus. Quisque ultricies auctor neque aliquet ullamcorper.')
      .click('button[class="cf-navigation__button cf-navigation-next"]')
      .pause(2000)
      .assert.containsText('div[id="Internal_Finished"]', 'Thank you very much for your time.')
      .assert.elementPresent('button[class="cf-navigation__button cf-navigation-ok"]')
  },
  // проверяем можно ли ввести кириллицу в текстовое поле
  'positive test5' : function (browser) { 
    browser
      .url('https://survey.testlab.firmglobal.net/wix/56789/p8237106.aspx')
      .pause(2000)
      .click('span[id="q1_5"]')
      .setValue('textarea[id="q2_input"]', 'Я классный инженер')
      .click('button[class="cf-navigation__button cf-navigation-next"]')
      .pause(2000)
      .assert.containsText('div[id="Internal_Finished"]', 'Thank you very much for your time.')
      .assert.elementPresent('button[class="cf-navigation__button cf-navigation-ok"]')
      .end();
  }
};