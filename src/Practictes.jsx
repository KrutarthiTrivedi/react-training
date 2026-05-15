export const Practictes = () => {
   const students=[5]
    return (
    <div>
        {/* No 1 */}
      {/* <h1>{students.length === 0 && "Not Found" }</h1>
        <p>No Of students: {students.length}</p> */}
        {/* No 2 */}
        {/* <p>{!students.length && "Not Found"}</p>
        <p>No Of students: {students.length}</p> */}
        {/* No 3 */}
        <p>{Boolean(!students.length) && "Not Found"}</p>
        <p>No Of students: {students.length}</p>
    </div>
  )
}