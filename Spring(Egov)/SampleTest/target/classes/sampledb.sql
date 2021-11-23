USE javadb;
DROP TABLE person;

create table person(
id varchar(15) primary key,
title varchar(200),
name varchar(20),
content varchar(2000),
reg_date date default now()
);
desc person;

insert into person VALUE('person-0','Egovmentwork','김세현','시험 재미있네요',now());
select * from person;


create table ids(
table_name varchar(16) primary key,
next_id int(10) not null
);

insert into ids values('person', 2);

select max(id) from person;

(select nvl(max(id),0)+1 from person)

SELECT *FROM ids;

DESC ids;