import React from 'react'
import '../../scss/utils/MainHeading.scss';
function MainHeading({ title ,id}) {
  return (
    <div className="main-heading" id= {id}>
      <h3>{title}</h3>
    </div>

  )
}

export default MainHeading