import { Button, CircularProgress, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { style } from "../../theme/theme-context";
import TouchAppIcon from "@mui/icons-material/TouchApp";

import "./style.scss";

declare var paypal: any;

const PaypalButton = () => {
  const useStyles: any = () => {
    return style();
  };

  const classes = useStyles();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AeazJ03v8GArfd9FRiJ31FG9rSEDeHqI0WCgEmEn_bpcgwfDynIgu_tAK1W07H_7qyjZ9uUWLKqF7dOk&enable-funding=venmo&currency=USD";
    script.async = false;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      console.log("initializing paypal button ...");
      initPayPalButton();
    });
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initPayPalButton = () => {
    paypal
      .Buttons({
        style: {
          shape: "pill",
          color: "gold",
          layout: "vertical",
          label: "checkout",
        },

        createOrder: function (data: any, actions: any) {
          return actions.order.create({
            purchase_units: [
              //{
              //  description: "BSG Career Coaching - 2021 (Test)",
              //  amount: { currency_code: "USD", value: 0.1 },
              //},
              {
                description: "BSG Career Coaching - 2021",
                amount: { currency_code: "USD", value: 698 },
              },
            ],
          });
        },

        onApprove: function (data: any, actions: any) {
          return actions.order.capture().then(function (orderData: any) {
            // Full available details
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );

            // Show a success message within this page, e.g.
            const element = document.getElementById("paypal-button-container");
            if (element) {
              element.innerHTML = "";
              element.innerHTML =
                "<h2 className='secondary-light'>Thank you for your payment! <br/>We will email you confirmation and instruction soon for next step!</h2>";
            }
            // Or go to another URL:  actions.redirect('thank_you.html');
          });
        },

        onError: function (err: any) {
          console.log(err);
        },
      })
      .render("#paypal-button-container");
  };

  return (
    <>
      <div id="smart-button-container">
        <div>
          <div id="paypal-button-container"></div>
        </div>
      </div>
    </>
  );
};

export default PaypalButton;

/***
 * 
 * Raw code from Paypal button code generator
 * 

<div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  <script src="https://www.paypal.com/sdk/js?client-id=AeazJ03v8GArfd9FRiJ31FG9rSEDeHqI0WCgEmEn_bpcgwfDynIgu_tAK1W07H_7qyjZ9uUWLKqF7dOk&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
  <script>
    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'gold',
          layout: 'vertical',
          label: 'checkout',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"description":"BSG Career Coaching - 2021","amount":{"currency_code":"USD","value":698}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  </script>

 */
