import React from 'react'

const PrintDl = () => {

  const data =JSON.parse(localStorage.getItem("dldetails"));
  console.log(data)
  return (
    <div>PrintDl</div>
  )
}

export default PrintDl