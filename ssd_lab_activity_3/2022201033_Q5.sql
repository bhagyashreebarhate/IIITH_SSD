select Mgr_ssn as 'ManagerSSN',Dnumber as 'Dept.Id', Count(*) as  'Number of Dependents'  from DEPARTMENT, DEPENDENT where DEPARTMENT.Mgr_ssn=DEPENDENT.Essn and  Dnumber in (select Dnumber from DEPT_LOCATIONS  GROUP BY Dnumber HAVING COUNT(Dnumber)>1) GROUP BY Mgr_ssn, Dnumber;

