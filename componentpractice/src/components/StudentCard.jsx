function StudentCard({ id,Name,age,course,marks,grade,Result }){
    return (
        <>
        <h3>{Name}</h3>
        <p>{id}</p>
        <p>age:{age}</p>
        <p>course:{course}</p>
        <p>marks:{marks}</p>
        <p>grade:{grade}</p>
        <p>{Result?"Passed":"Failed"}</p>
        </>
    )
}
export default StudentCard