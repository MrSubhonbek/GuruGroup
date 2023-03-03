import CarSvg from "@/asset/svg/CarSvg";
import FavoritesSvg from "@/asset/svg/FavoritesSvg";
import { ICard } from "@/model/card.interface";
import Link from "next/link";
import { FC } from "react";
import Images from "../image/Images";

import styles from "./Card.module.scss";

interface IPropsCard {
  data: ICard;
}

const Card: FC<IPropsCard> = ({ data }) => {
  const date = new Date(data.date);
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Images />
        <Link href="#">
          <div
            className={
              data.seen
                ? `${styles.content} border-none bg-yellow-100 `
                : styles.content
            }
          >
            <p className={styles.oldPrice}>{data.oldPrice}$</p>
            <div className="flex justify-between">
              <p className={styles.price}>{data.price}$</p>
              <div className="flex gap-3">
                <CarSvg />
                <FavoritesSvg />
              </div>
            </div>
            <h5 className={styles.title}>{data.title}</h5>
            <div className={styles.location}>
              <p className="mb-4 text-base ">{data.locality}</p>
              <p className="mb-4 text-base ">{date.toLocaleDateString("ru")}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
