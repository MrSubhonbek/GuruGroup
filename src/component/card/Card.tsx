import { ICard } from "@/model/card.inrerface";
import { FC } from "react";

import styles from "./Card.module.scss";

interface IProps {
  data: ICard[];
}

const Card: FC<IProps> = ({ data }) => {
  return <div>{data[0].title}</div>;
};

export default Card;
