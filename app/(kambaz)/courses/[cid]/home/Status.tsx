import {
  FaBell,
  FaBullhorn,
  FaCheckCircle,
  FaChartBar,
  FaHome,
  FaStream,
  FaQuestionCircle,
} from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { MdDoNotDisturbAlt } from "react-icons/md";

const ACTION =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={ACTION}>
        <BiImport className="me-2 shrink-0 text-base" /> Import Existing Content
      </button>
      <button type="button" className={ACTION}>
        <BiImport className="me-2 shrink-0 text-base" /> Import from Commons
      </button>
      <button type="button" className={ACTION}>
        <FaHome className="me-2 shrink-0 text-base" /> Choose Home Page
      </button>
      <button type="button" className={ACTION}>
        <FaStream className="me-2 shrink-0 text-base" /> View Course Stream
      </button>
      <button type="button" className={ACTION}>
        <FaBullhorn className="me-2 shrink-0 text-base" /> New Announcement
      </button>
      <button type="button" className={ACTION}>
        <FaChartBar className="me-2 shrink-0 text-base" /> New Analytics
      </button>
      <button type="button" className={ACTION}>
        <FaBell className="me-2 shrink-0 text-base" /> View Course Notifications
      </button>
      {/* With AI: sample action */}
      <button type="button" id="wd-ai-status" className={ACTION}>
        <FaQuestionCircle className="me-2 shrink-0 text-base" /> Sample action
      </button>
    </div>
  );
}
