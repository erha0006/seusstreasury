import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="books-grid">
      {books.map((book) => {
        const imageUrl = book.coverImage || book.cover || book.image || '';
        const fullImageUrl = imageUrl.startsWith('http')
          ? imageUrl
          : `https://seussology.info${imageUrl}`;

        return (
          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="book-item"
          >
            <img
              src={fullImageUrl}
              alt={book.title}
              className="book-image"
              loading="lazy"
            />
            <div className="book-title" title={book.title}>
              {book.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Books;