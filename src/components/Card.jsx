import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props)=> {
    let likeCourses = props.likeCourses;
    let setLikeCourses = props.setLikeCourses;
    let course = props.course;

    const likeHandler = () => {
        if(likeCourses.includes(course.id))
        {
            setLikeCourses((prev) => prev.filter((id) => id !== course.id));
            toast.error("Liked Removed Successfully");
        }
        else{
            if(likeCourses.length === 0)
            {
                setLikeCourses(course.id);
            }
            else{
                setLikeCourses((prev)=> [...prev, course.id]);
                toast.success("liked the post");
            }
        }
    }
    return(
        <div>
            <div>
                 <img src={props.course.image.url}/>
                 <button onClick={likeHandler}>
                    {
                        likeCourses.includes(course.id) ? <FcLike/>: <FcLikePlaceholder/>

                    }
                 </button>
            </div>

            <div>
                <h2>{props.course.title}</h2>
                <p>
                    {
                      props.course.description.length > 100 
                      ? props.course.description.substring(0,100) + "..."
                      : props.course.description
                    }
                </p>
            </div>
        </div>
    )
}
export default Card;