import "../Styles/cards.css";
import Card from "./Card";

const infoCards = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/512/52/52782.png",
    title: "Find the job of your dreams",
    desc: "Fugiat occaecat fugiat velit incididunt excepteur dolor culpa deserunt dolor mollit qui qui culpa. Iqua nulla sint nulla.",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/512/1243/1243560.png",
    title: "Find the job of your dreams",
    desc: "Fugiat occaecat fugiat velit incididunt excepteur dolor culpa deserunt dolor mollit qui qui culpa. Iqua nulla sint nulla.",
  },{
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/1283/1283342.png",
    title: "Find the job of your dreams",
    desc: "Fugiat occaecat fugiat velit incididunt excepteur dolor culpa deserunt dolor mollit qui qui culpa. Iqua nulla sint nulla.",
  },
];

const Cards = () => {
  return (
    <div className="cardSection">
      <h2 id="titleSection">The benefits of our App</h2>
      <section className="cards">
        {infoCards.map((info) => (
          <Card key={info.id} info={info} />
        ))}
      </section>
    </div>
  );
};

export default Cards;
