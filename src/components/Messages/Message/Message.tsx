import React from 'react';

import "./Message.css";

interface MessageProps {
    message: {user: string, text: string};
    name: string;
}

export const Message: React.FC<MessageProps> = (
    {
        message: { user, text},
        name}
): JSX.Element => {
    let isSendByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    
    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }
    if (user === 'admin'){
        return (
            <div className="message_cont justify-end">
                <p className="message_text text-blue">{text}</p>
            </div>
        )
    }

    return(
        isSendByCurrentUser
        ? (
            <div className="message_cont justify-end">
                <p className="sentMessage pr-10">{user}</p>
                <div className=" message_box bg-blue">
                    <p className="message_text text-white">{text}</p>
                </div>
            </div>
        )
        : (
            <div className="message_cont justify-start">
                <div className="message_box bg-light">
                    <p className="message_text text-dark">{text}</p>
                </div>
                <p className="sentMessage pl-10">{user}</p>
            </div>
        )
    );
}