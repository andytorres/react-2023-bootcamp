import React, { Component } from 'react';
import './Pokecard.scss'

class Pokecard extends Component {
    state = {}
    static defaultProps = { 
        id: 4, 
        name: 'Charmander', 
        type: 'fire', 
        base_experience: 62 
    }
    render() {
        return (
            <div className='Pokecard' id={this.props.id}>
                <p className="Pokecard-name">{this.props.name}</p>
                <img className='Pokecard-img' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.id.toString().padStart(3, '0')}.png`} alt={this.props.name}/>
                <p className="Pokecard-type">Type: {this.props.type}</p>
                <p className="Pokecard-base_experience">EXP: {this.props.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;