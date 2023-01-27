import React, { useState } from "react";
import AddCategorie from "./components/AddCategorie";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  /*  const categories = ["One Punch", "Samurai X", "Dragon Ball"]; */

  const [categories, setCategories] = useState(["One Punch"]);

  const handleAdd = () => {
    setCategories();
  };
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategorie setCategories={setCategories}></AddCategorie>
      <hr />

      <ol>
        {categories.map((c) => (
          <GifGrid key={c} categorie={c}></GifGrid>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
