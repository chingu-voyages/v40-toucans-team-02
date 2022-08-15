import React from "react";

const RouteInstructions = ({ routeData }) => {
  const routeSteps = routeData.legs[0].steps;
  return (
    <div>
      <h2>Route Instructions</h2>
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
