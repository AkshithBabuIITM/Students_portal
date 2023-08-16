-- AlterTable
ALTER TABLE `HostelAccomodation` MODIFY `fromDate` DATETIME(3) NULL,
    MODIFY `toDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `MessAllocation` MODIFY `fromDate` DATETIME(3) NULL,
    MODIFY `toDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Student` MODIFY `programme` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `TeamMembership` ADD COLUMN `fromDate` DATETIME(3) NULL,
    ADD COLUMN `toDate` DATETIME(3) NULL;
