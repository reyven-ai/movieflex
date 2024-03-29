import React, { useState } from "react";
import MovieList from "../components/Movies/MovieList";
// import SearchBar from "../components/SearchBar";
import { MOVIE_TYPES, useMovies } from "../hooks/useMovies";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(MOVIE_TYPES.movies);

  const { fetchedMovies, setFetchedMovies, isMoviesLoading } = useMovies({
    type: selectedCategory,
  });

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case MOVIE_TYPES.movies:
        return "What do you want to watch today?";
      case MOVIE_TYPES.tvShow:
        return "TV Shows";
      case MOVIE_TYPES.newPopular:
        return "New & Popular";
      default:
        return "Unknown Category";
    }
  };

  return (
    <div>
      {/* <SearchBar setMovies={setFetchedMovies} /> */}
      <div>
        {isMoviesLoading && (
          <div style={{ textAlign: "center", color: "white" }}>
            <p>Loading...</p>
          </div>
        )}

        {!isMoviesLoading && fetchedMovies && (
          <MovieList
            movies={fetchedMovies}
            title={getCategoryTitle()} // Pass the category title as a prop
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;

// import React from "react";
// import MovieList from "../components/Movies/MovieList";
// import SearchBar from "../components/SearchBar";
// import { MOVIE_TYPES, useMovies } from "../hooks/useMovies";

// function HomePage() {
//   const { fetchedMovies, setFetchedMovies, isMoviesLoading } = useMovies({
//     type: MOVIE_TYPES.movies,
//   });

//   return (
//     <div>
//       <SearchBar setMovies={setFetchedMovies} />
//       <div>
//         {isMoviesLoading && (
//           <div style={{ textAlign: "center", color: "white" }}>
//             <p>Loading...</p>
//           </div>
//         )}

//         {!isMoviesLoading && fetchedMovies && (
//           <MovieList movies={fetchedMovies} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;
