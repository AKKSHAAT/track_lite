-- CreateTable
CREATE TABLE "PageView" (
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

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "page_view_id" TEXT NOT NULL,
    "action_type" TEXT NOT NULL,
    "resource_id" TEXT NOT NULL,
    "action_details" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "TrackingConfiguration" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "page_view_id" TEXT NOT NULL,
    "action_type" TEXT NOT NULL,
    "resource_id" TEXT NOT NULL,
    "action_details" JSONB NOT NULL
);
