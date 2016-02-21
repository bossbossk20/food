/* global angular */
/* global $ */
angular.module('app', [])
  .controller('TodoListController', function () {
    var app = this
    // app.test=  "hello"
    app.showFood = false
    app.pageFood = 1
    app.showDrink = true
    app.foodSelected = []
    app.drinkSelected = []
    app.yourOrder = false

    $('.food').addClass('active')
    $('.drink').removeClass('active')

    app.food = function () {
      app.showFood = false
      app.showDrink = true
      $('.food').addClass('active')
      $('.drink').removeClass('active')
    }

    app.drink = function () {
      app.showFood = true
      app.showDrink = false
      $('.drink').addClass('active')
      $('.food').removeClass('active')
    }

    app.nextPage = function (page) {
      app.pageFood = page
      console.log('hhh')
    }

    app.addFood = function (img, title, price) {
      app.yourOrder = true
      var jsonFood = {
        'img': img,
        'title': title,
        'price': price
      }
      app.foodSelected.push(jsonFood)
      sumOfProducts()
    }

    app.addDrink = function (img, title, price) {
      app.yourOrder = true
      var jsonDrink = {
        'img': img,
        'title': title,
        'price': price
      }
      app.drinkSelected.push(jsonDrink)
      sumOfProducts()
    }

    app.delFood = function (index) {
      app.foodSelected.splice(index, 1)
      if (app.foodSelected.length === 0 && app.drinkSelected.length === 0) {
        app.yourOrder = false
      }
      sumOfProducts()
    }

    app.delDrink = function (index) {
      app.drinkSelected.splice(index, 1)
      sumOfProducts()
    }

    function sumOfProducts () {
      app.sumPrice = [0, 0]
      app.discount = [0, '']
      app.total = 0
      for (var i = 0;i < app.foodSelected.length;i++) {
        app.sumPrice[0] += app.foodSelected[i].price
      }
      for (var n = 0;n < app.drinkSelected.length;n++) {
        app.sumPrice[1] += app.drinkSelected[n].price
      }
      if (app.sumPrice[0] + app.sumPrice[1] >= 100 && app.sumPrice[0] + app.sumPrice[1] < 200) {
        app.discount[0] = 10
        app.discount[1] = 'Discount for food'
        app.total = (app.sumPrice[0] * 0.9) + app.sumPrice[1]
      }else if (app.sumPrice[0] + app.sumPrice[1] >= 200) {
        app.discount[0] = 10
        app.discount[1] = 'Discount for food and drink'
        app.total = (app.sumPrice[0] + app.sumPrice[1]) * 0.9
      } else {
        app.total = app.sumPrice[0] + app.sumPrice[1]
      }
    }
  })
