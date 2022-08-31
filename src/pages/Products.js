import React from 'react';

const font_family = 'arial black,arial-w01-black,arial-w02-black,arial-w10 black,sans-serif';

const Products = () => {
    const images = require.context("../dist/products");
    console.log(images);
    return (
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(249,213,166)'}}>
            <div style={{width: '980px', height: '2114px', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(232,90,13)'}}>
                <span style={{margin: '2em', textAlign: 'center', color: 'rgb(21,38,53)', fontSize: '31px', fontFamily: font_family, fontWeight: 'bold'}}>
                    Nuestros productos
                </span>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '2em', margin: '2em', justifyContent: 'space-evenly'}}>
                    {images.keys().map(image => (
                        <img style={{borderRadius: '50%', border: '2px solid white', height: '176px', width: '180px'}} src={require(`../dist/products/${image.slice(2)}`)} alt={''}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;