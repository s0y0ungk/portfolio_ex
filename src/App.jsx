import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";

import img1 from "./assets/images/img-1.jpg";
import img2 from "./assets/images/img-2.jpg";
import img3 from "./assets/images/img-3.jpg";
import img4 from "./assets/images/img-4.jpg";

function App() {
  console.log("App render");

  let works = [
    {
      id: 1,
      title: "work 1",
      url: img1,
      desc: "Work 1 description",
    },
    {
      id: 2,
      title: "work 2",
      url: img2,
      desc: "Work 2 description",
    },
    {
      id: 3,
      title: "work 3",
      url: img3,
      desc: "Work 3 description",
    },
    {
      id: 4,
      title: "work 4",
      url: img4,
      desc: "Work 4 description",
    },
  ];

  return (
    <>
      <Header />
      <Nav data={works} />
      <Figure />
    </>
  );
}

export default App;
