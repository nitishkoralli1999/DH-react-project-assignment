import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './features/dashboardSlice'

export default configureStore({
  reducer: {
    dashboard: dashboardReducer
  },
})