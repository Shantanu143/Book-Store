
import React, { useEffect, useState } from 'react'
import BookCard from '../bookCard/BookCard.tsx'
import axios from 'axios';
const api = 'http://localhost:5000/api/book';
const OtherBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setBooks(response.data.slice(4, 8));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div><BookCard books={books} headline="Other Books" /></div>;
}



export default OtherBooks
