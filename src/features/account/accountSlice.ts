import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import agent from '../../app/api/agent';
import { User } from '../../app/models/user';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface AccountState {
  user: User | null;
}

const initialState: AccountState = {
  user: null,
};

export const signInUser = createAsyncThunk<User, FieldValues>(
  'account/signInUser',
  async (data, thunkAPI) => {
    try {
      // const user = await agent.Account.login(data);
      const response = await agent.Account.login(data);

      let user: User = {
        email: 'n9102125@gmail.com',
        token: response.response,
      };

      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchCurrentUser = () => {
  if (!localStorage.getItem('user')) return false;
  setUser(JSON.parse(localStorage.getItem('user')!));
};

// export const fetchCurrentUser = createAsyncThunk<User>(
//   'account/fetchCurrentUser',
//   async (_, thunkAPI) => {
//     thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem('user')!)));
//     try {
//       const user = await agent.Account.currentUser();
//       localStorage.setItem('user', JSON.stringify(user));
//       return user;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.data });
//     }
//   },
//   {
//     condition: () => {
//       if (!localStorage.getItem('user')) return false;
//     },
//   }
// );

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchCurrentUser.rejected, (state) => {
    //   let navigate = useNavigate();
    //   state.user = null;
    //   localStorage.removeItem('user');
    //   toast.error('Session expired - please login again');
    //   navigate('/');
    // });
    builder.addMatcher(
      // isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled),
      isAnyOf(signInUser.fulfilled),
      (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        // state.user.token = action.payload.response
      }
    );
    builder.addMatcher(isAnyOf(signInUser.rejected), (state, action) => {
      throw action.payload;
    });
  },
});

export const { setUser, signOut } = accountSlice.actions;
