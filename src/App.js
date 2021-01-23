import React from 'react';
import NotesList from './components/NotesList';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <section>
      <RegisterForm />
      <NotesList />
    </section>
  );
}

export default App;
