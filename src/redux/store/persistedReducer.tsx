import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import apiSlice from '../slices/apiSlice';
import userSlice from '../slices/userSlice';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['API','user'],
};

const rootReducer = combineReducers({
  API: apiSlice,
  user: userSlice, // Add user slice here

//   additionalData: additionalDataSlice,
//   ownerProfileFormData: ownerProfileFormSlice,
//   customerProfileFormData: customerProfileFormSlice,
//   customerSignupFormData: customerSignupFormSlice,
//   additionalData: additionalDataSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
