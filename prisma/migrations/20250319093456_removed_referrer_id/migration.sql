/*
  Warnings:

  - You are about to drop the column `referrer_id` on the `PageView` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PageView" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "session_id" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT,
    "page_type" TEXT NOT NULL,
    "resource_id" TEXT NOT NULL,
    "utm_source" TEXT NOT NULL,
    "utm_medium" TEXT NOT NULL,
    "utm_campaign" TEXT NOT NULL,
    "utm_content" TEXT NOT NULL,
    "utm_term" TEXT NOT NULL,
    "utm_referrer" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "ip_hash" TEXT NOT NULL
);
INSERT INTO "new_PageView" ("id", "ip_hash", "page_type", "resource_id", "session_id", "timestamp", "user_agent", "user_id", "utm_campaign", "utm_content", "utm_medium", "utm_referrer", "utm_source", "utm_term") SELECT "id", "ip_hash", "page_type", "resource_id", "session_id", "timestamp", "user_agent", "user_id", "utm_campaign", "utm_content", "utm_medium", "utm_referrer", "utm_source", "utm_term" FROM "PageView";
DROP TABLE "PageView";
ALTER TABLE "new_PageView" RENAME TO "PageView";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
