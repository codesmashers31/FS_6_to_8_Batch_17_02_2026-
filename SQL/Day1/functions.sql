use election;

select * from candidates;

INSERT INTO candidates ( candidate_name, candidate_age, candidate_mobile_number, candidate_party_name, candidate_constitution ) 
VALUES ("VIJAY", "44","9876543201","TVK", "12"),
("ARUN", "44","9876543201","DMK", "12"),
("JAY", "60","9876543256","ADMK","1"),
("RAHIKA", "78","9678598201","HWR","3"),
("LILY", "53","9876541201","QWE","5"),
("NARMADHA", "52","9876543304","YUI","6"),
("SUBA", "62","9876543234","IOP","4"),
("VISHNU", "56","9876543201","BNM","7"),
("ANAND", "61","9876543201","DFG","10"),
("ROSHAN", "64","9876543201","ASD","2"
);

select candidate_name from candidates;

select count(*) as Total_number_of_row  from candidates;

select SUM(candidate_constitution) as Total_od_sum  from candidates;

select AVG(candidate_constitution) as Total_od_sum  from candidates;
select MIN(candidate_constitution) as Total_od_sum  from candidates;
select MAX(candidate_constitution) as Total_od_sum  from candidates;


select LOWER(candidate_name) from candidates;

INSERT INTO candidates (candidate_name, candidate_age, candidate_mobile_number, candidate_party_name, candidate_constitution ) 
VALUES (lower("VIJAI"),ROUND(24.5),"67585868",UPPER("TVK"),"12");









