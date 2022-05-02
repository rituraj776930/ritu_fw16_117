import { GETDATA } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
    switch (type){
      case GETDATA : {
        // console.log(payload)
        return {
          ...state , 
          data : payload
        }
      }
      default : {
        return state
      }
    }
};
export { reducer };
