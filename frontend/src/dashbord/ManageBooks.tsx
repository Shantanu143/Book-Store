import { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
const api = 'http://localhost:5000/api/book';
const ManageBooks = () => {

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {

    fetch(api).then(res => res.json()).then(data => setAllBooks(data));

  }, [])
  const handleDeleteBook = (id: any) => {

    fetch(api + `/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(() => {
      alert("Book Deleted Succefully");
    });

  }
  return (
    <div className='px-4 my-12' >
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      <Table className='width__form' >
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Naame</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Edit Or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

          {allBooks.map((books, index) => {

            const { authorName, bookTitle, category, _id } = books;
            return (

              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {authorName}
                </Table.Cell>
                <Table.Cell>{bookTitle}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashbord/edit-books/${_id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                  </Link>

                  <button onClick={() => handleDeleteBook(_id)} className='bg-red-600 px-4 py-1 font-semibold text-white  hover:bg-sky-600 rounded-sm '>Delete</button>
                </Table.Cell>
              </Table.Row>


            );
          })}

        </Table.Body>
      </Table>



    </div>
  )
}

export default ManageBooks
