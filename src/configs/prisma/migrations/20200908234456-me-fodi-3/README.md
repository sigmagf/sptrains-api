# Migration `20200908234456-me-fodi-3`

This migration has been generated by Joao Gabriel at 9/8/2020, 8:44:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200908234313-me-fodi-2..20200908234456-me-fodi-3
--- datamodel.dml
+++ datamodel.dml
@@ -1,34 +1,36 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
-model Company {
+model Operators {
   id         String    @id @default(uuid())
   name       String
   alias      String
   lines      Line[]
   createdAt  DateTime  @default(now())
   updatedAt  DateTime  @default(now()) @updatedAt
+
+  @@map("operators")
 }
 model Line {
-  id         String    @id @default(uuid())
-  number     Int       @unique
-  name       String    @unique
-  color      String
-  active     Boolean?  @default(true)
-  stations   StationsOnLine[]
-  companyId  String
-  createdAt  DateTime  @default(now())
-  updatedAt  DateTime  @default(now()) @updatedAt
+  id          String    @id @default(uuid())
+  number      Int       @unique
+  name        String    @unique
+  color       String
+  active      Boolean?  @default(true)
+  stations    StationsOnLine[]
+  operatorId  String
+  createdAt   DateTime  @default(now())
+  updatedAt   DateTime  @default(now()) @updatedAt
-  company    Company    @relation(fields: [companyId], references: [id])
+  operator    Operators    @relation(fields: [operatorId], references: [id])
   @@map("lines")
 }
```


