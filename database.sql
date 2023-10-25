-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2023 at 10:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `allcodes`
--

CREATE TABLE `allcodes` (
  `id` int(11) NOT NULL,
  `KeyMap` varchar(255) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `ValueVi` varchar(255) DEFAULT NULL,
  `ValueEn` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `allcodes`
--

INSERT INTO `allcodes` (`id`, `KeyMap`, `Type`, `ValueVi`, `ValueEn`, `createdAt`, `updatedAt`) VALUES
(1, 'R1', 'ROLE', 'Quản trị viên', 'Admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'R2', 'ROLE', 'Người dùng', 'User', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'R3', 'ROLE', 'Khách', 'Guest', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'OD1', 'ORDER', 'Đang xử lý', 'In Progress', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'OD2', 'ORDER', 'Đang chờ thanh toán', 'Pending Payment', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'OD3', 'ORDER', 'Thành công', 'Completed', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'OD4', 'ORDER', 'Đã hủy', 'Cancelled', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'CUR1', 'CURRENCY', 'Đồng', 'Vnd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'CUR2', 'CURRENCY', 'Đô la mỹ', 'Usd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'PS1', 'PAYMENT_STATUS', 'Đang chờ thanh toán', 'Pending', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'PS2', 'PAYMENT_STATUS', 'Đã thanh toán', 'Paid', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'PS3', 'PAYMENT_STATUS', 'Thanh toán thất bại', 'Failed', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'BR1', 'BRAND', 'Samsung', 'Samsung', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'BR2', 'BRAND', 'IPhone', 'Iphone', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'BR3', 'BRAND', 'Oppo', 'Oppo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'BR4', 'BRAND', 'Vivo', 'Vivo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'BR5', 'BRAND', 'Google', 'Google', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'BR6', 'BRAND', 'Huawei', 'Huawei', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'BR7', 'BRAND', 'Xiaomi', 'Xiaomi', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `cartdetails`
--

CREATE TABLE `cartdetails` (
  `id` int(11) NOT NULL,
  `CartID` varchar(255) DEFAULT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `TotalPrice` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cartdetails`
--

INSERT INTO `cartdetails` (`id`, `CartID`, `ProductID`, `Quantity`, `TotalPrice`, `createdAt`, `updatedAt`) VALUES
(1, '2', 25, 2, 7200000, '2023-10-12 10:26:59', '2023-10-12 10:26:59'),
(2, '2', 14, 1, 6800000, '2023-10-12 10:27:14', '2023-10-12 10:27:14'),
(5, '16', 29, 2, 840000, '2023-10-12 11:00:12', '2023-10-12 11:00:12'),
(6, '16', 15, 2, 2520000, '2023-10-12 11:00:12', '2023-10-12 11:00:12'),
(7, '2', 15, 1, 1260000, '2023-10-12 11:16:40', '2023-10-12 11:16:40'),
(10, '2', 30, 1, 3600000, '2023-10-12 11:54:30', '2023-10-12 11:54:30'),
(14, '17', 25, 2, 7200000, '2023-10-12 20:53:26', '2023-10-12 20:53:26'),
(18, '20', 14, 1, 6800000, '2023-10-13 18:17:03', '2023-10-13 18:17:03'),
(25, '16', 1, 1, 22000000, '2023-10-14 14:42:41', '2023-10-14 14:42:41'),
(37, '18', 5, 1, 5000000, '2023-10-14 17:26:16', '2023-10-14 17:26:16'),
(48, '21', 3, 1, 5040000, '2023-10-16 11:26:26', '2023-10-16 11:26:26'),
(49, '22', 22, 1, 19140000, '2023-10-16 13:26:09', '2023-10-16 13:26:09'),
(50, '22', 15, 1, 1260000, '2023-10-16 13:27:19', '2023-10-16 13:27:19'),
(58, '17', 6, 1, 14800000, '2023-10-23 10:58:33', '2023-10-23 10:58:33'),
(59, '38', 29, 1, 420000, '2023-10-24 10:35:26', '2023-10-24 10:35:26'),
(71, '19', 5, 1, 5000000, '2023-10-25 19:12:35', '2023-10-25 19:12:35'),
(72, '19', 15, 1, 1260000, '2023-10-25 19:12:35', '2023-10-25 19:12:35'),
(73, '19', 3, 1, 5040000, '2023-10-25 19:12:35', '2023-10-25 19:12:35'),
(74, '19', 25, 1, 3600000, '2023-10-25 19:12:35', '2023-10-25 19:12:35'),
(75, '19', 29, 1, 420000, '2023-10-25 19:12:35', '2023-10-25 19:12:35');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `UserID` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT '',
  `Email` varchar(255) DEFAULT '',
  `Phone` varchar(255) DEFAULT '',
  `Address` varchar(255) DEFAULT '',
  `TotalOrders` int(11) DEFAULT 0,
  `TotalSpend` decimal(10,0) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `UserID`, `Name`, `Email`, `Phone`, `Address`, `TotalOrders`, `TotalSpend`, `createdAt`, `updatedAt`) VALUES
(4, '1697108160562', 'Bùi Tấn Hải', 'hai830273@gmail.com', '+84935495900', '163/8 thành thái', 3, 35670000, '2023-10-14 10:28:47', '2023-10-23 17:21:48'),
(5, '1', 'Bùi Tấn Hải', 'hai830273@gmail.com', '654634765', '163/8 thành thái', 3, 66350000, '2023-10-14 10:29:26', '2023-10-25 12:36:42'),
(6, '1697446133527', 'BUIF TAANS', 'fgd@gmail.com', '43634', 'tw44346', 3, 176310000, '2023-10-16 08:50:42', '2023-10-25 11:54:46'),
(7, '1697461733855', 'Customer 4', 'c4@gmail.com', '0935495900', 'sdgsdssssssssssssss', 5, 91550000, '2023-10-16 13:09:06', '2023-10-16 13:27:25'),
(8, '4', 'BUI TAN HAI', 'tanh495900@gmail.com', '+84935495900', '163 Thành Thái, quận 10', 3, 39630000, '2023-10-16 13:37:41', '2023-10-25 19:19:00'),
(9, '1697464304736', 'my full name432', 'me@mydomain.com234', '54745754', 'full street address', 1, 3770000, '2023-10-16 13:52:30', '2023-10-16 13:52:40'),
(10, '1697476599768', 'BUI TAN HAI1', 'hai8302222271@gmail.com', '+84935495900', '163/8 thành thái', 1, 22050000, '2023-10-16 17:17:09', '2023-10-16 17:17:28'),
(11, '1697143840006', 'Nguyễn Văn Nhân', 'sdf@gmail.com', '123456545332', 'zfh dhrt dfgs', 15, 147980345, '2023-10-17 11:24:06', '2023-10-25 18:56:27'),
(18, '1698138347530', 'Beverly Hills1', 'rwerwe', 'rưerwer', 'ưerwerwe', 3, 2250000, '2023-10-24 10:55:48', '2023-10-24 11:01:36');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `isRead` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `icon`, `content`, `isRead`, `createdAt`, `updatedAt`) VALUES
(1, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-22 22:37:57', '2023-10-22 22:37:57'),
(2, 'bx bx-cart', 'B vừa tạo đơn hàng', 0, '2023-10-22 22:37:57', '2023-10-22 22:37:57'),
(3, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-23 17:04:12', '2023-10-23 17:04:12'),
(4, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-23 17:09:02', '2023-10-23 17:09:02'),
(5, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-23 17:16:52', '2023-10-23 17:16:52'),
(6, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-23 17:21:48', '2023-10-23 17:21:48'),
(7, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-23 17:27:56', '2023-10-23 17:27:56'),
(8, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-23 17:31:47', '2023-10-23 17:31:47'),
(9, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-24 10:55:48', '2023-10-24 10:55:48'),
(10, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-24 10:59:57', '2023-10-24 10:59:57'),
(11, 'bx bx-cart', 'A vừa tạo đơn hàng', 0, '2023-10-24 11:01:36', '2023-10-24 11:01:36'),
(12, 'bx bx-cart', 'Đơn hàng có id 63 vừa được tạo', 0, '2023-10-25 19:12:50', '2023-10-25 19:12:50');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL,
  `OrderID` int(11) DEFAULT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `UnitPrice` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`id`, `OrderID`, `ProductID`, `Quantity`, `UnitPrice`, `createdAt`, `updatedAt`) VALUES
(15, 15, 14, 1, 20000000, '2023-10-14 12:24:15', '2023-10-14 12:24:15'),
(16, 16, 14, 1, 20000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(17, 16, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(18, 17, 14, 1, 20000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(19, 17, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(20, 17, 25, 1, 10000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(21, 18, 29, 2, 14000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(22, 18, 15, 2, 7000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(23, 19, 29, 2, 14000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(24, 19, 15, 2, 7000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(25, 19, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(26, 20, 5, 1, 5000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(27, 21, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-10-15 22:56:33'),
(28, 21, 2, 1, 29000000, '2023-09-05 23:07:51', '2023-10-15 20:05:46'),
(29, 21, 3, 1, 18000000, '2023-09-05 23:07:51', '2023-10-15 20:05:59'),
(30, 21, 4, 1, 8000000, '2023-09-05 23:07:51', '2023-10-15 20:06:16'),
(31, 22, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-10-15 22:56:33'),
(32, 22, 2, 1, 29000000, '2023-09-05 23:07:51', '2023-10-15 20:05:46'),
(33, 22, 3, 1, 18000000, '2023-09-05 23:07:51', '2023-10-15 20:05:59'),
(34, 22, 4, 1, 8000000, '2023-09-05 23:07:51', '2023-10-15 20:06:16'),
(35, 23, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-10-15 22:56:33'),
(36, 23, 2, 1, 29000000, '2023-09-05 23:07:51', '2023-10-15 20:05:46'),
(37, 23, 3, 1, 18000000, '2023-09-05 23:07:51', '2023-10-15 20:05:59'),
(38, 23, 4, 1, 8000000, '2023-09-05 23:07:51', '2023-10-15 20:06:16'),
(39, 24, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-10-15 22:56:33'),
(40, 24, 2, 1, 29000000, '2023-09-05 23:07:51', '2023-10-15 20:05:46'),
(41, 24, 3, 1, 18000000, '2023-09-05 23:07:51', '2023-10-15 20:05:59'),
(42, 24, 4, 1, 8000000, '2023-09-05 23:07:51', '2023-10-15 20:06:16'),
(43, 25, 1, 1, 25000000, '2023-09-05 23:07:51', '2023-10-15 22:56:33'),
(44, 25, 2, 1, 29000000, '2023-09-05 23:07:51', '2023-10-15 20:05:46'),
(45, 25, 3, 1, 18000000, '2023-09-05 23:07:51', '2023-10-15 20:05:59'),
(46, 25, 4, 1, 8000000, '2023-09-05 23:07:51', '2023-10-15 20:06:16'),
(47, 26, 1, 1, 25000000, '2023-10-16 13:09:51', '2023-10-16 13:09:51'),
(48, 27, 12, 1, 8000000, '2023-10-16 13:14:37', '2023-10-16 13:14:37'),
(49, 28, 2, 1, 29000000, '2023-10-16 13:18:41', '2023-10-16 13:18:41'),
(50, 29, 22, 1, 22000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(51, 30, 22, 1, 22000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(52, 30, 15, 1, 7000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(53, 31, 2, 1, 29000000, '2023-10-16 13:37:49', '2023-10-16 13:37:49'),
(54, 32, 12, 1, 8000000, '2023-10-16 13:39:20', '2023-10-16 13:39:20'),
(55, 33, 7, 1, 12000000, '2023-10-16 13:52:40', '2023-10-16 13:52:40'),
(56, 34, 29, 1, 14000000, '2023-10-16 16:09:23', '2023-10-16 16:09:23'),
(57, 35, 16, 1, 18000000, '2023-10-16 16:12:54', '2023-10-16 16:12:54'),
(58, 36, 1, 1, 25000000, '2023-10-16 17:17:28', '2023-10-16 17:17:28'),
(59, 37, 25, 2, 10000000, '2023-10-17 17:01:10', '2023-10-17 17:01:10'),
(60, 38, 3, 1, 18000000, '2023-10-17 17:05:34', '2023-10-17 17:05:34'),
(61, 39, 42, 1, 345, '2023-10-18 17:06:36', '2023-10-18 17:06:36'),
(62, 40, 25, 2, 10000000, '2023-09-05 23:07:51', '2023-10-18 10:31:02'),
(63, 40, 21, 1, 25000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(64, 40, 22, 1, 22000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(65, 41, 15, 2, 7000000, '2023-10-21 10:51:15', '2023-10-21 10:51:15'),
(66, 42, 15, 2, 7000000, '2023-10-21 10:58:34', '2023-10-21 10:58:34'),
(67, 43, 25, 2, 10000000, '2023-09-05 23:07:51', '2023-10-18 10:31:02'),
(68, 43, 21, 1, 25000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(69, 43, 22, 1, 22000000, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(70, 44, 15, 2, 7000000, '2023-10-21 10:51:15', '2023-10-21 10:51:15'),
(71, 45, 15, 2, 7000000, '2023-10-21 10:51:15', '2023-10-21 10:51:15'),
(72, 46, 15, 2, 7000000, '2023-10-21 10:51:15', '2023-10-21 10:51:15'),
(73, 47, 15, 2, 7000000, '2023-10-21 10:51:15', '2023-10-21 10:51:15'),
(74, 48, 15, 2, 7000000, '2023-10-21 10:51:15', '2023-10-21 10:51:15'),
(75, 49, 15, 2, 7000000, '2023-10-21 10:51:15', '2023-10-21 10:51:15'),
(76, 50, 8, 1, 22000000, '2023-10-22 10:22:01', '2023-10-22 10:22:01'),
(77, 51, 20, 1, 15000000, '2023-10-22 22:10:38', '2023-10-22 22:10:38'),
(78, 52, 12, 1, 8000000, '2023-10-22 22:16:47', '2023-10-22 22:16:47'),
(79, 53, 14, 1, 20000000, '2023-10-22 22:37:57', '2023-10-22 22:37:57'),
(86, 60, 29, 1, 14000000, '2023-09-05 23:07:51', '2023-10-23 17:04:12'),
(87, 61, 29, 1, 14000000, '2023-10-24 10:59:57', '2023-10-24 10:59:57'),
(88, 62, 15, 1, 7000000, '2023-10-24 11:01:36', '2023-10-24 11:01:36'),
(89, 63, 5, 1, 5000000, '2023-09-05 23:07:51', '2023-10-15 20:39:14'),
(90, 63, 15, 1, 7000000, '2023-09-05 23:07:51', '2023-10-25 11:40:10'),
(91, 63, 3, 1, 18000000, '2023-09-05 23:07:51', '2023-10-17 17:05:34'),
(92, 63, 25, 1, 10000000, '2023-09-05 23:07:51', '2023-10-25 18:56:27'),
(93, 63, 29, 1, 14000000, '2023-09-05 23:07:51', '2023-10-25 19:11:57');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `PaymentMethod` varchar(255) NOT NULL,
  `TotalAmount` decimal(10,0) DEFAULT NULL,
  `Note` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `CustomerID`, `Date`, `Status`, `PaymentMethod`, `TotalAmount`, `Note`, `createdAt`, `updatedAt`) VALUES
(15, 5, '2023-08-09', 'Đã Hủy', 'COD', 6850000, '354734', '2023-10-14 12:24:15', '2023-10-25 12:36:42'),
(16, 5, '2023-08-13', 'Đang Xử Lý', 'Bank Transfer', 28850000, '', '2023-10-14 12:26:35', '2023-10-25 12:34:49'),
(17, 5, '2023-10-13', 'Đang Xử Lý', 'E-wallet', 32450000, 'hfgjfu756aettutr', '2023-10-14 12:30:05', '2023-10-25 12:34:52'),
(18, 4, '2023-09-13', 'Hoàn Thành', 'Bank Transfer', 3410000, 'hrlo', '2023-10-14 12:41:31', '2023-10-25 12:34:55'),
(19, 4, '2023-06-13', 'Đang Xử Lý', 'Bank Transfer', 25410000, 'dsgggggggggggggggggggg', '2023-10-14 14:43:12', '2023-10-25 12:34:59'),
(20, 5, '2023-06-14', 'Đang Xử Lý', 'Bank Transfer', 5050000, 'dfgggggggggggggg', '2023-10-14 17:26:58', '2023-10-14 17:26:58'),
(21, 6, '2023-01-15', 'Đang Xử Lý', 'COD', 58770000, '34634643', '2023-10-16 09:06:12', '2023-10-25 12:35:03'),
(22, 6, '2023-07-11', 'Đang Chờ Thanh Toán', 'Bank Transfer', 58770000, 'êryeryeryer', '2023-10-16 09:10:54', '2023-10-16 11:41:17'),
(23, 6, '2023-06-15', 'Hoàn Thành', 'Bank Transfer', 58770000, 'êryeryeryer', '2023-10-16 09:11:04', '2023-10-16 11:30:53'),
(24, 6, '2023-10-09', 'Hoàn Thành', 'Bank Transfer', 58770000, 'êryeryeryer', '2023-10-16 09:11:43', '2023-10-16 11:30:50'),
(25, 6, '2023-03-15', 'Đã Hủy', 'Bank Transfer', 58770000, 'êryeryeryer', '2023-10-16 09:11:43', '2023-10-16 17:08:06'),
(26, 7, '2023-10-15', 'Đang Xử Lý', 'Bank Transfer', 22050000, '34635636363', '2023-10-16 13:09:51', '2023-10-16 13:09:51'),
(27, 7, '2023-10-15', 'Đang Chờ Thanh Toán', 'Bank Transfer', 4290000, '', '2023-10-16 13:14:37', '2023-10-16 13:14:37'),
(28, 7, '2023-10-15', 'Đang Chờ Thanh Toán', 'E-wallet', 25570000, '', '2023-10-16 13:18:41', '2023-10-16 13:18:41'),
(29, 7, '2023-10-15', 'Đang Xử Lý', 'COD', 19190000, 'fdsf', '2023-10-16 13:26:19', '2023-10-16 13:26:19'),
(30, 7, '2023-10-15', 'Đang Xử Lý', 'COD', 20450000, '', '2023-10-16 13:27:25', '2023-10-16 13:27:25'),
(31, 8, '2023-10-15', 'Đã Hủy', '', 25570000, '', '2023-10-16 13:37:49', '2023-10-16 17:31:20'),
(32, 8, '2023-10-15', 'Đã Hủy', 'Bank Transfer', 4290000, '', '2023-10-16 13:39:20', '2023-10-16 17:35:01'),
(33, 9, '2023-10-15', 'Đang Xử Lý', 'COD', 3770000, '', '2023-10-16 13:52:40', '2023-10-16 13:52:40'),
(34, 8, '2023-10-15', 'Đã Hủy', 'COD', 470000, '', '2023-10-16 16:09:23', '2023-10-25 19:11:57'),
(35, 8, '2023-10-15', 'Đã Hủy', 'E-wallet', 9770000, '', '2023-10-16 16:12:54', '2023-10-16 17:34:06'),
(36, 10, '2023-10-16', 'Đã Hủy', 'Bank Transfer', 22050000, '', '2023-10-16 17:17:28', '2023-10-16 17:17:52'),
(37, 11, '2023-10-17', 'Đã Hủy', 'Bank Transfer', 7250000, 'Helo', '2023-10-17 17:01:10', '2023-10-25 18:56:27'),
(38, 11, '2023-10-17', 'Đã Hủy', 'COD', 5090000, '', '2023-10-17 17:05:34', '2023-10-25 18:48:47'),
(39, 11, '2023-10-18', 'Đã Hủy', 'COD', 50345, '', '2023-10-18 17:06:36', '2023-10-25 11:34:51'),
(40, 11, '2023-10-18', 'Đã Hủy', 'COD', 48640000, '', '2023-10-19 08:18:27', '2023-10-21 11:42:21'),
(41, 11, '2023-10-20', 'Đã Hủy', 'COD', 2570000, '', '2023-10-21 10:51:15', '2023-10-21 10:57:32'),
(42, 11, '2023-10-20', 'Đã Hủy', 'COD', 2570000, '', '2023-10-21 10:58:34', '2023-10-25 11:28:02'),
(43, 11, '2023-10-20', 'Đã Hủy', 'COD', 48640000, '', '2023-10-21 12:02:55', '2023-10-25 11:34:13'),
(44, 11, '2023-10-20', 'Hoàn Thành', 'Online Transfer', 2570000, '', '2023-10-21 12:07:01', '2023-10-25 11:36:54'),
(45, 11, '2023-10-20', 'Đã Hủy', 'Online Transfer', 2570000, '', '2023-10-21 12:15:50', '2023-10-25 11:31:59'),
(46, 11, '2023-10-20', 'Đã Hủy', 'Online Transfer', 2570000, '', '2023-10-21 12:21:37', '2023-10-25 11:34:35'),
(47, 11, '2023-10-20', 'Đang Chờ Thanh Toán', 'Online Transfer', 2570000, '', '2023-10-21 12:23:39', '2023-10-21 12:23:39'),
(48, 11, '2023-10-20', 'Đang Chờ Thanh Toán', 'Online Transfer', 2570000, '', '2023-10-21 12:24:17', '2023-10-21 12:24:17'),
(49, 11, '2023-10-20', 'Đang Chờ Thanh Toán', 'Online Transfer', 2570000, '', '2023-10-21 12:26:25', '2023-10-21 12:26:25'),
(50, 11, '2023-10-21', 'Đang Chờ Xác Nhận', 'COD', 19410000, '', '2023-10-22 10:22:01', '2023-10-22 10:22:01'),
(51, 11, '2023-10-22', 'Hoàn Thành', 'COD', 1700000, '', '2023-10-22 22:10:38', '2023-10-25 11:17:43'),
(52, 11, '2023-10-22', 'Đang Chờ Xác Nhận', 'COD', 4290000, '', '2023-10-22 22:16:47', '2023-10-22 22:16:47'),
(53, 11, '2023-10-22', 'Đang Chờ Xác Nhận', 'COD', 6850000, '', '2023-10-22 22:37:57', '2023-10-22 22:37:57'),
(60, 18, '2023-10-23', 'Đang Chờ Xác Nhận', 'COD', 470000, '', '2023-10-24 10:55:48', '2023-10-24 10:55:48'),
(61, 18, '2023-10-23', 'Đang Chờ Xác Nhận', 'COD', 470000, '', '2023-10-24 10:59:57', '2023-10-24 10:59:57'),
(62, 18, '2023-10-23', 'Đã Hủy', 'COD', 1310000, '', '2023-10-24 11:01:36', '2023-10-24 11:02:03'),
(63, 8, '2023-10-25', 'Đã Hủy', 'COD', 15370000, '', '2023-10-25 19:12:50', '2023-10-25 19:19:00');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `OrderID` int(11) DEFAULT NULL,
  `Amount` decimal(10,0) DEFAULT NULL,
  `Date` varchar(255) DEFAULT NULL,
  `Method` varchar(255) DEFAULT NULL,
  `PaymentStatus` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `OrderID`, `Amount`, `Date`, `Method`, `PaymentStatus`, `createdAt`, `updatedAt`) VALUES
(14, 15, 6850000, '10/14/2023', 'COD', 'Đang chờ thanh toán', '2023-10-14 12:24:15', '2023-10-14 12:24:15'),
(15, 16, 28850000, '10/14/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-14 12:26:35', '2023-10-14 12:26:35'),
(16, 17, 32450000, '10/14/2023', 'E-wallet', 'Đang chờ thanh toán', '2023-10-14 12:30:05', '2023-10-14 12:30:05'),
(17, 18, 3410000, '10/14/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-14 12:41:31', '2023-10-14 12:41:31'),
(18, 19, 25410000, '10/14/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-14 14:43:12', '2023-10-14 14:43:12'),
(19, 20, 5050000, '10/15/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-14 17:26:58', '2023-10-14 17:26:58'),
(20, 21, 58770000, '10/16/2023', 'COD', 'Đang chờ thanh toán', '2023-10-16 09:06:12', '2023-10-16 09:06:12'),
(21, 22, 58770000, '10/16/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 09:10:54', '2023-10-16 09:10:54'),
(22, 23, 58770000, '10/16/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 09:11:04', '2023-10-16 09:11:04'),
(23, 24, 58770000, '10/16/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 09:11:43', '2023-10-16 09:11:43'),
(24, 25, 58770000, '10/16/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 09:11:43', '2023-10-16 09:11:43'),
(25, 26, 22050000, '10/16/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 13:09:51', '2023-10-16 13:09:51'),
(26, 27, 4290000, '10/16/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 13:14:37', '2023-10-16 13:14:37'),
(27, 28, 25570000, '10/16/2023', 'E-wallet', 'Đang chờ thanh toán', '2023-10-16 13:18:41', '2023-10-16 13:18:41'),
(28, 29, 19190000, '10/16/2023', 'COD', 'Đang chờ thanh toán', '2023-10-16 13:26:19', '2023-10-16 13:26:19'),
(29, 30, 20450000, '10/16/2023', 'COD', 'Đang chờ thanh toán', '2023-10-16 13:27:25', '2023-10-16 13:27:25'),
(30, 31, 25570000, '10/16/2023', NULL, 'Đang chờ thanh toán', '2023-10-16 13:37:49', '2023-10-16 13:37:49'),
(31, 32, 4290000, '10/16/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 13:39:20', '2023-10-16 13:39:20'),
(32, 33, 3770000, '10/16/2023', 'COD', 'Đang chờ thanh toán', '2023-10-16 13:52:40', '2023-10-16 13:52:40'),
(33, 34, 470000, '10/16/2023', 'COD', 'Đang chờ thanh toán', '2023-10-16 16:09:23', '2023-10-16 16:09:23'),
(34, 35, 9770000, '10/16/2023', 'E-wallet', 'Đang chờ thanh toán', '2023-10-16 16:12:54', '2023-10-16 16:12:54'),
(35, 36, 22050000, '10/17/2023', 'Bank Transfer', 'Đang chờ thanh toán', '2023-10-16 17:17:28', '2023-10-16 17:17:28'),
(36, 37, 7250000, '10/18/2023', 'Bank Transfer', 'Thanh toán thành công', '2023-10-17 17:01:10', '2023-10-17 19:15:27'),
(37, 44, 2570000, '10/21/2023', 'Online Transfer', 'Đang chờ thanh toán', '2023-10-21 12:07:01', '2023-10-21 12:07:01'),
(38, 45, 2570000, '10/21/2023', 'Online Transfer', 'Đang chờ thanh toán', '2023-10-21 12:15:50', '2023-10-21 12:15:50'),
(39, 46, 2570000, '10/21/2023', 'Online Transfer', 'Đang chờ thanh toán', '2023-10-21 12:21:37', '2023-10-21 12:21:37'),
(40, 47, 2570000, '10/21/2023', 'Online Transfer', 'Đang chờ thanh toán', '2023-10-21 12:23:39', '2023-10-21 12:23:39'),
(41, 48, 2570000, '10/21/2023', 'Online Transfer', 'Đang chờ thanh toán', '2023-10-21 12:24:17', '2023-10-21 12:24:17'),
(42, 49, 2570000, '10/21/2023', 'Online Transfer', 'Đang chờ thanh toán', '2023-10-21 12:26:25', '2023-10-21 12:26:25');

-- --------------------------------------------------------

--
-- Table structure for table `productdetails`
--

CREATE TABLE `productdetails` (
  `id` int(11) NOT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `OperatingSystem` varchar(255) DEFAULT NULL,
  `Display` varchar(255) DEFAULT NULL,
  `Processor` varchar(255) DEFAULT NULL,
  `Memory` varchar(255) DEFAULT NULL,
  `Camera` varchar(255) DEFAULT NULL,
  `Battery` varchar(255) DEFAULT NULL,
  `Connectivity` varchar(255) DEFAULT NULL,
  `Weight_Dimensions` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productdetails`
--

INSERT INTO `productdetails` (`id`, `ProductID`, `OperatingSystem`, `Display`, `Processor`, `Memory`, `Camera`, `Battery`, `Connectivity`, `Weight_Dimensions`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Android 11', '6.2 inch', 'Snapdragon 8888', '8GB RAM + 128GB ROM', '12MP + 64MP + 12MP', '4000mAh', '5G, Wi-Fi', '151g, 151.7 x 71.2 x 7.9 mm', '2023-09-05 23:07:51', '2023-10-21 18:16:03'),
(2, 2, 'Android 10', '6.9 inch', 'Snapdragon 865+', '12GB RAM + 256GB ROM', '108MP + 12MP + 12MP', '4500mAh', '5G, Wi-Fi', '208g, 164.8 x 77.2 x 8.1 mm', '0000-00-00 00:00:00', '2023-10-15 20:05:46'),
(3, 3, 'Android 10', '6.2 inch', 'Snapdragon 865', '8GB RAM + 256GB ROM', '12MP + 64MP + 12MP', '4000mAh', '5G, Wi-Fi', '163g, 151.7 x 69.1 x 7.9 mm', '0000-00-00 00:00:00', '2023-10-15 20:05:59'),
(4, 4, 'Android 11', '6.5 inch', 'Snapdragon 720G', '6GB RAM + 128GB ROM', '64MP + 12MP + 5MP + 5MP', '4500mAh', '4G, Wi-Fi', '189g, 159.9 x 75.1 x 8.4 mm', '0000-00-00 00:00:00', '2023-10-15 20:06:16'),
(5, 5, 'Android 10', '6.4 inch', 'Exynos 9611', '6GB RAM + 128GB ROM', '64MP + 8MP + 5MP + 5MP', '6000mAh', '4G, Wi-Fi', '191g, 159.2 x 75.1 x 8.9 mm', '0000-00-00 00:00:00', '2023-10-15 20:39:14'),
(6, 6, 'Android 10', '7.6 inch', 'Snapdragon 865+', '12GB RAM + 256GB ROM', '12MP + 12MP + 12MP', '4500mAh', '5G, Wi-Fi', '282g, 159.2 x 128.2 x 6.9 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 7, 'Android 10', '6.7 inch', 'Snapdragon 855', '8GB RAM + 128GB ROM', '48MP + 12MP + 5MP', '4500mAh', '4G, Wi-Fi', '186g, 162.5 x 75.6 x 8.1 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 8, 'Android 9', '6.3 inch', 'Snapdragon 855', '8GB RAM + 256GB ROM', '12MP + 12MP + 16MP', '3500mAh', '4G, Wi-Fi', '168g, 151 x 71.8 x 7.9 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 9, 'Android 11', '6.7 inch', 'Snapdragon 720G', '8GB RAM + 128GB ROM', '64MP + 12MP + 8MP + 5MP', '5000mAh', '4G, Wi-Fi', '203g, 165 x 77.4 x 8.4 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 10, 'Android 10', '6.7 inch', 'Snapdragon 730G', '6GB RAM + 128GB ROM', '64MP + 12MP + 5MP + 5MP', '7000mAh', '4G, Wi-Fi', '213g, 163.9 x 76.3 x 9.5 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 11, 'Android 12', '6.4 inch', 'Snapdragon 888', '8GB RAM + 128GB ROM', '50MP + 12MP', '4614mAh', '5G, Wi-Fi', '182g, 158.6 x 74.8 x 8.9 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 12, 'Android 11', '6.34 inch', 'Snapdragon 765G', '6GB RAM + 128GB ROM', '12.2MP + 16MP', '4680mAh', '5G, Wi-Fi', '183g, 156.2 x 73.2 x 8.8 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 13, 'Android 10', '5.81 inch', 'Snapdragon 730G', '6GB RAM + 128GB ROM', '12.2MP', '3140mAh', '4G, Wi-Fi', '143g, 144 x 69.4 x 8.2 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 14, 'Android 12', '6.7 inch', 'Snapdragon 888', '12GB RAM + 256GB ROM', '50MP + 48MP + 12MP', '5000mAh', '5G, Wi-Fi', '210g, 163.9 x 75.8 x 8.9 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 15, 'Android 9', '5.6 inch', 'Snapdragon 670', '4GB RAM + 64GB ROM', '12.2MP', '3000mAh', '4G, Wi-Fi', '147g, 151.3 x 70.1 x 8.2 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 16, 'Android 11', '6.0 inch', 'Snapdragon 765G', '8GB RAM + 128GB ROM', '12.2MP + 16MP', '4080mAh', '5G, Wi-Fi', '151g, 144.7 x 70.4 x 8.0 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 17, 'Android 10', '5.7 inch', 'Snapdragon 855', '6GB RAM + 64GB ROM', '12.2MP + 16MP', '2800mAh', '4G, Wi-Fi', '162g, 147.1 x 68.8 x 8.2 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 18, 'Android 10', '6.3 inch', 'Snapdragon 855', '6GB RAM + 64GB ROM', '12.2MP + 16MP', '3700mAh', '4G, Wi-Fi', '193g, 160.4 x 75.1 x 8.2 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 19, 'Android 9', '5.5 inch', 'Snapdragon 845', '4GB RAM + 64GB ROM', '12.2MP', '2915mAh', '4G, Wi-Fi', '148g, 145.6 x 68.2 x 7.9 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 20, 'Android 9', '6.3 inch', 'Snapdragon 845', '4GB RAM + 64GB ROM', '12.2MP', '3430mAh', '4G, Wi-Fi', '184g, 158 x 76.7 x 7.9 mm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 21, 'iOS 15', '6.1 inch', 'A15 Bionic', '6GB RAM + 128GB ROM', '12MP + 12MP + 12MP', '-', '5G, Wi-Fi', '-', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 22, 'iOS 15', '6.1 inch', 'A15 Bionic', '4GB RAM + 128GB ROM', '12MP + 12', '-', '5G, Wi-Fi', '-', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 23, 'iOS 14', 'Super Retina XDR display', 'A14 Bionic chip', '6GB RAM + 64GB ROM', 'Triple 12MP cameras', 'Li-Ion 2815 mAh', 'Wi-Fi 6, Bluetooth 5.0, Lightning connector', '146.7 x 71.5 x 7.4 mm, 164 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 24, 'iOS 14', 'Super Retina XDR display', 'A14 Bionic chip', '4GB RAM + 128GB ROM', 'Dual 12MP cameras', 'Li-Ion 2815 mAh', 'Wi-Fi 6, Bluetooth 5.0, Lightning connector', '146.7 x 71.5 x 7.4 mm, 164 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 25, 'iOS 14', '4.7-inch Retina HD display', 'A13 Bionic chip', '3GB RAM + 64GB ROM', '12MP camera', 'Li-Ion 1821 mAh', 'Wi-Fi, Bluetooth 5.0, Lightning connector', '138.4 x 67.3 x 7.3 mm, 148 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 26, 'iOS 14', '4.7-inch Retina HD display', 'A13 Bionic chip', '3GB RAM + 64GB ROM', '12MP camera', 'Li-Ion 1821 mAh', 'Wi-Fi, Bluetooth 5.0, Lightning connector', '138.4 x 67.3 x 7.3 mm, 148 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 27, 'iOS 14', '6.1-inch LCD Liquid Retina display', 'A13 Bionic chip', '4GB RAM + 128GB ROM', 'Dual 12MP cameras', 'Li-Ion 3110 mAh', 'Wi-Fi 6, Bluetooth 5.0, Lightning connector', '150.9 x 75.7 x 8.3 mm, 194 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 28, 'iOS 14', '6.1-inch LCD Liquid Retina display', 'A12 Bionic chip', '3GB RAM + 64GB ROM', '12MP camera', 'Li-Ion 2942 mAh', 'Wi-Fi, Bluetooth 5.0, Lightning connector', '150.9 x 75.7 x 8.3 mm, 194 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 29, 'iOS 14', '5.8-inch Super Retina OLED display', 'A12 Bionic chip', '4GB RAM + 128GB ROM', 'Dual 12MP cameras', 'Li-Ion 2658 mAh', 'Wi-Fi, Bluetooth 5.0, Lightning connector', '143.6 x 70.9 x 7.7 mm, 177 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 30, 'iOS 14', '5.5-inch Retina HD display', 'A11 Bionic chip', '3GB RAM + 64GB ROM', 'Dual 12MP cameras', 'Li-Ion 2691 mAh', 'Wi-Fi, Bluetooth 4.2, Lightning connector', '158.4 x 78.1 x 7.5 mm, 202 grams', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 43, '635', '354', '543', '5643', '543', '6354', '6543', '354', '2023-10-22 09:30:15', '2023-10-22 09:30:15');

-- --------------------------------------------------------

--
-- Table structure for table `productdiscounts`
--

CREATE TABLE `productdiscounts` (
  `id` int(11) NOT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `Discount` decimal(10,0) DEFAULT NULL,
  `StartDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productdiscounts`
--

INSERT INTO `productdiscounts` (`id`, `ProductID`, `Discount`, `StartDate`, `EndDate`, `createdAt`, `updatedAt`) VALUES
(1, 1, 32, '2023-10-15', '2023-10-22', '0000-00-00 00:00:00', '2023-10-24 13:06:47'),
(2, 2, 12, '2023-09-24', '2023-12-31', '0000-00-00 00:00:00', '2023-10-16 07:38:53'),
(3, 3, 72, '2023-09-24', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 4, 23, '2023-09-24', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 5, 0, '2023-10-01', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 6, 63, '2023-09-24', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 7, 69, '2023-09-24', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 8, 12, '2023-10-01', '2023-12-31', '0000-00-00 00:00:00', '2023-10-18 17:22:16'),
(9, 9, 32, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 10, 35, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 11, 27, '2023-09-23', '2023-10-23', '0000-00-00 00:00:00', '2023-10-24 13:05:05'),
(12, 12, 47, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 13, 39, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 14, 66, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 15, 82, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 16, 46, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 17, 0, '2023-10-01', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 18, 53, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 19, 80, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 20, 89, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 21, 11, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 22, 13, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 23, 82, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 24, 89, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 25, 64, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 26, 56, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 27, 0, '2023-10-17', '2023-12-31', '0000-00-00 00:00:00', '2023-10-16 08:35:27'),
(28, 28, 85, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 29, 97, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 30, 55, '2023-09-23', '2023-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 43, 0, '2023-10-22', '2023-10-28', '2023-10-22 09:30:15', '2023-10-22 09:30:15');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `BrandName` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `UnitPrice` decimal(10,0) DEFAULT NULL,
  `ImageURL` varchar(255) DEFAULT NULL,
  `TypeID` varchar(255) DEFAULT NULL,
  `QuantityInStock` int(11) DEFAULT NULL,
  `Rate` decimal(10,0) DEFAULT NULL,
  `Sold` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `ProductName`, `BrandName`, `Description`, `UnitPrice`, `ImageURL`, `TypeID`, `QuantityInStock`, `Rate`, `Sold`, `createdAt`, `updatedAt`) VALUES
(1, 'Samsung Galaxy S21', 'Samsung', 'Samsung Galaxy S21 là mẫu flagship được Samsung trình làng đầu năm 2021. Điện thoại nổi bật với thiết kế mỏng nhẹ, màn hình độ phân giải cao và hệ thống 3 camera chụp ảnh chất lượng.\r\n\r\nGalaxy S21 sở hữu màn hình Dynamic AMOLED 2X 6,2 inch với tần số quét 120Hz giúp trải nghiệm mượt mà. Thân máy mỏng chỉ 7,9mm, nhẹ 171g, phong cách thanh lịch phù hợp nhiều người dùng.\r\n\r\nVề hiệu năng, Galaxy S21 được trang bị con chip Exynos 2100 mạnh mẽ, cùng RAM 8GB và bộ nhớ trong 256GB, mang lại hiệu suất cao cấp. Hệ thống 3 camera sau gồm camera chính 12MP, tele 12MP và góc rộng 12MP chụp ảnh chi tiết, sắc nét.\r\n\r\nPin Galaxy S21 có dung lượng 4.000mAh hỗ trợ sạc nhanh và sạc không dây, giúp người dùng sử dụng lâu dài một ngày. Bộ đôi Galaxy S21 là những sản phẩm cao cấp, thể hiện đẳng cấp công nghệ của Samsung.', 25000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv.png', 'gaming', 51, 5, 78, '2023-09-05 23:07:51', '2023-10-25 11:40:10'),
(2, 'Samsung Galaxy Note20 Ultra', 'Samsung', 'Samsung Galaxy Note20 Ultra là phiên bản nâng cấp mạnh mẽ nhất trong dòng Note đời mới 2020 của Samsung. Điểm nhấn của Galaxy Note20 Ultra chính là màn hình siêu lớn 6.9 inch cùng bút S Pen thông minh hơn bao giờ hết.\r\n\r\nMàn hình Dynamic AMOLED 2X của Note20 Ultra cho chất lượng hình ảnh sắc nét, màu sắc chân thực. Độ phân giải WQHD+ và tần số quét 120Hz mang đến trải nghiệm xem video và chơi game mượt mà. Thiết kế màn hình Infinity-O giúp màn hình tràn viền tối đa.\r\n\r\nVề hiệu năng, Galaxy Note20 Ultra được trang bị con chip Exynos 990 mạnh mẽ, kết hợp RAM 12GB cùng dung lượng lưu trữ lên tới 512GB. Hệ thống 3 camera sau giúp chụp ảnh ấn tượng. Bút S Pen cải tiến giúp ghi chép và vẽ vời trên màn hình một cách tự nhiên hơn.\r\n\r\nĐây là mẫu Note mạnh mẽ, phù hợp người dùng sáng tạo và yêu thích công nghệ.', 29000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/y/e/yellow_final_4_2.jpg', 'mobile', 81, 5, 7, '2023-09-05 23:07:51', '2023-10-15 20:05:46'),
(3, 'Samsung Galaxy S20', 'Samsung', 'Samsung Galaxy S20 là mẫu flagship cao cấp ra mắt đầu năm 2020 của Samsung. Điện thoại nổi bật với thiết kế màn hình siêu rộng cùng hệ thống 3 camera chuyên nghiệp.\r\n\r\nGalaxy S20 sở hữu màn hình Dynamic AMOLED 2X rộng 6,2 inch, cho độ phân giải WQHD+ và tần số quét 120Hz, mang đến trải nghiệm hình ảnh sắc nét. Hệ thống 3 camera sau gồm camera chính 64MP, telephoto và góc siêu rộng cho chất lượng chụp ảnh xuất sắc.\r\n\r\nVề hiệu năng, Galaxy S20 được trang bị con chip Exynos 990 mạnh mẽ, RAM 8GB và bộ nhớ trong 128GB. Thiết kế mỏng nhẹ cùng pin 4.000mAh cho thời lượng sử dụng ổn định.\r\n\r\nĐây là sự lựa chọn tuyệt vời dành cho người dùng yêu thích công nghệ cao cấp. Với thiết kế đẹp, camera chuyên nghiệp và hiệu năng mạnh, Galaxy S20 hứa hẹn mang lại trải nghiệm tuyệt vời.', 18000000, 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-20-fe_3__4_1_1.jpg', 'mobile', 19, 4, 97, '2023-09-05 23:07:51', '2023-10-25 19:19:00'),
(4, 'Samsung Galaxy A52', 'Samsung', 'Samsung Galaxy A52 là mẫu smartphone tầm trung nổi bật của Samsung ra mắt năm 2021. Điện thoại nổi trội với thiết kế mỏng nhẹ, màn hình Super AMOLED lớn cùng hệ thống 4 camera phong phú.\r\n\r\nGalaxy A52 sở hữu màn hình Super AMOLED 6,5 inch có độ phân giải Full HD+, cho màu sắc sống động và chi tiết. Bộ 4 camera sau gồm camera chính 64MP cùng 3 camera ultrawide, macro và chụp chân dung, đáp ứng nhu cầu chụp ảnh của người dùng.\r\n\r\nVề hiệu năng, điện thoại được trang bị chip Snapdragon 720G, RAM 6GB cùng pin lớn 5.000mAh hỗ trợ sạc nhanh 25W. A52 có thiết kế mỏng nhẹ, cấu hình mạnh, là lựa chọn tuyệt vời dành cho những ai ưa thích sự tiện dụng và trải nghiệm đa phương tiện.', 8000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a52-26.jpg', 'mobile', 40, 4, 61, '2023-09-05 23:07:51', '2023-10-15 20:06:16'),
(5, 'Samsung Galaxy M31', 'Samsung', 'Samsung Galaxy M31 là một trong những mẫu smartphone tầm trung phổ biến của Samsung. Điện thoại nổi bật với thời lượng pin trâu và màn hình lớn.\r\n\r\nGalaxy M31 được trang bị màn hình lớn 6,4 inch với độ phân giải Full HD+, cho hình ảnh sắc nét. Thiết kế mỏng nhẹ, cầm tay thoải mái. Đặc biệt, máy mang theo mình viên pin khủng 7.000mAh, cho thời lượng sử dụng lên đến hai ngày liên tục.\r\n\r\nVề hiệu năng, M31 được trang bị con chip Exynos 9611 cùng RAM 6GB, cho khả năng xử lý tốt các tác vụ thông thường. Hệ thống 4 camera sau 64MP cho chụp ảnh đẹp.\r\n\r\nVới mức giá hợp lý, Samsung Galaxy M31 là lựa chọn mang đến trải nghiệm thoải mái nhờ pin trâu, phù hợp người dùng cần sử dụng lâu dài.', 5000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-m31s.jpg', 'mobile', 60, 4, 17, '2023-09-05 23:07:51', '2023-10-25 19:19:00'),
(6, 'Samsung Galaxy Z Fold2', 'Samsung', 'Samsung Galaxy Z Fold2 là mẫu điện thoại gập thế hệ thứ 2 đầy đột phá của Samsung. Điện thoại nổi bật với thiết kế màn hình gập mới cùng nhiều cải tiến.\r\n\r\nGalaxy Z Fold2 sở hữu thiết kế quét màn hình kính gập bên trong rộng 7,6 inch. Màn ngoài là màn hình chữ ký 6,2 inch, giúp tiện dùng các tác vụ thường ngày. Mang trải nghiệm màn hình lớn trong lòng bàn tay.\r\n\r\nZ Fold2 được trang bị bộ vi xử lý Snapdragon 865+ mạnh mẽ, RAM 12GB cùng dung lượng lưu trữ lớn. Hệ thống ba camera chụp ảnh cực hoàn hảo. Bút S Pen thông minh giúp ghi chép và làm việc hiệu quả hơn.\r\n\r\nĐây sự kết hợp hoàn hảo giữa công nghệ mới nhất và thiết kế đột phá, đem đến trải nghiệm mới mẻ cho người dùng.', 40000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/a/galaxy-z-fold2-5g-1_2_3.jpg', NULL, 10, 5, 2, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(7, 'Samsung Galaxy S10 Lite', 'Samsung', 'Samsung Galaxy S10 Lite là phiên bản giá rẻ hơn trong dòng Galaxy S10 nổi tiếng. Điện thoại nổi bật với thiết kế sang trọng, màn hình lớn và hệ thống camera đa dạng.\r\n\r\nGalaxy S10 Lite được trang bị màn hình Super AMOLED 6,7 inch, cho hình ảnh sắc nét và màu sắc rực rỡ. Hệ thống 3 camera sau gồm camera chính 48MP, camera góc siêu rộng và macro đáp ứng tốt nhu cầu chụp ảnh.\r\n\r\nVề hiệu năng, S10 Lite được trang bị con chip Snapdragon 855 mạnh mẽ, RAM 8GB đáp ứng mượt mà mọi nhiệm vụ. Thân máy mỏng nhẹ, pin 4.500mAh cho năng lượng suốt ngày dài.\r\n\r\nVới thiết kế sang trọng, màn hình lớn và hệ thống camera đa dạng, Samsung Galaxy S10 Lite là lựa chọn hoàn hảo cho những ai yêu thích dòng flagship với mức giá hợp túi tiền.', 12000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/1/s10-lite-1_1.jpg', NULL, 30, 4, 57, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(8, 'Samsung Galaxy Note10', 'Samsung', 'Samsung Galaxy Note10 là mẫu flagship cao cấp đánh dấu 10 năm ra mắt dòng Galaxy Note của Samsung. Điểm nhấn là sự kết hợp hoàn hảo giữa công nghệ và tính năng bút S Pen.\r\n\r\nGalaxy Note10 được trang bị màn hình Dynamic AMOLED kích thước 6,3 inch, cho hình ảnh sắc nét và màu sắc chân thực. Hệ thống 3 camera sau chụp ảnh chuyên nghiệp, kèm theo đó là bút S Pen thông minh hơn, cho khả năng ghi chép và vẽ vời tự nhiên hơn.\r\n\r\nVề hiệu năch, Note10 được cấu hình cao cấp với chip Exynos 9825, RAM 8GB và bộ nhớ trong 256GB. Pin 3,500mAh có thể sạc không dây, đáp ứng nhu cầu sử dụng lâu dài.\r\n\r\nĐây là mẫu Note đỉnh cao, phù hợp người dùng sáng tạo và yêu thích công nghệ. Thiết kế tinh tế, hiệu suất mạnh mẽ cùng bút điện tử thông minh.', 22000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/6/3/637148757998466143_ss-note-10-do-1.png', NULL, 24, 4, 82, '2023-09-05 23:07:51', '2023-10-22 10:22:01'),
(9, 'Samsung Galaxy A72', 'Samsung', 'Samsung Galaxy A72 là mẫu smartphone tầm trung nổi bật trong dòng Galaxy A của Samsung. Điện thoại có thiết kế đẹp, màn hình lớn và hệ thống 4 camera phong phú.\r\n\r\nGalaxy A72 sở hữu màn hình Super AMOLED rộng 6,7 inch với độ phân giải Full HD+, cho trải nghiệm xem video và chơi game sống động. Bộ 4 camera sau gồm camera chính 64MP cùng 3 camera ultrawide, macro và chụp chân dung đáp ứng nhiều nhu cầu chụp ảnh.\r\n\r\nVề hiệu năng, điện thoại được trang bị chip Snapdragon 720G mạnh mẽ, RAM 6GB/8GB và pin lớn 5.000mAh hỗ trợ sạc nhanh 25W. Thiết kế mỏng nhẹ, cầm tay thoải mái.\r\n\r\nvới mức giá phải chăng, Galaxy A72 là sự lựa chọn hoàn hảo dành cho những ai yêu thích trải nghiệm đa phương tiện và chụp ảnh đẹp.', 9000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a72-30_2_2_1_1.jpg', NULL, 35, 4, 34, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(10, 'Samsung Galaxy M51', 'Samsung', 'Samsung Galaxy M51 là một mẫu điện thoại Samsung thuộc dòng M - dòng sản phẩm trung cấp với mức giá hợp lý. Điểm nổi bật nhất của Galaxy M51 là viên pin siêu khủng 7.000mAh, cho thời lượng sử dụng điện thoại toả lạc trong nhiều ngày.\r\n\r\nGalaxy M51 sở hữu màn hình lớn 6,7 inch với độ phân giải Full HD+, mang đến trải nghiệm xem hình ảnh và video sắc nét. Bộ 4 camera sau đủ cả lớn, xa, gần phục vụ tốt nhu cầu chụp ảnh của người dùng.\r\n\r\nVề hiệu năng, M51 được trang bị chip Snapdragon 730, RAM 6GB và bộ nhớ trong 128GB, đảm bảo phản hồi nhanh và mượt mà. Thêm vào đó là mức giá hấp dẫn, phù hợp với túi tiền của đa số người tiêu dùng.\r\n\r\nVới thời lượng pin siêu trâu, Galaxy M51 là sự lựa chọn tuyệt vời cho những ai muốn dùng điện thoại lâu dài một cách thoải mái mà không lo hết pin.', 6000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-m51_1_2.jpg', NULL, 50, 4, 27, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(11, 'Google Pixel 6', 'Google', 'Google Pixel 6 là mẫu điện thoại cao cấp mới nhất của Google, ra mắt vào năm 2021. Điểm nổi bật của Pixel 6 là hệ thống camera chuyên nghiệp cùng trải nghiệm Android nguyên bản ưu việt.\r\n\r\nPixel 6 có thiết kế hiện đại với màn hình OLED 6,4 inch. Hệ thống 2 camera sau do Google tự phát triển, bao gồm camera chính 50MP và ultra-wide 12MP, mang đến khả năng chụp ảnh chân thực, sắc nét.\r\n\r\nVề hiệu năng, Pixel 6 sử dụng chip Tensor do Google thiết kế, mang tính năng trí tuệ nhân tạo và RAM 8GB. Pin bền cùng hỗ trợ sạc siêu tốc.\r\n\r\nVới trải nghiệm gốc về camera và Android, Pixel 6 là sự lựa chọn hàng đầu dành cho người dùng theo đuổi công nghệ.', 15000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/g/gggg_1__1.jpg', NULL, 15, 5, 34, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(12, 'Google Pixel 5a', 'Google', 'Google Pixel 5a là mẫu điện thoại Android cấp trung/giữa của Google, ra mắt vào năm 2021. Điểm nổi bật của Pixel 5a là:\r\n\r\nThiết kế gọn nhẹ, màn hình 6,34 inch cảm ứng OLED.\r\n\r\nHệ thống 2 camera sau chất lượng cao với camera chính 12,2MP và rộng 16MP, mang lại hình ảnh sắc nét.\r\n\r\nHiệu năng mạnh mẽ với chip Snapdragon 765G, RAM 6GB, cho các tác vụ suôn sẻ.\r\n\r\nDung lượng pin lớn 4.680mAh với khả năng sạc nhanh.\r\n\r\nHệ điều hành Android 11 nguyên bản, đem lại giao diện sạch sẽ, nhiều tính năng thông minh.\r\n\r\nVới mức giá tương đối hợp lý, Pixel 5a là một lựa chọn phù hợp cho người dùng yêu thích trải nghiệm gốc của hệ điều hành Android.', 8000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/5/a/5a_1_.jpg', NULL, 24, 4, 87, '2023-09-05 23:07:51', '2023-10-22 22:16:47'),
(13, 'Google Pixel 4a', 'Google', 'Google Pixel 4a là một mẫu điện thoại trung cấp do Google phát hành vào năm 2020. Đây là phiên bản giá rẻ và được nâng cấp nhỏ so với Pixel 4.\r\n\r\nVề thiết kế, Pixel 4a mang disign màu xám tinh tế, gọn nhẹ và sang trọng. Màn hình OLED 5,81 inch với độ phân giải Full HD+ cho hình ảnh sắc nét và màu sắc giàu độ chi tiết.\r\n\r\nPixel 4a sử dụng con chip Snapdragon 730G mạnh mẽ cùng RAM 6GB, cho khả năng xử lý các tác vụ nhanh và mượt mà. Dung lượng pin 3.140mAh lại đủ dùng cả ngày mà không lo hết pin.\r\n\r\nNổi bật nhất trên Pixel 4a vẫn là hệ thống camera sau với camera chính 12.2MP chụp ảnh sắc nét và độ chi tiết cao. Hỗ trợ nhiều tính năng chụp hình tiên tiến.\r\n\r\nVới mức giá từ 450-500USD, Pixel 4a mang lại trải nghiệm chụp ảnh chất lượng cùng hiệu năng mượt mà, phù hợp người dùng tiết kiệm.', 5000000, 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/g/g/gg4a.jpg', NULL, 30, 4, 32, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(14, 'Google Pixel 6 Pro', 'Google', 'Google Pixel 6 Pro là phiên bản nâng cao và mạnh mẽ hơn so với bản thường của dòng Pixel 6 năm 2021. Đây là lựa chọn dành cho những người dùng yêu cầu hiệu năng tối đa:\r\n\r\nThiết kế sang trọng với màn hình AMOLED LTPO 6.7 inch có tần số làm tươi lên đến 120Hz.\r\n\r\nHệ thống 3 camera sau đỉnh cao, bao gồm camera chính 50MP, tele camera 12MP với khả năng zoom quang học 5x và camera rộng góc siêu rộng 11MP.\r\n\r\nVi xử lý Tensor mạnh mẽ, hỗ trợ trí tuệ nhân tạo và RAM lên đến 12GB. Bộ nhớ trong từ 128-512GB.\r\n\r\nPin kích thước 4.614mAh với khả năng sạc siêu tốc lên đến 30W.\r\n\r\nAndroid 12 nhanh nhẹn và bảo mật.\r\n\r\nVới thông số kỹ thuật đỉnh cao cùng trải nghiệm chụp ảnh chất lượng, Pixel 6 Pro là lựa chọn hàng đầu cho người dùng yêu công nghệ.', 20000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/g/gggg_1_.jpg', NULL, 6, 5, 102, '2023-09-05 23:07:51', '2023-10-25 12:36:42'),
(15, 'Google Pixel 3a', 'Google', 'Google Pixel 3a là điện thoại thông minh được Google phát hành như một sự thay thế hợp lý cho các thiết bị hàng đầu của hãng. Nó cung cấp nhiều tính năng kế thừa từ Pixel 3, khiến nó trở thành một lựa chọn hấp dẫn cho những người dùng đang tìm kiếm một chiếc điện thoại thông minh phù hợp túi tiền [3]. Thiết kế: Pixel 3a có thiết kế tương tự Pixel 3, với các cạnh và góc màn hình được bo tròn [3]. Mặt sau của Pixel 3a được làm bằng nhựa, mang lại cảm giác kém cao cấp hơn một chút so với mặt lưng bằng kính của Pixel 3 [3]. Nó có thiết kế mặt sau hai tông màu, với mặt trên của điện thoại được phản chiếu và phần lớn bảng điều khiển được làm mờ [3]. Vị trí của camera sau, đèn flash, nút chỉnh âm lượng, nút nguồn và cổng USB-C tương tự như Pixel 3 [3]. Đáng chú ý, Pixel 3a có giắc cắm tai nghe, điều này không thường thấy trên nhiều điện thoại tầm trung [3]. Màn hình: Pixel 3a có màn hình OLED 5,6 inch Full HD+ với độ phân giải 2220 x 1080 [3]. Kích thước màn hình tương đối nhỏ dẫn đến mật độ điểm ảnh cao 441 pixel mỗi inch, cho phép xem phương tiện chi tiết [3]. Tuy nhiên, màn hình có độ sáng tối đa hạn chế và khả năng tái tạo màu yếu hơn so với Pixel 3 [3]. Hiệu suất: Pixel 3a được trang bị chip Snapdragon 670 và đi kèm RAM 4 GB [1]. Nó cung cấp 64 GB bộ nhớ trong eMMC không thể mở rộng [1]. Pixel 3a thiếu sạc không dây, khả năng chống nước và Pixel Visual Core (PVC), tiêu chuẩn trên Pixel 3 [1]. Tình trạng sẵn có: Pixel 3a có sẵn thông qua nhiều nhà cung cấp dịch vụ khác nhau, bao gồm Verizon, T-Mobile, Sprint, US Cellular, Spectrum Mobile, C Spire và Google Fi [2]. Nó cũng được bán trong Google Store ở các quốc gia có Pixel [2].', 7000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/6/_600x600__google_pixel_3_cu_den.png', NULL, 11, 4, 99, '2023-09-05 23:07:51', '2023-10-25 19:19:00'),
(16, 'Google Pixel 5', 'Google', 'Google Pixel 5 là mẫu điện thoại cao cấp được Google phát hành vào năm 2020.\r\n\r\nVề thiết kế, Pixel 5 sử dụng vật liệu nhôm có cảm giác chắc chắn, mang disign tối giản và thanh lịch. Màn hình OLED 6 inch với độ phân giải Full HD+ cho hình ảnh sắc nét, màu sắc chân thực.\r\n\r\nPixel 5 được trang bị con chip Snapdragon 765G mạnh mẽ, kết hợp RAM 8GB, cho khả năng xử lý các tác vụ nhanh và mượt mà. Pin 4.080mAh có thời lượng sử dụng lâu dài.\r\n\r\nNổi bật nhất là hệ thống 2 camera sau với camera chính 12.2MP và camera góc rộng 16MP, giúp chụp ảnh chủ đề đa dạng, chi tiết và sắc nét.\r\n\r\nVới mức giá khoảng 699 USD, Pixel 5 mang đến trải nghiệm chụp ảnh đỉnh cao, hiệu năng ổn định, phù hợp đa số người dùng.', 18000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/o/google-pixel-5-600jpg-600x600.jpg', NULL, 18, 4, 87, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(17, 'Google Pixel 4', 'Google', 'Google Pixel 4 là mẫu điện thoại cao cấp được Google giới thiệu vào năm 2019.\r\n\r\nVề thiết kế, Pixel 4 sử dụng khung viền kim loại với mặt lưng kính cảm ứng sang trọng. Màn hình OLED 5,7 inch có độ phân giải Full HD+.\r\n\r\nPixel 4 được trang bị con chip Snapdragon 855 tiên tiến cùng RAM 6GB, cho hiệu năng mạnh mẽ. Pin 2.800mAh dùng thoải mái cả ngày.\r\n\r\nNổi bật là hệ thống 2 camera sau gồm camera chính 12.2MP và telephoto 16MP. Chụp ảnh chi tiết, sắc nét nhờ công nghệ HDR+.\r\n\r\nPixel 4 hỗ trợ nhiều tính năng thông minh như nhận diện khuôn mặt, gợi ý dựa trên thói quen.\r\n\r\nVới giá khởi điểm là 799 USD, Pixel 4 phù hợp người dùng yêu thích trải nghiệm camera tuyệt vời.', 15000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/g/gggg_10_.jpg', NULL, 12, 4, 45, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(18, 'Google Pixel 4 XL', 'Google', 'Google Pixel 4 XL là phiên bản màn hình lớn của dòng điện thoại Pixel 4 ra mắt năm 2019.\r\n\r\nThiết kế sang trọng với khung kim loại và mặt kính cảm ứng. Màn hình OLED 6,3 inch có độ phân giải QHD+.\r\n\r\nPixel 4 XL sử dụng chip Snapdragon 855 mạnh mẽ, kết hợp RAM 6GB mang đến hiệu năng bứt phá.\r\n\r\nPin lớn hơn dung lượng 3.700mAh cho thời lượng dùng lâu dài.\r\n\r\nHệ thống 2 camera sau 12MP và 16MP chụp ảnh sắc nét, chi tiết nhờ công nghệ HDR+.\r\n\r\nHỗ trợ nhiều tính năng thông minh và Motion Sense.\r\n\r\nGiá bán từ 899 USD, phù hợp người dùng yêu thích màn hình rộng.\r\n\r\nNhìn chung, với thông số mạnh mẽ cùng trải nghiệm camera chất lượng, Pixel 4 XL là lựa chọn tuyệt vời.', 17000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/g/gggg_10_.jpg', NULL, 8, 4, 64, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(19, 'Google Pixel 3', 'Google', 'Google Pixel 3 là mẫu điện thoại cao cấp được ra mắt bởi Google vào năm 2018. Điện thoại sở hữu thiết kế sang trọng với lưng kính cảm ứng và khung kim loại. Màn hình OLED 5,5 inch cho hình ảnh sắc nét. Pixel 3 được trang bị con chip Snapdragon 845 mạnh mẽ kết hợp 4GB RAM, cho hiệu năng xử lý các tác vụ mượt mà. Hệ thống camera kép 12MP phía sau khả năng chụp ảnh chân thực, chi tiết nhờ công nghệ HDR+. Pixel 3 còn hỗ trợ giao diện Android nguyên bản và thường xuyên nhận được cập nhật phần mềm mới. Với giá bán từ 799 USD, Pixel 3 phù hợp với người dùng đòi hỏi về hiệu năng và trải nghiệm camera chuyên nghiệp.', 13000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/6/_600x600__google_pixel_3_cu_den.png', NULL, 16, 4, 87, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(20, 'Google Pixel 3 XL', 'Google', 'Google Pixel 3 XL là phiên bản màn hình lớn của dòng điện thoại Pixel 3 ra mắt năm 2018. Pixel 3 XL sở hữu thiết kế sang trọng tương tự với khung kim loại và mặt kính cảm ứng. Màn hình OLED 6,3 inch cho trải nghiệm xem video háo hức. Điện thoại được trang bị con chip tiên tiến Snapdragon 845, RAM 4GB cho công suất xử lý mạnh mẽ. Hệ thống 2 camera sau 12MP và 12MP chụp ảnh sắc nét, độ chi tiết cao nhờ công nghệ HDR+. Pixel 3 XL còn hỗ trợ Android nguyên bản và nhận cập nhật nhanh. Với giá 899 USD, đây là sự lựa chọn tuyệt vời dành cho người yêu thích màn hình lớn.', 15000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/6/_600x600__google_pixel_3_cu_den_2.png', NULL, 13, 4, 44, '2023-09-05 23:07:51', '2023-10-22 22:10:38'),
(21, 'iPhone 13 Pro', 'Apple', 'iPhone 13 Pro là mẫu iPhone cao cấp nhất được Apple ra mắt năm 2021, nổi bật với thiết kế tinh tế và hiệu năng mạnh mẽ. Điện thoại sở hữu thân máy bằng nhôm chắc chắn cùng mặt lưng bằng kính cảm ứng cao cấp. Màn hình OLED 6.1 inch tràn viền mang đến trải nghiệm xem ấn tượng. Bên trong máy là con chip Apple A15 Bionic mạnh mẽ, kết hợp 6GB RAM cho mọi tác vụ đều diễn ra mượt mà. Điểm nhấn trên iPhone 13 Pro chính là hệ thống 3 camera sau chất lượng, đặc biệt là camera chính 12MP bắt trọn mọi độ chi tiết. Với giá 999 USD, iPhone 13 Pro trở thành lựa chọn hàng đầu dành cho người đam mê công nghệ và sản phẩm cao cấp của Apple.', 25000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_66_6_2_4.jpg', NULL, 15, 5, 55, '2023-09-05 23:07:51', '2023-10-25 11:34:13'),
(22, 'iPhone 13', 'Apple', 'iPhone 13 là mẫu iPhone tiêu chuẩn được Apple ra mắt năm 2021. Điện thoại mang thiết kế vuông vức với màn hình OLED 6,1 inch tràn viền, bo tròn góc cạnh mang lại cảm giác cầm nắm thoải mái. iPhone 13 được trang bị con chip Apple A15 Bionic mạnh mẽ, RAM 4GB xử lý mọi tác vụ mượt mà. Hệ thống 2 camera sau với camera chính 12MP và camera góc siêu rộng 12MP chụp ảnh sắc nét. Pin có dung lượng lớn 3.240mAh cho thời lượng sử dụng lên đến 19 giờ phát video. Giá bán iPhone 13 chỉ từ 699 USD, phù hợp người dùng thực dụng với thiết kế tinh tế, hiệu năng mạnh và chi phí hợp lý.', 22000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg', NULL, 20, 5, 44, '2023-09-05 23:07:51', '2023-10-25 11:34:13'),
(23, 'iPhone 12 Pro', 'Apple', 'iPhone 12 Pro là mẫu iPhone cao cấp nhất của Apple ra mắt năm 2020. Điện thoại nổi bật với thiết kế vuông vức sang trọng, khung nhôm và mặt lưng bằng ceramics cường lực. Màn hình OLED 6,1 inch tràn viền cùng độ phân giải cao cho hình ảnh sắc nét. Hiệu năng mạnh mẽ nhờ chip A14 Bionic và RAM 6GB. Hệ thống 3 camera sau gồm camera chính 12MP, tele 12MP và góc siêu rộng 12MP, chụp ảnh chuyên nghiệp. iPhone 12 Pro còn có khả năng chống nước và bụi IP68. Với giá khởi điểm 999 USD, đây là sản phẩm iPhone đáng sở hữu nhờ thiết kế cao cấp, hiệu suất mạnh mẽ.', 20000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/o/download_2__1_28_2.png', NULL, 25, 5, 57, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(24, 'iPhone 12', 'Apple', 'iPhone 12 là phiên bản tiêu chuẩn trong dòng iPhone 12 của Apple ra mắt năm 2020. Điện thoại mang thiết kế vuông vức, góc cạnh sắc sảo cùng khung nhôm chắc chắn, mang lại cảm giác cầm nắm tốt. Màn hình OLED 6,1 inch tràn viền cho trải nghiệm xem ấn tượng. iPhone 12 được trang bị con chip A14 Bionic mạnh mẽ, RAM 4GB đáp ứng mượt mà mọi nhu cầu sử dụng. Hệ thống 2 camera sau gồm camera chính 12MP và góc siêu rộng 12MP, chụp ảnh chất lượng cao. Pin có thể sử dụng cả ngày với dung lượng 2.815mAh. Với giá từ 799 USD, iPhone 12 là sản phẩm bán chạy nhất dòng iPhone 12 nhờ các tính năng cơ bản với mức giá hấp dẫn.', 18000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-12-mini-blue-select-2020_2_8_1_1_1_2_3.png', NULL, 30, 5, 54, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(25, 'iPhone SE (2020)', 'Apple', 'iPhone SE (2020) là mẫu iPhone giá rẻ nhất ra mắt năm 2020. Điện thoại có thiết kế nhỏ gọn giống iPhone 8 cũ với màn hình Retina HD 4,7 inch và khung viền ngày càng mỏng. iPhone SE 2020 được trang bị con chip A13 Bionic mạnh mẽ, RAM 3GB cho hiệu năng mượt mà ngang tầm người anh em iPhone 11. Camera sau 12MP chụp ảnh sắc nét. Thêm khả năng chống bụi và nước cấp độ IP67. Với mức giá khởi điểm 399 USD, iPhone SE 2020 mang đến trải nghiệm iPhone chất lượng với mức giá hợp lý nhất thị trường, phù hợp người dùng thực dụng.', 10000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/e/se_2020_0001_layer_2_3_1_4_3.jpg', NULL, 10, 4, 93, '2023-09-05 23:07:51', '2023-10-25 19:19:00'),
(26, 'iPhone 11', 'Apple', 'iPhone 11 là mẫu iPhone tiêu chuẩn được Apple giới thiệu năm 2019. Điện thoại nổi bật với thiết kế khá vuông vức, mặt lưng kính cùng khung nhôm chắc chắn bao quanh. Màn hình Liquid Retina 6,1 inch cho hình ảnh sắc nét. Hiệu năng mạnh mẽ nhờ chip A13 Bionic cùng RAM 4GB. Hệ thống 2 camera sau gồm camera chính 12MP và góc siêu rộng 12MP, chụp ảnh đẹp tự nhiên. Pin dung lượng 3.110mAh có thể sử dụng liên tục cả ngày. Với giá khởi điểm 699 USD, iPhone 11 trở thành lựa chọn đáng cân nhắc nhờ cấu hình mạnh, làm chủ ảnh tự nhiên cùng giá phải chăng.', 15000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg', NULL, 40, 4, 22, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(27, 'iPhone XR', 'Apple', 'iPhone XR là mẫu iPhone tiêu chuẩn ra mắt năm 2018 bởi Apple, nổi bật với thiết kế hiện đại full screen. Màn hình Liquid Retina 6,1 inch tràn viền mang lại trải nghiệm xem tuyệt vời. Điện thoại được trang bị bộ vi xử lý A12 Bionic mạnh mẽ, kết hợp RAM 3GB cho hiệu năng mượt mà. Camera đơn 12MP chụp ảnh sắc nét, màu sắc chân thực. Pin dung lượng 2.942mAh cung cấp năng lượng cả ngày dài. Với giá khởi điểm 649 USD, iPhone XR trở thành lựa chọn iPhone \"không thể tốt hơn\" với màn hình lớn, thiết kế sang trọng cùng giá phải chăng.', 12000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone_xr_yellow-back_09122018_carousel.jpg.large_6_1_4.jpg', NULL, 45, 4, 19, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(28, 'iPhone XS', 'Apple', 'iPhone XS là mẫu iPhone cao cấp của Apple ra mắt năm 2018. Điện thoại nổi bật với thiết kế sang trọng gồm lưng kính cùng khung viền nhôm cao cấp. Màn hình OLED 5,8 inch tràn viền trình diễn hình ảnh sắc nét. Hiệu năng mạnh mẽ nhờ chip A12 Bionic cùng RAM 4GB xử lý mượt mọi tác vụ. Hệ thống 2 camera sau đều 12MP chụp ảnh chuyên nghiệp, chi tiết. Pin có thể sử dụng liên tục cả ngày. Với mức giá khởi điểm 999 USD, iPhone XS đem đến trải nghiệm iPhone cấp cao cùng thiết kế tinh tế nhất thời điểm bán ra.', 19000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone_xs_max_512gb_1_1.jpg', NULL, 50, 4, 30, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(29, 'iPhone 8 Plus', 'Apple', 'iPhone 8 Plus là mẫu iPhone cao cấp của Apple ra mắt năm 2017, nổi bật với màn hình rộng hơn so với iPhone 8 tiêu chuẩn. Điện thoại sở hữu thiết kế thông minh với màn hình Retina HD 5,5 inch tràn viền cùng khung viền nhôm cao cấp. iPhone 8 Plus được trang bị con chip A11 Bionic hiệu suất mạnh mẽ, kết hợp RAM 3GB cho mượt mà mọi tác vụ. Hệ thống camera kép 12MP chụp ảnh rõ nét, độ chi tiết cao. Pin dung lượng 2.675mAh có thể sử dụng liên tục cả ngày. Với mức giá khởi điểm 799 USD, iPhone 8 Plus mang đến trải nghiệm xem đa nhiệm trên màn hình rộng cùng hiệu năng ấn tượng.', 14000000, 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone8-plus-silver-select-2018_6_3.png', NULL, 57, 4, 90, '2023-09-05 23:07:51', '2023-10-25 19:19:00'),
(30, 'iPhone SE (2016)', 'Apple', 'iPhone SE (2016) là mẫu iPhone có kích thước nhỏ nhất ra mắt năm 2016 bởi Apple. Điện thoại mang thiết kế thu nhỏ giống iPhone 5/5S với màn hình Retina HD 4 inch nhỏ gọn. iPhone SE 2016 vẫn sử dụng con chip tiên tiến A9 Bionic, RAM 2GB cho hiệu năng mạnh mẽ. Camera đơn 12MP chụp ảnh rõ nét. Pin dung lượng 1.624mAh có thể sử dụng liên tục cả ngày. Với mức giá khởi điểm 399 USD, iPhone SE 2016 trở thành mẫu iPhone giá rẻ nhất phù hợp người dùng đòi hỏi hiệu năng cao trong khung giá phải chăng.', 8000000, 'https://th.bing.com/th/id/OIP.jZCgwJqpWxT1J0NZR37b-QHaHa?pid=ImgDet&rs=1', NULL, 60, 4, 72, '2023-09-05 23:07:51', '2023-09-05 23:07:51'),
(43, '1111', 'Samsung', '34', 432534, 'https://smartviets.com/template/plugins/timthumb.php?src=/upload/iPHONE15/iPHONE15PR-PRM/15PRM-white_titanium.jpg&w=770&h=770&q=80', NULL, 54, 5, 0, '2023-10-22 09:30:15', '2023-10-22 09:30:15');

-- --------------------------------------------------------

--
-- Table structure for table `producttypes`
--

CREATE TABLE `producttypes` (
  `id` int(11) NOT NULL,
  `TypeID` varchar(255) NOT NULL,
  `TypeName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `producttypes`
--

INSERT INTO `producttypes` (`id`, `TypeID`, `TypeName`, `createdAt`, `updatedAt`) VALUES
(1, 'GAMING', 'Điện thoại Gaming', '2023-10-16 01:00:10', '2023-10-16 00:23:14'),
(2, 'MOBILE', 'Điện thoại Di động', '2023-10-16 01:00:56', '2023-10-16 01:00:56');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230914151904-create-product-detail.js'),
('20230914152407-create-allcode.js'),
('20231007190542-create-customer.js'),
('20231010150000-create-users.js'),
('20231010150541-create-products.js'),
('20231010151212-create-order.js'),
('20231010151414-create-order-details.js'),
('20231010151547-create-payment.js'),
('20231010151716-create-shipping-orders.js'),
('20231010152002-create-shopping-cart.js'),
('20231010152135-create-cart-detail.js'),
('20231010152711-create-product-discount.js'),
('20231015225932-create-product-type.js'),
('20231022222347-create-notification.js');

-- --------------------------------------------------------

--
-- Table structure for table `shippingorders`
--

CREATE TABLE `shippingorders` (
  `id` int(11) NOT NULL,
  `OrderID` int(11) DEFAULT NULL,
  `ExpectedDate` datetime DEFAULT NULL,
  `ShippingMethod` varchar(255) DEFAULT NULL,
  `ShippingStatus` varchar(255) DEFAULT NULL,
  `ShippingAddress` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shippingorders`
--

INSERT INTO `shippingorders` (`id`, `OrderID`, `ExpectedDate`, `ShippingMethod`, `ShippingStatus`, `ShippingAddress`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', 'dfgdfg', '2023-10-13 18:36:22', '2023-10-13 18:36:22'),
(2, 2, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', '163/8 thành thái', '2023-10-13 19:06:44', '2023-10-13 19:06:44'),
(3, 3, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', 'full street address', '2023-10-13 20:04:21', '2023-10-13 20:04:21'),
(4, 4, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', 'full street address', '2023-10-13 20:05:48', '2023-10-13 20:05:48'),
(5, 5, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', 'dhdfhfdhdfhhhhhhhhhhhhhhhhhhhhhh', '2023-10-13 20:30:58', '2023-10-13 20:30:58'),
(6, 6, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', 'sdgsdssssssssssssss', '2023-10-14 09:00:43', '2023-10-14 09:00:43'),
(7, 7, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', '163/8 thành thái', '2023-10-14 09:52:47', '2023-10-14 09:52:47'),
(8, 8, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', '163/8 thành thái', '2023-10-14 09:54:30', '2023-10-14 09:54:30'),
(9, 9, '2023-10-18 17:00:00', 'HomeDel', 'Chờ lấy hàng', '163/8 thành thái', '2023-10-14 09:59:38', '2023-10-14 09:59:38');

-- --------------------------------------------------------

--
-- Table structure for table `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `id` int(11) NOT NULL,
  `UserID` varchar(255) DEFAULT NULL,
  `TotalPrice` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shoppingcarts`
--

INSERT INTO `shoppingcarts` (`id`, `UserID`, `TotalPrice`, `createdAt`, `updatedAt`) VALUES
(2, '2', 18860000, '2023-10-12 10:25:32', '2023-10-13 16:12:18'),
(16, '1697108160562', 25360000, '2023-10-12 10:59:46', '2023-10-16 11:10:33'),
(17, '1697143840006', 22000000, '2023-10-12 20:50:40', '2023-10-25 11:28:47'),
(18, '1', 5000000, '2023-10-13 16:09:58', '2023-10-16 08:42:49'),
(19, '4', 15320000, '2023-10-13 17:51:27', '2023-10-25 20:10:48'),
(20, '5', 6800000, '2023-10-13 18:16:11', '2023-10-13 18:17:03'),
(21, '1697446133527', 5040000, '2023-10-16 08:48:53', '2023-10-16 17:16:28'),
(22, '1697461733855', 20400000, '2023-10-16 13:08:53', '2023-10-16 13:30:22'),
(23, '1697464304736', 0, '2023-10-16 13:51:44', '2023-10-16 13:51:44'),
(24, '1697476599768', 0, '2023-10-16 17:16:39', '2023-10-16 17:16:39'),
(25, '1697886177983', 0, '2023-10-21 11:02:57', '2023-10-21 11:02:57'),
(26, '1697887115784', 0, '2023-10-21 11:18:35', '2023-10-21 11:18:35'),
(27, '1698078318124', 0, '2023-10-23 16:25:18', '2023-10-23 16:25:18'),
(28, '1698078356587', 0, '2023-10-23 16:25:56', '2023-10-23 16:25:56'),
(29, '1698078390055', 0, '2023-10-23 16:26:30', '2023-10-23 16:26:30'),
(30, '1698079739932', 0, '2023-10-23 16:48:59', '2023-10-23 16:48:59'),
(31, '1698079753713', 0, '2023-10-23 16:49:13', '2023-10-23 16:49:13'),
(32, '1698079771917', 0, '2023-10-23 16:49:31', '2023-10-23 16:49:31'),
(33, '1698080493837', 0, '2023-10-23 17:01:33', '2023-10-23 17:01:33'),
(34, '1698080595635', 0, '2023-10-23 17:03:15', '2023-10-23 17:03:15'),
(35, '1698081984887', 0, '2023-10-23 17:26:24', '2023-10-23 17:26:24'),
(36, '1698082241679', 0, '2023-10-23 17:30:41', '2023-10-23 17:30:41'),
(37, '1698084069796', 0, '2023-10-23 18:01:09', '2023-10-23 18:01:09'),
(38, '1698138347530', 420000, '2023-10-24 09:05:47', '2023-10-24 11:00:34'),
(39, '6', 0, '2023-10-24 09:14:22', '2023-10-24 09:14:22'),
(40, '1698139232955', 0, '2023-10-24 09:20:32', '2023-10-24 09:20:32'),
(41, '7', 0, '2023-10-24 10:04:51', '2023-10-24 10:04:51'),
(42, '1698260830313', 0, '2023-10-25 19:07:10', '2023-10-25 19:07:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `RoleKeyMap` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Name`, `Email`, `Password`, `RoleKeyMap`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', '$2a$10$hLK1QaXqCIWhW7/y9U7RWem0lbqNEkxPKNB/.iAHVtXq2Ygb7la9C', 'ADMIN', '2023-10-12 11:20:05', '2023-10-12 11:20:05'),
(3, 'Nguyễn Trúc', 'a@gmail.com', '$2a$10$hLK1QaXqCIWhW7/y9U7RWem0lbqNEkxPKNB/.iAHVtXq2Ygb7la9C', 'USER', '2023-10-13 17:42:56', '2023-10-13 17:42:56'),
(4, 'Beverly Hills', 'b@gmail.com', '$2a$10$hLK1QaXqCIWhW7/y9U7RWem0lbqNEkxPKNB/.iAHVtXq2Ygb7la9C', 'USER', '2023-10-13 17:51:27', '2023-10-13 17:51:27'),
(5, 'Bùi Tấn Hải', 'c@gmail.com', '$2a$10$hLK1QaXqCIWhW7/y9U7RWem0lbqNEkxPKNB/.iAHVtXq2Ygb7la9C', 'USER', '2023-10-13 18:16:11', '2023-10-13 18:16:11'),
(7, 'Bùi Tấn Hải', 'celera5238@unbiex.com', '$2a$10$sUolXXy3bpnS9cGPZ5HDcORvj.x5nI9QsufnTAwZfHTUGrx6Y1Z8W', 'USER', '2023-10-24 10:04:51', '2023-10-24 10:04:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allcodes`
--
ALTER TABLE `allcodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartdetails`
--
ALTER TABLE `cartdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productdetails`
--
ALTER TABLE `productdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productdiscounts`
--
ALTER TABLE `productdiscounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producttypes`
--
ALTER TABLE `producttypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `shippingorders`
--
ALTER TABLE `shippingorders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allcodes`
--
ALTER TABLE `allcodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `cartdetails`
--
ALTER TABLE `cartdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `productdetails`
--
ALTER TABLE `productdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `productdiscounts`
--
ALTER TABLE `productdiscounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `producttypes`
--
ALTER TABLE `producttypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `shippingorders`
--
ALTER TABLE `shippingorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
