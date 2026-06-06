function Article({ title, date, preview }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;