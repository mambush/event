import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 20px;
`;

const Home = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <p>Welcome to Event Platform.</p>
    </Container>
  );
};

export default Home;
