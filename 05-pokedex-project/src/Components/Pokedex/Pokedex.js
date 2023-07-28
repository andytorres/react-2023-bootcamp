import React, { Component } from 'react';
import Pokecard from "./../Pokecard/Pokecard";
import './Pokedex.scss'


class Pokedex extends Component {
    state = {  } 
    render() { 
        const pokemons = this.props.pokemons;

        let status;
        let winnerClass = '';
        if(this.props.isWinner){
            status = <h2>THIS HAND WINS!</h2>;
            winnerClass = 'Pokedex-winner';
        }
        else{
            status = <h2>Loser</h2>            
        }
        return (
            <div className={`Pokedex ${winnerClass}`}>
                {status}
                <h4>Total XP: {this.props.totalXP}</h4>
                <div>
                    {pokemons.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                    ))}
                    {/* <Pokecard
                        id={this.props.pokemons[0].id}
                        name={this.props.pokemons[0].name}
                        type={this.props.pokemons[0].type}
                        base_experience={this.props.pokemons[0].base_experience}
                    /> */}
                </div>
            </div>
        );
    }
}
 
export default Pokedex;