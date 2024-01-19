import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/container";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - PetShop</title>
        <meta
          name="description"
          content="Venda de ração, coleira, brinquedo e outros produtos para o seu pet"
        />
        <meta name="keywords" content="Ração, coleira, brinquedo, remédio" />
      </Head>
      <StyledProdutos>
        <h2>Conheça nossos produtos</h2>
        <Container>
          <article>
            <h3>Banho</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
              ea, suscipit ipsam assumenda tenetur nobis repellat dolor ullam
              vitae dolorem voluptatum rem minima id maxime, quidem deserunt!
              Alias, perspiciatis id.
            </p>
          </article>
          <article>
            <h3>Tosa</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
              ea, suscipit ipsam assumenda tenetur nobis repellat dolor ullam
              vitae dolorem voluptatum rem minima id maxime, quidem deserunt!
              Alias, perspiciatis id.
            </p>
          </article>
          <article>
            <h3>Castração</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
              ea, suscipit ipsam assumenda tenetur nobis repellat dolor ullam
              vitae dolorem voluptatum rem minima id maxime, quidem deserunt!
              Alias, perspiciatis id.
            </p>
          </article>
        </Container>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
  }

  article {
    padding: 1rem;
  }

  @media screen and (min-width: 800px) {
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
