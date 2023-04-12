import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/register">Registration</NavLink>
      </li>
    </ul>
  );
};
