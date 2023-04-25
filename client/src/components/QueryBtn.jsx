import "../App.css"
const QueryBtn = (props)=> {

    const handleClick = ()=> {
        props.findQuery(props.query)
    }

    return (
        <div>
            <p className="button" onClick={handleClick}>{props.btn_value}</p>
        </div>
    )
}

export default QueryBtn;
