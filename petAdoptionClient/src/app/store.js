import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/postSlice';
import adoptantReducer from '../features/adoptant/adoptantSlice';
import especeReducer from '../features/espece/especeSlice';
import DemandeReducer from '../features/demande/demandeSlice';
import SymptomeReducer from '../features/symptome/symptomeSlice';

export const store = configureStore({
  reducer: {
    Posts: postReducer,
    Adoptants: adoptantReducer,
    Especes: especeReducer,
    Demandes: DemandeReducer,
    Symptomes: SymptomeReducer,
  },
});




