-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `issues` DROP FOREIGN KEY `issues_assignedToUserId_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_user_id_fkey`;

-- DropIndex
DROP INDEX `accounts_user_id_fkey` ON `accounts`;

-- DropIndex
DROP INDEX `issues_assignedToUserId_fkey` ON `issues`;

-- DropIndex
DROP INDEX `sessions_user_id_fkey` ON `sessions`;
