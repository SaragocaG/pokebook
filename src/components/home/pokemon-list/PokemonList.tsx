import { List, InfiniteLoader } from 'react-virtualized';
import React, { useState, useEffect } from 'react';
import { TypePokemon } from '../../../types/types';
import pokeapi from '../../../services/pokeapi';
import { Link } from 'react-router-dom';
import styles from './PokemonList.module.scss';

interface OnScrollParameters {
  clientHeight: number;
  clientWidth: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([] as TypePokemon[]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const rowRenderer = ({ index , style }: { index: number, style: any }) => {
    return (
      <Link key={pokemons[index].id} to={`/single-pokemon/${pokemons[index].name}`}>
        <div
          style={style}
          className={styles.listItem}
          key={pokemons[index].id}
        >
          {pokemons[index].name}
        </div>
      </Link>
    );
  };

  const listHeight = 400;
  
  const fetchMore = () => new Promise ((resolve, reject) => {
    if (!isLoading) {
      setIsLoading(true);
      pokeapi.getPokemons(page)
        .then((data: any) => {
          setPokemons([
            ...pokemons,
            ...data.results,
          ]);
          setTotal(data.count);
          setPage(page + 1);
          resolve(true);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  });

  useEffect(() => {
    fetchMore();
  }, []);

  const onScroll = ({scrollHeight, scrollTop }: OnScrollParameters) => {
    if ((scrollHeight - listHeight - scrollTop) <= 0.1 * scrollHeight && pokemons.length < total) {
      fetchMore();
    }
  };

  return (
    <div className="container">
      <List
        rowCount={pokemons.length}
        rowRenderer={rowRenderer}
        overscanRowCount={10}
        onScroll={onScroll}
        height={listHeight}
        rowHeight={50}
        width={800}
      />
    </div>
  );
};

export default PokemonList;
