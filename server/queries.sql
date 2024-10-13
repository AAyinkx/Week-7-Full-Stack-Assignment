CREATE TABLE IF NOT EXISTS books(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  title TEXT,
  author TEXT,
  rating INTEGER,
  review TEXT,
  src TEXT,
  date DATE
);


CREATE TABLE IF NOT EXISTS genres (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS book_genres (
  book_id INTEGER REFERENCES books(id),
  genre_id INTEGER REFERENCES genres(id),
  PRIMARY KEY (book_id, genre_id)
);


INSERT INTO books (username, title, author, rating, review, src, date) VALUES
('bookworm23', 'The Great Gatsby', 'F. Scott Fitzgerald', 5, 'A timeless classic with beautiful prose and complex characters.', 'https://cdn.waterstones.com/bookjackets/large/9781/8532/9781853260414.jpg', '2024-01-15'),
('novelnerd88', '1984', 'George Orwell', 5, 'Chillingly relevant and a must-read for everyone who cares about freedom.', 'https://cdn.waterstones.com/bookjackets/large/9780/1410/9780141036144.jpg', '2024-02-05'),
('literaturelover', 'Pride and Prejudice', 'Jane Austen', 4, 'A brilliant social critique wrapped in a charming romantic plot.', 'https://cdn.waterstones.com/bookjackets/large/9780/1414/9780141439518.jpg', '2024-02-20'),
('avidreader01', 'To Kill a Mockingbird', 'Harper Lee', 5, 'An unforgettable story with deep moral lessons about justice and empathy.', 'https://cdn.waterstones.com/bookjackets/large/9780/0995/9780099549482.jpg', '2024-03-01'),
('fictionfanatic', 'The Catcher in the Rye', 'J.D. Salinger', 3, 'An interesting take on teenage angst, though not for everyone.', 'https://cdn.waterstones.com/override/v1/large/9780/2419/9780241950432.jpg', '2024-03-10'),
('classicliterati', 'Moby-Dick', 'Herman Melville', 4, 'A lengthy but rewarding read, filled with symbolism and philosophical depth.', 'https://cdn.waterstones.com/bookjackets/large/9780/1424/9780142437247.jpg', '2024-03-25'),
('readsalot92', 'Brave New World', 'Aldous Huxley', 5, 'A fascinating and unsettling vision of the future, brilliantly written.', 'https://cdn.waterstones.com/bookjackets/large/9780/0995/9780099518471.jpg', '2024-04-02'),
('storyteller56', 'Crime and Punishment', 'Fyodor Dostoevsky', 5, 'A profound exploration of morality, guilt, and redemption.', 'https://cdn.waterstones.com/bookjackets/large/9780/1404/9780140449136.jpg', '2024-04-20'),
('bookjunkie', 'The Hobbit', 'J.R.R. Tolkien', 5, 'An enchanting adventure that sets the stage for the world of Middle-earth.', 'https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103344.jpg', '2024-05-01'),
('historicalbuff', 'War and Peace', 'Leo Tolstoy', 5, 'A monumental work of fiction that explores the human condition and history.', 'https://cdn.waterstones.com/bookjackets/large/9780/1404/9780140447934.jpg', '2024-05-15');