export const getGifs = async (categorie) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=ngbqwrL4n824dynnllfJKDBeCU1ZMMEx&q=${encodeURI(
    categorie
  )}&limit=10`;
  const respuesta = await fetch(URL);
  const { data } = await respuesta.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized.url,
  }));
  console.log(gifs);
  return gifs;
};
