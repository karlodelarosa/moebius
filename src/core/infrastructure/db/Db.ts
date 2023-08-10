import { db } from "../engine/SupabaseClient";

export default class Db {
  protected readonly dbConnection;

  constructor() {
    if (!db) {
      throw new Error("Db variable is not defined");
    }
    this.dbConnection = db;
  }

  public db() {
    return this.dbConnection;
  }
}
