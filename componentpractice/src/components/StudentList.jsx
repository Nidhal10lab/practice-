import StudentCard from "./StudentCard"
function StudentList(){
    const Students=[
        {
          id:1,
          Name:"Nidhal",
          age:19,
          course:"Mern",
          marks:55,
          grade:"A",
          Result:true
        },
        {
          id:2,
          Name:"Minshan",
          age:20,
          course:"Mern",
          marks:55,
          grade:"D",
          Result:false
        }
    ]
    return (
        <>
        
        {Students.map((Student)=>(
           <StudentCard
           key={Student.id}
           Name={Student.Name}
           age={Student.age}
           course={Student.course}
           marks={Student.marks}
           grade={Student.grade}
           Result={Student.Result}
        />
        ))
    }
        </>
    )
}
export default StudentList