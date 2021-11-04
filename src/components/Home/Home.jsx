import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

export default class Home extends Component {
  constructor() {
    super();
    this.renderPokemons = this.renderPokemons.bind(this);
  }

  renderPokemons() {
    const { pokemons } = this.props;
    return pokemons.map((poke) => <Card pokemon={ poke } key={ poke.order } />);
  }

  render() {
    const { loading } = this.props;
    return (
      <>
        <h1>Olá ser humano, seja bem vindo a pokedex</h1>
        { loading ? <h1>Carregando...</h1> : this.renderPokemons() }
      </>
    );
  }
}

Home.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
