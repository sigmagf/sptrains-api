# Migration `20200913195012-to-mysql-umbler`

This migration has been generated by Joao Gabriel at 9/13/2020, 4:50:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `sptrains`.`operators` (
`id` varchar(191)  NOT NULL ,
`name` varchar(191)  NOT NULL ,
`alias` varchar(191)  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `sptrains`.`lines` (
`id` varchar(191)  NOT NULL ,
`number` int  NOT NULL ,
`name` varchar(191)  NOT NULL ,
`color` varchar(191)  NOT NULL ,
`active` boolean  DEFAULT true,
`operatorId` varchar(191)  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
UNIQUE Index `lines.number_unique`(`number`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `sptrains`.`stations` (
`id` varchar(191)  NOT NULL ,
`displayName` varchar(191)  NOT NULL ,
`fullName` varchar(191)  NOT NULL ,
`elevator` boolean  DEFAULT false,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `sptrains`.`_stationsOnLine` (
`id` varchar(191)  NOT NULL ,
`lineId` varchar(191)  NOT NULL ,
`stationId` varchar(191)  NOT NULL ,
`nextId` varchar(191)  ,
`details` varchar(191)  ,
UNIQUE Index `_stationsOnLine.id_unique`(`id`),
UNIQUE Index `_stationsOnLine_nextId_unique`(`nextId`),
PRIMARY KEY (`lineId`,`stationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `sptrains`.`lines` ADD FOREIGN KEY (`operatorId`) REFERENCES `sptrains`.`operators`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `sptrains`.`_stationsOnLine` ADD FOREIGN KEY (`lineId`) REFERENCES `sptrains`.`lines`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `sptrains`.`_stationsOnLine` ADD FOREIGN KEY (`stationId`) REFERENCES `sptrains`.`stations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `sptrains`.`_stationsOnLine` ADD FOREIGN KEY (`nextId`) REFERENCES `sptrains`.`_stationsOnLine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200913011248-fix-uniques..20200913195012-to-mysql-umbler
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
-  provider = "postgresql"
-  url = "***"
+  provider = "mysql"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
```


