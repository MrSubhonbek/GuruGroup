import Card from "@/component/card/Card";
import axios from "axios";

import { ICard } from "@/model/card.interface";

import styles from "./page.module.scss";

async function getData() {
  const res = await axios
    .get<ICard[]>(
      process.env.urlData ||
        "https://6075786f0baf7c0017fa64ce.mockapi.io/products"
    )
    .then((res) => res.data);
  return res;
}

const Home = async () => {
  const data = await getData();
  const handleShowCard = data.map((card, index) => (
    <div key={index}>
      <Card data={card} />
    </div>
  ));
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Похожие объявления</h1>
      <section className={styles.content}>{handleShowCard}</section>
    </main>
  );
};

export default Home;
