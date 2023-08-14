
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { loadingSlice } from './loading'
import { globalsSlice } from './globals'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer,
    globals: globalsSlice.reducer
  }
})
