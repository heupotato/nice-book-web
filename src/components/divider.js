function Divider(prop)
{
    console.log(prop.children); 
    return(
        <div className="d-container">
            <span className="d-content">
                {prop.children}
            </span>
            <div className="d-border" />
        </div>
    ); 
}
export default Divider; 