export default async function handler(req, res) {

const CLIENT_ID = process.env.CASHFREE_CLIENT_ID;
const CLIENT_SECRET = process.env.CASHFREE_CLIENT_SECRET;

const orderId = "order_" + Date.now();

const response = await fetch("https://api.cashfree.com/pg/orders", {
method: "POST",
headers: {
"x-client-id": CLIENT_ID,
"x-client-secret": CLIENT_SECRET,
"x-api-version": "2022-09-01",
"Content-Type": "application/json"
},
body: JSON.stringify({
order_id: orderId,
order_amount: 10,
order_currency: "INR",
customer_details: {
customer_id: "user_" + Date.now(),
customer_email: "demo@cashfree.com",
customer_phone: "9999999999"
}
})
});

const data = await response.json();

if(!data.payment_session_id){
return res.status(400).json(data);
}

res.status(200).json({
payment_session_id: data.payment_session_id
});

}
