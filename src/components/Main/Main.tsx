import React, { useEffect, useState } from "react";
import {
  Botoes,
  Button,
  Container,
  Content,
  Editar,
  Formulario,
  Input,
  Overlay,
  Tarefa,
} from "./style";
import { FaPlus } from "react-icons/fa6";
import { FiEdit, FiTrash, FiX } from "react-icons/fi";
import { FaSave } from "react-icons/fa";

export interface TarefaProp {
  id: number;
  value: string;
}

const Main = () => {
  const [listaDeTarefas, setListaDeTarefas] = useState<TarefaProp[]>([]);
  const [novaTarefa, setNovaTarefa] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tarefaEditada, setTarefaEditada] = useState<TarefaProp>(
    {} as TarefaProp
  );

  const adicionarTarefa = (value: string): void => {
    setListaDeTarefas((antigo) => [
      ...antigo,
      { id: antigo.length + 1, value },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa("");
    }
  };

  const handleExcluirTarefa = (id: number): void => {
    setListaDeTarefas((tarefasAnteriores) =>
      tarefasAnteriores.filter((tarefa) => tarefa.id !== id)
    );
  };

  const handleEditarTarefa = (id: number): void => {
    const tarefaParaEditar = listaDeTarefas.find((tar) => tar.id === id);

    if (tarefaParaEditar) {
      setTarefaEditada({ id: id, value: tarefaParaEditar.value });
      setShowModal(true);
    }
  };

  const handleSalvarEdicao = (id: number): void => {
    if (tarefaEditada.value.trim()) {
      setListaDeTarefas((prev) =>
        prev.map((tarefa) =>
          tarefa.id === id ? { ...tarefa, value: tarefaEditada.value } : tarefa
        )
      );
      setShowModal(false);
    }
  };

  return (
    <Container>
      <Formulario onSubmit={handleSubmit}>
        <h2>Nova tarefa</h2>
        <div className="input-content">
          <Input
            type="text"
            placeholder={"Digite sua tarefa..."}
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          ></Input>
          <Button disabled={!novaTarefa} type="submit">
            <FaPlus className="botao-adicionar" />
          </Button>
        </div>
      </Formulario>

      {listaDeTarefas?.length > 0 && (
        <Content>
          <h2>Lista de tarefas</h2>
          {listaDeTarefas.map((tarefa) => (
            <Tarefa key={tarefa.id}>
              <div className="tarefa-value">{tarefa.value}</div>
              <Botoes>
                <FiEdit
                  className="botao-editar"
                  onClick={() => handleEditarTarefa(tarefa.id)}
                />
                <FiTrash
                  className="botao-excluir"
                  onClick={() => handleExcluirTarefa(tarefa.id)}
                />
              </Botoes>
            </Tarefa>
          ))}
        </Content>
      )}

      {showModal && (
        <>
          <Overlay />
          <Editar>
            <h2>Editar tarefa</h2>
            <Input
              type="text"
              value={tarefaEditada.value}
              placeholder={"Digite sua tarefa"}
              onChange={(e) =>
                setTarefaEditada({
                  id: tarefaEditada.id,
                  value: e.target.value,
                })
              }
            ></Input>

            <div className="botoes-editar">
              <Button
                className="botao-salvar"
                disabled={!tarefaEditada.value}
                onClick={() => handleSalvarEdicao(tarefaEditada.id)}
              >
                <FaSave className="botao-salvar-icone" />
              </Button>
              <Button
                className="botao-cancelar"
                onClick={() => setShowModal(false)}
              >
                <FiX className="botao-cancelar-icone" />
              </Button>
            </div>
          </Editar>
        </>
      )}
    </Container>
  );
};

export default Main;
