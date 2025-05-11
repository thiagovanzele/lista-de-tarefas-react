import React from "react";
import { BotaoPaginacao, Container } from "./style";

interface PaginacaoProps {
  atual: number;
  resultadosPorPagina: number;
  totalPaginas: number;
  handleResultadosPorPagina: (quantidade: number) => void;
  handlePaginaChange: (novaPagina: number) => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({
  atual,
  resultadosPorPagina,
  totalPaginas,
  handleResultadosPorPagina,
  handlePaginaChange,
}) => {
  return (
    <Container>
      <div className="quantidade-itens">
        <span className="quantidade-titulo">Itens por página</span>
        <select
          value={resultadosPorPagina}
          className="select-container"
          onChange={(e) => handleResultadosPorPagina(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
      <div className="quantidade-paginas-container">
        <span className="quantidade-paginas">{`Página ${
          atual + 1
        } de ${totalPaginas}`}</span>
      </div>
      <div className="botoes-paginacao">
        <BotaoPaginacao
          onClick={() => handlePaginaChange(0)}
          disabled={atual === 0}
        >
          {"<<"}
        </BotaoPaginacao>
        <BotaoPaginacao
          onClick={() => handlePaginaChange(atual - 1)}
          disabled={atual === 0}
        >
          {"<"}
        </BotaoPaginacao>
        <BotaoPaginacao
          onClick={() => handlePaginaChange(atual + 1)}
          disabled={atual + 1 === totalPaginas}
        >
          {">"}
        </BotaoPaginacao>
        <BotaoPaginacao
          onClick={() => handlePaginaChange(totalPaginas - 1)}
          disabled={atual + 1 === totalPaginas}
        >
          {">>"}
        </BotaoPaginacao>
      </div>
    </Container>
  );
};

export default Paginacao;
