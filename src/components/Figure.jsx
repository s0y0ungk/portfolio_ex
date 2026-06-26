function Figure({ data }) {

  const { url, desc } = data;

  return (
    <figure>
      <img src={data.url} alt={data.desc} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}

export default Figure;