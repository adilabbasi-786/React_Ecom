import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useContext } from "react";
import { Context } from "../../../Utils/Context";

const CartItem = () => {
    const{cartItems,handleCartProductQuantity,handleRemoveFromCart}=useContext(Context);
console.log(cartItems)
     return(
    <div className="cart-products">
        
{cartItems.map((item)=>(

     <div key={item.id}  className="cart-product">
         
             <div className="img-container">
                 <img src={process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url} alt="" />
             </div>
             <div className="prod-details">
                 <span className="name">{item.attributes.title}</span>
                 <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
                 <div className="quantity-buttons">
                     <span onClick={()=>handleCartProductQuantity("dec", item)}>-</span>
                     <span>{item.attributes.quantiy}
</span>
                    
                
                     <span onClick={()=>handleCartProductQuantity("inc", item)}>+</span>
                 </div>
                 <div className="text">
                     <span>{item.attributes.quantiy
}</span>
                     <span>*</span>
                     <span className="highlight">&#8360;{item.attributes.price * item.attributes.quantiy}</span>
                 </div>
                </div>
          </div>
))}
            
       

     
    </div>
     )
    


     

    
};

export default CartItem;

