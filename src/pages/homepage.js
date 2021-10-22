import { useHistory } from "react-router-dom";
function Homepage()
{
    const history = useHistory(); 
    const gotoSignUp = () => {
        history.push('/signup'); 
    }

    const gotoPayment = () => {

    }

    return(
        <div>
            <nav className="navbar d-inline-flex">  
                <div className="text"> 
                    <p className="nav-text">Subcribe to emotion and knowledge, to balance</p>
                    <p className="nav-text">  and critical thinking, to the pleasure that</p>
                        <p className="nav-text">only reading can provide</p>
                        <input type="button" className="btn-start"value="Get started" onClick={gotoSignUp}/>
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
                        <img className="img-body" src="./images/ebook-thumb.png" alt="" srcset=""/>
                    </div>
                </div>   
            </div>
        </div>
    ); 

}
export default Homepage