import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {


    let firstdate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0 , 200) + '...'
    }

    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` ,
        }}>
             <div className="featured--vertical">
                 <div className="featured--horizontal">
                     <div className="featured--name">{item.original_name}</div>
                     <div className="featured--info">
                         <div className="featured--points">{item.vote_average} pontos</div>
                         <div className="featured--year">{firstdate.getFullYear()}</div>
                         <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                     </div>
                     <div className="featured--description">{description}</div>
                         <div className="features--button">
                             <a className="Assistir" href={`/watch/${item.id}`}>► Assistir</a>
                             <a className="MinhaLista" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                         </div>                     
                     
                     <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                 </div>
             </div>
        </section>
    );
}