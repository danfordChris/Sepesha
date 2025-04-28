import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from '../../components/CustomeAlert';
import axiosInstance from '../../utils/Constants/Axios';
import { ENDPOINTS } from '../../utils/Constants/EndPoints';


// Define types for the state
interface ApiState {
  data: {
    getStartedResponse: any
    registrationResponse: any;
    loginResponse: any

    getcategoriesResponse: any
    getProfileUserResposne: any
    getAllVehiclesResponse: any,
    registerVehicleResponse: any,
    requestRideApiResponse: any,
    getDriverVehicleResponse:any,
    getdriverbookingsResponse:any


  };
  loading: {
    getStartedLoading: boolean
    registrationLoading: boolean;
    loginLoading: boolean
    getProfileUserLoading: boolean
    getAllVehiclesLoading: boolean,
    getcategoriesLoading: boolean,
    registerVehicleLoading: boolean,
    requestRideApiLoading: boolean,
    getDriverVehicleLoading:boolean,
    getdriverbookingsLoading:boolean

  };
  error: string | null;
}

// Initial state with proper typing
const initialState: ApiState = {
  data: {
    getStartedResponse: [],
    registrationResponse: [],
    loginResponse: [],
    getProfileUserResposne: [],
    getAllVehiclesResponse: [],
    getcategoriesResponse: [],
    registerVehicleResponse: [],
    requestRideApiResponse: [],
    getDriverVehicleResponse:[],
    getdriverbookingsResponse:[]


  },
  loading: {
    getStartedLoading: false,
    registrationLoading: false,
    loginLoading: false,
    getProfileUserLoading: false,
    getAllVehiclesLoading: false,
    getcategoriesLoading: false,
    registerVehicleLoading: false,
    requestRideApiLoading: false,
    getDriverVehicleLoading:false,
    getdriverbookingsLoading:false

  },
  error: null,
};

const addAsyncCases = (
  builder: any,
  action: any,
  loadingKey: keyof ApiState['loading'],
  responseKey: keyof ApiState['data']
) => {
  builder
    .addCase(action.pending, (state: ApiState) => {
      state.loading[loadingKey] = true;
      state.error = null;
    })
    .addCase(action.fulfilled, (state: ApiState, action: PayloadAction<any[]>) => {
      state.loading[loadingKey] = false;
      state.data[responseKey] = action.payload;
    })
    .addCase(action.rejected, (state: ApiState, action: PayloadAction<any>) => {
      state.loading[loadingKey] = false;
      state.error = action.error ? action.error.message : 'Error occurred';
    });
};

export const GETSTARTED = createAsyncThunk<any, void>(
  '/get-started',
  async () => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.GETSTARTED);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);


// Define async thunks
export const registration = createAsyncThunk(
  '/register',
  async (data: any) => {
    try {
      const response = await axiosInstance.post(ENDPOINTS.REGISTER, data,{
        headers: {
          
          "Content-Type": "multipart/form-data"
        },
      });
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  'login',
  async (data: any) => {
    try {
      const response = await axiosInstance.post(ENDPOINTS.LOGIN, data);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);

export const verifyotp = createAsyncThunk(
  '/user/resend-otp',
  async (data: any) => {
    try {
      const response = await axiosInstance.post(ENDPOINTS.verifyotp, data);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);

export const getCategory = createAsyncThunk(
  '/user/categories',
  async () => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.categories);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);
export const getcustomervendorbookings = createAsyncThunk(
  '/booking/getcustomervendorbookings',
  async (data: any) => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.getcustomervendorbookings, {
        params: data // Send data as query parameters
      });
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);

export const getdriverbookings = createAsyncThunk(
  '/booking/get-driver-bookings',
  async (data: any) => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.getdriverbookings, {
        params: data // Send data as query parameters
      });
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);





export const getbookingsAPi = createAsyncThunk(
  '/user/bookings',
  async () => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.bookings);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);

export const getProfileUser = createAsyncThunk<any, any>(
  'api/user',
  async (data) => {

    console.log(data, 'data')

    // Constructing the URL dynamically
    const url = `${ENDPOINTS.user}${'/' + data}`;

    console.log(url, 'url')

    try {
      const response = await axiosInstance.get(url, {

      });
      return response.data;
    } catch (error: any) {
      console.log('Error in getCoursesById:', error?.response?.data);
      CustomAlert({ message: error?.response?.data?.message });
      throw error;
    }
  }
);

export const registerVehicle = createAsyncThunk("api/vehicle", async (formData: any) => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("Using token for auth:", token);

    const response = await axiosInstance.post(ENDPOINTS.vehicle, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    });

    return response.data;
  } catch (error: any) {
    console.log("Error in vehicle registration:", error);

    if (error.response) {
      console.log("Error status:", error.response.status);
      console.log("Error data:", error.response.data);
      console.log("Error headers:", error.response.headers);
      console.log("Request config:", error.config);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up request:", error.message);
    }

    CustomAlert({ message: error?.response?.data?.message || "Failed to register vehicle" });
    throw error;
  }
});


