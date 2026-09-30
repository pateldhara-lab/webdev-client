export default function Tables() {
  const rows = [
    ["Q1", "HTML", "2/3/21", 85],
    ["Q2", "CSS", "2/10/21", 90],
    ["Q3", "JavaScript", "2/17/21", 95],
    ["Q4", "React", "2/24/21", 88],
    ["Q5", "Components", "3/3/21", 92],
    ["Q6", "Props", "3/10/21", 79],
    ["Q7", "State", "3/17/21", 94],
    ["Q8", "Routing", "3/24/21", 86],
    ["Q9", "Node", "3/31/21", 91],
    ["Q10", "MongoDB", "4/7/21", 97],
  ] as const;
  const avg = rows.reduce((s, r) => s + r[3], 0) / rows.length; // 89.7
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td>{r[0]}</td>
              <td align="center">{r[1]}</td>
              <td align="center">{r[2]}</td>
              <td align="right">{r[3]}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">{avg.toFixed(1)}</td>
          </tr>
        </tfoot>
      </table>
      <h5>My weekly schedule </h5>
      <table border={1} id="wd-your-table">
        <thead>
          <tr><th>Day</th><th>Activity</th><th>Time</th></tr>
        </thead>
        <tbody>
          <tr><td>Monday</td><td align="center">Web Development</td><td align="right">10:00</td></tr>
          <tr><td>Wednesday</td><td align="center">Web Development</td><td align="right">10:00</td></tr>
          <tr><td>Friday</td><td align="center">Study group</td><td align="right">14:00</td></tr>
        </tbody>
      </table>
    </div>
  );
}
