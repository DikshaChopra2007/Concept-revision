import React from 'react'
import{ Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div className='parent'>
        <div className="card">
      <div className="top">
        <img src="https://up.yimg.com/ib/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&rs=1&c=1&qlt=95&w=105&h=110" alt="" />
       <button> Save <Bookmark size={16} /></button> 
      </div>
      <div className="center">
        <h3>{jobs.company}<span> 5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div className='tag'>
          <h4>
            Part time
          </h4>
          <h4>
            Senior level
          </h4>
        </div>


      </div>
      <div className="bottom">

 <div>
  <h3>
    $120/hr
  </h3>
  <p>Mumbai,India</p>
  </div> 
<div> 
  <button>Apply Now</button>
</div>
      </div>
    </div>
      
    </div>
  )
}

export default Card
