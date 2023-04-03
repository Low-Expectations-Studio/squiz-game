'use client';

import { useState, useEffect } from 'react';

import { Background } from '~/components/Background/Background';
import { GameZone } from '~/components/GameZone';
import { Header } from '~/components/Header';
import { LeaderBoard } from '~/components/LeaderBoard';
import { Progression } from '~/components/Progression';

import styles from './page.module.css';

const useTimer = (duration: number) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 1) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, timeLeft]);

  return { timeLeft, percentRatio: 1 - timeLeft / duration };
};

export default function QuizPage() {
  const { timeLeft, percentRatio } = useTimer(20);
  return (
    <>
      <main className={styles.wrapper}>
        <Background percentRatio={percentRatio} />
        <Header className={styles.header} />
        <GameZone
          className={`${styles.box} ${styles.content}`}
          timeLeft={timeLeft}
          percentRatio={percentRatio}
        />
        <LeaderBoard className={styles.sidebar} />
        <Progression className={styles.footer} percentRatio={percentRatio} />
      </main>
    </>
  );
}
