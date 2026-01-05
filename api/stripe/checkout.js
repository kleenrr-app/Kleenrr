import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const { price, jobId } = req.body

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'Kleenrr Service' },
        unit_amount: price * 100
      },
      quantity: 1
    }],
    success_url: `${process.env.DOMAIN}/client/tracking.html?job=${jobId}`,
    cancel_url: `${process.env.DOMAIN}/`
  })

  res.json({ url: session.url })
}
