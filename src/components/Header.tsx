// hooks : useState, useEffect y useContext // estos son los primeros 

//tarea para que sirven:
//UseReducer, useCallback, useMemo,suseRef,UseImperativeHandle
//useLayoutEffect, useInsertionEffect
// import { useCart } from "../hooks/useCarts";
import type { HeaderProps} from "../types/index";




function Header({  cart,
  total,
  clearCart,
  RemoveFromCart,
  disminuirCantidad,
  aumentarCantidad,
  isEmpty,}: HeaderProps) {
  // const { total,
  //       clearCart,
  //       RemoveFromCart,
  //       disminuirCantidad,
  //       aumentarCantidad,
  //       isEmpty } = useCart()


  return (
    <>
      {/* <div>
        {isEmpty ? (
          <p className="text-center">el carrito esta vacio</p>
        ) : (
          <p className="text-center">el carrito no esta vacio</p>
        )}
      </div> */}

      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                <div id="carrito" className="bg-white p-3">

                  {isEmpty ? (
                    <p className="text-center">el carrito esta vacio</p>
                  ) : (
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((guitar) => (
                            <tr key={guitar.id}>
                              <td>
                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                              </td>
                              <td>{guitar.name}</td>
                              <td className="fw-bold">${guitar.price}</td>
                              <td className="flex align-items-start gap-4">
                                <button type="button" className="btn btn-dark" onClick={() => disminuirCantidad(guitar.id)} >
                                  -
                                </button>
                                {guitar.quantity}
                                
                                <button type="button" className="btn btn-dark"  onClick={() => aumentarCantidad(guitar.id)}>
                                  +
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" type="button" onClick={() => RemoveFromCart(guitar.id)}>
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p className="text-end">
                        Total pagar: <span className="fw-bold">${total}</span>
                      </p>
                      <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => clearCart()} >Vaciar Carrito</button>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;


