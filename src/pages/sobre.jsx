import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/container";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="Missão, visão e valores do nosso PetShop"
        />
        <meta name="keywords" content="petshop, missão, visão, valores" />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>
        <Container>
          <h3>Missão</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptas quas cupiditate iusto unde minus dolores animi aliquam
            possimus voluptate numquam corporis incidunt a quia facere velit
            nisi, delectus dicta?
          </p>

          <h3>Visão</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            explicabo excepturi consequatur aperiam id libero dolores minus ex
            animi culpa harum sapiente assumenda ea error, sunt quos pariatur?
            Neque, ullam?
          </p>

          <h3>Valores</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            explicabo excepturi consequatur aperiam id libero dolores minus ex
            animi culpa harum sapiente assumenda ea error, sunt quos pariatur?
            Neque, ullam?
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
