-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 11 nov 2025 kl 23:56
-- Serverversion: 10.4.28-MariaDB
-- PHP-version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `din_restaurang_db`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `errors`
--

CREATE TABLE `errors` (
  `id` int(11) NOT NULL,
  `errorId` int(11) NOT NULL,
  `method` varchar(191) NOT NULL,
  `message` varchar(191) DEFAULT NULL,
  `located` varchar(191) NOT NULL,
  `time` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellstruktur `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `sorts` varchar(191) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(191) NOT NULL,
  `included` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellstruktur `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `method` varchar(191) NOT NULL,
  `message` varchar(191) DEFAULT NULL,
  `located` varchar(191) NOT NULL,
  `time` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index för tabell `errors`
--
ALTER TABLE `errors`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `errors`
--
ALTER TABLE `errors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT för tabell `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT för tabell `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=712;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
