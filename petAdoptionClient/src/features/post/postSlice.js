import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPost, deleteById, getByuser, search, updateById } from './postApi';
import { message} from 'antd';
const initialState = {

  AllPost: [],
  addpost: '',
  delete: '',
  singlePost: null,
  update: '',
  errors: [],
  allByUser: [],
  errors: []
};

export const CreatePost = createAsyncThunk(

  'Posts/createPosts',
  async (data) => {

    const response = await createPost(data);
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);

//getPostby user

export const GetPostByUser = createAsyncThunk(
  'Posts/getPostsbyuser',

  async (id) => {
    const response = await getByuser(id);
    return response;
  }
);

//getpooooost

export const GetAllPost = createAsyncThunk(

  'post/get',
  async (data) => {
    const response = await search(data);
    return response;
  }
);


//deletePostbyid

export const DeletebyId = createAsyncThunk(
  'Posts/deletePost',

  async (id) => {
    const response = await deleteById(id);
    return response.data;
  }

);

// update
export const UpdatePost = createAsyncThunk(
  'post/updatepost',
  async (data) => {

    const response = await updateById(data);
    return response;
  }

);


export const PostSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder

      //create
      .addCase(CreatePost.pending, (state) => {

      })

      .addCase(CreatePost.fulfilled, (state, action) => {

        console.log(action.payload);
        if (action.payload.status === 200) {
          state.addpost = "success"
          state.allByUser.push(action.payload.data);
          message.success("Annonce créer avec succées")

        } else {

          state.addpost = "failure"
          console.log(action.payload,'daaaaataa');
          state.errors =action.payload.errors.details

        }

      })

      .addCase(CreatePost.rejected, (state, action) => {

      })

      //getallpost
      .addCase(GetAllPost.pending, (state) => {

      })

      .addCase(GetAllPost.fulfilled, (state, action) => {

        state.AllPost = action.payload.data.data
      })

      .addCase(GetAllPost.rejected, (state, action) => {

      })

      //getallpostbyuser

      .addCase(GetPostByUser.pending, (state) => {
      })

      .addCase(GetPostByUser.fulfilled, (state, action) => {

        console.log(action.payload.data, "zzzzzzzzzzzzzzzzzz");
        state.allByUser = action.payload.data.data
      })

      .addCase(GetPostByUser.rejected, (state, action) => {

      })
            //delete
            .addCase(DeletebyId.pending, (state) => {})
            .addCase(DeletebyId.fulfilled, (state, action) => {
      
              if (action.payload.data) {
                  state.delete = "success"
                  let index = state.AllPost.findIndex(AllPost => AllPost._id === action.payload._id);
                  state.AllPost.splice(index, 1);
                  let index1 = state.allByUser.findIndex(allByUser => allByUser._id === action.payload._id);
                  state.allByUser.splice(index1, 1);
                  message.success("Annonce supprimé avec succées")
              }
      
              else {
      
                  state.delete = "failure"
                  message.success("suppression echoué")
              }
          })
            .addCase(DeletebyId.rejected, (state, action) => {
      
            })

      //update

      .addCase(UpdatePost.pending, (state) => {

      })

      .addCase(UpdatePost.fulfilled, (state, action) => {

        if (action.payload.data = 200) {
          state.update = 'success'
        }
        else {

          state.update = 'failure'

        }
      })

      .addCase(UpdatePost.rejected, (state, action) => {

      })

  }

})

export const { } = PostSlice.actions;
export const selectAddPosts = (state) => state.Posts.addpost;
export const selectAllPosts = (state) => state.Posts.AllPost;
export const selectOnePosts = (state) => state.Posts.singlePost;
export const selectdeletePosts = (state) => state.Posts.delete;
export const selectupdatePosts = (state) => state.Posts.update;
export const selectgetByUser = (state) => state.Posts.allByUser;
export const selectErorrs = (state) => state.Posts.errors

export default PostSlice.reducer;