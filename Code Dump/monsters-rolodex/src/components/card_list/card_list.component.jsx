import React from "react";

import { Card } from "./card/card.component";

import './card_list.styles.css';

export const CardList = (props) => (
    <div className='card_list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div> 
);