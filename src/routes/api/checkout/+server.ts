import { PRICE_ID, SECRET_STRIPE_KEY } from "$env/static/private"
import { PUBLIC_FRONTEND_URL } from "$env/static/public"
import { json } from "@sveltejs/kit"
import Stripe from 'stripe'

const stripe = new Stripe(SECRET_STRIPE_KEY)

export const POST = async () => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        }
      ],
      mode: "payment",
      success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
      cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/cancel`,
    })
    return json({ sessionId: session.id })
  } catch (error) {
    return json({ error }, { status: 500 }) 
  }
}