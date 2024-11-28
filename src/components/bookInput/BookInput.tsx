import { useState } from 'react';
import * as BooksClient from '../../clients/booksClient';

export function BookInput() {

  // Correcta desestructuracion del estado
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    price: ''
  });

  const addBook = () => {
    const parsedBook = {
        ...book,
        id: parseInt(book.id),
        price: parseFloat(book.price)
    }
    BooksClient.addBook(book);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Convertir id y price a numeros (id a entero, price a decimal)
    if (name === 'id') {
      setBook(prevState => ({
        ...prevState,
        [name]: value,
      }));
    } else if (name === 'price') {
      setBook(prevState => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setBook(prevState => ({
        ...prevState,
        [name]: value, // Mantener el valor como string para otros campos
      }));
    }
  };

  return (
    <>
      <form>
        <input 
          name="id" 
          placeholder="id" 
          value={book.id} 
          onChange={handleInputChange}
        />
        <input 
          name="title" 
          placeholder="titulo" 
          value={book.title} 
          onChange={handleInputChange}
        />
        <input 
          name="author" 
          placeholder="autor" 
          value={book.author} 
          onChange={handleInputChange}
        />
        <input 
          name="price" 
          placeholder="precio" 
          value={book.price} 
          onChange={handleInputChange}
        />
      </form>
      <button onClick={addBook}>
        Agregar libro
      </button>
    </>
  );
}

