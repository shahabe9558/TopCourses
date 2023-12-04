const Card = (props)=> {
    return(
        <div>
           <img src={props.course.image.url}/>
        </div>
    )
}
export default Card;