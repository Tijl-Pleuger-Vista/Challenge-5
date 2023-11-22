-- DROP TABLE IF EXISTS tb_user; --deletes existing table if exists

CREATE TABLE tb_user ( --create users table with fields
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    key TEXT NOT NULL
);

CREATE TABLE tb_data ( --create user data table
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL REFERENCES tb_user(key),
    pokeid INT NOT NULL,
    pokename TEXT NOT NULL,
    pokeattr TEXT NOT NULL
);

CREATE TABLE tb_asset ( --create user score table
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL REFERENCES tb_user(key),
    username TEXT NOT NULL REFERENCES tb_user(username),
    score TEXT NOT NULL,
    coins INT NOT NULL
);