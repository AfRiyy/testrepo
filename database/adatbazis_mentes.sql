-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Ápr 07. 18:23
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `shelter`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `adoptions`
--

CREATE TABLE `adoptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `pets_id` bigint(20) UNSIGNED NOT NULL,
  `users_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `breeds`
--

CREATE TABLE `breeds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bname` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `species_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `breeds`
--

INSERT INTO `breeds` (`id`, `bname`, `species_id`, `created_at`, `updated_at`) VALUES
(2, 'Block', 1, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(3, 'Ratke', 1, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(4, 'Osinski', 2, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(5, 'Thompson', 1, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(6, 'Waelchi', 2, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(7, 'Mayer', 1, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(8, 'Jast', 2, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(9, 'Larson', 1, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(10, 'Reichel', 2, '2022-03-21 19:54:12', '2022-03-21 19:54:12'),
(11, 'Fay', 2, '2022-03-21 19:54:12', '2022-03-21 19:54:12');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_01_25_153653_create_species_table', 1),
(6, '2022_01_25_153704_create_breeds_table', 1),
(7, '2022_01_25_153799_create_shelters_table', 1),
(8, '2022_01_25_153800_create_pets_table', 1),
(9, '2022_01_25_153801_create_adoptions_table', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'adoptme', 'db56d16cf46fb453428fff6166037afe3c5f865b7dab55d6337dd7cc4350b125', '[\"*\"]', '2022-03-30 17:19:05', '2022-03-30 17:06:29', '2022-03-30 17:19:05');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `pets`
--

CREATE TABLE `pets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `breeds_id` bigint(20) UNSIGNED NOT NULL,
  `age` int(11) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `adopted` tinyint(1) NOT NULL,
  `shelters_id` bigint(20) UNSIGNED NOT NULL,
  `picture_path` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `neutered` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `pets`
--

INSERT INTO `pets` (`id`, `name`, `breeds_id`, `age`, `gender`, `adopted`, `shelters_id`, `picture_path`, `neutered`, `created_at`, `updated_at`) VALUES
(2, 'Juston', 10, 3, 1, 0, 9, '/images/pet/pet.jpg', 0, '2022-03-21 20:18:54', '2022-03-21 20:18:54'),
(3, 'Mattie', 10, 4, 0, 0, 5, '/images/pet/pet.jpg', 0, '2022-03-21 20:18:54', '2022-03-21 20:18:54'),
(4, 'Lucienne', 10, 9, 1, 0, 1, '/images/pet/pet.jpg', 1, '2022-03-21 20:18:55', '2022-03-21 20:18:55'),
(5, 'Myrtie', 2, 2, 1, 1, 1, '/images/pet/pet.jpg', 0, '2022-03-21 20:18:55', '2022-03-21 20:18:55'),
(6, 'Roscoe', 3, 9, 1, 1, 2, '/images/pet/pet.jpg', 0, '2022-03-21 20:18:55', '2022-03-21 20:18:55'),
(7, 'Maymie', 4, 13, 0, 1, 9, '/images/pet/pet.jpg', 1, '2022-03-21 20:18:55', '2022-03-21 20:18:55'),
(8, 'Alvena', 8, 7, 1, 0, 3, '/images/pet/pet.jpg', 0, '2022-03-21 20:18:55', '2022-03-21 20:18:55'),
(9, 'Mandy', 5, 6, 0, 0, 2, '/images/pet/pet.jpg', 1, '2022-03-21 20:18:55', '2022-03-21 20:18:55'),
(12, 'Teszt1', 2, 6, 1, 1, 1, 'images/Teszt1/Teszt1.jpg', 1, '2022-03-30 17:10:23', '2022-03-30 17:10:23'),
(13, 'Teszt10', 2, 6, 1, 1, 1, 'images/Teszt10/Teszt10.jpg', 1, '2022-03-30 17:13:30', '2022-03-30 17:13:30'),
(14, 'Teszt', 2, 6, 1, 1, 1, 'images/Teszt/Teszt.jpg', 1, '2022-03-30 17:19:05', '2022-03-30 17:19:05');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shelters`
--

CREATE TABLE `shelters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `shelter_name` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `shelter_zip` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT '',
  `shelter_city` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT '',
  `shelter_street_address` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT '',
  `shelter_phone` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT '',
  `shelter_website` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT '',
  `shelter_facebook` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `shelters`
--

