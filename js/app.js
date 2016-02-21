angular.module('app', [])
  .controller('TodoListController', function() {
    var app = this;
    // app.test=  "hello"
    app.showFood = false
    app.pageFood = 1
    app.showDrink = true

    $('.food').addClass( "active" );
    $('.drink').removeClass("active")
    app.food = function(){
      app.showFood = false
      app.showDrink = true
      $('.food').addClass( "active" )
      $('.drink').removeClass( "active")
    }

    app.drink = function(){
      app.showFood = true
      app.showDrink = false
      $('.drink').addClass("active")
      $('.food').removeClass( "active")
    }

    app.nextPage = function(page){
      app.pageFood = parseInt(page)
      console.log('hhh')
    }
    app.addFood = function(img,title,price){
      console.log(img,title,price);

    }
    app.addDrink = function(img,title,price){
        console.log(img,title,price);
    }



  })
