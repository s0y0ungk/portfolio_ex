function Nav({ data, onChangeMode }) {
  return (
    <nav>
      <ul>
        {data.map(work => (
          <li
            key={work.id}
            onClick={e => {
              e.preventDefault();
              onChangeMode(work.id);
            }}
          >
            <a href="">{work.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;