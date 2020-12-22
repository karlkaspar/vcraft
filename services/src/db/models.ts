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
  email!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  firstName!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  lastName!: string;


  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  password!: string;
}

export default [User]
