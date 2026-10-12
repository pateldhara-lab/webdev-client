"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  { path: "home", label: "Home", id: "wd-course-home-link" },
  { path: "modules", label: "Modules", id: "wd-course-modules-link" },
  { path: "piazza", label: "Piazza", id: "wd-course-piazza-link" },
  { path: "zoom", label: "Zoom", id: "wd-course-zoom-link" },
  { path: "assignments", label: "Assignments", id: "wd-course-assignments-link" },
  { path: "quizzes", label: "Quizzes", id: "wd-course-quizzes-link" },
  { path: "grades", label: "Grades", id: "wd-course-grades-link" },
  { path: "people/table", label: "People", id: "wd-course-people-link" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map((link) => {
        const href = `/courses/${cid}/${link.path}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={link.path}
            href={href}
            id={link.id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
