
import{
    useEffect,
    useState
} from 'react';

import 
    styled
from 'styled-components';

import { 
    Cards, 
    Cover 
} from 'common/constants';

import { 
    shuffleCards 
} from 'common/helper/shuffleCards';

import { 
    CardChoiceUI 
} from 'ui/GamePlay/components/CardChoice';

import{
    compareMatchCards
} from 'common/helper/compareMatchCards'


const GameContainer = styled.div`
    background: linear-gradient(
        133.05deg, 
        rgba(255, 255, 255, 0.6)
        0.62%, rgba(255, 255, 255, 0.1)
        102.4%
    );
    display: grid;
    grid-template-columns: repeat(9, 0.1fr);
    grid-gap: 2px;

`;

function GameBoard(){
    
    const[cards, setCards] = useState([]);
    const[cardChoiceOne, setCardChoiceOne] = useState(null);
    const[cardChoiceTwo, setCardChoiceTwo] = useState(null);

    useEffect(() => {
        shuffleCards(Cards, setCards);
    },[]);


    const handleChoice = (card) => {
        cardChoiceOne ? setCardChoiceTwo(card) : setCardChoiceOne(card);
    }
        
    useEffect(() => {
        compareMatchCards(
            cardChoiceOne,
            cardChoiceTwo,
            setCards
        )
    },[cardChoiceOne, cardChoiceTwo])

    console.log(cards)

    return (
        <GameContainer>
            {cards
                .filter(card => card.matched == false).
                map(card => (
                <CardChoiceUI 
                    card={card}
                    key={card.id}
                    handleChoice={handleChoice}
                    isFlipped={
                    card === cardChoiceOne || 
                    card === cardChoiceTwo 
                    }
                />
            ))}
        </GameContainer>
    )
}

export const GameBoardUI = GameBoard;