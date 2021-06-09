$(document).ready(function () {
  // Slick
  $(".carousel__inner").slick({
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    //  adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  //Tabs;
  $(".catalog__tabs").on("click", "li:not(.catalog__tab--active)", function () {
    $(this)
      .addClass("catalog__tab--active")
      .siblings()
      .removeClass("catalog__tab--active")
      .closest(".container")
      .find(".catalog__content")
      .removeClass("catalog__content--active")
      .eq($(this).index())
      .addClass("catalog__content--active");
  });

  // Catalog link
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content--active");
        $(".catalog-item__list")
          .eq(i)
          .toggleClass("catalog-item__list--active");
      });
    });
  }
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  // Modal
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn();
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
  });
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn();
    });
  });

  // Validate
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!"),
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправилно введен адрес почты",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  $("input[name=phone]").mask("+7(999) 999-99-99");

  // Smooth scroll and pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href^='#up']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  // WoW js
  new WOW().init();
});
