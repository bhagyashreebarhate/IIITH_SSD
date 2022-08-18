select  DEPARTMENT.Dnumber as 'Dept. Id' ,Dname as 'Dept. Name',Count(*) as 'Number of locations' from DEPARTMENT, DEPT_LOCATIONS where DEPARTMENT.Dnumber=DEPT_LOCATIONS.Dnumber and  DEPARTMENT.Mgr_ssn in (select Essn from DEPENDENT where Sex="F" GROUP BY Essn HAVING COUNT(Essn)>1) GROUP BY Dname, DEPARTMENT.Dnumber;

