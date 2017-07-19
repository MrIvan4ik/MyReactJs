import Holder from './first-product.jsx';
import PopHolder from './second-product.jsx';

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
