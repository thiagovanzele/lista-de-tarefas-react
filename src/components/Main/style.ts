import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const Formulario = styled.form`
  background-color: #ffffff;
  width: 500px;
  height: 200px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid #ffffff;
  cursor: pointer;

  &: hover {
    background-color: blue;
  }
`;
