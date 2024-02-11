import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clickItem } from '../features/cart/AddToCart';
import { Link } from 'react-router-dom';
import Slide from './Nav/Slide';

export function Items() {
  const items=useSelector((state)=>state.allCart.items);
  const dispatch=useDispatch();
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
    <Slide />

    { items.map((item,index)=>(
      <div className='mx-10 mt-10 inline-block	' key={index}>
    <div className="w-[300px] rounded-md border">   
       
    <Link to='/item' onClick={()=>{
      dispatch(clickItem(item));
    }}>
    <div key={index} className="col-span-1 transition duration-200 ease-in hover:opacity-55">
      <img
        src={item.images}
        
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      </div>
      </Link>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {item.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
         
        </p>
        <div className="mt-4">
        <span className="title-font text-xl font-bold text-gray-900">$ {item.price}</span>
          
        </div>
        <button
          type="button" 
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>{
            dispatch(addToCart(item));
            alert("Item added to cart!");
          }
          } >
          Add To Cart
        </button>
      </div>
      </div>
      </div>
      ))}
      </div>

  )
}
