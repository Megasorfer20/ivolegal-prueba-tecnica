-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 20, 2024 at 09:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cobro_facturas`
--

-- --------------------------------------------------------

--
-- Table structure for table `abonos`
--

CREATE TABLE `abonos` (
  `id_abono` int(11) NOT NULL,
  `id_acreedor` int(11) DEFAULT NULL,
  `fecha_abono` date DEFAULT NULL,
  `valor_abono` int(11) DEFAULT NULL,
  `id_deudor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `abonos`
--

INSERT INTO `abonos` (`id_abono`, `id_acreedor`, `fecha_abono`, `valor_abono`, `id_deudor`) VALUES
(1, 1, '2024-02-20', 200000, 1),
(2, 1, '2024-05-30', 1000000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `acreedores`
--

CREATE TABLE `acreedores` (
  `id_acreedor` int(11) NOT NULL,
  `Interviniente_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `acreedores`
--

INSERT INTO `acreedores` (`id_acreedor`, `Interviniente_id`) VALUES
(1, '6');

-- --------------------------------------------------------

--
-- Table structure for table `deudores`
--

CREATE TABLE `deudores` (
  `id_deudor` int(11) NOT NULL DEFAULT 0,
  `Interviniente_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `deudores`
--

INSERT INTO `deudores` (`id_deudor`, `Interviniente_id`) VALUES
(1, '57');

-- --------------------------------------------------------

--
-- Table structure for table `facturas`
--

CREATE TABLE `facturas` (
  `id_facturas` int(11) NOT NULL,
  `cufe` text DEFAULT NULL,
  `numero_factura` varchar(150) DEFAULT NULL,
  `fecha_emision` date DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `fecha_remision_factura` date DEFAULT NULL,
  `id_acreedor` int(11) NOT NULL,
  `id_deudor` int(11) NOT NULL,
  `fecha_recepcion_factura` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `facturas`
--

INSERT INTO `facturas` (`id_facturas`, `cufe`, `numero_factura`, `fecha_emision`, `fecha_vencimiento`, `fecha_remision_factura`, `id_acreedor`, `id_deudor`, `fecha_recepcion_factura`) VALUES
(1, '790f75e8f01ddb2d78f6b753f98da60075cf932c68c5570df3f4a1e0e730a4eb763514b2545d8df327a92f3c8bf763a3', '1928', '2024-01-01', '2024-01-04', '2024-01-02', 1, 1, '2024-01-03'),
(2, 'fake cufe', '1929', '2024-02-01', '2024-02-04', '2024-02-02', 1, 1, '2024-02-03'),
(3, 'fake cufe 2', '1930', '2024-03-01', '2024-03-04', '2024-03-02', 1, 1, '2024-03-03');

-- --------------------------------------------------------

--
-- Table structure for table `mercancias`
--

CREATE TABLE `mercancias` (
  `id_mercancia` int(11) NOT NULL,
  `id_facturas` int(11) NOT NULL,
  `fecha_recepcion_mercancia` date DEFAULT NULL,
  `url_soporte_recepcion_mercancia` text DEFAULT NULL,
  `concepto` text NOT NULL,
  `valor` varchar(300) DEFAULT NULL,
  `IVA` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mercancias`
--

INSERT INTO `mercancias` (`id_mercancia`, `id_facturas`, `fecha_recepcion_mercancia`, `url_soporte_recepcion_mercancia`, `concepto`, `valor`, `IVA`) VALUES
(1, 1, '2024-02-01', NULL, '2 carrotancados de luca', '55000', 19),
(2, 1, '2024-02-01', NULL, '3 volquetadas de  de guita', '222000', 19),
(3, 2, '2024-02-03', 'url falso', 'GLENN GOULD', '450000', 19),
(4, 2, NULL, 'url falso2', 'Vladimir Horowitz', '500000', 19),
(5, 3, '2024-06-18', 'fake url', 'Mozart Piano Sonada No. 11 in A major', '1880000', 19);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abonos`
--
ALTER TABLE `abonos`
  ADD PRIMARY KEY (`id_abono`),
  ADD KEY `id_apartamento` (`id_acreedor`);

--
-- Indexes for table `acreedores`
--
ALTER TABLE `acreedores`
  ADD PRIMARY KEY (`id_acreedor`),
  ADD KEY `Interviniente_id` (`Interviniente_id`);

--
-- Indexes for table `deudores`
--
ALTER TABLE `deudores`
  ADD PRIMARY KEY (`id_deudor`);

--
-- Indexes for table `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id_facturas`),
  ADD KEY `id_acreedor` (`id_acreedor`),
  ADD KEY `id_deudor` (`id_deudor`);

--
-- Indexes for table `mercancias`
--
ALTER TABLE `mercancias`
  ADD PRIMARY KEY (`id_mercancia`),
  ADD KEY `id_facturas` (`id_facturas`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abonos`
--
ALTER TABLE `abonos`
  MODIFY `id_abono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id_facturas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mercancias`
--
ALTER TABLE `mercancias`
  MODIFY `id_mercancia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`id_acreedor`) REFERENCES `acreedores` (`id_acreedor`),
  ADD CONSTRAINT `facturas_ibfk_2` FOREIGN KEY (`id_deudor`) REFERENCES `deudores` (`id_deudor`);

--
-- Constraints for table `mercancias`
--
ALTER TABLE `mercancias`
  ADD CONSTRAINT `mercancias_ibfk_1` FOREIGN KEY (`id_facturas`) REFERENCES `facturas` (`id_facturas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
