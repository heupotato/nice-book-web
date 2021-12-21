import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookService from '../../api-services/book-service';
import bookService from '../../api-services/book-service';
import HeaderBook from '../../components/headerBook';
function Discover() {
  const [trending, setTrending] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    BookService.getTopBook()
      .then((res) => {
        setTrending(res.data.docs);
      })
      .catch((err) => console.log(err));

    bookService
      .getNewReleaseBook()
      .then((res) => {
        setLatest(res.data.docs);
      })
      .catch((err) => console.log(err));
  }, []);

  const convertTrending = (trending) => {
    trending = trending.slice(0, 5);
    let listTrending = trending.map((book) => {
      return (
        <div className='book-container'>
          <img src={book.image} className='book-image'></img>
        </div>
      );
    });
    return listTrending;
  };

  const convertLatest = (latest) => {
    latest = latest.slice(0, 5);
    let listLatest = latest.map((book) => {
      return (
        <div className='book-container'>
          <img src={book.image} className='book-image'></img>
        </div>
      );
    });
    return listLatest;
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <HeaderBook />
      <div className='discover-page'>
        <div className='block-center' style={{ padding: 0 }}>
          <div className='book-row-title'>Trending Books</div>
          <Link
            to='/trending'
            style={{ fontFamily: '"Montserrat", sans-serif', color: 'black' }}
          >
            See more {'>>>'}{' '}
          </Link>
        </div>
        <div className='blank20'></div>
        <div className='book-row'>{convertTrending(trending)}</div>

        <div className='blank20'></div>
        <div className='blank20'></div>

        <div className='block-center' style={{ padding: 0 }}>
          <div className='book-row-title'>New Release Books</div>
          <Link
            to='/new-release'
            style={{ fontFamily: '"Montserrat", sans-serif', color: 'black' }}
          >
            See more {'>>>'}{' '}
          </Link>
        </div>
        <div className='blank20'></div>
        <div className='book-row'>{convertLatest(latest)}</div>

        {/* <div className='blank20'></div>
                <div className='blank20'></div>

                <div className='block-center' style={{padding:0}}>
                    <div className='book-row-title'>Categories {">>"} Romance</div>
                    <Link to='/category/Romance' style={{fontFamily: '"Montserrat", sans-serif', color:'black'}}>See more {">>>"} </Link>
                </div>
                <div className='blank20'></div>
                <div className='book-row'>
                    {convertLatest(latest)}
                </div> */}
      </div>
    </div>
  );
}

export default Discover;
