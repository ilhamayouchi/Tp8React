import { useState } from 'react';
import { useApi } from './hooks/useApi';

export default function AxiosUsers() {
  const { data, loading, error, reload } = useApi(
    '/utilisateurs.json',
    { client: 'axios' }
  );
  const [query, setQuery] = useState('');

  let contenu;
  if (loading) {
    contenu = <p>Chargement des utilisateurs…</p>;
  } else if (error) {
    contenu = <p>Erreur : {error}</p>;
  } else {
    const filtered = data.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
    contenu = (
      <ul>
        {filtered.map(u => (
          <li key={u.id}>{u.name} – {u.email}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <button onClick={reload} disabled={loading}>Recharger les utilisateurs</button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un utilisateur par nom"
      />
      {contenu}
    </div>
  );
}
