import React from 'react';

function StudentCard() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: Kovidh</p>
      <p>Roll Number: 1602-24-733-019</p>
      <p>Branch: CSE</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <StudentCard />
    </div>
  );
}

export default App;