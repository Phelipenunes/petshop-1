import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";
import serverapi from "@/pages/api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverapi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        `Erro requisição: ${resposta.status} - ${resposta.statusText}`
      );
    }

    const categorias = dados.map((post) => post.categoria);
    console.log(categorias);

    /* Gerando um array de categorias Únicas*/
    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu Ruim: " + error.massage);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [categoria, setCategoria] = useState(null);
  const [filtroAtivo, setFiltroAtivo] = useState(false);

  const aplicarFiltro = (event) => {
    const postEscolhido = event.currentTarget.textContent;
    const cursosFiltrados = postEscolhido
      ? posts.filter((post) => post.categoria === postEscolhido)
      : posts;
    setFiltroAtivo(true);
    setListaDePosts(cursosFiltrados);
    setCategoria(postEscolhido);
  };

  const limparFiltro = () => {
    setFiltroAtivo(false);
    setListaDePosts(posts);
  };

  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Web App PetShop criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta
          name="keywords"
          content="PetShop, Banho, Ração, Gato, Cachorro"
          w
        />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>

        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return (
              <button onClick={aplicarFiltro} key={indice}>
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

        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  button {
    padding: 7px;
    background-color: #0b0a3f;
    color: white;
    border-radius: 5px;
    border: none;
    text-transform: capitalize;
    font-size: 0.85vw;
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
