import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div style={{display:"flex",gap:"20px"}}>
      <Link to="/">Home</Link>
      <Link to="/flashSalePage">FlashSalePage</Link>
      <Link to="/blogPage">BlogPage</Link>
      <Link to="/brandPage">All Brands</Link>
      <Link to="/categoryPage">All Categories</Link>
      <Link to="/cartPage">Cart</Link>
      </div>
      <Outlet/>
    </div>
  )
}
export default Layout
