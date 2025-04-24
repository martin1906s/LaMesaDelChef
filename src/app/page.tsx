import Image from "next/image";
import styles from "./page.module.css";
import Menu from "../../components/menu";
import CanvasSection from "@/app/canvas/page";
export default function Home() {
  return (
    <main className={styles.main}>
      <Image 
        src="/file.svg"
        alt="Logo mesa del chef"
        width={180}
        height={37}
        priority
      />
      <h1 className={styles.title}>
        La Mesa del Chef
      </h1>
      <Menu/>
      <CanvasSection/>
    </main>
  );
}
