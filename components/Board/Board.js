import { Square } from '../Square/Square';

import styles from './Board.module.scss';

export const Board = () => {
  const status = 'Next player: X';

  const renderSquare = (i) => <Square />;

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.status}>{status}</div>
      <div className={styles.wrapper}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}

        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}

        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
