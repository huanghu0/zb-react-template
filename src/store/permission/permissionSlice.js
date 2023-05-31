import { createSlice } from '@reduxjs/toolkit'

export const permissionSlice  = createSlice({
  name: 'permissionSlice',
  initialState: {
    project:{},
    module:[],
    menu:[],
    page:[],
  },
  reducers: {
    permissionAction: (state,perminfo) => {
      state.project = perminfo.payload.project
      state.menu = perminfo.payload.menu
      state.page = perminfo.payload.page
      state.module = perminfo.payload.module
    }
  }

})

export const { permissionAction } = permissionSlice.actions

export default permissionSlice.reducer