import React from 'react';
import { AiOutlinePoweroff, AiOutlineMessage } from 'react-icons/ai';

import './InfoBar.css';

interface InfoBarProps {
    room?: string;
}

export const InfoBar: React.FC<InfoBarProps> = ({ room }): JSX.Element => {


    return (
        <div className='infoBar__outer_cont'>
            <div className="infoBar_cont_left_inner">
                <AiOutlineMessage />
                <h3>Room: {room}</h3>
            </div>
            <div className="infoBar_cont_right_inner">
                    <a href='/'>
                        <div className='infoBar_off'>
                            <AiOutlinePoweroff className='infoBar_offIcon' />
                        </div>
                    </a>
            </div>
        </div>
    )
}