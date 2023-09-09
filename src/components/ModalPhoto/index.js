import Card from "components/Card";
import { ImgOptions } from "context/ImgOptions";
import React from "react";
import { styled } from "styled-components";

const StyledDialog = styled.dialog`
  position: absolute;
  background-color: transparent;
  border: none;
  padding: 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 24px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

const StyledContainerDialog = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ModalPhoto() {
  const { photo, setPhoto } = ImgOptions();

  return (
    <>
      {photo && (
        <StyledContainerDialog>
          <StyledDialog open={!!photo}>
            <form method="dialog">
              <button formMethod="dialog" onClick={() => setPhoto(null)}>
                <img src="assets/icons/fechar.png" alt="Icone de fechar" />
              </button>
              <Card
                font={photo.fonte}
                img={photo.path}
                name={photo.titulo}
                favorite={photo.favorite}
                id={photo.id}
                photo={photo}
                ativo={true}
              />
            </form>
          </StyledDialog>
        </StyledContainerDialog>
      )}
    </>
  );
}
