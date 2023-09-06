import { styled } from "styled-components";
import Aside from "./components/Aside";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { Container, GlobalStyle } from "./UI/GlobalStyles";
import Tags from "components/Tags";
import Cards from "components/Cards";
import Footer from "components/Footer";
import GaleryProvider from "context/Galery/Galery";
import SearchProvider from "context/Search/Search";

const StyledMain = styled.main`
  display: flex;
  gap: 2rem;
  margin-top: 72px;
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <>
    <GaleryProvider>
    <SearchProvider>
      <Container>
        <GlobalStyle />
        <Header />
        <StyledMain>
          <Aside />
          <StyledContent>
            <Banner />
            <Tags />
            <Cards />
          </StyledContent>
        </StyledMain>
      </Container>
      <Footer />
      </ SearchProvider>
      </GaleryProvider>
    </>
  );
}

export default App;
