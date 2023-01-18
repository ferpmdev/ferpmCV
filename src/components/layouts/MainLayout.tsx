import * as React from 'react';
import styles from './mainLayout.module.css';

type ChildrenProps = {
  children?: React.ReactNode;
  idSection: string;
};

export const MainLayout = (props: ChildrenProps) => {
  return (
    <div id={props.idSection} className={styles['layout-container']}>
      <main className={styles['layout-main']}>{props.children}</main>
    </div>
  );
};
