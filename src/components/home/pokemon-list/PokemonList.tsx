import { List } from 'react-virtualized';
import React, { useEffect, useState } from 'react';
import { PokemonListProps } from '../../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './PokemonList.module.scss';
import { addPokemons, setPokemonsCount } from '../../../store/actions/pokemons';
import pokeapi from '../../../services/pokeapi';

interface OnScrollParameters {
  clientHeight: number;
  clientWidth: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
}

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons: PokemonListProps = useSelector((state: any) => state.pokemons);
  const [isLoading, setIsLoading] = useState(false);

  const listHeight = 400;

  const rowRenderer = ({ index , style }: { index: number, style: any }) => {
    return (
      <Link key={pokemons.list[index].id} to={`/single-pokemon/${pokemons.list[index].name}`}>
        <div
          style={style}
          className={styles.listItem}
          key={pokemons.list[index].id}
        >
          {pokemons.list[index].name}
        </div>
      </Link>
    );
  };

  const fetchMore = () => new Promise ((resolve, reject) => {
    pokeapi.getPokemons(pokemons.list.length)
      .then((data: any) => {
        dispatch(addPokemons(data.results));
        dispatch(setPokemonsCount(data.count));
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    resolve(true);
  });

  useEffect(() => {
    console.log('iniciou');
    fetchMore();
  }, [useSelector]);

  const onScroll = ({scrollHeight, scrollTop }: OnScrollParameters) => {
    if (
      (scrollHeight - listHeight - scrollTop <= 0.1 * scrollHeight)
      && (pokemons.list.length < pokemons.count)
      && !isLoading
    ) {
      setIsLoading(true);
      fetchMore()
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="container" style={{ overflowX: 'auto' }}>
      {
        pokemons.list.length > 0 && (
          <List
            rowCount={pokemons.list.length}
            rowRenderer={rowRenderer}
            overscanRowCount={3}
            onScroll={onScroll}
            height={listHeight}
            rowHeight={50}
            width={800}
          />
        )
      }
    </div>
  );
};

export default PokemonList;
