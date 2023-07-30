import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = []

// TODO : Si quisieramos modificarlos o eliminarlos tendriamos que hacerlo aqui dentro del reducer
export const favouritesSlice = createSlice({
    name: LocalStorageTypes.FAVORITES,
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavourite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state)
            return action.payload
        },
        removeFavourite: (state, action) => {
            const filteredState = state.filter((p: Person) => p.id !== action.payload.id)
            setLocalStorage(LocalStorageTypes.FAVORITES, filteredState)
            return filteredState
        }
    }
})


export const { addFavourite, removeFavourite } = favouritesSlice.actions