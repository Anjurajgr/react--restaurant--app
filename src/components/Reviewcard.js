import React from 'react'
import Card from 'react-bootstrap/Card'

function Reviewcard({item}) {
  return (
    <>
    <Card className='my-3  mx-3  p-2' >
        {item.map((result)=>
        <div>
            <h5>{result.name} <span>{result.date}</span></h5>
            <p> {result.comments} </p>
        </div>)}
    </Card>

    </>
  )
}

export default Reviewcard