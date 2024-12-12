import React, { useEffect , useState} from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowDownLeft } from "react-icons/lu";
import "./DataPods.css";
import { useTheme } from "../ThemeContext";
import isEmpty from "lodash/isEmpty"; 

const lightColorArr = ["#E3F5FF", "#F7F9FB", "#F7F9FB", "#E5ECF6"];
const darkColorArr = [
  {backgroundColor:"#E3F5FF", color:"#1C1C1C"},
  {backgroundColor:"#FFFFFF0D",color:"#ffffff"},
  {backgroundColor:"#FFFFFF0D",color:"#ffffff"},
  {backgroundColor:"#E5ECF6", color:"#1C1C1C"}
];

const DataPods = ({data}) => {
  const [applyAnimate,setApplyAnimate] = useState(false);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setApplyAnimate(true);
    },0);

    return () => {
      clearTimeout(timer);
    }
  },[])

  if(isEmpty(data)){
    return <div>No Data</div>
  }

  return (
    <div className={`data-pod-container`}>
      {data.map((item, index) => {
        return (
          <div
            className={`data-pod ${applyAnimate ? "visible" : ""}`}
            style={{
              background: !isDarkTheme
                ? lightColorArr[index]
                : darkColorArr[index].backgroundColor,
                color: isDarkTheme ?  darkColorArr[index].color : ""
            }}
          >
            <div className="data-pod-section main-sec">
              <span className="title">
                <strong>{item.title}</strong>
              </span>
              <span className="number">{item.number}</span>
            </div>
            <div className="data-pod-section">
              <span style={{ fontSize: "10px" }}>
                <strong>
                  {item.percent}
                  {item.isProfit ? <FiArrowUpRight /> : <LuArrowDownLeft />}
                </strong>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataPods;
