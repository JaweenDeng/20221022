/*
 * @Author: djw
 * @Description: homelayout
 */
import { Link, Outlet, NavLink } from 'react-router-dom';
export const HomeLayout = () => {
  return (
    <>
      <Link to="/Counter1">Counter1</Link>
      <Link to="/PostList">PostList</Link>
      <Link to={`/PostList/123`}>PostList123</Link>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : ""
          };
        }}
        to={`/PostList/444`}
      >
        PostList444
      </NavLink>
      <Outlet />
    </>
  )
}