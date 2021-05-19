import { Board } from '../Board/Board';

import styles from './Game.module.scss';

export const Game = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        <Board />
      </div>
      <div className={styles.info}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
