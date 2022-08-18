select Essn as 'Manager ssn', count(*) as ' Number of projects' from WORKS_ON Where Essn in (Select Mgr_Ssn from DEPARTMENT where Dnumber in (Select Dnum from PROJECT where Pname="ProductY" ));

