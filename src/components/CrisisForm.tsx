
import { useState } from 'react';

const CrisisForm = () => {
  const [name, setName] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [crisis, setCrisis] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !district || !crisis) {
    alert("Please fill in all fields");
    return;
  }

  const formData = { name, district, crisis };

  try {
    const response = await fetch('http://localhost:8000/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Crisis Report Submitted!");
      setName('');
      setDistrict('');
      setCrisis('');
    } else {
      alert("Error submitting report.");
    }
  } catch (error) {
    alert("Network error: " + error);
  }
};


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-4">
  <h2 className="text-xl font-bold text-center text-blue-700">📢 Report a Crisis</h2>
  
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full p-2 border rounded"
  />
  <input
    type="text"
    placeholder="District"
    value={district}
    onChange={(e) => setDistrict(e.target.value)}
    className="w-full p-2 border rounded"
  />
  <textarea
    placeholder="Describe Crisis"
    value={crisis}
    onChange={(e) => setCrisis(e.target.value)}
    className="w-full p-2 border rounded"
  />
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
  >
    Submit Report
  </button>
</form>

  );
};

export default CrisisForm;
