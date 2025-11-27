-- CreateTable
CREATE TABLE "_UserSelectedTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserSelectedTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserSelectedTags_B_index" ON "_UserSelectedTags"("B");

-- AddForeignKey
ALTER TABLE "_UserSelectedTags" ADD CONSTRAINT "_UserSelectedTags_A_fkey" FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSelectedTags" ADD CONSTRAINT "_UserSelectedTags_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
