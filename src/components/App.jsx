import { memo } from 'react';
import PokemonView from "./PokemonView";
import Counter from "./Counter";
import Friends from "./Friends";

 const App = () => {
  return (
    <>
<PokemonView />
<Counter />
<Friends/>
</>
  );
};

export default memo(App)