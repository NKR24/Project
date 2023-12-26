import styles from "./styles.module.scss"
import { createSignal } from "solid-js"
import { Collapse } from "solid-collapse"
import { A } from "@solidjs/router"

export default function Navbar() {
  const [isExpand, setIsExpand] = createSignal(false)

  function handleClickClose() {
    setIsExpand(false)
  }

  return (
    <div class={styles.container}>
      <nav class={styles.navbar}>
        <div class={styles.partOne}>
          <h1 class={styles.logo}>ЛОГО</h1>
          <div class={styles.box}>
            <div class={styles.student}>
              <button class={styles.tabButton}>
                <text class={styles.text}>старшекласснику и абитуриенту</text>
              </button>
              <button
                class={styles.button}
                onClick={() => setIsExpand(!isExpand())}
              >
                <div class={styles.icon} />
              </button>
            </div>
            <div class={styles.expanded}>
              <Collapse value={isExpand()} class={styles.transition}>
                <div class={styles.tabs}>
                  <A href="../../routes/adult">
                    <button class={styles.tabButton} onClick={handleClickClose}>
                      <text class={styles.text}>взрослым</text>
                    </button>
                  </A>
                  <button class={styles.tabButton} onClick={handleClickClose}>
                    <text class={styles.text}>учебным заведениям</text>
                  </button>
                  <button class={styles.tabButton} onClick={handleClickClose}>
                    <text class={styles.text}>работодателям</text>
                  </button>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div class={styles.partTwo}>
          <button class={styles.tabButton}>
            <span class={styles.text}>РОССИЯ</span>
          </button>
          <button class={styles.tabButton}>
            <span class={styles.text}>план поступления</span>
          </button>
          <button class={styles.tabButton}>
            <span class={styles.text}>войти</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
