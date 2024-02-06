import "./informer-info-with-icon.css";

const InformerInfoWithIcon = ({ icon, title, value }) => {
  return (
    <div className="informer-info-with-icon">
      <img className="icon1" alt="" src={icon} />
      <div className="info1">
        <div className="title5">{title}</div>
        <div className="amount7">
          <div className="value4">{value}</div>
          <div className="indicator">
            <img className="up-icon" alt="" src="/up.svg" />
            <div className="div">145</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformerInfoWithIcon;
