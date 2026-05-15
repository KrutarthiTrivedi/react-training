import styles from './Netflix.module.css'
import styled from 'styled-components'
export const ServicesCard = ({CurElm}) => {
    const {id, name, rating, img_url, link, description,genre,cast} = CurElm
    // console.log(props.CurElm)
    // const btnStyle = 
    //     {padding:"1.2rem 2.4rem",border:"none",fontSize:"1.6rem",backgroundColor:`${rating >= 8.5 ? "#90ee90" : "#deb887"}`,color:"var(--btn-color)",
    //     fontWeight:"bold",cursor:"pointer"
    //     }
        const ButtonStyled = styled.button`
  padding: 1.2rem 2.4rem;
  border: none;
  font-size: 1.6rem;
  background-color: ${props => (props.rating >= 8.5 ? "#90ee90" : "#deb887")};
  color: var(--btn-color);
  font-weight: bold;
  cursor: pointer;
`
        
        
    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average
        return (
        <li key={id} className={styles.card}>
        <div>
        <div>
            <img src={img_url} alt={name} height="40%" width="40%" />
        </div>
        <div className='flex flex-col gap-6 py-[3.2rem] px-[1.2rem]'>
            <h1>Name: {name}</h1>
        <h2>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h2>
        <p className='text-3xl font-bold underline text-gray-500'>Summary: {description}</p>
        <p >Genre: {genre.join(', ')}</p>
        <p >Cast: {cast.join(', ')}</p>
        <a href={link} >{link}</a>
        {/* <button style={ButtonStyled}>Watch now</button> */}
        <ButtonStyled>Watch now</ButtonStyled>
        
        </div>
        {/* <h3>Episode: {episode}</h3> */}
        {/* <h4>Rating: {rating}</h4> */}
        {/* <button>{canWatch()}</button> */}
      </div>
      </li>
      )
}