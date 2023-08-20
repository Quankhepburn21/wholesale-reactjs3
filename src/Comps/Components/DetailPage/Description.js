import classes from "./Description.module.css";

function Description(props) {
  let content = "";

  if (props.desc) {
    content = props.desc.split("\n").map((e) => (// Cách biến chuỗi 'desc' thành array
      // Duyệt qua array , xét key là số ngẫu nhiên, 
      <p key={Math.random()} className={classes["long-desc"]}>
        {/* Trả ra những phần tử đã lặp qua */}{e}
      </p>
    ));
  }

  return (
    <div className={`${classes.desc} mt-5`}>
      <h6>Description</h6>
      <h6>product description</h6>
      {content}
    </div>
  );
}

export default Description;
