use mello_alexandre_partida;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

### Exercício 1
a) 

VARCHAR(255), indica strings com no maximo 255 caracteres;
PRIMARY KEY, indica a chave primaria da tabela;
NOT NULL, indica que nao pode ser um valor nulo;
DATE, representa uma data;

b) SHOW DATABASES - mostra o nome do banco de dados mello_alexandre_partida;
SHOW TABLES - mostra as tabelas do meu banco de dados;

c) SHOW Actor - apresenta erro de sintaxe;



SHOW DATABASES;
SHOW TABLES;
SHOW ACTOR;


INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES ("001", "Tony Ramos", 400000, "1948-08-25", "male" );

## EXERCICIO 2 

a);

INSERT INTO Actor (id, name, salary, birth_date, gender)

VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");



INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "George Clooney", 1220000, "1964-09-23", "male");

b) exibe erro 1062 informando que a entrada 002 esta duplicada.


INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); 

c) diz que existe um erro de syntaxe. Imagino que seja porque temis mais valores do que aqueles passados como parametros;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); 

d)apresenta erro 1364 informando que e esperado um campo name. Ao acrescentar o problema foi resolvido; 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Joao Victor Santos",
  400000,
  "1949-04-18", 
  "male"
); 

e) apresenta codigo de erro 1292 informando o formato da data precisa estar entre aspas;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
  "006", 
  "Shirley Temple",
  895059.00,
  "1942-03-26", 
  "female"
  ),

 (
  "007", 
  "Fabio Jr",
  765059.00,
  "1934-03-26", 
  "male"
);

SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";

a);

SELECT id, name, salary, birth_date from Actor WHERE gender = "female";b)

b);

SELECT salary from Actor WHERE name = "Tony Ramos";

c) nao retornou nada, imagino que isso tenha acontecido porque nao existam valores com essa definicao na tabela; 

SELECT gender from Actor WHERE gender = "invalid";


SELECT id, name, salary from Actor WHERE salary <= 500000;

d) informa que nao existe o campo nome (o correto e name);

SELECT id, nome from Actor WHERE id = "002"; 

SELECT id, name from Actor WHERE id = "002";




