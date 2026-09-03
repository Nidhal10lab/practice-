function StudentCard({ Name,Age,Course,Marks,Grade,Status}){
    return (
        <>
        <h3>{Name}</h3>
        <p>Age:{Age}</p>
        <p>Course:{Course}</p>
        <p>Marks:{Marks}</p>
        <p>Grade:{Grade}</p>
        <p>{Status?"Passed":"Failed"}</p>
        </>
    )
}
export default StudentCard