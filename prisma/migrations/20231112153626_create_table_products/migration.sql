-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `price` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `item_sold` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `rating` INTEGER UNSIGNED NOT NULL DEFAULT 5,
    `category` ENUM('FUNGI', 'FRUIT', 'VEGETABLE', 'ONION', 'BEANS', 'SPICE') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `products_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
