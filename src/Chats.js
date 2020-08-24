import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Scarlet johansson"
                message="Hi there, Wassup..!"
                timestamp="10 seconds ago"
                profilePic="https://www.gstatic.com/tv/thumb/persons/69369/69369_v9_bc.jpg"
            />
            <Chat
                name="Camila cabello"
                message="Whats Up :)"
                timestamp="3 days ago"
                profilePic="https://www.gstatic.com/tv/thumb/persons/930641/930641_v9_bb.jpg"
            />
            <Chat
                name="Anne-Marie"
                message="ola!"
                timestamp="25 minutes ago"
                profilePic="https://www.gstatic.com/tv/thumb/persons/1023256/1023256_v9_bb.jpg"
            />
            <Chat
                name="Priyanka Chopra"
                message="Hey ya!"
                timestamp="2 seconds ago"
                profilePic="data:image/jpeg;base64,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"
            />
        </div>
    );
};

export default Chats;
