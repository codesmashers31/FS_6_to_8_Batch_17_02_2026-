create database TNVOTERSDB;

use TNVOTERSDB;


CREATE TABLE VOTERS (

Voter_id int primary key auto_increment,
Voter_Name varchar(200) not null,
Age int not null,
Gender varchar(200) not null,
District varchar(200) not null,
Constitution varchar(200) not null,
Party_Name varchar(200) not null,
Vote_Count varchar(200) not null
);

INSERT INTO VOTERS (Voter_Name,Age,Gender,District,Constitution,Party_Name,Vote_Count) VALUES 
("IMRAN","28","Male","Chennai","Perambur","TVK","2678098"),
("Vijay","47","Male","Trichy","Trichy-east","TVK","987654"),
("Ajith","52","Male","Madurai","Madurai-North","DMK","456789"),
("Suresh","35","Male","Coimbatore","Coimbatore-South","AIADMK","234567"),
("Priya","29","Female","Salem","Salem-West","BJP","198765"),
("Karthik","31","Male","Erode","Erode-East","TVK","345678"),
("Divya","26","Female","Tirunelveli","Tirunelveli","Congress","123456"),
("Arun","40","Male","Vellore","Vellore","DMK","456123"),
("Meena","33","Female","Thanjavur","Thanjavur","AIADMK","321456"),
("Ravi","45","Male","Chengalpattu","Tambaram","TVK","654321"),
("Keerthi","24","Female","Kanchipuram","Kanchipuram","BJP","112233"),
("Santhosh","37","Male","Cuddalore","Cuddalore","DMK","445566"),
("Nisha","30","Female","Nagapattinam","Nagapattinam","Congress","223344"),
("Prakash","42","Male","Dindigul","Dindigul","AIADMK","556677"),
("Lavanya","27","Female","Karur","Karur","TVK","778899"),
("Mohan","50","Male","Thoothukudi","Thoothukudi","DMK","889900"),
("Anitha","34","Female","Namakkal","Namakkal","BJP","334455"),
("Gokul","28","Male","Sivagangai","Sivagangai","Congress","667788"),
("Harini","25","Female","Virudhunagar","Virudhunagar","TVK","998877"),
("Manoj","39","Male","Tenkasi","Tenkasi","AIADMK","776655"),
("Sneha","32","Female","Ariyalur","Ariyalur","DMK","554433"),
("Vignesh","29","Male","Pudukkottai","Pudukkottai","BJP","443322");


select * from voters;

select Voter_Name,District,Party_Name from voters;

select Voter_Name,Age from voters where Age > 30;

select * from voters where District = "Chennai";

select * from voters where Party_Name = "DMK";

select * from voters where Gender = "Female" and District = 'Virudhunagar';


select * from voters order by age ASC;

select * from voters order by District ASC;

select count(*) from voters;

select Party_Name,sum(Vote_Count) from voters group by Party_Name;

select District, avg(Age) from voters group by District;


select Party_Name, sum(Vote_Count) from voters group by Party_Name having sum(Vote_Count) > 5000000;

select District , max(Age) from voters group by District;

select District , Avg(Age) from voters group by District having avg(Age) > 28;




INSERT INTO election_results
(candidate_name,party_name,district,constituency,total_votes,election_year)

VALUES

('Ravi Kumar','DMK','Chennai','Kolathur',85000,2026),

('Anitha','AIADMK','Madurai','Madurai South',65000,2026),

('Karthik','BJP','Coimbatore','Coimbatore North',55000,2026),

('Divya','NTK','Salem','Salem West',35000,2026),

('Surya','DMK','Trichy','Trichy East',75000,2026),

('Priya','AIADMK','Chennai','T Nagar',62000,2026),

('Arun','DMK','Madurai','Madurai Central',80000,2026),

('Meena','BJP','Salem','Salem East',40000,2026);


select district , avg(total_votes) from election_results group by district having avg(total_votes) > 60000;

select party_name , sum(total_votes) from election_results group by party_name having sum(total_votes) > 100000;