import { useState, useEffect } from 'react';
import BookService from '../../api-services/book-service';
import BookThumbnail from '../../components/book-thumbnail';
import HeaderBook from '../../components/headerBook';
import loading from '../../gifs/loading.gif';

function TopBook() {
  const [topBook, setTopBook] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    BookService.getTopBook()
      .then((res) => {
        setTopBook(res.data.docs);
        setIsloaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const convertTopBook = (topBk) => {
    let listTopBook = topBk.map((book) => {
      return (
        <BookThumbnail
          id={book._id}
          bookName={book.title}
          author={book.author}
          image={book.image}
        ></BookThumbnail>
      );
    });
    return listTopBook;
  };
  console.log(topBook);

  if (isLoaded === false)
    return (
      <div>
        <HeaderBook />
        <div style={{ height: '100vh' }}>
          <img
            className='img-loading'
            src={loading}
            style={{ height: '100vh' }}
          ></img>
        </div>
      </div>
    );

  if (topBook.length === 0 && isLoaded)
    return (
      <div>
        <HeaderBook />
        <div style={{ height: '100vh' }}>
          <img
            className='img-not-found'
            src='/nice-book-web/images/book-not-found.png'
          ></img>
        </div>
      </div>
    );
  else
    return (
      <div className='search-page'>
        <HeaderBook />
        <div className='blank20'></div>
        <div
          className='book-row-title'
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Top trending
        </div>
        <div className='book-row'>{convertTopBook(topBook)}</div>
      </div>
    );
}

export default TopBook;
