-- MySQL dump 10.13  Distrib 8.0.15, for Linux (x86_64)
--
-- Host: localhost    Database: e-commerce
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(20) NOT NULL,
  `precio` decimal(8,2) NOT NULL,
  `cantidad` int NOT NULL,
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
  `id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `id` (`id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'aaaaaa',222.00,10,'ddddd','mixto','producto-1593984084290.jpg','','Femenino','Invierno','L','Amarillo',NULL,NULL,NULL),(2,'prueba',2225.00,10,'prueba','mixto','producto-1593984084290.jpg','','Masculino','Invierno','L','Amarillo',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `dni` char(8) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  `calle` varchar(30) DEFAULT NULL,
  `altura` int DEFAULT NULL,
  `departamento` varchar(10) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `provincia` varchar(30) DEFAULT NULL,
  `cp` smallint DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `titularTarjeta` varchar(45) DEFAULT NULL,
  `dniTitular` char(8) DEFAULT NULL,
  `tarjeta` varchar(20) DEFAULT NULL,
  `nroTarjeta` int DEFAULT NULL,
  `vencimiento` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `DNI_UNIQUE` (`dni`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Fernando','Fleck','dfg@gmail.com','$2b$10$ctbv7rC072FdLL5O.WvRD.6bPM2sQzIjxLPKzEcg9CtUA.e8XvX5q',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Fernando','Fleck','tyu@gmail.com','$2b$10$wLiQWoXua/stOeiRHrSSUeYzzAYkyJnW6uH1l61GkUl2261hTQZ/y','fernando','avatar-1597333638574.jpg','12342134',1234324234,'qwe',123,NULL,'sdfsdf','adsfa',234,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Fernando','Fleck','cvb@gmail.com','$2b$10$VtPb8nuM4I9pV9otWoqkJebUypcHzOylSw8fE//upGkMMD4hDi8ka',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Fernando','Fleck','sdf@gmail.com','$2b$10$yKhHo/01AGq2uzVBnhTA..1bvK99DpBl2qIEjLHA4zsJt1PyQewT2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'Fernando','Fleck','ghj@gmail.com','$2b$10$.j6G6PJLAKXjJycNiJvxA.XQG2/G1/ynwtW0tWjjwX5NPdsnrop96',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'Fernando','Fleck','uio@gmail.com','$2b$10$SQDjBqSbF02Q2UU2bObkRes2CnPg3t7iNwyYdpx2Ym3B/u3Rddv9O',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'Fernando','Fleck','567@gmail.com','$2b$10$361BZEpH5pgcZulrsM0s3ulOEdgRKrR45hwxzNvXmVM/pkbSoviFO',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'Fernando','Fleck','fernafleck@gmail.com','$2b$10$C1BCEEyRuwf0e.6LOarSMOwX1QBI.XhsfSOmxnutoylZd2ISEEgE2','fernafleck','avatar-1597347957596.jpg','33212222',1123232323,'triunvirato',123,NULL,'caba','buenos aires',1313,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2020-08-15 17:52:20
