-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-09-2022 a las 00:12:25
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nexttv`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditos`
--

CREATE TABLE `creditos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `localidad` varchar(100) DEFAULT NULL,
  `descripcion` longtext DEFAULT NULL,
  `posicion` int(11) DEFAULT NULL,
  `bloque` int(11) DEFAULT NULL,
  `emision_id` int(11) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  `programa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `creditos`
--

INSERT INTO `creditos` (`id`, `nombre`, `cargo`, `fecha`, `localidad`, `descripcion`, `posicion`, `bloque`, `emision_id`, `estado_id`, `programa_id`) VALUES
(56, 'matias montoto', 'intendente', '2022-03-28', 'huerta rande', 'rebajas en alquileres                ', 1, 1, 23, 2, 1),
(57, 'javier dieminger', 'intendente', '2022-03-22', 'la falda ', 'rebajas en naftas                ', 2, 1, 26, 2, 1),
(58, 'DR. FABIO MENITTE', 'SEC. DE SALUD DE LA FALDA', '2022-04-10', 'LA FALDA ', 'NUEVA APARATOLOGIA EN EL HOSPITAL MODULAR DE LA LOCALIDAD / DISMINUYEN LOS CASOS DE COVID ', 1, 1, 26, 2, 1),
(60, 'JORGE CASERIO', 'INTENDENTE ', '2022-04-18', 'VALLE HERMOSO', 'VALLE HERMOSO FESTEJO EL FIN DE SEMANA DE PASCUAS                ', 3, 3, NULL, 1, 1),
(61, 'juan carlos zogbi', 'ambiente la falda', '2022-04-18', 'la falda ', 'limpieza del lago de los patos', 2, 1, NULL, 1, 1),
(64, 'JORGE CASERIO', 'INTENDENTE', '2022-04-19', 'VALLE HERMOSO', 'UNA NUEVA ARGENTINA CRECE PARA BIEN', 1, 1, NULL, 1, 2),
(65, 'j dieminger', 'intendente', '2022-07-23', 'LA FALDA', 'corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion corrupcion ', NULL, NULL, NULL, 1, 1),
(66, 'dieminger', 'intendente ', 'Invalid date', 'la falda ', '                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem bhbg\r\n                ', NULL, NULL, NULL, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emisiones`
--

CREATE TABLE `emisiones` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `programa_id` int(11) NOT NULL,
  `estado_id` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `emisiones`
--

INSERT INTO `emisiones` (`id`, `fecha`, `programa_id`, `estado_id`) VALUES
(23, '2022-03-28', 1, 2),
(25, '2022-04-10', 2, 1),
(26, '2022-04-15', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `estado` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id`, `estado`) VALUES
(1, 'No emitido'),
(2, 'Emitido');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programas`
--

CREATE TABLE `programas` (
  `id` int(11) NOT NULL,
  `programa` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `programas`
--

INSERT INTO `programas` (`id`, `programa`) VALUES
(1, 'Informe 4'),
(2, 'Tal Cual'),
(3, 'Vivo el Jueves');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `creditos`
--
ALTER TABLE `creditos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_estado` (`estado_id`),
  ADD KEY `fk_programas` (`programa_id`),
  ADD KEY `fk_emision` (`emision_id`);

--
-- Indices de la tabla `emisiones`
--
ALTER TABLE `emisiones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_programa` (`programa_id`),
  ADD KEY `fk_publicado` (`estado_id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `programas`
--
ALTER TABLE `programas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `creditos`
--
ALTER TABLE `creditos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `emisiones`
--
ALTER TABLE `emisiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `programas`
--
ALTER TABLE `programas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `creditos`
--
ALTER TABLE `creditos`
  ADD CONSTRAINT `fk_emision` FOREIGN KEY (`emision_id`) REFERENCES `emisiones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_estado` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_programas` FOREIGN KEY (`programa_id`) REFERENCES `programas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `emisiones`
--
ALTER TABLE `emisiones`
  ADD CONSTRAINT `fk_programa` FOREIGN KEY (`programa_id`) REFERENCES `programas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_publicado` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
