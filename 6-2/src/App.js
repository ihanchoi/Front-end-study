import { useState } from "react";
import Modal from "./modal";

function App() {
  const initData = [
    {
      name: "Soul",
      content: "Quiet coyote ~ 귀여운 영혼들과 제리 좋아!",
      image: "https://alternativemovieposters.com/wp-content/uploads/2021/02/AndreyPankov_Soul.jpg",
    },
    {
      name: "Elemental",
      content: "내 인생의 주인공은 나야! 보면서 세 번 울었어요",
      image: "https://pixarpost.com/wp-content/uploads/2023/06/Elemental-Fandango-Character-Poster.jpg",
    },
    {
      name: "My neighbor Totoro",
      content: "아마도 평생 좋아할 수 밖에 없는 토토로",
      image: "https://cdn.shopify.com/s/files/1/1057/4964/products/My-Neighbor-Totoro-Vintage-Movie-Poster-Original-1-Sheet-27x41_300x@2x.jpg?v=1663224401",
    },
    {
      name: "Portrait of a Lady on Fire",
      content: "잔잔하고 고요하지만 강렬하게 타오르는 불꽃같은 순간들",
      image: "https://post-phinf.pstatic.net/MjAyMDAxMjdfNzAg/MDAxNTgwMTAzNzAwNTcy.pxW9WtFyOge9A5uEFXNiF8uHIgBDj749y2NBTdrHGmcg.zU5qkRGtRMim9tvaQWVmJRFTqtMDzyBbczh6yYY_AEAg.JPEG/movie_image.jpg?type=w800_q75",
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
