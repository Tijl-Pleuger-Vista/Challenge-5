DROP TABLE IF EXISTS tb_user; --deletes existing user table if exists
DROP TABLE IF EXISTS tb_poke; --deletes existing poke table if exists

CREATE TABLE tb_user ( --create users table with fields
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    score INT NOT NULL,
    coins INT NOT NULL,
    key TEXT NOT NULL
);

CREATE TABLE tb_poke ( --create user pokemon data table
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL,
    dispname TEXT NOT NULL,
    pokename TEXT NOT NULL,
    hp INTEGER NOT NULL,
    att INTEGER NOT NULL,
    deff INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    specatt INTEGER NOT NULL,
    specdef INTEGER NOT NULL,
    amove TEXT NOT NULL,
    bmove TEXT NOT NULL,
    cmove TEXT NOT NULL,
    dmove TEXT NOT NULL
);