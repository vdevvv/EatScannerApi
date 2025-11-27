-- CreateTable
CREATE TABLE "characteristics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "characteristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacteristicToMenuItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CharacteristicToMenuItem_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "characteristics_name_key" ON "characteristics"("name");

-- CreateIndex
CREATE INDEX "_CharacteristicToMenuItem_B_index" ON "_CharacteristicToMenuItem"("B");

-- AddForeignKey
ALTER TABLE "_CharacteristicToMenuItem" ADD CONSTRAINT "_CharacteristicToMenuItem_A_fkey" FOREIGN KEY ("A") REFERENCES "characteristics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacteristicToMenuItem" ADD CONSTRAINT "_CharacteristicToMenuItem_B_fkey" FOREIGN KEY ("B") REFERENCES "menu_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
