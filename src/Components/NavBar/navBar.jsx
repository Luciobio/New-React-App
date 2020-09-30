import React from 'react';
import style from './navBar.module.css';

export default function NavBar({idioma}) {

    return (
        <div className={style.navBar}>
            <img className= {style.navImg} src="https://www.pngfind.com/pngs/m/339-3397568_logos-gratis-png-logos-gratis-en-png-transparent.png"></img>
            <input placeholder={idioma === 'spanish' ? 'Busqueda...' : 'Search...'}>
            </input>
            <button>
                Buscar
            </button>
        </div>
    )
}