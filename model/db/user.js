/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: '用户id',
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: '用户名'
    },
    user_password: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: '用户密码'
    },
    user_avatar: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '用户头像'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user'
  });
};
