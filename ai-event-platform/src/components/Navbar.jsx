import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #f4f4f4;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Nav>
      <h2>Event Platform</h2>
      <div>
        <Link to="/">Home</Link> | <Link to="/events">Events</Link> | <Link to="/reviews">Reviews</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
