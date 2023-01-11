import React, { useState } from "react";
import ResultCart from "./ResultCart";

function Add() {
  const [query, setQuery] = useState("");
  const apikey = "013af03e36ec3e65b8aaa4fb8662c0b5";
  const [result, setResult] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=013af03e36ec3e65b8aaa4fb8662c0b5&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResult(data.results);
        } else {
          setResult([""]);
        }
      });
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Milyonlarca Film Tv Şovu ve Keşfedilecek kişi. Şİmdi İzleyin
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              onChange={onChange}
              placeholder="Dizi,Film, Kişi Ara..."
            />
          </div>
          {result.length > 0 && (
            <ul className="results">
              {result.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
