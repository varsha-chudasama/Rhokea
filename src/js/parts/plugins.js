import "slick-carousel";

export class Plugins {
  init() {
    this.HeroSlider();
    this.FindUsSlider();
    this.ShopSlider();
    this.ProductSlider();
  }
  FindUsSlider() {
    $(".find-us-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: ".find-us-section .prev-arrow",
      nextArrow: ".find-us-section .next-arrow",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
      ],
    });
  }
  HeroSlider() {
    $(".hero-slider").slick({
      slidesToShow: 1,
      slidesPerRow: 1,
      fade: true,
      arrows: false,
      dots: true,
    });

    $(document).ready(function () {
      function initializeSlider(sliderClass, paginationWrapperClass) {
        var $slider = $(sliderClass);
        var $paginationWrapper = $(paginationWrapperClass);
        updatePagination(
          0,
          $slider.slick("getSlick").slideCount,
          paginationWrapperClass
        );
        $slider.on("afterChange", function (event, slick, currentSlide) {
          updatePagination(
            currentSlide,
            slick.slideCount,
            paginationWrapperClass
          );
        });
        var $slickDots = $slider.find(".slick-dots");
        $paginationWrapper.append($slickDots);
      }
      function updatePagination(
        currentSlide,
        totalSlides,
        paginationWrapperClass
      ) {
        var formattedCurrent = ("0" + (currentSlide + 1)).slice(-2);
        var formattedTotal = ("0" + totalSlides).slice(-2);
        $(paginationWrapperClass + " .pagination-display").text(
          formattedCurrent + "/" + formattedTotal
        );
      }
      initializeSlider(".hero-slider", ".hero-section .pagination-wrapper");
    });
  }
  ShopSlider() {
    $(".shop-slider").slick({
      slidesToShow: 6,
      slidesPerRow: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 991,
          settings: { slidesToShow: 5 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 4 },
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 475,
          settings: { slidesToShow: 2 },
        },
      ],
    });
  }
  ProductSlider() {
    $(".product-slider").slick({
      slidesToShow: 4,
      slidesPerRow: 1,
      arrows: false,
      dots: false,
      responsive: [ 
        {
          breakpoint: 768,
          settings: { slidesToShow: 3 },
        },
        
        {
          breakpoint: 475,
          settings: { slidesToShow: 2 },
        },
      ],
    });


    $('.right-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.left-slider'
    });
    $('.left-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.right-content',
      vertical:true,
      dots: false,
      focusOnSelect: true
    });
      
  }
}
