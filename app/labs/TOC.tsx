import Link from "next/link";
export default function TOC() {
  return (
    <ul id="wd-toc">
      {/* On your own: TODO your name / motto */}
      <li>Dhara Patel — Build things.</li>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/labs">Labs</Link></li>
      <li><Link href="/labs/lab1">Lab 1</Link></li>
      <li><Link href="/labs/lab2">Lab 2</Link></li>
      <li><Link href="/labs/lab3">Lab 3</Link></li>
      <li><Link href="/">Kambaz</Link></li>
      <li><Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link></li>
    </ul>
  );
}
