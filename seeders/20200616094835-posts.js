"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          title: "Painting a room",
          description: `I need a some of your available time to paint one room in my house.I donot have proper equipment to do it! If Looking for some one who can help me painting my room. My house is located in Rotterdam. Address details will be provided on interest.`,
          imageUrl:
            "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-paint-a-ceiling-step-6-A.jpg",
          startTime: "2020-06-24 10:30:32",
          endTime: "2020-06-24 11:30:32",
          status: "New",
          latitude: 51.9228958,
          longitude: 4.4631727,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk my Dog",
          description: `I am looking for someone who can help me by taking my pet for a walk.
          You can pick up my pet from below address and get paid for this service.
          Populierlaan 103, Den Haag 2282 LA, Netherlands`,
          imageUrl:
            "https://images.unsplash.com/photo-1530700131180-d43d9b8cc41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          startTime: "2020-06-06 10:30:32",
          endTime: "2020-06-06 12:30:32",
          status: "Completed",
          latitude: 52.0484778,
          longitude: 4.3389221,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Taking care of an elder",
          description: `Looking for a paid service. I need some one to take care my grand father today!!. Helping him for a evening walk.`,
          imageUrl:
            "https://st2.depositphotos.com/2481271/12440/i/950/depositphotos_124408132-stock-photo-nurse-helping-a-elder-man.jpg",
          startTime: "2020-06-20 03:00:00",
          endTime: "2020-06-20 04:30:00",
          status: "Completed",
          latitude: 52.0369643,
          longitude: 4.3152622,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Need Cook",
          description: `I need some help in cooking for a small un-planned get together at my home!! I have around 15 guests and cannot handle it all alone. Also encourage some suggestions with the menu. Below is the address details : Markenburg 143, Hoofddorp 2135 DX, Netherlands`,
          imageUrl:
            "https://w0.pngwave.com/png/403/732/cuisine-cooking-women-cook-png-clip-art.png",
          userId: 2,
          startTime: "2020-07-07 08:00:00",
          endTime: "2020-07-07 11:30:00",
          status: "New",
          latitude: 52.3009896,
          longitude: 4.6649945,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Baby Sitting",
          description: `I am looking for someone who can do some baby sitting at my home for 4-5 hours. Will be provided with the toys required to keep the baby engaged in fun activities. Address: Theresiastraat 139, Den Haag`,
          imageUrl:
            "https://www.newyorkfamily.com/wp-content/uploads/2018/09/baby-sitter.jpg",
          startTime: "2020-06-23 11:00:00",
          endTime: "2020-06-23 16:00:00",
          status: "New",
          latitude: 52.08632,
          longitude: 4.33759,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
