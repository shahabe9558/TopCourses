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
        <div className="w-[300px] bg-opacity-80 rounded-md overflow-hidden bg-slate-800">
            <div className="relative">
                 <img src={props.course.image.url} className="w-full min-h-[168px] object-cover"/>
                 <button onClick={likeHandler} className="absolute -bottom-2 right-4 text-4xl bg-white rounded-full">
                    {
                        likeCourses.includes(course.id) ? <FcLike/>: <FcLikePlaceholder/>

                    }
                 </button>
            </div>

            <div>
                <h2>{props.course.title}</h2>
                <p className="p-3">
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