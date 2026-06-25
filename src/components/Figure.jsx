function Figure({ data }) {
  console.log("Figure 확인");

  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <figcaption>{data.desc}</figcaption>
    </figure>
  );
}

export default Figure;