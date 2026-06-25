function Nav({ data }) {
  console.log("Nav render");

  const lists = data.map(work => (
    <li key={work.id}>
      <a href="">{work.title}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}

export default Nav;