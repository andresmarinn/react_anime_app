import { configureStore, createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        value: JSON.parse(localStorage.getItem('favoritesAnimes')) || []
    },
    reducers: {
        addFavorite: (state, action) => {
            let verifyFavorite = state.value.every((favorite) => action.payload.id !== favorite.id);
            if(verifyFavorite){
                state.value = [...state.value, action.payload];
            }
            localStorage.setItem('favoritesAnimes', JSON.stringify(state.value));
        },

        removeFavorite: (state, action) => {
            state.value = state.value.filter((favorite) => favorite.id !== action.payload);
            localStorage.setItem('favoritesAnimes', JSON.stringify(state.value));
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites.value;

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer
    }
})