import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      {/* On your own */}
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        My own paragraph: green background with yellow text
      </p>
      {/* With AI */}
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        Sample paragraph: purple background with white text
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-id-selector-3">
          My own third paragraph with its own ID and color scheme
        </p>
        <p id="wd-ai-id-selector">
          Sample paragraph with its own ID and color scheme
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-your-class">My own class on a paragraph</p>
        <h4 className="wd-your-class">My own class on a heading</h4>
        <p className="wd-ai-class-selector">Sample class on a paragraph</p>
        <h4 className="wd-ai-class-selector">Sample class on a heading</h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              <span className="wd-my-selector-5">
                My own descendant span (green)
              </span>
              <br />
              <span className="wd-ai-selector-5">
                Sample descendant span (black and yellow)
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-cascade">
        <h3>CSS selection rule mechanism</h3>
        {/* On your own: tag (green) < class (yellow) < id (red), so red wins */}
        <h5 id="wd-my-cascade" className="wd-my-cascade">
          My experiment: the id rule beats the class rule and the tag rule
        </h5>
        {/* With AI */}
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Sample: tag green, class yellow, id red. The id background wins.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
