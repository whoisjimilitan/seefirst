'use client'

import { useState } from 'react'
import { Check, ChevronRight } from 'lucide-react'

type Step = 'id' | 'call' | 'decision' | 'pack' | 'seal' | 'waybill' | 'handover'

export default function AgentChecklistPage() {
  const [completedSteps, setCompletedSteps] = useState<Step[]>([])
  const [currentStep, setCurrentStep] = useState<Step>('id')

  const steps = [
    { id: 'id' as Step, title: 'Check Ghana Card', subtitle: 'Verify seller ID' },
    { id: 'call' as Step, title: 'Call Buyer', subtitle: 'Start video link' },
    { id: 'decision' as Step, title: 'Buyer Decision', subtitle: 'Approve or reject' },
    { id: 'pack' as Step, title: 'Pack Item', subtitle: 'Take photo' },
    { id: 'seal' as Step, title: 'Seal Parcel', subtitle: 'Photo + number' },
    { id: 'waybill' as Step, title: 'Photograph Waybill', subtitle: 'Courier receipt' },
    { id: 'handover' as Step, title: 'Hand to Courier', subtitle: 'Done' }
  ]

  const handleStepComplete = (step: Step) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step])
      const nextStepIdx = steps.findIndex(s => s.id === step) + 1
      if (nextStepIdx < steps.length) {
        setCurrentStep(steps[nextStepIdx].id)
      }
    }
  }

  const allComplete = completedSteps.length === steps.length

  return (
    <main className="bg-secondary min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 border border-light mb-6">
          <p className="text-neutral/70 text-sm font-semibold mb-2">Today's Check</p>
          <h1 className="text-2xl font-bold font-serif text-neutral mb-1">Ama's iPhone 13</h1>
          <p className="text-neutral/60 text-sm">→ Kwame in Accra | ₵8,500</p>
        </div>

        {/* Steps */}
        <div className="space-y-3 mb-6">
          {steps.map((step, idx) => {
            const isCompleted = completedSteps.includes(step.id)
            const isCurrent = step.id === currentStep
            const isNext = !isCompleted && (completedSteps.length === idx)

            return (
              <div
                key={step.id}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  isCompleted
                    ? 'bg-primary/5 border-primary'
                    : isCurrent || isNext
                    ? 'bg-white border-primary shadow-sm'
                    : 'bg-light border-light opacity-50'
                }`}
                onClick={() => {
                  if (isCompleted || isCurrent || isNext) {
                    handleStepComplete(step.id)
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        isCompleted
                          ? 'bg-primary text-white'
                          : 'bg-light text-neutral/60'
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                    </div>
                    <div>
                      <p className={`font-semibold ${isCompleted ? 'text-primary' : 'text-neutral'}`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-neutral/60">{step.subtitle}</p>
                    </div>
                  </div>
                  {!isCompleted && (isNext || isCurrent) && (
                    <ChevronRight className="w-5 h-5 text-primary" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Current Step Action */}
        {!allComplete && (
          <div className="bg-white rounded-lg p-6 border border-light mb-6">
            <p className="text-sm text-neutral/70 mb-4">
              {currentStep === 'id' && 'Take a photo of the Ghana Card'}
              {currentStep === 'call' && 'Send video call link to buyer'}
              {currentStep === 'decision' && 'Wait for buyer to approve or reject'}
              {currentStep === 'pack' && 'Pack the item carefully'}
              {currentStep === 'seal' && 'Seal with numbered seal. Take photo and enter number'}
              {currentStep === 'waybill' && 'Photograph the courier waybill'}
              {currentStep === 'handover' && 'Hand parcel to courier'}
            </p>
            <button
              onClick={() => handleStepComplete(currentStep)}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              ✓ Done
            </button>
          </div>
        )}

        {/* Earnings */}
        <div className="bg-primary/5 border border-primary rounded-lg p-6 text-center">
          {allComplete ? (
            <>
              <p className="text-primary font-bold text-lg mb-2">✓ Sealed</p>
              <p className="text-3xl font-bold text-primary mb-2">Earned ₵20</p>
              <p className="text-neutral/70 text-sm">Order added to your payout record</p>
            </>
          ) : (
            <>
              <p className="text-neutral/70 text-sm mb-1">You'll earn</p>
              <p className="text-2xl font-bold text-primary">₵20</p>
              <p className="text-neutral/60 text-xs">for this check</p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}