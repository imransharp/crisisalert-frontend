import { useEffect, useState } from 'react';

interface Report {
  id: number;
  name: string;
  district: string;
  crisis: string;
}

const CrisisDashboard = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
  const fetchReports = () => {
    fetch('http://127.0.0.1:8000/api/reports')
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error('Error fetching reports:', err));
  };

  fetchReports(); // initial load

  const interval = setInterval(fetchReports, 10000); // refresh every 10 sec
  return () => clearInterval(interval); // clean up
}, []);

  return (
    <div>
      <h2>Crisis Reports</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>District</th>
            <th>Crisis</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.district}</td>
              <td>{r.crisis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrisisDashboard;
