import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';


function TinderCards() {
    const [people, setPeople] = useState([
    ]);  //const people = [];
    // setPeople ([...people, 'Arpit','Sajan']) //people,push('arpit','sajan');

    // peace of code which runs on the condition
    useEffect(() => {
        // this is where the codes run

        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ))
        return () => {
            // this is the clean up
            // listner detaches and new listener gets assign
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard className="swipe"
                        key={people.name}
                        preventSwipe={["up", 'down']}>
                        <div style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}
export default TinderCards
