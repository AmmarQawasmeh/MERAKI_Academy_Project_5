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

INSERT INTO lessons (title, video, image, duration, course)
VALUES
('Introduction to Data Structures & Algorithms',
 'https://videos.elearn.com/dsa/intro.mp4',
 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
 '12 min',
 15),

('Arrays & Strings Basics',
 'https://videos.elearn.com/dsa/arrays-strings.mp4',
 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
 '15 min',
 15),

('Linked Lists',
 'https://videos.elearn.com/dsa/linked-lists.mp4',
 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
 '18 min',
 15),

('Stacks & Queues',
 'https://videos.elearn.com/dsa/stacks-queues.mp4',
 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
 '20 min',
 15),

('Recursion Basics',
 'https://videos.elearn.com/dsa/recursion.mp4',
 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
 '16 min',
 15),

('Searching Algorithms: Linear & Binary Search',
 'https://videos.elearn.com/dsa/searching.mp4',
 'https://images.unsplash.com/photo-1547658719-da2b51169166',
 '22 min',
 15),

('Sorting Algorithms: Bubble, Selection, Insertion',
 'https://videos.elearn.com/dsa/sorting.mp4',
 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
 '24 min',
 15),

('Advanced Sorting: Merge & Quick Sort',
 'https://videos.elearn.com/dsa/advanced-sorting.mp4',
 'https://images.unsplash.com/photo-1518770660439-4636190af475',
 '26 min',
 15),

('Hash Tables',
 'https://videos.elearn.com/dsa/hash-tables.mp4',
 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
 '18 min',
 15),

('Final Project: Implement a Mini DSA Library',
 'https://videos.elearn.com/dsa/final-project.mp4',
 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
 '30 min',
 15);
INSERT INTO lessons (title, video, image, duration, course)
VALUES
('Introduction to Python',
 'https://videos.elearn.com/python/intro.mp4',
 'https://images.unsplash.com/photo-1518770660439-4636190af475',
 '10 min',
 14),

('Installing Python & Setting Up Environment',
 'https://videos.elearn.com/python/setup.mp4',
 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
 '12 min',
 14),

('Python Variables & Data Types',
 'https://videos.elearn.com/python/variables.mp4',
 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
 '15 min',
 14),

('Python Operators & Expressions',
 'https://videos.elearn.com/python/operators.mp4',
 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
 '14 min',
 14),

('Control Flow: if, else, elif',
 'https://videos.elearn.com/python/control-flow.mp4',
 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
 '16 min',
 14),

('Loops in Python: for & while',
 'https://videos.elearn.com/python/loops.mp4',
 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
 '18 min',
 14),

('Functions in Python',
 'https://videos.elearn.com/python/functions.mp4',
 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
 '20 min',
 14),

('Lists, Tuples & Dictionaries',
 'https://videos.elearn.com/python/data-structures.mp4',
 'https://images.unsplash.com/photo-1547658719-da2b51169166',
 '22 min',
 14),

('Modules & Packages',
 'https://videos.elearn.com/python/modules.mp4',
 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
 '18 min',
 14),

('Final Mini Project in Python',
 'https://videos.elearn.com/python/final-project.mp4',
 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
 '25 min',
 14);
INSERT INTO lessons (title, video, image, duration, course)
VALUES
('Introduction to Node.js',
 'https://videos.elearn.com/nodejs/intro.mp4',
 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
 '12 min',
 13),

('Setting Up Node.js & Project',
 'https://videos.elearn.com/nodejs/setup.mp4',
 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
 '15 min',
 13),

('Node.js Modules & npm',
 'https://videos.elearn.com/nodejs/modules.mp4',
 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
 '18 min',
 13),

('Working with Express.js',
 'https://videos.elearn.com/nodejs/express.mp4',
 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
 '20 min',
 13),

('Routing in Express',
 'https://videos.elearn.com/nodejs/routing.mp4',
 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
 '17 min',
 13),

('Middleware in Express',
 'https://videos.elearn.com/nodejs/middleware.mp4',
 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
 '19 min',
 13),

('REST API Basics',
 'https://videos.elearn.com/nodejs/restapi.mp4',
 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
 '22 min',
 13),

('Error Handling & Logging',
 'https://videos.elearn.com/nodejs/error-handling.mp4',
 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
 '18 min',
 13),

('Connecting Node.js to Database',
 'https://videos.elearn.com/nodejs/database.mp4',
 'https://images.unsplash.com/photo-1518770660439-4636190af475',
 '25 min',
 13),

('Final Project: Building a REST API',
 'https://videos.elearn.com/nodejs/final-project.mp4',
 'https://images.unsplash.com/photo-1547658719-da2b51169166',
 '30 min',
 13);
INSERT INTO lessons (title, video, image, duration, course)
VALUES
('Introduction to React & JSX',
 'https://videos.elearn.com/react/intro.mp4',
 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
 '10 min',
 12),

('Create React App & Project Structure',
 'https://videos.elearn.com/react/setup.mp4',
 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
 '15 min',
 12),

('Components & Props',
 'https://videos.elearn.com/react/components-props.mp4',
 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
 '18 min',
 12),

('State & useState Hook',
 'https://videos.elearn.com/react/state.mp4',
 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
 '20 min',
 12),

('Handling Events in React',
 'https://videos.elearn.com/react/events.mp4',
 'https://images.unsplash.com/photo-1547658719-da2b51169166',
 '14 min',
 12),

('Conditional Rendering',
 'https://videos.elearn.com/react/conditional.mp4',
 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
 '16 min',
 12),

('Lists, Keys & Rendering Data',
 'https://videos.elearn.com/react/lists-keys.mp4',
 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
 '117 min',
 12),

('useEffect & Lifecycle',
 'https://videos.elearn.com/react/useeffect.mp4',
 'https://images.unsplash.com/photo-1518770660439-4636190af475',
 '22 min',
 12),

('Forms & Controlled Components',
 'https://videos.elearn.com/react/forms.mp4',
 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
 '19 min',
 12),

('Final Project & Best Practices',
 'https://videos.elearn.com/react/final-project.mp4',
 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
 '25 min',
 12);
INSERT INTO courses 
(title, description, image, instructorId, startCourse, endCourse)
VALUES

(
  'React.js From Zero to Hero',
  'Master React fundamentals, hooks, state management, and build real-world projects.',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  19,
  '2026-02-10 09:00:00',
  '2026-04-10 17:00:00'
),
(
  'Node.js & Express Backend',
  'Build scalable backend APIs using Node.js, Express, JWT authentication, and MongoDB/PostgreSQL.',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  19,
  '2026-03-01 11:00:00',
  '2026-05-15 16:00:00'
),
(
  'Python for Beginners',
  'Introduction to Python programming, variables, loops, functions, and basic projects.',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  19,
  '2026-01-20 10:00:00',
  '2026-03-20 14:00:00'
),
(
  'Data Structures & Algorithms',
  'Learn essential data structures and algorithms for coding interviews using JavaScript.',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  19,
  '2026-02-15 12:00:00',
  '2026-06-01 18:00:00'
);
