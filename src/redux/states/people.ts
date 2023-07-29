import { Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = []

// * Es una muy buena practica antes posibles cambios de valores
enum LocalStorageTypes {
    PEOPLE = "people",
    FAVORITES = "favorites"
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}


// TODO : Si quisieramos modificarlos o eliminarlos tendriamos que hacerlo aqui dentro del reducer
export const peopleSlice = createSlice({
    name: LocalStorageTypes.PEOPLE,
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state)
            return action.payload
        },
        addFavorite: (state, action) => { }
    }
})