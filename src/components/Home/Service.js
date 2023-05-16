import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Service({title,image,description}) {
  return (
      <div className="box">
          <div className="image">
              <img src={{image}} alt="" />
          </div>
          <div className="content">
              <h3>{title}</h3>
              <div className="icon">
                  <FontAwesomeIcon icon={faDiamond}/>
              </div>
              <p>{description}</p>
          </div>
      </div>
  )
}

export default Service