-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE if exists gods;

CREATE TABLE gods (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    known VARCHAR NOT NULL,
    drink VARCHAR NOT NULL
);
INSERT INTO gods (name, known, drink) 
VALUES
('Zeus', 'Lord of Justice', 'Iced American (no sugar)'), ('Poseidon', 'Known as Neptune', 'Espresso shot'),
('Athena', 'Goddess of wisdom, war and the crafts', 'Hot Oatmilk Latte'),
('Apollo', 'Most Loved God', 'Iced Mocha');