-- CreateTable
CREATE TABLE "redirects" (
    "id" TEXT NOT NULL,
    "original_url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "redirects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "redirects_original_url_key" ON "redirects"("original_url");

-- CreateIndex
CREATE UNIQUE INDEX "redirects_key_key" ON "redirects"("key");
