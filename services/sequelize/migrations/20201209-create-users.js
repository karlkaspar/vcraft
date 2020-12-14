module.exports.up = (queryInterface, DataTypes) => {
  // create users table
  return queryInterface.createTable("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  });
};

module.exports.down = (queryInterface) => queryInterface.dropTable("users");
