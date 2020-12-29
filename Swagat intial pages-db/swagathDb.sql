create database Swagath;
use Swagath;

#Table for user 
create table Employees(
	EmpId varchar(20) primary key not null,
    EmpName varchar(50),
    EmpEmail varchar(50),
    EmpPhone varchar(50),
    EmpRoom varchar(10),
    EmpCubical varchar(10),
    EmpPhoto BLOB,
    EmpType enum('snt','nonsnt','faculty')

);

create table NonEmployees(
	PesrsonId varchar(20) primary key not null,
    PersonName varchar(50),
    PersonEmail varchar(50),
    PersonAddress varchar(100),
    PersonPhone varchar(50),
    PersonPhoto BLOB,
    PersonType enum('guest','student','vips','visitor')

);

create table Message(	
	MsgId int primary key auto_increment not null,
	MsgDesc varchar(1000),
	PesrsonId  varchar(20),
	EmpId varchar(20),
	MsgType enum('audio','text','audioText'),
	MsgDateTime DATETIME DEFAULT CURRENT_TIMESTAMP ,
	MsgStatus enum('read','unread')
	
);

#Insert Queries
insert into Employees Values('105','Shantanu','S@gmail.com','1234567890','A1','C02',null,1);
insert into NonEmployees Values('134','Vipul','1234567890',null,2);
insert into Message(MsgId,MsgDesc,PesrsonId,EmpId,MsgType,MsgStatus) Values(1,'Meet me on 10th Dec','134','105',2,2);

#truncate Queries
truncate Employees;
truncate NonEmployees;
truncate Message;

#drop queries
drop table Employees;
drop table NonEmployees;
drop table Message;


#Select Queries
select * from Employees;
Select * from NonEmployees;
Select * from Message;