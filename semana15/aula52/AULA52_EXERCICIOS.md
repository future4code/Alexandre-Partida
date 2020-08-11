EXERCÍCIO 1

A) ALTER TABLE Actor DROP COLUMN salary;
Remove a coluna salary.

B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Não encontrei a função CHANGE como opção.

C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Não encontrei a função CHANGE como opção.

D) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

EXERCÍCIO 2
A)
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = 003

UPDATE Actor
SET birth_date = "1984-05-06"
WHERE id = 003

B)
UPDATE Actor
SET name = "Juliana Pães"
WHERE id = 003;

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "Juliana Pães"

C)
UPDATE Actor
SET 
	name = "Joao Prado",
	birth_date = "1987-02-10",
    salary = 700000,
    gender = "male"
WHERE id = "005";

D)
UPDATE Actor
SET
    second_name = "Dalevo"
WHERE id = "010"

Retorna o erro 1054 informando que a coluna que tentei alterar não existe.

EXERCÍCIO 3

A) DELETE FROM Actor WHERE name = "Fabio Jr"
B) DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 700000
	
EXERCÍCIO 4
A)
SELECT MAX(salary) FROM Actor
B)
SELECT MIN(salary) FROM Actor
C)
SELECT COUNT(*) FROM Actor WHERE gender = "female"
D)
SELECT SUM(salary) FROM Actor;

EXERCÍCIO 5
A) retornou a quantidade de atrizes e atores por grupo masculino e feminino.

B) 
SELECT id, name FROM Actor
ORDER BY id DESC;

C)
SELECT name, salary FROM Actor
ORDER BY salary;

D)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

E)
SELECT AVG(salary) from Actor
GROUP BY gender;

