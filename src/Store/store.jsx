// import { configureStore } from '@reduxjs/toolkit'
// import medicineReducer from './reducers/medicineSlice'
// import tvReducer from './reducers/tvSlice'
// import personReducer from './reducers/personSlice'


// export const store = configureStore({
//   reducer: {
//     movie: medicineReducer,
//     tv: tvReducer,
//     person: personReducer,
//   },
// })

// //reduxdrycoolextension

import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import tvReducer from './reducers/tvSlice'
import personReducer from './reducers/personSlice'


export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
  },
})