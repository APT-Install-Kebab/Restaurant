USE `restaurant_kebab`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `order_product`;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `product`;
DROP TABLE IF EXISTS `status`;
DROP TABLE IF EXISTS `type`;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `product` (
  `uid` varchar(32) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `id_type` int(11) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `fk_product_type` (`id_type`),
  CONSTRAINT `fk_product_type` FOREIGN KEY (`id_type`) REFERENCES `type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `order` (
  `uid` varchar(32) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `mail_user` varchar(320) NOT NULL,
  `id_status` int(11) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `fk_order_status` (`id_status`),
  CONSTRAINT `fk_order_status` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `order_product` (
  `uid_order` varchar(32) NOT NULL,
  `uid_product` varchar(32) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`uid_order`, `uid_product`),
  KEY `fk_order_product_product` (`uid_product`),
  CONSTRAINT `fk_order_product_order` FOREIGN KEY (`uid_order`) REFERENCES `order` (`uid`),
  CONSTRAINT `fk_order_product_product` FOREIGN KEY (`uid_product`) REFERENCES `product` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Kebab'),
(2, 'Sandwich'),
(3, 'Assiette'),
(4, 'Boisson'),
(5, 'Dessert');

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'En attente'),
(2, 'En préparation'),
(3, 'Prête'),
(4, 'Livrée'),
(5, 'Annulée');

INSERT INTO `product` (`uid`, `name`, `price`, `id_type`) VALUES
('prod_ass_01', 'Assiette kebab', 10.00, 3),
('prod_ass_02', 'Assiette mixte', 11.50, 3),
('prod_boisson_01', 'Coca-Cola', 2.00, 4),
('prod_boisson_02', 'Fanta', 2.00, 4),
('prod_boisson_03', 'Eau', 1.50, 4),
('prod_des_01', 'Baklava', 3.00, 5),
('prod_des_02', 'Tiramisu', 3.50, 5),
('prod_kebab_01', 'Kebab classique', 6.50, 1),
('prod_kebab_02', 'Kebab fromage', 7.00, 1),
('prod_kebab_03', 'Kebab XL', 8.50, 1),
('prod_sand_01', 'Sandwich américain', 7.50, 2),
('prod_sand_02', 'Sandwich falafel', 6.00, 2);

INSERT INTO `order` (`uid`, `created_at`, `mail_user`, `id_status`) VALUES
('order_001', '2026-01-21 19:32:59', 'client1@email.com', 1),
('order_002', '2026-01-21 19:32:59', 'client2@email.com', 2),
('order_003', '2026-01-21 19:32:59', 'client3@email.com', 4);

INSERT INTO `order_product` (`uid_order`, `uid_product`, `quantity`) VALUES
('order_001', 'prod_boisson_01', 2),
('order_001', 'prod_kebab_01', 2),
('order_002', 'prod_ass_01', 1),
('order_002', 'prod_boisson_03', 1),
('order_002', 'prod_des_01', 2),
('order_003', 'prod_boisson_02', 1),
('order_003', 'prod_kebab_03', 1);
