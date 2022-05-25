
import { configureStore } from "@reduxjs/toolkit"
import reducer1 from './slice1'

export default configureStore({
   reducer: {
      reducer1
   }
})