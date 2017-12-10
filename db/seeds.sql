INSERT INTO bucketlist (item, accomplished)
VALUES ("Swim with manta ray", false),
("Sky dive", false),
("Ride a bike", false),
("Graduate college", true),
("Go to Paris", false),
("See snow before 30", true),
("Understand MVC", false);

SELECT * FROM bucketlist ORDER BY id;

UPDATE bucketlist SET accomplished=true WHERE id=1;
