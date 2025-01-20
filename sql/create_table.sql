CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    notes TEXT,
    state VARCHAR(50) NOT NULL CHECK (state IN ('free', 'reserved', 'sold', 'in transit'))
);