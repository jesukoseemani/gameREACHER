const initState = {
  game:{platforms: []},
  screenshot:{results: []},
  isLoading: true,
}


const detailReducer = (state=initState, action) => {
   switch(action.type){
     case "FETCH_DETAILS":
       return {
         ...state,
         game: action.payload.game,
         screenshot: action.payload.screenshot,
         isLoading: false,
       }
       case "IT_LOADING":
         return{
           ...state,
           isLoading: true
         }
       default :
       return {...state}
   }
}

export default detailReducer