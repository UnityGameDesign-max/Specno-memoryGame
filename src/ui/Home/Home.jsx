import { 
    Fragment,
    useState
} from 'react';

import 
    styled, 
    {css}
from 'styled-components';

import { 
    Colors,
    FontSizes,
    Icons
} from 'common/constants';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import { 
    PrimaryButton
} from 'common/styles';

import { 
    addUsername 
} from 'common/provider/slices/playerSlice';


const IntroText = styled.h1`
    color: ${Colors.White};
    text-align: center;
    font-size: ${FontSizes.Biggest};
    font-weight: 700;
`;

const FlexItems = css`
    display: flex;
`
const placeVerticalItems = css`
    flex-direction: column;
`;
const PlayerContent = styled.form`
    ${FlexItems}
    justify-content: center;
    align-items: flex-end;
`;

const Player = styled.div`
    ${FlexItems};
    ${placeVerticalItems};
    margin-right: 12vw;
    
`;
const PlayerInput = styled.input`
    border-radius: 3px;
    align-items: flex-end;
    margin-top: 4vw;
    border: 1px solid ${Colors.Grey};
    height: 4vh;
    &:focus {
        outline: none;
        box-shadow: 0 0 1px ${Colors.Grey};
    }
`;

const Opponent = styled.div`
    ${FlexItems};
    ${placeVerticalItems};
`;

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 10vh;
`;

function Home(){
    const [player, setPlayer] = useState('');
    const [opponent, setOpponent] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(
            addUsername({
                player: player,
                opponent: opponent
            })
        )
    }

    const currentUser = useSelector(state => state.players);
    console.log(currentUser);
    return(
        <Fragment>
            <IntroText>
             Are you ready to play ?
            </IntroText>
            <PlayerContent >
                <Player>
                    <img 
                     src={Icons.Player}
                     alt='player1'
                    />
                    <PlayerInput 
                     placeholder='Name of Player 1'
                     size='25'
                     value={player}
                     required
                     onChange={(e) => setPlayer(e.target.value)}
                     type='text'  
                    />
                </Player>
                <Opponent>
                    <img 
                     src={Icons.Opponent} 
                     alt='player2' 
                    />
                    <PlayerInput 
                     placeholder='Name of Player 2'
                     size='25'
                     required
                     value={opponent}
                     onChange={(e) => setOpponent(e.target.value)}
                     type='text'
                    />
                </Opponent>
            </PlayerContent>
            <ButtonContainer>
                <PrimaryButton
                 onClick={handleSubmit}
                 type='submit'
                >
                 Let's Play
                </PrimaryButton>
            </ButtonContainer>
        </Fragment>
    )
}

export const HomeUI = Home;