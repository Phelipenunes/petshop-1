import styled from "styled-components";

export default function ListaCategorias({
  categorias,
  aplicarFiltro,
  limparFiltro,
  filtroAtivo,
  categoriaAtiva,
}) {
  return (
    <StyledCategorias>
      {categorias.map((categoria, indice) => {
        return (
          <button
            className={categoria === categoriaAtiva ? "ativo" : ""}
            onClick={aplicarFiltro}
            key={indice}
          >
            {categoria}
          </button>
        );
      })}
      {filtroAtivo && (
        <button onClick={limparFiltro} className="limpar">
          Limpar filtro
        </button>
      )}
    </StyledCategorias>
  );
}

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  button {
    padding: 7px;
    background-color: #1b18c2;
    color: white;
    border-radius: 5px;
    border: none;
    text-transform: capitalize;
    font-size: 0.85vw;

    &.ativo {
      background-color: var(--cor-primaria-fundo);
    }
  }

  .limpar {
    background-color: gray;
    &:hover {
      background-color: slategray;
    }
    &:before {
      content: "";
    }
  }
`;
