import { styled } from "styled-components";
import Aside from "./components/Aside";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { Container, GlobalStyle } from "./UI/GlobalStyles";
import Tags from "components/Tags";
import Cards from "components/Cards";
import Footer from "components/Footer";

const StyledSectionBanner = styled.section`
  display: flex;
  margin-top: 72px;
  gap: 2rem;
`;

function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Header />
        <StyledSectionBanner>
          <Aside />
          <Banner />
        </StyledSectionBanner>
        <Tags />
        <Cards />
      </Container>
      <Footer />
    </>
  );
}

export default App;
