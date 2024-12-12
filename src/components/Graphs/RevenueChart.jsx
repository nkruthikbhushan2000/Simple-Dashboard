import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./Graphs.css";
import isEmpty from "lodash/isEmpty";
import { Progress } from "antd";

const WorldMap = ({ data }) => {
  if (isEmpty(data)) {
    return <div>No data available</div>;
  }
  return (
    <>
      <div className="world-map-container">
        <ComposableMap>
          <Geographies geography="https://unpkg.com/world-atlas@2.0.2/countries-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>

          {data.map(({ name, coordinates, revenue }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={10} fill="#FF5533" stroke="#fff" strokeWidth={2} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className="world-map-details">
        {data.map((item) => {
          return (
            <div key={item.name} className="world-map-item-wrapper">
              <div className="world-map-item">
                <span>{item.name}</span>
                <span>{item.revenue}K</span>
              </div>
              <Progress percent={item.revenue / 1000} showInfo={false} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorldMap;
