import React from 'react';
import NotesList from './components/NotesList';
import RegisterForm from './components/RegisterForm';

import './assets/index.css';
import './assets/App.css';

function App() {
  return (
    <section className="content">
      <RegisterForm />
      <NotesList />
    </section>
  );
}

export default App;
