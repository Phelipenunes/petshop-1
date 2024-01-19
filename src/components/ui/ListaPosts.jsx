import Link from "next/link";

export default function Art({ children }) {
  return (
    <>
      {children.map((art) => {
        return (
          <>
            <article key={art.id}>
              <Link href="">
                <h3>{art.titulo}</h3>
                <p>{art.subtitulo}</p>
              </Link>
            </article>
          </>
        );
      })}
    </>
  );
}
