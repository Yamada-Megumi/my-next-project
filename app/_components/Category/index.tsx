import type { CategoryProps } from "@/app/_libs/microcms";
import style from "./index.module.css";

type Props = {
  category: CategoryProps;
};
export default function Category({ category }: Props) {
  return <span className={Styles.tag}>{category.name}</span>;
}
