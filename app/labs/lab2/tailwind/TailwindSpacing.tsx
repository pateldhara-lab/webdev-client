export default function TailwindSpacing() {
  return (
    <div>
      <h2 className="text-3xl">Margin</h2>
      <div className="bg-blue-200 mb-4 p-4">
        This div has a bottom margin of 4.
      </div>
      <div className="bg-blue-200 ms-4 me-8 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>
      <h2 className="text-3xl mt-8">Padding</h2>
      <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
        This div has starting padding of 2, top padding of 4, and bottom padding
        of 8.
      </div>
      <div className="bg-green-200 p-6">
        This div has padding all around of 6.
      </div>
      {/* On your own */}
      <div className="bg-yellow-200 mt-4 ps-10 pb-2 pt-1">
        My own box: top margin 4, start padding 10, bottom padding 2.
      </div>
      {/* With AI */}
      <div id="wd-ai-spacing" className="bg-purple-200 mt-6 ps-8 pb-4">
        Sample box mixing mt-6 ps-8 pb-4.
      </div>
    </div>
  );
}
