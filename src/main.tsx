import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {RouterProvider} from "react-router-dom";
import routesConfig from "./routes/routesConfig.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={routesConfig}/>
  </React.StrictMode>,
)
