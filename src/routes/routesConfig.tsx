import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import {Home} from '@/src/common/Home/Home'
import {NotFoundPage} from "../components/NotFoundPage/NotFoundPage.tsx";
import {ParsingsList} from "@/src/components/ParsingsList/ParsingsList.tsx";
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
            path: '/parsings-list',
            element: <ParsingsList/>,
            errorElement: <NotFoundPage/>
          }
        ]
	}
])
export default routeConfig
