import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    player: '',
    opponent: '',
    playerScore: 0,
    opponentScore: 0,

};

const playerSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addUsername(state, action){
            state.player = action.payload;
            state.opponent = action.payload;
        }
    }
})

export const { addUsername } = playerSlice.actions;

export default playerSlice.reducer;