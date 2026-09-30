'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle, Clock, Package } from 'lucide-react'

export default function BuyerOrderPage() {
  const [orderState, setOrderState] = useState('requested')
  const [sealNumber, setSealNumber] = useState('')
  const [sealMatch, setSealMatch] = useState<boolean | null>(null)

  const order = {
    id: 'SF-001234',
    buyer: 'Kwame',
    seller: 'Ama',
    item: 'iPhone 13 Pro (256GB, Black)',
    price: 8500,
    sealNumber: 'SF-001234',
    createdAt: new Date(),
    state: orderState
  }

  const states = [
    { name: 'requested', label: 'Requested', icon: Clock },
    { name: 'accepted', label: 'Accepted', icon: CheckCircle2 },
    { name: 'sealed', label: 'Sealed', icon: Package },
    { name: 'delivered', label: 'Delivered', icon: Package },
    { name: 'confirmed', label: 'Confirmed', icon: CheckCircle2 }
  ]

  const handleSealNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entered = e.target.value.toUpperCase()
    setSealNumber(entered)
    setSealMatch(entered === order.sealNumber)
  }

  const handleRelease = () => {
    if (sealMatch) {
      setOrderState('confirmed')
    }
  }

  return (
    <main className="bg-secondary min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Order Header */}
        <div className="bg-white rounded-lg p-6 border border-light mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold font-serif text-neutral">Order {order.id}</h1>
              <p className="text-neutral/60 text-sm">from {order.seller}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">₵{order.price}</p>
              <p className="text-neutral/60 text-sm">{order.item}</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg p-6 border border-light mb-6">
          <h2 className="font-bold text-neutral mb-4">Order Status</h2>
          <div className="space-y-3">
            {states.map((step, idx) => {
              const isActive = states.findIndex(s => s.name === orderState) >= idx
              const Icon = step.icon
              return (
                <div key={step.name} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-primary text-white' : 'bg-light text-neutral/40'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={isActive ? 'text-primary font-semibold' : 'text-neutral/60'}>{step.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Current State */}
        {orderState === 'delivered' && (
          <div className="bg-white rounded-lg p-6 border border-light mb-6">
            <h2 className="font-bold text-neutral mb-4">✓ Your parcel arrived</h2>
            <p className="text-neutral/70 mb-6">
              Check the seal number on your parcel. It should match:
            </p>
            <p className="text-2xl font-bold text-primary font-mono mb-6">{order.sealNumber}</p>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-neutral mb-2">Enter seal number from parcel:</label>
              <input
                type="text"
                value={sealNumber}
                onChange={handleSealNumberChange}
                placeholder="SF-..."
                className="w-full px-4 py-3 border border-light rounded-lg font-mono text-lg"
              />
              {sealMatch !== null && (
                <p className={`mt-2 text-sm ${sealMatch ? 'text-primary' : 'text-error'}`}>
                  {sealMatch ? '✓ Seal matches!' : '✗ Seal does not match'}
                </p>
              )}
            </div>

            {sealMatch && (
              <button
                onClick={handleRelease}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Confirm &amp; Release Payment
              </button>
            )}

            {!sealMatch && sealNumber && (
              <div className="w-full bg-error/10 text-error py-3 px-4 rounded-lg text-sm">
                <AlertCircle className="inline mr-2 w-4 h-4" />
                Seal mismatch. Contact support.
              </div>
            )}
          </div>
        )}

        {orderState === 'confirmed' && (
          <div className="bg-white rounded-lg p-6 border border-light border-primary bg-primary/5 mb-6">
            <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold font-serif text-primary mb-2">Order Complete!</h2>
            <p className="text-neutral/70 mb-4">
              Payment of ₵{order.price} has been released to {order.seller}.
            </p>
            <p className="text-sm text-neutral/60">
              Thank you for using SeeFirst. Your order is confirmed and sealed.
            </p>
          </div>
        )}

        {['requested', 'accepted', 'sealed'].includes(orderState) && (
          <div className="bg-white rounded-lg p-6 border border-light">
            <p className="text-neutral/70">
              {orderState === 'requested' && 'Waiting for seller to accept your order...'}
              {orderState === 'accepted' && 'Seller accepted! Waiting for verification...'}
              {orderState === 'sealed' && 'Order sealed and shipped. Tracking info sent via WhatsApp.'}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}