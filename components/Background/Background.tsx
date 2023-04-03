'use client';
import { FunctionComponent } from 'react';

import styles from './background.module.css';

const color1 = '#221423';
const color2 = '#321e34';

const background = '#1c041e';

interface BackgroundProps {
  percentRatio: number;
}

export const Background: FunctionComponent<BackgroundProps> = ({
  percentRatio = 0,
}) => {
  const maxHue = 53;
  const maxSaturate = 1;
  const hue = Math.round(percentRatio * maxHue);
  const saturate = percentRatio * maxSaturate;

  return (
    <svg
      style={{
        backgroundColor: background,
        filter: `hue-rotate(${hue}deg) saturate(${saturate + 1})`,
      }}
      className={styles.background}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      <defs></defs>
      <path
        fill={color1}
        className={styles['out-top']}
        d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
      />
      <path
        fill={color2}
        className={styles['in-top']}
        d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
      />
      <path
        fill={color1}
        className={styles['out-bottom']}
        d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
      />
      <path
        fill={color2}
        className={styles['in-bottom']}
        d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
      />
    </svg>
  );
};
