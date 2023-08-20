import Container from "../../UI/Container";
import classes from "./OtherInfo.module.css";
import DarkButton from "../../UI/DarkButton";

function OtherInfo() {
  return (
    <Container className={classes["other-info"]}>
      <div className="bg-light d-flex flex-wrap gap-3 p-5 text-center justify-content-md-between justify-content-center">
        <div>
          <h4>Free shipping</h4>
          <p>Widespread for free</p>
        </div>
        <div>
          <h4>24 X 7 Service</h4>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h4>Festival offer</h4>
          <p>Sale 50% off</p>
        </div>
      </div>
      <form className="d-flex flex-wrap gap-3 justify-content-md-between justify-content-center align-items-center py-5">
        <div>
          <h4>Contact us</h4>
          <p>Fill in the right blank form</p>
        </div>
        <div
          className={`${classes.input} d-flex flex-wrap justify-content-center`}
        >
          <input type="text" placeholder="Enter your email address"></input>
          <DarkButton to="#">Shall we subscribe</DarkButton>
        </div>
      </form>
    </Container>
  );
}

export default OtherInfo;
