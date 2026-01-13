import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PayPalPayment.css";

const PayPalPayment = ({ courseId, price }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  return (
    <div className="paypal-container">
      <h2 className="paypal-title">Checkout</h2>
      <p className="paypal-price">Total: ${price}</p>

      <div className="paypal-box">
        <PayPalButtons
          style={{ layout: "vertical" }}

          /* STEP 1: Create PayPal Order */
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price.toString(),
                  },
                },
              ],
            });
          }}

          /* STEP 2: Capture Payment */
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            console.log("Payment Success:", details);

            /* STEP 3: Enroll student in course */
            await axios.post(
              "http://localhost:5000/courses/addCourseToStudent",
              { student: userId, course: courseId },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );

            alert("Payment successful! Course unlocked 🎉");
            navigate(`/course/${courseId}`);
          }}

          /* STEP 4: Handle Errors */
          onError={(err) => {
            console.error(err);
            alert("Payment failed. Please try again.");
          }}
        />
      </div>
    </div>
  );
};

export default PayPalPayment;
