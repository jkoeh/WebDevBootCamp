import React, { Component } from 'react';
import './MemoryGame.css'
import Card from './Card.js'
import NavBar from './NavBar'

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
const CardState = {
    HIDING: 0,
    SHOWING: 1,
    MATCHING: 2
}

export default class MemoryGame extends Component {
    constructor(props) {
        super(props);
        //randomly select 8 colors
        const randomColor = () => props.allColors[Math.floor(Math.random() * props.allColors.length)];
        let cards = [
            { id: 0, cardState: CardState.HIDING, backgroundColor: 'red' },
            { id: 1, cardState: CardState.HIDING, backgroundColor: 'red' },
            { id: 2, cardState: CardState.HIDING, backgroundColor: 'navy' },
            { id: 3, cardState: CardState.HIDING, backgroundColor: 'navy' },
            { id: 4, cardState: CardState.HIDING, backgroundColor: 'green' },
            { id: 5, cardState: CardState.HIDING, backgroundColor: 'green' },
            { id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow' },
            { id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow' },
            { id: 8, cardState: CardState.HIDING, backgroundColor: 'black' },
            { id: 9, cardState: CardState.HIDING, backgroundColor: 'black' },
            { id: 10, cardState: CardState.HIDING, backgroundColor: 'purple' },
            { id: 11, cardState: CardState.HIDING, backgroundColor: 'purple' },
            { id: 12, cardState: CardState.HIDING, backgroundColor: 'pink' },
            { id: 13, cardState: CardState.HIDING, backgroundColor: 'pink' },
            { id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue' },
            { id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue' }
        ];
        cards = shuffle(cards);

        //assign state
        this.state = { cards, noClick: false }
        this.handleClick = this.handleClick.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }
    handleNewGame() {
        let cards = this.state.cards.map(x => ({ ...x, cardState: CardState.HIDING }));
        cards = shuffle(cards);
        this.setState({ cards });
    }
    handleClick(id) {
        const mapCardToState = (cards, idsToChange, newState) => {
            return cards.map(card => {
                if (idsToChange.includes(card.id)) {
                    return {
                        ...card,
                        cardState: newState
                    };
                }
                return card;
            })

        }
        const foundCard = this.state.cards.find(x => x.id === id);
        //if noClick is true or the target is not hiding then return null;

        if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
            return
        }
        let noClick = false;
        //set state for the foundcard to be showing
        let cards = mapCardToState(this.state.cards, [id], CardState.SHOWING);
        this.setState({ cards })
        //check all cards to see if there are other showing cards and check if match
        console.log(cards)
        let showingCards = cards.filter(x => x.cardState === CardState.SHOWING);
        console.log(showingCards)
        let ids = showingCards.map(x => x.id);
        console.log(ids);
        if (showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
            cards = mapCardToState(this.state.cards, ids, CardState.MATCHING);
            this.setState({ cards });
        } else if (showingCards.length === 2) {
            console.log("not match")
            let hidingCards = mapCardToState(this.state.cards, ids, CardState.HIDING);
            noClick = true;
            this.setState({ cards, noClick }, () => {
                setTimeout(() => {
                    this.setState({ cards: hidingCards, noClick: false })
                }, 1300);
            });
            return;
        }
        else {
            return;
        }
    }

    render() {
        //use the state to create cards to be used in return
        const cards = this.state.cards.map((card) => (
            <Card
                key={card.id}
                showing={card.cardState !== CardState.HIDING}
                backgroundColor={card.backgroundColor}
                onClick={() => this.handleClick(card.id)}
            />
        ));
        return (
            //create a jsx with the cards
            <div>
                <NavBar onNewGame={ this.handleNewGame} />
                <div className="MemoryGame">{cards}</div>
            </div>
        );
    }
}
