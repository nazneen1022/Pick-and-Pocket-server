"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {}
  );
  post.associate = function (models) {
    post.belongsTo(models.user);
    post.hasMany(models.comment);
  };
  return post;
};
