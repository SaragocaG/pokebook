import React from 'react';
import Header from './Header';
import Footer from './Footer';
import lightStyle from './Screen.module.scss';
import darkStyle from './DarkScreen.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../../store/actions/darkMode';

interface ComponentProps {
  children: any
  options?: {
    title?: string,
    noHeader?: boolean;
    darkMode?: boolean;
  }
}

const Screen = ({ children, options }: ComponentProps) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.darkMode);
  const styles = darkMode ? darkStyle : lightStyle;

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <Header
          title={options?.title || ''}
          onToggleDarkMode={() => {
            dispatch(toggleDarkMode());
          }}
        />
      </header>
      <main className={styles.body}>
        <div className="container">
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Screen;