INSERT INTO `shelters` (`id`, `shelter_name`, `shelter_zip`, `shelter_city`, `shelter_street_address`, `shelter_phone`, `shelter_website`, `shelter_facebook`, `created_at`, `updated_at`) VALUES
(1, 'Boyle, Bashirian and Mosciski', '319', 'Hajdúböszörmény', '7021 Várpalota, Vincze határút 33. 51. emelet', '+36-41-991-8924', 'http://www.christiansen.com/', 'facebook.com/vitae', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(2, 'Kautzer Group', '2073', 'Zirc', '2112 Hajdúnánás, Szekeres lejáró 7.', '06-35-941-2358', 'http://dooley.com/et-tempore-eaque-amet-voluptas-illo-porro.html', 'facebook.com/incidunt', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(3, 'Renner, Lemke and Schmeler', '8939', 'Pásztó', '0736 Kistelek, János lejáró 28.', '06-10-177-3489', 'http://gerhold.com/delectus-similique-sapiente-accusantium-adipisci.html', 'facebook.com/consequatur', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(4, 'Sporer, Koelpin and Simonis', '3116', 'Gárdony', '7371 Budapest, Fekete körút 60.', '06(86)777-834', 'http://www.berge.com/', 'facebook.com/dolore', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(5, 'Cummings Ltd', '2130', 'Bicske', '5690 Budapest, Virág sétaút 700. 27. emelet', '+36659750039', 'http://www.wilkinson.com/quos-non-repellat-voluptas-veniam-ut-ratione.html', 'facebook.com/placeat', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(6, 'Casper PLC', '798', 'Keszthely', '7395 Csongrád, Takács utca 293.', '+36-47-099-2906', 'http://emmerich.com/', 'facebook.com/quod', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(7, 'Feil, Walsh and Ritchie', '1926', 'Törökszentmiklós', '4094 Berettyóújfalu, Lakatos tér 38. 01. ajtó', '+36441861136', 'https://shields.info/aliquam-quas-culpa-eos-quo-illum-velit-esse.html', 'facebook.com/et', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(8, 'Ruecker, McGlynn and Hudson', '6908', 'Tiszaújváros', '0398 Budapest, Orbán turistaút 41. 81. ajtó', '+36(72)798-392', 'http://keebler.com/ducimus-sed-suscipit-quaerat-laboriosam', 'facebook.com/et', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(9, 'Kunze PLC', '6266', 'Pilisvörösvár', '2186 Budapest, Marietta mélyút 50. 97. ajtó', '06-06-036-3291', 'http://terry.com/placeat-voluptate-adipisci-repellendus-aut.html', 'facebook.com/voluptatum', '2022-03-21 20:17:40', '2022-03-21 20:17:40'),
(10, 'Gutmann and Sons', '5767', 'Lenti', '6254 Budapest, Végh part 53. 00. emelet', '+36189337775', 'http://walsh.org/quod-saepe-et-dolorem-autem', 'facebook.com/et', '2022-03-21 20:17:41', '2022-03-21 20:17:41');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `species`
--

CREATE TABLE `species` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sname` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `species`
--

INSERT INTO `species` (`id`, `sname`, `created_at`, `updated_at`) VALUES
(1, 'in', '2022-03-21 19:54:10', '2022-03-21 19:54:10'),
(2, 'inventore', '2022-03-21 19:54:10', '2022-03-21 19:54:10'),
(3, 'macska', '2022-03-30 17:09:54', '2022-03-30 17:09:54');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `birth` date NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `user`, `birth`, `email`, `email_verified_at`, `password`, `admin`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'teszt2', '1900-01-01', 'teszt2@tesztmail.lan', NULL, '$2y$10$amNdh4fK9mKt93FX9kAMQuwvZSUe1hFGMTZR7nCN/d3YIdxDG2eP2', NULL, NULL, '2022-03-30 17:06:11', '2022-03-30 17:06:11');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `adoptions`
--
ALTER TABLE `adoptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adoptions_pets_id_foreign` (`pets_id`),
  ADD KEY `adoptions_users_id_foreign` (`users_id`);

--
-- A tábla indexei `breeds`
--
ALTER TABLE `breeds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `breeds_species_id_foreign` (`species_id`);

--
-- A tábla indexei `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- A tábla indexei `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- A tábla indexei `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- A tábla indexei `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pets_breeds_id_foreign` (`breeds_id`),
  ADD KEY `pets_shelters_id_foreign` (`shelters_id`);

--
-- A tábla indexei `shelters`
--
ALTER TABLE `shelters`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `species`
--
ALTER TABLE `species`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_unique` (`user`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `adoptions`
--
ALTER TABLE `adoptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `breeds`
--
ALTER TABLE `breeds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `pets`
--
ALTER TABLE `pets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `shelters`
--
ALTER TABLE `shelters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `species`
--
ALTER TABLE `species`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `adoptions`
--
ALTER TABLE `adoptions`
  ADD CONSTRAINT `adoptions_pets_id_foreign` FOREIGN KEY (`pets_id`) REFERENCES `pets` (`id`),
  ADD CONSTRAINT `adoptions_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Megkötések a táblához `breeds`
--
ALTER TABLE `breeds`
  ADD CONSTRAINT `breeds_species_id_foreign` FOREIGN KEY (`species_id`) REFERENCES `species` (`id`);

--
-- Megkötések a táblához `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_breeds_id_foreign` FOREIGN KEY (`breeds_id`) REFERENCES `breeds` (`id`),
  ADD CONSTRAINT `pets_shelters_id_foreign` FOREIGN KEY (`shelters_id`) REFERENCES `shelters` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
