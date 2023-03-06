import { createSlice } from "@reduxjs/toolkit" 

export const reportDetailSlice = createSlice({
    name: "reportDdetail",
    initialState: { detailInfo: null },

    reducers: {
        setDetail: (state, action) => {
            state.detailInfo = action.payload
        }
    }
})

export const { setDetail } = reportDetailSlice.actions

export default reportDetailSlice.reducer

