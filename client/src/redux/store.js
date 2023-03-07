import { configureStore } from "@reduxjs/toolkit"

import useInfoReducer from "../redux/slicers/userInfoSlice"
import reportDetailReducer from "./slicers/reportDetailSlice"
import userDetailReducer from "./slicers/userDetailSlice"

export const store = configureStore({
    reducer: {
        userInfo: useInfoReducer,
        reportDetail: reportDetailReducer,
        userDetail: userDetailReducer,
    }
})