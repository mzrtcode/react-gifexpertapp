import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "./hooks/useFetchGifs";
const GifGrid = ({ categorie }) => {
  const { data: images, loading } = useFetchGifs(categorie);
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categorie}</h3>
      {loading && "Cargando datos..."}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
