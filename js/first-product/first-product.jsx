import React from 'react';
import ReactDOM from 'react-dom';

var Holder = React.createClass({
  render: function() {
    return (
      <div className="product-menu">
      <Items title="FOOTBALL SHOES" description="Lorem ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna." />
      <Items active="true" title="MODERN CLOTHES" description="Lorem ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna." />
      <Items title="BAGS & ACCESSORIES" description="Lorem ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna." />
      </div>
    );
  }
});

var Image = React.createClass({
  render: function() {
    return (
      <div className="product-menu-item__image"></div>
    );
  }
});
var Items = React.createClass({
  propTypes: {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  },
  render: function() {
    if (this.props.active == "true") {
      var className = "product-menu-item__title product-selected"
    } else {
      var className = "product-menu-item__title"
    }
    return (
      <div className="product-menu-item">
        <Image />
        <h3 className={className}>{this.props.title}</h3>
        <p className="product-menu-item__description">
        {this.props.description}
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <Holder />,
  document.getElementById('product-menu')
);
