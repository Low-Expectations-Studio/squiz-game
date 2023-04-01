import styles from './page.module.css';
import { LeaderBoard } from '~/components/LeaderBoard';
import { Progression } from '~/components/Progression';
import { Header } from '~/components/Header';

export default function QuizPage() {
  return (
    <>
      <main className={styles.wrapper}>
        <Header className={styles.header} />
        <div className={`${styles.box} ${styles.content}`}>Content</div>
        <LeaderBoard className={styles.sidebar} />
        <Progression className={styles.footer} />
      </main>
    </>
  );
}
