import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteAdoptant, getallAdoptant, getallAdoptantbyRole } from './adoptantAPI';


const initialState = {

   AllAdoptant:[],
   delete:''
 
};


//getAllAdoptant

export const GetAllAdoptant = createAsyncThunk(
    'Adoptants/getAdoptants',
  
    async () => {
      const response = await getallAdoptantbyRole();
      return response;
    }
  );
//deleteAdoptant

export const DeleteAdoptant = createAsyncThunk(
    'Adoptants/deleteAdoptants',
  
    async (id) => {
      const response = await deleteAdoptant(id);
      return response.data;
    }
  );



  
export const AdoptantSlice = createSlice({
    name: 'Adoptants',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
          
    //getallAdoptant

      .addCase(GetAllAdoptant.pending, (state) => {
    })

    .addCase(GetAllAdoptant.fulfilled, (state, action) => {
      console.log(action.payload);
      state.AllAdoptant = action.payload.data.data
    })

    .addCase(GetAllAdoptant.rejected, (state, action) => {
    })

    //deleteAdoptant

      .addCase(DeleteAdoptant.pending, (state) => {
    })

    .addCase(DeleteAdoptant.fulfilled, (state, action) => {
    
      if (action.payload.data=200) {
        state.delete = 'success'

        let index = state.AllAdoptant.findIndex(AllAdoptant => AllAdoptant._id === action.payload._id);
        state.AllAdoptant.splice(index, 1);

      } else {

        state.delete = 'failure'
      }   

    })

    .addCase(DeleteAdoptant.rejected, (state, action) => {
    })
}

})

export const { } = AdoptantSlice.actions;
export const selectAllAdoptant = (state) => state.Adoptants.AllAdoptant
export const selectdeleteAdoptant = (state) => state.Adoptants.delete
export default AdoptantSlice.reducer;