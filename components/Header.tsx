import styles from './header.module.css';

export const Header = ({ className }: { className: string }) => {
  return (
    <header className={`${className} text-xl font-bold text-white`}>
      Question 10 - Answer Phase
    </header>
  );
};
