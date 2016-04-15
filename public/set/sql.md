
### 1 - Which of the following is not true about SQL statements?
<a-->SQL statements are not case sensitive.
<a-->SQL statements can be written on one or more lines.
<a-->Keywords cannot be split across lines.
<q-->
### 2 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display the full name of a student, with a column heading "Name"

<a-->select first_name || last_name as “Name” from students;
<a-->select first_name, last_name as “Name” from students;
<a-->select Name from students;
<a-->select first_name, last_name from students;
<q-->
### 3 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display the distinct honours subjects in the STUDENTS table?

<a-->select distinct honours_subject from students;
<a-->select honours_subject from students;


<a-->select all honours_subject from students;

<a-->select * from students;

<q-->
### 4 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display all the students with honours_subject ‘Eng01’?

<a-->select student_code, first_name, last_name from students where honours_subject = ‘Eng01’;

<a-->select student_code, first_name, last_name from students where honours_subject is ‘Eng01’;

<a-->select student_code, first_name, last_name where honours_subject = ‘Eng01’ from students;

<a-->select student_code, first_name, last_name from students;

<q-->
### 5 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display all the students whose first name starts with the character ‘A’?

<a-->select first_name from students where first_name like ‘A%’;

<a-->select first_name from students where first_name like ‘%A’;

<a-->select first_name from students where first_name like ‘%A%’;

<a-->select first_name from students where first_name like ‘A’;

