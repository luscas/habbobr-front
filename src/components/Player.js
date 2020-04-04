import React from 'react';

function Player() {
    return (
        <div className="card player">
            <div className="card-body">
                <div className="play"> <i className="fas fa-pause"></i> </div>

                <div className="content mr-auto">
                    <h5 className="mb-1">Zona Livre</h5>
                    <div className="card-text">
                        <div className="avatar pixel sm mr-2">
                            <img src={"https://www.habbo.com.br/habbo-imaging/avatarimage?&user=CaioXzZ&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=s"} alt="CaioXzZ" />
                        </div>
                        CaioXzZ
                    </div>
                </div>

                <div className="volume">
                    <i className="fas fa-volume-up"></i>
                </div>
            </div>
        </div>
    );
}

export default Player;