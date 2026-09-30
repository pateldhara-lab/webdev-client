"use client";
// Personal profile form for Dhara Patel.
export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text fields</h5>
      <label htmlFor="wd-yf-first">First name: </label>
      <input id="wd-yf-first" placeholder="First name" defaultValue="Dhara" />
      <br />
      <label htmlFor="wd-yf-last">Last name: </label>
      <input id="wd-yf-last" placeholder="Last name" defaultValue="Patel" />
      <br />
      <label htmlFor="wd-yf-student-id">Student ID: </label>
      <input
        id="wd-yf-student-id"
        type="password"
        defaultValue="00000000"
      />

      <h5>Bio</h5>
      <label htmlFor="wd-yf-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-yf-bio"
        cols={40}
        rows={5}
        defaultValue="I am taking this course to learn how to build and deploy full-stack web applications."
      />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="yf-standing" id="wd-yf-fresh" />
      <label htmlFor="wd-yf-fresh">Freshman</label>
      <input type="radio" name="yf-standing" id="wd-yf-soph" />
      <label htmlFor="wd-yf-soph">Sophomore</label>
      <input type="radio" name="yf-standing" id="wd-yf-junior" />
      <label htmlFor="wd-yf-junior">Junior</label>
      <input type="radio" name="yf-standing" id="wd-yf-senior" defaultChecked />
      <label htmlFor="wd-yf-senior">Senior</label>
      <input type="radio" name="yf-standing" id="wd-yf-grad" />
      <label htmlFor="wd-yf-grad">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input type="radio" name="yf-load" id="wd-yf-fulltime" defaultChecked />
      <label htmlFor="wd-yf-fulltime">Full-time</label>
      <input type="radio" name="yf-load" id="wd-yf-parttime" />
      <label htmlFor="wd-yf-parttime">Part-time</label>

      <h5>Checkboxes</h5>
      <label>Interests:</label>
      <br />
      <input type="checkbox" name="yf-interest" id="wd-yf-js" defaultChecked />
      <label htmlFor="wd-yf-js">JavaScript</label>
      <input type="checkbox" name="yf-interest" id="wd-yf-react" defaultChecked />
      <label htmlFor="wd-yf-react">React</label>
      <input type="checkbox" name="yf-interest" id="wd-yf-node" />
      <label htmlFor="wd-yf-node">Node.js</label>
      <input type="checkbox" name="yf-interest" id="wd-yf-ml" />
      <label htmlFor="wd-yf-ml">Machine learning</label>

      <h5>Dropdowns</h5>
      <label htmlFor="wd-yf-major">Major: </label>
      <select id="wd-yf-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="CE">Computer Engineering</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-yf-topics">Topics to deepen this term: </label>
      <br />
      <select
        multiple
        id="wd-yf-topics"
        defaultValue={["REACT", "NODE"]}
      >
        <option value="HTML">HTML and CSS</option>
        <option value="REACT">React</option>
        <option value="NODE">Node and Express</option>
        <option value="MONGO">MongoDB</option>
      </select>

      <h5>Typed fields</h5>
      <label htmlFor="wd-yf-email">School email: </label>
      <input
        id="wd-yf-email"
        type="email"
        placeholder="you@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-yf-grad-year">Expected graduation year: </label>
      <input
        id="wd-yf-grad-year"
        type="number"
        min={2024}
        max={2035}
        defaultValue={2028}
      />
      <br />
      <label htmlFor="wd-yf-birthday">Birthday: </label>
      <input
        id="wd-yf-birthday"
        type="date"
        min="1950-01-01"
        max="2015-12-31"
        defaultValue="2003-01-01"
      />
      <br />
      <label htmlFor="wd-yf-excited">Excitement about the course (0-10): </label>
      <input
        id="wd-yf-excited"
        type="range"
        min="0"
        max="10"
        defaultValue="8"
      />
      <br />

      <button id="wd-yf-save" type="submit">
        Save
      </button>
      <button id="wd-yf-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