<q-->
### 6 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
Which of the following query would display all the students where the second letter in the first name is ‘i’?
```
<a-->select first_name from students where first_name like ‘_i%’;

<a-->select first_name from students where first_name like ‘%i_’;

<a-->select first_name from students where first_name like ‘%i%’;

<a-->select first_name from students where first_name like ‘_i_’;

<q-->
### 7 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display names of all the students whose email ids are not provided?
<a-->select first_name, last name from students where email is null;

<a-->select first_name, last name from students where email = 0;

<a-->select first_name, last name from students where email = ‘ ‘;

<a-->select first_name, last name from students where email = ‘null’;

<q-->
### 8 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display names of all the students whose honours subject is English and percentage of marks more than 80, or honours subject is Spanish and percentage of marks more than 80?

<a-->select first_name, last name from students where (honours_subject = “English” or honours_subject = “Spanish” ) and percentage_of_marks > 80;

<a-->select first_name, last name from students where honours_subject = “English” or honours_subject = “Spanish” and percentage_of_marks > 80;

<a-->select first_name, last name from students where (honours_subject = “English” or honours_subject = “Spanish” and percentage_of_marks > 80);

<a-->select first_name, last name from students where (honours_subject = “English”) or honours_subject = “Spanish” and percentage_of_marks > 80;

<q-->
### 9 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display names of all the students whose honours subject is English, or honours subject is Spanish and percentage of marks more than 80?

<a-->select first_name, last name from students where honours_subject = “English” or honours_subject = “Spanish” and percentage_of_marks > 80;

<a-->select first_name, last name from students where (honours_subject = “English” or honours_subject = “Spanish” ) and percentage_of_marks > 80;

<a-->select first_name, last name from students where honours_subject = “English” and honours_subject = “Spanish” or percentage_of_marks > 80;

<a-->select first_name, last name from students where (honours_subject = “English”) and honours_subject = “Spanish” and percentage_of_marks > 80;

<q-->
### 10 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display names of all students in descending order of percentage of marks?

<a-->select first_name, last name, percentage_of_marks from students order by percentage_of_marks desc;

<a-->select first_name, last name, percentage_of_marks from students order by percentage_of_marks;

<a-->select first_name, last name, percentage_of_marks order by percentage_of_marks desc from students;

<a-->select first_name, last name, percentage_of_marks from students order by percentage_of_marks descending;

<q-->
### 11 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would display names and percentage of marks of all students sorted by honours subject, and then order by percentage of marks?

<a-->select first_name, last name, honours_subject, percentage_of_marks from students order by honours_subject, percentage_of_marks;

<a-->select first_name, last name, honours_subject, percentage_of_marks order by percentage_of_marks desc from students;

<a-->select first_name, last name, percentage_of_marks from students order by percentage_of_marks desc;

<a-->select first_name, last name, percentage_of_marks from students order by percentage_of_marks, honours_subject;

<q-->
### 12 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query would correctly display the students’ first name, last name, honours subject and date of birth, born between July 1st 1996, and 30th June 1999.
<a-->select first_name, last name, honours_subject, date_of_birth from students where date_of_birth between ’01-JUL-1996’ and ’30-JUN-1999’;

<a-->select first_name, last name, honours_subject, date_of_birth from students where date_of_birth between ’30-JUN-1999’ and ’01-JUL-1996’;

<a-->select first_name, last name, honours_subject, date_of_birth from students where date_of_birth in (’30-JUN-1999’ , ’01-JUL-1996’);

<a-->select first_name, last name, honours_subject, date_of_birth from students where date_of_birth like ’30-JUN-1999’ and ’01-JUL-1996’;

<q-->
### 13 - Which of the following is not true about single row functions?

<a-->They cannot be nested.
<a-->They operate on single rows only and return one result per row.

<a-->They accept arguments that could be a column or any expression.
<a-->They may modify the data type.

<q-->
### 14 - Which of the following is not a character manipulation function?

<a-->coalesce
<a-->concat
<a-->substr
<a-->instr
<q-->
### 15 - What is returned by INSTR(‘HELLO WORLD’, ‘W’)?

<a-->7
<a-->6
<a-->WORLD
<a-->HELLO

<q-->
### 16 - What is returned by SUBSTR(‘HELLO WORLD’, 1, 5)?
<a-->HELLO
<a-->HELL
<a-->ELLO
<a-->WORLD

<q-->
### 17 - What is returned by SUBSTR(‘HELLO WORLD’, -1, 1)?

<a-->H

<a-->NULL

<a-->0

<a-->D

<q-->
### 18 - What is returned by ROUND(789.8389, 2)?
<a-->789.84
<a-->789.83
<a-->78
<a-->789.00
<q-->
### 19 - What is returned by TRUNC(789.8389, 2)?
<a-->789.83
<a-->789.84
<a-->78
<a-->789.00
<q-->
### 20 - What is returned by MOD(1000,30)?
<a-->10
<a-->33
<a-->30
<a-->3
<q-->
### 21 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which query will display the names and honours subjects of all students and if a student has not yet been given a honours subject yet, then it should display ‘No Honours Yet’.

<a-->select first_name, last name, nvl(honours_subject, ‘No Honours Yet’) from students;

<a-->select first_name, last name, nvl2(honours_subject, ‘No Honours Yet’) from students;

<a-->select first_name, last name, honours_subject, from students;

<a-->select first_name, last name, nullif(honours_subject, ‘No Honours Yet’) from students;

<q-->
### 22 - You want to calculate the tax payable by the employees of an organization. If the employee gets a commission, then the tax would be calculated on commission plus salary, if the employee does not get any commission, then the tax would be calculated on salary only. Which function should you use for calculating tax?

<a-->NVL2

<a-->NVL

<a-->NULLIF

<a-->COALESCE

<q-->
### 23 - For some particular assignment, you need to compare two values, if both are equal, the result would be null, and if the values are not equal then the first value should be returned. Which function should you use?

<a-->NULLIF

<a-->NVL

<a-->NVL2

<a-->COALESCE

<q-->
### 24 - Which of the following is not true about the COALESCE function?

<a-->It returns the first value in the parameter list if it is null.

<a-->It takes multiple alternate values.

<a-->It returns the first non-null expression in the parameter list.

<a-->None of the rest

<q-->
### 25 - Which of the following is true about Cartesian Products?

<a-->A Cartesian product is formed when a join condition is omitted.

<a-->A Cartesian product is formed when a join condition is valid.

<a-->Some rows in the first table are joined to all rows in the second table.

<a-->All rows in the first table are joined to some rows in the second table.


<q-->
### 26 - Which of the following is not true about Natural Joins?

<a-->It selects rows from the two tables having different values in the matched columns.

<a-->Natural join is based on all columns in two tables having same name

<a-->If columns having same names have different data types, it returns error.

<a-->None of the rest.

<q-->
### 27 - Consider the following schema −
```
HONOURS_SUBJECT(subject_code, subject_name, department_head);
LOCATIONS(subject_code, department_name, location_id, city);
```
Which query will perform a natural join between the HONOURS_SUBJECT table and the LOCATIONS table?
<a-->select subject_code, subject_name, location_id, city from honours_subject natural join locations;

<a-->select subject_code, subject_name, location_id, city from honours_subject cross join locations;

<a-->select subject_code, subject_name, location_id, city from honours_subject join locations;

<a-->select subject_code, subject_name, location_id, city from honours_subject outer join locations;

<q-->
### 28 - Which of the following is not true about USING clause?
<a-->You can use a table name or alias in the referenced columns.

<a-->When more than one column has the same name, USING clause is used for specifying the column to be joined by equijoin.

<a-->It is used for matching one column only.

<a-->The NATURAL JOIN and the USING clauses are mutually exclusive.

<q-->
### 29 - Consider the following schema −
```
HONOURS_SUBJECT(subject_code, subject_name, department_head);
LOCATIONS(subject_code, department_name, location_id, city);
```
Select the right query for retrieving records from the tables HONOURS_SUBJECT and LOCATIONS with the USING clause

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h join location l using(subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h natural join location l using(subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h, location l using(subject_code);

<a-->None of the rest

<q-->
### 30 - Which of the following is true about SQL joins?
<a-->The join condition for natural join is basically an equijoin of all columns with same name.

<a-->The join condition is not separated from other search conditions in a query.

<a-->The ON clause makes code difficult to understand.

<a-->None of the rest

<q-->
### 31 - Consider the following schema −
```
HONOURS_SUBJECT(subject_code, subject_name, department_head);
LOCATIONS(subject_code, department_name, location_id, city);
```
Select the right query for retrieving records from the tables HONOURS_SUBJECT and LOCATIONS with the ON clause

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h join location l on(h.subject_code = l.subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h join location l on(subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h, location l on(subject_code);

<a-->None of the rest.

<q-->
### 32 - Which of the following is not true about the ON clause?
<a-->ON clause does not allow three way joins.

<a-->ON clause is used to specify conditions or specify columns to join.

<a-->ON clause makes the query easy to understand.


<a-->None of the rest.

<q-->
### 33 - Which of the following is not true about SQL joins?
<a-->None of the rest
<a-->An inner join is a join of two tables returning only matching rows.

<a-->A left or right outer join returns the results of the inner join as well as the unmatched rows in the left or right table respectively.

<a-->A full outer join returns results of an inner join as well as the results of a left and right join.



<q-->
### 34 - Consider the following schema −
```
HONOURS_SUBJECT(subject_code, subject_name, department_head);
LOCATIONS(subject_code, department_name, location_id, city);
```
Select the right query for retrieving records from the tables HONOURS_SUBJECT and LOCATIONS with a left outer join

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h left outer join location l on(h.subject_code = l.subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h left outer join location l on(subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h left join location l on(h.subject_code = l.subject_code);

<a-->None of the rest.

<q-->
### 35 - Consider the following schema −
```
HONOURS_SUBJECT(subject_code, subject_name, department_head);
LOCATIONS(subject_code, department_name, location_id, city);
```
Select the right query for retrieving records from the tables HONOURS_SUBJECT and LOCATIONS with a right outer join


<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h right outer join location l on(h.subject_code = l.subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h on right outer join location l where(h.subject_code = l.subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h outer join location l on(subject_code);

<a-->None of the rest

<q-->
### 36 - Consider the following schema −
```
HONOURS_SUBJECT(subject_code, subject_name, department_head);
LOCATIONS(subject_code, department_name, location_id, city);
```
Select the right query for retrieving records from the tables HONOURS_SUBJECT and LOCATIONS with a full outer join

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h full outer join location l on(h.subject_code = l.subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h full outer join location l on(subject_code);

<a-->select h.subject_name, l.department_name, h.department_head, l.city from honours_subject h full outer join location l where (h.subject_code = l.subject_code);

<a-->None of the rest

<q-->
### 37 - Which of the following is true about a group function?
<a-->DISTINCT keyword makes a group function consider duplicate values.
<a-->Group functions ignore null values.
<a-->Group functions operate on sets of rows to produce multiple results per group.
<a-->None of the rest.
<q-->
### 38 - Which of the following is not a group function?
<a-->NVL
<a-->SUM
<a-->COUNT
<a-->MIN

<q-->
### 39 - Which of the following functions can be used on both numeric as well as non-numeric data?
<a-->COUNT
<a-->AVG
<a-->STDDEV
<a-->VARIANCE

<q-->
### 40 - Which of the following is not true about the MAX and MIN functions?
<a-->None of the rest.
<a-->Both can be used for any data type.
<a-->MAX returns the maximum value.
<a-->MIN returns the minimum value.

<q-->
### 41 - Which of the following is not true about the COUNT function?
<a-->None of the rest.
<a-->COUNT(*) returns the number of rows in the table.
<a-->COUNT(exp) returns the number of rows with non-null values for the exp.
<a-->COUNT(DISTINCT exp) returns the number of unique, non-null values in the column.

<q-->
### 42 - You want to calculate the sum of commissions earned by the employees of an organisation. If an employee doesn’t receive any commission, it should be calculated as zero. Which will be the right query to achieve this?
<a-->select sum(nvl(commission, 0)) from employees;
<a-->select sum(commission, 0) from employees;
<a-->select nvl(sum(commission), 0) from employees;
<a-->None of the rest.

<q-->
### 43 - Which of the following query will result in an error?
<a-->select dept_id, count(name) from employees;
<a-->select dept_id, avg(salary) from employees group by dept_id;
<a-->select avg(salary) from employees group by dept_id;
<a-->select dept_id, job_id, avg(salary) from employees group by dept_id, job_id;

<q-->
### 44 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query will correctly list the average percentage of marks in each honours subject, when the average is more than 50 percent?
<a-->select honours_subject, avg(percentage_of_marks) from students having avg(percentage_of_marks) > 50.0 group by honours_subject;
<a-->select honours_subject, avg(percentage_of_marks) from students where avg(percentage_of_marks) > 50.0 group by honours_subject;
<a-->select honours_subject, avg(percentage_of_marks) from students group by honours_subject having avg(percentage_of_marks) > 50.0;
<a-->None of the rest.

<q-->
### 45 - Which of the following is not true about a subquery?
<a-->The result of the main query is returned to the subquery.
<a-->A subquery is a SELECT statement embedded in a clause of another SELECT statement.
<a-->The subquery executes before the main query.
<a-->All of the rest

<q-->
### 46 - A subquery can be placed in which of the SQL clauses?
<a-->All of the rest
<a-->The WHERE clause
<a-->The HAVING clause
<a-->The FROM clause

<q-->
### 47 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following query will correctly display name of all the students who got more marks than the student ‘0215/15’?
<a-->
```
select first_name, last_name from students 
where percent_of_marks > 
    (select percentage_of_marks from students
        where student_code = ‘0215/15’);
