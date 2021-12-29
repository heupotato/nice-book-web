import { useHistory } from "react-router-dom";
import LocalStorageService from "../services/localStorage";
function Homepage()
{
    const history = useHistory(); 

    const isLoggedIn = () => {
        //   return true
          return (LocalStorageService.token !=="" &&  LocalStorageService.token !==null );
      }

    const gotoSignUp = () => {
        history.push('/signup'); 
    }

    const gotoPayment = () => {

    }

    const gotoDiscover = () => {
        history.push('/discover');
    }

    const handleGetStarted = () => {
        if (isLoggedIn() === true)
           gotoDiscover(); 
        else 
            gotoSignUp(); 
    }

    return(
        <div>
            <nav className="navbar d-inline-flex">  
                <div className="text"> 
                    <p className="nav-text">Subcribe to emotion and knowledge, to balance</p>
                    <p className="nav-text">  and critical thinking, to the pleasure that</p>
                        <p className="nav-text">only reading can provide</p>
                        <input type="button" className="btn-start"value="Get started" onClick={handleGetStarted}/>
                </div>
            </nav>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-6 col-xs-12">
                        <div className="sub">
                            <h1>Get immediate access to books, audiobooks, magazines and more for just $8.99/month</h1>
                            <div className='blank'></div>
                            <input type="button" className="btn-sub" value="Subcribe now" onClick={gotoPayment}/>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6 col-xs-12">
                        <img className="img-body" src="./images/ebook-thumb.png" alt=""/>
                    </div>
                </div>   
            </div>
        </div>
    ); 

}
export default Homepage