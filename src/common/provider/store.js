import {
    configureStore
} from '@reduxjs/toolkit';

import 
    playersReducer
from 'common/provider/slices/playerSlice'

const store = configureStore({
    reducer:{
        players: playersReducer
    }
})

export default store;
