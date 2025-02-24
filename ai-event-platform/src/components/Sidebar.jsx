import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  background: #eaeaea;
  height: 100vh;
  padding: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>Categories</h3>
      <ul>
        <li>Music</li>
        <li>Business</li>
        <li>Sports</li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
