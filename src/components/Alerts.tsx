import Image from 'next/image';

const Alerts = ({ type, message }: { type: string; message: string }) => {
  return (
    <div className={`alert-container ${type}-container`}>
      <Image src={`/icons/${type}.svg`} alt={type} width={40} height={40} />
      <div className={`alert-icon ${type}-alert-icon`}></div>
      <p>{message}</p>
    </div>
  );
};

export default Alerts;
