import { NextRequest, NextResponse } from 'next/server'

// POST /api/orders - Create a new order from a request
export async function POST(request: NextRequest) {
  try {
    const { requestId, buyerPhone, itemName, price } = await request.json()

    // Validate input
    if (!requestId || !buyerPhone || !itemName || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Connect to Supabase
    // 1. Create user (buyer) if not exists
    // 2. Create order from request
    // 3. Return order ID

    // For MVP: return mock order
    const orderId = `SF-${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    return NextResponse.json({
      orderId,
      state: 'requested',
      price,
      item: itemName,
      createdAt: new Date().toISOString(),
      message: 'Order created. Buyer can now pay.'
    })
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

// GET /api/orders/[orderId] - Get order details
export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get('orderId')

  if (!orderId) {
    return NextResponse.json(
      { error: 'Order ID required' },
      { status: 400 }
    )
  }

  // TODO: Fetch from Supabase with RLS
  // Return order details based on user role

  // MVP: return mock order
  return NextResponse.json({
    orderId,
    state: 'requested',
    buyer: 'Kwame',
    seller: 'Ama',
    item: 'iPhone 13 Pro',
    price: 8500,
    status: 'Waiting for seller to accept',
    createdAt: new Date().toISOString()
  })
}