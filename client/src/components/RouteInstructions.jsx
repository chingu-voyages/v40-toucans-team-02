import React from "react";

import "./RouteInstructions.css";

const RouteInstructions = ({ routeData }) => {
  if (!routeData) {
    return <div>Loading...</div>;
  }
  const routeStartAddress = routeData.legs[0].start_address;
  const routeEndAddress = routeData.legs[0].end_address;
  const routeDistance = routeData.legs[0].distance.text;
  const routeDuration = routeData.legs[0].duration.text;
  const routeSteps = routeData.legs[0].steps;

  return (
    <div className='instructions-container'>
      <div>
        <h2>Route Instructions</h2>
        <h3>Route Overview</h3>
        <div>Start Address: {routeStartAddress}</div>
        <div>End Address: {routeEndAddress}</div>
        <div>Distance: {routeDistance}</div>
        <div>Duration: {routeDuration}</div>
      </div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Instructions</th>
            <th>Distance</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {routeSteps &&
            routeSteps.map((step, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td
                    dangerouslySetInnerHTML={{ __html: `${step.instructions}` }}
                  ></td>
                  <td>{step.distance.text}</td>
                  <td>{step.duration.text}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RouteInstructions;
