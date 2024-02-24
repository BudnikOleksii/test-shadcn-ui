import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={`counter`}>Counter</Link>
          </li>
          <li>
            <Link to={`quotes`}>Quotes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
