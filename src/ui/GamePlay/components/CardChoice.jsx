import 
    styled,
    {css}
from 'styled-components';

import{
    Cover
} from 'common/constants';

const CardContainer = styled.div`
    position: relative;
`;
const CardImageContainer = styled.div`
    
`;
const rotationFrontCard = css`
    transform: rotateY(0deg);
    transition-delay: 0.2s;
`;

const rotationBackCard = css`
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
`;

const rotationFrontCover = css`
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
`;

const rotationBackCover = css`
    transform: rotateY(90deg);
    transition-delay: 0s
`;

const CardImage = styled.img`
    ${props => (props.isFlipped ? rotationFrontCard : rotationBackCard)};
    position: absolute;
`;

const CoverImage = styled.img`
    ${props => (props.isFlipped ? rotationBackCover : rotationFrontCover)};
`;

function CardChoice({card, handleChoice, isFlipped}){

    const handleClick = () => {
        handleChoice(card);
    }
    return(
        <CardContainer>
            <CardImageContainer>
                <CardImage
                 isFlipped={isFlipped}
                 src={card.src}
                 alt='deck'
                />
                <CoverImage
                 src={Cover.src}
                 onClick={handleClick}
                 alt='cover'
                />
            </CardImageContainer>
        </CardContainer>
    )
}

export const CardChoiceUI = CardChoice;