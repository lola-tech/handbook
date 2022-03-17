const Alerts = ({ type, message }: { type: string; message: string }) => {
  return (
    <div className={`alert-container ${type}-container`}>
      <div className={`alert-icon ${type}-alert-icon`}></div>
      <p>{message}</p>
    </div>
  );
};

export default Alerts;
