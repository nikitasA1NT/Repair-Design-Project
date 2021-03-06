/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  // const modalDialog = document.querySelector('.modal__dialog');
  const switchModal = () => {
    modal.classList.toggle('modal_visible');
  }

  // закрытие/открытие с помощью кликов
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
});
*/

$(document).ready(function () {
  // закртыие и открытие модального окна кликами мыши
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function () {
    modal.removeClass('modal_visible');
  });
  $(window).on('keyup', function(e) {
    if (e.keyCode == 27) {
      modal.removeClass('modal_visible');
    }
  });
  modal.on('click', function(e){
    if ($(e.target).removeClass('modal_visible')) {
        // клик внутри элемента 
        return;
    }
  });



  // кнопка наверх
  var button = $('.up-button');
  button.css('display', 'none');
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });	 
  button.on('click', function(){
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });



  // первый слайдер
  var mySwiper1 = new Swiper ('.swiper-container-1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-1',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
  });
  var next1 = $('.swiper-button-next-1');
  var prev1 = $('.swiper-button-prev-1');
  var bullets1 = $('.swiper-pagination-1');

  next1.css('left', prev1.width() + 25 + bullets1.width() + 13);
  bullets1.css('left', prev1.width() + 25);


  
  // второй слайдер
  var mySwiper2 = new Swiper ('.swiper-container-2', {
    loop: true,
    direction: 'vertical'
  });

  // мобильный второй слайдер
  var mySwiper2mobile = new Swiper ('.swiper-container-2_mobile', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-2_mobile',
      prevEl: '.swiper-button-prev-2_mobile',
    }
  });

  // для работы перелистывания слайдов но нажатию на элементы списка
  $('#fantasies-link-1').on('click', function () {
    mySwiper2[0].slideToLoop(0);
    mySwiper2[1].slideToLoop(0);
    $('#fantasies-link-1').addClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-2').on('click', function () {
    mySwiper2[0].slideToLoop(1);
    mySwiper2[1].slideToLoop(1);
    $('#fantasies-link-2').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-3').on('click', function () {
    mySwiper2[0].slideToLoop(2);
    mySwiper2[1].slideToLoop(2);
    $('#fantasies-link-3').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-4').on('click', function () {
    mySwiper2[0].slideToLoop(3);
    mySwiper2[1].slideToLoop(3);
    $('#fantasies-link-4').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-5').on('click', function () {
    mySwiper2[0].slideToLoop(4);
    mySwiper2[1].slideToLoop(4);
    $('#fantasies-link-5').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-6').on('click', function () {
    mySwiper2[0].slideToLoop(5);
    mySwiper2[1].slideToLoop(5);
    $('#fantasies-link-6').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-7').on('click', function () {
    mySwiper2[0].slideToLoop(6);
    mySwiper2[1].slideToLoop(6);
    $('#fantasies-link-7').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-8').on('click', function () {
    mySwiper2[0].slideToLoop(7);
    mySwiper2[1].slideToLoop(7);
    $('#fantasies-link-8').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-9').on('click', function () {
    mySwiper2[0].slideToLoop(8);
    mySwiper2[1].slideToLoop(8);
    $('#fantasies-link-9').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-10').on('click', function () {
    mySwiper2[0].slideToLoop(9);
    mySwiper2[1].slideToLoop(9);
    $('#fantasies-link-10').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-11').removeClass('fantasies__words_active');
  });
  $('#fantasies-link-11').on('click', function () {
    mySwiper2[0].slideToLoop(10);
    mySwiper2[1].slideToLoop(10);
    $('#fantasies-link-11').addClass(' fantasies__words_active');
    $('#fantasies-link-1').removeClass('fantasies__words_active');
    $('#fantasies-link-2').removeClass('fantasies__words_active');
    $('#fantasies-link-3').removeClass('fantasies__words_active');
    $('#fantasies-link-4').removeClass('fantasies__words_active');
    $('#fantasies-link-5').removeClass('fantasies__words_active');
    $('#fantasies-link-6').removeClass('fantasies__words_active');
    $('#fantasies-link-7').removeClass('fantasies__words_active');
    $('#fantasies-link-8').removeClass('fantasies__words_active');
    $('#fantasies-link-9').removeClass('fantasies__words_active');
    $('#fantasies-link-10').removeClass('fantasies__words_active');
  });



  // третий слайдер
  var mySwiper3 = new Swiper ('.swiper-container-3', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-3',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next-3',
      prevEl: '.swiper-button-prev-3',
    },
  });

  var next3 = $('.swiper-button-next-3');
  var prev3 = $('.swiper-button-prev-3');
  var bullets3 = $('.swiper-pagination-3');

  next3.css('left', prev3.width() + 25 + bullets3.width() + 13);
  bullets3.css('left', prev3.width() + 25);

  // работа кнопок для перехода к определенным слайдам
  $('#steps-link-1').on('click', function () {
    mySwiper3[0].slideToLoop(0);
    mySwiper3[1].slideToLoop(0);
    $('#steps-link-1').addClass('steps__link_active');
    $('#steps-link-2').removeClass('steps__link_active');
    $('#steps-link-3').removeClass('steps__link_active');
    $('#steps-link-4').removeClass('steps__link_active');
    $('#steps-link-5').removeClass('steps__link_active');
    $('#steps-link-6').removeClass('steps__link_active');
    $('.steps__count').text('1/6');
  });
  $('#steps-link-2').on('click', function () {
    mySwiper3[0].slideToLoop(1);
    mySwiper3[1].slideToLoop(1);
    $('#steps-link-2').addClass('steps__link_active');
    $('#steps-link-1').removeClass('steps__link_active');
    $('#steps-link-3').removeClass('steps__link_active');
    $('#steps-link-4').removeClass('steps__link_active');
    $('#steps-link-5').removeClass('steps__link_active');
    $('#steps-link-6').removeClass('steps__link_active');
    $('.steps__count').text('2/6');
  });
  $('#steps-link-3').on('click', function () {
    mySwiper3[0].slideToLoop(2);
    mySwiper3[1].slideToLoop(2);
    $('#steps-link-3').addClass('steps__link_active');
    $('#steps-link-1').removeClass('steps__link_active');
    $('#steps-link-2').removeClass('steps__link_active');
    $('#steps-link-4').removeClass('steps__link_active');
    $('#steps-link-5').removeClass('steps__link_active');
    $('#steps-link-6').removeClass('steps__link_active');
    $('.steps__count').text('3/6');
  });
  $('#steps-link-4').on('click', function () {
    mySwiper3[0].slideToLoop(3);
    mySwiper3[1].slideToLoop(3);
    $('#steps-link-4').addClass('steps__link_active');
    $('#steps-link-1').removeClass('steps__link_active');
    $('#steps-link-2').removeClass('steps__link_active');
    $('#steps-link-3').removeClass('steps__link_active');
    $('#steps-link-5').removeClass('steps__link_active');
    $('#steps-link-6').removeClass('steps__link_active');
    $('.steps__count').text('4/6');
  });
  $('#steps-link-5').on('click', function () {
    mySwiper3[0].slideToLoop(4);
    mySwiper3[1].slideToLoop(4);
    $('#steps-link-5').addClass('steps__link_active');
    $('#steps-link-1').removeClass('steps__link_active');
    $('#steps-link-2').removeClass('steps__link_active');
    $('#steps-link-3').removeClass('steps__link_active');
    $('#steps-link-4').removeClass('steps__link_active');
    $('#steps-link-6').removeClass('steps__link_active');
    $('.steps__count').text('5/6');
  });
  $('#steps-link-6').on('click', function () {
    mySwiper3[0].slideToLoop(5);
    mySwiper3[1].slideToLoop(5);
    $('#steps-link-6').addClass('steps__link_active');
    $('#steps-link-1').removeClass('steps__link_active');
    $('#steps-link-2').removeClass('steps__link_active');
    $('#steps-link-3').removeClass('steps__link_active');
    $('#steps-link-4').removeClass('steps__link_active');
    $('#steps-link-5').removeClass('steps__link_active');
    $('.steps__count').text('6/6');
  });

  $('.steps__arrow').on('click', function() {
    if (mySwiper3[0].realIndex == 0) {
      $('#steps-link-1').addClass('steps__link_active');
      $('#steps-link-2').removeClass('steps__link_active');
      $('#steps-link-3').removeClass('steps__link_active');
      $('#steps-link-4').removeClass('steps__link_active');
      $('#steps-link-5').removeClass('steps__link_active');
      $('#steps-link-6').removeClass('steps__link_active');
      $('.steps__count').text('1/6');
    } else if (mySwiper3[0].realIndex == 1) {
      $('#steps-link-2').addClass('steps__link_active');
      $('#steps-link-1').removeClass('steps__link_active');
      $('#steps-link-3').removeClass('steps__link_active');
      $('#steps-link-4').removeClass('steps__link_active');
      $('#steps-link-5').removeClass('steps__link_active');
      $('#steps-link-6').removeClass('steps__link_active');
      $('.steps__count').text('2/6');
    } else if (mySwiper3[0].realIndex == 2) {
      $('#steps-link-3').addClass('steps__link_active');
      $('#steps-link-1').removeClass('steps__link_active');
      $('#steps-link-2').removeClass('steps__link_active');
      $('#steps-link-4').removeClass('steps__link_active');
      $('#steps-link-5').removeClass('steps__link_active');
      $('#steps-link-6').removeClass('steps__link_active');
      $('.steps__count').text('3/6');
    } else if (mySwiper3[0].realIndex == 3) {
      $('#steps-link-4').addClass('steps__link_active');
      $('#steps-link-1').removeClass('steps__link_active');
      $('#steps-link-2').removeClass('steps__link_active');
      $('#steps-link-3').removeClass('steps__link_active');
      $('#steps-link-5').removeClass('steps__link_active');
      $('#steps-link-6').removeClass('steps__link_active');
      $('.steps__count').text('4/6');
    } else if (mySwiper3[0].realIndex == 4) {
      $('#steps-link-5').addClass('steps__link_active');
      $('#steps-link-1').removeClass('steps__link_active');
      $('#steps-link-2').removeClass('steps__link_active');
      $('#steps-link-3').removeClass('steps__link_active');
      $('#steps-link-4').removeClass('steps__link_active');
      $('#steps-link-6').removeClass('steps__link_active');
      $('.steps__count').text('5/6');
    } else if (mySwiper3[0].realIndex == 5) {
      $('#steps-link-6').addClass('steps__link_active');
      $('#steps-link-1').removeClass('steps__link_active');
      $('#steps-link-2').removeClass('steps__link_active');
      $('#steps-link-3').removeClass('steps__link_active');
      $('#steps-link-4').removeClass('steps__link_active');
      $('#steps-link-5').removeClass('steps__link_active');
      $('.steps__count').text('6/6');
    }
  });



  // для срабатывания анимации при доскроллинге до элемента
  if ($(window).width() > '992') {
    $(window).scroll(function() {
      $('.no-animated').each(function () {
          var elementPos = $(this).offset().top;
  
          var topOfWindow = $(window).scrollTop();
          if (elementPos < topOfWindow + $(window).innerHeight()) {
              $(this).removeClass("no-animated");
          }
      });
    });
  }



  // модальное окно благадарности после отправки формы
  var modalSuccess = $('.modal-success'),
      modalSuccessCloseBtn = $('.modal-success__close');
  modalSuccessCloseBtn.on('click', function () {
    modalSuccess.removeClass('modal-success_visible');
  });
  $(window).on('keyup', function(e) {
    if (e.keyCode == 27) {
      modalSuccess.removeClass('modal-success_visible');
    }
  });
  modalSuccess.on('click', function(e){
    if ($(e.target).removeClass('modal-success_visible')) {
        // клик внутри элемента 
        return;
    }
  });



  // форма модального окна
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    },
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть длиннее 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Email обязателен",
        email: "Email должен быть формате \"name@domain.com\""
      },
      policyCheckbox: "Соглашение обязательно"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "modal.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal_visible');
          modalSuccess.addClass('modal-success_visible');
          ym(62062837,'reachGoal','application');
        },
        error: function (response) {
          console.error("Ошибка запроса: " + response);
        }
      });
    }
  });

  // форма секции онлайн контроль
  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      policyCheckbox: "required"
    },
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть длиннее 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      policyCheckbox: "Соглашение обязательно"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "control-form.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal_visible');
          modalSuccess.addClass('modal-success_visible');
          ym(62062837,'reachGoal','application');
        },
        error: function (response) {
          console.error("Ошибка запроса: " + response);
        }
      });
    }
  });

  // форма подвала
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      userQuestion: {
        required: true,
        minlength: 15,
        maxlength: 60
      },
      policyCheckbox: "required"
    },
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть длиннее 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: {
        required: "Вопрос обязателен",
        minlength: "Минимальная длина вопроса длиннее 15 символов",
        maxlength: "Максимальная длина вопроса не длиннее 60 символов"
      },
      policyCheckbox: "Соглашение обязательно"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "footer.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal_visible');
          modalSuccess.addClass('modal-success_visible');
          ym(62062837,'reachGoal','application');
        },
        error: function (response) {
          console.error("Ошибка запроса: " + response);
        }
      });
    }
  });

  // форма секции вызова замерщика
  $('.measure__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    },
    // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть длиннее 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Email обязателен",
        email: "Email должен быть формате \"name@domain.com\""
      },
      policyCheckbox: "Соглашение обязательно"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "measure.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal_visible');
          modalSuccess.addClass('modal-success_visible');
          ym(62062837,'reachGoal','application');
        },
        error: function (response) {
          console.error("Ошибка запроса: " + response);
        }
      });
    }
  });



  // маска для номера телефона
  $('[type=tel').mask('+7 (000) 000-00-00', {placeholder: "Ваш номер телефона:"});



  // подключение карты от яндекс
  // ymaps.ready(function () {
  //   var myMap = new ymaps.Map('map', {
  //     center: [47.244729, 39.723187],
  //     zoom: 17,
  //     controls: ["typeSelector", "zoomControl"]
  //   }, {
  //     searchControlProvider: 'yandex#search'
  //   }),

  //   // Создаём макет содержимого.
  //   MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //   ),

  //   myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //     hintContent: 'Наш офис',
  //     balloonContent: 'Вход со двора'
  //   }, {
  //     // Опции.
  //     // Необходимо указать данный тип макета.
  //     iconLayout: 'default#image',
  //     // Своё изображение иконки метки.
  //     iconImageHref: 'img/location.png',
  //     // Размеры метки.
  //     iconImageSize: [60, 60],
  //     // Смещение левого верхнего угла иконки относительно
  //     // её "ножки" (точки привязки).
  //     iconImageOffset: [-5, -38]
  //   });

  //   // отключение скролла карты колесиком мыши
  //   myMap.behaviors.disable('scrollZoom'); 

  //   myMap.geoObjects
  //     .add(myPlacemark)
  //     .add(myPlacemarkWithContent);
  // });



  // function init() {
  //   var myMap = new ymaps.Map('map', {
  //     center: [47.244729, 39.723187],
  //     zoom: 17,
  //     controls: ["typeSelector", "zoomControl"]
  //   }, {
  //     searchControlProvider: 'yandex#search'
  //   }),

  //   // Создаём макет содержимого.
  //   MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //   ),

  //   myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //     hintContent: 'Наш офис',
  //     balloonContent: 'Вход со двора'
  //   }, {
  //     // Опции.
  //     // Необходимо указать данный тип макета.
  //     iconLayout: 'default#image',
  //     // Своё изображение иконки метки.
  //     iconImageHref: 'img/location.png',
  //     // Размеры метки.
  //     iconImageSize: [60, 60],
  //     // Смещение левого верхнего угла иконки относительно
  //     // её "ножки" (точки привязки).
  //     iconImageOffset: [-5, -38]
  //   });

  //   // отключение скролла карты колесиком мыши
  //   myMap.behaviors.disable('scrollZoom'); 

  //   myMap.geoObjects
  //     .add(myPlacemark)
  //     .add(myPlacemarkWithContent);
  // }
  
  // // карта создается при скролле до .footer
  // var oneMap = false; // чтобы была только одна карта
  // var target = $('.footer');
  // var targetPos = target.offset().top;
  // var winHeight = $(window).height();
  // var scrollToElem = targetPos - winHeight;
  // $(window).scroll(function(){
  //   var winScrollTop = $(this).scrollTop();
  //   if((winScrollTop > scrollToElem) && (oneMap == false)){
  //     oneMap = true;
  //     ymaps.load(init());
  //   }
  // });



  // подключение видеоролика с youtube
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
  }



  // скролл до нужных секций по навигационным ссылкам

  // до секции hero
  $('[href="#goToHero"]').on( 'click', function(){
    var dest = $('.hero'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });
  $('.logo').on( 'click', function(){
    var dest = $('.hero'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });

  // до секции projects
  $('[href="#goToProjects"]').on( 'click', function(){
    var dest = $('.projects'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top - 40 // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });
  // до секции projects
  $('[href="#goToProjects"]').on( 'click', function(){
    var dest = $('.projects'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top - 40 // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });

  // до секции measure
  $('[href="#goToMeasure"]').on( 'click', function(){
    var dest = $('.measure'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top - 25 // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });

  // до секции team
  $('[href="#goToTeam"]').on( 'click', function(){
    var dest = $('.team'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top - 50 // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });

  // до секции clients
  $('[href="#goToClients"]').on( 'click', function(){
    var dest = $('.clients'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top - 100 // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });

  // до секции footer элемент address
  $('[href="#goToAddress"]').on( 'click', function(){
    var dest = $('.address'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
        scrollTop: $(dest).offset().top - 100 // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
    }
    return false;
  });
});
