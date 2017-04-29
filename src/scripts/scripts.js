// import interact from 'interact';

/*
  TODO:
    2. others disappear when a terrarium is clicked
*/

var $hello = 'hello';


$('.terrarium').each(function(){  
  $(this).click(function(){
    $(this).addClass('selected');
    $(this).siblings().hide();
  });
});

// console.log($('.terrarium'));

// const terrariums = Array.from(document.querySelectorAll('.terrarium'));

// terrariums.map((terrarium) => {
//   terrarium.on('click', () => { 
//     terrarium.addClass("selected")
//   }) 
// })







