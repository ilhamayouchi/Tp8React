import { useApi } from './hooks/useApi';

export default function FetchPosts() {
  const { data, loading, error, reload } = useApi(
    '/articles.json',
    { client: 'fetch' }
  );

  let contenu;
  if (loading) {
    contenu = <p>Chargement des articles…</p>;
  } else if (error) {
    contenu = <p>Erreur : {error}</p>;
  } else {
    contenu = (
      <ul>
        {data.slice(0, 5).map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <button onClick={reload} disabled={loading}>Recharger les articles</button>
      {contenu}
    </div>
  );
}
