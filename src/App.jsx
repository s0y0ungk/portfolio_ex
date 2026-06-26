import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import Controls from "./components/controls";

import { useState } from "react";

function App() {
  const [id, setId] = useState(1);
  const works = [
    {
      id: 1,
      title: "work 1",
      url: "./images/img-1.jpg",
      desc: "커피 사진",
    },
    {
      id: 2,
      title: "work 2",
      url: "./images/img-2.jpg",
      desc: "커피 사진",
    },
    {
      id: 3,
      title: "work 3",
      url: "./images/img-3.jpg",
      desc: "커피 사진",
    },
    {
      id: 4,
      title: "work 4",
      url: "./images/img-4.jpg",
      desc: "커피 사진",
    },
    {
      id: 5,
      title: "work 5",
      url: "./images/img-1.jpg",
      desc: "커피 사진",
    },
    {
      id: 6,
      title: "work 6",
      url: "./images/img-2.jpg",
      desc: "커피 사진",
    },
    {
      id: 7,
      title: "work 7",
      url: "./images/img-3.jpg",
      desc: "커피 사진",
    },
    {
      id: 8,
      title: "work 8",
      url: "./images/img-4.jpg",
      desc: "커피 사진",
    },
  ];

  const work = works.find(w => w.id === id);
  const activeIndex = works.findIndex(w => w.id === id);
  const prevWork = activeIndex > 0 ? works[activeIndex - 1] : null;
  const nextWork = activeIndex < works.length - 1 ? works[activeIndex + 1] : null;

  return (
    <>
      <Header />
      <Nav
        data={works}
        activeId={id}
        onChangeMode={_id => {
          setId(_id);
        }}
      />
      {work && <Figure data={work} />}
      <Controls
        prevWork={prevWork}
        nextWork={nextWork}
        onChangeMode={_id => {
          setId(_id);
        }}
      />
    </>
  );
}

export default App;
