import styles from '../contact.module.css';

import { PropsReactWhatsapp } from '../../../interfaces/interfaces';

const URL = 'https://wa.me';

const ReactWhatsapp = ({
  number,
  message,
  onClick,
  props,
}: PropsReactWhatsapp) => {
  number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');

  let url = `${URL}/${number}`;

  if (message) {
    url += `?text=${encodeURI(message)}`;
  }

  return (
    <div
      className={styles['contact-button']}
      onClick={(e: any) => {
        window.open(url);

        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      <img src="/ws.png" alt="wjwbfc" />
    </div>
  );
};

export default ReactWhatsapp;
