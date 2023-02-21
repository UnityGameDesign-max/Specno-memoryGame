import{
    Fragment
}from 'react';

import{
    GameBoardUI
}from 'ui/GamePlay/components/GameBoard';

function GamePlay(){
    return(
        <Fragment>
            <GameBoardUI />
        </Fragment>
    )
}
export const GamePlayUI = GamePlay;