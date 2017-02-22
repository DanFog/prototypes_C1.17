Place your queries below

SELECT * FROM `students` WHERE `username`='teachmehowtobowler'
UPDATE `students` SET `email`='fogertydaniel@gmail.com' WHERE `username`='Daniel Fogerty'
INSERT INTO `students` SET `username`='Daniel Paschal', `email`='paschalisthebestlanguage@gmail.com', `password`=sha1('JaiLovesPaedon')
DELETE FROM `students` WHERE `username`='andyongthegong'

SELECT * FROM `todo_items` WHERE `user_id`='7'
INSERT INTO `todo_items` SET `title`='test 11', `details`='current test 11', `timestamp`='1234567', `user_id`='7'
DELETE FROM `todo_items` WHERE `user_id`='7' LIMIT 1
UPDATE `todo_items` SET `details`='test 12' WHERE `user_id`='7' LIMIT 1
SELECT * FROM `todo_items` WHERE `user_id`='7'
