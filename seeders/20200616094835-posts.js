"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          title: "Fixing a tap",
          category: "Home Care",
          description: `I need a some of your available time to fix a tap in my kitchen which is leaking.I donot have proper equipment to fix it! If I get some one with the equipment, we could fix this in an hour of time. It is slightly urgent and I cannot wait for plumber's appointment. It would be great help and I can pay you some amount for this.`,
          imageUrl:
            "https://d33wubrfki0l68.cloudfront.net/bf0a2245cd3dd30f6b4f1411fac483854a27af52/9ecb9/components/images/plumber-broken.png",
          startTime: "2020-06-24 10:30:32",
          endTime: "2020-06-24 11:30:32",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dog Walk",
          category: "Pet Outing",
          description: `I am looking for someone who can help me by taking my pet for a walk.
          You can pick up my pet from below address and get paid for this service.
          Populierlaan 103, Den Haag 2282 LA, Netherlands`,
          imageUrl:
            "https://vetstreet.brightspotcdn.com/11/46/6c3b0f8446b8838c88b83a0fb298/jogging-with-sheltie-thinkstockphotos-534541239-335.jpg",
          startTime: "2020-06-20 03:00:00",
          endTime: "2020-06-20 04:30:00",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Talk with Elder",
          category: "Elder Care",
          description: `I need some one look after my grand father for 3 hours today!! Help will be greatly appreciated and paid with decent amount`,
          imageUrl: "",
          startTime: "2020-07-04 10:30:32",
          endTime: "2020-07-04 12:30:32",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cooking",
          category: "Domestic",
          description: `I need some help in cooking for a small un-planned get together at my home!! I have around 15 guests and cannot handle it all alone. Also encourage some suggestions with the menu. Below is the address details : Markenburg 143, Hoofddorp 2135 DX, Netherlands`,
          imageUrl:
            "https://w0.pngwave.com/png/403/732/cuisine-cooking-women-cook-png-clip-art.png",
          userId: 2,
          startTime: "2020-06-22 08:00:00",
          endTime: "2020-06-22 11:30:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Baby Sitting",
          category: "Child Care",
          description: `I am looking for someone who can do some baby sitting at my home for 4-5 hours. Will be provided with the toys required to keep the baby engaged in fun activities. Address: Theresiastraat 139, Den Haag`,
          imageUrl:
            "https://www.newyorkfamily.com/wp-content/uploads/2018/09/baby-sitter.jpg",
          startTime: "2020-06-23 11:00:00",
          endTime: "2020-06-23 16:00:00",
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
