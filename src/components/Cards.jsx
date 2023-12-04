import Card from "./Card";
const Cards = (props)=> {
    let courses = props.courses;

    function getAllCourses(){
        let allCourses = [];
        Object.values(courses).forEach((course) => {
            course.forEach((courseData) => {
                allCourses.push(courseData);
            })
        });
        return allCourses;
    }
    return(
        <div>
           {
            getAllCourses().map((course) => {
              return (<Card key={course.id} course = {course}/>)
            })
           }
        </div>
    )
}
export default Cards;