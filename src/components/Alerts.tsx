import Image from 'next/image';

const Alerts = ({
  className,
  content,
  src,
  alt,
}: {
  className: string;
  content: string;
  src: any;
  alt: string;
}) => {
  return (
    <div className={className}>
      <div className="allert-content">
        <Image src={src} alt={alt} width={50} height={50} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Alerts;
