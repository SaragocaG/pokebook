import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});


const pokeapi = {
  getPokemons: async (offset: number) => (
    new Promise((resolve, reject) => {
      const limit = 20;
      api.get(`/pokemon/?offset=${offset}&limit=${limit}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
  ),

  getPokemon: async (name: number) => (
    new Promise((resolve, reject) => {
      api.get(`/pokemon/${name}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
  ),

  getSpecie: async (name: number) => (
    new Promise((resolve, reject) => {
      api.get(`/pokemon-species/${name}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
  ),

  getAbility: async (name: number) => (
    new Promise((resolve, reject) => {
      api.get(`/ability/${name}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
  ),
};

export default pokeapi;
