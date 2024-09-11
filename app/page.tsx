// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // JavaScriptなので定数や式などを書くことができる
  const wwname = "世界";
  return (
    <section className={styles.page}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で{wwname}を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルカンパニーです。
        </p>
      </div>
      <img className={styles.bgimg} src="./img-mv.jpg" alt="" />
    </section>
  );
}
