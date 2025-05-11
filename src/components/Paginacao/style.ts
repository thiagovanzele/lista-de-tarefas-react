import styled from "styled-components";
import {
  GRAY_100,
  GRAY_300,
  GRAY_400,
  GRAY_600,
  GRAY_800,
  GRAY_900,
  WHITE,
} from "../../utils/constants";

export const Container = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  gap: 25px;

  .select-container {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: ${GRAY_300};
    padding: 5px 30px 5px 10px;
    color: ${WHITE};
    border: none;
    border-radius: 8px;
    outline: none;

    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz48L3N2Zz4=");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 20px;
  }

  .quantidade-itens {
    display: flex;
    gap: 5px;
    align-items: center;

    .quantidade-titulo {
      color: ${GRAY_100};
      font-size: 14px;
      margin-right: 5px;
    }
  }

  .quantidade-paginas-container {
    .quantidade-paginas {
      color: ${GRAY_100};
      font-size: 14px;
    }
  }

  .botoes-paginacao {
    display: flex;
    gap: 4px;
  }
`;

export const BotaoPaginacao = styled.button`
  padding: 6px 10px;
  background-color: ${GRAY_400};
  color: ${WHITE};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  width: 35px;

  &:disabled {
    background-color: ${GRAY_800};
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:hover:not(:disabled) {
    opacity: 0.6;
  }
`;