```
<a-->
```
select first_name, last_name from students 
having percent_of_marks > 
    (select percentage_of_marks from students
        where student_code = ‘0215/15’);
```
<a-->
```
select first_name, last_name from students 
using percent_of_marks > 
    (select select percentage_of_marks from students
        where student_code = ‘0215/15’);
```
<a-->None of the rest

<q-->
### 48 - Which of the following is true about subqueries?
<a-->All of the rest
<a-->Subqueries could be used for Top-N analysis.
<a-->Subqueries can be of two types – single-row subquery and multiple-row subquery.
<a-->The outer and inner queries can get data from different tables.

<q-->
### 49 - Which of the following is not true about single-row subqueries?
<a-->Single row subqueries return one row from the outer SELECT statement.
<a-->Single row subqueries return one row from the inner SELECT statement.
<a-->Single row subqueries use single-row comparison operators.
<a-->All of the rest.
<q-->
### 50 - You want to calculate the minimum percentage of marks obtained under each honours group students, where the minimum marks is more than the minimum marks in economics department. Under which clause should the subquery be?
<a-->HAVING clause
<a-->WHERE clause
<a-->FROM clause
<a-->None of the rest.

<q-->

### 51 - Which of the following is not true about multiple-row subqueries?
<a-->Multiple row subqueries return multiple rows from the inner SELECT statement.
<a-->Multiple row subqueries return multiple rows from the outer SELECT statement.
<a-->Multiple row subqueries use multiple-row comparison operators.
<a-->All of the rest.

<q-->
### 52 - Which of the following comparison operators could be used in a multiple row query?
<a-->All of the rest
<a-->IN operator
<a-->ANY operator
<a-->ALL operator

<q-->
### 53 - In which of the following cases a DML statement is executed?
<a-->When new rows are added to a table.
<a-->When a table is created.
<a-->When a transaction is committed.
<a-->None of the rest.

<q-->
### 54 - In which of the following cases a DML statement is not executed?
<a-->When a table is deleted
<a-->When existing rows are modified
<a-->When some rows are deleted
<a-->All of the rest

<q-->
### 55 - Which of the following is not true about inserting news rows to a table?
<a-->You cannot insert rows with NULL values to a table.
<a-->The INSERT INTO statement is used for inserting new rows to a table
<a-->You may insert a new row containing values for each column.
<a-->All of the rest.

<q-->
### 56 - Which of the following is true about inserting news rows to a table?
<a-->All of the rest.
<a-->You must list values in the default order of the columns in the table.
<a-->You can also list the columns in the INSERT clause.
<a-->You can use the INSERT statement to add rows from one table to another.

<q-->
### 57 - Which of the following is not true about modifying rows in a table?
<a-->None of the rest.
<a-->Existing rows in a table are modified using the UPDATE statement.
<a-->You can update more than one row at a time.
<a-->All the rows in a table are modified if you omit the WHERE clause.

<q-->
### 58 - Which of the following is true about modifying rows in a table?
<a-->All of the rest.
<a-->You can update some rows in a table based on values from another table.
<a-->If you try to update a record related to an integrity constraint, it raises an error.
<a-->You can modify multiple columns.

<q-->
### 59 - Which of the following is true about removing rows from a table?
<a-->You remove existing rows from a table using the DELETE statement
<a-->No rows are deleted if you omit the WHERE clause.
<a-->You cannot delete rows based on values from another table.
<a-->All of the rest.

<q-->
### 60 - Which of the following is not true about removing rows from a table?
<a-->A statement like, DELETE , would cause deletion of the table from the database.
<a-->You can use a subquery in a DELETE statement.
<a-->Specific rows are deleted based on the WHERE clause condition.
<a-->All of the rest.

<q-->
### 61 - Which statement allows conditional update, or insertion of data into a table simultaneously?
<a-->MERGE statement
<a-->INSERT statement
<a-->UPDATE statement
<a-->None of the rest

<q-->
### 62 - A transaction starts when
<a-->All of the rest
<a-->A COMMIT statement is issued
<a-->A ROLLBACK statement is issued
<a-->A CREATE statement is used

<q-->
### 63 - Which of the following is true about the SQL transaction control statements?
<a-->All are true.
<a-->They ensure data consistency.
<a-->They allow preview of data changes before making permanent changes in data.
<a-->They group logically related operations.

<q-->
### 64 - Which of the following is NOT true about the SQL transaction control statements?
<a-->Each DML statement is automatically committed.
<a-->The COMMIT statement ends the current transaction and makes all data changes permanent.
<a-->The ROLLBACK statement ends the transaction and discards all the pending data changes.
<a-->All are true.

<q-->
### 65 - Which of the following is not true about the database objects?
<a-->Views give alternative names to objects.
<a-->Indexes improve performance of queries.
<a-->Sequences are numeric value generators.
<a-->Tables are the basic unit of storage.

<q-->
### 66 - Which of the following is true about the CREATE TABLE statement?
<a-->This statement also record information in the data dictionary.
<a-->This is a DML statement.
<a-->You don’t need any privilege to use this statement.
<a-->All of the rest.

<q-->
### 67 - Which of the following is not true about the ALTER TABLE statement?
<a-->It can add a new row.
<a-->It can add a new column.
<a-->It can modify existing columns.
<a-->It can define a default value for the new column.

<q-->
### 68 - Consider the following schema −

LOCATIONS(subject_code, department_name, location_id, city);
Which code snippet will alter the table LOCATIONS and add a column named Address, with datatype VARCHAR2(100)?
<a-->ALTER TABLE locations ADD (address varchar2(100));
<a-->ALTER TABLE locations ADD COLUMN(address varchar2(100));
<a-->MODIFY TABLE locations ADD COLUMN (address varchar2(100));
<a-->None of the rest.
<q-->
### 69 - Consider the following schema −

LOCATIONS(subject_code, department_name, location_id, city);
Which code snippet will alter the table LOCATIONS and change the datatype of the column CITY to varchar2(30)?
<a-->ALTER TABLE locations MODIFY (city varchar2(30));
<a-->ALTER TABLE locations MODIFY COLUMN (city varchar2(30));
<a-->MODIFY TABLE locations ADD (city varchar2(30));
<a-->None of the rest.
<q-->
### 70 - Consider the following schema −

LOCATIONS(subject_code, department_name, location_id, city);
Which code snippet will alter the table LOCATIONS and delete the column named CITY?
<a-->ALTER TABLE locations DROP COLUMN city;
<a-->MODIFY TABLE locations DROP (city varchar2(30));
<a-->ALTER TABLE locations DROP (city);
<a-->None of the rest.

<q-->
### 71 - Which of the following code will successfully delete the table LOCATIONS from the database?
<a-->DROP TABLE locations;
<a-->DELETE TABLE locations;
<a-->TRUNCATE TABLE locations;
<a-->None of the rest.

<q-->
### 72 - Which of the following is true about deleting a table from the database?
<a-->All of the rest.
<a-->All the data in the table are deleted
<a-->The table structure is removed
<a-->The indexes in the table are deleted

<q-->
### 73 - Which of the following code will remove all the rows from the table LOCATIONS?
<a-->TRUNCATE TABLE locations;
<a-->DROP TABLE locations;
<a-->DELETE TABLE locations;
<a-->None of the rest.

<q-->
### 74 - Which of the following is not true about constraints?
<a-->A PRIMARY KEY is same as UNIQUE.
<a-->A NOT NULL constraint specifies that the column cannot have a null value.
<a-->A UNIQUE constraint specifies that a column or a combination of column must have unique values for all rows.
<a-->A FOREIGN KEY enforces a foreign key relationship between a column and a referenced table.

<q-->
### 75 - Which of the following is not true about creating constraints?
<a-->Constraints are defined using the CREATE CONSTRAINT statement.
<a-->They are created at the same time when the table is created.
<a-->They could be created after the table is created.
<a-->All the constraints are stored in data dictionary.

<q-->
### 76 - Which of the following is not true about a FOREIGN KEY constraint?
<a-->A foreign key value cannot be null.
<a-->It is a referential integrity constraint.
<a-->It establishes a relationship between a primary key or a unique key in the same table or a different table.
<a-->A foreign key value must match an existing value in the parent table.

<q-->
### 77 - Which of the following is not true about use of a database view?
<a-->It prevents different views of same data.
<a-->It restricts data access.
<a-->It makes queries easy.
<a-->It provides data independence.

<q-->
### 78 - Which of the following is not true about simple views?
<a-->You cannot perform DML operations through a simple view.
<a-->They derive data from one table.
<a-->They contain no functions or grouping.
<a-->All of the rest are true.

<q-->
### 79 - Which of the following is not true about complex views?
<a-->They contain no functions or grouping.
<a-->They derive data from more than one table.
<a-->You cannot perform DML operations through a complex view.
<a-->All of the rest are true.

<q-->
### 80 - Consider the following schema −
```
STUDENTS(student_code, first_name, last_name, email, 
         phone_no, date_of_birth, honours_subject, percentage_of_marks);
