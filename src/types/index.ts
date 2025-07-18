
export type Guitar = {
      id: number,
      name: string,
      image: string,
      description: string,
      price: number,
}

export type GuitarProps ={
guitar: Guitar,  
addToCart: (item: Guitar) => void
}



export type cartItem = Omit<Guitar, "description"> & {
    quantity: number,
}


export type GuitarID = Pick<Guitar, "id">


export type HeaderProps ={
  cart: cartItem []
  isEmpty: boolean
  aumentarCantidad: (id:GuitarID  ['id']) => void
  disminuirCantidad : (id:GuitarID  ['id']) => void
  clearCart : ()=>void
  RemoveFromCart : (id:GuitarID  ['id']) => void
  total:number


}

//  usar este types en cart 


// export type cartItemP = Pick<Guitar, "id"|"name"| "price"| "image"> & {
//     quantity: number,
// }

//este es el ejemplo si se estuviera haciendo con interfaces 
// export interface cartItemI extends Guitar {
//     quantity: number
// }




//Guitar herede a un nuevo type 
// carGuitar 
// quantyty 