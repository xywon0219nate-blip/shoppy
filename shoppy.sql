use shoppy;
select database();
show tables;
select * from information_schema.views where table_schena = 'shoppy';
select * from member;
select * from product;
desc product;

select pid,
	name,
    price,
    info,
    rate,
    concat('images/',image) as image,
    img_list
from product;

select product_detailinfo from product;
select pid from product_detailinfo;
select * from product_detailinfo;
select rate from product;

select pid,
	name,
    info,
    rate,
    img_list
from product;
 
select * from product where pid = ? ;

select  pid,
            name,
            price,
            info,
            rate,
            concat('/images/', image) as image,
            img_list as imgList
        from product where pid = ?;

select  pid,
        concat('images/', image) as image
from product;        
       
-- product + product_detailinfo 테이블 조인
select  p.pid,
		p.name,
        p.price,
        p.info,
        p.rate,
        concat('images/', p.image) as image,
        p.img_list as imgList,
        json_object(
			"title_ko", pd.title_ko, -- "detailInfo" : {"title_en":title_en, ...}
			"title_en" , pd.title_en,
			"list", pd.list) as detailInfo
	from product p, product_detailinfo pd 
    where p.pid = pd.pid and p.pid = 1;

show tables;
select * from product_detailinfo;

select * from product_qna;
desc product_qna;

select 
	qid,
	title,
    content,
	is_lock as isLock,
	is_complete as isComplete,
    id,
    pid,	
    cdate
from product_qna
where pid = 1;

desc product_return;
select   rid,
		title,
        description,
        list
from product_return;

select * from member;
desc member;




