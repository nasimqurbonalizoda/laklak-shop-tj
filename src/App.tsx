import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/homePage/homePage'
import SignupPage from './pages/registerPage/signupPage/signupPage'
import LoginPage from './pages/registerPage/loginPage/loginPage'
import CartPage from './pages/cartPage/cartPage'
import AboutPage from './pages/aboutPage/aboutPage'
import WishlistPage from './pages/wishlistPage/wishlistPage'
import BlogPage from './pages/blogPage/blogPage'
import CategoryPage from './pages/allCategory/categoryPage/categoryPage'
import SubCategoryPage from './pages/allCategory/subcategoryPage/subCategoryPage'
import BrandPage from './pages/allBrands/brandPage/brandPage'
import ColorPage from './pages/allBrands/colorPage/colorPage'
import FlashSalePage from './pages/flashSale/flashSalePage'
import Notificationss from './pages/notification/notificationss'
import SubCategoryByIdPage from './pages/allCategory/subcategoryPage/subCategoryByIdPage'
import Checkout from './pages/checkoutPage/checkoutPage'

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
          path:"/aboutPage/:id",
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
          path:"/checkoutPage",
          element:<Checkout/>
        },
        {
          path:"/categoryPage/:categoryId",
          element:<SubCategoryPage/>
        },
        {
          path:"/subCategoryPage/:id",
          element:<SubCategoryByIdPage/>
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
