import { Book } from '../models/Book';

const apiUrl: string = import.meta.env.VITE_API_URL_DEV;

export function addBook(book: Book) {
    const completeUrl = apiUrl + "/books"
    console.log("addBook url: ", completeUrl);
    console.log(book);
    fetch(completeUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error al agregar libro: ", error);
    });
} 

