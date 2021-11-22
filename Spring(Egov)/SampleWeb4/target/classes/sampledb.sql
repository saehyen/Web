select * from guestbook;

drop table sample;

create table sample(
id int(12) auto_increment primary key,
title varchar(200),
reg_user varchar(20),
content varchar(2000),
reg_date date default now()
);

desc sample;

insert into sample value(0,'JAVA Programming','관리자','자바 관련 글만 등록하세요.',now())
select * from sample;

select nvl(max(id),0)+1 from sample;