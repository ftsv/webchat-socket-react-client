import React, { useCallback, useState, useEffect } from 'react';
import queryString from 'query-string';
import { io, Socket } from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import CONFIG from '../../config/config'
import { InfoBar } from '../InfoBar/InfoBar';
import { Input } from '../Input/Input';

import './Chat.css';
import { Messages } from '../Messages/Messages';

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    message: (a: string) => void;
}

interface ClientToServerEvents {
    hello: () => void;
    join: (
            a: SocketData,
            callback?: (error?: { error: string }) => void
        ) => void;
    sendMessage: (
            a: string ,
            callback: () => void
        ) => void;
    disconnect: () => void;
}

interface SocketData {
    name: string;
    room: string;
}

let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;

const Chat = (): JSX.Element => {
    const location = useLocation();
    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<any[]>([]);


    const initSocket = useCallback(() => socket = io(CONFIG.ENDPOINT), []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): React.SetStateAction<any> => {
        const {target: {name, value}} = e ;
        switch (name) {
            case 'message':
                setMessage(() => value);
                break;       
        }
    }

    const handleSend = (e: React.KeyboardEvent) => {
        const { key } = e;
        return key === 'Enter'
            ? sendMessage(e, message)
            : null
    }

    useEffect(() => {
        initSocket();
    }, [initSocket])
    

    useEffect(() => {
        const { name, room } = queryString.parse(location.search); // не знаю как указать типы
        if (typeof name === 'string' && typeof room === 'string') {

            setName(name);
            setRoom(room);

            socket?.emit('join', { name, room }, 
            ({ error }) => {
                if (error) {
                    alert(error);
                }
            }
            );

            return () => {
                socket?.emit('disconnect');
                socket?.off()
            }
        }
        
        
    }, 
    // []
    [location.search]
    );

    useEffect(() => {
        socket?.on('message', (message) => {
            setMessages(() => [...messages, message])
        })
    }, [messages]);

    const sendMessage = React.useCallback((e: (React.KeyboardEvent | React.MouseEvent<HTMLButtonElement>) , message: string) => {
        e.preventDefault();
        socket?.emit('sendMessage', message, () => setMessage(() => ''));
    },[]);

    return (
        <div className="chat__outer_cont">
            <div className="chat__inner_cont">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input
                    message={message}
                    handleInput={handleInput}
                    handleSend={handleSend}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    )
}

export default Chat;
