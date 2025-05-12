import Image from "next/image";
import styles from "./page.module.css";
import Menu from "../../components/menu";
import CanvasSection from "@/app/canvas/page";
import Integrantes from "../../components/integrantes";
import Descripcion from "../../components/descripcion";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <Image 
          src="/logo.png"
          alt="Logo mesa del chef"
          width={200}
          height={200}
          priority
          className={styles.logoImage}
        />
        <h1 className={styles.title}>
          La Mesa del Chef
        </h1>
      </div>
      <Descripcion/>
      <Menu/>
      <CanvasSection/>
      <Integrantes/>
    </main>
  );
}