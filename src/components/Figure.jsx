function Figure({ data }) {
  console.log("Figure 확인");

  const { url, desc } = data;

  return (
    <figure>
      <img src={url} alt={desc} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}

export default Figure;