CREATE DATABASE election_db;

use election_db;

CREATE TABLE district (

    district_id INT PRIMARY KEY AUTO_INCREMENT,

    district_name VARCHAR(200),

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE constituency (

    constituency_id INT PRIMARY KEY AUTO_INCREMENT,

    constituency_name VARCHAR(200),

    district_id INT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (district_id)
    REFERENCES district(district_id)

);

CREATE TABLE party (

    party_id INT PRIMARY KEY AUTO_INCREMENT,

    party_name VARCHAR(200),

    party_symbol VARCHAR(200),

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE candidate (

    candidate_id INT PRIMARY KEY AUTO_INCREMENT,

    candidate_name VARCHAR(200),

    age INT,

    gender VARCHAR(20),

    party_id INT,

    constituency_id INT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (party_id)
    REFERENCES party(party_id),

    FOREIGN KEY (constituency_id)
    REFERENCES constituency(constituency_id)

);


CREATE TABLE result (

    result_id INT PRIMARY KEY AUTO_INCREMENT,

    constituency_id INT,

    candidate_id INT,

    party_id INT,

    vote_count INT,

    result_status VARCHAR(50),

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (constituency_id)
    REFERENCES constituency(constituency_id),

    FOREIGN KEY (candidate_id)
    REFERENCES candidate(candidate_id),

    FOREIGN KEY (party_id)
    REFERENCES party(party_id)

);


INSERT INTO district (district_name)
VALUES

('Chennai'),
('Coimbatore'),
('Madurai'),
('Salem'),
('Trichy');

INSERT INTO constituency
(constituency_name, district_id)
VALUES

('T Nagar', 1),
('Velachery', 1),

('Coimbatore South', 2),
('Coimbatore North', 2),

('Madurai Central', 3),

('Salem West', 4),

('Trichy East', 5);

INSERT INTO party
(party_name, party_symbol)
VALUES

('DMK', 'Rising Sun'),

('ADMK', 'Two Leaves'),

('BJP', 'Lotus'),

('Congress', 'Hand'),

('NTK', 'Microphone');


INSERT INTO candidate
(candidate_name, age, gender, party_id, constituency_id)
VALUES

('Arun Kumar', 45, 'Male', 1, 1),

('Priya Sharma', 39, 'Female', 2, 1),

('Rahul Das', 50, 'Male', 3, 2),

('Sneha Reddy', 42, 'Female', 4, 3),

('Vijay Kumar', 48, 'Male', 5, 4),

('Meena Ravi', 37, 'Female', 1, 5),

('Karthik S', 41, 'Male', 2, 6),

('Divya M', 35, 'Female', 3, 7);


INSERT INTO result
(constituency_id, candidate_id, party_id, vote_count, result_status)
VALUES

(1, 1, 1, 85000, 'WIN'),

(1, 2, 2, 72000, 'LOSE'),

(2, 3, 3, 65000, 'WIN'),

(3, 4, 4, 91000, 'WIN'),

(4, 5, 5, 55000, 'LOSE'),

(5, 6, 1, 99000, 'WIN'),

(6, 7, 2, 78000, 'WIN'),

(7, 8, 3, 61000, 'LOSE');



SELECT

d.district_name,

c.constituency_name,

ca.candidate_name,

p.party_name,

r.vote_count,

r.result_status

FROM result r

INNER JOIN district d
ON d.district_id = (
    SELECT district_id
    FROM constituency
    WHERE constituency_id = r.constituency_id
)

INNER JOIN constituency c
ON r.constituency_id = c.constituency_id

INNER JOIN candidate ca
ON r.candidate_id = ca.candidate_id

INNER JOIN party p
ON r.party_id = p.party_id;

