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
module.exports = Items
