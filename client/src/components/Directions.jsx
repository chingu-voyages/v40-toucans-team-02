import { Component } from "react";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
import RouteInstructions from "./RouteInstructions";

class Directions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null,
      travelMode: "DRIVING",
      origin: "32 Corbett Ave, York, ON M6N 1V1",
      destination: "269 Conley St, Vaughan, ON L4J 2Z2",
      routeData: null,
      routeSteps: [],
      savedRoutes: [],
    };

    this.directionsCallback = this.directionsCallback.bind(this);
    this.checkDriving = this.checkDriving.bind(this);
    this.checkBicycling = this.checkBicycling.bind(this);
    this.checkTransit = this.checkTransit.bind(this);
    this.checkWalking = this.checkWalking.bind(this);
    this.getOrigin = this.getOrigin.bind(this);
    this.getDestination = this.getDestination.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  directionsCallback(response) {
    if (response !== null) {
      if (response.status === "OK") {
        console.log(response);
        const routeData = response.routes[0];
        this.setState(() => ({
          response,
          routeData: routeData,
          origin: "",
          destination: "",
        }));
      } else {
        console.log("response: ", response);
      }
    }
  }

  checkDriving({ target: { checked } }) {
    checked &&
      this.setState(() => ({
        travelMode: "DRIVING",
      }));
  }

  checkBicycling({ target: { checked } }) {
    checked &&
      this.setState(() => ({
        travelMode: "BICYCLING",
      }));
  }

  checkTransit({ target: { checked } }) {
    checked &&
      this.setState(() => ({
        travelMode: "TRANSIT",
      }));
  }

  checkWalking({ target: { checked } }) {
    checked &&
      this.setState(() => ({
        travelMode: "WALKING",
      }));
  }

  getOrigin(ref) {
    this.origin = ref;
  }

  getDestination(ref) {
    this.destination = ref;
  }

  onClick() {
    if (this.origin.value !== "" && this.destination.value !== "") {
      this.setState(() => ({
        origin: this.origin.value,
        destination: this.destination.value,
      }));
    }
  }

  onSaveClick() {
    // console.log(this);
    if (this.state.response !== null) {
      // console.log("not null");
      this.setState(() => {
        console.log("setState");
        return this.state.savedRoutes.push(this.state.response);
      });
    }
  }

  render() {
    return (
      <div className="map">
        <div className="map-settings">
          <hr className="mt-0 mb-3" />

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="ORIGIN">Origin</label>
                <br />
                <Autocomplete>
                  <input
                    id="ORIGIN"
                    className="form-control"
                    type="text"
                    ref={this.getOrigin}
                  />
                </Autocomplete>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="DESTINATION">Destination</label>
                <br />
                <Autocomplete>
                  <input
                    id="DESTINATION"
                    className="form-control"
                    type="text"
                    ref={this.getDestination}
                  />
                </Autocomplete>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap">
            <div className="form-group custom-control custom-radio mr-4">
              <input
                id="DRIVING"
                className="custom-control-input"
                name="travelMode"
                type="radio"
                checked={this.state.travelMode === "DRIVING"}
                onChange={this.checkDriving}
              />
              <label className="custom-control-label" htmlFor="DRIVING">
                Driving
              </label>
            </div>

            <div className="form-group custom-control custom-radio mr-4">
              <input
                id="BICYCLING"
                className="custom-control-input"
                name="travelMode"
                type="radio"
                checked={this.state.travelMode === "BICYCLING"}
                onChange={this.checkBicycling}
              />
              <label className="custom-control-label" htmlFor="BICYCLING">
                Bicycling
              </label>
            </div>

            <div className="form-group custom-control custom-radio mr-4">
              <input
                id="TRANSIT"
                className="custom-control-input"
                name="travelMode"
                type="radio"
                checked={this.state.travelMode === "TRANSIT"}
                onChange={this.checkTransit}
              />
              <label className="custom-control-label" htmlFor="TRANSIT">
                Transit
              </label>
            </div>

            <div className="form-group custom-control custom-radio mr-4">
              <input
                id="WALKING"
                className="custom-control-input"
                name="travelMode"
                type="radio"
                checked={this.state.travelMode === "WALKING"}
                onChange={this.checkWalking}
              />
              <label className="custom-control-label" htmlFor="WALKING">
                Walking
              </label>
            </div>
          </div>

          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onClick}
          >
            Build Route
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onSaveClick}
          >
            Save Route
          </button>
        </div>

        <div className="map-container">
          <GoogleMap
            id="directions-map"
            mapContainerStyle={{
              height: "400px",
              width: "100%",
            }}
            zoom={2}
            center={{
              lat: 0,
              lng: -180,
            }}
          >
            {this.state.destination !== "" && this.state.origin !== "" && (
              <DirectionsService
                options={{
                  destination: this.state.destination,
                  origin: this.state.origin,
                  travelMode: this.state.travelMode,
                }}
                callback={this.directionsCallback}
              />
            )}

            {this.state.response !== null && (
              <DirectionsRenderer
                options={{
                  directions: this.state.response,
                }}
              />
            )}
          </GoogleMap>
          <RouteInstructions routeData={this.state.routeData} />
        </div>
      </div>
    );
  }
}

export default Directions;
