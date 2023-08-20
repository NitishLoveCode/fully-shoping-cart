import {createSlice, current} from "@reduxjs/toolkit"



const cart = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const cheacked_dublicate=state.findIndex((item)=>item.id===action.payload.id);
            if(cheacked_dublicate >=0){
                state[cheacked_dublicate].quantity ++;
            }else{
                state.push(action.payload)
            }
        },
        remove_single:(state,action)=>{
            const cheacked_dublicate=state.findIndex((item)=>item.id===action.payload.id);
            if(cheacked_dublicate >=0){
                if(state[cheacked_dublicate].quantity <=1){
                    state.splice(action.payload,1)
                }else{
                    state[cheacked_dublicate].quantity --;
                }
            }
        },
        remove_from_cart:(state,action)=>{
            state.splice(action.payload,1)
        },
        filter_Products:(state,action)=>{
            console.log(action.payload);
        }
    }
})

export default cart.reducer
export const {addToCart,remove_single,remove_from_cart,filter_Products}=cart.actions


