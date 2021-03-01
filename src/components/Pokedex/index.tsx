/* eslint-disable object-curly-newline */

import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';
import Pokecard, { PokeCardData } from '../Pokecard';

const Pokedex: React.FC = () => {
  const [firstDeck, setFirstDeck] = useState([
    { id: 25, name: 'Pokemon' } as PokeCardData,
  ]);
  const [secondDeck, setSecondDeck] = useState([
    { id: 25, name: 'Pokemon' } as PokeCardData,
  ]);
  const [firstDeckScore, setFirstDeckScore] = useState(0);
  const [secondDeckScore, setSecondDeckScore] = useState(0);

  let deckOneScore = 0;
  let deckTwoScore = 0;
  const deck = [
    {
      id: 4,
      name: 'Charmander',
      type: 'fire',
      baseExperience: 62,
    },
    {
      id: 7,
      name: 'Squirtle',
      type: 'water',
      baseExperience: 63,
    },
    {
      id: 11,
      name: 'Metapod',
      type: 'bug',
      baseExperience: 72,
    },
    {
      id: 12,
      name: 'Butterfree',
      type: 'flying',
      baseExperience: 178,
    },
    {
      id: 25,
      name: 'Pikachu',
      type: 'electric',
      baseExperience: 112,
    },
    {
      id: 39,
      name: 'Jigglypuff',
      type: 'normal',
      baseExperience: 95,
    },
    {
      id: 94,
      name: 'Gengar',
      type: 'poison',
      baseExperience: 225,
    },
    {
      id: 133,
      name: 'Eevee',
      type: 'normal',
      baseExperience: 65,
    },
  ];

  const drawCard = useCallback(() => {
    const deckOne = [];

    for (let i = 1; i <= 4; i++) {
      const cardIndex = Math.floor(Math.random() * deck.length);
      const newCard = deck[cardIndex];

      deck.splice(cardIndex, 1);

      deckOne.push(newCard);
    }

    setFirstDeck(deckOne);
    setSecondDeck(deck);
  }, [deck]);

  useEffect(() => {
    for (let i = 0; i < firstDeck.length; i++) {
      deckOneScore += firstDeck[i].baseExperience;
    }

    setFirstDeckScore(deckOneScore);

    for (let i = 0; i < secondDeck.length; i++) {
      deckTwoScore += secondDeck[i].baseExperience;
    }

    setSecondDeckScore(deckTwoScore);
  }, [firstDeck, secondDeck]);
  return (
    <div className="container">
      <header>Pokemon Deck Game!</header>
      <div className="cardsContainer">
        {firstDeckScore > secondDeckScore && (
          <strong className="winner">You win!</strong>
        )}
        {secondDeckScore > firstDeckScore && (
          <strong className="loser">You Lose!</strong>
        )}
        <ul>
          {firstDeck.map(({ id, name, type, baseExperience }) => (
            <li key={id}>
              <Pokecard
                id={id}
                name={name}
                type={type}
                baseExperience={baseExperience}
              />
            </li>
          ))}
        </ul>
        {firstDeckScore > 0 && (
          <strong className="score">
            Score:
            {firstDeckScore}
          </strong>
        )}
      </div>
      <div className="cardsContainer">
        {secondDeckScore > firstDeckScore && (
          <strong className="winner">You win!</strong>
        )}
        {secondDeckScore < firstDeckScore && (
          <strong className="loser">You Lose!</strong>
        )}

        <ul>
          {secondDeck.map(({ id, name, type, baseExperience }) => (
            <li key={id}>
              <Pokecard
                id={id}
                name={name}
                type={type}
                baseExperience={baseExperience}
              />
            </li>
          ))}
        </ul>
        {secondDeckScore > 0 && (
          <strong className="score">
            Score:
            {secondDeckScore}
          </strong>
        )}
      </div>

      <button className="drawCardsButton" type="button" onClick={drawCard}>
        Draw Cards
      </button>
    </div>
  );
};

export default Pokedex;
