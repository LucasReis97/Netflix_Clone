import React, { useState } from 'react'
import MovieModel from '../model/MovieModel'
import './style/MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

type MovieRowProps = {
  title: string,
  items: MovieModel[]
}

export default function MovieRow ({ title, items }: MovieRowProps) {
  const [scrollX, setScrollX] = useState(0)
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) { x = 0 }
    setScrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    const listWidht = items.length * 150
    if ((window.innerWidth - listWidht) > x) {
      x = (window.innerWidth - listWidht) - 60
    }
    setScrollX(x)
  }

  return (
  <div className="movieRow">
    <h2>{ title }</h2>
    <div className="movieRow--listarea">
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }}/>
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }}/>
      </div>

      <div className="movieRow--list" style={{
        marginLeft: scrollX,
        width: items.length * 150
      }}>
        {
          items.length > 0 && items.map((item, key) => (
            <div key={key} className="movieRow--item">
              {item.posterPath &&
                <img src={`https://image.tmdb.org/t/p/w300${item.posterPath}`} alt={`${item.originalTitle}`}/>
              }
            </div>
          ))
        }
      </div>
    </div>
  </div>
  )
}
