// import { Component } from "react";

import { useState, useEffect } from 'react';

import PokemonFallbackView from '../PokemonErrorView';
import PokemonDataView from '../PokemonDataView';
import PokemonPendingVie from '../PokemonPendingVie';
import pokemonAPI from '../PokemonApi/PokemonApi';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
}




export default function PokemonInfo({ pokemonName }) {
  //   state = {
  //     pokemon: null,
  //     error: null,
  //     status: 'idle',
  //   };

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    console.log('Рендер');
if (!pokemonName) {
    console.log('Первый рендер pokemonName это пустая строка, не делаем fetch');
    return;
}


    setStatus(Status.PENDING);

    setTimeout(() => {
      pokemonAPI
        .fetchPokemon(pokemonName)
        .then(pokemon => {
            // Последовательность важна!! Сначала кладем данные, потом присваиваем стату! 
          setPokemon(pokemon);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }, 3000);
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Введите имя покемона!</div>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingVie pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonFallbackView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

// ===== Старая версия на классах ====

// class PokemonInfo extends Component {
//     state = {
//       pokemon: null,
//       error: null,
//       status: 'idle',
//     };

//     componentDidUpdate(prevProps, prevState) {
//       const prevName = prevProps.pokemonName;
//       const nextName = this.props.pokemonName;

//       if (prevName !== nextName) {
//         this.setState({ status: 'pending' });

//         setTimeout(() => {
//         pokemonAPI
//             .fetchPokemon(nextName)
//             .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//             .catch(error => this.setState({ error, status: 'rejected'}))
//           }, 3000)

//       }
//     }

//     // 'idle' - простой
//     // 'pending' - ожидается
//     // 'resolve' - выполнилось с результамом (хорошо)
//     // 'resjected' - отклонено!

//     render() {
//       const { pokemon,  error, status } = this.state;
//       const { pokemonName } = this.props;

//       if (status === 'idle') {
//         return <div>Введите имя покемона!</div>;
//       }

//       if (status === 'pending') {
//         return <PokemonPendingVie pokemonName={pokemonName}/>;
//       }

//       if (status === 'rejected') {
//         return <PokemonFallbackView message={error.message}/>
//       }

//       if (status === 'resolved') {
//         return (
//   <PokemonDataView pokemon={pokemon}/>
//         );
//       }
//     }
//   }

//   export default PokemonInfo;
