-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPEN', 'IN_PROGRESS', 'CLOSED');

-- AlterTable
ALTER TABLE "issue" ADD COLUMN     "states" "Status" NOT NULL DEFAULT 'OPEN';
