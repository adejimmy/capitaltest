/*
Navicat MySQL Data Transfer

Source Server         : databases
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : ecome

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-12-03 22:27:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Product_Description` varchar(255) NOT NULL,
  `Category_code` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('2', 'PH1', 'HP Laptop', 'HP Pavalion G6', 'H001', '15000', 'active');
INSERT INTO `products` VALUES ('3', 'DELL2', 'Dell', 'Dell Laptop', 'D001', '130000', 'active');
INSERT INTO `products` VALUES ('5', 'APP1', 'Mac', 'Apple Laptop', 'APP001', '263533', 'active');
