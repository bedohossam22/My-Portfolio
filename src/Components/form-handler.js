import image from "../Assets/knife2.png";
import { useState } from "react";
import { handleFormSubmit } from "./form-handler.js";

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const [empty, setEmpty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isAllInputsFilled = handleFormSubmit(event.target);

    if (isAllInputsFilled) {
      setSubmit(true);
      setEmpty(false);
    } else {
      setSubmit(false);
      setEmpty(true);
    }
  };

  return (
    <>
      <h2 className="free">Please feel Free to share your <span>Critics</span></h2>
      <div className="contact" id="contact">
        <div className="elfinaly">
          <h1>Contact me</h1>
          <p>The form is only for display For now atleast.</p>
          <form method="post" onSubmit={handleSubmit}>
            <input placeholder="YourName" name="name" />
            <input placeholder="Subject" name="subject" />
            <textarea placeholder="message" className="last" name="message"></textarea>
            <div className="flex">
              <button type="submit">Submit</button>
              {submit && <p className="form-endo">Received!</p>}
              {empty && <p className="form-endo aa">Fill all please</p>}
            </div>
          </form>
        </div>
        <img src={image} alt="penguing" />
      </div>
    </>
  );
}