-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cafe_en_tu_taza_pfs
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add farm',7,'add_farm'),(26,'Can change farm',7,'change_farm'),(27,'Can delete farm',7,'delete_farm'),(28,'Can view farm',7,'view_farm'),(29,'Can add farm post',8,'add_farmpost'),(30,'Can change farm post',8,'change_farmpost'),(31,'Can delete farm post',8,'delete_farmpost'),(32,'Can view farm post',8,'view_farmpost'),(33,'Can add order',9,'add_order'),(34,'Can change order',9,'change_order'),(35,'Can delete order',9,'delete_order'),(36,'Can view order',9,'view_order'),(37,'Can add order user',10,'add_orderuser'),(38,'Can change order user',10,'change_orderuser'),(39,'Can delete order user',10,'delete_orderuser'),(40,'Can view order user',10,'view_orderuser'),(41,'Can add post',11,'add_post'),(42,'Can change post',11,'change_post'),(43,'Can delete post',11,'delete_post'),(44,'Can view post',11,'view_post'),(45,'Can add producer',12,'add_producer'),(46,'Can change producer',12,'change_producer'),(47,'Can delete producer',12,'delete_producer'),(48,'Can view producer',12,'view_producer'),(49,'Can add product',13,'add_product'),(50,'Can change product',13,'change_product'),(51,'Can delete product',13,'delete_product'),(52,'Can view product',13,'view_product'),(53,'Can add product farm',14,'add_productfarm'),(54,'Can change product farm',14,'change_productfarm'),(55,'Can delete product farm',14,'delete_productfarm'),(56,'Can view product farm',14,'view_productfarm'),(57,'Can add user product',15,'add_userproduct'),(58,'Can change user product',15,'change_userproduct'),(59,'Can delete user product',15,'delete_userproduct'),(60,'Can view user product',15,'view_userproduct');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$1000000$Uk3ZYVcbtKU4L2w0FGpz2L$Rhu2hzHn7pZbXYpRjhaY88e7Ceq5zcziwUPQfX4fL4Q=',NULL,1,'mary','','','miricruz1570@gmail.com',1,1,'2026-06-07 03:08:28.980940'),(2,'pbkdf2_sha256$1000000$9K7cfC5HlDKN2W4Lz1mkxv$1o1XNfI6JyFi62hVn3EC6Jgom4sGynyf9YAvUd+Id1Y=','2026-06-07 03:11:10.805496',1,'usuario','','','mari@email.com',1,1,'2026-06-07 03:09:24.452647');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(7,'pfs_cafe_en_tu_taza','farm'),(8,'pfs_cafe_en_tu_taza','farmpost'),(9,'pfs_cafe_en_tu_taza','order'),(10,'pfs_cafe_en_tu_taza','orderuser'),(11,'pfs_cafe_en_tu_taza','post'),(12,'pfs_cafe_en_tu_taza','producer'),(13,'pfs_cafe_en_tu_taza','product'),(14,'pfs_cafe_en_tu_taza','productfarm'),(15,'pfs_cafe_en_tu_taza','userproduct'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2026-06-06 23:15:42.894585'),(2,'auth','0001_initial','2026-06-06 23:15:43.917551'),(3,'admin','0001_initial','2026-06-06 23:15:44.112144'),(4,'admin','0002_logentry_remove_auto_add','2026-06-06 23:15:44.129333'),(5,'admin','0003_logentry_add_action_flag_choices','2026-06-06 23:15:44.148966'),(6,'contenttypes','0002_remove_content_type_name','2026-06-06 23:15:44.330841'),(7,'auth','0002_alter_permission_name_max_length','2026-06-06 23:15:44.424357'),(8,'auth','0003_alter_user_email_max_length','2026-06-06 23:15:44.445983'),(9,'auth','0004_alter_user_username_opts','2026-06-06 23:15:44.453318'),(10,'auth','0005_alter_user_last_login_null','2026-06-06 23:15:44.528627'),(11,'auth','0006_require_contenttypes_0002','2026-06-06 23:15:44.533389'),(12,'auth','0007_alter_validators_add_error_messages','2026-06-06 23:15:44.543313'),(13,'auth','0008_alter_user_username_max_length','2026-06-06 23:15:44.654407'),(14,'auth','0009_alter_user_last_name_max_length','2026-06-06 23:15:44.764562'),(15,'auth','0010_alter_group_name_max_length','2026-06-06 23:15:44.788063'),(16,'auth','0011_update_proxy_permissions','2026-06-06 23:15:44.800082'),(17,'auth','0012_alter_user_first_name_max_length','2026-06-06 23:15:44.893687'),(18,'pfs_cafe_en_tu_taza','0001_initial','2026-06-06 23:15:44.951510'),(19,'pfs_cafe_en_tu_taza','0002_farm_farmpost_order_orderuser_post_producer_product_and_more','2026-06-06 23:15:46.236676'),(20,'sessions','0001_initial','2026-06-06 23:15:46.296717');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('cflql7f0ef2bv8c3qtvodgi2uq76uyzi','.eJxVjEEOwiAQAP-yZ0PoQgv06N03ELa7SNWUpLQn499Nkx70OjOZN8S0byXuTdY4M4yAcPlllKanLIfgR1ruVU112daZ1JGo0zZ1qyyv69n-DUpqBUbQA5Ikj4G9dkFTRsqWerKpk8714gOJFXSYDQrbkO3EmZgM68EIevh8AfIBOJQ:1wW3uo:Cd8xDZhSb5qsLQzU7ExORpxr-dmBOfSH0BOKajAle9A','2026-06-21 03:11:10.812545');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_farm`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_farm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_farm` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `ubicacion` varchar(20) NOT NULL,
  `extension` int NOT NULL,
  `producer_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ubicacion` (`ubicacion`),
  KEY `pfs_cafe_en_tu_taza__producer_id_1c7a37dc_fk_pfs_cafe_` (`producer_id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__producer_id_1c7a37dc_fk_pfs_cafe_` FOREIGN KEY (`producer_id`) REFERENCES `pfs_cafe_en_tu_taza_producer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_farm`
--

LOCK TABLES `pfs_cafe_en_tu_taza_farm` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_farm` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_farm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_farmpost`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_farmpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_farmpost` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `farm_id` bigint NOT NULL,
  `post_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pfs_cafe_en_tu_taza__post_id_c70beeaa_fk_pfs_cafe_` (`post_id`),
  KEY `pfs_cafe_en_tu_taza__farm_id_611fcf45_fk_pfs_cafe_` (`farm_id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__farm_id_611fcf45_fk_pfs_cafe_` FOREIGN KEY (`farm_id`) REFERENCES `pfs_cafe_en_tu_taza_farm` (`id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__post_id_c70beeaa_fk_pfs_cafe_` FOREIGN KEY (`post_id`) REFERENCES `pfs_cafe_en_tu_taza_post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_farmpost`
--

LOCK TABLES `pfs_cafe_en_tu_taza_farmpost` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_farmpost` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_farmpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_order`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `emisor` varchar(45) NOT NULL,
  `receptor` varchar(45) NOT NULL,
  `numero_de_factura` int NOT NULL,
  `fecha` date NOT NULL,
  `forma_de_pago` varchar(30) NOT NULL,
  `descripcion` varchar(30) NOT NULL,
  `cantidad` int NOT NULL,
  `precio_unitario` int NOT NULL,
  `importe_total` int NOT NULL,
  `descuentos` varchar(5) DEFAULT NULL,
  `impuestos` int NOT NULL,
  `cantidad_adeudada` int NOT NULL,
  `condiciones_de_pago` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numero_de_factura` (`numero_de_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_order`
--

LOCK TABLES `pfs_cafe_en_tu_taza_order` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_orderuser`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_orderuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_orderuser` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` bigint NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pfs_cafe_en_tu_taza__order_id_0855f69f_fk_pfs_cafe_` (`order_id`),
  KEY `pfs_cafe_en_tu_taza_orderuser_user_id_8e1d9e64_fk_auth_user_id` (`user_id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__order_id_0855f69f_fk_pfs_cafe_` FOREIGN KEY (`order_id`) REFERENCES `pfs_cafe_en_tu_taza_order` (`id`),
  CONSTRAINT `pfs_cafe_en_tu_taza_orderuser_user_id_8e1d9e64_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_orderuser`
--

LOCK TABLES `pfs_cafe_en_tu_taza_orderuser` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_orderuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_orderuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_post`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_post` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `texto` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_post`
--

LOCK TABLES `pfs_cafe_en_tu_taza_post` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_producer`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_producer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_producer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `telefono` int NOT NULL,
  `cedula` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `telefono` (`telefono`),
  UNIQUE KEY `cedula` (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_producer`
--

LOCK TABLES `pfs_cafe_en_tu_taza_producer` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_producer` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_producer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_product`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `precio` int NOT NULL,
  `inventario` int NOT NULL,
  `order_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pfs_cafe_en_tu_taza__order_id_26b7b371_fk_pfs_cafe_` (`order_id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__order_id_26b7b371_fk_pfs_cafe_` FOREIGN KEY (`order_id`) REFERENCES `pfs_cafe_en_tu_taza_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_product`
--

LOCK TABLES `pfs_cafe_en_tu_taza_product` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_productfarm`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_productfarm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_productfarm` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `farm_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pfs_cafe_en_tu_taza__farm_id_457acb1b_fk_pfs_cafe_` (`farm_id`),
  KEY `pfs_cafe_en_tu_taza__product_id_46309fff_fk_pfs_cafe_` (`product_id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__farm_id_457acb1b_fk_pfs_cafe_` FOREIGN KEY (`farm_id`) REFERENCES `pfs_cafe_en_tu_taza_farm` (`id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__product_id_46309fff_fk_pfs_cafe_` FOREIGN KEY (`product_id`) REFERENCES `pfs_cafe_en_tu_taza_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_productfarm`
--

LOCK TABLES `pfs_cafe_en_tu_taza_productfarm` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_productfarm` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_productfarm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfs_cafe_en_tu_taza_userproduct`
--

DROP TABLE IF EXISTS `pfs_cafe_en_tu_taza_userproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfs_cafe_en_tu_taza_userproduct` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_id` bigint NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pfs_cafe_en_tu_taza__product_id_66d14273_fk_pfs_cafe_` (`product_id`),
  KEY `pfs_cafe_en_tu_taza_userproduct_user_id_39c9acb9_fk_auth_user_id` (`user_id`),
  CONSTRAINT `pfs_cafe_en_tu_taza__product_id_66d14273_fk_pfs_cafe_` FOREIGN KEY (`product_id`) REFERENCES `pfs_cafe_en_tu_taza_product` (`id`),
  CONSTRAINT `pfs_cafe_en_tu_taza_userproduct_user_id_39c9acb9_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfs_cafe_en_tu_taza_userproduct`
--

LOCK TABLES `pfs_cafe_en_tu_taza_userproduct` WRITE;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_userproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `pfs_cafe_en_tu_taza_userproduct` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-06 21:19:08
