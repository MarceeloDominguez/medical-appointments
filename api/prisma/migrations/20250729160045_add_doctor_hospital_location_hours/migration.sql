-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "hospital" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "workingHours" JSONB;
