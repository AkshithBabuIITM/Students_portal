/*
  Warnings:

  - A unique constraint covering the columns `[residentId,hostelId,roomNo,fromDate,toDate]` on the table `HostelAccomodation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fromDate` to the `HostelAccomodation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toDate` to the `HostelAccomodation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `HostelAccomodation_residentId_hostelId_roomNo_key` ON `HostelAccomodation`;

-- AlterTable
ALTER TABLE `HostelAccomodation` ADD COLUMN `fromDate` DATETIME(3) NOT NULL,
    ADD COLUMN `toDate` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `HostelAccomodation_residentId_hostelId_roomNo_fromDate_toDat_key` ON `HostelAccomodation`(`residentId`, `hostelId`, `roomNo`, `fromDate`, `toDate`);
