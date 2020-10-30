import React from 'react';
import PokemonList from '../../components/home/pokemon-list/PokemonList';
import Screen from '../../components/ui/screen/Screen';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Screen options={{ noHeader: true, title: 'PokéBook' }}>
      <div className="container">
        <h2 className={styles.title}>Selecione um Pokémon na lista &quot;infinita&quot; abaixo</h2>
        <PokemonList />
      </div>
    </Screen>
  );
};

export default Home;
