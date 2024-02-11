import { createSlice } from "@reduxjs/toolkit";
import productData from "../../productData";


const initialState={
    cart:[],
    itemsdata:[],
    items: productData,
    totalQuantity:0,
    toalPrice:0,
}
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let find=state.cart.findIndex((item)=>item.id === action.payload.id);
            if(find>=0){
               state.cart[find].quantity+=1;
            }else{

                state.cart.push(action.payload);
            }
        },
        deleteCart:(state,action)=>{
            let find=state.cart.findIndex((item)=>item.id === action.payload.id);
            if(find>=0){
               state.cart[find].quantity-=1;
            }else{
                state.cart.splice(find, 1);
            }
        },
        clickItem:(state,action)=>{
            let find=state.itemsdata.findIndex((item)=>item.id === action.payload.id);
            state.itemsdata = []; 
                state.itemsdata.push(action.payload);
            
        },
        increaseItem:(state,action)=>{
            let find=state.cart.findIndex((item)=>item.id === action.payload.id);
            let find2=state.itemsdata.findIndex((item)=>item.id === action.payload.id);
            if(find>=0 || find2>=0){
                state.cart[find].quantity+=1;
                state.itemsdata[find2].quantity+=1;
             }
             
        }
    }

})

export const {addToCart,clickItem,increaseItem,deleteCart}=cartSlice.actions;
export default cartSlice.reducer;