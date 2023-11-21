-- AlterTable
ALTER TABLE `checkouts` ADD COLUMN `transaction_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `transactions` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `total_price` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `delivery_fee` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `asurance_fee` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `application_fee` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `grand_total_price` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `deliveryType` ENUM('HOME_DELIVERY', 'STORE_PICKUP') NOT NULL DEFAULT 'HOME_DELIVERY',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `checkouts` ADD CONSTRAINT `checkouts_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
