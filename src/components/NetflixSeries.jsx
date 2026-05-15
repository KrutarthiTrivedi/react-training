import seriesData from '../api/seriesData.json'
import { ServicesCard } from './SericesCard';
 const NetfilxSeries = () => {
    // const name = "Stranger Things"
    // const season = 4
    // const episode = 1
    // const rating = 4.5
    // const image = "image.png"
    // const age = 18
    // const canWatch= () => {
    //   if(age >= 18) {
    //     return "You can watch"
    //   } else {
    //     return "You cannot watch"
    //   }
    // }
    return (
        <ul className="grid grid-three-cols">
      {seriesData.map((CurElm,)=><ServicesCard key={CurElm.id} CurElm={CurElm}/>)}  
      
      </ul>
    )
  }

  export default NetfilxSeries;

// export const FooterComponent = () => {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   )
// }

// export const HeaderComponent = () => {
//     return (
//       <div>
//         <h1>Header ....</h1>
//       </div>
//     )
//   }