import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    data: [],
  },
  reducers: {
    setDashboardTableData: (state, action) => {
      state.data = action.payload
    },
    deleteStoreColumn: (state, action) => {
      const columnName = action.payload;
      const index = state.data?.table_headers?.findIndex(item => item.name === columnName);

      if (index !== -1) {
        state.data.table_headers = state.data.table_headers.filter((_, i) => i !== index);
        state.data.table_data = state.data.table_data.map(row => row.filter((item, i) => i !== index));
      }
    }
  },
})

export const { deleteStoreColumn, setDashboardTableData } = dashboardSlice.actions

export default dashboardSlice.reducer