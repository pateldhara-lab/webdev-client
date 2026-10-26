import Link from "next/link";
import * as db from "../../../../database";

const FIELD = "mb-4";
const LABEL = "mb-1 block text-sm font-semibold";
const INPUT = "w-full rounded border border-neutral-300 px-3 py-2 text-sm";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  const listHref = `/courses/${cid}/assignments`;
  return (
    <div id="wd-assignments-editor" key={aid} className="max-w-2xl">
      <div className={FIELD}>
        <label htmlFor="wd-name" className={LABEL}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue={assignment?.title ?? ""}
          className={INPUT}
        />
      </div>
      <div className={FIELD}>
        <label htmlFor="wd-description" className={LABEL}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue={assignment?.description ?? ""}
          className={INPUT}
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wd-points" className={LABEL}>
            Points
          </label>
          <input
            id="wd-points"
            defaultValue={assignment?.points ?? 100}
            className={INPUT}
          />
        </div>
        <div>
          <label htmlFor="wd-group" className={LABEL}>
            Assignment Group
          </label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={INPUT}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-display-grade-as" className={LABEL}>
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
            className={INPUT}
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-submission-type" className={LABEL}>
            Submission Type
          </label>
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={INPUT}
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
        </div>
      </div>
      <fieldset className="mb-4 rounded border border-neutral-300 p-3">
        <legend className="px-1 text-sm font-semibold">
          Online Entry Options
        </legend>
        {[
          ["wd-text-entry", "Text Entry", false],
          ["wd-website-url", "Website URL", true],
          ["wd-media-recordings", "Media Recordings", false],
          ["wd-student-annotation", "Student Annotation", false],
          ["wd-file-upload", "File Uploads", false],
        ].map(([id, label, checked]) => (
          <div key={id as string} className="mb-1 flex items-center gap-2">
            <input
              type="checkbox"
              id={id as string}
              defaultChecked={checked as boolean}
            />
            <label htmlFor={id as string} className="text-sm">
              {label as string}
            </label>
          </div>
        ))}
      </fieldset>
      <div className="mb-4 rounded border border-neutral-300 p-3">
        <div className={FIELD}>
          <label htmlFor="wd-assign-to" className={LABEL}>
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={INPUT} />
        </div>
        <div className={FIELD}>
          <label htmlFor="wd-due-date" className={LABEL}>
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue={assignment?.due}
            className={INPUT}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wd-available-from" className={LABEL}>
              Available from
            </label>
            <input
              type="date"
              id="wd-available-from"
              defaultValue={assignment?.available}
              className={INPUT}
            />
          </div>
          <div>
            <label htmlFor="wd-available-until" className={LABEL}>
              Until
            </label>
            <input
              type="date"
              id="wd-available-until"
              defaultValue={assignment?.due}
              className={INPUT}
            />
          </div>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={listHref}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={listHref}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
