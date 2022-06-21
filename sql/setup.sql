-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE if exists gods;
DROP TABLE if exists sharks;
DROP TABLE if exists zodiacs;
DROP TABLE if exists presidents;
DROP TABLE if exists artists;

CREATE TABLE gods (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    known VARCHAR NOT NULL,
    drink VARCHAR NOT NULL
);

CREATE TABLE sharks (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    species VARCHAR NOT NULL,
    family VARCHAR NOT NULL
);
CREATE TABLE zodiacs ( 
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);
CREATE TABLE presidents (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    start VARCHAR NOT NULL,
    final VARCHAR NOT NULL
);
CREATE TABLE artists( id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
 hit VARCHAR NOT NULL);

INSERT INTO gods (name, known, drink) 
VALUES
('Zeus', 'Lord of Justice', 'Iced American (no sugar)'), ('Poseidon', 'Known as Neptune', 'Espresso shot'),
('Athena', 'Goddess of wisdom, war and the crafts', 'Hot Oatmilk Latte'),
('Apollo', 'Most Loved God', 'Iced Mocha');

INSERT INTO sharks (name, species, family) 
VALUES ('bull shark','Carcharhinus leucas','Carcharhinidae'),('ghost shark','Callorhinchus milii','Carcharhinidae'),('tiger shark','Galeocerdo cuvier','Carcharhinidae'), ('lemon shark','Negaprion brevirostris','Carcharhinidae');

INSERT INTO zodiacs (name, type) VALUES  ('Taurus','Earth'), ('Scorpio', 'Water'), ('Leo', 'Fire'), ('Libra','Air');

INSERT INTO presidents (name, start, final) VALUES 
('Biden', '2021', 'Current'), ('Trump', '2017', '2021'), ('Obama', '2009', '2017'), ('Bush', '2001', '2009');

INSERT INTO artists (name, genre, hit) VALUES ( 'Queen', 'ROCK','Bohemian Rhapsody' ), ('Kid Cudi','RAP','Pursuit of Happiness' ), ('Miley Cryus', 'ROCk', 'Midnight Sky');