import React from 'react';
import ReactDOM from 'react-dom';

var PopProductHolder = React.createClass({
  render: function() {
    return (
      <div className="popular-product-slider_menu">
        <PopProductItem stars="true" title="Nike Tailwind Loose" price="36.99" aftert="Running Tank Top" text="The Nike Tailwind Loose Womens Running Tank Top is made with sweat-wicking fabric to help you stay dry and comfortable on your run." />
        <PopProductItem title="Nike g87" price="49.99" aftert="Training Tank Top" text="The Nike Tailwind Loose Womens Running Tank Top is made with sweat-wicking fabric to help you stay dry and comfortable on your run."/>
        <PopProductItem title="Nike I-Beam Swoosh" price="70.00" aftert="Sports Top" text="The Nike Tailwind Loose Womens Running Tank Top is made with sweat-wicking fabric to help you stay dry and comfortable on your run."/>
        <PopProductItem title="Nike LUX" price="28.49" aftert="Running Top" text="The Nike Tailwind Loose Womens Running Tank Top is made with sweat-wicking fabric to help you stay dry and comfortable on your run."/>
        <PopProductItem stars="true" title="Nike Tailwind Loose" price="36.99" aftert="Running Tank Top" text="The Nike Tailwind Loose Womens Running Tank Top is made with sweat-wicking fabric to help you stay dry and comfortable on your run." />
        <PopProductItem title="Nike LUX" price="28.49" aftert="Running Top" text="The Nike Tailwind Loose Womens Running Tank Top is made with sweat-wicking fabric to help you stay dry and comfortable on your run."/>
      </div>
    );
  }
});
var PopProductImage = React.createClass({
  render: function() {
    if (this.props.stars == "true") {
      var classN = "popular-product-menu-item__image product-menu-item__image_stars"
    } else {
      var classN = "popular-product-menu-item__image"
    }
    return (
      <div className={classN}></div>
    );
  }
});

var PopProductItem = React.createClass({
  render: function() {
    return (
      <div className="popular-product-menu-item">
        <PopProductImage stars={this.props.stars} />
        <h4 className="popular-product-menu-item__title">{this.props.title}</h4>
        <h6 className="popular-product-menu-item_after-title">{this.props.aftert}</h6>
        <p className="popular-product-menu-item__description">{this.props.text}</p>
        <div className="popular-product-menu-item-make-order">
          <p className="popular-product-menu-item-make-order__price">{this.props.price}</p>
          <div className="popular-product-menu-item-make-order__img"></div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <PopProductHolder />,
  document.getElementById('popular-product')
);
