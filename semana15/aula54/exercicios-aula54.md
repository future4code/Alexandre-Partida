  EXERCÍCIO 1
  
  A)
  A Chave Estrangeira se refere a um método capaz de relacionar elementos de tabelas diferentes no banco de dados de forma a preservar a integridade dos deles.
  
  B)
  CREATE TABLE Movies (
		id VARCHAR(255) PRIMARY KEY,
		movie VARCHAR(255),
        director VARCHAR(255)
);


SELECT * FROM Movies;

INSERT INTO Movies (id, movie, director)
VALUES ("01", "Gangsters em Nova York", "Martin Scorcese"),
	("02", "Os Bons Companheiros", "Martin Scorcese"),
    ("03", "Se Beber Nao Case", "Harold Back"),
    ("04", "A Ultima Noite", "Dolphin Case"),
    ("05", "Central do Brasil", "Alexandre Victor"),
    ("06", "O Selvagem da Motocicleta", "Dennis Braum");
    
    
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
		comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
		movie_id VARCHAR(255),
		FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
    
    
SELECT * FROM Rating;

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("2", "O filme e bacana mas nao gostei", 6.5, "01"),
("3", "Adorei o filme", 10, "03"),
("4", "Meio chato e nao recomendo", 4.5, "04"),
("5", "Muito bom!", 10, "05"),
("6", "Cenas muito fora da realidade", 7, "06");

C) Apresentou error Code: 1452 informando que uma condição (que é a chave estrangeira), não foi seguida.
"Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_alexandre_partida`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
"

D) ALTER TABLE Rating DROP COLUMN rate;

E) Apresenta o erro Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_alexandre_partida`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Isso porque tem uma chave estrangeira ligando o filme a um id de comentário. 

EXERCÍCIO 02

A) Ela faz referencias as duas tabelas(atores e filmes). Se eu buscar pelo id um determinado ator, ela podera entregar tambem quais filmes ele participou ou quais atores atuaram naquele filme.

B) 
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"04",
		"001"
),

(
		"01",
		"005"
),

(
		"02",
		"003"
),

(
		"03",
		"004"
),

(
		"05",
		"002"
),

(
		"06",
		"006"
);

C) INSERT INTO MovieCast(movie_id, actor_id)
    VALUES ("07", "006")

Não permite, apresenta a mensagem:
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_alexandre_partida`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Acontece pois tentamos associar um id de filme inexistente a um ator.

D) SELECT * FROM Actor;

DELETE FROM Actor
WHERE name = "Juliana Paes";

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_alexandre_partida`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Apresenta a mensagem de que não pode ser deletado pois tem uma chave estrangeira ligado a atriz.

EXERCÍCIO 03
A) 

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

Basicamente ela pede que mostre os filmes da tabela Movies com seu respectivo comentário na tabela Rating através da associação que fizemos anteriormente dos comentários com seus respectivos IDs.

B) SELECT Movies.movie, Rating.rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.id; 


