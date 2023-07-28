import React, { Component } from 'react';
import vs_sign from './Street_Fighter_VS_logo.png';
import './Pokegame.scss'
import Pokedex from "../Pokedex/Pokedex";

const data = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

class Pokegame extends Component {
    state = {  } 
    render() { 
        var firstDeck = [];
        var secondDeck = [];

        const halfsize = Math.floor(data.length / 2)
        for (let i = 0; i < halfsize; i++) {      
            // pick a random index from the list  
            const index = Math.floor(Math.random() * data.length);
            // remove and return one element from that index
            const element = data.splice(index, 1)[0];
            // push the element to one of the halves
            firstDeck.push(element)
        }
        secondDeck = [...data]

        var expDeck1 = firstDeck.reduce(function (acc, obj) {
            return acc + obj.base_experience;
          }, 0); // 0 is the initial value of acc
        var expDeck2 = secondDeck.reduce(function (acc, obj) {
            return acc + obj.base_experience;
          }, 0); // 0 is the initial value of acc
          
        
        
        return (
            <div className='Pokegame'>
                <h1>Pokegame</h1>
                <div>
                    <Pokedex pokemons={firstDeck} isWinner={expDeck1 > expDeck2 ? true : false} totalXP={expDeck1}/>
                    <img src={vs_sign}/>
                    <Pokedex pokemons={secondDeck} isWinner={expDeck2 > expDeck1 ? true : false} totalXP={expDeck2}/>
                </div>
            </div>
        );
    }
}
 
export default Pokegame;