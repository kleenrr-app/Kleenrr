import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const { cleanerStripeId, amount } = req.body

  await stripe.transfers.create({
    amount: amount * 100,
    currency: 'usd',
    destination: cleanerStripeId
  })

  res.json({ success: true })
}
