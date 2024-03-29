import React , {useState} from "react";
import './MovieRow.css';

export default ({title , items}) => {

    const [scrollX , setScrollX] = useState(-400);

    const handLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
           x = 0;
        }
        setScrollX(x);
    }

    const handRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;      
        if((window.innerWidth - listW) > x) {
           x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
           <h2> {title} </h2>
                <div className="movieRow--left" onClick={handLeftArrow}>
                     <i class="fas fa-chevron-left"></i>
                </div>

                <div className="movieRow--right" onClick={handRightArrow}>
                     <i class="fas fa-chevron-right"></i>
                </div>

                <div className="movierow--listarea">

                   <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 150}}>


                        {items.results.length > 0 && items.results.map((item , key)=>(
                           <div className="movieRow--item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                           </div>
                        ))}
                   </div>

                </div>
        </div>
    );
}