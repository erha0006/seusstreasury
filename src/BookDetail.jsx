import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} style={{ width: '200px' }} />
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;
