import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import './Input.css';

interface InputProps {
    message: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSend: (e: React.KeyboardEvent) => void;
    sendMessage: (e: (React.KeyboardEvent | React.MouseEvent<HTMLButtonElement>) , message: string) => void;
}

export const Input: React.FC<InputProps> = ({message, handleInput, handleSend, sendMessage}): JSX.Element => {

    return (
        <form className='chat_bottom'>
            <input
                type="text"
                placeholder='Type a message'
                className='chat_bottom_input'
                name="message"
                value={message}
                onKeyDown={handleSend}
                onChange={handleInput}
            />
            <button className='chat_bottom_sendButton' onClick={(e) => sendMessage(e, message)}>
                <AiOutlineSend />
            </button>
        </form>
    )
}