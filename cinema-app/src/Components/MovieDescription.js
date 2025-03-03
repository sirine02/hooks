


import React from 'react';
import { useParams, Link } from 'react-router-dom';


const movies  =[
    
    {
        id: 1,
        title: "Star Wars",
        description: "Description Star Wars",
        trailerLink: " https://www.youtube.com/watch?v=TzSm9dWso1o ",
        image: "./assets/wars.jpg "
      },
      {
        id: 2,
        title: "Shrek",
        description: "Description du Shrek",
        trailerLink: " https://www.youtube.com/watch?v=3tRzdX2lG1o",
        image: "./assets/shrek.jpg  "
      },
      {
        id: 3,
        title: "Titanic ",
        trailerLink: "https://www.youtube.com/watch?v=aLRl4mnvfWQ",
        image: "./assets/titanic.jpg "
      },
      
      
];
const MovieDescription = () => {
   
    const { id } = useParams();
  
    
    const movie = movies.find(movie => movie.id === parseInt(id));
  
    if (!movie) {
      return <div>Film non trouvé</div>;
    }
  
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">Voir la bande-annonce</a>
        <br />
        <Link to="/">Retour à l'accueil</Link> 
      </div>
    );
  };
  
  export default MovieDescription;