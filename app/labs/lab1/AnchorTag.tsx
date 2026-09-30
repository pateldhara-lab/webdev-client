export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      {/* On your own: TODO your own links */}
      <a href="https://developer.mozilla.org" id="wd-your-link">
        A site I visit often
      </a>
      <br />
      <a
        href="https://github.com/pateldhara-lab"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub (new tab)
      </a>
      <br />
      {/* With AI */}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
