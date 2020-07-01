"use strict";
module.exports = (sequelize, DataTypes) => {
  const feedback = sequelize.define(
    "feedback",
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue:
          "It's good platform to help each other and get some extra money in our free time!!",
      },
    },
    {}
  );
  feedback.associate = function (models) {
    // associations can be defined here
  };
  return feedback;
};
