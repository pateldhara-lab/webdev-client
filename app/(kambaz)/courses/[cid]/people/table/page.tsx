import { FaUserCircle } from "react-icons/fa";

const PEOPLE = [
  ["Tony Stark", "001234561S", "S101", "STUDENT", "2020-10-01", "10:21:32"],
  ["Bruce Wayne", "001234562S", "S101", "STUDENT", "2020-11-02", "23:32:23"],
  ["Steve Rogers", "001234563S", "S101", "STUDENT", "2020-10-02", "13:21:32"],
  ["Natasha Romanoff", "001234564S", "S101", "TA", "2020-11-05", "11:22:33"],
  // On your own: three more people
  ["Dhara Patel", "001234565S", "S101", "STUDENT", "2020-11-06", "09:10:11"],
  ["Peter Parker", "001234566S", "S101", "STUDENT", "2020-11-07", "14:15:16"],
  ["Diana Prince", "001234567S", "S101", "TA", "2020-11-08", "16:17:18"],
  // With AI: sample rows
  ["Jane Sample", "001234568S", "S102", "STUDENT", "2020-11-09", "08:00:01"],
  ["Alex Sample", "001234569S", "S102", "STUDENT", "2020-11-10", "08:00:02"],
  ["Sam Sample", "001234570S", "S102", "TA", "2020-11-11", "08:00:03"],
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {PEOPLE.map((p) => (
            <tr key={p[1]} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {p[0]}
              </td>
              <td className="p-2">{p[1]}</td>
              <td className="p-2">{p[2]}</td>
              <td className="p-2">{p[3]}</td>
              <td className="p-2">{p[4]}</td>
              <td className="p-2">{p[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
