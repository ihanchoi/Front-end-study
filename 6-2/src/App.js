import { useState } from "react";
import Modal from "./modal";

function App() {
  const initData = [
    {
      name: "Soul",
      content: "Quiet coyote~ 제리 좋아!",
      url: "./images/soul.jpeg",
    },
    {
      name: "Elemental",
      content: "내 인생의 주인공은 나야! 보면서 세 번 울었어요",
      url: "./images/elemental.jpeg",
    },
    {
      name: "My neighbor Totoro",
      content: "아마도 평생 좋아할 수 밖에 없는 토토로",
      url: "./images/totoro.jpeg",
    },
    {
      name: "Portrait of a Lady on Fire",
      content: "잔잔하고 고요하지만 강렬하게 타오르는 불꽃같은 순간들",
      url: "./images/ladyonfire.jpeg",
    }
  ];

  const [data, setData] = useState(initData);
  const [modalOpen, setModalOpen] = useState(false);

  let addItem = (item) => {
    setData([...data, item]);
  };

  let modalHandler = (value) => {
    setModalOpen(value);
  };

  return (
    <>
      <header>
        <span className="title">🎬 WELCOME TO MY MOVIE WORLD 🎬</span>
      </header>
      <main>
        <div className="sidebar">
          <button type="button" className="add-btn" onClick={() => setModalOpen(true)}>ADD MOVIE</button>
          {data.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        <section className="container">
          {data.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
      <Modal
        addItem={addItem}
        modalOpen={modalOpen}
        modalHandler={modalHandler}
      />
    </>
  );
}

export default App;
