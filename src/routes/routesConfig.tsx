import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import {Home} from '@/src/common/Home/Home'
import {NotFoundPage} from "../components/NotFoundPage/NotFoundPage.tsx";
import {ParsingsList} from "@/src/components/ParsingsList/ParsingsList.tsx";
import ServicesPage from "@/src/components/ServicesPage/ServicesPage.tsx"
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
          },
          { 
            path: '/servicesPage',
            element: <ServicesPage/>,
            errorElement: <NotFoundPage/>
          }
        ]
	}
])
export default routeConfig