```
Which of the following code will create a simple view named all_marks_english that contains the names and percentage of marks of the students in the honours_subject ‘Eng01’?
<a-->create view all_marks_english as select first_name, last_name, percentage_of_marks from students where honours_subject = ‘Eng01’;
<a-->create view all_marks_english as ( first_name, last_name, percentage_of_marks from students where honours_subject = ‘Eng01’);
<a-->select view all_marks_english as select first_name, last_name, percentage_of_marks from students where honours_subject = ‘Eng01’;
<a-->None of the rest.

<q-->
### 81 - Which of the following code will retrieve data from the view all_marks_english, created in the previous question?
<a-->select * from all_marks_english;
<a-->select view all_marks_english;
<a-->select from all_marks_english;
<a-->retrieve from all_marks_english;

<q-->
### 82 - Which of the following code will delete a view named all_marks_english?
<a-->drop view all_marks_english;
<a-->delete view all_marks_english;
<a-->delete all_marks_english;
<a-->drop all_marks_english;

<q-->
### 83 - Which of the following is not true about a sequence?
<a-->You cannot modify a sequence.
<a-->They are used for generating sequential numbers.
<a-->Sequences are created by the CREATE SEQUENCE statement.
<a-->None of the rest.

<q-->
### 84 - Which of the following minimal code would create a sequence named loc_seq as a primary key of the LOCATIONS table?
<a-->create sequence loc_seq;
<a-->create sequence loc_seq on locations;
<a-->create loc_seq;
<a-->None of the rest.

<q-->
### 85 - Which of the following statement is used to modify a sequence?
<a-->ALTER SEQUENCE
<a-->SELECT SEQUENCE
<a-->DROP SEQUENCE
<a-->None of the rest.

<q-->
### 86 - Which of the following is not true about the Pseudocolumns that return the sequence values?
<a-->PREVVAL gets the previous sequence value.
<a-->NEXTVAL returns the next available sequence value.
<a-->CURRVAL gets the current sequence value.
<a-->None of the rest.

<q-->
### 87 - Which of the following code will delete a sequence named loc_seq?
<a-->drop sequence loc_seq;
<a-->delete sequence loc-seq;
<a-->delete primary key loc_sec;
<a-->drop primary key loc_sec;

<q-->
### 88 - Which of the following is true about database indexes?
<a-->You can create an index on one or more columns.
<a-->Indexes always slow down the speed of query process.
<a-->Indexes are always created automatically.
<a-->Indexes should ideally be created on small tables.

<q-->
### 89 - Which of the following code will create an index named stu_marks_ind on the columns student_code and percentage_of_marks of the STUDENTS table?
<a-->create index stu_marks_ind on students(student_code, percentage_of_marks);
<a-->It’s not possible to create an index on two columns.
<a-->create index stu_marks_ind from students(student_code, percentage_of_marks);
<a-->create index stu_marks_ind (student_code, percentage_of_marks) on students;

<q-->
### 90 - Given an index named stu_marks_ind on the columns student_code and percentage_of_marks of the STUDENTS table

Which of the following code will delete an index stu_marks_ind on the columns student_code and percentage_of_marks of the STUDENTS table?
<a-->drop index stu_marks_ind;
<a-->delete index stu_marks_ind;
<a-->drop stu_marks_ind;
<a-->drop index stu_marks_ind on students;

<q-->
### 91 - Which of the following is not true about database synonyms?
<a-->None of the rest.
<a-->Synonyms are used for shortening lengthy object names.
<a-->A synonym is just an alternative name.
<a-->Synonyms can be created for tables, views, sequences, procedures and other database objects.

<q-->
### 92 - A database administrator can
<a-->All of the rest.
<a-->Create users.
<a-->Create privileges.
<a-->Grant privileges.

<q-->
### 93 - Which of the following is a system privilege?
<a-->All of the rest.
<a-->Creating new users
<a-->Removing users
<a-->Removing tables

<q-->
### 94 - Which of the following is not a developer’s privilege?
<a-->CREATE USER
<a-->CREATE TABLE
<a-->CREATE VIEW
<a-->CREATE SEQUENCE

<q-->
### 95 - Which statement is used for allocating system privileges to the users?
<a-->GRANT
<a-->CREATE
<a-->REVOKE
<a-->ROLE

<q-->
### 96 - Which of the following is true about a role?
<a-->All of the rest.
<a-->A role is a named group of related privileges.
<a-->It can be it can be created and assigned to a user.
<a-->It can be revoked from a user.

<q-->
### 97 - Which of the following code would create a role named student_admin?
<a-->CREATE ROLE student_admin;
<a-->CREATE student_admin;
<a-->GRANT student_admin;
<a-->ROLE student_admin;

<q-->
### 98 - Which of the following code would allocate the privileges of creating tables and view to the role named student_admin?
<a-->grant create table, create view to student_admin;
<a-->grant to student_admin create table, create view;
<a-->grant role student_admin create table, create view;
<a-->None of the rest.

<q-->
### 99 - Which of the following code would grant the role student_admin to a user named william?
<a-->grant student_admin to william;
<a-->grant to william student_admin;
<a-->grant william student_admin;
<a-->None of the rest.

<q-->
### 100 - Which of the following statements allows William to change his database user account password to bill?
<a-->alter user william identified by bill
<a-->create user william identified by bill;
<a-->create user william password bill;
<a-->alter user william password bill;
