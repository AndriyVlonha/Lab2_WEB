import Light from "./Light";
import PropTypes from "prop-types";

const TrafficLights = ({ orientation = "vertical" }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: orientation === "vertical" ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  };

  return (
    <div style={containerStyle}>
      <Light tlColor="red" />
      <Light tlColor="yellow" />
      <Light tlColor="green" />
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;