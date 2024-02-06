import NavigationBar from "../components/navigation-bar";
import WidgetLSizeTimelineCha from "../components/widget-l-size-timeline-cha";
import InformerInfoWithIcon from "../components/informer-info-with-icon";
import FrameComponent from "../components/frame-component";
import HexMapIcon from "../components/hex-map-icon";
import "./world-hexagon-map.css";

const WorldHexagonMap = () => {
  return (
    <div className="world-hexagon-map">
      <NavigationBar />
      <main className="hex-map-component">
        <div className="wstf-front-end-hackathon">WSTF FRONT-END HACKATHON</div>
        <section className="big-circle-chart-frame">
          <WidgetLSizeTimelineCha />
          <div className="side-indicators">
            <InformerInfoWithIcon
              icon="/icon-1.svg"
              title="Total earning"
              value="540,549"
            />
            <InformerInfoWithIcon
              icon="/icon-2.svg"
              title="Sales"
              value="1,205,677"
            />
            <InformerInfoWithIcon
              icon="/icon-3.svg"
              title="Purchase"
              value="48,430,039"
            />
          </div>
          <div className="widget-m-size-big-circle-c">
            <div className="percent-parent">
              <div className="percent">
                <span className="span">27</span>%
              </div>
              <div className="background-parent">
                <div className="background" />
                <div className="progress" />
              </div>
            </div>
            <div className="info-frame">
              <div className="amount">92,980</div>
              <div className="detail">Active users</div>
            </div>
          </div>
          <div className="widget-m-size-big-circle-c1">
            <div className="map-pin-frame">
              <div className="background1" />
              <div className="map-pin-amount">
                <div className="percent1">
                  <span className="span1">67</span>%
                </div>
                <div className="progress1" />
              </div>
            </div>
            <div className="info-frame1">
              <div className="amount1">22,652</div>
              <div className="detail1">New users</div>
            </div>
          </div>
          <div className="map-pin-pin-with-name">
            <div className="tooltip">
              <img className="indicator-icon" alt="" src="/indicator.svg" />
              <div className="value">
                <div className="title">Queensland</div>
                <input
                  className="amount2"
                  placeholder="6,097,321"
                  type="text"
                />
              </div>
              <img className="arrow-icon" alt="" src="/arrow.svg" />
            </div>
          </div>
          <div className="amount3">2,431,340</div>
          <div className="name">All users</div>
          <b className="detail2">Detail</b>
          <img className="arow-icon" loading="eager" alt="" src="/arow.svg" />
          <div className="frame-with-map-pin-map-pin-too">
            <FrameComponent
              indicator="/indicator-1.svg"
              title="Berlin"
              amountPlaceholder="76,541,106"
            />
            <div className="info-frame2">
              <div className="map-pin-pin-with-name-parent">
                <div className="map-pin-pin-with-name1">
                  <div className="tooltip-wrapper">
                    <div className="tooltip1">
                      <img
                        className="indicator-icon1"
                        alt=""
                        src="/indicator-2.svg"
                      />
                      <div className="map-pin-frame-title-amount">
                        <div className="title1">Chicago</div>
                        <input
                          className="amount4"
                          placeholder="98,320,300"
                          type="text"
                        />
                      </div>
                      <img className="arrow-icon1" alt="" src="/arrow.svg" />
                    </div>
                  </div>
                </div>
                <FrameComponent
                  indicator="/indicator-3.svg"
                  title="Manaus"
                  amountPlaceholder="12,320,300"
                  propWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propWidth1="180px"
                  propFlexWrap="unset"
                />
              </div>
              <div className="map-pin-pin-with-name-wrapper">
                <div className="map-pin-pin-with-name2">
                  <div className="tooltip2">
                    <img
                      className="indicator-icon2"
                      alt=""
                      src="/indicator-4.svg"
                    />
                    <div className="tooltip3">
                      <div className="title2">Giza</div>
                      <div className="amount5">10,547,980</div>
                    </div>
                  </div>
                  <img className="arrow-icon2" alt="" src="/arrow.svg" />
                </div>
              </div>
              <div className="footer">
                <div className="map-pin-pin-with-name3">
                  <div className="tooltip-container">
                    <div className="tooltip4">
                      <img
                        className="indicator-icon3"
                        alt=""
                        src="/indicator-5.svg"
                      />
                      <div className="title-parent">
                        <div className="title3">Shanghai</div>
                        <input
                          className="amount6"
                          placeholder="239,570,110"
                          type="text"
                        />
                      </div>
                      <img className="arrow-icon3" alt="" src="/arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-hex-map">
              <HexMapIcon />
            </div>
          </div>
        </section>
      </main>
      <footer className="description">
        <div className="footer1">
          <div className="bg" />
          <b className="orion-data-visualisation">Orion data visualisation</b>
          <b className="none">2019</b>
        </div>
        <div className="footer2">
          <div className="bg1" />
          <b className="description1">Orion data visualisation</b>
          <b className="b">2022</b>
        </div>
      </footer>
    </div>
  );
};

export default WorldHexagonMap;
