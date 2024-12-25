import React from 'react'
import PersonSvg from "@/assets/icons/PersonSvg";
import { useNavigate } from 'react-router-dom';
function HelperDashboard() {
const navigate = useNavigate();
  return (
    <>
      <div className="body md:w-[80%] mx-auto">
      <div className="cardBox mt-12 flex gap-8 flex-wrap justify-center w-full lg:gap-40">
            <div className=" card w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] xl:w-[7%] hover:cursor-pointer" onClick={()=>navigate("/chat-user")}>
            <PersonSvg />
              <p className="text-center">Chat</p>
            </div>
            <div className="card w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] xl:w-[7%] hover:cursor-pointer" onClick={()=>navigate("/blog")}>
              <PersonSvg />
              <p className="text-center">Blog</p>
            </div>
            <div className="card w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] xl:w-[7%] hover:cursor-pointer" onClick={()=>navigate("/create-article")}>
              <PersonSvg />
              <p className="text-center">Create Article</p>
            </div>
            <div className="card w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] xl:w-[7%] hover:cursor-pointer" onClick={()=>navigate("/check-appointment")}>
              <PersonSvg />
              <p className="text-center">Manage Appointments</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default HelperDashboard
