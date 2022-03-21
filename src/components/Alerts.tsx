import Image from 'next/image';
import { useTheme } from '@/themeProvider/themeContext';
const Alerts = ({ type, message }: { type: string; message: string }) => {
  const { theme } = useTheme();
  return (
    <div className={`alert-container ${type}-container`}>
      <div className={`alert-icon `}>
        <Image
          src={
            theme === 'dark'
              ? `/icons/${type}-dark.svg`
              : `/icons/${type}-light.svg`
          }
          alt="icon"
          width={40}
          height={40}
          className={`${type}-alert-icon`}
        />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Alerts;
