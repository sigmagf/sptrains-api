# Migration `20200907172259-b`

This migration has been generated by Joao Gabriel at 9/7/2020, 2:22:59 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200907172201-a..20200907172259-b
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
@@ -12,8 +12,10 @@
   name       String
   alias      String
   createdAt  DateTime  @default(now())
   updatedAt  DateTime  @default(now()) @updatedAt
+
+  lines      Line[]
 }
 model Line {
   id         String    @id
```

