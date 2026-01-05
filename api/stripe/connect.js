import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const account = await stripe.accounts.create({
    type: 'express'
  })

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `${process.env.DOMAIN}/cleaner/stripe-connect.html`,
    return_url: `${process.env.DOMAIN}/cleaner/dashboard.html`,
    type: 'account_onboarding'
  })

  res.json({ url: accountLink.url })
}
