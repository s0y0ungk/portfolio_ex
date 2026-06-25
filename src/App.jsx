import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";

import img1 from "./assets/images/img-1.jpg";
import img2 from "./assets/images/img-2.jpg";
import img3 from "./assets/images/img-3.jpg";
import img4 from "./assets/images/img-4.jpg";
import left from "./assets/images/left.png";
import right from "./assets/images/right.png";

function App() {
  console.log("App 확인");

  const [id, setId] = useState(1);

  let works = [
    {
      id: 1,
      title: "Coffee 1",
      url: img1,
      desc: "커피 사진",
    },
    {
      id: 2,
      title: "Coffee 2",
      url: img2,
      desc: "커피 사진",
    },
    {
      id: 3,
      title: "Coffee 3",
      url: img3,
      desc: "커피 사진",
    },
    {
      id: 4,
      title: "Coffee 4",
      url: img4,
      desc: "커피 사진",
    },
    {
      id: 5,
      title: "Coffee 5",
      url: img1,
      desc: "커피 사진",
    },
    {
      id: 6,
      title: "Coffee 6",
      url: img2,
      desc: "커피 사진",
    },
    {
      id: 7,
      title: "Coffee 7",
      url: img3,
      desc: "커피 사진",
    },
    {
      id: 8,
      title: "Coffee 8",
      url: img4,
      desc: "커피 사진",
    },
  ];

  let work = works.find(item => item.id === id);

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
        onChangeMode={id => {
          setId(id);
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
