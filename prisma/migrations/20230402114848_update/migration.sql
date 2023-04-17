/*
  Warnings:

  - You are about to drop the column `desc` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `stripeId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `img2` on the `Product` table. All the data in the column will be lost.
  - Added the required column `imgURL` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripeID` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img2URL` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgURL` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "desc",
DROP COLUMN "img",
ADD COLUMN     "imgURL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "stripeId",
ADD COLUMN     "stripeID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "desc",
DROP COLUMN "img",
DROP COLUMN "img2",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "img2URL" TEXT NOT NULL,
ADD COLUMN     "imgURL" TEXT NOT NULL;
