import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "users"
})

export class User extends Model<User> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string; // ! ALLOWS US TO PASS AN EMPTY VALUE

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  firstName!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  }) // UGLY FIX, ERROR: "NO OVERLOAD MATCHES THIS CALL" REMOVE "as any" TO SEE IT
  lastName!: string; // ! ALLOWS US TO PASS AN EMPTY VALUE

  @Column({
    allowNull: false,
    type: DataType.STRING
  }) // UGLY FIX, ERROR: "NO OVERLOAD MATCHES THIS CALL" REMOVE "as any" TO SEE IT
  email!: string; // ! ALLOWS US TO PASS AN EMPTY VALUE

  @Column({
    allowNull: false,
    type: DataType.STRING
  }) // UGLY FIX, ERROR: "NO OVERLOAD MATCHES THIS CALL" REMOVE "as any" TO SEE IT
  password!: string; // ! ALLOWS US TO PASS AN EMPTY VALUE
}

export default [User]
