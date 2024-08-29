import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IoPersonSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaClinicMedical } from "react-icons/fa";




function Content() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < 1000) {
          return prevCount + 1;
        } else {
          clearInterval(interval1);
          return prevCount;
        }
      });
    }, 20); 

    const interval2 = setInterval(() => {
      setCount2(prevCount2 => {
        if (prevCount2 < 900) {
          return prevCount2 + 1;
        } else {
          clearInterval(interval2);
          return prevCount2;
        }
      });
    }, 30); 

    const interval3 = setInterval(() => {
      setCount3(prevCount3 => {
        if (prevCount3 < 800) {
          return prevCount3 + 1;
        } else {
          clearInterval(interval3);
          return prevCount3;
        }
      });
    }, 30);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  

  return (
    <div>
             <h5 className='con'>Student Management</h5>
         <div className='box'>
           <div className='box1'>
                 <IoPersonSharp className='per' /><h3 className='count'>{count}</h3> 
             <h6 className='p1'>Regular Student</h6>
            </div>
            <div className='box2'>
                 <FaUserTie  className='per' /><h3 className='count'>{count2}</h3> 
             <h6 className='p2'>Remedial Student</h6>
            </div>
            <div className='box3'>
                 <IoManSharp className='per' /><h3 className='count'>{count3}</h3> 
             <h6 className='p3'>In Paid Clubs</h6>
            </div>
         </div>
         <div className='hr'></div>
        
                    <div className='ic1'>
                    <div className='w'>
                    <FaUser className='pro1' size={40}/>
                    <p>Regular Enrollment</p>
                    </div >
                    <div className='w2'>
                    <FaBook className='pro1' size={40}/>
                    <p>Remedial Enrollment</p>
                    </div>
                    <div className='w3'>
                    <IoManSharp className='pro1' size={40}/>
                    <p>Club Management</p>
                    </div>
                    </div>
                   <div className='ic2'>
                        <div className='d1'>
                        <FaBookReader className='x2' size={40}/>
                        <p>Classroom Management</p>
                        </div >
                        <div className='d2'>
                        <IoMail size={40}className='x1'/>
                        <p>SMS/MAIL</p>
                        </div > 
                        <div className='d3'>
                        <FaClinicMedical size={50}className='x1'/>
                        <p>Medical Clinic</p>
                        </div >     
                  
                </div> 

          </div>
  
  );
}

export default Content;

