"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "comments",
      [
        {
          description: "It was good talking to you and helping you in need!!",
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Enjoyed taking care of the child. Cute kiddooo!!",
          postId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Heard few cool experiences of the grandpa. Wish to meet you again",
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comments", null, {});
  },
};
