import { useState } from "react";
import Card from "./Card";
const Cards = (props)=> {
    let courses = props.courses;
    let category = props.category;
    const [likeCourses, setLikeCourses] = useState([]);

    function getAllCourses(){
        if(category === "All")
        {
            let allCourses = [];
            Object.values(courses).forEach((course) => {
                course.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    return(
        <div className="flex flex-wrap mt-4 justify-center gap-4">
           {
            getAllCourses().map((course) => {
              return (<Card key={course.id} course = {course} likeCourses= {likeCourses} setLikeCourses ={setLikeCourses} />)
            })
           }
        </div>
    )
}
export default Cards;