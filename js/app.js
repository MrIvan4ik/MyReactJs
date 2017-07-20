import './first-product/first-product.jsx';
import './second-product/second-product.jsx';
// require('../styles/style.sass')
// Slider
$('.header-scroller-fix').slick({
  dots: true,
  accessibility: false,
  arrows: false,
});

$('.popular-product-slider_menu').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
});
