import type { ColumnType } from "kysely";
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
  id: Generated<string>;
  account_id: string;
  access_token: string | null;
  provider: string;
  userId: string;
};
export type Inventory = {
  id: string;
  createdDate: Generated<Timestamp>;
  updatedDate: Timestamp;
};
export type User = {
  id: Generated<string>;
  name: string;
  image: string;
  email: string;
  email_verified: Generated<boolean>;
  created: Generated<Timestamp>;
  updated: Timestamp;
};
export type DB = {
  accounts: Account;
  inventory: Inventory;
  users: User;
};
