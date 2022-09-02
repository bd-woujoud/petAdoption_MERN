import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createdemande, getdemande } from './demandeApi';



const initialState = {

   addDemande:'',
   demandes:[]
};


//CreateDemande

export const CreateDemande = createAsyncThunk(
    'Demandes/createDemande',
  
    async (data) => {
      const response = await createdemande(data);
      return response;
    }
  );


//getoneDemande

export const GetDemande = createAsyncThunk(

    'Demandes/GetDemande',
  
    async () => {
      const response = await getdemande();
      return response;
    }

  );


export const DemandeSlice = createSlice({

    name: 'Demandes',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder

   //getall

   .addCase(GetDemande.pending, (state) => {

  })

  .addCase(GetDemande.fulfilled, (state, action) => {

    state.demandes = action.payload.data.data

  })

  .addCase(GetDemande.rejected, (state, action) => {

  })

}

})

export const { } = DemandeSlice.actions;

export const selectCreateDemande = (state) => state.Demandes.addDemande
export const selectGetDemande = (state) => state.Demandes.demandes


export default DemandeSlice.reducer;