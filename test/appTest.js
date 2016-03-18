var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .viewport(1200, 1000)
  .goto('http://localhost:8080/menu.html')
  .wait(2000)
  .click('#food1')
  .wait(1000)
  .click('#food2')
  .wait(1000)
  .click('#food3')
  .wait(1000)
  .click('.drink')
  .wait(1000)
  .click('#drink2')
  .wait(1000)
  .click('#drink1')
  .wait(1000)
  .evaluate(function () {
    return document.querySelector('#totalPrice').innerHTML
  })
  .end()
  .then(function (result) {
    if (parseInt(result) === 189) {
      console.log(true)
    } else {
      console.log('false : result = ', result)
    }
  })
