import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デビット・チャン",
      positon: "CEO",
      profile:
        "あああ　あああああああ、あああああああああああ。あああああああああああああああああああ、あああああああああああああああああああ、あまたはあ。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・サンダース",
      positon: "CTO",
      profile:
        "あああ　あああああああ、あああああああああああ。あああああああああああああああああああ、あああああああああああああああああああ、あまたはあ。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ウィルソン",
      positon: "CFO",
      profile:
        "あああ　あああああああ、あああああああああああ。あああああああああああああああああああ、あああああああああああああああああああ、あまたはあ。",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dt className={styles.positon}>{member.positon}</dt>
                <dt className={styles.profile}>{member.profile}</dt>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
    // <div style={{ margin: 20 }}>
    //   <h1>Members</h1>
    //   <p>Here is a list of all members</p>
    // </div>
  );
}
