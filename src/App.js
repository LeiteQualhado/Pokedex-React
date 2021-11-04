import React, { Component } from 'react';
import Home from './components/Home/Home';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokeData: [],
      loading: true,
    };

    this.doRequisition = this.doRequisition.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
    this.getPokeFromApi = this.getPokeFromApi.bind(this);
  }

  async componentDidMount() {
    await this.doRequisition();
    await this.getPokemons();
  }

  async getPokemons() {
    const { pokemons } = this.state;
    const pokeData = Promise.all(
      pokemons.results.map(async (poke) => this.getPokeFromApi(poke.url)),
    );

    const pokeClear = await pokeData;
    this.setState({ pokeData: pokeClear, loading: false });
  }

  async getPokeFromApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async doRequisition() {
    const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const conversion = await api.json();
    this.setState({ pokemons: conversion });
  }

  render() {
    const { pokemons, pokeData, loading } = this.state;
    console.log(pokemons, pokeData);
    return (<Home loading={ loading } pokemons={ pokeData } />
    );
  }
}
