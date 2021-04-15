import React from 'react';
import editIcon from '../assets/images/edit-icon.png';
import deliteIcon from '../assets/images/delete-icon.png';
import starSolid from '../assets/images/star-solid.png';

function MusicBox(props){
    return (
        <div className="music-box">
            <div className="img-music"></div>
            <div className="music-data">
                <div className="icons">
                    <img src={editIcon} alt="" className="edit"/>
                    <img src={deliteIcon} alt="" className="delete"/>
                    <img src={starSolid} alt="" className="stars"/>
                </div>
                <div className="name">
                    <label> Nome:
                        <input className="input-music" type="text" value={props.musicName}/>
                    </label>
                </div>
                <div className="genre">
                    <label> Genêro:
                        <input className="input-music" type="text" value={props.musicGenre}/>
                    </label>
                </div>
                <div className="release">
                    <label> Lançamento:
                        <input className="input-music" type="text" value={props.relaseDate}/>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default MusicBox;