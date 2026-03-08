# 🚀 Quick Start Guide - Stripe Payment Integration

## ✅ Your Stripe Key is Already Configured!

Your publishable key is set in `.env`:
```
pk_test_51SjzzBFxdCRWAyF4RDX7dPp4RS4e0N2Qsilfst4kFx5r8aRotYaGleHKsmXfr0IVTgrvjnIMNb7NtERhDD5IbaMY00mgNUuryy
```

## 📋 Setup Steps

### Step 1: Get Your Stripe Secret Key

1. Go to [Stripe Dashboard - API Keys](https://dashboard.stripe.com/test/apikeys)
2. Copy your **Secret key** (starts with `sk_test_`)
3. Keep it handy for the next step

### Step 2: Setup Backend Server

Open a **new terminal** and run:

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Copy .env.example to .env and add your secret key
```

Create `backend/.env` with:
```env
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Then start the server:
```bash
npm start
```

You should see:
```
🚀 Server is running on port 3001
💳 Stripe: ✅ Configured
```

### Step 3: Start Your Frontend

In your **main terminal** (keep backend running):

```bash
npm run dev
```

### Step 4: Test the Payment Flow

1. Open your browser to `http://localhost:5173/payment`
2. You should see the payment form
3. Use test card: `4242 4242 4242 4242`
4. Any future expiry date (e.g., 12/25)
5. Any 3-digit CVC (e.g., 123)
6. Any postal code (e.g., 12345)

## 🧪 Test Cards

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Card declined |
| `4000 0025 0000 3155` | Requires 3D Secure |
| `4000 0000 0000 9995` | Insufficient funds |

## 🎯 Integration Examples

### Example 1: Payment Modal in Any Component

```tsx
import { useState } from 'react';
import { PaymentModal } from './components/PaymentModal';

function YourComponent() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <>
      <button onClick={() => setShowPayment(true)}>
        Pay Now
      </button>

      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        amount={5000} // $50.00 in cents
        serviceName="AC Installation"
      />
    </>
  );
}
```

### Example 2: Add Payment Route

In your routing file:

```tsx
import Payment from './pages/Payment';

// Add to your routes
<Route path="/payment" element={<Payment />} />
```

### Example 3: Custom Amount Payment

```tsx
const [amount, setAmount] = useState(0);

<PaymentModal
  isOpen={showPayment}
  onClose={() => setShowPayment(false)}
  amount={amount * 100} // Convert dollars to cents
  serviceName="Custom Service"
/>
```

## 📁 Project Structure

```
your-project/
├── backend/                    # Backend server
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   ├── .env                   # Backend environment variables
│   └── README.md              # Backend documentation
│
├── src/
│   ├── config/
│   │   └── stripe.ts          # Stripe configuration
│   ├── components/
│   │   ├── StripeProvider.tsx # Stripe wrapper component
│   │   ├── PaymentForm.tsx    # Payment form component
│   │   └── PaymentModal.tsx   # Payment modal component
│   └── pages/
│       └── Payment.tsx        # Payment page
│
├── .env                       # Frontend environment variables
└── START_HERE.md             # This file
```

## 🔧 Troubleshooting

### Backend won't start
- Make sure you're in the `backend` folder
- Check that `STRIPE_SECRET_KEY` is set in `backend/.env`
- Run `npm install` again

### Frontend can't connect to backend
- Ensure backend is running on port 3001
- Check browser console for CORS errors
- Verify `FRONTEND_URL` in backend `.env` matches your frontend URL

### Payment form not showing
- Check browser console for errors
- Verify `.env` file has `VITE_STRIPE_PUBLISHABLE_KEY`
- Restart frontend dev server after changing `.env`

### "Stripe has not been properly initialized"
- Restart your dev server (`npm run dev`)
- Check `.env` file is in the root folder (not in `src/`)
- Verify the key starts with `pk_test_`

## 🚀 Next Steps

1. ✅ Test payments with test cards
2. 📧 Add email notifications (use SendGrid, Resend, etc.)
3. 💾 Save payment records to database
4. 🔔 Set up webhook handling for payment events
5. 🎨 Customize payment form styling
6. 🌐 Deploy backend to production
7. 🔐 Switch to live keys when ready

## 📚 Documentation

- **Backend Setup**: See `backend/README.md`
- **Stripe Setup**: See `STRIPE_SETUP.md`
- **Stripe Docs**: https://stripe.com/docs
- **Test Cards**: https://stripe.com/docs/testing

## 💡 Tips

- Always test with test keys first
- Use Stripe Dashboard to monitor payments
- Set up webhooks for production
- Keep your secret key secure
- Never commit `.env` files

## 🆘 Need Help?

1. Check the documentation files
2. Review Stripe Dashboard logs
3. Check browser console for errors
4. Review backend server logs
5. Visit [Stripe Support](https://support.stripe.com/)

---

**Ready to accept payments!** 🎉

Start both servers and visit: http://localhost:5173/payment
