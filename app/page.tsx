'use client'

import Link from 'next/link'
import { ArrowRight, Check, Eye, Lock, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-secondary">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-neutral leading-tight">
              Before you send money, you want to see the real item.
            </h1>
            <p className="text-lg sm:text-xl text-neutral opacity-80">
              SeeFirst shows you. Then seals it. Then ships it. Then you confirm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/start" className="btn-primary">
                I'm buying <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link href="/sellers" className="btn-secondary">
                I'm selling
              </Link>
            </div>
          </div>

          {/* Right: Placeholder for Hero Image */}
          <div className="h-96 sm:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
            <div className="text-center">
              <Eye className="w-16 h-16 text-primary/50 mx-auto mb-4" />
              <p className="text-primary/60 font-serif text-lg">Hero image</p>
              <p className="text-primary/50 text-sm">(Buyer looking confident)</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Story (5 Beats) */}
      <section id="how" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-serif text-center text-neutral mb-4">
            How SeeFirst Works
          </h2>
          <p className="text-center text-neutral/70 mb-16 max-w-2xl mx-auto">
            Five moments. One goal: proof that travels with your parcel.
          </p>

          {/* Beat 1: Doubt */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-accent/30">
              <div className="text-center">
                <p className="text-accent/60 font-serif text-lg">Scene 1: Doubt</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-primary">You want to buy from a stranger.</h3>
              <p className="text-lg text-neutral/80">
                But you can't walk into their shop. You can't touch the item. All you have is a photo they took.
              </p>
              <p className="text-lg text-neutral/60">
                Will it arrive? Will it be the same item?
              </p>
            </div>
          </div>

          {/* Beat 2: Seeing */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
            <div className="h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center">
                <p className="text-primary/60 font-serif text-lg">Scene 2: Seeing</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-primary">An agent shows you the item on video.</h3>
              <p className="text-lg text-neutral/80">
                Agent Ama in Kumasi holds your phone up to her camera. You see the exact item the seller has. From all angles.
              </p>
              <p className="text-lg text-neutral/60">
                If it matches the listing, you approve. If not, refund, done.
              </p>
            </div>
          </div>

          {/* Beat 3: Sealing */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-accent/30">
              <div className="text-center">
                <p className="text-accent/60 font-serif text-lg">Scene 3: Sealing</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-primary">The agent seals it on camera.</h3>
              <p className="text-lg text-neutral/80">
                Numbered seal. Photographed. Nothing gets between that seal and your hands.
              </p>
              <p className="text-lg text-neutral/60">
                Seal number: SF-001234. QR code ships with it.
              </p>
            </div>
          </div>

          {/* Beat 4: Arriving */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
            <div className="h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center">
                <p className="text-primary/60 font-serif text-lg">Scene 4: Arriving</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-primary">Your parcel arrives intact.</h3>
              <p className="text-lg text-neutral/80">
                Sealed. Numbered. Photographed when it left Kumasi. Same seal, same number.
              </p>
              <p className="text-lg text-neutral/60">
                You open it knowing exactly what's inside.
              </p>
            </div>
          </div>

          {/* Beat 5: Trusting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-accent/30">
              <div className="text-center">
                <p className="text-accent/60 font-serif text-lg">Scene 5: Trusting</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-primary">You confirm. Money is released.</h3>
              <p className="text-lg text-neutral/80">
                Seal matches? Payment goes to the seller. Everyone trusts because everyone has proof.
              </p>
              <p className="text-lg text-neutral/60">
                This is how honest commerce works at a distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center text-neutral mb-16">
            Why SeeFirst
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg border border-light hover:shadow-lg transition-shadow">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif text-neutral mb-3">You see the item</h3>
              <p className="text-neutral/70">
                Live video call with the seller's agent. No fake photos. No wrong items. Proof.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg border border-light hover:shadow-lg transition-shadow">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif text-neutral mb-3">Seal is proof</h3>
              <p className="text-neutral/70">
                Numbered, photographed, tamper-evident. Intact seal = payment released. Broken seal = dispute.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg border border-light hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif text-neutral mb-3">Faster payment</h3>
              <p className="text-neutral/70">
                Honest sellers get paid within hours of delivery confirmation. No reviews. No chargebacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center text-neutral mb-8">
            For Sellers
          </h2>
          <p className="text-center text-lg text-neutral/80 mb-12 max-w-2xl mx-auto">
            Buyers bring SeeFirst to you. You accept and get paid faster.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-neutral mb-1">Buyers already have money waiting</h4>
                <p className="text-neutral/70">No waiting for payment. Buyer sends the link. You visit the agent. Get paid when it arrives safe.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-neutral mb-1">No fees on your side</h4>
                <p className="text-neutral/70">SeeFirst charges the buyer. You get 100% of the price. Courier fees are separate.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-neutral mb-1">Earn a verified badge</h4>
                <p className="text-neutral/70">After 3 successful sealed orders, you earn a badge. Share on Instagram, WhatsApp. More buyers trust you.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/sellers" className="btn-primary">
              Learn about selling with SeeFirst
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold font-serif mb-4">SeeFirst</h4>
            <p className="text-white/70 text-sm">Safe remote commerce. See it. Seal it. Trust it.</p>
          </div>
          <div>
            <h5 className="font-bold mb-3">Product</h5>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#how" className="hover:text-white transition">How it works</a></li>
              <li><a href="/sellers" className="hover:text-white transition">For sellers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Legal</h5>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/terms" className="hover:text-white transition">Terms</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Support</h5>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/how-it-works" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>SeeFirst Test Edition • Sep 30, 2026</p>
        </div>
      </footer>
    </main>
  )
}