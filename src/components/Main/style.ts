import {
  AMARELO,
  BLACK_1000,
  GRAY_100,
  GRAY_300,
  GRAY_400,
  GRAY_600,
  GRAY_800,
  GRAY_950,
  VERDE_200,
  VERDE_900,
  VERMELHO_200,
  WHITE,
} from "./../../utils/constants";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${GRAY_950};
  padding: 20px;
  overflow-y: auto;

  h2 {
    margin: 0;
    padding: 0;
    color: ${GRAY_100};
    text-align: center;
  }
`;

export const Formulario = styled.form`
  background-color: ${GRAY_600};
  width: 500px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px auto;
  border-radius: 8px;
  padding: 20px;

  .input-content {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  padding-left: 20px;
  font-size: 16px;
  height: 15px;
  width: 90%;
  border-radius: 24px;
  border: 1px solid ${GRAY_400};
  outline: none;

  &:focus {
    border-color: ${BLACK_1000};
  }
`;

export const Button = styled.button`
  padding: 20px;
  background-color: ${VERDE_200};
  cursor: pointer;
  height: 20px;
  width: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  outline: none;
  border: none;

  .botao-adicionar {
    color: ${WHITE};
    font-size: 18px;
  }

  &: hover {
    background-color: ${VERDE_900};
  }

  &: disabled {
    background-color: ${GRAY_400};
    cursor: not-allowed;

    .botao-adicionar {
      color: ${GRAY_600};
    }
  }
`;

export const Content = styled.div`
  background-color: ${GRAY_600};
  width: 500px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  border-radius: 8px;
  height: auto;
  padding: 20px;
  gap: 15px;

  .paginacao-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Tarefa = styled.div`
  border-radius: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 15px;

  .tarefa-value {
    padding: 8px 20px;
    border-radius: 20px;
    width: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 1.5rem;

    .botao-excluir {
      cursor: pointer;
      color: red;
      transition: color 0.3s ease;
    }

    .botao-excluir:hover {
      color: darkred;
    }

    .botao-editar {
      cursor: pointer;
      color: yellow;
      transition: color 0.3s ease;
    }

    .botao-editar:hover {
      color: gold;
    }
  }

  &:nth-child(odd) .tarefa-value {
    background-color: ${GRAY_400};
  }

  &:nth-child(even) .tarefa-value {
    background-color: ${GRAY_800};
    color: ${GRAY_100};
  }
`;

export const Separador = styled.div`
  border-left: 1px solid ${WHITE};
  height: 100%;
  margin: 0 4px;
`;

export const SeparadorHorizontal = styled.div`
  border-bottom: 1px solid ${GRAY_300};
  height: 100%;
  width: 100%;
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  font-size: 18px;
  padding: 12px 20px;
  background-color: ${GRAY_300};
  white-space: nowrap;
  gap: 10px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`;

export const Editar = styled.div`
  background-color: ${AMARELO};
  width: 500px;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .botoes-editar {
    display: flex;
    gap: 10px;

    .botao-salvar {
      width: 100%;
      color: ${WHITE};
      font-size: 20px;
      background-color: ${VERDE_200};
      transition: background-color 0.2s ease-in, font-size 0.2s ease-in;

      &:hover {
        background-color: ${VERDE_900};
        font-weight: 500;
        font-size: 22px;
      }

      &: disabled {
        background-color: ${GRAY_400};
        font-size: 20px;
        color: ${GRAY_600};
      }
    }

    .botao-cancelar {
      color: ${WHITE};
      width: 50%;
      font-size: 20px;
      background-color: ${VERMELHO_200};
      transition: background-color 0.2s ease-in, font-size 0.2s ease-in;

      &:hover {
        background-color: rgb(204, 0, 0);
        font-weight: 500;
        font-size: 22px;
      }
    }
  }
`;
