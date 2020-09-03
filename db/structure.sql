CREATE DATABASE  IF NOT EXISTS `e-commerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `e-commerce`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: e-commerce
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(20) NOT NULL,
  `precio` decimal(8,2) NOT NULL,
  `cantidad` int(5) NOT NULL,
  `resumen` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `temporada` varchar(45) NOT NULL,
  `talle` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `categoria` varchar(45) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `id` (`id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'prueba',2225.00,0,'prueba','mixto','producto-1593984084290.jpg','','Masculino','Invierno','L','Amarillo',NULL,NULL,NULL,''),(3,'Gap SA',50.00,476,'Remera de invierno de tela ','Remera de invierno de tela para mujer importada','','Remera','Femenino','Invierno','L','Amarillo',NULL,NULL,NULL,''),(4,'Lacoste SA',55.00,20,'Camisa Amarilla de lana','Camisa para usar en Invierno amarilla','','Camisa manda larga','Femenino','Invierno','L','Amarillo',NULL,NULL,NULL,'Mujer'),(5,'Lacoste SA',545.00,55,'Camisa Amarilla de lana','lalalalalalalalalalalalalalalalalallalalalalalalala','','Camisa','Masculino','Invierno','L','Amarillo',NULL,NULL,NULL,''),(6,'Prueba',545.00,52,'prueba','lalalalalalalalalalalalalalalalalallalalalalalalala','','Prueba','Femenino','Invierno','L','Amarillo',NULL,NULL,NULL,'Mujer');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `dni` char(8) DEFAULT NULL,
  `telefono` int(12) DEFAULT NULL,
  `calle` varchar(30) DEFAULT NULL,
  `altura` int(11) DEFAULT NULL,
  `departamento` varchar(10) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `provincia` varchar(30) DEFAULT NULL,
  `cp` smallint(6) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `titularTarjeta` varchar(45) DEFAULT NULL,
  `dniTitular` char(8) DEFAULT NULL,
  `tarjeta` varchar(20) DEFAULT NULL,
  `nroTarjeta` int(16) DEFAULT NULL,
  `vencimiento` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `DNI_UNIQUE` (`dni`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Francisco','Vallecillo','fran_valle91@hotmail.com','$2b$10$75KYWYsyxii0VAvq4HnvIek4YErhU/HO7HRV6aCQgK3mn9ohwD50u','','avatar-1598896802682.jpg','36528112',1568400203,'Cuba',3532,NULL,'CABA','Buenos Aires',1429,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Ignacio','Vallecillo','nacho@hotmail.com','$2b$10$DRhl47h2zyhTA2bGhYeKCuHuoHWtPAVjAx5Jw8A4adnvdrtBBvniy',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Federico','Vallecillo','federico@hotmail.com','$2b$10$YLHZ4j7rGUoNh3YBoKq0oeCfgFe1iokX/vO34meRHUBa9eLh/H.kK','Federico','avatar-1598973984368.jpg','36363555',15898654,'Mendoza',2525,NULL,'Caba','Provincia de Buenos Aires',1456,NULL,NULL,NULL,'Federico Vallecillo','36363555','Visa',2147483647,'2020-12');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-01 18:20:54
