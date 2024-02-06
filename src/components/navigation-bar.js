import "./navigation-bar.css";

const NavigationBar = () => {
  return (
    <header className="navigation-bar">
      <div className="background2" />
      <div className="text-frame">
        <div className="name1">WASSERSTOFF</div>
      </div>
      <div className="tab-frame">
        <div className="search">
          <div className="input" />
          <img className="icon" loading="eager" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="percent-frame-background-progr">
        <div className="label">Statistics</div>
      </div>
      <div className="detail-frame">
        <div className="line-frame">
          <div className="column-column-column-column-co">
            <div className="label1">Overview</div>
          </div>
          <div className="tab" />
        </div>
      </div>
      <div className="side-indicators-informer-info">
        <div className="ninth-column-frame">
          <div className="label2">Dashboard</div>
          <div className="label3">Analytics</div>
        </div>
      </div>
      <div className="profile-frame-option">
        <img
          className="profile-icon"
          loading="eager"
          alt=""
          src="/profile.svg"
        />
      </div>
      <div className="profile-frame-option1">
        <img className="option-icon" loading="eager" alt="" src="/option.svg" />
      </div>
    </header>
  );
};

export default NavigationBar;
