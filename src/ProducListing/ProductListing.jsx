import React from 'react'
import { movies } from '../Data/MoviesData'
import './ProductListing.css'
const ProductListing = () => {
  return (
    <>
    <div className='search-box'>
        <input type="search" placeholder="Search the Film You Want"/>
    </div>
    <div className='product-section'>
        {
            movies.map(movie=>
                <div key={movie.id} className='card'>
                    <img src={movie.imageURL} alt="poster"/>
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <button>Star</button>
                    <button>Add to WatchList</button>
                </div>
                )
        }
    </div>
    </>
  )
}

export default ProductListing