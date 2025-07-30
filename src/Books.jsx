import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {books.map(book => (
          <Link key={book.bookId} to={`/books/${book.bookId}`}>
            <img src={book.cover} alt={book.title} style={{ width: '150px' }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
