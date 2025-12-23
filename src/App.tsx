import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './store/pages/homePage/homePage'
import SignupPage from './store/pages/registerPage/signupPage/signupPage'
import LoginPage from './store/pages/registerPage/loginPage/loginPage'
import CartPage from './store/pages/cartPage/cartPage'
import AboutPage from './store/pages/aboutPage/aboutPage'
import WishlistPage from './store/pages/wishlistPage/wishlistPage'
import BlogPage from './store/pages/blogPage/blogPage'
import CategoryPage from './store/pages/allCategory/categoryPage/categoryPage'
import SubCategoryPage from './store/pages/allCategory/subcategoryPage/subCategoryPage'
import BrandPage from './store/pages/allBrands/brandPage/brandPage'
import ColorPage from './store/pages/allBrands/colorPage/colorPage'
import FlashSalePage from './store/pages/flashSale/flashSalePage'
import Notificationss from './store/pages/notification/notificationss'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:"/signupPage",
          element:<SignupPage/>
        },
        {
          path:"/loginPage",
          element:<LoginPage/>
        },
        {
          path:"/cartPage",
          element:<CartPage/>
        },
        {
          path:"/aboutPage",
          element:<AboutPage/>
        },
        {
          path:"/wishlistPage",
          element:<WishlistPage/>
        },
        {
          path:"/blogPage",
          element:<BlogPage/>
        },
        {
          path:"/categoryPage",
          element:<CategoryPage/>
        },
        {
          path:"/subCategoryPage",
          element:<SubCategoryPage/>
        },
        {
          path:"/brandPage",
          element:<BrandPage/>
        },
        {
          path:"/colorPage",
          element:<ColorPage/>
        },
         {
          path:"/flashSalePage",
          element:<FlashSalePage/>
        },
        {
          path:"/notificationss",
          element:<Notificationss/>
        },

      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App
