'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function SellerRequestPage() {
  const [decision, setDecision] = useState<'accept' | 'decline' | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const request = {
    buyerName: 'Kwame',
    buyerCity: 'Accra',
    item: 'iPhone 13 Pro (256GB, Black)',
    price: 8500,
    image: '/seefirst-identity.svg' // Placeholder
  }

  if (decision === 'accept') {
    return (
      <main className="bg-secondary min-h-screen py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-8 border border-light text-center">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold font-serif text-neutral mb-2">You accepted!</h1>
            <p className="text-neutral/70 mb-6">
              Next step: Verify your Ghana Card and choose a check time.
            </p>
            <button
              onClick={() => window.location.href = '/sellers/verify'}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Continue to Verification
            </button>
          </div>
        </div>
      </main>
    )
  }

  if (decision === 'decline') {
    return (
      <main className="bg-secondary min-h-screen py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-8 border border-light text-center">
            <AlertCircle className="w-16 h-16 text-error mx-auto mb-4" />
            <h1 className="text-2xl font-bold font-serif text-neutral mb-2">Request declined</h1>
            <p className="text-neutral/70 mb-6">
              The buyer will be notified that you declined. No commitment made.
            </p>
            <button
              onClick={() => setDecision(null)}
              className="w-full bg-light text-neutral py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Back
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-secondary min-h-screen py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Main Request Card */}
        <div className="bg-white rounded-lg overflow-hidden border border-light shadow-sm mb-6">
          {/* Buyer Info */}
          <div className="p-6 bg-primary/5 border-b border-light">
            <p className="text-neutral/70 text-sm font-semibold">New buyer request from</p>
            <h2 className="text-2xl font-bold font-serif text-neutral">{request.buyerName} from {request.buyerCity}</h2>
          </div>

          {/* Item */}
          <div className="p-6 border-b border-light">
            <p className="text-neutral/70 text-sm mb-2">Item they want to buy:</p>
            <p className="text-xl font-bold text-neutral mb-3">{request.item}</p>
            <p className="text-3xl font-bold text-primary">₵{request.price}</p>
          </div>

          {/* How it works */}
          <div className="p-6">
            <p className="text-sm font-semibold text-neutral mb-4">What happens next:</p>
            <div className="space-y-3 text-sm text-neutral/70">
              <p>✓ You walk to a SeeFirst agent in Kejetia Market</p>
              <p>✓ Agent checks your Ghana Card (standard ID check)</p>
              <p>✓ You show the item on a live video call with {request.buyerName}</p>
              <p>✓ {request.buyerName} approves or rejects on the call</p>
              <p>✓ Agent seals it if approved and hands it to a courier</p>
              <p>✓ You get paid when it arrives safe in Accra</p>
            </div>
          </div>

          {/* Cost */}
          <div className="px-6 py-4 bg-secondary border-t border-light">
            <p className="text-xs text-neutral/60">This costs you nothing. {request.buyerName} pays a small fee to SeeFirst.</p>
          </div>
        </div>

        {/* Decision Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => setDecision('accept')}
            className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
          >
            I accept. Let's do this.
          </button>
          <button
            onClick={() => setDecision('decline')}
            className="w-full bg-light text-neutral py-4 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Not right now
          </button>
        </div>

        {/* Learn More */}
        <div className="mt-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-primary text-sm font-semibold underline"
          >
            {showDetails ? 'Hide details' : 'Learn more about how it works'}
          </button>
          {showDetails && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-light text-sm text-neutral/70 space-y-3">
              <p><strong>Why does the buyer want SeeFirst?</strong> They can't trust photos alone. Seeing it on video and the sealed proof gives them confidence.</p>
              <p><strong>What about my privacy?</strong> The buyer only sees your first name and city. They never get your phone or address.</p>
              <p><strong>What if I can't make the appointment?</strong> Just reschedule. No penalty.</p>
              <p><strong>What if the buyer changes their mind?</strong> Your money is already waiting. They can only reject if the item doesn't match their listing.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}