
import Header from "./components/Header"
import Guitarras from "./components/Guitarras"
import { useCart } from "./hooks/useCarts";


function App() {
  const { data,
    cart,
    total,
    clearCart,
    RemoveFromCart,
    disminuirCantidad,
    aumentarCantidad,
    isEmpty, addToCart } = useCart();


  // const [login,setLogin]= useState(5)
  // setLogin(5)
  // console.log(login);


  return (

    <>
      <Header

        cart={cart}
        total={total}
        clearCart={clearCart}
        RemoveFromCart={RemoveFromCart}
        disminuirCantidad={disminuirCantidad}
        aumentarCantidad={aumentarCantidad}
        isEmpty={isEmpty}

      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) =>

            <Guitarras

              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            // cart={cart}
            // setCart={setCart}

            />
          )}


        </div>
      </main>



      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          {/* <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={()=> setData(data => [...data,nuevoDato])}
                    >Agregar al Carrito</button> */}

          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
