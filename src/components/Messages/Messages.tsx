import React, { useEffect, useRef } from 'react';
import { Message } from './Message/Message';

import './Messages.css'

interface MessagesProps {
    messages: {user: string, text: string}[];
    name: string;
}

export const Messages: React.FC<MessagesProps> = ({messages, name}): JSX.Element => {
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef!.current?.scrollIntoView();
    };
    useEffect(scrollToBottom, [messages]);
    return(
            <div className="messages">
                {messages.map((msg, i) => <Message key={i} message={msg} name={name} />)}
                <div ref={messagesEndRef} />
            </div>
    );
}