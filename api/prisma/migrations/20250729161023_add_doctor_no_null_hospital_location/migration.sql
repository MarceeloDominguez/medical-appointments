/*
  Warnings:

  - Made the column `hospital` on table `Doctor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `Doctor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "hospital" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL;
