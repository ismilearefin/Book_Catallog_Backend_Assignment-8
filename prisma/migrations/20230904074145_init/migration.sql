/*
  Warnings:

  - You are about to drop the column `orderedBooks` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "orderedBooks";

-- CreateTable
CREATE TABLE "orderedBooks" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,

    CONSTRAINT "orderedBooks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orderedBooks" ADD CONSTRAINT "orderedBooks_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderedBooks" ADD CONSTRAINT "orderedBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
