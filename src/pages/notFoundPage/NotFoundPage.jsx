import React, { useEffect, useState } from "react";
import "./NotFoundPage.css";
import { MdDangerous } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const counttimer = setInterval(() => {
        setCount((prevCountdown) => {
            if (prevCountdown === 1) {
              clearInterval(timer); 
              return 0; 
            }
            return prevCountdown - 1;
          });
    }, 1000);
    const timer = setTimeout(() => {
      navigate("/Assignment-UI/Dashboards/Default");
    }, 3000); 

    return () => {
      clearTimeout(timer);
      clearInterval(counttimer);
    };
  }, [navigate]);

  return (
    <div className="not-a-part-of-assignment">
      <div>
        <div>
          <MdDangerous size="100" fill="red"/>
          <h2 style={{color:"red"}}>You will be redirected to dashboard page in {count}</h2>
        </div>
        <h3>The page you're looking at is not a part of the assignment.</h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
