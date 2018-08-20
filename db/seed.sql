DELETE FROM players;
DELETE FROM games;
DELETE FROM attendance;

INSERT INTO players (name, team) VALUES
(
    'John',
    'Sliders'
),
(
    'Tim',
    'Sliders'
),
(
    'Bob',
    'Sliders'
);

INSERT INTO games (gdate, gtime, home, team) VALUES
(
    '8/1/18',
    '8:00 PM',
    'false',
    'Sliders'
),
(
    '8/8/18',
    '7:00 PM',
    'false',
    'Sliders'
),
(
    '8/15/18',
    '8:00 PM',
    'false',
    'Sliders'
);

INSERT INTO attendance (games_id, player_id) VALUES
(
    '1',
    '1'
),
(
    '1',
    '2'
),
(
    '1',
    '3'
);
