import { createSlice } from "@reduxjs/toolkit" 

export const userDetailSlice = createSlice({
    name: "userDetail",
    initialState: { detailInfo: null },

    reducers: {
        setUserDetail: (state, action) => {
            state.detailInfo = action.payload
        }
    }
})

export const { setUserDetail } = userDetailSlice.actions

export default userDetailSlice.reducer

