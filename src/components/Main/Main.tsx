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
import axios from "axios";

export interface TarefaProp {
  tarefaId: number;
  descricao: string;
}

const Main = () => {
  const [listaDeTarefas, setListaDeTarefas] = useState<TarefaProp[]>([]);
  const [novaTarefa, setNovaTarefa] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tarefaEditada, setTarefaEditada] = useState<TarefaProp>(
    {} as TarefaProp
  );

  const adicionarTarefa = async (value: string): Promise<void> => {
    try {
      const response = await axios.post("http://localhost:8080/tarefas", {
        descricao: value,
      });
      if (response.status === 201) {
        setListaDeTarefas((prev) => [
          ...prev,
          { tarefaId: response.data.tarefaId, descricao: value },
        ]);
      }
    } catch (error) {
      console.log("Erro ao adicionar tarefa: ", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      await adicionarTarefa(novaTarefa);
      setNovaTarefa("");
    }
  };

  const loadData = async (): Promise<void> => {
    try {
      const response = await axios.get("http://localhost:8080/tarefas", {});
      if (response.status === 200) {
        setListaDeTarefas(response.data);
      }
    } catch (error) {
      console.log("Erro ao buscar dados: ", error);
    }
  };

  const handleExcluirTarefa = async (id: number): Promise<void> => {
    await axios.delete(`http://localhost:8080/tarefas/${id}`, {});
    loadData();
  };

  const handleEditarTarefa = async (id: number): Promise<void> => {
    const response = await axios.get(`http://localhost:8080/tarefas/${id}`, {});

    if (response.status === 200) {
      setTarefaEditada({
        tarefaId: response.data.tarefaId,
        descricao: response.data.descricao,
      });
      setShowModal(true);
    }
  };

  const handleSalvarEdicao = async (id: number): Promise<void> => {
    if (tarefaEditada.descricao.trim()) {
      await axios.put(`http://localhost:8080/tarefas/${id}`, {
        descricao: tarefaEditada.descricao,
      });

      setShowModal(false);
      loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
            <Tarefa key={tarefa.tarefaId}>
              <div className="tarefa-value">{tarefa.descricao}</div>
              <Botoes>
                <FiEdit
                  className="botao-editar"
                  onClick={() => handleEditarTarefa(tarefa.tarefaId)}
                />
                <FiTrash
                  className="botao-excluir"
                  onClick={() => handleExcluirTarefa(tarefa.tarefaId)}
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
              value={tarefaEditada.descricao}
              placeholder={"Digite sua tarefa"}
              onChange={(e) =>
                setTarefaEditada({
                  tarefaId: tarefaEditada.tarefaId,
                  descricao: e.target.value,
                })
              }
            ></Input>

            <div className="botoes-editar">
              <Button
                className="botao-salvar"
                disabled={!tarefaEditada.descricao}
                onClick={() => handleSalvarEdicao(tarefaEditada.tarefaId)}
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
