import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pokemons: [],
    };

    this.doRequisition = this.doRequisition.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
  }

  async componentDidMount() {
    await this.getPokemons();
  }

  async getPokemons() {
    const { pokemons } = this.state;
    const pokemonsData = await this.doRequisition();
    pokemonsData.results.forEach(async (poke) => {
      const fetchGrab = await fetch(poke.url);
      const fetchConversion = await fetchGrab.json();
      pokemons.push(fetchConversion);
    });
    this.setState({ loading: false });
  }

  async doRequisition() {
    const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100%22');
    const conversion = api.json();
    return conversion;
  }

  render() {
    const { pokemons, loading } = this.state;
    return (
      <Home loading={ loading } pokemons={ pokemons } />
    );
  }
}
