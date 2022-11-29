// import { Component } from 'react';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import PokemonForm from 'components/PokemonForm';
import PokemonInfo from 'components/PokemonInfo';


export default function PokemonView () {
    // ==  state: ===
const [pokemonName, setPokemonName] = useState('');


    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm qwe={setPokemonName} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }






// ===== Старая версия =====



// export default class PokemonView extends Component {
//     state = {
//       pokemonName: '',
//     };
  
//     handleFormSubmit = pokemonName => {
//       this.setState({ pokemonName });
//     };
  
//     render() {
//       return (
//         <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//           <PokemonForm qwe={this.handleFormSubmit} />
//           <PokemonInfo pokemonName={this.state.pokemonName} />
//           <ToastContainer autoClose={3000} />
//         </div>
//       );
//     }
//   }