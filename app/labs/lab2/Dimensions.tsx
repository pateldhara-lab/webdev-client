export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        {/* On your own */}
        <div className="wd-my-dimension wd-bg-color-green wd-fg-color-white">
          My box
        </div>
        {/* With AI */}
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          Sample box with a long sentence so the declared size of 120 by 60
          pixels is obvious
        </div>
      </div>
    </div>
  );
}
