import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const ListGifs = ({category}) => {

  const { images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }


      <div className="card-grid">
        {
          images.map((image) => ( 
            <GifGridItem key={image.id} {...image}  />
            ))
        }
      </div>
    </>
  )
}

export default ListGifs