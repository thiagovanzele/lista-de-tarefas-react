import React, { useEffect, useState } from "react";
import { Button, Container, Formulario, Input } from "./style";

const Main = () => {
  const [listaDeTarefas, setListaDeTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const adicionarTarefa = (value: string): void => {
    setListaDeTarefas((antigo) => [...antigo, value]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa("");
    }
  };

  useEffect(() => {
    console.log(novaTarefa);
  }, [novaTarefa]);
  return (
    <Container>
      {listaDeTarefas.map((tarefa, index) => (
        <p key={index}>{tarefa}</p>
      ))}

      <h1>Lista de Tarefas</h1>
      <Formulario onSubmit={handleSubmit}>
        <Input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        ></Input>
        <Button type="submit">Enviar</Button>
      </Formulario>
    </Container>
  );
};

export default Main;
