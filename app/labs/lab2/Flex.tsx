export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      {/* On your own: a fourth row, Column 2 grows and Column 1 is pinned */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-width-110px">
          Pinned
        </div>
        <div className="wd-bg-color-gray wd-flex-grow-1">Grows</div>
        <div className="wd-bg-color-yellow">Natural</div>
      </div>
      {/* With AI */}
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-red wd-width-110px">First</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Second</div>
        <div className="wd-bg-color-yellow wd-flex-grow-1">Last grows</div>
      </div>
    </div>
  );
}
