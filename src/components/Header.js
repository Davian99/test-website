import React from 'react';
import logo from '../nuevo_logo.webp';
import header_background from '../header_background.jpg';

const text_shadow = '#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgb(140 140 140 / 50%) 0px 4px 0px, #787878 0px 0px 0px, rgb(0 0 0 / 50%) 0px 5px 10px';
const font_family = 'arial black,arial-w01-black,arial-w02-black,arial-w10 black,sans-serif';
const font = `normal normal normal 17px/1.3em'open sans',sans-serif`;

const header_text = 'Nuestra actividad principal es la comercialización y distribución de bebidas y productos de hostelería en la zona noroeste de la Comunidad de Madrid. Disponemos de una amplia gama de mas 500 productos de las primeras marcas: cervezas, refrescos, vinos, aguas, cafés, infusiones y todo lo necesario para su hostelería.';

const Header = () => {
    return (
        <div style={{height: '554px', backgroundColor: 'rgb(249,213,166)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{position: 'absolute', backgroundPosition: 'center', backgroundImage: `url(${header_background})`, width: '100%', height: '544px', margin: '5px 0px', backgroundSize: 'cover', zIndex: 0}}></div>
            <div style={{display: 'flex', gap: '3em', alignItems: 'center', justifyContent: 'center', width: '100%', zIndex: 1}}>
                <div style={{borderRadius: '50%', overflow: 'hidden', border: '2px solid white', height: '176px', width: '180px'}}>
                    <img src={logo} alt={''}/>
                </div>
                <div style={{width: '456px'}}>
                    <h2 style={{textAlign: 'center', textShadow: text_shadow, color: 'rgb(232,90,13)', fontSize: '46px', fontFamily: font_family}}>
                        <span>DISTRIBUCIONES</span><br/>
                        <span>ALEJANO, S.C</span>
                    </h2>
                </div>
            </div>
            <div style={{zIndex: 1}}>
                <h2 style={{textAlign: 'center', color: 'white', fontSize: '42px', fontFamily: font_family, marginBottom: '0.25em'}}>
                    TU DISTRIBUIDOR DE CONFIANZA
                </h2>
            </div>
            <div style={{zIndex: 1}}>
                <div style={{backgroundColor: 'rgb(255,203,170)', border: '5px solid rgb(255,203,170)', borderRadius: '30px 0px 20px 0px', width: '690px', padding: '0.25em 0.5em'}}>
                    <h6 style={{font, fontSize: '17px', color: 'rgb(77,30,4)', margin: '0px 5px', lineHeight: '1.3em', textAlign: 'justify'}}>
                        {header_text}
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Header;