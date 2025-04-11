/*
  Warnings:

  - You are about to drop the column `passhash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passsalt` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passhash",
DROP COLUMN "passsalt",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "salt" TEXT NOT NULL;
