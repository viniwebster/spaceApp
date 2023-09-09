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
import ModalPhoto from "components/ModalPhoto";
import ImgOptionsProvider from "context/ImgOptions";

const StyledContainerBanner = styled.section`
  display: flex;
  gap: 2rem;
  margin-top: 72px;
`;

const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <>
      <GaleryProvider>
        <SearchProvider>
          <ImgOptionsProvider>
            <Container>
              <GlobalStyle />
              <Header />
              <StyledContainerBanner>
                <Aside />
                <Banner />
              </StyledContainerBanner>
              <StyledContent>
                <Tags />
                <Cards />
              </StyledContent>
            </Container>
            <ModalPhoto />
          </ImgOptionsProvider>
          <Footer />
        </SearchProvider>
      </GaleryProvider>
    </>
  );
}

export default App;
