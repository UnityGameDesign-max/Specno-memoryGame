import 
    styled 
from 'styled-components';

import{
    Cover
} from 'common/constants';

const CardContainer = styled.div`
    position: relative;
`;
const CardImageContainer = styled.div`
    
`;

const CardImage = styled.img`
    transform: ${props => (props.isFlipped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
    position: absolute;
`;


function CardChoice({card, handleChoice, isFlipped}){

    const handleClick = () => {
        handleChoice(card);
        console.log(card);
    }
    return(
        <CardContainer>
            <CardImageContainer>
                <CardImage
                 isFlipped={isFlipped}
                 src={card.src}
                 alt='deck'
                />
                <img
                 src={Cover.src}
                 onClick={handleClick}
                 alt='cover'
                />
            </CardImageContainer>
        </CardContainer>
    )
}

export const CardChoiceUI = CardChoice;