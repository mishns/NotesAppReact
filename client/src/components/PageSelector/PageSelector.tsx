import { default as React, FC } from "react";
import styles from "./PageSelector.css";

interface PageSelectorProps {
  currentPage: number;
  canSelectNext: boolean;
  canSelectPrev: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
}

export const PageSelector: FC<PageSelectorProps> = ({
  currentPage,
  onNextClick,
  onPrevClick,
  canSelectNext,
  canSelectPrev,
}) => {
  return (
    <div className={styles.pageSelector}>
      <button
        disabled={!canSelectPrev}
        className={styles.pageSelector__button}
        onClick={onPrevClick}
      >
        {"<"}
      </button>
      <span className={styles.pageSelector__page}>{currentPage}</span>

      <button
        disabled={!canSelectNext}
        className={styles.pageSelector__button}
        onClick={onNextClick}
      >
        {">"}
      </button>
    </div>
  );
};
