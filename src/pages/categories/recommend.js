import { useState, useEffect } from 'react';
import BookService from '../../api-services/book-service';
import BookThumbnail from '../../components/book-thumbnail';
import HeaderBook from '../../components/headerBook';
import loading from '../../gifs/loading.gif';

function Recommend() {
  const [recommend, setRecommend] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    BookService.getTopBook()
      .then((res) => {
        setRecommend(res.data.docs);
        setIsloaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const convertRecommend = (rec) => {
    let listRecommend = rec.map((book) => {
      return (
        <BookThumbnail
          id={book._id}
          bookName={book.title}
          author={book.author}
          image={book.image}
        ></BookThumbnail>
      );
    });
    return listRecommend;
  };
  console.log(recommend);

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

  if (recommend.length === 0 && isLoaded)
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
          Recommend
        </div>
        <div className='book-row'>{convertRecommend(recommend)}</div>
      </div>
    );
}

export default Recommend;
