function Divider(prop)
{
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