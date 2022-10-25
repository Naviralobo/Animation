import { useRef } from "react";
import classes from "./Enquire.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Enquire = () => {
  const history = useHistory();
  const nameInputRef = useRef();
  const enquiryInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEnquiry = enquiryInputRef.current.value;
    const obj = { name: enteredName, enquiry: enteredEnquiry };
    axios.post
      .post(
        `https://expensetracker-50239-default-rtdb.firebaseio.com/enquiry/.json`,
        obj
      )
      .then((res) => {
        console.log(res.data.name);
      })
      .catch((err) => alert(err));
  };
  return (
    <div className={classes.div}>
      <div className={classes.div1}>
        <h1>Prime Life Space</h1>
        <p>-The best place to see your better self</p>
      </div>
      <div className={classes.div2}>
        <section className={classes.auth}>
          <h1>Your Details</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="enquiry">Enquiry</label>
              <input type="enquiry" id="enquiry" ref={enquiryInputRef} />
            </div>
            <div className={classes.actions}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Enquire;
