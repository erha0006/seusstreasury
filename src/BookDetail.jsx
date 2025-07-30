import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!book) return <p>No book found.</p>;

  const imageUrl = book.coverImage || book.cover || book.image || '';
  const fullImageUrl = imageUrl.startsWith('http')
    ? imageUrl
    : `https://seussology.info${imageUrl}`;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'center' }}>
      <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
      <img
        src={fullImageUrl}
        alt={book.title}
        style={{ maxWidth: '300px', width: '100%', marginBottom: '1rem' }}
      />
      <p style={{ textAlign: 'left' }}>{book.description}</p>
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">← Back to Books</Link>
    </div>
  );
}

export default BookDetail;
