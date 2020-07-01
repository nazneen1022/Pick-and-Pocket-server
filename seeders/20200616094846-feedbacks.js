"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "feedbacks",
      [
        {
          rating: 3,
          description: "Cool Idea!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          description: "Hmm.. Sounds Good!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("feedbacks", null, {});
  },
};
