import React from 'react';
import FetchPosts from './FetchPosts';
import AxiosUsers from './AxiosUsers';
import './App.css';

function App() {
  return (
    <div>
      <header className="entete">
        <h1>TP – Consommer une API avec React</h1>
      </header>
      <main className="contenu">
        <section className="carte">
          <h2>Articles (fetch)</h2>
          <FetchPosts />
        </section>
        <section className="carte">
          <h2>Utilisateurs (axios)</h2>
          <AxiosUsers />
        </section>
      </main>
    </div>
  );
}

export default App;
