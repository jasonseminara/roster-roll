DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS attendance;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    team VARCHAR(255)
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    gdate VARCHAR(255),
    gtime VARCHAR(255),
    home BOOLEAN,
    team VARCHAR(255)
);

CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    games_id INT REFERENCES games(id),
    player_id INT REFERENCES players(id)
);
