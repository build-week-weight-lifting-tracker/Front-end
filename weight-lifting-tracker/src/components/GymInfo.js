import React from 'react'

export default function GymInfo({gymLoc}){
    return(
        <div>
          <h3>{gymLoc.name}</h3> <br/>
          <address>
              {gymLoc.address}
          </address>
        </div>  
        
    )
}