/*
  Warnings:

  - You are about to drop the column `states` on the `issue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "issue" DROP COLUMN "states",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'OPEN';
