import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverapi from "@/pages/api/server";

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);

  try {
    const resposta = await fetch(`${serverapi}/posts/${id}`);
    if (!resposta.ok) {
      throw new Error(
        `Erro requisição: ${resposta.status} - ${resposta.statusText}`
      );
    }
    const dados = await resposta.json();
    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu Ruim: " + error.massage);
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  console.log(post);
  return (
    <>
      <Head>
        <title>Título do post... - PetShop</title>
        <meta name="description" content="Descrição do post..." />
      </Head>
      <StyledPost>
        <h2>Título do post </h2>
        <Container>
          <h3>Categoria do post </h3>
          <p>Descrição do post</p>
        </Container>
      </StyledPost>
    </>
  );
}
const StyledPost = styled.article`
  h2::before {
    content: "📑 ";
  }
`;
