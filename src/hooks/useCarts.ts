import { db } from "../data/db";
import { useState } from "react";
import { useEffect, useMemo } from "react";
import type { Guitar, cartItem, GuitarID } from "../types/index";

export const useCart = () => {
  // const loadcart = ()=>{

  //       const localstorageCart = localStorage.getItem("cart")

  //     return localstorageCart ? JSON.parse(localstorageCart): [];
  //   };
  const loadcart = (): cartItem[] => {
    const localstorageCart = localStorage.getItem("cart");
    return localstorageCart ? JSON.parse(localstorageCart) : [];
  };

  // const [data,setData] = useState(db);
  const [data, setData] = useState(db);
  const [cart, setCart] = useState(loadcart); // aqui le estamos diciendo que cart siempre va a contener objetos de tipo cartitem

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  ////////////////////////////////////////////

  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  function aumentarCantidad(id: GuitarID ['id']) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < 5) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function disminuirCantidad(id:GuitarID  ['id']) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function RemoveFromCart(id:GuitarID  ['id']) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const total = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  /////////////////////////////////////

  //quantity = 1 no existe dentro del carrito agrega solo 1 de valor
  //en caso de que exista aummetara quantity en +1

  function addToCart(item: Guitar) {
    // Verifica si la guitarra ya esta en el carrito usando findIndex

    //const itemExist = cart.findIndex((guitar: Guitar) => guitar.id === item.id);
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id); // se cambio por que El array cart contiene cartItem no Guitar

    if (itemExist >= 0) {
      //limitando la cantidad del carrito a 5

      if (cart[itemExist].quantity >= 5) return;
      // la copia del carrito
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      // actualiza el carrito con el nuevo arreglo
      setCart(updatedCart);
    } else {
      // item.quantity =1;
      // // Si no existe se agrega la propiedad quantity con valor 1 y se agrega al carrito
      // setCart([...cart,item]);

      //quedo haci por que Guitar no tiene la propiedad quantity
      //entonces se crea un nuevo objeto de tipo cartitem en donde copea las propirdades de Guitar y luego agrega el quantity
      const newItem: cartItem = {
        ...item,
        quantity: 1,
      };
      // setCart([...cart, item]);
      //se cambio por que item es un Guitar pero cart solo acepta CartItem
      setCart([...cart, newItem]);
    }
  }

  /////////////////////////
  return {
    data,
    setData,
    cart,
    setCart,
    loadcart,

    total,
    clearCart,
    RemoveFromCart,
    disminuirCantidad,
    aumentarCantidad,
    isEmpty,
    addToCart,
  };
};
