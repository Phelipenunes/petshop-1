import Container from "@/components/ui/container";
import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta
          name="description"
          content="Entre em contato conosco pelo formulário abaixo"
        />
        <meta name="keywords" content="petshop, contato" />
      </Head>
      <StyledContato>
        <h2>Fale Conosco</h2>
        <Container>
          <form action="" method="post">
            <div>
              <label htmlFor="nome">nome:</label>
              <input type="nome" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
                maxLength={500}
              ></textarea>
            </div>
            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }

  form div {
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: var(--cor-primaria-fundo);
    color: #ffffff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
