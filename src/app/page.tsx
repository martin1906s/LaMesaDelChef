import Image from "next/image";
import styles from "./page.module.css";
import Menu from "../../components/menu";
import CanvasSection from "@/app/canvas/page";
export default function Home() {
  return (
    <main className={styles.main}>
      <Image 
        src="/logo.png"
        alt="Logo mesa del chef"
        width={200}
        height={200}
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
