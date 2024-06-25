import React, { useState } from 'react'

const Product = ({post}) => {
const [selected,setselected]=useState(false);

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={`${post.image}`}/>
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      <div>
        <button>
          {
            selected ? <p> Remove Item</p>:<p>Add to Cart</p>
          }
        </button>
      </div>
    </div>
  )
}

export default Product
