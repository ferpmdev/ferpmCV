import { PropsButton } from '../../interfaces/interfaces';

const Button = ({
  href,
  classNameA,
  classNameP,
  text,
  target = '',
  download = undefined,
}: PropsButton) => {
  return (
    <a href={href} className={classNameA} target={target} download={download}>
      <p className={classNameP}>{text}</p>
    </a>
  );
};

export default Button;
