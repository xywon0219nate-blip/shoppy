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

