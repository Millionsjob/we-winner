export default async function handler(req, res) {

const orderId = "order_" + Date.now();

res.status(200).json({
orderId: orderId,
message: "Order created successfully"
});

}
