import React from 'react'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'
const Search = () => {
  return (
    <div>
      <div className='search container section'>
        <div className='sectioncontainer grid'>
            <div className="btns flex">
                <div className="Singlebtn">
                    <span>Economy</span>
                </div>
                <div className="Singlebtn">
                    <span>Business class</span>
                </div>
                <div className="Singlebtn">
                    <span>First Class</span>
                </div>
            </div>
        </div>

        <div className="searchInputs flex">
         {/* Single input */}

         <div className="singleInput flex">
            <div className="iconDiv">
                <HiOutlineLocationMarker className='icon'/>
            </div>

            <div className="texts">
                <h4>Location</h4>
                <input type="text" placeholder='Where do you want to go' />

            </div>
         </div>

         <div className="singleInput flex">
            <div className="iconDiv">
                <RiAccountPinCircleLine className='icon'/>
            </div>

            <div className="texts">
                <h4>Travelers</h4>
                <input type="text" placeholder='Add guests' />
                
            </div>
         </div>

         <div className="singleInput flex">
            <div className="iconDiv">
                <RxCalendar className='icon'/>
            </div>

            <div className="texts">
                <h4>Check in</h4>
                <input type="text" placeholder='Add date' />
                
            </div>
         </div>


         
         <div className="singleInput flex">
            <div className="iconDiv">
                <RxCalendar className='icon'/>
            </div>

            <div className="texts">
                <h4>Check Out</h4>
                <input type="text" placeholder='Add date' />
                
            </div>
         </div>

         <button className='btn-btnBlock flex'>Search Flight</button>
        </div>
      </div>
    </div> 
  )
}

export default Search
