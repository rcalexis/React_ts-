import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as styles from './index.css'
//TAREA RESOVER EL ERROR DE CSS 
import App from './App.js'


//PRIMER MANERA DE CORREGIR EL ERROR QUE DA 
// createRoot(document.getElementById('root')as HTMLElement).render(
//   // la etiqueta stric sirve para que se ejecuten los errores que no alcanzamos a ver 
//   <StrictMode> 
//     <App />
//   </StrictMode>,
// )

//assertion no null 
createRoot(document.getElementById('root')!).render(
  // la etiqueta stric sirve para que se ejecuten los errores que no alcanzamos a ver 
  <StrictMode> 
    <App />
  </StrictMode>,
)
