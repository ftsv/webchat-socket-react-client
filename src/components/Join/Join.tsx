import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import SIMPLE_ROUTES from '../../constants'
import './Join.css';

const Join = (): JSX.Element => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): React.SetStateAction<any> => {
        const {target: {name, value}} = e ;
        switch (name) {
            case 'name':
                setName(() => value);
                break;       
            case 'room':
                setRoom(() => value);
                break;       
        }
    }

    return (
        <div className='join__outer_cont'>
        <div className='join__inner_cont'>
            <h1 className='join__inner_cont-heading'>Join</h1>
            <div>
                <input
                    type='text'
                    placeholder='Name'
                    className='join__input'
                    name='name'
                    value={name}
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Room'
                    className='join__input'
                    name='room'
                    value={room}
                    onChange={handleInput}
                />
            </div>
            <Link
                onClick={(e) => (!name || !room) ? e.preventDefault() : null}
                to={`/${SIMPLE_ROUTES.CHAT}?name=${name}&room=${room}`}
            >
                <button
                    type='submit'
                    className='button mt-20'
                >
                    Sign In
                </button>
            </Link>
        </div>
        </div>
    )
}

export default Join;