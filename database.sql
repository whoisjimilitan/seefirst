-- SeeFirst Database Schema (Supabase PostgreSQL)
-- Run this script to initialize the test database

-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  role TEXT NOT NULL CHECK (role IN ('buyer', 'seller', 'agent', 'admin')),
  phone TEXT NOT NULL UNIQUE,
  phone_verified BOOLEAN DEFAULT FALSE,
  ghana_card_id TEXT,
  ghana_card_photo_url TEXT,
  ghana_card_verified_at TIMESTAMP,
  payout_mobile_number TEXT,
  name TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  suspended_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Requests (Buyer creates)
CREATE TABLE requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  seller_handle TEXT NOT NULL,
  seller_phone TEXT,
  item_name TEXT NOT NULL,
  item_price_ghs DECIMAL NOT NULL,
  listing_screenshot_url TEXT,
  shared_link TEXT NOT NULL UNIQUE,
  source_tag TEXT DEFAULT 'buyer_requested',
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP DEFAULT NOW() + INTERVAL '24 hours'
);

-- Orders (Core entity)
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID NOT NULL REFERENCES users(id),
  seller_id UUID REFERENCES users(id),
  agent_id UUID REFERENCES users(id),
  request_id UUID NOT NULL REFERENCES requests(id),
  state TEXT NOT NULL DEFAULT 'requested',
  state_changed_at TIMESTAMP DEFAULT NOW(),
  item_name TEXT NOT NULL,
  price_ghs DECIMAL NOT NULL,
  listing_screenshot_url TEXT,
  check_time_scheduled TIMESTAMP,
  agent_location TEXT,
  money_state TEXT DEFAULT 'pending' CHECK (money_state IN ('pending', 'held', 'released', 'refunded')),
  payment_txn_id TEXT UNIQUE,
  seal_number TEXT UNIQUE,
  seal_photo_url TEXT,
  seal_applied_at TIMESTAMP,
  courier_name TEXT,
  courier_tracking_number TEXT,
  delivery_confirmed_at TIMESTAMP,
  seal_confirmed_at TIMESTAMP,
  seal_number_entered TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  settled_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Order Events (Immutable audit log)
CREATE TABLE order_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id),
  actor_id UUID NOT NULL REFERENCES users(id),
  actor_role TEXT NOT NULL,
  from_state TEXT NOT NULL,
  to_state TEXT NOT NULL,
  evidence_hash TEXT,
  evidence_url TEXT,
  note TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Disputes
CREATE TABLE disputes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id),
  initiated_by TEXT,
  reason_code TEXT,
  reason_text TEXT,
  photo_url TEXT,
  admin_decision TEXT,
  admin_id UUID REFERENCES users(id),
  resolved_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Badges (Seller reputation)
CREATE TABLE badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID NOT NULL REFERENCES users(id),
  badge_type TEXT DEFAULT 'verified_seller',
  earned_at TIMESTAMP DEFAULT NOW(),
  revoked_at TIMESTAMP
);

-- Settings (Configuration)
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TIMESTAMP DEFAULT NOW(),
  updated_by TEXT
);

-- RLS Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE disputes ENABLE ROW LEVEL SECURITY;

-- Users: can see their own record
CREATE POLICY "users_read_own" ON users FOR SELECT
  USING (auth.uid() = id);

-- Orders: buyer sees own, seller sees own, agent sees assigned, admin sees all
CREATE POLICY "orders_read" ON orders FOR SELECT
  USING (
    auth.uid() = buyer_id
    OR auth.uid() = seller_id
    OR auth.uid() = agent_id
    OR (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
  );

-- Order Events: same as orders
CREATE POLICY "order_events_read" ON order_events FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_events.order_id
      AND (
        auth.uid() = orders.buyer_id
        OR auth.uid() = orders.seller_id
        OR auth.uid() = orders.agent_id
        OR (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
      )
    )
  );

-- Disputes: same as orders
CREATE POLICY "disputes_read" ON disputes FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = disputes.order_id
      AND (
        auth.uid() = orders.buyer_id
        OR auth.uid() = orders.seller_id
        OR (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
      )
    )
  );

-- Insert default settings
INSERT INTO settings (key, value) VALUES
  ('buyer_fee_pct', '2'),
  ('seller_fee_pct', '0'),
  ('agent_payment_per_seal_ghs', '20'),
  ('seller_response_timeout_hours', '24'),
  ('auto_release_timeout_hours', '120'),
  ('max_order_value_ghs', '25000'),
  ('badge_threshold_sealed_orders', '3'),
  ('transit_risk_owner', 'seller'),
  ('payments_live_enabled', 'false')
ON CONFLICT DO NOTHING;

-- Create indexes for common queries
CREATE INDEX idx_orders_buyer_id ON orders(buyer_id);
CREATE INDEX idx_orders_seller_id ON orders(seller_id);
CREATE INDEX idx_orders_agent_id ON orders(agent_id);
CREATE INDEX idx_orders_state ON orders(state);
CREATE INDEX idx_order_events_order_id ON order_events(order_id);
CREATE INDEX idx_disputes_order_id ON disputes(order_id);
CREATE INDEX idx_badges_seller_id ON badges(seller_id);