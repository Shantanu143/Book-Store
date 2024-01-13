import { useState } from 'react'


import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const api = 'http://localhost:5000/api/book';
const UploadBook = () => {

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Sciencefiction",
    "Fantacy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel ",
    "Religion",
    "Art and Design"
  ]

  const [selectBookCategory, setSelectBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectValue = (e: any) => {
    console.log(e.target.value);

    setSelectBookCategory(e.target.value);

  }

  const handleFormSubmit = (e: any) => {

    e.preventDefault();
    const form = e.target;



    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookobj: any = { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL }
    console.log(bookobj);


    fetch(api, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookobj)
    }).then(res => res.json()).then(() => {
      alert("book uploaded successfully !!!!!");
      form.reset();
    })

  }




  return (
    <div className='px-4 my-12'
    >
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      <form onSubmit={handleFormSubmit} className="flex width__form  flex-col flex-wrap gap-4">

        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>

        </div>

        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Add Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Image URL" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="selectCategory" value="Category" />
            </div>
            <select id='selectCategory' name='category' className='w-full rounded'
              value={selectBookCategory} onChange={handleChangeSelectValue}>

              {bookCategories.map((value) => {
                return (
                  <option key={value} value={value} >{value}</option>
                );
              })}

            </select>

          </div>

        </div>


        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="book Description" />
            </div>
            <Textarea id='bookDescription' name='bookDescription' placeholder='Enter Your Book Description......'
              required rows={5} className='w-full'
            />

          </div>
        </div>


        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder='Book PDF URL' required />
        </div>

        <Button type='submit' className='mt-5'>
          Upload Book
        </Button>

      </form>
    </div>
  )


}

export default UploadBook
