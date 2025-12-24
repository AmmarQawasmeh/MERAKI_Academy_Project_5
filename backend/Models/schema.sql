CREATE TABLE role_permission (
    id SERIAL NOT NULL,
    role_id INT,
    permission_id INT,
    FOREIGN KEY (role_id ) REFERENCES roles (id),
    FOREIGN KEY (permission_id) REFERENCES permissions (id),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id SERIAL NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id SERIAL NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  description TEXT,
  image VARCHAR(250),
  instructorId INT REFERENCES users(id) ON DELETE SET NULL,
  startCourse TIMESTAMP,
  endCourse TIMESTAMP
);


CREATE TABLE lessons (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  video VARCHAR(255),
  course INT REFERENCES courses(id) ON DELETE CASCADE
);



CREATE TABLE students_courses (
  id SERIAL PRIMARY KEY,
  student INT REFERENCES users(id) ON DELETE CASCADE,
  course INT REFERENCES courses(id) ON DELETE CASCADE
);
