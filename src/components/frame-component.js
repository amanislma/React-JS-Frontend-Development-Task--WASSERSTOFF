import { useMemo } from "react";
import "./frame-component.css";

const FrameComponent = ({
  indicator,
  title,
  amountPlaceholder,
  propWidth,
  propAlignSelf,
  propFlex,
  propWidth1,
  propFlexWrap,
}) => {
  const horizontalLineChartStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const mapPinPinWithNameStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  const tooltipStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div className="horizontal-line-chart" style={horizontalLineChartStyle}>
      <div className="map-pin-pin-with-name4" style={mapPinPinWithNameStyle}>
        <div className="tooltip5" style={tooltipStyle}>
          <img className="indicator-icon4" alt="" src={indicator} />
          <div className="frame-indicator">
            <div className="title6">{title}</div>
            <input
              className="amount8"
              placeholder={amountPlaceholder}
              type="text"
            />
          </div>
          <img className="arrow-icon4" alt="" src="/arrow.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
