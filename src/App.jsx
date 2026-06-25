import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";

import img1 from "./assets/images/img-1.jpg";
import img2 from "./assets/images/img-2.jpg";
import img3 from "./assets/images/img-3.jpg";
import img4 from "./assets/images/img-4.jpg";

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
  ];

  let work = works.find(item => item.id === id);

  return (
    <>
      <Header />
      <Nav
        data={work && <Figure data={work} />}
        onChangeMode={id => {
          setId(id);
        }}
      />
      <Figure data={work} />
    </>
  );
}

export default App;
