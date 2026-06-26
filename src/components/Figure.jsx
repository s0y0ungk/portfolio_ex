function Figure({ data }) {
  
  return (
    <figure>
      <img alt={data.desc} src={data.url} />
      <figcaption>{data.desc}</figcaption>
    </figure>
  );
}

export default Figure;