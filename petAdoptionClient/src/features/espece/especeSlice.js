import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createEspece, deleteEspece, getallespece, updateEspece } from './especeApi';


const initialState = {

   AllEspeces:[],
   addEspece:'',
   delete:'',
   update:''
 
};

//getAllEspece

export const GetAllEspece = createAsyncThunk(
    'Especes/getEspeces',
  
    async () => {
      const response = await getallespece();
      return response;
    }
  );

//Createespece

export const CreateEspece = createAsyncThunk(
    'Especes/createEspece',
  
    async (data) => {
      const response = await createEspece(data);
      return response;
    }
  );

//deleteespece

export const DeleteEspece = createAsyncThunk(
    'Especes/deleteEspece',
  
    async (id) => {
      const response = await deleteEspece(id);
      return response.data;
    }
  );

//updateespece

export const UpdateEspece = createAsyncThunk(
    'Especes/updateEspece',
  
    async (data) => {
      const response = await updateEspece(data);
      return response.data;
    }
  );

export const EspeceSlice = createSlice({
    name: 'Especes',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
          
    //getallEspece

      .addCase(GetAllEspece.pending, (state) => {
    })

    .addCase(GetAllEspece.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.AllEspeces = action.payload.data.data
    })

    .addCase(GetAllEspece.rejected, (state, action) => {
    })

    //createEspece

    .addCase(CreateEspece.pending, (state) => {
    })

    .addCase(CreateEspece.fulfilled, (state, action) => {
        if (state.addEspece = 'success') {

            state.AllEspeces.push(action.payload.data);

          } else {

            state.addEspece = 'failure'

          }
    })
    .addCase(CreateEspece.rejected, (state, action) => {
    })


    //delete
    

      .addCase(DeleteEspece.pending, (state) => {

    })

    .addCase(DeleteEspece.fulfilled, (state, action) => {

        if (action.payload.data=200) {
            state.delete = 'success'
            let index = state.AllEspeces.findIndex(AllEspeces => AllEspeces._id === action.payload._id);
            state.AllEspeces.splice(index, 1);
          } else {
  
            state.delete = 'failure'
          }   
    })
    .addCase(DeleteEspece.rejected, (state, action) => {

    })


      //update

      .addCase(UpdateEspece.pending, (state) => {

    })

    .addCase(UpdateEspece.fulfilled, (state, action) => {

      if (action.payload.data = 200) {

        if (action.payload.data=200) {
            state.update = action.payload.data
  
          } else {
  
            state.update = 'failure'
  
          }  } 
      
    })

    .addCase(UpdateEspece.rejected, (state, action) => {

   

    })
}

})

export const { } = EspeceSlice.actions;
export const selectAllEspece = (state) => state.Especes.AllEspeces
export const selectCreateEspece = (state) => state.Especes.addEspece
export const selectDeleteEspece = (state) => state.Especes.delete
export const selectupdateEspece = (state) => state.Especes.update
export default EspeceSlice.reducer;