import styles from "./styles.module.scss"
import Navbar from "~/components/navbar"
import clsx from "clsx"

export default function Freshman() {
  return (
    <>
      <Navbar />
      <main class={styles.container}>
        <div class={styles.first}>
          <div class={styles.buttons}>
            <div class={styles.left}>
              <button class={styles.button}>
                <span class={styles.text}>СВЕЧИ</span>
              </button>
              <button class={styles.button}>
                <span class={styles.text}>СВЕЧИ</span>
              </button>
              <button class={styles.button}>
                <span class={styles.text}>СВЕЧИ</span>
              </button>
            </div>
            <button class={styles.red}>
              <span class={styles.text}>пройти тест на профориентацию</span>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
