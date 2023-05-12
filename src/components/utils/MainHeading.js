import React from 'react'
import '../../scss/utils/MainHeading.scss';
function MainHeading({ title }) {
  return (
    <div className="main-heading">
      <h3>{title}</h3>
    </div>

  )
}

export default MainHeading