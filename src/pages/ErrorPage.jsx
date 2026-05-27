import { useNavigate, useRouteError } from "react-router-dom"
export const ErrorPage =()=>{
  const error=useRouteError();
  const navigate=useNavigate();
  const handleGoBack=()=>{
    navigate(-1);
  }
  console.log(error);
  if(error.status===404){
    return (
    <>
      <h1>404 Not Found</h1>
      {/* <NavLink to="/">Go back to home</NavLink> */}
      <button className="btn" onClick={handleGoBack}>
        Go back
      </button>
    </>
  )

  }
  return <h1>Something went wrong</h1>
}
