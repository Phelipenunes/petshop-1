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
  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Web App PetShop criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta name="keywords" content="PetShop, Banho, Ração, Gato, Cachorro" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>

        <div>
          {categorias.map((categoria, indice) => {
            return <button key={indice}>{categoria}</button>;
          })}
        </div>

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
