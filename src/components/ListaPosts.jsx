import Link from "next/link";
import styled from "styled-components";

export default function Art({ arrayPosts }) {
  return (
    <>
      {arrayPosts.map((art) => {
        return (
          <>
            <StyledListaPosts>
              <article key={art.id}>
                <Link href="">
                  <h3>{art.titulo}</h3>
                  <p>{art.subtitulo}</p>
                </Link>
              </article>
            </StyledListaPosts>
          </>
        );
      })}
    </>
  );
}
const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;
  }
  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  & a {
    text-decoration: none;
    color: black;
  }

  &:hover,
  &:focus {
    color: #0066ff;
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 49%;
    }
  }
`;
