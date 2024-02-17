export default function Preloader() {
  return (
    <div className="mil-preloader">
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1">
          <div className="mil-h3 mil-muted mil-thin">Capture</div>
          <div className="mil-h3 mil-muted">Craft</div>
          <div className="mil-h3 mil-muted mil-thin">Inspire</div>
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <div className="mil-reveal-box" />
            <div className="mil-h3 mil-muted mil-thin">Night Owl</div>
          </div>
        </div>
      </div>
    </div>
  );
}
