import styles from './page.module.css';
import { LeaderBoard } from '~/components/LeaderBoard';
import { Progression } from '~/components/Progression';
import { Header } from '~/components/Header';
import { GameZone } from '~/components/GameZone';

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
