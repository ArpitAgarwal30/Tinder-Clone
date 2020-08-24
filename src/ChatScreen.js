import React, { useState } from 'react';
import './chatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessage] = useState([
        {
            name: "Scarlet Johansson",
            image: 'https://www.gstatic.com/tv/thumb/persons/69369/69369_v9_bc.jpg',
            message: "Whats Up Babe?"
        },
        {
            name: "Scarlet Johansson",
            image: 'https://www.gstatic.com/tv/thumb/persons/69369/69369_v9_bc.jpg',
            message: "Hows it going!"
        },
        {
            message: "Hi! How are u Scarlet!"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessage([...messages, { message: input }])
        setInput('');
    }

    return (
        <div className="chatScreen">
            {/* <h1>Hi ChatScreen</h1> */}
            <p className="chatScreen__timestamp">YOU MATCHED WITH SCARLET ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            ))}
            <form className="chatScreen__input">
                <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputfield"
                    placeholder="Type a message..."
                    type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputbutton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen;
