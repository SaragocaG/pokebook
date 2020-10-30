import React, { useState, useEffect } from 'react';
import styles from './SinglePokemon.module.scss';
import Screen from '../../components/ui/screen/Screen';
import { useParams } from 'react-router-dom';
import { TypePokemon } from '../../types/types';
import pokeapi from '../../services/pokeapi';
import Loading from '../../components/ui/loading/Loading';
import AbilitiesList from '../../components/single-pokemon/abilities-list/AbilitiesList';
import Stats from '../../components/single-pokemon/stats/Stats';

const emptyPokemon: TypePokemon = {
  base_experience: 0,
  picture: '',
  height: 0,
  weight: 0,
  name: '',
  specie: '',
  id: 0,
  abilities: [],
  stats: [],
};

interface Tab {
  title: string;
  component: any;
}

const SinglePokemon = () => {
  const [pokemon, setPokemon] = useState(emptyPokemon);
  const [isLoading, setIsLoading] = useState(true);
  const params: any = useParams();
  const beautifyName = (name: string) => name.replace('-', ' ');
  const tabs = [
    { title: 'Estatísticas', component: (<Stats stats={pokemon.stats} />) },
    { title: 'Habilidades', component: (<AbilitiesList abilities={pokemon.abilities} />) },
  ] as Tab[];
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    pokeapi.getPokemon(params.name)
      .then((data: any) => {
        setPokemon({
          ...data,
          name: beautifyName(data.name),
          picture: data.sprites.front_default,
          abilities: data.abilities.map((ability: any) => ({ ...ability.ability })),
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    
  }, [params]);

  return (
    <Screen
      options={{ title: pokemon.name }}
    >
      <div className="container">
        <span className={styles.pokemonName}>
          {
            isLoading && (
              <Loading />
            )
          }

          <div className="row hcenter">
            <h1 className={styles.pokemonName}>
              { beautifyName(pokemon.name) }
            </h1>
            <img
              alt={pokemon.name}
              src={pokemon.picture}
              className={styles.pokemonPicture}
            />
            <h2 className={styles.pokemonExperience}>
              { pokemon.base_experience }
            </h2>
          </div>

          <div className="row hcenter">
            {
              tabs.map((tab, index) => (
                <div
                  className={
                    tabs[selectedTab].title === tab.title
                      ? styles.selectedTab
                      : styles.tab
                  }
                  key={tab.title}
                  onClickCapture={() => {
                    setSelectedTab(index);
                  }}
                >
                  {tab.title}
                </div>
              ))
            }
          </div>

          <div className={styles.panel}>
            {tabs[selectedTab].component}
          </div>
        </span>
      </div>
    </Screen>
  );
};

export default SinglePokemon;