export const requestRideApi = createAsyncThunk("api/request-ride", async (formData: any) => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("Using token for auth:", token);

    const response = await axiosInstance.post(ENDPOINTS.requestride, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    });

    return response.data;
  } catch (error: any) {
    console.log("Error in vehicle registration:", error);

    if (error.response) {
      console.log("Error status:", error.response.status);
      console.log("Error data:", error.response.data);
      console.log("Error headers:", error.response.headers);
      console.log("Request config:", error.config);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up request:", error.message);
    }

    CustomAlert({ message: error?.response?.data?.message || "Failed to register vehicle" });
    throw error;
  }
});


export const getAllVehicles = createAsyncThunk(
  '/user/vechiles',
  async () => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.vehicles);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);

export const updateProfile = createAsyncThunk(
  "api/updateProfile",
  async ({ userId, formData }: any) => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("Using token:", token);

      const fullUrl = `${ENDPOINTS.updateProfile}/${userId}`;
      console.log("Full URL:", fullUrl); // Add this line
      const response = await axiosInstance.post(
        fullUrl,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.log("Update profile error:", error);

      let errorMessage = "Failed to update profile";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error response:", error.response.data);
      }

      CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);

export const createSupport = createAsyncThunk(
  "api/supportticketcreate",
  async ({ formData }: any) => {
    try {
 
      const token = await AsyncStorage.getItem("token");

      const fullUrl = `${ENDPOINTS.supportticketcreate}`;
      console.log("Full URL:", fullUrl); // Add this line
      const response = await axiosInstance.post(
        fullUrl,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.log("Update profile error:", error);

      let errorMessage = "Failed to update profile";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error response:", error.response.data);
      }

      CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);


export const bookingByIdAPi = createAsyncThunk(
  "api/booking",
  async ({ bookingId }: any) => {
    try {

      const fullUrl = `${ENDPOINTS.booking}/${bookingId}`;
      console.log("Full URL:", fullUrl); // Add this line
      const response = await axiosInstance.get(
        fullUrl,
      );

      return response.data;
    } catch (error: any) {
      console.log("Update profile error:", error);

      let errorMessage = "Failed to update profile";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error response:", error.response.data);
      }

      CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);


export const cancelRide = createAsyncThunk(
  "api/cancelRide",
  async ({ bookingId, cancelby, cancelreason }: { 
    bookingId: string;
    cancelby: string;
    cancelreason: string;
  }) => {
    try {
      
      const response = await axiosInstance.get(
        `cancel-ride/${bookingId}`, 
        {
          params: {  
            cancel_by: cancelby, 
            cancel_reason: cancelreason
          },
        }
      );

      return response.data;
    } catch (error: any) {
      let errorMessage = "Failed to update ride";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error details:", {
          status: error.response.status,
          data: error.response.data
        });
      }
      CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);

export const updateRide = createAsyncThunk(
  "api/updateRide",
  async ({ bookingId, status, driverId, vehicleId }: { 
    bookingId: string;
    status: string;
    driverId: string;
    vehicleId: string;
  }) => {
    try {
      
      const response = await axiosInstance.get(
        `update-ride/${bookingId}`, // URL with bookingId
        {
          params: {  // GET requests use params, not body
            status,
            driver_id: driverId, // Match API's expected field name
            vehicle_id: vehicleId
          },
        }
      );

      return response.data;
    } catch (error: any) {
      let errorMessage = "Failed to update ride";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error details:", {
          status: error.response.status,
          data: error.response.data
        });
      }
      CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);

export const getDriverVehicle = createAsyncThunk(
  "api/updateRide",
  async ({ userId }: {
    userId: string;
  }) => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("Using token:", token);

      const fullUrl = `${ENDPOINTS.vehicledriver}/${userId}`; // Using rideId in the URL
      console.log("Full URL:", fullUrl);
      
      const response = await axiosInstance.get( // Typically use PUT for updates
        fullUrl,
      );

      return response.data;
    } catch (error: any) {
      console.log("Update ride error:", error);
      let errorMessage = "Failed to update ride";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error response:", error.response.data);
      }
      // CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);

export const driverRating = createAsyncThunk(
  "api/driverRating",
  async ({ userId }: {
    userId: string;
  }) => {
    try {


      const fullUrl = `${ENDPOINTS.driverRating}/${userId}`; // Using rideId in the URL
      console.log("Full URL:", fullUrl);
      
      const response = await axiosInstance.get( 
        fullUrl,
      );

      return response.data;
    } catch (error: any) {
      console.log("Update ride error:", error);
      let errorMessage = "Failed to update ride";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error response:", error.response.data);
      }
      // CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);

export const getMyVehcile = createAsyncThunk(
  "api/vehicle",
  async ({ userId }: {
    userId: string;
  }) => {
    try {


      const fullUrl = `${ENDPOINTS.myVehcile}/${userId}`; // Using rideId in the URL
      console.log("Full URL:", fullUrl);
      
      const response = await axiosInstance.get( 
        fullUrl,
      );

      return response.data;
    } catch (error: any) {
      console.log("Update ride error:", error);
      let errorMessage = "Failed to update ride";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
        console.log("Error response:", error.response.data);
      }
      // CustomAlert({ message: errorMessage });
      throw error;
    }
  }
);
export const supportcontacts
= createAsyncThunk(
  '/user/support-contacts',
  async () => {
    try {
      const response = await axiosInstance.get(ENDPOINTS.supportcontacts);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);
export const driverRatingCreate = createAsyncThunk(
  '/user/driverRatingCreate',
  async (data: any) => {
    try {
      const response = await axiosInstance.post(ENDPOINTS.driverRatingCreate, data);
      return response.data;
    } catch (error: any) {
      CustomAlert({ message: error.response?.data?.message });
      throw error;
    }
  }
);

// export const verifyEmail = createAsyncThunk(
//   '/user/verify-email',
//   async (data: any) => {
//     try {
//       const response = await axiosInstance.post(ENDPOINTS.VERIFYEMAIL, data);
//       return response.data;
//     } catch (error: any) {
//       CustomAlert({ message: error.response?.data?.message });
//       throw error;
//     }
//   }
// );

// export const forgorApiVerify = createAsyncThunk(
//   '/user/forgorApiVerify',
//   async (data: any) => {
//     try {
//       const response = await axiosInstance.post(ENDPOINTS.FORGOTOTPVERIFY, data);
//       return response.data;
//     } catch (error: any) {
//       CustomAlert({ message: error.response?.data?.message });
//       throw error;
//     }
//   }
// );



// export const SocialLogin = createAsyncThunk(
//   '/user/social-login',
//   async (data: any) => {
//     try {
//       const response = await axiosInstance.post(ENDPOINTS.SOCIALOGIN, data);
//       return response.data;
//     } catch (error: any) {
//       // CustomAlert({ message: error.response?.data?.message });
//       throw error;
//     }
//   }
// );


// export const logout = createAsyncThunk(
//   '/user/logout',
//   async () => {
//     const token = await AsyncStorage.getItem('token');
//     console.log(token);
//     try {
//       const response = await axiosInstance.patch(
//         ENDPOINTS.LOGOUT,
//         {},
//         {
//           headers: {
//             token,
//           },
//         }
//       );
//       return response.data;
//     } catch (error: any) {
//       const message = error.response?.data?.message || 'Something went wrong';
//       CustomAlert({ message });
//       throw error; // Rethrow the error to ensure rejection is captured by Thunk
//     }
//   }
// );

// export const deleteAccount = createAsyncThunk(
//   'user/delete',
//   async () => {
//     const token = await AsyncStorage.getItem('token');
//     console.log(token)
//     try {
//       const response = await axiosInstance.delete(ENDPOINTS.DELETE, {
//         headers: {
//           token,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       CustomAlert({ message: error?.response?.data?.message || 'Something went wrong' });
//       throw error;
//     }
//   }
// );


// export const ForgotPasswordApi = createAsyncThunk(
//   '/user/ForgotPassword',
//   async (data: any) => {

//     console.log(data)
//     try {
//       const response = await axiosInstance.post(ENDPOINTS.FORGOTPASSWORD,data);
//       return response.data;
//     } catch (error: any) {
//       CustomAlert({ message: error.response?.data?.message });
//       throw error;
//     }
//   }
// );

// export const setpassword = createAsyncThunk(
//   '/user/set-password',
//   async (data: { password: string,id:string }) => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       console.log(data);

//       const response = await axiosInstance.post(
//         ENDPOINTS.SETPASSWORD,
//         { password: data.password ,id:data?.id}, 

//       );
//       return response.data;
//     } catch (error: any) {
//       console.error('Error occurred:', error.response?.data);
//       CustomAlert({ message: error.response?.data?.message || 'An error occurred' });
//       throw error;
//     }
//   }
// );


// export const changePassword = createAsyncThunk(
//   '/user/set-password',
//   async (data: { password: string, oldPass: string }) => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       // Log data to check if password and oldPass are correct
//       console.log(data);

//       // Make the request to change the password
//       const response = await axiosInstance.patch(
//         ENDPOINTS.CHANGEPASS,
//         { new_password: data.password, old_password: data.oldPass }, 
//         {
//           headers: {
//             token,  // Make sure token is passed correctly in headers
//           },
//         }
//       );

//       // Return the response data if the request is successful
//       return response.data;
//     } catch (error: any) {
//       // Log the error to console
//       console.error('Error occurred:', error?.response?.data);

//       // Show a custom alert with the error message or a default one
//       CustomAlert({ message: error?.response?.data?.message || 'An error occurred' });

//       // Optionally, you can throw a custom error message if needed
//       throw error;
//     }
//   }
// );




// export const EditProfileAPI = createAsyncThunk<any, any>(
//   'api/EDITPROFILE',
//   async ( {data} ) => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       console.log(data, token)
//       const response = await axiosInstance.put(ENDPOINTS.EDITPROFILE, data, {
//         headers: {
//           token: token,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       console.log('Error in create profile:-', error?.response?.data);
//       CustomAlert({ message: error?.response?.data?.message });
//       throw error;
//     }
//   },
// );

// export const getCategory = createAsyncThunk(
//   '/user/categories',
//   async () => {
//     try {
//       const response = await axiosInstance.get(ENDPOINTS.GETCATEGORY);
//       return response.data;
//     } catch (error: any) {
//       CustomAlert({ message: error.response?.data?.message });
//       throw error;
//     }
//   }
// );

// export const getProfile = createAsyncThunk(
//   '/user/getProfile',
//   async () => {
//         const token = await AsyncStorage.getItem('token');

//     try {
//       const response = await axiosInstance.get(ENDPOINTS.GETPROFILE,{
//         headers: {
//           token,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       CustomAlert({ message: error.response?.data?.message });
//       throw error;
//     }
//   }
// );



// export const getCourses = createAsyncThunk(
//   '/user/courses',
//   async () => {
//     const token = await AsyncStorage.getItem('token');

//     console.log(token,'sdfsd')

//     try {
//       const response = await axiosInstance.get(ENDPOINTS.COURSES,{
//         headers: {
//           token,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       CustomAlert({ message: error.response?.data?.message });
//       throw error;
//     }
//   }
// );

// export const getCoursesById = createAsyncThunk<any, any>(
//   'api/getCoursesByID',
//   async (data) => {
//     const token = await AsyncStorage.getItem('token');


//     // Constructing the URL dynamically
//     const url = `${ENDPOINTS.GETCOURSE}${'/'+data?.type}`;

//     try {
//       const response = await axiosInstance.get(url, {
//         headers: {
//           token,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       console.log('Error in getCoursesById:', error?.response?.data);
//       CustomAlert({ message: error?.response?.data?.message });
//       throw error;
//     }
//   }
// );

// export const getModuleListCourse = createAsyncThunk<any, any>(
//   'api/getModuleListCourse',
//   async (data) => {
//     const token = await AsyncStorage.getItem('token');


//     const url = `${ENDPOINTS.GETMODULECOURSE}${'/'+data?.type+'/modules'}`;

//     try {
//       const response = await axiosInstance.get(url, {
//         headers: {
//           token,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       console.log('Error in getCoursesById:', error?.response?.data);
//       CustomAlert({ message: error?.response?.data?.message });
//       throw error;
//     }
//   }
// );


// export const LeasonLikeDislike = createAsyncThunk(
//   '/user/lesson-like-dislike',
//   async ({ id }: { id: string }) => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       console.log(id);

//       const response = await axiosInstance.post(
//         ENDPOINTS.LIKEDISLIKE,
//         { id }, 
//         {
//           headers: {
//             token: token, 
//           },
//         }
//       );
//       return response.data;
//     } catch (error: any) {
//       console.error('Error occurred:', error.response?.data);
//       CustomAlert({
//         message: error.response?.data?.message || 'An error occurred',
//       });
//       throw error; 
//     }
//   }
// );

// export const postComment = createAsyncThunk(
//   '/user/post-comment',
//   async ({ comment, lesson_id }: { comment: string; lesson_id: string }, { rejectWithValue }) => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       console.log(comment, lesson_id)

//       const response = await axiosInstance.post(
//         ENDPOINTS.POSTCOMMENT,
//         { comment, lesson_id }, 
//         {
//           headers: {
//             'Content-Type': 'application/json', 
//             token: token,
//           },
//         }
//       );

//       return response.data;
//     } catch (error: any) {
//       console.error('Error occurred:', error.response?.data);
//       CustomAlert({
//         message: error.response?.data?.message || 'An error occurred',
//       });

//       return rejectWithValue(error.response?.data || 'An error occurred');
//     }
//   }
// );

// export const saveUnsaveLesson = createAsyncThunk(
//   '/user/post-comment',
//   async ({lesson_id }: {lesson_id: string }, { rejectWithValue }) => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       console.log(lesson_id)

//       const response = await axiosInstance.post(
//         ENDPOINTS.SAVEUNSAVELESSON,
//         {lesson_id }, 
//         {
//           headers: {
//             'Content-Type': 'application/json', 
//             token: token,
//           },
//         }
//       );

//       return response.data;
//     } catch (error: any) {
//       console.error('Error occurred:', error.response?.data);
//       CustomAlert({
//         message: error.response?.data?.message || 'An error occurred',
//       });

//       return rejectWithValue(error.response?.data || 'An error occurred');
//     }
//   }
// );






// export const getModuleListLessons = createAsyncThunk<any, any>(
//   'api/getModuleListLessons',
//   async (data) => {
//     const token = await AsyncStorage.getItem('token');


//     const url = `${ENDPOINTS.GETMODULELESSON}${'/'+data?.type+'/lessons'}`;

//     try {
//       const response = await axiosInstance.get(url, {
//         headers: {
//           token,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       console.log('Error in getCoursesById:', error?.response?.data);
//       CustomAlert({ message: error?.response?.data?.message });
//       throw error;
//     }
//   }
// );




const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addAsyncCases(builder, GETSTARTED, 'getStartedLoading', 'getStartedResponse');
    addAsyncCases(builder, registration, 'registrationLoading', 'registrationResponse');
    addAsyncCases(builder, login, 'loginLoading', 'loginResponse');
    addAsyncCases(builder, getCategory, 'getcategoriesLoading', 'getcategoriesResponse');
    addAsyncCases(builder, getProfileUser, 'getProfileUserLoading', 'getProfileUserResposne');

    addAsyncCases(builder, getAllVehicles, 'getAllVehiclesLoading', 'getAllVehiclesResponse');

    addAsyncCases(builder, registerVehicle, 'registerVehicleLoading', 'registerVehicleResponse');

    addAsyncCases(builder, requestRideApi, 'requestRideApiLoading', 'requestRideApiResponse');

    addAsyncCases(builder, getDriverVehicle, 'getDriverVehicleLoading', 'getDriverVehicleResponse');

    addAsyncCases(builder, getdriverbookings, 'getdriverbookingsLoading', 'getdriverbookingsResponse');

  }
});

export default apiSlice.reducer;

