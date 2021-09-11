import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalItems:0,
    totalAmount:0
}
const cartReducer =(state, action)=> {
    if(action.type === 'add'){
        const currItemPrice =  +action.item.price.cost;
        // if(state.items?.filter(product => product.id === action.item.id).length>0){
            const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingItem = state.items[existingItemIndex];

            if(existingItem){
            const availQuantity = state.items[existingItemIndex].quantity;
            const updatedQuant = 1 + availQuantity ;
            
            const upadatedItem = {...existingItem, quantity: updatedQuant}
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex] = upadatedItem;
            return{
                items: [...updatedItems],
                totalItems: +state.totalItems + 1,
                totalAmount: +state.totalAmount + currItemPrice
            };
        }else{
            const upadatedItem = state.items.concat(action.item);
            return{
                items:upadatedItem,
                totalItems: +state.totalItems + 1,
                totalAmount: +state.totalAmount + currItemPrice   
            };
            
        }
    }
    if(action.type === 'decrement'){
        // console.log(action, 'action')
        const itemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItems = state.items;
        const existingItem = existingItems[itemIndex];
        // console.log(existingItem , 'decrement');
        const currItemPrice = existingItem?.price.cost;
        const itemQuantity = existingItem?.quantity;
        
        if( itemQuantity > 1){
            const updatedItem = {...existingItem, quantity: +(itemQuantity-1)};
            const availableItems = state.items;
            const updatedItems = [...availableItems];
            updatedItems[itemIndex] = updatedItem;
            return{
                items: [...updatedItems],
                totalItems: +state.totalItems - 1,
                totalAmount: +state.totalAmount - currItemPrice
            }
        }else{
            const updatedItem = existingItems.splice(itemIndex, 1);
            let updatedAmount = +state.totalAmount - +currItemPrice;
            if(Number.isNaN(updatedAmount)){
                updatedAmount = 0;
            }
            return{
                items: [...updatedItem],
                totalItems: +state.totalItems - 1,
                totalAmount:  updatedAmount
            }
        }
    }
    if(action.type === 'delete'){
        const currentitemIndex = state.items.findIndex(item => item.id === action.id);
        const itemToRemove = state.items[currentitemIndex];
        const itemQuantity = itemToRemove?.quantity;
        const totalAmountOfItem = +itemQuantity * itemToRemove?.price.cost;
        let updatedAmount = state.totalAmount - totalAmountOfItem;
        let updatedQuantity = +state.totalItems - +itemQuantity;
        // state.items.splice(currentitemIndex, 1); 
        const updatedItems = state.items.filter(item => item.id !== action.id);

        if(Number.isNaN(updatedAmount)){
            updatedAmount=+state.totalItems;
        }
        if(Number.isNaN(+updatedQuantity)){
            updatedQuantity=0;
        }
        console.log(currentitemIndex, 'index2')
        return{
            items:[...updatedItems],
            totalItems: +updatedQuantity,
            totalAmount: +updatedAmount,
        }
    }
};


const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    console.log(cartState, 'ret CartState Provider')

    const addItemToCartHandeler = (item) => {
        // console.log(item, 'cp onadd fn')
        dispatchCartAction({type:'add', item:item})
    };

    const removeItemFromCartHandeler = (id) => {
        dispatchCartAction({type:'decrement', id:id});
        console.log(id, 'remove item h')
    };
    const deleteItemFromCartHandler =(id) => {
        dispatchCartAction({type: 'delete', id: id});
        console.log(id, 'delete item hand')
    }
    const cartContext = {
        items: cartState?.items,
        totalItems: cartState?.totalItems,
        totalAmount: cartState?.totalAmount,
        addItem: addItemToCartHandeler,
        removeItem: removeItemFromCartHandeler,
        deleteItem: deleteItemFromCartHandler 
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;