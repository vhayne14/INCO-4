DROP TABLE IF EXISTS users;


CREATE TABLE users(
   id SERIAL PRIMARY KEY,
   firstname VARCHAR(255) NOT NULL,
   lastname VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   password VARCHAR(124) NOT NULL,
   created_at TIMESTAMPTZ DEFAULT now()

);

DROP TABLE IF EXISTS schedules;

CREATE TABLE schedules(
   id SERIAL PRIMARY KEY,
   user_id INT NOT NULL,
   day INT NOT NULL,
   start_time TIMESTAMPTZ,
   end_time TIMESTAMPTZ,
   created_at TIMESTAMPTZ DEFAULT now(),
   CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
      ON DELETE CASCADE
);