import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getall, getmaladie } from './symptomeApi';
const initialState = {

  all:[],
  maladies:[]
};

export const GetAll = createAsyncThunk(

  'symptome/get',
  async (data) => {
    const response = await getall(data);
    return response;
  }
  
);
export const GetMaladie= createAsyncThunk(

  'maladie/get',
  async (data) => {
    const response = await getmaladie(data);
    return response;
  }
  
);

export const SymptomeSlice = createSlice({

  name: 'Symptomes',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder

      //getall
      .addCase(GetAll.pending, (state) => {

      })

      .addCase(GetAll.fulfilled, (state, action) => {

        state.all = action.payload.data.data
      console.log(state.bb,'eeeee');
      
  })
      .addCase(GetAll.rejected, (state, action) => {

      })


      //getall
      .addCase(GetMaladie.pending, (state) => {

      })

      .addCase(GetMaladie.fulfilled, (state, action) => {
        state.maladies = action.payload.data.data
      console.log(state.maladies,'eeeee');
  })
      .addCase(GetMaladie.rejected, (state, action) => {

      })
  }

})

export const {  } = SymptomeSlice.actions;

export const selectAll = (state) => state.Symptomes.all;
export const selectMaladie = (state) => state.Symptomes.maladies;


export default SymptomeSlice.reducer;