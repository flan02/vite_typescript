import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = []

// TODO : Si quisieramos modificarlos o eliminarlos tendriamos que hacerlo aqui dentro del reducer
export const peopleSlice = createSlice({
    name: LocalStorageTypes.PEOPLE,
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state)
            return action.payload
        }
    }
})

export const { addPeople } = peopleSlice.actions