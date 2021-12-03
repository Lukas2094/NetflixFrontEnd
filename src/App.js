import React , {useEffect , useState} from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {
  
  const [movieList , setMovieList] = useState([]);
  const[featuredData, setFeatureData] = useState(null);
  const [blackHeader , setBlackHeader] = useState(false);


  useEffect(() => {
    const loadll = async () => {
        //Pegando a lista total
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        //Pegar filmes em destaque Featured
        let originals = list.filter(i=>i.slug === 'Originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
        let chosen = originals[0].items.results[randomChosen];
        let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

       setFeatureData(choseInfo);
    }
     loadll();

  }, []);

 useEffect(()=>{
   const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
   }

   window.addEventListener('scroll' , scrollListener);

   return() => {
     window.removeEventListener('scroll' , scrollListener);
   }

   }, []);


  return (
     <div className="page">


       <Header black={blackHeader}/>

         {featuredData && 
           <FeaturedMovie item={featuredData} />
         }

         <section className="lists">
           {movieList.map((item, key)=>(      
               <MovieRow key={key} title={item.title} items={item.items} />         
           ))}
         </section>

         <footer>
             Copyright <span role="img" aria-label="coração">©</span>B7Week <br/>
             Direitos de Imagem para Netflix <br/>
             Dados inseridos site Themoviedb.org

         </footer>
        {movieList.length <= 0 &&
        <div className="loading">
           <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
        </div>
        }
     </div>
  );
}
