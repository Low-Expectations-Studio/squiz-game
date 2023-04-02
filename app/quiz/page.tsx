import { GameZone } from '~/components/GameZone';
import { Header } from '~/components/Header';
import { LeaderBoard } from '~/components/LeaderBoard';
import { Progression } from '~/components/Progression';

import styles from './page.module.css';

export default function QuizPage() {
  return (
    <>
      <main className={styles.wrapper}>
        <Header className={styles.header} />
        <GameZone className={`${styles.box} ${styles.content}`} />
        <LeaderBoard className={styles.sidebar} />
        <Progression className={styles.footer} />
      </main>
    </>
  );
}
