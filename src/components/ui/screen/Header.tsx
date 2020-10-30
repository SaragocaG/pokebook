import React from 'react';
import styles from './Screen.module.scss';
import { useHistory } from 'react-router';
import Switch from '../switch/Switch';
import { useSelector } from 'react-redux';

interface ComponentProps {
  title: string;
  onToggleDarkMode: Function
}

const Header = ({ title, onToggleDarkMode }: ComponentProps) => {
  const history = useHistory();
  const darkMode = useSelector((state: any) => state.darkMode);
  return (
    <div className="row hbetween vcenter">
      <div>
        {
          history.length && (
            <span
              className={styles.returnIcon}
              onClickCapture={() => {
                history.goBack();
              }}
            >
              &#129120;
            </span>
          )
        }
      </div>
      <div>
        <span className={styles.title}>
          {title}
        </span>
      </div>
      <div>
        <Switch
          onClick={() => onToggleDarkMode()}
          value={darkMode}
        />
      </div>
    </div>
  );
};

export default Header;
