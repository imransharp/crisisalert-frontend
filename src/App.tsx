//import { useState } from 'react';
import CrisisForm from './components/CrisisForm';
import CrisisDashboard from './CrisisDashboard';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4 text-center text-2xl font-semibold shadow">
        🌍 CrisisAlert - Real-Time Emergency Reporting
      </header>

      <main>
        <CrisisForm />
          <hr />
          <CrisisDashboard />
      </main>
    </div>      
    </>
  );
}

export default App;
