import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook ={
 title: "Outlive: The Science and Art of Longevity",
 author: "Peter Attia MD",
 img: './images/book1.jpg',
}

const secondBook ={
 title: "The Last Thing He Told Me: A Novel",
 author: "Laura Dave",
 img: './images/book2.jpg',
}

const thirddBook ={
 title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
 author: "James Clear",
 img: './images/book3.jpg',
}

function BookList() {
  return (
    <section className='booklist'>
      {/* <Book opis="szajs" />
      <Book okładka="twarda" cena={54 +"$"} />
      <Book okładka="miekka" opis="dobra"/> */}
      <Navbar />
      <Book img={firstBook.img} 
            title={firstBook.title} 
            author={firstBook.author}/>

      <Book img={secondBook.img}
            title={secondBook.title}
            author={secondBook.author}/>

      <Book img={ thirddBook.img} 
            title={thirddBook.title}
            author={thirddBook.author}/>
    </section>
  );
}

const Book = (props) => {
    const {img, title, author} = props;
  return (
    <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        {/* <p>{props.opis}</p>      
        <p>{props.okładka}</p>      
        <p>{props.cena}</p>     */}
    </article>
  )
}
const Navbar = () => {
    return(
        <div className='navbar'>
            <h1>Amazon Best Sellers Boook</h1>
            <p>Our most popular products based on sales.</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);