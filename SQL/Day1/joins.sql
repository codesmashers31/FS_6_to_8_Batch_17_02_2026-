-- inner Join 
select * from constituency inner join district on constituency.district_id = district.district_id;
-- left join

select * from result as p right join party as r on p.party_id = r.party_id;
