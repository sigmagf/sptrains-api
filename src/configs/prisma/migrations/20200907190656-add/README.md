# Migration `20200907190656-add`

This migration has been generated by Joao Gabriel at 9/7/2020, 4:06:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."StationsOrder" DROP CONSTRAINT "StationsOrder_lineId_fkey"

ALTER TABLE "public"."StationsOrder" DROP CONSTRAINT "StationsOrder_stationId_fkey"

ALTER TABLE "public"."_LineToStation" DROP CONSTRAINT "_LineToStation_A_fkey"

ALTER TABLE "public"."_LineToStation" DROP CONSTRAINT "_LineToStation_B_fkey"

ALTER TABLE "public"."Station" ADD COLUMN "lineId" text   

ALTER TABLE "public"."Station" ADD FOREIGN KEY ("lineId")REFERENCES "public"."Line"("id") ON DELETE SET NULL ON UPDATE CASCADE

DROP TABLE "public"."StationsOrder"

DROP TABLE "public"."_LineToStation"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200907183540-add-station-order-table-control..20200907190656-add
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -35,18 +35,7 @@
   id           String    @id
   displayName  String
   fullName     String    @unique
   elevator     Boolean?  @default(false)
-  lines        Line[]  
   createdAt    DateTime  @default(now())
   updatedAt    DateTime  @default(now()) @updatedAt
-}
-
-model StationsOrder {
-  id         String    @id
-  position   Int
-  lineId     String
-  stationId  String
-
-  line       Line     @relation(fields: [lineId], references: [id])
-  station    Station  @relation(fields: [stationId], references: [id])
 }
```


