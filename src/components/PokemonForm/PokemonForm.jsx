// import { Component } from 'react';

import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// Как импортировать свою кастомную иконку из своего svg 
// import { ReactComponent as MyIcon } from './путь к svg';

const styles = { form: { marginBottom: 20 } };

export default function PokemonForm ({qwe}) {
 const [pokemonName, setPokemonName] = useState('')


const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

 const handleSubmit = event => {
    event.preventDefault();



    if (pokemonName.trim() === ''){
      toast.error('Введите имя покемона!');
      return;
    }

   qwe(pokemonName)
   setPokemonName( '' );
  };

  
    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
}




// ===== Старая версия =====

// export default class PokemonForm extends Component {
//     state = {
//       pokemonName: '',
//     };
  
//     handleNameChange = event => {
//       this.setState({ pokemonName: event.currentTarget.value.toLowerCase()});
//     };
  
//     handleSubmit = event => {
//       event.preventDefault();
  
  
  
//       if (this.state.pokemonName.trim() === ''){
//         return toast.error('Введите имя покемона!');
        
//       }
  
//      this.props.qwe(this.state.pokemonName)
//       this.setState({ pokemonName: ''});
//     };
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit} style={styles.form}>
//           <input
//             type="text"
//             name="pokemonName"
//             value={this.state.pokemonName}
//             onChange={this.handleNameChange}
//           />
//           <button type="submit">
//             <ImSearch style={{ marginRight: 8 }} />
//             Найти
//           </button>
//         </form>
//       );
//     }
//   }