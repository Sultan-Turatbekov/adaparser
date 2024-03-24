import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import {Second} from '../components/Second/Second'
import {Home} from '../components/Home/Home'
import {NotFoundPage} from "../components/NotFoundPage/NotFoundPage.tsx";
const routeConfig = createBrowserRouter([
	{
        path: '/',
        element: <App/>,
        errorElement: <NotFoundPage/>,
        children:[
          { 
            path: '/',
            element: <Home/>,
            errorElement: <NotFoundPage/>
          },
          { 
            path: '/second',
            element: <Second/>,
            errorElement: <NotFoundPage/>
          }
        ]
	}
])
export default routeConfig
