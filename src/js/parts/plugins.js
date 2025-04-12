import "slick-carousel";

export class Plugins {

  init() {
    this.FindUsSlider();
  }
  FindUsSlider() {
    $('.find-us-slider').slick({
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
            slidesToShow: 3
          }
        }
      ]
    });
  }
}
