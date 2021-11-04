import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, order, sprites: { front_default: frontDefault } } = pokemon;
    return (
      <div>
        <h1>{ name }</h1>
        <img src={ frontDefault } alt={ name } />
        <span>
          { order }
        </span>
      </div>
    );
  }
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;
