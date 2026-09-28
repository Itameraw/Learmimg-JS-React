import React, { useState, useEffect } from "react";
const useFetchMovies = () => {
  const [data, setDate] = useState([]);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const filmsPage = {
    data,
    setDate,
    total,
    setTotal,
    setCurrentPage,
    currentPage,
  };
  return filmsPage;
};
export default useFetchMovies;
