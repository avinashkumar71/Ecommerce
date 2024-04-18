
export const reducer =(state,action)=>{
    
    switch(action.type){
        case 'add':
            return {...state,cart:[...state['cart'],action.payload],total_item:state.total_item+1,total_price:state.total_price+action.payload.price}
        case 'remove':
            const rest_prt = state.cart.filter((item)=>item.id!=action.id)
            return{cart:[...rest_prt],total_item:state['total_item']-action.qty,total_price:state['total_price']-action.price}
        case 'clear':
            return {
                cart:[],
                total_item:0,
                total_price:0
            }
        default:
            return {...state}        
    }
}