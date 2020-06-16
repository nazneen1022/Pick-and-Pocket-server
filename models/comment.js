"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {}
  );
  comment.associate = function (models) {
    // associations can be defined here
    comment.belongsTo(models.post);
  };
  return comment;
};
