$(document).ready(function() {

	$('.effect').on('click', function() {
		let cupcake = this;
		let animation = 'grow';

		$(cupcake).addClass(animation);

		setTimeout(function() {
			$(cupcake).removeClass(animation);
		}, 1100);
	});

  // $('.start-button').mousedown(function() {
  //   $(this).attr('src', 'images/hd/start_active.png');
  // });
  //
  // $('.start-button').mouseup(function() {
  //   $(this).attr('src', 'images/start.png');
  // });

  //recibe evento al realizar click dentro del elemento que contiene la clase img
  $(".img").on('click', function() {
    //comprobamos si existe una imagen seleccionada
    if ( $(".img").hasClass("img-selected") ) {
      /*en el caso que exista ya una imagen seleccionada la eliminamos para que únicamente solo se tenga una imagen seleccionada*/
      $(".img").removeClass("img-selected");
    }
    //añadimos la clase de la imagen seleccionada
    $(this).addClass("img-selected");

  });

  let defaultCupcake = {
    flavor: "Red Velvet",
    icing: "Cream Cheese",
    topping: "Cookie Crums"
  }

  /*
  Helper function that return an object from local storage or a default value
  */
  function getObjectFromLocalstorage(key, default_value){
    let value = localStorage.getItem(key);
    if (value === null){
      return default_value;
    }
    // return JSON.parse(value);
    return value;
  }

  let flavor = getObjectFromLocalstorage('flavor', '*CHOOSE FLAVOR');
  let icing = getObjectFromLocalstorage('icing', '*CHOOSE ICING');
  let topping = getObjectFromLocalstorage('topping', '*CHOOSE TOPPING');

  function displayCupcake(flavor, icing, topping) {
    $('.flavor-detail').html(flavor.toUpperCase());
    $('.icing-detail').html(icing.toUpperCase());
    $('.topping-detail').html(topping.toUpperCase());
  }

  displayCupcake(flavor, icing, topping);

  $(".flavor").on('click', function() {
    // Grab alt attribute from the element
    let alt = $(this).attr('alt');
    // Update localStorage
    localStorage.setItem('flavor', alt);
    // Display new content
    // $('flavor-detail').removeClass('required');
    displayCupcake(alt, icing, topping);
  });

  $(".icing").on('click', function() {
    let alt = $(this).attr('alt');
    localStorage.setItem('icing', alt);
    // $('icing-detail').removeClass('required');
    displayCupcake(flavor, alt, topping);
  });

  $(".topping").on('click', function() {
    let alt = $(this).attr('alt');
    localStorage.setItem('topping', alt);
    // $('topping-detail').removeClass('required');
    displayCupcake(flavor, icing, alt);
  });

  /* Clear localStorage when the follow buttons are pressed */
  $('.start-button').on('click', function() {
    localStorage.clear();
  });

  $('.pay').on('click', function() {
    localStorage.clear();
  });

  $('.cancel-button').on('click', function() {
    localStorage.clear();
  });

  /* Checks if default values need to be set */
  $('.check').on('click', function(e) {
    if (flavor === '*CHOOSE FLAVOR') {
      // e.preventDefault();
      // $('.flavor-detail').addClass('required');
      localStorage.setItem('flavor', defaultCupcake.flavor);
    }

    if (icing === '*CHOOSE ICING') {
      // e.preventDefault();
      // $('.icing-detail').addClass('required');
      localStorage.setItem('icing', defaultCupcake.icing);
    }

    if (topping === '*CHOOSE TOPPING') {
      // e.preventDefault();
      // $('.topping-detail').addClass('required');
      localStorage.setItem('topping', defaultCupcake.topping);
    }

    displayCupcake(flavor, icing, topping);
  });
});
