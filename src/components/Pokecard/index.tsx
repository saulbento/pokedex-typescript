import React from 'react';

import './styles.css';

export interface PokeCardData {
  id: number;
  name: string;
  type: string;
  baseExperience: number;
}

const Pokecard: React.FC<PokeCardData> = ({
  id,
  name,
  type,
  baseExperience,
}: PokeCardData) => {
  const formatedID = String(id).padStart(3, '0');
  const pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatedID}.png`;

  return (
    <div className="pokecardContainer">
      <h1>{name}</h1>
      <img src={pokeImg} alt="Pokemon" />
      <span>{type}</span>
      <strong>{baseExperience}</strong>
    </div>
  );
};

export default Pokecard;
