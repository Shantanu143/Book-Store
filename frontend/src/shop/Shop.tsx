import { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import axios from 'axios';
const api = 'http://localhost:5000/api/book';

const Shope = () => {

  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setBooks(response.data);
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
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center' >All Books Are Here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-4 md:grid-cols-3 grid-cols-1'>

        {books.map((book) => {
          const { imageURL, bookTitle } = book;

          return (

            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={imageURL}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>

                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </p>

              <button className='bg-blue-700 font-semibold text-white py-2 rounded' >Shop Now </button>
            </Card>

          );
        })}

      </div>
    </div>
  )
}

export default Shope
