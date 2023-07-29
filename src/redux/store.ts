import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favouritesSlice, peopleSlice } from "./states";

export interface AppStore {
    people: Person[];
    favourites: Person[];
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favourites: favouritesSlice.reducer
    }
})