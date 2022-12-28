import styles from "../styles/Home.module.css";

const squareRoot = (await import("fe2/squareRoot")).default;

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Square root of 4 = {squareRoot(4)}</h1>
      </main>
    </div>
  );
}
