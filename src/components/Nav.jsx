import "./Nav.css";

function Nav({ data, activeId, onChangeMode }) {
  return (
    <nav>
      <ul className="menu">
        {data.map(work => (
          <li
            key={work.id}
            className={activeId===work.id ? "active" : ""}
            onClick={e => {
              e.preventDefault();
              onChangeMode(work.id);
            }}
          >
            <button aria-current={activeId === work.id ? true : false}>{work.title}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;