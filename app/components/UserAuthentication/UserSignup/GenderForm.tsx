import React from 'react'

const GenderForm = () => {
  return (
<div className="flex gap-x-2">
        Gender
        <div className="ms-5 flex justify-center items-center gap-x-1">
          <label>Male</label>
          <input type="radio" id="gender" name="gender" value="Male" defaultChecked/>
        </div>
        <div className="flex justify-center items-center gap-x-1">
          <label>Female</label>
          <input type="radio" id="gender" name="gender" value="Female" />
        </div>
      </div>  )
}

export default GenderForm