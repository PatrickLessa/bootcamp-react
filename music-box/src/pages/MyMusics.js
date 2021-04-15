import React from 'react';
import MusicBox from '../components/MusicBox';
import NavBar from '../components/NavBar';

function MyMusics(){
    return (
        <>
            <NavBar/>
            <div className="container">  
                <div className="filter">    
                    <button className="btn-green right">Adicionar</button>
                </div>            
            </div>
            <div className="container">
                <div className="music-boxes">

                    <MusicBox 
                        musicName="Black Hole Sun"
                        musicGenre="Grunge"
                        relaseDate="1994"
                    />

                    <MusicBox 
                        musicName="Ride The Lightning"
                        musicGenre="Thrash Metal"
                        relaseDate="1984"
                    />

                    <MusicBox 
                        musicName="Melhor Eu Ir"
                        musicGenre="Pagode"
                        relaseDate="2015"
                    />

                    <MusicBox 
                        musicName="Favela Sinistra"
                        musicGenre="Rap"
                        relaseDate="1995"
                    />
                    
                </div>

            </div>
        </>
    );
}

export default MyMusics;