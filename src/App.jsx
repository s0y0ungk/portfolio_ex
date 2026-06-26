import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import { useState } from "react";

import left from "./assets/images/left.png";
import right from "./assets/images/right.png";

function App() {

  const [id, setId] = useState(1);
  const works = [
    {
      id: 1,
      title: "work 1",
      url: "./assets/images/img-1.jpg",
      desc: "커피 사진",
    },
    {
      id: 2,
      title: "work 2",
      url: "./assets/images/img-2.jpg",
      desc: "커피 사진",
    },
    {
      id: 3,
      title: "work 3",
      url: "./assets/images/img-3.jpg",
      desc: "커피 사진",
    },
    {
      id: 4,
      title: "work 4",
      url: "./assets/images/img-4.jpg",
      desc: "커피 사진",
    },
    {
      id: 5,
      title: "work 5",
      url: "./assets/images/img-1.jpg",
      desc: "커피 사진",
    },
    {
      id: 6,
      title: "work 6",
      url: "./assets/images/img-2.jpg",
      desc: "커피 사진",
    },
    {
      id: 7,
      title: "work 7",
      url: "./assets/images/img-3.jpg",
      desc: "커피 사진",
    },
    {
      id: 8,
      title: "work 8",
      url: "./assets/images/img-4.jpg",
      desc: "커피 사진",
    },
  ];

  const work = works.find((w) => w.id === id);

  const handlePrev = () => {
    if (id === 1) {
      setId(works.length);
    } else {
      setId(id - 1);
    }
  };

  const handleNext = () => {
    if (id === works.length) {
      setId(1);
    } else {
      setId(id + 1);
    }
  };

  return (
    <>
      <Header />
      <Nav
        id={id}
        data={works}
        onChangeMode={_id => {
          setId(_id);
        }}
      />
      {work && <Figure data={work} />}

      <div>
        <button onClick={handlePrev}>
          <img src={left} alt="이전" />
        </button>

        <button onClick={handleNext}>
          <img src={right} alt="다음" />
        </button>
      </div>
    </>
  );
}

export default App;
