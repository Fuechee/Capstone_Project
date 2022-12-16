import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
};

export default function App() {
    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1213.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}