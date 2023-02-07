import React from 'react';
import './Saludar.scss';

interface ISaludar {
    name: string;
};

// export default function Saludar(props: ISaludar) {
export function Saludar(props: ISaludar) {
   return (
        <p className="saludar">
            Hola <strong>{props.name}</strong>
        </p>
   ); 
}