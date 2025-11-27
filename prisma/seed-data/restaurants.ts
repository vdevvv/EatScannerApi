import {Prisma, TagType} from "@prisma/client";

export const restaurants: Prisma.RestaurantCreateInput[] = [
  {
    name: 'Pickl Gardens Plaza', // https://www.talabat.com/uae/restaurant/703527/pickl-dubai-silicon-oasis?aid=1244
    country: 'UAE',
    city: 'Abu Dhabi',
    address: 'Pickl Gardens Plaza, Khalifa City, SW18',
    placeId: 'ChIJLxDGy95FXj4RHBam-zr-9hs',
    latitude: 24.4329863,
    longitude: 54.5662353,
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Hot Dogs',
              items: {
                create: [
                  {
                    name: 'Build your own Dog',
                    description: "all beef hot dog, potato bun, your choice of toppings & sauces",
                    price: "26.00",
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6658700330722A781097B98B6385AC74",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DE276D7DA8F361D23A5A17149B255789",
                    name: "OG Dog",
                    description: "all beef hot dog, onions, pickles, mustard, ketchup, potato bun",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1B1FED88C2196E8E7FD79C33A00ADE52",
                    name: "Spicy Dog",
                    description: "all beef hot dog, jalapenos, fth spice, buffalo sauce, ranch sauce, potato bun",
                    price: "23.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1F68FDBDD9A63AB78BA842C2D56E67F7",
                    name: "Clown Dog",
                    description: "all beef hot dog, cheese, pickles, onion, lettuce, secret sauce, potato bun",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BE3D25AA32DC8E14AE3270BDEC6E3FB9",
                    name: "Chicago Dog",
                    description: "all beef hot dog, fried onion, tomato, onion, pickles, ketchup, mustard, potato bun",
                    price: "25.00",
                  },
                ]
              }
            },
            {
              name: 'Cheeseburger',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B5F985BF2AF4AFC7EA689376F26A31EB",
                    name: "Build your own Single Cheeseburger",
                    description: "single patty, cheese, potato bun, your choice of toppings & sauces",
                    price: "34.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762464069/get_bgiptr.mp4',
                    tags: {connect: [{slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-sweets'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0EF0687A544AF48963C87E83B191A082",
                    name: "Build your own Double Cheeseburger",
                    description: "double patty, cheese, potato bun, your choice of toppings & sauces",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/166A97D658B9D7EA3FA8616C5CCCF16B",
                    name: "Build your own Single Bacon Cheeseburger",
                    description: "single patty, bacon, cheese, potato bun, your choice of toppings & sauces",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E4C8F635F1BD1C223BD3ACA4D846F3CC",
                    name: "Build your own Double Bacon Cheeseburger",
                    description: "double patty, bacon, cheese, potato bun, your choice of toppings & sauces",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3DFDB00F824ADC5CCC07C878D124CB87",
                    name: "The New Yorker Cheeseburger Single",
                    description: "single patty, cheese, lettuce, tomato, secret sauce & potato bun",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/73752AB583976D600194F4F414043063",
                    name: "The New Yorker Cheeseburger Double",
                    description: "double patty, cheese, lettuce, tomato, secret sauce & potato bun",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762467559/WEEKLY_CONTEST_the_thing_that_keeps_happening_even_though_your_brain_swears_last_Monday_was_y_gwcu8m.mp4',
                    price: "49.00",
                    tags: {connect: [{slug: 'american'}, {slug: 'lunch'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/869DEC55A2552B2DE4D0190CA5EB1930",
                    name: "The Jeff Cheeseburger Single",
                    description: "single patty, cheese, feel the heat spice, fried onions, ranch & potato bun",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/265B8F25CAB2D47B5195C69E67978D49",
                    name: "The Jeff Cheeseburger Double",
                    description: "double patty, cheese, feel the heat spice, fried onions, ranch & potato bun",
                    price: "49.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A5B29B2A24ACAFE509FE21C3A9C1BA8F",
                    name: "The BBQ Bacon Cheeseburger Single",
                    description: "single patty, bacon, cheese, fried onions, bbq sauce, ranch & potato bun",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9A4390EF4BAD5CFE0EF086B9A39D45B7",
                    name: "The BBQ Bacon Cheeseburger Double",
                    description: "double patty, bacon, cheese, fried onions, bbq sauce, ranch & potato bun",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D4BE23BB9071F5BCD743CFD0A8D70E2F",
                    name: "The Original Cheeseburger Single",
                    description: "single patty, cheese, dill pickles, white onion, mustard, ketchup & potato bun",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762787089/pickl_burger_3_flrprg.mp4',
                    price: "32.00",
                    tags: {connect: [{slug: 'american'}, {slug: 'lunch'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/224ABBE906030C4018AB23305918C7A7",
                    name: "The Original Cheeseburger Double",
                    description: "double patty, cheese, dill pickles, white onion, mustard, ketchup & potato bun",
                    price: "49.00",
                  },
                ]
              }
            },
            {
              name: 'Chicken Sandos & Tenders',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/15507338215E883B00BDB012A0C0E99D",
                    name: "The Chicken Sando",
                    description: "fresh fried chicken, dill pickles, lettuce, comeback sauce, choose your heat level & potato bun",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EF62EE9B087B6FF69CAD72DB96C58044",
                    name: "Chicken Caesar Sando",
                    description: "fresh fried chicken, cheese, lettuce, caesar sauce, parmasan, & potato bun",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4271C7421BD711CA77E48A9676703468",
                    name: "3 Piece Chicken Tenders",
                    description: "3 fresh fried chicken tenders, dill pickles & your choice of dip",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AECB58801A573D14A96E3310BDF0D3F5",
                    name: "6 Piece Chicken Tenders",
                    description: "6 fresh fried chicken tenders, dill pickles & your choice of dip",
                    price: "53.00",
                  },
                ]
              }
            },
            {
              name: 'Cheeseburger Combos',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D3C42B799FBE7F78A3B38547F961C7B5",
                    name: "Build your own Single Cheeseburger Combo",
                    description: "single patty, cheese, potato bun, your choice of toppings & sauces, side & drink",
                    price: "61.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9F154805A0BE9072D3DBB3A4DD5E5925",
                    name: "Build your own Double Cheeseburger Combo",
                    description: "double patty, cheese, potato bun, your choice of toppings & sauces, side & drink",
                    price: "77.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CA3B30884D0EED37F681672BE5B749F4",
                    name: "Build your own Single Bacon Cheeseburger Combo",
                    description: "single patty, bacon, cheese, potato bun, your choice of toppings & sauces, side & drink",
                    price: "66.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8CC5B7D63E649413741C28B6EDAEFEF3",
                    name: "Build your own Double Bacon Cheeseburger Combo",
                    description: "double patty, bacon, cheese, potato bun, your choice of toppings & sauces, side & drink",
                    price: "82.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F151DBC6054D373F0CF242C2F9D9AA40",
                    name: "The New Yorker Cheeseburger Single Combo",
                    description: "single patty, cheese, lettuce, tomato, secret sauce & potato bun, side & drink",
                    price: "59.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6138454332E04AF8E66EACB3963B5582",
                    name: "The New Yorker Cheeseburger Double Combo",
                    description: "double patty, cheese, lettuce, tomato, secret sauce & potato bun, side & drink",
                    price: "76.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B9CC89E34F1DEB533DF7AE596DC4F7EB",
                    name: "The Jeff Cheeseburger Single Combo",
                    description: "single patty, cheese, feel the heat spice, fried onions, ranch & potato bun, side & drink",
                    price: "59.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FCE48CD80CA82F6F57171741E847CF50",
                    name: "The Jeff Cheeseburger Double Combo",
                    description: "double patty, cheese, feel the heat spice, fried onions, ranch & potato bun, side & drink",
                    price: "76.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6042330DB0581312A7508542A5218134",
                    name: "The BBQ Bacon Cheeseburger Single Combo",
                    description: "single patty, bacon, cheese, fried onions, bbq sauce, ranch & potato bun, side & drink",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D8E38BAC8C12E46EBE75D9369EC20F93",
                    name: "The BBQ Bacon Cheeseburger Double Combo",
                    description: "double patty, bacon, cheese, fried onions, bbq sauce, ranch & potato bun, side & drink",
                    price: "81.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FB093B382E870E00807096F0E294C8B7",
                    name: "The Original Cheeseburger Single Combo",
                    description: "single patty, cheese, dill pickles, white onion, mustard, ketchup & potato bun, side & drink",
                    price: "59.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3B3E6554676E7910CBD735C6BF1F7D51",
                    name: "The Original Cheeseburger Double Combo",
                    description: "double patty, cheese, dill pickles, white onion, mustard, ketchup & potato bun, side & drink",
                    price: "76.00",
                  },
                ]
              }
            },
            {
              name: 'Chicken Sandos & Tender Combos',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/24AC62AE4CA109FF090BD66158F8CA0D",
                    name: "The Chicken Sando Combo",
                    description: "fresh fried chicken, dill pickles, lettuce, comeback sauce, choose your heat level, potato bun & side & drink",
                    price: "65.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B35D75624801DEDCEBB350EC0D429248",
                    name: "Chicken Caesar Sando Combo",
                    description: "fresh fried chicken, cheese, lettuce, caesar sauce, parmasan, potato bun & side & drink",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F845DC701C11CC60B5082C63D9BE532E",
                    name: "3 Piece Chicken Tenders Combo",
                    description: "3 fresh fried chicken tenders, dill pickles, side sauce & side & drink",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B86E3DAFE4C0C32FFD91790ED627868D",
                    name: "6 Piece Chicken Tenders Combo",
                    description: "6 fresh fried chicken tenders, dill pickles, side sauce & side & drink",
                    price: "80.00",
                  },
                ]
              }
            },
            {
              name: 'Plant Based Cheeseburgers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4187AB01BA6BA815302A8134AD55671D",
                    name: "Build Your Own Single Plant Based Burger",
                    description: "single plant-based patty, cheese, potato bun, your choice of toppings & sauces",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/800CFA8DE3A9CEA13056E57BC290BD42",
                    name: "Build Your Own Double Plant Based Burger",
                    description: "double plant-based patty, cheese, potato bun, your choice of toppings & sauces",
                    price: "62.00",
                  },
                ]
              }
            },
            {
              name: 'Little Pickl Meals',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BF685DB012448BCADE99BB285FB0EC4A",
                    name: "Little Pickl Cheeseburger Meal",
                    description: "little cheeseburger, ketchup, potato bun, fries or carrot sticks & drink",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5D8C0342C1707D2ABC41AF19F9E9F048",
                    name: "Little Pickl Chicken Sando Meal",
                    description: "little chicken sando, lettuce, mayo, potato bun, fries or carrot sticks & drink",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CCEBA8AF4869D9BA4F544E93946FED9A",
                    name: "Little Pickl Plant Based Meal",
                    description: "little plant-based cheeseburger, ketchup, potato bun, fries or carrot sticks & drink",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/722BB5E6A07A5644909AD57E4816454C",
                    name: "Little Pickl Tender Meal",
                    description: "fresh fried chicken tenders, fries or carrot sticks & drink",
                    price: "40.00",
                  },
                ]
              }
            },
            {
              name: 'Sides',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/761BA58BFCBDC28E9A87E6AFD4B21990",
                    name: "Fries",
                    description: "skinny fries",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F2B98DFF73AA1515DACC1FC7746B278C",
                    name: "Spicy Fries",
                    description: "skinny fries, feel the heat spice",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4C73EE7A12DD058C2CC45B1B854D1120",
                    name: "Messy Fries",
                    description: "skinny fries, beef bacon, dill pickles, parsley, secret sauce",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9D66711504567A8423D606ACEFC073A2",
                    name: "Sando Fries",
                    description: "skinny fries, fresh fried chicken, parsley, dill pickles, comeback sauce",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8456DF5429F0814CCC4B683CF2816502",
                    name: "Plant Based Messy Fries",
                    description: "skinny fries, plant based meat, dill pickles, lettuce, parsley, secret sauce",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9D52878BB2B808238A8748D4E6FD706E",
                    name: "Rocket Parm Salad",
                    description: "fresh rocket, sliced white onion, parmesan, balsamic",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/780FB2BFF7E3EA04D224BB1A8868DC30",
                    name: "Tub of House Pickles",
                    description: "your choice of dill, onion or jalepeno pickles",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EE9EE8EC1DAFE35D1D5F8DEE784BE086",
                    name: "Bag of Jeff",
                    description: "need an extra hit of spice? Jeff will make you 'feel the heat'.",
                    price: "5.00",
                  },
                ]
              }
            },
            {
              name: 'Sauces',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/55D1BDA565D2DAD7B84F1BED849E74CF",
                    name: "Regular Sauce",
                    description: "For a lil' dip",
                    price: 5,
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7E1CE17B786DAF5BAEDC4E1C03BC7E13",
                    name: "Big Boy Sauce",
                    description: "dont run dry, go BIG",
                    price: 25,
                  },
                ]
              }
            },
            {
              name: 'Drinks & Shakes',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/96E87BF40315848E7DED3FCDCDE88745",
                    name: "Water",
                    description: "contains water, tastes like water, could be straight up water",
                    price: "6.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1FB16B374051065B84A41ACC4D5AEA5A",
                    name: "Sparkling Water",
                    description: "contains water, and it sparkles",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/987C8C32DD339670E2AB30DE81C90E5C",
                    name: "Peach Sparkling Water",
                    description: "contains water, and it sparkles, with a touch of peach",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B7DAF0F24F3794B809040E3EE338756B",
                    name: "Lime Sparkling Water",
                    description: "contains water, and it sparkles, with a touch of lime",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E667C78D6B5136CA7291E314D310F8FE",
                    name: "Coke",
                    description: "Coke",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A64466066DEF52C7EE8D1A2E9A04EF9F",
                    name: "Diet Coke",
                    description: "Diet Coke",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0FAAA9031FDE46A627FA79EA7AA45F0C",
                    name: "Coke Zero",
                    description: "Coke Zero",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/90567915DFB4733A271FC07FCAB9CB5A",
                    name: "Fanta",
                    description: "Fanta",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A69C276A93E11B65F87B7E58961AFE7C",
                    name: "Sprite",
                    description: "Sprite",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/840222B56967A068CC7E1046CC6FBB85",
                    name: "Vanilla Shake",
                    description: "real vanilla ice cream & milk, blended and whizzed for a proper shake",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0DCE5F8056E8F0D1A5193493D9A655F7",
                    name: "Chocolate Shake",
                    description: "real chocolate ice cream & milk, blended and whizzed for a proper shake",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4D60082FBA73965CD8241CC274C58070",
                    name: "Strawberry Shake",
                    description: "real strawberry ice cream & milk, blended and whizzed for a proper shake",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/27C699A71A826DFEAB893ED963D1F580",
                    name: "Salted Caramel Shake",
                    description: "real salted caramel ice cream & milk, blended and whizzed for a proper shake",
                    price: "26.00",
                  },
                ]
              }
            },
            {
              name: 'Pickl Pick n Mix Candy',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3BECB0AFCD4B3726204BADAB386D2387",
                    name: "Regular Pick n Mix",
                    description: "small-ish but mighty and packed with chewy, gooey, and tangy sweets.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/247DFD0FB67DD326635885618CCFFE5C",
                    name: "Large Pick n Mix",
                    description: "go big-ish with chewy, gooey, and tangy sweets.",
                    price: "60.00",
                  },
                ]
              }
            },
            {
              name: 'Southpour at Home',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/60034FDAC9751CF04AA05BF0D7489165",
                    name: "Southpour Houseblend",
                    description: "A dark roast filled with caramel, chocolate and almond notes and a smooth finish",
                    price: '65',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A4988C2EB0705896C31E56A6C8C8CEF6",
                    name: "Uganda Single Origin",
                    description: "A medium roast filled with nutty notes and a sweet finish",
                    price: '85',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/62AE45ED9BB680CA757EA7B6FB118EF6",
                    name: "Zambia Single Origin",
                    description: "A medium roast filled with black tea, grape and vanilla and a silky finish",
                    price: '85',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/76AEB7F403B3B831001D85832DA315E3",
                    name: "Arabic Coffee",
                    description: "A light roast filled with mixed berries and floral taste",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/24594D52D6340FA5687A1547751F41BE",
                    name: "Uganda Coffee Pods",
                    description: "Tasting notes: Dense dark chocolate, molasses, prunes",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0B581EFE71277A344EDEFE7DFDDC7609",
                    name: "Brazilian Coffee Pods",
                    description: "Tasting notes: Dark chocolate, Dried raisins, cacao nibs",
                    price: "42.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Pitfire Pizza', // https://www.talabat.com/uae/restaurant/25251/pitfire-pizza-jumeirah-lakes-towers--jlt?aid=1307
    country: 'UAE',
    city: 'Dubai',
    address: 'Pitfire Pizza, Dubai Hills Estate',
    placeId: 'ChIJXdA7Y5FpXz4Rl0MVSjKjx9U',
    latitude: 25.1076408,
    longitude: 55.240382,
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Signature Pizzas 10"',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/854AE3A623E330218C403DE5B897BECF",
                    name: "Bill's Special 10\"",
                    description: "Our founder's favorite! Tomato sauce, our cheese blend, onions, mushrooms & house made Italian sausage.",
                    price: "68.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/01AC85B541A89DDB0EDE5BE26D27F475",
                    name: "Bresaola & Rocket 10\"",
                    description: "Seasoned tomato sauce with mozzarella, baked then topped withdeli-thin sliced bresaola (air dried beef) and piled high with fresh rocket and shaved parmesan, the rocket arrives packaged separately",
                    price: "62.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3BE1E81B142C1F904DBC244444A21D39",
                    name: "Buffalo Chicken 10\"",
                    description: "Crushed tomato base topped with provolone and gorgonzola cheese, jalapeno peppers, grilled chicken and finished with a drizzle of house-made spicy buffalo chicken wing sauce.",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D3D987C811ECE2AED60339415B1E1B93",
                    name: "Five Star 10\"",
                    description: "5 of our star toppings come together for this pie, pepperoni, Italian sausage, mushrooms, black olives and green peppers, a magical combo!",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1F06BC4B8137554C876866DE4DA80D94",
                    name: "Fresh Veggie 10\"",
                    description: "Mushrooms, green peppers, onions, olives, mozzarella and parsley over our seasoned tomato sauce, finished with chopped tomatoes after bake",
                    price: "60.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2EF19649C9BB38F76C2DCB0BE48300D7",
                    name: "Hawaii Five-Oh! 10\"",
                    description: "House made spicy hawaiian bbq sauce base, mozzarella, provolone, shredded chicken, pineapple and red onion, a sprinkling of fresh coriander finishes this pie after bake",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/63C92FEF48F304164ABA20EB6C96BE33",
                    name: "Hell's Kitchen 10\"",
                    description: "Cheese pizza with pepperoni, mushrooms, black olives, jalapenos and chili flakes",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5F7D155137C5E1883F31619D895FDC76",
                    name: "Hipster 10\"",
                    description: "Crushed tomato base, three cheese mix, mozzarella, provolone, feta, sun dried tomato, baby spinach, Roma tomato, pesto swirl contains nuts after bake",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/28F8C45082FF7B5DC3A35EE101C54FD0",
                    name: "Margherita 10\"",
                    description: "Pitfire’s own seasoned tomato sauce, topped with hand torn mozzarella, a drizzle of olive oil, a dash of parmesan and a handful of fresh basil after bake.",
                    price: "60.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D30F533A54079BA03FB7538260463CE9",
                    name: "Pepperoni Primo 10\"",
                    description: "A staple pie we rock like no other in Dubai. Need we say more?”",
                    price: "67.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B735E304600D394C84FCA82B9612FCA3",
                    name: "Pitfire Primo 10\"",
                    description: "Our signature pie, roasted garlic base, fresh sliced mushrooms, chopped kalamata olives, mozzarella, fontina, goat cheese and parsley, topped with chopped fresh tomatoes after bake.",
                    price: "62.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/25CCACA7F223ED600737F8AFE9FD62C9",
                    name: "Plain Jane 10\"",
                    description: "Seasoned tomato sauce topped with our mozzarella and provolone cheese blend finished with a sprinkling of oregano and sea salt",
                    price: "52.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5B1F04C2784958B1C855B7502DFA6DD7",
                    name: "Royal Hawaiian 10\"",
                    description: "Perfectly ripe pineapple, thin sliced smoked turkey piled high on top of our provolone and mozzarella cheese blend aloha.",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4F53ED59159A0632D6B429B1FCFAF409",
                    name: "Spicy Salami Primo 10\"",
                    description: "Tomato sauce base, topped with our cheese blend and thinly sliced Italian spicy salami and a sprinkle of chili flakes",
                    price: "67.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B8365BB219BE15D641527B61AB8E0E89",
                    name: "Spudnick 10\"",
                    description: "Olive oil base, sliced roasted potatoes, caramelized onion, gorgonzola, grilled chicken, finished with a dash of rosemary",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/41C67E118C9209EC18CDD9451D96803B",
                    name: "Stube Special 10\"",
                    description: "Pitfire’s tomato sauce, provolone and mozzarella cheese, italian sausage, kalamata olives, pepperoni, house roasted red peppers and dash of parmesan after bake",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DE3C00E9797F46BFE10837C920735738",
                    name: "The Palm 10\"",
                    description: "Olive oil base, air dried beef, a dash of rosemary, dates, and chunks of gorgonzola, a swirl of balsamic glaze after bake, a Dubai classic.",
                    price: "60.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BFC2D8A37B4AE3C0598955B067FF3535",
                    name: "Truff Daddy 10\"",
                    description: "Olive oil and black truffle paste base, pecorino parmesan mix, sliced brown mushrooms and caramelized onions. A swirl of white truffle oil after bake, served with a side of black truffle cream",
                    price: "68.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A829C16BA78DB97C6C03C32097D8D841",
                    name: "Veggie Primo 10\"",
                    description: "Tomato sauce base, our cheese blend, and generous amounts of mushrooms, green and black olives, sundried tomato, artichoke hearts, spinach sauteed with sliced garlic",
                    price: "65.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A3E4D028F59DD9C49F3AB462969B4546",
                    name: "White Pie 10\"",
                    description: "Alfredo sauce base topped with a blend of mozzarella and provolone, dollops of ricotta, parmesan, and a pinch of oregano",
                    price: "61.00"
                  },
                ]
              }
            },
            {
              name: 'Signature Pizzas 15"',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/157795B045BD3BE517D878E6C6D16147",
                    name: "Bill's Special 15\"",
                    description: "Our founder's favorite! Tomato sauce, our cheese blend, onions, mushrooms & house made Italian sausage.",
                    price: "94.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/64E0ED68B76AFEE400ACD6C7FD21E526",
                    name: 'Bresaola & Rocket 15"',
                    description: "Seasoned tomato sauce with mozzarella, baked then topped with deli-thin sliced bresaola (air dried beef) and piled high with fresh rocket and shaved parmesan, the rocket arrives packaged separately",
                    price: "89.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D4317DD660331F6E40B11B51769F4C33",
                    name: 'Buffalo Chicken 15"',
                    description: "Crushed tomato base topped with provolone and gorgonzola cheese, jalapeno peppers, grilled chicken and finished with a drizzle of house-made spicy buffalo chicken wing sauce.",
                    price: "92.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2494FFFDA691F74F0937F1CDBD07D003",
                    name: 'Five Star 15"',
                    description: "Five of our star toppings come together for this pie, pepperoni, Italian sausage, mushrooms, black olives and green peppers, a magical combo",
                    price: "92.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468734/The_weather_s_testing_us_these_days._PitfirePizza_PitfireDubai_BestPizzaDubai_HellsKitchen_D_ytdkbu.mp4',
                    tags: {connect: [{slug: 'italian'}, {slug: 'lunch'}, {slug: 'dinner'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A70F94F174B79EC41EC1C471004F62A8",
                    name: 'Fresh Veggie 15"',
                    description: "Mushrooms, green peppers, onions, olives, mozzarella and parsley over our seasoned tomato sauce, finished with chopped tomatoes after bake",
                    price: "84.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/83E92B5C52FCBF4DF52E8005682AE01A",
                    name: 'Hawaii Five-Oh! 15"',
                    description: "House made spicy hawaiian bbq sauce base, mozzarella, provolone, shredded chicken, pineapple and red onion, a sprinkling of fresh coriander finishes this pie after bake",
                    price: "92.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0613AF87A9FB001309AFCD63AD3A9AE6",
                    name: "Hell's Kitchen 15\"",
                    description: "Cheese pizza with pepperoni, mushrooms, black olives, jalapenos and chili flakes",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7B00AF07C1BB0FBC70407597BA1421BD",
                    name: 'Hipster 15"',
                    description: "Crushed tomato base, three cheese mix mozzarella, provolone, feta sun dried tomato, baby spinach, Roma tomato and pesto swirl contains nuts after bake",
                    price: "89.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D6A8E6DA52896372E4CFE900E9EECF57",
                    name: 'Margherita 15"',
                    description: "Pitfire’s own seasoned tomato sauce, topped with hand torn mozzarella, a drizzle of olive oil, a dash of parmesan and a handful of fresh basil after bake.",
                    price: "80.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/561E6481BB87C2C5DDDD6CEBC792B98C",
                    name: 'Pepperoni Primo 15"',
                    description: "A staple pie we rock like no other in Dubai. Need we say more?”",
                    price: "90.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763127015/iykyk_fedz3p.mp4',
                    tags: {connect: [{slug: 'italian'}, {slug: 'lunch'}, {slug: 'dinner'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9C6B8047AD1DB5CBCAA285124BC4B34E",
                    name: 'Pitfire Primo 15"',
                    description: "Our signature pie, roasted garlic base, fresh sliced mushrooms, chopped kalamata olives, mozzarella, fontina, goat cheese and parsley, topped with chopped fresh tomatoes after bake.",
                    price: "88.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FA706E73A05C33E21D20086D30CC4EB3",
                    name: 'Plain Jane 15"',
                    description: "Seasoned tomato sauce topped with our mozzarella and provolone cheese blend finished with a sprinkling of oregano and sea salt",
                    price: "73.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D1FE6A54A03A9FC2F4A3914E20EF6733",
                    name: 'Royal Hawaiian 15"',
                    description: "Perfectly ripe pineapple, thin sliced smoked turkey piled high on top of our provolone and mozzarella cheese blend aloha.",
                    price: "89.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/44CB3CD24684E7445D9C427DC1F51629",
                    name: 'Spicy Salami Primo 15"',
                    description: "Tomato sauce base, topped with our cheese blend and thinly sliced Italian spicy salami and a sprinkle of chili flakes",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/491977317B8D87F5475A43C67FA1672B",
                    name: 'Spudnick 15"',
                    description: "Olive oil base, sliced roasted potatoes, caramelized onion, gorgonzola, grilled chicken, finished with a dash of rosemary",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/974C1951E2A8D3D98BC82623FD0A37EA",
                    name: 'Stube Special 15"',
                    description: "Pitfire’s tomato sauce, provolone and mozzarella cheese, italian sausage, kalamata olives, pepperoni, house roasted red peppers and dash of parmesan after bake",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/289FD0C8F84242F90EBCB7EBACC87967",
                    name: 'The Palm 15"',
                    description: "Olive oil base, air-dried beef, a dash of rosemary, dates, and chunks of gorgonzola, a swirl of balsamic glaze after bake, a Dubai classic",
                    price: "84.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BA43F1A9A838F7BA78519752EA627F67",
                    name: 'Truff Daddy 15"',
                    description: "Olive oil and black truffle paste base, pecorino parmesan mix, sliced brown mushrooms and caramelized onions. A swirl of white truffle oil after bake. Served with a side of Black Truffle Cream",
                    price: "94.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EE6DBCFC783F812EA15A188DF6A88E02",
                    name: 'Veggie Primo 15"',
                    description: "Tomato sauce base, our cheese blend, and generous amounts of mushrooms, green and black olives, sundried tomato, artichoke hearts, spinach sauteed with sliced garlic",
                    price: "92.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3FEAA92A5CB9122A00D9B20105C0257C",
                    name: 'White Pie 15"',
                    description: "Alfredo sauce base topped with a blend of mozzarella and provolone, dollops of ricotta, parmesan, and a pinch of oregano",
                    price: "82.00",
                  },
                ]
              }
            },
            {
              name: 'Build Your Own',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AFE9CFD84F1DB56570B87182E49C5F15",
                    name: '10" BYO',
                    description: '10" BYO',
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5E2FF2A1F1BE5EB08F0E446ACEBC5C1D",
                    name: '15" BYO',
                    description: '15" BYO',
                    price: "71.00",
                  },
                ]
              }
            },
            {
              name: 'Pasta',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EF2C84A36A7AA2CBD3CA025EE94F48FA",
                    name: "Chicken Penne Alfredo",
                    description: "Scratch made alfredo, with grilled chicken, fresh mushrooms, garlic and parsley.",
                    price: "62.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4285CCD88BDC34B3E8BBA2C17A8CC841",
                    name: "Pasta Arrabbiata",
                    description: "Light spicy red sauce, basil.",
                    price: "59.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ECC5E922C157A4F8BDAC4EC0861E19D8",
                    name: "Sausage Penne",
                    description: "Chunks of Italian sausage in rich tomato cream sauce, topped with goat cheese and basil.",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/41DB325A6E86365DF43A058AA5205E58",
                    name: "Black Truffle Cream Linguine",
                    description: "Chicken, mushrooms & caramelized onions simmered in a rich black truffle cream sauce, finished with dollops of goat cheese.",
                    price: "65.00",
                  },
                ]
              }
            },
            {
              name: 'Salad',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D52D558CD85A206FD3BA64DFBCC7F6B5",
                    name: "Veggie Rainbow",
                    description: "Spring mix, sweet yellow capsicum, radish and cherry tomatoes",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EC62B6FD81481F2E5FB995241B0D76BE",
                    name: "Herby Chicken Caesar",
                    description: "Baby gem lettuce, mint, coriander, topped with grated parmesan and smoked chicken",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/19F53A00CBBE0503A8A14CC777E0DC6F",
                    name: "Rocket Salad",
                    description: "Peppery rocket leaves with fresh sliced mushrooms, cherry tomatoes and parmesan shavings",
                    price: "37.00",
                  },
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DF8424A4F233E6FA9B2E1BC129BFB52B",
                    name: "Coke 500mL",
                    description: "Coke 500mL",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7DE587AA82B7F687D79C9CAABC57C2D9",
                    name: "Coke Light 500mL",
                    description: "Coke Light 500mL",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/83B22A20CC4D12A47FC1E6ABC6AA0A27",
                    name: "Coke Zero 500mL",
                    description: "Coke Zero 500mL",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0CECBAD748C895B1D5414AFA70CDD9EC",
                    name: "Sprite 500mL",
                    description: "Sprite 500mL",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/502E19CB7C033BB6877BDDF06ACCF1FA",
                    name: "Fanta 500mL",
                    description: "Fanta 500mL",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/717A8171AA9FCF68C346D87724241229",
                    name: "Acqua Panna 500mL",
                    description: "Acqua Panna 500mL",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/29B65426195EEA266D6BD9DABEACA8AD",
                    name: "Acqua Panna 1L",
                    description: "Acqua Panna 1L",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/82135B609DA9200C51608D845351A023",
                    name: "Pellegrino 500mL",
                    description: "Pellegrino 500mL",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7F521B5DFD913F34C2AE31503D7238B6",
                    name: "Pellegrino 1L",
                    description: "Pellegrino 1L",
                    price: "24.00",
                  },
                ]
              }
            },
            {
              name: 'Sides',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ED90948F6FF866765CFBE6C95D3FCE45",
                    name: "Garlic Knots",
                    description: "Baked to order, coated with garlic butter then finished with parmesan and served with your choice of dipping sauce.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/696335DB9649C41C49AFAF7013165801",
                    name: "Buffalo Chicken Wings",
                    description: "Tossed in our home made spicy wing sauce or bbq sauce served with celery & carrot sticks & our gorgonzola ranch dressing.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6585011DCA1C5383139B5E3CCE9DAD0E",
                    name: "Korean Style Wings",
                    description: "Tossed in sweet & spicy gochujang sauce with extra for dipping. Topped with sesame seeds.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E31300986DD31A7BCE7CFA93B8CC0CC3",
                    name: "Boneless Wings",
                    description: "White meat chicken chunks lightly breaded, cooked until crispy",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A13925868D652B12E9C7C084200E5F91",
                    name: "Mac & Cheese",
                    description: "Rich & cheesy pasta cooked to order and topped with toasted parmesan bread crumbs.",
                    price: "42.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763126302/Baked_Mac_and_Cheese_tzjxtf.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'vegetarian'}, {slug: 'no-pork'}, {slug: 'no-beef'},
                        {slug: 'no-shellfish'}, {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'}
                      ]
                    }
                  },
                ]
              }
            },
            {
              name: 'Crust Dips & Croutons',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D25BFA7687F1E1E9105A3DF9308C481A",
                    name: "Homemade Garlic Butter Seasoned Croutons",
                    description: "Homemade Garlic Butter Seasoned Croutons",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9CE76FBEDBDD009C4135DFDEE35EF22F",
                    name: "BBQ Sauce",
                    description: "Smokey flavor bbq sauce made with perfect balance of sweet, spicy and savory ingredients",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F3BF63F2DBB78AA0D76271A6AAB69D6D",
                    name: "Black Truffle Cream Sauce",
                    description: "Black Truffle Cream Sauce",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/071B41575A448D2C4A7F92017E9DA66D",
                    name: "Blue Cheese Sauce",
                    description: "Blue Cheese Sauce",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1DA8D044FFA3EE7A6EE028346B4E85B2",
                    name: "Gorgonzola Ranch",
                    description: "Gorgonzola Ranch",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9EF21B0D70543FE154C61CA0B04ED0A4",
                    name: "Garlic Mayo Sauce",
                    description: "Garlic Mayo Sauce",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/030614397F0CA7E9B20950E26A2955A3",
                    name: "Spicy Buffalo Sauce",
                    description: "Spicy Buffalo Sauce",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9592030D5D1729C04D76B32B1B5D6F5A",
                    name: "Vegan Garlic Mayo",
                    description: "Vegan Garlic Mayo",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5AA46007660B74B1FB86016341309995",
                    name: "Hot Honey",
                    description: "Hot Honey",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/62C8969CE9A2F84C497B3661C5414D97",
                    name: "Marinara Sauce",
                    description: "Tomatobased sauce used in Italian cuisine.",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ED913F2E8D6E6C89586FC4BAC836F245",
                    name: "Roasted Garlic Paste",
                    description: "Roasted Garlic Paste",
                    price: "8.00",
                  },
                ]
              }
            },
            {
              name: 'Dessert',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C929605F97D29D9A640ACF27AF92253A",
                    name: "Michele's Apple Pie",
                    description: "A family recipe. Fresh apples spiced with cinnamon and nutmeg, homemade crust and a buttery crumble topping.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D0EF7183EEEF06B7AC5508A36224403D",
                    name: "Chocolate Chip Cookie Brownie",
                    description: "Gooey choclate brownie baked together with chocolate chip cookies on top yummy.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/38DE22F1BC96A5B80A6C799DC73253A5",
                    name: "Blonde Bombshell",
                    description: "Gooey house-made salted caramel blondie with chocolate chunks and pretzels.",
                    price: "28.00",
                  },
                ]
              }
            },
            {
              name: 'Combos',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BC97D5EB62A6844D7C142B86AFF0F63F",
                    name: "Pizza Combo",
                    description: "Pizza Combo",
                    price: "65.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/529B85250D6290ACC1151220157317C7",
                    name: "Buffalo Wings Combo",
                    description: "Buffalo Wings Combo",
                    price: "65.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1A4FA5B0E89B15F6C932424DD2490CC0",
                    name: "Boneless Wings Combo",
                    description: "Boneless Wings Combo",
                    price: "65.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1F126CF30D6CB586741A3EF1D1170CDA",
                    name: "Pasta Combo",
                    description: "Pasta Combo",
                    price: "65.00",
                  },
                ]
              }
            },
            {
              name: 'Limited Edition',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/49FC8A9AB013264E4B30AB82A3E1FE16",
                    name: '10" Thanksgiving Pizza',
                    description: "Savory homemade gravy base,mozzarella, roasted turkey, candied sweet potatoes, chunks of traditional sage, onion & sausage stuffing, and a sprinkle of fresh rosemary. Topped after bake with spiced cranberry sauce infused with bright orange zest.",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D787F0DF6484E4787FC220811B415C46",
                    name: 'Smoked Chicken & Fig 10"',
                    description: "Creamy roasted garlic alfredo sauce, our cheese blend, house made hickory smoked chicken, fig jam & bresaola. Finished with rocket after bake.",
                    price: "65.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Alsafadi', // https://www.talabat.com/uae/restaurant/721680/al-safadi-al-rigga?aid=1200
    country: 'UAE',
    city: 'Dubai',
    address: 'Alsafadi restaurant, Al Rigga Rd Deira',
    latitude: 25.2632045,
    longitude: 55.32506610000001,
    placeId: 'ChIJk_FT689cXz4RgmjEHf8HKms',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'The Vegan Menu',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4396A8D4F50DBDD7A29BD62E102990E7",
                    name: "Green Peas with Rice",
                    description: "Cooked rice with plant based meat with green peas and nuts",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C419B775FF94F8C675788CFE47DD0630",
                    name: "Kafta Sandwich",
                    description: "Plant-based kafta with hummus, chili paste and bewaz.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C49DBFAD768D1C62D9429754F08EBB20",
                    name: "Mouttabal with Kafta",
                    description: "Plant-based minced meat seasoned with onions and parsley on a layer of mouttabal",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/09516716D1AD7977CAF8687C39005D4D",
                    name: "Hummus with meat & Fries",
                    description: "Plant-based minced meat cashew nuts, hummus & sliced potato",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BFCECCD6815B148FD3AE7E2FB683044A",
                    name: "Lahem Beajine",
                    description: "Plant-based minced meat mixed with spices & vegetables",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EA7676D8C1556BE4907108B645BC97D8",
                    name: "Fried Kibbeh",
                    description: "Plant-based minced meat, burghul nuts & spices",
                    price: "30.00",
                  },
                ]
              }
            },
            {
              name: 'The Gathering Box',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8351A60E8C80CA053768818A97D962A3",
                    name: "The Gathering Box",
                    description: "Pick and choose from our selection of mini shawarma and falafel bites.",
                    price: "72.00",
                  },
                ]
              }
            },
            {
              name: 'Creations by Chef Omar',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9B8E3657CB739A7D8E2A69862D88B6E9",
                    name: "Potato Salad",
                    description: "Grilled and mashed potatoes infused with garlic and lemon, tossed with mixed vegetables, sumac, and a drizzle of olive oil.",
                    price: "34.00",
                  },
                ]
              }
            },
            {
              name: 'Barbecue',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/767EB08A92F92C2EB7B4901192F9B397",
                    name: "1 Kg Grilled Kafta",
                    description: "10 Skewers of grilled kafta served with grilled tomatoes, grilled onions.",
                    price: "270.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4B4841822C8CBFE61B2CD3DE86639793",
                    name: "1 Kg Grilled Meat",
                    description: "10 Skewers of grilled meat served with grilled tomatoes, grilled onions.",
                    price: "360.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763145465/_%D9%84%D8%A7_%D8%AA%D9%81%D9%88%D9%91%D8%AA_%D8%B9%D9%8E_%D8%AD%D8%A7%D9%84%D9%83_%D8%A7%D9%84%D9%84%D8%B0%D9%91%D8%A9_%D8%A7%D8%AA%D9%91%D8%B5%D9%84_%D9%88%D8%A7%D8%B7%D9%84%D8%A8_%D8%A7%D9%84%D8%A7%D9%93%D9%86_%D8%B9%D9%84%D9%89600_500_601Rumor_has_it_that_this_season_our_delici_icdjkn.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'gluten-free'}, {slug: 'lunch'}, {slug: 'dinner'},
                        {slug: 'no-shellfish'}, {slug: 'no-peanuts'}, {slug: 'lactose-free'}, {slug: 'no-tree-nuts'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AD3BBBA0BD9892E3C29B2841FB24F4EC",
                    name: "1 Kg Shish Tawouk",
                    description: "10 Skewers of shish tawouk served with grilled tomatoes, grilled onions.",
                    price: "270.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/344AC4A9BFA373D6755739919FFEAEF6",
                    name: "Shish Tawouk",
                    description: "2 skewers of shish tawouk with french fries and garlic paste.",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/90E440E817878E7D312CE939938B2665",
                    name: "1 Kg Mixed Grill",
                    description: "10 skewers of meat, shish tawouk and kafta served with grilled tomatoes, grilled onions, bewaz and garlic paste.",
                    price: "297.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D5548E87EDB630428E925509F19D4238",
                    name: "Mixed Grill",
                    description: "3 skewers of meat cubes, shish tawouk and kafta with grilled tomatoes, grilled onions, bewaz and garlic paste.",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/620373C49934972AF025060EE39EFF6B",
                    name: "Grilled Meat",
                    description: "2 skewers of marinated meat cubes with grilled tomatoes, grilled onions and bewaz.",
                    price: "72.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/83819239596576FBB5E025632D6EB258",
                    name: "Grilled Chicken",
                    description: "Grilled chicken marinated in lemon and garlic served with french fries and garlic paste. Choice of half or full chicken.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E9B87046F8CE2FA527351DE76D0769E1",
                    name: "Grilled Kafta",
                    description: "2 skewers of kafta with grilled tomatoes and bewaz.",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A3F1BC7BB94DA85147D415F1B6FBF296",
                    name: "Arayes Kafta",
                    description: "8 slices of kafta spread on bread.",
                    price: "56.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C76E29EAFACEEA507ECBD3BBD118D0A0",
                    name: "Grilled Chicken Kafta",
                    description: "2 skewers of minced chicken served with french fries, grilled onions, bewaz and garlic paste.",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A1509FB5FA48A529A2D7BD096291FF80",
                    name: "Grilled Chicken Wings",
                    description: "12 chicken wings marinated in lemon served with french fries and garlic paste.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EA9454898CA5E8EE033100988DC90232",
                    name: "Kabab Khashkhash",
                    description: "Minced meat with garlic and parsley served on tomato sauce.",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1A4B7C1BFF21DB34FFEADB75CA2ADA4A",
                    name: "Kabab Orfali",
                    description: "2 skewers of minced meat with chili paste served with grilled tomatoes & bewaz.",
                    price: "56.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1F0FF7683114480C444135523B1E061D",
                    name: "Eggplant Kabab",
                    description: "2 skewers of minced meat with chili paste served with grilled eggplant cubes, grilled tomatoes, grilled onions and bewaz.",
                    price: "56.00",
                  },
                ]
              }
            },
            {
              name: 'Sandwiches',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/87271B25D59AF9BA1C208560FDE24328",
                    name: "Eggplant Kabab Sandwich",
                    description: "Grilled meat minced with green chili and eggplant, with hummus, pickles and bewaz.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/520289B57465859C6C23C1FA78FA1BF1",
                    name: "Falafel Sandwich",
                    description: "Fried falafel with taratour, pickles, tomatoes and mint leaves.",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2DE49964B685F556C68AC0A0646BB76C",
                    name: "French Fries Sandwich",
                    description: "French fries sandwich in Arabic bread with coleslaw, pickles and ketchup.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D61C9D241B17F7A0FACAD1F114D2BC3A",
                    name: "Shish Tawouk Sandwich",
                    description: "Marinated grilled chicken cubes with french fries, pickles and garlic paste in arabic bread.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7218CF118FF002717281C2EB2A074AC9",
                    name: "Chicken Shawarma Sandwich",
                    description: "Chicken shawarma with garlic paste, french fries and pickles.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F282A5D061602B5055223869C9606F41",
                    name: "Grilled Meat Sandwich",
                    description: "Marinated grilled meat cubes with hummus, pickles and bewaz.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1AD7D82622FF5AC78A31B047B12060F2",
                    name: "Meat Shawarma Sandwich",
                    description: "Meat shawarma with taratour sauce, tomatoes, onions, bewaz and pickles.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4EDD7FD00F0E80785D1167B96B2CF4C0",
                    name: "Lebanese Burger",
                    description: "Beef patty, french fries, coleslaw and ketchup in a sesame bun.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9BE6F01A546BE30D8F161FB7F9A5DA2D",
                    name: "Grilled Kafta Sandwich",
                    description: "Minced grilled meat with hummus, pickles and bewaz.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/670883697A1873EADD899BC0CF957133",
                    name: "Rosto",
                    description: "Roast beef with lettuce, tomatoes, pickles and mayonnaise in a baguette bread.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B2EA3A4A2A67975D2EB63889AB6F2386",
                    name: "Chicken Musahab",
                    description: "Pulled chicken with garlic and pickles in a baguette bread.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3083B8D8F040F8BF9B06DF94EC5C8E1C",
                    name: "Escalope Burger",
                    description: "Fried breaded chicken breast served with french fries, coleslaw & pickles",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9E42C019871763B39A836255143BEC39",
                    name: "Francisco",
                    description: "With marinated grilled chicken, cheese, lettuce, pickles, corn & mayonnaise",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6F19BEEEE4C4DD15A0C022B63E8FBCA1",
                    name: "Escalope Sandwich",
                    description: "Chicken escalope with french fries, coleslaw, pickles and ketchup in a baguette bread.",
                    price: "27.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763134324/sandwitch_muaeuk.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'snack'}, {slug: 'no-pork'},
                        {slug: 'no-beef'}, {slug: 'no-shellfish'}, {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2678002EEDEFC2543C27141A0B3C8902",
                    name: "Kabab Orfali Sandwich",
                    description: "Minced grilled meat with hummus, pickles and bewaz.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/259C02699064F6A9C41A6CED5A1041AB",
                    name: "Grilled Chicken Kafta Sandwich",
                    description: "Grilled chicken mixed with onion and parsley, with french fries, pickles and garlic paste.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3C5EE7814E0F913B4D86D1BE811B1315",
                    name: "Chicken Sub",
                    description: "With marinated grilled chicken, cheese, lettuce, pickles, corn & garlic mayonnaise",
                    price: "28.00",
                  },
                ]
              }
            },
            {
              name: 'Shawarma',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C94E7DD451D9C17B6501B08DFF9F9EF8",
                    name: "Meat Shawarma Platter",
                    description: "With tahini sauce, vegetables and pickles.",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D9B3F3D6E507675530B42B03BD675BAC",
                    name: "Chicken Shawarma Platter",
                    description: "With garlic sauce, French fries and pickles.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/76C6387C68647BEFA4B7F435F1D218F3",
                    name: "Chicken Shawarma Intakli",
                    description: "Bread stuffed with grilled chicken shawarma.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9A0FBD9876462BFCEA16BA7D42E1F7C3",
                    name: "Mixed Shawarma Platter",
                    description: "Selection of meat and chicken shawarma.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9EA675F900347C3EE3253C66C131CFFB",
                    name: "Hummus with Meat Shawarma",
                    description: "Hummus with meat shawarma slices.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/34D5A2B48BA0FF67FEF36B748F691825",
                    name: "Hummus with Chicken Shawarma",
                    description: "Hummus with chicken shawarma slices.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8CF124BB5C20C1F63ED86094A03673A3",
                    name: "Meat Shawarma Intakli",
                    description: "Bread stuffed with grilled meat shawarma.",
                    price: "50.00",
                  },
                ]
              }
            },
            {
              name: 'Dishes',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/382B547ABFE56239E64E24CBAF41BB2D",
                    name: "Stuffed Lamb",
                    description: "Cooked Oriental rice with lamb meat topped with mixed nuts, and a side of yoghurt.",
                    price: "60.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8C656F82FA7F869905531E12205166F7",
                    name: "Chicken Escalope",
                    description: "Fried breaded chicken with french fries, coleslaw and vegetables.",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E7C6B23BF8FAF7DF00BA63A5306BD910",
                    name: "Fish Sayadieh",
                    description: "Cooked rice with fish topped with mixed nuts, and a side of tajan sauce.",
                    price: "60.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/693264B7C7485FD688D9D0360567B914",
                    name: "Stuffed Chicken",
                    description: "Cooked Oriental rice with chicken topped with mixed nuts, and a side of yoghurt.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A2C13DFCF1F4009E38063FE6997418A9",
                    name: "Grilled Fish Fillet",
                    description: "Fillet skewers with French fries, rice and vegetables with a side of tajan sauce.",
                    price: "68.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/29A8A5FA9D97C0F0C399032D97A0BA65",
                    name: "Vermicelli Rice",
                    description: "Cooked rice with vermicelli.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2FFD345E5D5E0447E7F5B6B871947826",
                    name: "Biryani Chicken",
                    description: "Cooked basmati rice with chicken and spices topped with mixed nuts.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/94BADC4DBD360181BEB66E891035E915",
                    name: "Grilled Kunooz Al Baher",
                    description: "Fish fillet, shrimp and calamari with rice, french fries, and vegetables and a side of cocktail sauce.",
                    price: "78.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2BBCE753CCED7E09912C9447C90C9B5C",
                    name: "Biryani Lamb",
                    description: "Cooked basmati rice with lamb meat and spices topped with mixed nuts.",
                    price: "60.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B3BAD5E659AD0E901B20CBF15B66786F",
                    name: "Saffron Rice",
                    description: "Cooked basmati rice with saffron.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/83F67044D2F3F22D2586A170B5B7418B",
                    name: "Grilled Salmon",
                    description: "With mashed potatoes and vegetables.",
                    price: "86.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/44BE92CE41FE25ED5EBB9937668C01A7",
                    name: "Breaded Fish Fillet",
                    description: "Fried breaded fish fillet with french fries, coleslaw and vegetables.",
                    price: "68.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F26A805DEAE18FACF934EEDAB3B5B7EE",
                    name: "Fried Kunooz Al Baher",
                    description: "Fish fillet, shrimp and calamari with rice, french fries, and vegetables and a side of cocktail sauce.",
                    price: "78.00",
                  },
                ]
              }
            },
            {
              name: 'Cold Appetizer',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/393563F6E4C53C08A9D78B7B8955B68D",
                    name: "Hummus",
                    description: "Chickpeas, tahini and lemon juice.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6E8FBEDD2C2794C7D47C3DE44666D4AD",
                    name: "Fattoush",
                    description: "Mixed vegetables, herbs salad topped with fried bread.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C4AF50DC6964654B367A5378D7429AD9",
                    name: "Tabouleh",
                    description: "Parsley, tomato and onion salad.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6B9449E081B968D964922C8EEDAA10BE",
                    name: "Vine Leaves",
                    description: "Rice stuffed grape leaves in oil.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3A39A004750C02D06BDE74CD4632FF01",
                    name: "Moutabbal",
                    description: "Mashed eggplant blended with tahini and lemon juice.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4F685A9FD7D862B50897C0C06BCCCCA8",
                    name: "Hummus Beiruty",
                    description: "Hummus with parsley, cumin and garlic.",
                    price: "31.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3A0F75B78D6BC1746EECC2EC71879099",
                    name: "Avocado Salad",
                    description: "Avocado lettuce cucumber tomato mintpomegranate seeds.",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/906E2D90B1A5D65B67C418815B9E6A8F",
                    name: "Rocca Salad",
                    description: "Rocca leaves, tomato & onion salad",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EB3C1E8C5909FFC96699F39C1101AA3B",
                    name: "Lentil Tabouleh",
                    description: "Everyone's favorite parsley salad, injected with Lentil grenadine",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/41185D304AB7550C9D50192B74D92B74",
                    name: "Hendbeh",
                    description: "Cooked dandelion leaves.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/88891A5E6A5C5527A683646C1FEC9669",
                    name: "Cheese and Beetroot Salad",
                    description: "Mixed herbs, cheese and beetroot salad with walnuts.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C76A7CDE35B789E59FBC6D7DEB7B763C",
                    name: "Muhammara",
                    description: "Chili paste blended with onion.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/00AC7D5124963EAB4338A4AB8BB1B38C",
                    name: "Baba Ghanouj",
                    description: "Grilled eggplant with vegetables.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E09B9BCF1850E299E8222BABBA98431C",
                    name: "Sliced Vegetable Platter",
                    description: null,
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/842A1E9DEC82B0F43EA9613C1FDF9801",
                    name: "Eggplant Moussaka",
                    description: "Cooked eggplant with mixed vegetables.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DD2DB2DD2D1E7F71ABEB8401B9F38C45",
                    name: "Yogurt Cucumber",
                    description: "Seasoned yogurt with cucumber.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/63D8787DE19D3B5927B5617F2858FCC2",
                    name: "Labneh (Add Garlic)",
                    description: "Fresh creamy yogurt.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/73ED4C5846B5781F5F0E8F7FDAF59906",
                    name: "Halloumi Salad",
                    description: "Halloumi cheese with mixed lettuceleaves tomato black olives fresh zaatar",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/692480088A3A74F0681F9E00D23A7AB4",
                    name: "Coleslaw",
                    description: "Cabbage, carrots and mayonnaise.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/240023DB4F9EC740C95C9853F260793A",
                    name: "Shanklish",
                    description: "Seasoned dried cheese with tomato and onion.",
                    price: "32.00",
                  },
                ]
              }
            },
            {
              name: 'Hot Appetizer',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/34FF1D5C2FC84F3D96345B7076DFF50B",
                    name: "French Fries",
                    description: "Deep fried potato.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8514E19FC2D6D55BCBE92D56E46B682A",
                    name: "Spiced Potato",
                    description: "Seasoned deep fried potato cubes.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6EBB5355AEB136CDEE07C18461660C53",
                    name: "Sambousek Cheese",
                    description: "4 fried pastry stuffed with cheese.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7C52269DA873AD42549CCAFDEAAC72F6",
                    name: "Fried Cheese Rolls",
                    description: "4 Fried spring rolls stuffed with cheese.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9403D6A4BB01696962B795903845B820",
                    name: "Fried Kibbeh",
                    description: "4 fried meat and crushed wheat dough stuffed with minced meat.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/06242FDD37EEB16789AF705A4A7B953C",
                    name: "Grilled Cheese Rolls",
                    description: "4 grilled puff pastry stuffed with cheese.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BD9DD3B296C0DC1C36803B001BE02D7C",
                    name: "Falafel Plate",
                    description: "Fried falafel with tahini, pickles and vegetables.",
                    price: "30.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763562696/Falafel._Crispy_golden_and_full_of_flavor._AlSafadi%D9%81%D9%84%D8%A7%D9%81%D9%84._%D9%85%D9%82%D8%B1%D9%85%D8%B4%D8%A9_%D8%B0%D9%87%D8%A8%D9%8A%D8%A9_%D9%88%D8%BA%D9%86%D9%8A%D8%A9_%D8%A8%D8%A7%D9%84%D9%86%D9%83%D9%87%D8%A9._%D8%A7%D9%84%D8%B5%D9%81%D8%AF%D9%8A_oewdgt.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'appetizer'}, {slug: 'vegetarian'},
                        {slug: 'vegan'}, {slug: 'lactose-free'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/147A7FF33ADB56DAC2F82D3A351014B2",
                    name: "Hummus with Meat and Pine",
                    description: "Hummus with fried meat and pine nuts.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DAD8CE73B46A61FD92E283017C0EEE85",
                    name: "4 Small Sized Lahm Bi Ajeen",
                    description: "4 small sized lahm bi ajeen (Minced meat mixed with onions and spices).",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D9537D0F56FE347697A7D4CB7521220C",
                    name: "Fried Chicken Liver",
                    description: "Fried chicken liver with pomegranate molasses sauce.",
                    price: "41.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/83E46FD7DAF4BD466666F3EB96811062",
                    name: "Sambousek Meat",
                    description: "4 fried pastry stuffed with meat.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/322BEC855DF95996F583B0CD5296138A",
                    name: "Grilled Halloumi",
                    description: "Grilled white halloumi cheese.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1E30FEA3EFC6664F8EBF16D11F306CA4",
                    name: "Fatayer Spinach",
                    description: "4 fried pastry stuffed with spinach.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E7FAC6955F099B6A5964B792D9D0D4FD",
                    name: "Lahm Bi Ajeen Trabolsi",
                    description: "2 lahm bi ajeen trabolsi, puff pastry with Minced meat onion and pomegranate molasses.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A3312F7EDEED629768113EDA9797595D",
                    name: "Hummus with Pine",
                    description: "Hummus with fried pine nuts.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BF96232C12827604FA6F54D4C8EAB0D8",
                    name: "Fried Makanek",
                    description: "Fried sausage with lemon.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/95B415B2C85D7D6FD11595C00F2B4D4A",
                    name: "Calamari",
                    description: "Fried calamari.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E92A3256CCA1671BD328A4DAE3BFFA5C",
                    name: "Lahme Ras Asfour",
                    description: "Fried meat cubes with lemon juice.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4153BE9554ED3378D62D1D78E71573A9",
                    name: "Shrimp Provencal",
                    description: "Grilled shrimp sauteed with garlic, lemon and coriander.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6938B82AF74860430076DCD7CABDBB1C",
                    name: "Lamb Tongues",
                    description: "Seasoned lamb tongues.",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F40E631A869FB156D1F84780ADC916E9",
                    name: "Fried Sujuk",
                    description: "Fried spicy sausage.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D473F90F705D3F94239B42018E2BA444",
                    name: "Foul",
                    description: "Fava beans seasoned with lemon juice and garlic.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BD142A750A2526CF6BBC63B294B87B4A",
                    name: "Fatteh with Meat",
                    description: "Chickpeas, fried bread and meat topped with yogurt.",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EF85D82DEC4A1A32B096E1E6B78DBA0B",
                    name: "Fatteh with Yogurt",
                    description: "Chickpeas and fried bread topped with yogurt.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/93930C1369E894E9128217F7A18438E7",
                    name: "4 Small Kafta Bi Ajeen",
                    description: "4 small sized kafta bi ajeen (Minced meat mixed with onions, parsley and spices).",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A4DBA4149E9F8D04464B6A9FE8345BAA",
                    name: "Fish Provencal",
                    description: "Grilled fish sauteed with garlic lemon and coriander.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/51C1E9C148AFCB6B2C70B320D6DEB3B3",
                    name: "Meat with Onion and Tomato",
                    description: "Fried meat with onion and tomato.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9898335DC8805A9F20208C68C3EA75A3",
                    name: "Hummus Balila",
                    description: "Chickpeas seasoned with cumin and garlic.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FBC790BA932DA5DD1123FDB93C08036D",
                    name: "Mixed Fried Vegetables",
                    description: "Fried eggplant, cauliflower and spiced potato.",
                    price: "32.00",
                  },
                ]
              }
            },
            {
              name: 'Soups',
              items: {
                create: [
                  {
                    image:
                      "https://images.deliveryhero.io/image/talabat/MenuItems/E5C9CB1643CC8C5AB72FFB7966E72C05",
                    name: "Lentil Soup",
                    description: "With fried bread.",
                    price: "23.00",
                  },
                  {
                    image:
                      "https://images.deliveryhero.io/image/talabat/MenuItems/F12094B788673ACDF05F6AB627CA019C",
                    name: "Seafood",
                    description: "Creamy seafood soup.",
                    price: "31.00",
                  },
                  {
                    image:
                      "https://images.deliveryhero.io/image/talabat/MenuItems/AEB2B828967FB456239D48CEA52325A0",
                    name: "Chicken Soup",
                    description: "Chicken soup with vegetable.",
                    price: "25.00",
                  },
                ]
              }
            },
            {
              name: 'Breakfast',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6372D7B0A4C1D5F8D4AD240F00F4AE00",
                    name: "Cheese Manakish",
                    description: "White akkawi melted cheese.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/33CC08743F23D6017AAC1ACB8729AA7A",
                    name: "Zaatar Manakish",
                    description: "Thyme mixed with oil and sesame.",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7EDD172E6DA42AF4EF2F445735BB255A",
                    name: "4 Small Lahm Bi Ajeen",
                    description: "4 small sized lahm bi ajeen (Minced meat mixed with onions and spices).",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AEE202979A10A8BC73BA0D07FA4CD897",
                    name: "Hummus with Meat and Pine",
                    description: "Hummus with fried meat and pine nuts.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/13F163BD1D0148EA4B90C2156D507EEE",
                    name: "Eggs with Meat",
                    description: "3 scrambled eggs with meat.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/75E9476E4D423CA33512ED6522A61869",
                    name: "Spinach Fatayer",
                    description: "Folded spinach pie cut in half.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1618FF7287953764E83A79B07E6DAA06",
                    name: "Foul",
                    description: "Fava beans seasoned with olive oil, lemon juice and garlic.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/14C56A088655099CB40F1C6B7E94A38C",
                    name: "Lahm Bi Ajeen",
                    description: "Minced meat mixed with onions and spices.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D8D3CAE499C9B18C14D903295E36DD10",
                    name: "Hummus with Pine",
                    description: "Hummus with fried pine nuts.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0EC309A830A7073B347121897040F10C",
                    name: "Lahm Bi Ajeen Trabolsi",
                    description: "Minced meat with onion and pomegranate molasses",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A494316734726CA6CE05697EBD5013C6",
                    name: "Cheese Majouka Manakish",
                    description: "Extra thick dough with extra cheese sprinkled with sesame.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0C229C03A51C5756345D85178EBFF603",
                    name: "Labneh",
                    description: "Fresh creamy yogurt.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A4FFA448E60FF79D487FB2D8971E21B5",
                    name: "Grilled Halloumi",
                    description: "Grilled white halloumi cheese.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7B49B698F6268F73387CA8B512C3BA1D",
                    name: "Hummus Balila",
                    description: "Chickpeas seasoned with olive oil, lemon juice,  garlic and cumin.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/22586B69AE78E580B35A990D404AF803",
                    name: "Fried Eggs",
                    description: "Your choice of 3 sunny side up or scrambled eggs.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/890E889034018325D3308266AC8C4C0B",
                    name: "Eggs with Sujuk",
                    description: "3 scrambled eggs with sujuk.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C0D5116C3749D7AABBA37E9605B04EB4",
                    name: "Eggs with Makanek",
                    description: "3 scrambled eggs with makanek.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C26187D719951E0CE323C9237E972993",
                    name: "Eggs with Tomato",
                    description: "3 scrambled eggs with tomato.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7FC6BA16FA28479A6A44CF6C328B2803",
                    name: "Turkey and Cheese Manakish",
                    description: "Turkey and cheese.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ED2859F43D0CA7D6E0F716E707621851",
                    name: "Fatteh with Yoghurt",
                    description: "Chickpeas and fried bread topped with yogurt and pine nuts.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/21DA67E6BA38FC61D577CF619C0FD78E",
                    name: "Fatteh with Meat",
                    description: "Chickpeas, fried bread and meat topped with yogurt and pine nuts.",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/56BAD8E56412F60ACFB05CA416A88B84",
                    name: "Eggs with Cheese",
                    description: "3 scrambled eggs with melted cheese.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1A3B0417399910C7C79213C1EF5E8227",
                    name: "4 Small Kafta Bi Ajeen",
                    description: "4 small sized kafta bi ajeen (Minced meat mixed with onions, parsley and spices).",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4AB2ABEC1B45B497F9CE47F75BDE287D",
                    name: "Kafta Bi Ajeen",
                    description: "Minced meat mixed with onions, parsley and spices.",
                    price: "26.00",
                  },
                ]
              }
            },
            {
              name: 'Sides and Extras',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4585DE8806F0A2731A5340D416D6E88F",
                    name: "Garlic Plate",
                    description: null,
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B67A6D42778CF8EB30A2F943B36D420E",
                    name: "Pickles",
                    description: null,
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E88A0DA76A68BB3921749C1F5575522C",
                    name: "Olives",
                    description: null,
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/51B0E8AE4BA83D25D54628BF2E95CFFF",
                    name: "Hot Bread",
                    description: "Your choice of white or brown hot bread.",
                    price: "1.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1AB25168502737BF0CC13E246DF3C462",
                    name: "Shattah (Chilli Paste)",
                    description: null,
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/04D35AE01DD0CE04273216CCF5E9D375",
                    name: "Yogurt",
                    description: null,
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8B5B89C31D56953FF35D0A5246B577B5",
                    name: "Grilled Onion Skewer",
                    description: null,
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AF624304E7A14946F1AA9A31C6CFF908",
                    name: "Grilled Fat Skewer",
                    description: null,
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CEE797899790FE8FADD7C217C178EBD0",
                    name: "Grilled Chilli Skewer",
                    description: null,
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/13A051F48C5B2D0D7980CC8F2C599215",
                    name: "Grilled Mushroom Skewer",
                    description: null,
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/79B6BF1D7EE1476BD52D74B129830433",
                    name: "Taratour",
                    description: null,
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5AB9AB30D0BFAE12A744F2E24707B1B9",
                    name: "Grilled Tomato Skewer",
                    description: null,
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FB7781B41462E2A972008AAEEFEAE2D0",
                    name: "Bakdounsia",
                    description: null,
                    price: "19.00",
                  },
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1DF08BF0C0734F7313E074F171C84EF2",
                    name: "Mixed Fruit Platter",
                    description: "Assorted fruits.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/67C4751A1B9E5C270E0D9B84F8A7D84C",
                    name: "Cheese Kunafa",
                    description: "Baked semolina pastry with cheese.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0D1AF1DF217A73376F441BF50F78DD4D",
                    name: "Halawet El Jibn",
                    description: "Creamy sweet cheese rolls.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AB9610255439DBED4A5C2CF7C4A2F400",
                    name: "Riz Bi Haleeb",
                    description: "Rice pudding.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B59D7E7667643D8A55C1F96CA92D7035",
                    name: "Othmaliye",
                    description: "Cream filled semolina pastry.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/544B48FBDA51C6061FBA8D87DEA77CFC",
                    name: "Katayef Kashta",
                    description: "Cream filled pancakes.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/97F7475DBC3977318DDB2AE30991154D",
                    name: "Banana and Chocolate",
                    description: "Banana and chocolate bread spread.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2444F16987B01AA1AE465FAD294A86FA",
                    name: "Sweet Melon Platter",
                    description: "Sliced sweet melon.",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DF9B36E34F17F22EF2396E76434A8581",
                    name: "Cream with Honey",
                    description: "Cream scoops with honey.",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'Juices',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/52FA93730565F739B7322B4B77B12A71",
                    name: "Guava",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0A2AFEE3E96B5D73794A6AF675E868D9",
                    name: "Laban Ayran",
                    description: null,
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A90BDAA83BD093FF5D946068949750E1",
                    name: "Cocktail Juice",
                    description: null,
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AD0A1DA0C31920A7A23FBA871880F991",
                    name: "Pomegranate",
                    description: null,
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4004DBFB29E3F1665CA826BEF95E50DC",
                    name: "Sliced Fruit Cocktail",
                    description: null,
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20FB663F5DAE264C9946160C10B69968",
                    name: "Orange",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E968E483B74ADF3EEE31A8F762734FB8",
                    name: "Pineapple",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FDB1A99398F81ECD02C20E64925D3978",
                    name: "Avocado",
                    description: null,
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CB15B26C85EB29DEE106BAE73D3E6937",
                    name: "Melon",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EDC6208DA271926A269CF412F5F46770",
                    name: "Lemonade with Mint",
                    description: null,
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BD87DC32AAF42B341D3C81F3C0620183",
                    name: "Carrot",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DCFDE8933E4D524F8BE092C518DC9546",
                    name: "Mango",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2C0B38606254B654F5424A21048EC9DD",
                    name: "Jellab",
                    description: null,
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/18D089CAEB535C617E9EC281D17A3C82",
                    name: "Strawberry",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FAF29FBC1D0F1406CAB19E8805FB6BA4",
                    name: "Banana and Milk",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1438ECB11E0052A04EDAD0267D0B366F",
                    name: "Lemonade",
                    description: null,
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EAC1602BE921926580FD0DCABC2CDC0F",
                    name: "Grapefruit",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9D8FD49487C71D9DC9C5E439735ACEA4",
                    name: "Apple",
                    description: null,
                    price: "28.00",
                  },
                ]
              }
            },
            {
              name: 'Cold Beverages',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E32C5EB6F05AFB4957746E6FC4D47FDA",
                    name: "Diet Pepsi",
                    description: null,
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/814306C0B56DAF9AA19639D6AE4E603E",
                    name: "Pepsi",
                    description: null,
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/39FA526C19AAC5018DB11F245567E0F7",
                    name: "Sparkling Water",
                    description: null,
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/896164CF0495C570395D0BC05F28D2ED",
                    name: "7up",
                    description: null,
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D6A52DF3F2713133969E89D842DC10DD",
                    name: "Diet 7up",
                    description: null,
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3658A9C75805EB73536CE9110CEDD800",
                    name: "Mirinda",
                    description: null,
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EE6F6173A011F8B8EF4ED15FAD09851D",
                    name: "Pepsi Black",
                    description: null,
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B2955B421C00217DDFD51D8071FA68C0",
                    name: "Red Bull Energy Drink",
                    description: null,
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A711A6303EE08004887854C2EA7F6456",
                    name: "Red Bull Sugar Free",
                    description: null,
                    price: "15.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Gazebo', // https://www.talabat.com/uae/restaurant/733457/gazebo-marina-mall?aid=1473
    country: 'UAE',
    city: 'Abu Dhabi',
    address: 'Gazebo Marina Mall Marina Mall Ring Rd opposite Bounce, Ground Floor Al Kasir Al Marina',
    latitude: 24.476032,
    longitude: 54.3204901,
    placeId: 'ChIJJ8WeWQdlXj4RhKwgklaORnE',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Salads & Raita',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961910948335612",
                    name: "Murgh Tikka Salad",
                    description: "Cubes of cucumber and chicken tikka mixed with spinach and lettuce, tossed in a yoghurt based dressing.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862800941755630",
                    name: "Caesar Salad",
                    description: "A green salad made of kale, iceberg lettuce, croutons, parmesan cheese, cranberry and black pepper in an olive oil and lemon juice dressing.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961917440995004",
                    name: "Rocket Salad",
                    description: "A mix of rocket leaves, parsley, tomatoes, onions and radish, drizzled with a dressing made of olive oil, lemon juice and seasoning.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862801160593493",
                    name: "Jarjeer Mango Salad",
                    description: "A mix of jarjeer leaves, sliced raw mango and white onion in a lime dressing.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063333/642feb64-0b75-4bca-8746-52377c234445.jpg",
                    name: "Fattoush",
                    description: "Lebanon's most famous salad made with a mix of fresh herbs, cucumber, tomatoes and crisp pita, bright with a flavor of sumac",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862801506117151",
                    name: "Tabouleh",
                    description: "A refreshing parsley salad made with bulgur wheat, cucumber and tomatoes, all dressed with a lemon vinaigrette.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Zaitooni_Salad638821213392058212.jpg",
                    name: "Zaitooni Salad",
                    description: "A salad made with olives, paneer and mushrooms in a yoghurt-based dressing.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862801987048165",
                    name: "Arabic Salad",
                    description: "A salad made of chopped lettuce, capsicum, tomatoes, carrot and cucumber in an olive oil dressing.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SHAHI_BAGH638641558592412984.jpg",
                    name: "Shahi Bagh",
                    description: "A salad made with chickpeas, nuts, raisins, green peas and fresh corn, tossed in a mint-flavoured dressing.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063339/4a5ffdf5-0704-43fd-aaf3-47ba878a275d.jpg",
                    name: "Kidney Bean Salad",
                    description: "A mix of cooked kidney beans, onions, tomatoes, cucumber, capsicum, cabbage and American corn, all tossed with a paste of tomato, green chilli, mustard and spices.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/HARA_BHARA_SALAD638592414636125879.jpg",
                    name: "Hara Bhara Salad",
                    description: "Crudites of carrot, tomato, radish and cucumber.",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862800457514716",
                    name: "Kachumber Salad",
                    description: "A salad made with a combination of chopped onions, tomatoes, cucumber, green chillies and coriander, in a lime dressing.",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ROCKET_ANAR_RAITA638592414634765275.jpg",
                    name: "Rocket Anar Raita",
                    description: "Spiced yoghurt with rocket leaves and pomegranate seeds.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ANAR_PUDINA_RAITA638592414634510659.jpg",
                    name: "Anar Pudina Raita",
                    description: "Spiced yoghurt with mint leaves and pomegranate seeds.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638860121980502080",
                    name: "Ananas Raita",
                    description: "Spiced yoghurt with pineapple.",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961914523580532",
                    name: "Raita",
                    description: "Spiced yoghurt with vegetables or boondi or cucumber.",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638860120552872726",
                    name: "Burhani Raita",
                    description: "Garlic-infused yoghurt.",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Plain_Yoghurt_1638644981202439054.jpg",
                    name: "Dahi",
                    description: "Plain yoghurt.",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862799449755033",
                    name: "Masala Papad",
                    description: "Fried lentil papadums topped with a tangy mix of onions, tomatoes, cucumber, green chillies, coriander, lemon juice and chaat masala.",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638860121116095017",
                    name: "Papad",
                    description: "Crisp Indian lentil pancake served roasted or fried.",
                    price: "3.00",
                  },
                ]
              }
            },
            {
              name: 'Snacks & Chaat',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961919476653579",
                    name: "Samosa Platter",
                    description: "An assortment of cheese, veg. and your choice of samosas-mutton mince/chicken mince.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GOSHT_KEEMA_SAMOSA638641558212898779.jpg",
                    name: "Gosht Keema Samosa",
                    description: "Triangular flaky pyramid shaped pastry stuffed with mutton mince, chopped onions, coriander and spices. A traditional Indian snack.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MURGH_KEEMA_SAMOSA638641558427818587.jpg",
                    name: "Murgh Keema Samosa",
                    description: "Crispy pyramid-shaped pastry, stuffed with chicken mince, chopped onions, coriander and spices. A traditional Indian snack",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHEESE_SAMOSA638641558015616729.jpg",
                    name: "Cheese Samosa",
                    description: "Crispy pyramid-shaped pastry, stuffed with grated cheddar cheese, mozzarella cheese, chopped parsley and spices.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638826325103871322",
                    name: "Subzi Samosa",
                    description: "An all time favourite, fried pastry pyramids stuffed with steamed potatoes and green peas tempered with cumin, ginger, green chillies and coriander seeds.",
                    price: "23.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MAKAI_CHEESE_TIKKI638810203374883638.jpg",
                    name: "Makai Cheese Tikki",
                    description: "A seasoned mixture of potatoes, fresh corn, and green peas, formed into small patties stuffed with cheese; shallow fried.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/PAPDI_CHAAT638810204882329242.jpg",
                    name: "Papdi Chaat",
                    description: "Papdi topped with grated mashed potato, whipped yoghurt, green chutney, and tamarind chutney, sprinkled with chaat masala.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Samosa_Chaat638974194627041784.jpg",
                    name: "Samosa Chaat",
                    description: "Fried crushed samosa topped with whipped yoghurt, green chutney and tamarind chutney, sprinkled with spices and sev.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DAHI_BATATA_PURI638810201146909258.jpg",
                    name: "Dahi Batata Puri",
                    description: "Fried puris stuffed with mashed potato, topped with yoghurt, green chutney, tamarind chutney and sev.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SEV_PURI638641558760828075.jpg",
                    name: "Sev Puri",
                    description: "Papdi topped with mashed potato, sev, green chutney and tamarind chutney.",
                    price: "18.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763569190/Dig_into_elevated_street-style_chaats_crafted_with_finesse_at_Gazebo._%EF%B8%8F__zzwouv.mp4',
                    tags: {
                      connect: [
                        {slug: 'indian'}, {slug: 'appetizer'}, {slug: 'snack'}, {slug: 'vegetarian'}, {slug: 'vegan'},
                        {slug: 'lactose-free'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'}, {slug: 'medium'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MASALA_FRIES638592414637080485.jpg",
                    name: "Masala Fries",
                    description: "Cajun spiced french fries.",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/French_Fries638821213373492505.jpg",
                    name: "French Fries",
                    description: "Baton cut deep fried potatoes.",
                    price: "15.00",
                  },
                ]
              }
            },
            {
              name: 'Soups',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GOSHT_YAKHNI_SHORBA638641558448045128.jpg",
                    name: "Gosht Yakhni Shorba",
                    description: "A delectable soup made from a full-bodied lamb stock; garnished with shredded lamb.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paya_Yakhni_Shorba638821213370275640.jpg",
                    name: "Paya Yakhni Shorba",
                    description: "A delectable soup made from lamb trotters simmered overnight on a slow fire; garnished with trotter meat.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dum_Murgh_Shorba638821213367613688.jpg",
                    name: "Dum Murgh Shorba",
                    description: "Exotic chicken soup flavoured with Indian herbs and spices.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lasooni_Dal_Palak_Shorba638821213369274692.jpg",
                    name: "Lasooni Dal Palak Shorba",
                    description: "Soup made of spinach paste and lentil, cooked with a blend of Indian spices.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Shorba_Dil_Pasand638821213370135382.jpg",
                    name: "Shorba Dil Pasand",
                    description: "Lentil soup with a blend of Indian spices.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tamatar_Shorba638821213378914441.jpg",
                    name: "Tamatar Shorba",
                    description: "A delectable soup made with smooth tomato puree, spices and vegetable stock; garnished with namak para.",
                    price: "18.00",
                  },
                ]
              }
            },
            {
              name: 'Kababs (Chicken)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AFGHANI_MURGH638810201016736767.jpg",
                    name: "Afghani Murgh",
                    description: "Classic grilled chicken marinated in traditional spices, cream and yoghurt served bone in.",
                    price: 60,
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Murgh638821213392730695.jpg",
                    name: "Tandoori Murgh",
                    description: "Classic grilled chicken marinated in a special tandoori masala flavoured yoghurt served bone in.",
                    price: 60,
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Seekh_Bharwan638821213374548349.jpg",
                    name: "Murgh Seekh Bharwan",
                    description: "Seekh made from cardamom infused chicken mince, stuffed with a creamy filling of cheese, mint, coriander and chargrilled.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Kalimirch_Kabab638821213375483093.jpg",
                    name: "Murgh Kalimirch Kabab",
                    description: "Boneless chunks of chicken marinated in yoghurt spiced with freshly ground black pepper; chargrilled.",
                    price: "41.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Gilafi_Seekh638821213376506934.jpg",
                    name: "Murgh Gilafi Seekh",
                    description: "Spiced chicken mince seekh, coated in finely chopped onions, bell peppers and chargrilled",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Malai_Seekh638821213380413672.jpg",
                    name: "Murgh Malai Seekh",
                    description: "Mildly spiced chicken mince seekh and chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Hari_Mirch_Murgh_Ke_Tikke638821213394328355.jpg",
                    name: "Hari Mirch Murgh Ke Tikke",
                    description: "Boneless chunks of chicken marinated in green chilli paste; chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MURGH_ZAFRANI_KABAB638465179551447042.jpg",
                    name: "Murgh Zafrani Kabab",
                    description: "Chargrilled boneless chunks of chicken marinated in yoghurt, white onion paste and saffron.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Malai_Kabab638821213370994028.jpg",
                    name: "Murgh Malai Kabab",
                    description: "Boneless chunks of chicken marinated in yoghurt, flavoured with cream and cheese; chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Cheese_Kabab638320852490356344.jpg",
                    name: "Murgh Cheese Kabab",
                    description: "Boneless breast of chicken marinated in yoghurt, cheddar cheese, ginger, garlic, green chilli, spices and lemon juice; chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Chatpata_Kabab638821213374330827.jpg",
                    name: "Murgh Chatpata Kabab",
                    description: "Boneless chunks of chicken marinated in hot and sour sauce, skewered with pieces of pineapple and chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Kastoori_Kabab638821213375397155.jpg",
                    name: "Murgh Kastoori Kabab",
                    description: "Boneless chunks of chicken marinated in yoghurt flavoured with fenugreek; chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Reshmi_Kabab638821213401650197.jpg",
                    name: "Murgh Reshmi Kabab",
                    description: "Boneless chunks of chicken marinated in a mixture of yoghurt, roasted gram flour, cream and eggs; chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Peshawari_Murgh_Tikka638821213377687317.jpg",
                    name: "Peshawari Murgh Tikka",
                    description: "Boneless chunks of chicken marinated in yoghurt, aromatic spices, garlic and ginger,  chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Achari_Tikka638821213376827381.jpg",
                    name: "Murgh Achari Tikka",
                    description: "Boneless chunks of chicken marinated in pickle flavoured yoghurt; chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638506742190894481",
                    name: "Murgh Tikka",
                    description: "Boneless chunks of chicken marinated in tandoori masala flavoured yoghurt; chargrilled.",
                    price: "40.00",
                  },
                ]
              }
            },
            {
              name: 'Kababs (Mutton)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Raan_E_Sikandari638641558557804680.jpg",
                    name: "Raan E Sikandari",
                    description: "Leg of baby lamb marinated overnight in ginger, garlic, garam masala, yoghurt, lime juice and chilli powder; slow-roasted for several hours.",
                    price: "115.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/TANDOORI_RAAN638810206426872494.jpg",
                    name: "Tandoori Raan",
                    description: "Leg of baby lamb marinated in tandoori masala spices infused yoghurt; chargrilled.",
                    price: "105.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Peshawari_Gosht_Tikka638821213373637981.jpg",
                    name: "Peshawari Gosht Tikka",
                    description: "Mutton cubes marinated in yoghurt, aromatic spices, garlic, ginger and young papaya; chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/KALIMIRCH_GOSHT_TIKKA638810202810755046.jpg",
                    name: "Kalimirch Gosht Tikka",
                    description: "Mutton cubes marinated in yoghurt spiced with freshly ground black pepper; chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/766545/product/1896063315/4c5f7163-2beb-4221-ac9c-d38f90eb2bf5_enhanced.jpg",
                    name: "Gosht Galawati Kabab",
                    description: "Fine lamb mince mixed with spices, chopped green chillies and coriander, shaped into tikkis; shallow fried and served on a bed of reshmi paratha.",
                    price: "52.00",
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763569754/%D0%91%D0%B5%D0%B7%D1%96%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%B8%CC%86_u4rzib.mp4',
                    highlighted: true,
                    tags: {
                      connect: [
                        {slug: 'indian'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'}, {slug: 'medium'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Burrah_Chops_Lazeez638821213376414861.jpg",
                    name: "Burrah Chops Lazeez",
                    description: "Tender mutton chops marinated in yoghurt and cream, delicately flavoured with pepper and other spices; chargrilled.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Gilafi_Seekh638821213375785721.jpg",
                    name: "Gosht Gilafi Seekh",
                    description: "Seekh made from mutton mince, coated in finely chopped onions and bell peppers; chargrilled.",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Lucknowi_Seekh638821213374445478.jpg",
                    name: "Gosht Lucknowi Seekh",
                    description: "Seekh made from mutton mince, blended with spices and finely chopped onions; chargrilled.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SeekhEDum_Pukht638821213401546959.jpg",
                    name: "Seekh E Dum Pukht",
                    description: "Seekh made from mutton mince blended with fresh coriander, mint, ginger, onion and mild spices; chargrilled.",
                    price: "48.00",
                  },
                ]
              }
            },
            {
              name: 'Kababs (Lobster)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lobster_Tandoori638821213375833308.jpg",
                    name: "Lobster Tandoori",
                    description: "Lobster marinated in tandoori masala infused yoghurt; grilled.",
                    price: "105.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/700941/product/1896063391/aa0913ce-d42c-497f-976f-4dd941bf2b75_enhanced.jpg",
                    name: "Malai Lobster",
                    description: "Lobster marinated in ginger, garlic, cream and cashew paste, delicately flavoured with white pepper and cardamom; chargrilled.",
                    price: "105.00",
                  },
                ]
              }
            },
            {
              name: 'Kababs (Prawns)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063392/c4ba7048-c0a7-4324-addc-0e7934cce82e.jpg",
                    name: "Aatish E Jhinga",
                    description: "Jumbo prawns marinated in chef's special masala, chargrilled.",
                    price: "75.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/TANDOORI_JHINGA638810206204874847.jpg",
                    name: "Jhinga Tandoori",
                    description: "Jumbo prawns marinated in yoghurt and tandoori masala; chargrilled.",
                    price: "75.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/768412/product/1896063394/57e11adc-d66b-4a6b-a272-2656b1c26875_enhanced.jpg",
                    name: "Malai Jhinga",
                    description: "Jumbo prawns marinated in cream and cashew paste, delicately flavoured with ginger and garlic, white pepper and cardamom; chargrilled.",
                    price: "75.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Jhinga_Kalimirch_Tikka638821213372359387.jpg",
                    name: "Jhinga Kalimirch Tikka",
                    description: "Medium-sized prawns marinated in peppercorn-infused yoghurt and spices; chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638860284047199210",
                    name: "Jhinga Achari",
                    description: "Medium-sized prawns marinated in pickle flavoured yoghurt; chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/HARI_MIRCH_AUR_NIMBU_KA_J638641558691512673.jpg",
                    name: "Hari Mirch Aur Nimbu Ka Jhinga",
                    description: "Medium-sized prawns marinated with lemon and a paste of green chili, coriander and spring onion chargrilled.",
                    price: "55.00",
                  },
                ]
              }
            },
            {
              name: 'Kababs (Fish)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/700941/product/1896063400/45836822-450c-4a08-9ba5-8de9a400ea8a_enhanced.jpg",
                    name: "Grilled Hammour",
                    description: "Whole hammour marinated with ginger garlic paste, lemon juice, mustard oil, fenugreek and mixed spices; chargrilled.",
                    price: "76.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Pomfret638821213382073582.jpg",
                    name: "Tandoori Pomfret",
                    description: "Whole white pomfret marinated in tandoori masala infused yoghurt, chargrilled.",
                    price: "75.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kalimirch_Mahi_Tikka638821213376485168.jpg",
                    name: "Kalimirch Mahi Tikka",
                    description: "Boneless cubes of hammour marinated in yoghurt spiced with freshly ground black pepper and chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Peshawari_Mahi_Tikka638821213376688694.jpg",
                    name: "Peshawari Mahi Tikka",
                    description: "Boneless cubes of hammour marinated in yoghurt, aromatic spices, garlic and ginger chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Hariyali_Mahi_Tikka638821213401650912.jpg",
                    name: "Hariyali Mahi Tikka",
                    description: "Boneless cubes of salmon or hammour marinated in a paste of coriander, green chilli, ginger, garlic and spices; chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Mahi_Tikka_Lasooni638821213375452001.jpg",
                    name: "Mahi Tikka Lasooni",
                    description: "Fillet fish From your choice marinated in a refreshing citrusy blend of lemon juice, garlic and yoghurt; chargrilled.",
                    price: "55.00",
                  },
                ]
              }
            },
            {
              name: 'Kababs (Vegetarian)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Mahi_Tikka638821213376662646.jpg",
                    name: "Mahi Tikka",
                    description: "Fillet of Salmon or Hammour marinated in a refreshing citrusy blend of lemon juice, thymol seeds and yoghurt; chargrilled.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SUBZ_GALAWATI_KABAB638810205476968255.jpg",
                    name: "Subz Galawati Kabab",
                    description: "Mince vegetables mixed with spices, chopped green chillies and coriander, shaped into tikkis; shallow fried and served on a bed of reshmi paratha.",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/709790/product/1896063342/0e63c482-9e39-4d90-8920-a3c1a78c953a_enhanced.jpg",
                    name: "Bharwan Paneer Tikka",
                    description: "Roundels of cottage cheese marinated in yoghurt and spices, stuffed with a mixture of cottage cheese, cashew and raisins; chargrilled.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Tikka638821213374062517.jpg",
                    name: "Paneer Tikka",
                    description: "Pieces of cottage cheese marinated in yoghurt flavoured with tandoori masala; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Chatpata638821213370622504.jpg",
                    name: "Paneer Chatpata",
                    description: "Pieces of cottage cheese marinated in a tangy sauce, chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kalimirch_Paneer_Tikka638821213390428103.jpg",
                    name: "Kalimirch Paneer Tikka",
                    description: "Pieces of cottage cheese marinated in yoghurt spiced with freshly ground black pepper; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Malai_Tikka638821213372655326.jpg",
                    name: "Paneer Malai Tikka",
                    description: "Pieces of cottage cheese marinated in yoghurt flavoured with cream and cheese; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lasooni_Paneer_Tikka638821213370107826.jpg",
                    name: "Lasooni Paneer Tikka",
                    description: "Pieces of cottage cheese marinated with yoghurt and garam masala, delicately flavoured with garlic; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Achari_Paneer_Tikka638821213403579311.jpg",
                    name: "Achari Paneer Tikka",
                    description: "Pieces of cottage cheese marinated in pickle flavoured yoghurt; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Broccoli638821213395053471.jpg",
                    name: "Tandoori Broccoli",
                    description: "Florets of broccoli marinated in tandoori masala infused yoghurt and spices; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Malai_Broccoli638821213374904710.jpg",
                    name: "Malai Broccoli",
                    description: "Florets of broccoli marinated with cream, cheese and infused with spices; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Methi_Malai_Seekh638821213375535797.jpg",
                    name: "Methi Malai Seekh",
                    description: "Seekh made with grated cottage cheese, potatoes and fresh fenugreek leaves, seasoned with green chillies, fresh coriander and chaat masala; chargrilled.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SUBZI_SEEKH_KABAB638465179552204155.jpg",
                    name: "Subzi Seekh Kabab",
                    description: "Seekh made with minced seasonal vegetables, flavoured with fresh herbs, green chillies and chaat masala; chargrilled.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Shahi_Mushroom638821213393023218.jpg",
                    name: "Shahi Mushroom",
                    description: "Fresh button mushrooms marinated in a mixture of yoghurt, cream, coconut powder, ginger, spices and fresh coriander; chargrilled.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bharwan_Tandoori_Mushroom638821213395054666.jpg",
                    name: "Bharwan Tandoori Mushroom",
                    description: "Fresh mushrooms stuffed with spinach and cottage cheese, marinated in yoghurt and spices; chargrilled.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bharwan_Aloo638821213373842749.jpg",
                    name: "Bharwan Aloo",
                    description: "Yoghurt marinated potatoes with a spiced stuffing of cottage cheese; chargrilled.",
                    price: "34.00",
                  },
                ]
              }
            },
            {
              name: 'Curries (Chicken)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dum_Murgh_Handi_Korma638641558308485374.jpg",
                    name: "Dum Murgh Handi Korma",
                    description: "An aromatic dish made with boneless chicken in a cashew based gravy, delicately flavored with spices, finished with butter and cream; served in an earthen pot.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Kalimirch_Kabab_Mas638320853927098067.jpg",
                    name: "Murgh Kalimirch Kabab Masala",
                    description: "Chargrilled chicken kalimirch kabab, cooked with cashew-onion gravy, flavoured with ginger, garlic, chilli and spices, delicately flavoured with pepper.",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MURGH_TIKKA_MASALA638465179551368542.jpg",
                    name: "Murgh Tikka Masala",
                    description: "Tantalizing grilled chicken tikka pieces simmered in a mildly spiced tomato gravy.",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Reshmi_Kabab_Masala638821213401746530.jpg",
                    name: "Murgh Reshmi Kabab Masala",
                    description: "Reshmi kabab laced with a gravy made of cashews, cream and butter; mildly spiced.",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Malai_Kabab_Masala638320853145059943.jpg",
                    name: "Murgh Malai Kabab Masala",
                    description: "Chargrilled chicken malai kabab, cooked with a gravy of cashew, laced with cheese and fresh cream, finished with butter and cream.",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961913641283484",
                    name: "Peshawari Murgh Tikka Masala",
                    description: "Chargrilled chicken peshawari tikka, cooked with a gravy of cashew, cream, butter and spices.",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961909365824043",
                    name: "Murgh Seekh Kabab Masala",
                    description: "Chargrilled chicken mince seekh, cooked in a spicy masala gravy.",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Murgh_Masala638320855732448668.jpg",
                    name: "Tandoori Murgh Masala",
                    description: "Chargrilled chicken tandoori simmered in a mildly spiced tomato gravy.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Maskawala638821213393765076.jpg",
                    name: "Murgh Maskawala (Butter Chicken)",
                    description: "Chargrilled chicken simmered in a butter and cream speckled tomato gravy.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/742780/product/1896063455/c35fdb26-ff9b-4a9a-a972-bee0a481c4c3_enhanced.jpg",
                    name: "Murgh Khurchan",
                    description: "Chargrilled chicken pieces stewed with onions, fresh herbs and spices in a tomato based gravy.",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/742780/product/1896063456/1ec5bf0c-4a0b-4b0d-8cbb-47bb5f975fc2_enhanced.jpg",
                    name: "Murgh Roganjosh",
                    description: "Boneless pieces of chicken cooked with fried onions, red chillies, pounded garam masala and tomatoes.",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bhuna_Murgh638821213376352724.jpg",
                    name: "Bhuna Murgh",
                    description: "Tender chicken cubes and spices sauteed or bhuna till well browned, simmered in a gravy of tomatoes, onions, ginger, garlic and red chili powder.",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/IMG20240706WA0031638558608056200633.jpg",
                    name: "Murgh Keema Dopyaza",
                    description: "Minced chicken cooked with onions and tomatoes, flavoured with ginger, garlic and green chillies, finished with butter.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dum_Murgh_Keema638821213378215848.jpg",
                    name: "Dum Murgh Keema",
                    description: "Minced chicken cooked with onions, tomatoes, ginger garlic paste and special ground spices in a sealed vessel on a slow fire.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Lahori638821213377801150.jpg",
                    name: "Murgh Lahori",
                    description: "A typical north frontier kadai preparation - A speciality of the Chef.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Handi638821213378675602.jpg",
                    name: "Murgh Handi",
                    description: "Juicy chunks of chicken in a medium spiced gravy made of onion, cashew, coriander and spinach.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Achari638821213378197082.jpg",
                    name: "Murgh Achari",
                    description: "A piquant, aromatic dish of chicken, cooked in traditional pickling spices, flavoured with red chillies.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Chettinadu638821213377588938.jpg",
                    name: "Murgh Chettinadu",
                    description: "Boneless pieces of chicken in a spicy masala of red chillies, onion, coriander, tomato and garam masala.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MURGH_KORMA638465179551243720.jpg",
                    name: "Murgh Korma",
                    description: "Boneless pieces of chicken cooked in a medium thick gravy made of cashew paste, cumin, dry coconut powder and coriander, delicately flavoured with ginger garlic paste and red chillies.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tawa_Murgh_Masala638821213392529208.jpg",
                    name: "Tawa Murgh Masala",
                    description: "Boneless chicken marinated in yoghurt and spices, simmered in an onion and tomato based gravy flavoured with cumin and garlic; garnished with a boiled egg.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Kadai_Peshawari638821213376722512.jpg",
                    name: "Murgh Kadai Peshawari",
                    description: "Tender chicken pieces stewed with onions, fresh herbs and spices in a tomato based gravy, prepared in a kadai.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MASKAWALA_SAUCE638641558421812494.jpg",
                    name: "Maskawala Sauce",
                    description: "Our signature butter and cream speckled tomato gravy; served just on it's own.",
                    price: "30.00",
                  },
                ]
              }
            },
            {
              name: 'Curries (Mutton)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/TANDOORI_RAAN_MASALA638810206394240002.jpg",
                    name: "Tandoori Raan Masala",
                    description: "Grilled leg of baby lamb, simmered in a mildly spiced tomato gravy.",
                    price: "120.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GOSHT_KALIMIRCH_TIKKA_MAS638810201872927437.jpg",
                    name: "Gosht Kalimirch Tikka Masala",
                    description: "Grilled pieces of mutton kalimirch tikka in an onion-cashew gravy, delicately flavoured with pepper.",
                    price: "67.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Tikka_Masala638821213375801970.jpg",
                    name: "Gosht Tikka Masala",
                    description: "Grilled pieces of mutton tikka in an onion, cashew and tomato based gravy, delicately spiced.",
                    price: "67.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dum_Gosht_Handi_Korma638641558084708962.jpg",
                    name: "Dum Gosht Handi Korma",
                    description: "An aromatic dish made with boneless mutton in a cashew-onion gravy with chilli powder and other spices served in an earthen pot.",
                    price: "62.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/674782/product/1896063694/2f1e8d19-bd7f-48d9-bcaf-35cabf3dc70d_enhanced.jpg",
                    name: "Gosht Seekh Kabab Masala",
                    description: "Chargrilled mutton mince seekh, cooked in a spicy masala gravy.",
                    price: "62.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Burrah_Chops_Masala638821213401635708.jpg",
                    name: "Burrah Chops Masala",
                    description: "Tender lamb chops cooked with garam masala, ginger, garlic, yoghurt, spices and brown onions, finished with saffron and kewda dissolved in milk.",
                    price: "62.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638538614071601521",
                    name: "Gosht Roganjosh",
                    description: "Boneless pieces of mutton cooked with fried onions, red chillies, pounded garam masala and tomatoes.",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063706/fdefeec1-f630-415d-8639-1cb428bb17b8.jpg",
                    name: "Gosht Korma",
                    description: "Boneless pieces of mutton cooked in a medium thick gravy made of cashew paste, cumin, dry coconut powder and coriander, delicately flavoured with ginger garlic paste and red chillies.",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Handi_Ka_Gosht638821213382664737.jpg",
                    name: "Handi Ka Gosht",
                    description: "Lamb cubes simmered in a gravy of yoghurt, ginger, garlic, onions and cashews, finished with garam masala and spices.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Banjara638821213378363611.jpg",
                    name: "Gosht Banjara",
                    description: "Mutton curry with whole spices, garlic, cloves, ginger batons, chillies and red onion cooked on a slow fire.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bhuna_Gosht638821213378658487.jpg",
                    name: "Bhuna Gosht",
                    description: "Tender mutton cubes and spices sautéed or ‘bhuna’ till well browned, simmered in a gravy of tomatoes, onions, ginger, garlic and red chilli powder.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Achari_Gosht638821213377860931.jpg",
                    name: "Achari Gosht",
                    description: "Tender boneless cubes of mutton spiced with mustard, fennel and curry leaves, simmered in a sauce of tomatoes and tamarind.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kadai_Gosht638821213402756105.jpg",
                    name: "Kadai Gosht",
                    description: "Boneless pieces of mutton cooked with capsicum, onions, green chillies and tomatoes, flavoured with peppercorns and garam masala.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Nalli_Ka_Khaas_Salan638821213393836910.jpg",
                    name: "Nalli Ka Khaas Salan",
                    description: "Shanks of baby lamb, braised in a subtly infused herbal and aromatic potli masala.",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/665211031/ce4c7df4-71ac-4aa4-b63b-c0e0a14ba98d.jpg",
                    name: "Gosht Kofta Masala",
                    description: "Deep fried mutton mince balls cooked in an onion, cashew and tomato based gravy, delicately spiced.",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DUM_KA_KEEMA638055861344620979.jpg",
                    name: "Dum Ka Keema",
                    description: "Minced lamb cooked with onions, tomatoes, ginger garlic paste and special ground spices in a sealed vessel on a slow fire.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Keema_Hari_Mirch_Ka_Dopya638821213376878608.jpg",
                    name: "Keema Hari Mirch Ka Dopyaza",
                    description: "Minced lamb cooked with onions, ginger, garlic, chillies, yoghurt, garam masala and lime juice.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638538631156134223",
                    name: "Keema Mutter",
                    description: "Minced lamb and green peas cooked with onions, tomatoes, ginger garlic paste and ground spices.",
                    price: "46.00",
                  },
                ]
              }
            },
            {
              name: 'Curries (Lobster)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Lobster_Masala638821213386382062.jpg",
                    name: "Tandoori Lobster Masala",
                    description: "Tantalizing grilled lobster simmered in a mildly spiced tomato gravy.",
                    price: "115.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kadai_Lobster638821213377236711.jpg",
                    name: "Kadai Lobster",
                    description: "Pieces of lobster stir fried with capsicum and tomatoes, spiced with black pepper.",
                    price: "105.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lobster_Malai_Korma638320852007448849.jpg",
                    name: "Lobster Malai Korma",
                    description: "Lobster pieces cooked in a smooth rich gravy made of yoghurt, tomato puree and fresh cream, delicately spiced.",
                    price: "105.00",
                  },
                ]
              }
            },
            {
              name: 'Curries (Prawns)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063496/6b4e9ee8-7b0f-492e-a18e-c0340aa226e1.jpg",
                    name: "Aatish E Jhinga Masala",
                    description: "Grilled jumbo prawns cooked in a rich tomato and cashew based gravy, infused with spices.",
                    price: "88.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Jhinga_Masala638821213382390469.jpg",
                    name: "Tandoori Jhinga Masala",
                    description: "Tantalizing grilled jumbo prawns simmered in a mildly spiced tomato gravy.",
                    price: "88.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Jhinga_Kalimirch_Tikka_Ma638320851012678195.jpg",
                    name: "Jhinga Kalimirch Tikka Masala",
                    description: "Grilled medium-sized prawns, cooked in a mildly spiced gravy of onion, cashew, ginger, garlic and spices, laced with butter.",
                    price: "68.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/JHINGA_MASKAWALA638592414636485142.jpg",
                    name: "Jhinga Maskawala",
                    description: "Succulent prawns simmered in a butter and cream speckled tomato gravy.",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/JHINGA_LAZEEZ638641558566255605.jpg",
                    name: "Jhinga Lazeez",
                    description: "Succulent prawns simmered in a gravy made of onion, tomato, ginger, garlic, cashew paste and coconut milk; finished with butter and cream.",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Jhinga_Dum_Masala638821213376233354.jpg",
                    name: "Jhinga Dum Masala",
                    description: "Succulent prawns simmered in a tomato based gravy, flavoured with herbs.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Jhinga_Kadai638821213377685364.jpg",
                    name: "Jhinga Kadai",
                    description: "Prawns stir fried with capsicum and tomatoes, spiced with green chillies and black pepper.",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063505/d9590b24-4c4c-495c-90e7-026cafe6b8e0.jpg",
                    name: "Jhinga Chettinad",
                    description: "Succulent prawns in a spicy masala of red chillies, onions, tomatoes, coriander and garam masala.",
                    price: "55.00",
                  },
                ]
              }
            },
            {
              name: 'Curries (Fish)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Pomfret_Masala638821213387027735.jpg",
                    name: "Tandoori Pomfret Masala",
                    description: "Tandoori Pomfret laced with a tomato based masala; made tangy with pomegranate and sprinkled with pepper.",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063434/35af93e6-ce84-45a4-9ff3-39ffa39394b2.jpg",
                    name: "Machli Tikka Masala",
                    description: "Grilled salmon or hammour tikka laced with a flavorful gravy of onion, tomato and cashew.",
                    price: "68.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MACHLI_PESHAWARI_TIKKA_MA638641558681906096.jpg",
                    name: "Machli Peshawari Tikka Masala",
                    description: "Grilled hammour peshawari tikka, cooked with a gravy of cashew, cream, butter and spices.",
                    price: "68.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/664764/product/1896063436/b662e5f9-dca0-4794-b7d9-0894fdaa4fa1_enhanced.jpg",
                    name: "Machli Jalfrezi",
                    description: "Cubes of Salmon or Hammour sauteed with ginger, garlic and capsicum, tossed with a tomato-onion-cashew sauce, flavoured with spices.",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Machli_Tawa_Masala638821213377007240.jpg",
                    name: "Machli Tawa Masala",
                    description: "Cubes of salmon or hammour laced with a tomato based masala, made tangy with pomegranate and sprinkled with pepper.",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Laal_Mirch_Ki_Machli638821213387537042.jpg",
                    name: "Laal Mirch Ki Machli",
                    description: "Fillet of Salmon or Hammour cooked in a gravy of onion, tomato and red chilli.",
                    price: "58.00",
                  },
                ]
              }
            },
            {
              name: 'Curries (Vegetarian)',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Stuffed_Mushroom_Masala638821213392738113.jpg",
                    name: "Stuffed Mushroom Masala",
                    description: "Chargrilled stuffed mushrooms laced with a gravy made of cashew, tomato and yoghurt, delicately spiced.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/37539/product/1896063575/edcc0daa-d316-4c51-96d9-dd5e57d1175c_enhanced.jpg",
                    name: "Tandoori Broccoli Masala",
                    description: "Grilled broccoli sauteed with spices, simmered in a gravy of tomato, onion, ginger, garlic and chilli powder.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Subzi_Seekh_Kabab_Masala638821213382522193.jpg",
                    name: "Subzi Seekh Kabab Masala",
                    description: "Veg seekh kabab in a sauce of caramalised shallots and tomatoes; enhanced with khoya.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/646028/product/1896063579/c7304390-c6dd-4d46-bac9-15445fcb17e6_enhanced.jpg",
                    name: "Bharwan Aloo Masala",
                    description: "Grilled stuffed potatoes sauteed with ginger, garlic and green chillies, cooked in an onion-cashew gravy, flavoured with spices.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Tikka_Masala638821213375514631.jpg",
                    name: "Paneer Tikka Masala",
                    description: "Paneer tikka laced with a delicately spiced gravy made of yoghurt and cashews.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638487786688269108",
                    name: "Paneer Lahori",
                    description: "Paneer cooked in a thick creamy tomato based gravy, infused with a blend of spices and flavors.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Makhni_Kofta638821213377393450.jpg",
                    name: "Paneer Makhni Kofta",
                    description: "Spinach-stuffed cottage cheese roundels, simmered in a tomato and cashew based gravy made rich with butter.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/PANEER_BHURJEE638592414636289753.jpg",
                    name: "Paneer Bhurjee",
                    description: "Chopped cottage cheese tempered with spices, sautéed with onions, tomatoes and green chillies.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638538615222360763",
                    name: "Palak Paneer Bhurjee",
                    description: "Chopped cottage cheese and spinach tempered with spices, sautéed with onions, tomatoes and green chillies.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Methi_Chaman_Kashmiri638821213401750484.jpg",
                    name: "Methi Chaman Kashmiri",
                    description: "Grated cottage cheese and fried fenugreek leaves in a rich gravy of cashews and cream.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dhingri_Mutter_Paneer638821213401715617.jpg",
                    name: "Dhingri Mutter Paneer",
                    description: "Fresh mushrooms, green peas and cubes of cottage cheese, simmered in a medium-spiced, smooth onion based gravy.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kadai_Paneer638821213376422148.jpg",
                    name: "Kadai Paneer",
                    description: "Fresh cottage cheese stir fried with capsicum and tomatoes, seasoned with black pepper.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Dopyaza638821213374987715.jpg",
                    name: "Paneer Dopyaza",
                    description: "Fresh cottage cheese pieces tempered with cumin and spices, tossed with cubes of onion in a tomato based gravy.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Jalfrezi638821213376840292.jpg",
                    name: "Paneer Jalfrezi",
                    description: "Cubes of cottage cheese, onions, tomatoes and capsicum in a sweet and sour sauce.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Malai_Kofta638821213369378003.jpg",
                    name: "Malai Kofta",
                    description: "Roundels of cottage cheese, stuffed with cheese, carrot and spinach, simmered in an onion and cashew based gravy.",
                    price: "33.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Navaratan_Korma638821213376787001.jpg",
                    name: "Navaratan Korma",
                    description: "Assorted vegetables cooked in a cashew based gravy, made rich with butter and cream; garnished with dry fruits.",
                    price: "33.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Vilayati_Subzi638821212227969542.jpg",
                    name: "Vilayati Subzi",
                    description: "Garden fresh vegetables (broccoli, zucchini, capsicum and mushrooms) cooked with tomatoes, ginger, garlic and spices.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/TAWA_SUBZI_MASALA638055879635750160.jpg",
                    name: "Tawa Subzi Masala",
                    description: "Vegetables and spices sauteed on a griddle simmered in a gravy of tomatoes, onions, ginger, garlic and chilli powder.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Subzi_Makhni638821213392740471.jpg",
                    name: "Subzi Makhni",
                    description: "Pieces of cauliflower, beans, carrots and green peas simmered in a tomato based gravy; made rich with butter.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Subzi_Hyderabadi638821213378302880.jpg",
                    name: "Subzi Hyderabadi",
                    description: "Fresh spinach, mushrooms, green peas, cottage cheese and other mixed vegetables seasoned with garam masala.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SUBZI_KOLHAPURI638592414637633942.jpg",
                    name: "Subzi Kolhapuri",
                    description: "A blend of fresh garden vegetables and mushrooms in a hot and spicy red chilli sauce; tempered with curry leaves.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/KADAI_SUBZI638465179552717822.jpg",
                    name: "Kadai Subzi",
                    description: "Garden fresh vegetables and mushrooms stewed with onions, tomatoes, green chillies and ginger slices cooked with kadai masala.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bhindi_Dopyaza638821213377956045.jpg",
                    name: "Bhindi Dopyaza",
                    description: "Marinated and deep fried okra, tempered with cumin, tossed in a diced onion and tomato based gravy.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Mirch_Ka_Salan638821213377035504.jpg",
                    name: "Mirch Ka Salan",
                    description: "Stir fried stuffed chillies in a special sauce of sesame seeds, peanuts and coconut; flavoured with spices.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lahori_Aloo638821213376959173.jpg",
                    name: "Lahori Aloo",
                    description: "Baby potatoes cooked in a tangy sauce of tomatoes, yoghurt, red chilli powder, ginger and garlic; infused with fenugreek powder.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Aloo_Palak638821213375833320.jpg",
                    name: "Aloo Palak",
                    description: "Diced potatoes cooked in a spinach based gravy; tempered with spices.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Aloo_Methi638821213377671183.jpg",
                    name: "Aloo Methi",
                    description: "Diced potatoes tempered with curry leaves, cumin and chillies; sauteed with fried fenugreek.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Aloo_Gobi_Adraki638821213395491388.jpg",
                    name: "Aloo Gobi Adraki",
                    description: "Diced potatoes and cauliflower florets tossed with cubes of onion, tomatoes, chillies;  flavoured with ginger.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Sarson_Ka_Saag638821213394762102.jpg",
                    name: "Sarson Ka Saag",
                    description: "Fresh mustard leaves, puréed and cooked with onions and tomatoes, tempered with spices and green chillies, finished with butter.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kadai_Chole638821213378664676.jpg",
                    name: "Kadai Chole",
                    description: "Chickpeas tempered with onions, cumin seeds, red chillies, turmeric powder, garam masala, kadai masala and green chillies.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638826339794635536",
                    name: "Dal E Khaas",
                    description: "Slow-cooked whole urad lentils with tomatoes and home churned butter.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dal_Tadka638821213377314808.jpg",
                    name: "Dal Tadka",
                    description: "Split yellow lentils tempered with cumin, garlic, tomatoes and red chillies.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961912894470231",
                    name: "Paneer Kalimirch Tikka Masala",
                    description: "Chargrilled paneer kalimirch tikka, cooked with cashew-onion gravy, flavoured with ginger, garlic, chilli and spices, delicately flavoured with pepper.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dum_Subz_Handi_Korma638641558372164063.jpg",
                    name: "Dum Subz Handi Korma",
                    description: "An aromatic dish made of exotic vegetables, pineapple and paneer in a tomato-cashew gravy, delicately flavored with spices; served in an earthen pot.",
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/PANEER_MAKHNI638641558572783805.jpg",
                    name: "Paneer Makhni",
                    description: "Pieces of cottage cheese simmered in a tomato based gravy; made rich with butter.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/METHI_MALAI_PANEER_MUTTER638641558550403470.jpg",
                    name: "Methi Malai Paneer Mutter",
                    description: "Fried cottage cheese, fried fenugreek leaves and green peas simmered in a cashew based gravy; finished with butter and cream.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/PALAK_PANEER638641558480052596.jpg",
                    name: "Palak Paneer",
                    description: "Fried cottage cheese simmered in a spinach based gravy; tempered with spices.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/KHUMBH_MUTTER_MASALA638641558659814477.jpg",
                    name: "Khumbh Mutter Masala",
                    description: "Button mushrooms and green peas simmered in a cashew-onion gravy; finished with cream and butter.",
                    price: "35.00",
                  },
                ]
              }
            },
            {
              name: 'Signature Biryanis & Rice',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tandoori_Murgh_Biryani638600040570007595.jpg",
                    name: "Tandoori Murgh Biryani",
                    description: "Chicken marinated with spices and chargrilled, layered with aromatic basmati rice cooked in a full-bodied chicken stock on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Afghani_Murgh_Biryani638600040554674787.jpg",
                    name: "Afghani Murgh Biryani",
                    description: "Chargrilled chicken afghani, layered with aromatic basmati rice; cooked in a full-bodied chicken stock on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Tikka_Biryani638600040569948677.jpg",
                    name: "Murgh Tikka Biryani",
                    description: "Delicately flavored chargrilled chicken tikka, layered with a signature sauce and aromatic basmati rice, cooked on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Zafrani_Murgh_Tikka_Birya638600040557595265.jpg",
                    name: "Zafrani Murgh Tikka Biryani",
                    description: "Chargrilled saffron-infused chicken tikka, layered with a signature sauce and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638734120079457842",
                    name: "Murgh Reshmi Kabab Biryani",
                    description: "Chargrilled chicken reshmi kabab, layered with a signature sauce and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/37538/product/1896064268/34bb35d4-6d68-4f28-b566-337894e34da9_enhanced.jpg",
                    name: "Murgh Malai Kabab Biryani",
                    description: "Chargrilled chicken malai kabab, layered with a signature sauce and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/646025/product/2340943118/d0a37a99-2821-42e3-bd21-f38a6023e45a_enhanced.jpg",
                    name: "Murgh Seekh Bharwan Biryani",
                    description: "Chargrilled stuffed chicken mince seekhs, layered with a signature sauce, spices and aromatic basmati rice, cooked on dum in a sealed earthen pot.",
                    price: '57',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Hyderabadi_Biryani638641558312196311.jpg",
                    name: "Murgh Hyderabadi Biryani",
                    description: "Tender pieces of chicken marinated in a special Hyderabadi masala, layered with aromatic basmati rice, potato and fried onions; cooked on dum in a sealed earthen pot.",
                    price: '50',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763569480/When_life_gets_messy_our_biryani_stays_perfect_Tell_us_which_one_brightens_your_day_We_now_h_vsunnm.mp4',
                    tags: {
                      connect: [
                        {slug: 'indian'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'}, {slug: 'gluten-free'}, {slug: 'spicy'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Zafrani_Biryani638641558320521764.jpg",
                    name: "Murgh Zafrani Biryani",
                    description: "Boneless chunks of chicken marinated in saffron-infused yoghurt, layered with basmati rice and spices; cooked on dum in a sealed earthen pot.",
                    price: '46',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Nizami_Biryani638641558315080511.jpg",
                    name: "Murgh Nizami Biryani",
                    description: "Delhi's version of Biryani. Boneless pieces of chicken marinated with yoghurt, spices and fried onions, layered with aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '46',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Shahi_Biryani638600040555813164.jpg",
                    name: "Murgh Shahi Biryani",
                    description: "Boneless pieces of chicken marinated in cashew paste, cream and spices, layered with saffron-infused basmati rice, garnished with cashew and raisins; cooked on dum in a sealed earthen pot.",
                    price: '46',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kacche_Murgh_Ki_Biryani638600040554971719.jpg",
                    name: "Kacche Murgh Ki Biryani",
                    description: "Boneless pieces of chicken marinated in a special masala of saffron, cream, cashew and almond paste and fried onions layered with basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '46',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Lucknowi_Biryani638641558476341634.jpg",
                    name: "Murgh Lucknowi Biryani",
                    description: "Boneless pieces of chicken marinated with yogurt, milk, whole spices and fried onions, layered with aromatic basmati rice cooked on dum in a sealed earthen pot.",
                    price: '45',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Bombay_Biryani638600040555697222.jpg",
                    name: "Murgh Bombay Biryani",
                    description: "Boneless chunks of chicken marinated in a special Bombay-style biryani masala, layered with basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '45',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Masala_Biryani638600040557618841.jpg",
                    name: "Murgh Masala Biryani",
                    description: "Bhuna chicken spiced with masala and layered with aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '43',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Raan_Masala_Biryani638641558527197600.jpg",
                    name: "Raan Masala Biryani",
                    description: "Leg of baby lamb marinated overnight and slow roasted in the oven, layered with aromatic basmati rice cooked in a full-bodied lamb stock on dum in a sealed earthen pot.",
                    price: "170.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Boti_Hyderabadi_Biryani638600040555099495.jpg",
                    name: "Boti Hyderabadi Biryani",
                    description: "Boneless chunks of mutton marinated in a special Hyderabadi masala, layered with aromatic spices, basmati rice, potato and fried onions; cooked on dum in a sealed earthen pot.",
                    price: '60',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Roganjosh_Biryani638600040553590803.jpg",
                    name: "Gosht Roganjosh Biryani",
                    description: "Mutton Roganjosh layered with aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '60',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GOSHT_NIZAMI_BIRYANI638600040553432348.jpg",
                    name: "Gosht Nizami Biryani",
                    description: "Delhi's version of Biryani. Boneless pieces of mutton marinated with yoghurt, spices and fried onions, layered with aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '56',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Lucknowi_Biryani638600040555523229.jpg",
                    name: "Gosht Lucknowi Biryani",
                    description: "Boneless pieces of mutton marinated with yoghurt, milk, whole spices and fried onions, layered with aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Boti_Masala_Biryani638641558322055003.jpg",
                    name: "Boti Masala Biryani",
                    description: "Boneless chunks of mutton marinated in garam masala, ginger, garlic, chillies and yoghurt, layered with saffron-infused basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Yakhni_Awadhi_Birya638641558340233843.jpg",
                    name: "Gosht Yakhni Awadhi Biryani",
                    description: "Boneless pieces of mutton layered with aromatic spices and basmati rice; cooked on dum with a full-bodied lamb stock in a sealed earthen pot.",
                    price: '55',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Keema_Biryani638600040554739963.jpg",
                    name: "Gosht Keema Biryani",
                    description: "Mutton mince cooked with garam masala, ginger, garlic, chillies and yoghurt, layered with saffron-infused basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '53',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Nalli_Biryani638641558417820693.jpg",
                    name: "Gosht Nalli Biryani",
                    description: "Tender lamb shanks layered with spices and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '53',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Hyderabadi_Biryani638641558245770524.jpg",
                    name: "Gosht Hyderabadi Biryani",
                    description: "Chunks of mutton and chops marinated in a special Hyderabadi masala, layered with aromatic basmati rice and fried onions; cooked on dum in a sealed earthen pot.",
                    price: '50',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GOSHT_ZAFRANI_BIRYANI638600040552753338.jpg",
                    name: "Gosht Zafrani Biryani",
                    description: "Chunks of mutton, chops marinated in saffron infused yoghurt, layered with basmati rice and spices, cooked on dum in a sealed earthen pot.",
                    price: '50',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Gosht_Ki_Biryani638641558280960636.jpg",
                    name: "Gosht Ki Biryani",
                    description: "Chunks of mutton and chops marinated in garam masala, ginger, garlic, chillies and yoghurt, layered with saffron-infused basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '46',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Aatish_E_Jhinga_Biryani638641558156289599.jpg",
                    name: "Aatish E Jhinga Biryani",
                    description: "Chargrilled jumbo prawns, layered with spices and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '85',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/JHINGA_HYDERABADI_BIRYANI638810202625482858.jpg",
                    name: "Jhinga Hyderabadi Biryani",
                    description: "Prawns marinated in a special Hyderabadi masala, layered with aromatic basmati rice and fried onions; cooked on dum in a sealed earthen pot.",
                    price: '62',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Jhinga_Masala_Biryani638600040553920260.jpg",
                    name: "Jhinga Masala Biryani",
                    description: "Prawns marinated with garam masala, ginger and chillies, layered with saffron-infused basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '58',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/25856/product/1896064345/97980842-1035-4e9d-8014-a24f369793ea_enhanced.jpg",
                    name: "Machli Tikka Biryani",
                    description: "Chargrilled salmon Or hammour fillet, layered with a signature sauce, spices and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '65',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MACHLI_HYDERABADI_BIRYANI638810203133790800.jpg",
                    name: "Machli Hyderabadi Biryani",
                    description: "Fillet of hammour marinated in a special Hyderabadi masala, layered with aromatic basmati rice and fried onions; cooked on dum in a sealed earthen pot.",
                    price: '62',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Machli_Biryani638641558470809601.jpg",
                    name: "Machli Biryani",
                    description: "Fillet of salmon Or hammour layered with a signature sauce, spices and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '58',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Grilled_Hammour_Pulao638600040557392896.jpg",
                    name: "Grilled Hammour Pulao",
                    description: "Grilled whole Hammour, served with basmati rice cooked with tomato puree, fried onions, spices, raisins and julienne of carrots.",
                    price: "99.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GOSHT_NOORMAHAL_PULAO638810202239342660.jpg",
                    name: "Gosht Noormahal Pulao",
                    description: "Deep fried mutton mince balls and aromatic basmati rice cooked in a full-bodied lamb stock; garnished with fried onions.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GOSHT_YAKHNI_PULAO638810202428538815.jpg",
                    name: "Gosht Yakhni Pulao",
                    description: "Mildly spiced pieces of lamb and aromatic basmati rice cooked in a full-bodied lamb stock; garnished with fried onions.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Murgh_Irani_Pulao638600040545454839.jpg",
                    name: "Murgh Irani Pulao",
                    description: "Chargrilled chicken malai kabab, served with rice cooked in a full-bodied chicken stock; garnished with dried cranberry and fried onions.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MURGH_YAKHNI_PULAO638810204706776800.jpg",
                    name: "Murgh Yakhni Pulao",
                    description: "Mildly spiced pieces of chicken and aromatic basmati rice cooked in a full-bodied lamb stock garnished with fried onions.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Stuffed_Mushroom_Biryani638641558532382086.jpg",
                    name: "Stuffed Mushroom Biryani",
                    description: "Chargrilled mushrooms stuffed with spinach and cottage cheese, layered with a signature sauce, spices and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '48',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Paneer_Tikka_Biryani638641558437752258.jpg",
                    name: "Paneer Tikka Biryani",
                    description: "Chargrilled paneer tikka pieces, layered with a signature sauce, spices and aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '49',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bharwan_Aloo_Biryani638600040554857086.jpg",
                    name: "Bharwan Aloo Biryani",
                    description: "Cottage cheese stuffed chargrilled potatoes, layered with aromatic basmati rice and a tangy sweet and sour masala; cooked on dum in a sealed earthen pot.",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EGG_MASALA_BIRYANI638810201553813291.jpg",
                    name: "Egg Masala Biryani",
                    description: "Boiled eggs in a special masala layered with aromatic basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '42',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/37538/product/1111883877/b0e8d4e0-c91a-477e-a557-2e9c9d723dc0_enhanced.jpg",
                    name: "Subzi Hyderabadi Biryani",
                    description: "A medley of vegetables and paneer cubes layered in a special Hyderabadi masala, aromatic spices and basmati rice; cooked on dum in a sealed earthen pot.",
                    price: '46',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Subzi_Masala_Biryani638641558537275768.jpg",
                    name: "Subzi Masala Biryani",
                    description: "A medley of vegetables, layered with aromatic basmati rice and a tangy sweet and sour masala; cooked on dum in a sealed earthen pot.",
                    price: '41',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638739300210477862",
                    name: "Plain Biryani",
                    description: "Aromatic saffron-infused basmati rice and spices; cooked on dum in a sealed earthen pot.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SUBZ_BANARASI_PULAO638810205199046220.jpg",
                    name: "Subz Banarasi Pulao",
                    description: "Assorted vegetables and paneer, flavoured with garam masala and green chillies, layered with saffron-infused basmati rice.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896064439/ea47aebe-84c2-48a4-b0e4-0c58548444a4.jpg",
                    name: "Jeera Pulao",
                    description: "Aromatic saffron-infused basmati rice tempered with cumin seeds.",
                    price: "23.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/JEERA_RICE638860423188427530.jpg",
                    name: "Jeera Rice",
                    description: "Aromatic basmati rice tempered with cumin seeds.",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Biryani_Ke_Chawal_Biryani638860423197474908.jpg",
                    name: "Biryani Ke Chawal (Biryani Rice)",
                    description: "Aromatic saffron-infused basmati rice cooked on dum.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Sada_Chawal_Plain_Rice638860423152765497.jpg",
                    name: "Sada Chawal (Plain Rice)",
                    description: "Plain and simple aromatic basmati rice.",
                    price: "16.00",
                  },
                ]
              }
            },
            {
              name: 'Indian Breads',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SHAHI_BHARWAN_NAN638592414638544587.jpg",
                    name: "Shahi Bharwan Nan",
                    description: "Tandoori white flour bread, baked with your choice of filling chicken mince, paneer methi, paneer makki or paneer.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SHAHI_BHARWAN_KULCHA638592414638216700.jpg",
                    name: "Shahi Bharwan Kulcha",
                    description: "Tandoori white flour bread, baked with your choice of filling: chicken mince, paneer methi, paneer makki and paneer.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SHAHI_BHARWAN_PARATHA638592414639658330.jpg",
                    name: "Shahi Bharwan Paratha",
                    description: "Tandoori whole wheat flour bread, baked with your choice of filling chicken mince, paneer methi, paneer makki or paneer.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BHARWAN_NAN638592414637321329.jpg",
                    name: "Bharwan Nan",
                    description: "Tandoori white flour bread, baked with your choice of filling: cheese, potato or cauliflower.",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BHARWAN_KULCHA638592414639575452.jpg",
                    name: "Bharwan Kulcha",
                    description: "Tandoori white flour bread, baked with your choice of filling: cheese, potato or cauliflower.",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BHARWAN_PARATHA638592414638422623.jpg",
                    name: "Bharwan Paratha",
                    description: "Tandoori whole wheat flour bread, baked with your choice of filling: cheese, potato or cauliflower.",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/42837/product/484685551/9ae434d4-44c4-4259-bf95-c2aa410567d9_enhanced.jpg",
                    name: "Gosht Keema Nan",
                    description: "Tandoori white flour bread baked with a filling of mutton mince.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/43894/product/484685660/e92a422a-1b39-41a9-b0c5-8e613a73b71e_enhanced.jpg",
                    name: "Gosht Keema Kulcha",
                    description: "Tandoori white flour bread baked with a filling of mutton mince.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/696605/product/484685563/32f28e47-cce5-4c06-810c-5c199856a8b6_enhanced.jpg",
                    name: "Gosht Keema Paratha",
                    description: "Tandoori whole wheat flour bread baked with a filling of mutton mince.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/733448/product/1896063739/8c2b8045-a08c-4062-8416-f004619cdea5_enhanced.jpg",
                    name: "Sheermal",
                    description: "White flour bread made with sugar, saffron flavoured milk and baked in a tandoor.",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961920463697914",
                    name: "Zafrani Paratha",
                    description: "White flour bread flavoured with saffron.",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961915439778701",
                    name: "Reshmi Paratha",
                    description: "A traditional whole wheat flour bread, shallow fried in pure ghee on a tawa.",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHEESE_ZAATAR_NAN638592414639923692.jpg",
                    name: "Cheese Zaatar Nan",
                    description: "Tandoori white flour bread baked with a filling of cheese, topped with zaatar.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHEESE_LASOONI_NAN638860423241201975.jpg",
                    name: "Cheese Lasooni Nan",
                    description: "Tandoori white flour bread baked with a filling of cheese, topped with garlic.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHILLI_CHEESE_NAN638641558719631153.jpg",
                    name: "Chilli Cheese Nan",
                    description: "Tandoori white flour bread baked with a filling of cheese, topped with chillies.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHILLI_NAN638641558731974758.jpg",
                    name: "Chilli Nan",
                    description: "White flour bread flavoured with chopped chillies and baked in a tandoor.",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638592473067151590",
                    name: "Nan (Flavoured)",
                    description: "Soft white flour bread flavoured with garlic or onion or mint or butter.",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862795631907134",
                    name: "Kulcha (Flavoured)",
                    description: "Flaky white flour bread flavoured with garlic or onion or mint or butter.",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/PARATHA_FLAVOURED638592414637435451.jpg",
                    name: "Paratha (Flavoured)",
                    description: "Whole wheat flour bread flavoured with garlic or onion or mint or butter.",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862800258919184",
                    name: "Plain Naan",
                    description: "Soft white flour bread baked in a tandoor.",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862796228921177",
                    name: "Plain Kulcha",
                    description: "Flaky white flour bread baked in a tandoor.",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862799467873975",
                    name: "Plain Paratha",
                    description: "Whole wheat flour bread baked in a tandoor.",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961919963980814",
                    name: "Taftan",
                    description: "A soft, fluffy white flour bread made with milk and yoghurt, topped with black sesame seeds.",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/KHASTA_ROTI638592414639642567.jpg",
                    name: "Khasta Roti",
                    description: "Whole wheat flour bread baked in a tandoor, flavoured with carom seeds.",
                    price: "6.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MAKKI_ROTI638592414639368437.jpg",
                    name: "Makki Roti",
                    description: "A traditional bread made with sweet cornmeal and white flour, baked and served topped with butter.",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ROOMALI_ROTI638860423222600619.jpg",
                    name: "Roomali Roti",
                    description: "Handkerchief thin bread made with a combination of white and whole wheat flour.",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862796862471455",
                    name: "Tandoori Butter Roti",
                    description: "Whole wheat flour bread baked in a tandoor, basted with butter.",
                    price: "6.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862797324856579",
                    name: "Tandoori Roti",
                    description: "Whole wheat flour bread baked in a tandoor.",
                    price: "5.00",
                  },
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32314/product/2243073683/13fbf96e-49ef-4b6b-ae1a-90ab9927bcab_enhanced.jpg",
                    name: "Chocolate Butterscotch Fondant",
                    description: "Butterscotch brittle, buttery chocolate cake, semi-sweet dark chocolate ganache, roasted almonds.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638912815327129955",
                    name: "Mango Cream Cake",
                    description: "Mango milk-soaked sponge, chantilly cream center, mango ganache, whipped mango ganache topping.",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bread_Ka_Meetha638320849581607608.jpg",
                    name: "Bread Ka Meetha",
                    description: "Homemade bread soaked in sweetened milk, topped with nuts and cardamom; served hot in an earthen pot.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Shahi_Tukda638821213375634598.jpg",
                    name: "Shahi Tukda",
                    description: "Homemade dough, deep fried in ghee and soaked in a cardamom and rose infused syrup, topped with white chocolate rabdi and slivered nuts.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961921391301190",
                    name: "Zafrani Pista Firni",
                    description: "A light dessert of milk and cream cooked with powdered basmati rice, flavoured with saffron, pistachio and kewda water served in an earthen pot.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kesar_Rasmalai638860423144009827.jpg",
                    name: "Kesar Rasmalai",
                    description: "Miniature dumplings of curd cheese dipped in saffron and cardamom flavoured milk; garnished with nuts.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/32313/PRODUCT/1896063589/6411dcfc-cc3e-4e77-949b-aa913a5e9482.jpg",
                    name: "Angoori Rabdi",
                    description: "Curd cheese balls soaked in saffron-infused sweetened, thickened milk or 'rabdi'. served in an earthen pot.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638961914669738669",
                    name: "Rabdi With Tender Coconut",
                    description: "A tropical twist on a classic, prepared with sweet thickened milk and tender coconut pulp, garnished with pomegranate seeds; served chilled in an earthen pot.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Bharwan_Gulab_Jamun638860423164765081.jpg",
                    name: "Bharwan Gulab Jamun",
                    description: "Deep fried milk dumplings stuffed with saffron and pistachio, dipped in sugar syrup; garnished with nuts",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862797816875512",
                    name: "Gajar Halwa",
                    description: "Grated carrots glazed in butter, cooked in sweetened milk and khoya; garnished with nuts.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/KESAR_PISTA_MATKA_KULFI638641558549845299.jpg",
                    name: "Kesar Pista Matka Kulfi",
                    description: "A milk based frozen dessert flavoured with saffron and pistachio, traditionally made in an earthen pot.",
                    price: "17.00",
                  },
                ]
              }
            },
            {
              name: 'Speciality Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Milkshakes638821213371688888.jpg",
                    name: "Milk Shakes",
                    description: "Dry Fruit, Badam Pista, Mango, Strawberry, Apple, Watermelon, Banana, Chocolate, Vanilla, Rose",
                    price: '24',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Fresh_Fruit_Juices638821213370714072.jpg",
                    name: "Fresh Fruit Juices",
                    description: "Mango, Pomegranate, Cocktail, Orange, Watermelon, Pineapple, Black Grapes, Apple, Carrot, Lemon Mint",
                    price: '22',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CITRUS_COOLER638592414634627983.jpg",
                    name: "Citrus Cooler",
                    description: "A refreshing combination of orange and green lime juice.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862797989946632",
                    name: "Royal Falooda",
                    description: "A concoction made of milk, rose syrup and vermicelli, served in a tall glass topped with a scoop of vanilla ice cream.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Kesar_Pista_Lassi638821213368519955.jpg",
                    name: "Kesar Pista Lassi",
                    description: "Thick saffron and pistachio flavoured yoghurt shake.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Anar_Lassi638821213371501308.jpg",
                    name: "Anar Lassi",
                    description: "Thick yoghurt and pomegranate seeds blended together.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/IMG20250730WA0003638914789226962876.jpg",
                    name: "Mango Lassi",
                    description: "Thick mango flavoured yoghurt shake.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MASALA_LASSI638592420749944164.jpg",
                    name: "Lassi Flavoured",
                    description: "Thick yoghurt shake - which is a refreshing thirst buster and a soothing digestive served sweet, salted or spices.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/LIME_GINGER_MOJITO638592414634579703.jpg",
                    name: "Lime Ginger Mojito",
                    description: "A drink made of lime juice, ginger ale and jaggery.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AABEBAHAR638592414635019169.jpg",
                    name: "Aab E Bahar",
                    description: "A combination of tender coconut water, with fresh mint and honey.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Shikanjvi638821213386937792.jpg",
                    name: "Shikanjvi",
                    description: "Freshly squeezed lime juice, churned with water or soda served sweet or salted.",
                    price: '16',
                  },
                ]
              }
            },
            {
              name: 'Beverages',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ZAFRANI_TEA638592414634421486.jpg",
                    name: "Zafrani Tea",
                    description: "Tea flavored with saffron.",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MASALA_TEA638592414634272113.jpg",
                    name: "Masala Tea",
                    description: "Strong tea infused with warm spices such as cardamom, cinnamon, ginger, and cloves.",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638862798889107420",
                    name: "Tea",
                    description: "Rich flavor and excellent tea taste, expertly blended.",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BLACK_TEA638592414634898920.jpg",
                    name: "Black Tea",
                    description: "Popular beverage with a complex flavor, good source of caffeine and antioxidants",
                    price: "7.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Green Tea",
                    description: "Green tea, harvested and processed to preserve natural antioxidants and health benefits.",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/COFFEE638592414636125842.jpg",
                    name: "Coffee",
                    description: "fresh coffee",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Ginger_Ale638860422818662364.jpg",
                    name: "Ginger Ale",
                    description: "A wonderful blend of refreshing ginger and sparkling bubbles.",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Sparkling_water638378097855297291.jpg",
                    name: "Sparkling Water",
                    description: "Sparkling water, fizzy and bubble",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638401405418772640",
                    name: "Aerated Drinks",
                    description: "Soft drinks.",
                    price: "7.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Still Water Large",
                    description: "Mineral water.",
                    price: "7.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Still Water Small",
                    description: "Mineral water.",
                    price: "4.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Couqley', // https://www.talabat.com/uae/restaurant/750233/couqley?aid=1252
    country: 'UAE',
    city: 'Dubai',
    address: 'Couqley French Brasserie Downtown Dubai Marasi Dr Business Bay',
    latitude: 25.1868174,
    longitude: 55.2715879,
    placeId: 'ChIJV79xPI9pXz4ROGvvXhLZaHc',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Start With Your Bread Basket!',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638721115134589235",
                    name: "French Baguette Basket and Salted Butter",
                    description: "Our freshly baked French baguette bread basket that comes with our famously salted butter!",
                    price: "23.00"
                  },
                ]
              },
            },
            {
              name: 'Starters',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Soup_of_the_day638715526062197640.jpg",
                    name: "Soup of the day",
                    description: "indulge in the chef's special creation, featuring seasonal ingredients and rich, comforting flavors. perfect to start your meal or enjoy on its own.",
                    price: "34.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Onion_Soup_Gratinee638715339921741255.jpg",
                    name: "Onion Soup Gratinée",
                    description: "A French classic with caramelized onions, baguette & topped with a layer of melted Emmental cheese.",
                    price: "34.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cheese_Board638715526531942181.jpg",
                    name: "BYO Couqley's Cheese Board (160g)",
                    description: "The perfect cheese board for a small gathering. You can select your favorite 5 types of cheese (160g) along with the condiments of your choice.",
                    price: "85.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Calamars_Frits638715340068785583.jpg",
                    name: "Calamars Frits",
                    description: "Battered & lightly fried tender marinated calamari, served with an Asian dipping sauce.",
                    price: "63.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Grilled_Calamars638715340071669516.jpg",
                    name: "Grilled Calamari",
                    description: "Local fisherman’s daily catch, marinated & grilled to perfection, dressed in a light lemon-oil vinaigrette & served with a green leaf salad.",
                    price: "59.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Goat_Cheese_Tart638715340028151222.jpg",
                    name: "Goat Cheese Tart",
                    description: "Goat cheese & tomato confit on a puff pastry with a balsamic glaze, served with a green leaf salad.",
                    price: "58.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Salmon_Tartare638715340122373471.jpg",
                    name: "Salmon Tartare",
                    description: "Top Scottish raw salmon gently chopped in a tartare infused with ginger, basil, lemon and French thyme.",
                    price: "74.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tuna_Tartare638715340191130653.jpg",
                    name: "Tuna Tartare Asiatique",
                    description: "Marinated top-grade raw tuna tartare, asiatique sauce with sesame seeds, scallions, fresh herbs, topped with crispy leeks tempura.",
                    price: "73.00"
                  },
                ]
              }
            },
            {
              name: 'Salads',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Build_your_own_salad638715526797257270.jpg",
                    name: "Build Your Own Healthy Salad",
                    description: null,
                    price: "49.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Burrata__Heirloom_Tomato638715527151008163.jpg",
                    name: "Burrata & Heirloom Tomato",
                    description: "Fresh, creamy and classic, served on a bed of heirloom tomatoes, topped with hazelnuts, plums and truffle balsamic served on the side.",
                    price: "74.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/750233/product/977159917/86525ae7-8925-4b2a-b026-e960957461c8_enhanced.jpg",
                    name: "Couqley Caesar Salad",
                    description: "A classic Caesar with romaine lettuce, mixed herbs, tomato, homemade croutons & parmesan cheese.",
                    price: "46.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Arugula_Quinoa_Beet_Salad638715527872276824.jpg",
                    name: "Arugula Quinoa Beet Salad",
                    description: "Quinoa, avocado, pickled beetroot, Arugula salad, fromage frais, pine nuts and cranberries, topped with a balsamic vinaigrette.",
                    price: "66.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/750233/product/977159921/6a9ddef9-5020-4646-b87a-d747b7b4ec44_enhanced.jpg",
                    name: "Goat Cheese Salad",
                    description: "Crispy goat cheese spring rolls on a salad with mixed greens, tomato confit, julienne apple, juicy orange slices, dressed with our signature balsamic vinaigrette.",
                    price: "61.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Green_Leaf_Salad638715528256036971.jpg",
                    name: "Green Leaf Salad",
                    description: "An assortment of baby salad leaves dressed with a sherry vinaigrette.",
                    price: "37.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lentil_Salad638715528415517439.jpg",
                    name: "Lentil Salad",
                    description: "Healthy & light lentils, mixed with finely diced vegetables, fresh herbs & a light Dijon sauce.",
                    price: "36.00"
                  },
                ]
              }
            },
            {
              name: 'Gourmet Burgers & Rolls',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BYO_Gourmet_Cheeseburger_638715529461202153.jpg",
                    name: "BYO Gourmet Cheeseburger (130g Patty)",
                    description: "A Juicy 130g Angus Steak Burger topped with aged cheddar. BYO Burger and let us know what you'd like in it!",
                    price: "55.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Wagyu_burger638715529291755683.jpg",
                    name: "Couqley Wagyu Burger",
                    description: "Top grade Wagyu with a marble score of 5+ juicy patty, melted aged Comte, baby spinach, duxelles mushroom, truffle mayo served with fries.",
                    price: "135.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Angus_Classic_burger638715529096322213.jpg",
                    name: "Angus Burger Classique with fries",
                    description: "A classic 160g juicy American-style Angus cheeseburger with aged Cheddar, served with frites.",
                    price: "77.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Raclette_Burger638715528876609026.jpg",
                    name: "Raclette Burger",
                    description: "Black Angus beef with melted French Raclette cheese, in a soft Brioche bun with sweet caramelized onions, Portobello mushrooms, grain mustard mayo, served with skinny fries.",
                    price: "91.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/750233/product/977870443/39aec268-44a9-4473-825e-e46782a64f1c_enhanced.jpg",
                    name: "Lobster Roll",
                    description: "Fresh sautéed lobster in our homemade mayo served in a soft brioche with herbs.",
                    price: "109.00"
                  },
                ]
              }
            },
            {
              name: 'Les Baguettes de Couqley',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Steak_and_Truffle_Brie_Ci638715654513253592.jpg",
                    name: "Steak and Truffle Brie Ciabatta",
                    description: "Tenderloin slices, melted brie cheese, truffle butter, arugula, caramelized onions in a white Ciabatta bread.",
                    price: "89.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Crevettes_and_Avocat_Ciab638715654638051910.jpg",
                    name: "Crevettes and Avocat Ciabatta",
                    description: "Grilled shrimps, avocado, lettuce, coriander, and chipotle mayo in a white ciabatta bread.  Enjoy the best of couqley in our freshly baked bread.",
                    price: "73.00"
                  },
                ]
              }
            },
            {
              name: 'Perfect Steak Frites Combos',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Couqleys_Steak_Frites_For638715625738219546.jpg",
                    name: "Couqley's Steak Frites For 1 (Without Salad)",
                    description: "The house favorite! A 180g tender pan fried filet served in Couqley's secret signature sauce. Comes with fries.",
                    price: "91.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Couqleys_Steak_Frites_For638715625772180004.jpg",
                    name: "Couqley's Steak Frites For 2 (Without Salad)",
                    description: "our Steak Frites for Two. A 180g tender pan fried filet served in Couqley's secret signature sauce. Comes with fries.",
                    price: "175.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Couqleys_Steak_Frites_For638715625825644673.jpg",
                    name: "Couqley's Steak Frites For 2 (With Salad)",
                    description: "Enjoy our Steak Frites for Two. The house favorite! A 180g tender pan fried filet served in Couqley's secret signature sauce. Comes with fries and a side of our green leafy salad.",
                    price: "209.00"
                  },
                ]
              }
            },
            {
              name: 'Home of The Greatest Steak Frites',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Couqleys_Steak_Frites638715654033667994.jpg",
                    name: "Couqley's Steak Frites",
                    description: "The house favorite! A tender pan fried filet, served in Couqley's signature sauce and served with crispy golden frites & a side of green leaf salad.",
                    price: "109.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FreeRange_Chicken_Frites638715654209893935.jpg",
                    name: "Free-Range Chicken Frites",
                    description: "Grilled tender free-range French chicken served in our signature creamy herb infused sauce and served with crispy golden frites & a side of green leaf salad.",
                    price: "87.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Mushroom_Steak_Frites638715957139151305.jpg",
                    name: "Mushroom Steak Frites",
                    description: "A tender pan fried filet, served in mushroom sauce with frites & a side of green leaf salad.",
                    price: "109.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/750233/product/978644016/b2c99f1b-b419-4dff-b269-8a48c269f2ce_enhanced.jpg",
                    name: "Vegan Portobello Frites",
                    description: "Grilled portobello mushroom steak in Couqley’s signature pepper sauce, served with french fries and a side salad. Vegan.",
                    price: "69.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763629177/%D0%91%D0%B5%D0%B7%D1%96%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%B8%CC%86_n4wwuc.mp4',
                    tags: {
                      connect: [
                        {slug: 'french'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'vegan'}, {slug: 'vegetarian'},
                        {slug: 'lactose-free'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'},
                      ]
                    }
                  },
                ]
              }
            },
            {
              name: 'Chef\'s Premium Steaks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/IMG_6097_1638730581809526222.jpg",
                    name: "Steak Tartare",
                    description: "Top quality raw beef, minced, with Chef Alexis’ signature seasoning, with frites & green leaf salad.",
                    price: "91.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763146986/tartar_qvbxz9.mp4',
                    tags: {
                      connect: [
                        {slug: 'french'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'no-peanuts'}, {slug: 'no-tree-nuts'}, {slug: 'no-tree-nuts'}, {slug: 'medium'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Rib_Eye_Steak638715958293575258.jpg",
                    name: "Rib Eye Steak",
                    description: "Tender rib eye steak, served with pommes de terre au romain & your choice of sauce.",
                    price: "182.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638721124240951964",
                    name: "Beef Fillet",
                    description: null,
                    price: "143.00",
                  },
                ]
              }
            },
            {
              name: 'Steak Frites Combos with Dessert',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Steak_Frites_+_Green_Sala638715959104759963.jpg",
                    name: "Steak Frites, Green Salad and Dessert for 1",
                    description: "The house favorite, A 180g tender pan fried filet served in Couqley's secret signature sauce and a side of our green leafy salad with your choice of dessert! Comes with fries.",
                    price: "121.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Steak_Frites_Green_Salad_638715959124482548.jpg",
                    name: "Steak Frites, Green Salad and Dessert for 2",
                    description: "Enjoy 2 Steak Frites. A 180g tender pan fried filet served in Couqley's secret signature sauce, two sides of our green leafy salad and one sharing dessert of your choice! Comes with fries.",
                    price: "229.00",
                  },
                ]
              }
            },
            {
              name: 'Couqley Classics - Main Dishes',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Chicken_and_Mushroom_Tagl638715959735583822.jpg",
                    name: "Chicken & Mushroom Tagliatelle",
                    description: "Grilled free-range corn fed French Chicken with a side of creamy mushroom tagliatelle! Chicken comes with a side sauce.",
                    price: "87.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pan_seared_Salmon638715959409334167.jpg",
                    name: "Pan seared Salmon",
                    description: "Top Scottish salmon, pan seared, served with potato purée, asparagus and Romesco sauce.",
                    price: "113.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763629728/%D0%91%D0%B5%D0%B7%D1%96%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%B8%CC%86_online-video-cutter.com_1_pggfrf.mp4',
                    tags: {
                      connect: [
                        {slug: 'french'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'no-beef'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Duck_confit638715959974100783.jpg",
                    name: "Duck Confit",
                    description: "Tender braised duck leg, served with caramelized onions & fresh oyster-mushrooms on a bed of sautéed potatoes, with jus de canard.",
                    price: "119.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Truffle_Pappardelle_Pasta638715960241500469.jpg",
                    name: "Truffle Pappardelle Pasta",
                    description: "Pappardelle pasta in a light aromatic white-truffle sauce with wild mushrooms (Portobello, Oyster, Trumpet).",
                    price: "97.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Spinach__Ricotta_Ravioli638715960568510091.jpg",
                    name: "Spinach & Ricotta Ravioli",
                    description: "6 large ravioli stuffed with spinach & Ricotta cheese, dressed with a light garlic white cream sauce & topped with mushrooms.",
                    price: "86.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C%C3%A8pes_Mushroom_Ravioli638715961057756881.jpg",
                    name: "Cèpes Mushroom Ravioli",
                    description: "6 large ravioli stuffed with mushroom, dressed with a light garlic white cream sauce & topped with mushrooms.",
                    price: "86.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Calamari__Shrimp_Plateau638715961341880812.jpg",
                    name: "Calamari & Shrimp Plateau",
                    description: "Tender marinated calamari and black tiger shrimp, sautéed with fresh red chili (mild), garlic, paprika & parsley.",
                    price: "109.00",
                  },
                ]
              }
            },
            {
              name: 'Side dishes add ons',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/French_fries638715955385684024.jpg",
                    name: "French Fries",
                    description: "Fried to a golden crisp perfection and seasoned",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Truffle_Fries638715955946393391.jpg",
                    name: "Truffle Fries",
                    description: "French fries that are infused with truffle oil",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Sweet_Potato_Fries638715955913892037.jpg",
                    name: "Sweet Potato Fries",
                    description: "Crispy and flavorful fries made from sweet potatoes, lightly seasoned with salt and spices",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Rosemary_Roasted_Potato_C638715955789993536.jpg",
                    name: "Rosemary Roasted Potato Cubes",
                    description: null,
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Portobello_Mushroom__Parm638715955573738870.jpg",
                    name: "Portobello Mushroom & Parmesan",
                    description: "Grilled Portobello Mushroom topped with Parmesan cheese.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Potato_Gratin638715955670694833.jpg",
                    name: "Potato Gratin",
                    description: null,
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Potato_Puree638715955694068677.jpg",
                    name: "Potato Puree",
                    description: "Mashed potatoes.",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Truffle_Potato_Puree638715956010152582.jpg",
                    name: "Truffle Potato purée",
                    description: null,
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/750233/product/978644180/c264d577-a055-407e-b291-4df364ba2a86_enhanced.jpg",
                    name: "Petit Green Leaf Salad",
                    description: null,
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Grilled_Asparagus638715955460488480.jpg",
                    name: "Grilled Asparagus",
                    description: "Grilled asparagus, asparagus spears grilled for a tender texture.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Wild_Rice638715956040406235.jpg",
                    name: "Wild Rice",
                    description: null,
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Spinach_%C3%80_La_Cr%C3%A8me638715955873853820.jpg",
                    name: "Spinach à la Crème",
                    description: null,
                    price: "29.00",
                  },
                ]
              }
            },
            {
              name: 'Save Room For Dessert',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pain_Perdu638715953349020471.jpg",
                    name: "Pain Perdu",
                    description: "French toast, drizzled with caramel sauce and served with vanilla ice cream.",
                    price: "43.00",
                  },
                  {
                    image:
                      "https://images.deliveryhero.io/image/talabat/MenuItems/Cr%C3%A8me_Brulee638715953467678106.jpg",
                    name: "Crème Brûlée",
                    description: "Delicious rich French custard topped with a layer of hard caramel.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/750233/product/978644024/77ab5a0b-e9a6-4406-841e-72adc97e15b0_enhanced.jpg",
                    name: "Tart of the Day",
                    description: null,
                    price: "33.00",
                  },
                ]
              }
            },
            {
              name: 'Sauces',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Couqley_Sauce638715954163747545.jpg",
                    name: "Couqley Sauce (Steak Frites Sauce)",
                    description: null,
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Mushroom638715954112225737.jpg",
                    name: "Mushroom Sauce",
                    description: "Dipping Sauce",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Truffle_Mayo638715954155143399.jpg",
                    name: "Truffle Mayo",
                    description: "Mayonnaise, Truffle oil, Salt and Pepper",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dijon_Mustard638715954218472988.jpg",
                    name: "Dijon Mustard",
                    description: null,
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pepper638715954311960668.jpg",
                    name: "Pepper Sauce",
                    description: "Sauce made with ground pepper",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Roquefort638715954334128490.jpg",
                    name: "Roquefort Sauce",
                    description: null,
                    price: "11.00",
                  },
                ]
              }
            },
            {
              name: 'Beverages',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pizza_E_Pasta_Still_water638730574313096460.jpg",
                    name: "Premium Still Water (750 ml)",
                    description: "drinking water",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Perrier_Sparkling_Water638730574690030764.jpg",
                    name: "Premium Sparkling Water (750 ml)",
                    description: "drinking water",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pizza_E_Pasta_Still_water638730574788224960.jpg",
                    name: "Premium Still Water (330 ml)",
                    description: "drinking water",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Perrier_Sparkling_Water638730574810577139.jpg",
                    name: "Premium Sparkling Water (330 ml)",
                    description: "drinking water",
                    price: "16.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'High Joint', // https://www.talabat.com/uae/restaurant/26916/high-joint?aid=1192
    country: 'UAE',
    city: 'Dubai',
    address: 'High joint Al Manara',
    latitude: 25.1482786,
    longitude: 55.2155225,
    placeId: 'ChIJlb53z39rXz4RZ86U8Ak2QLw',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'The Rib High',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f1b8400e8e6fafd62e0f83773dac6c12.jpeg",
                    name: "Ribeye Burger",
                    description: "Beef patty with ribeye slices, Emmental cheese, BBQ sriracha, and tartar sauce, seasoned with butter and Maldon salt",
                    price: "59.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763147440/get_1_mnlrxu.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'no-sweets'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'},
                      ]
                    }
                  },
                ]
              },
            },
            {
              name: 'Signature Burgers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/31ee03dd032a8efa54423d2eb5a4e7c0.jpeg",
                    name: "Tokyo Wagyu Burger",
                    description: "Premium Wagyu patty, topped with provolone cheese, kimchi aioli and togarashi-tossed potato chips, tonkatsu sauce and kewpie mayo. Served in a soft-milk bun",
                    price: "57.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762471438/hightjoin3_f4dq4l.mp4',
                    tags: {
                      connect: [
                        {slug: 'japanese'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'no-sweets'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}, {slug: 'spicy'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7b12fa4db1075d0c0079292c03a22640.jpeg",
                    name: "High Jamz",
                    description: "Best Burger in Dubai Award by Timeout Magazine! Premium Angus Beef patty, topped with American cheese, homemade beef bacon jam, ranch sauce and crispy fried shallots.",
                    price: "59.00",
                  },
                ]
              }
            },
            {
              name: 'Beef Burgers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/c7f59d95ee1b489060c2afceae3f8fec.jpeg",
                    name: "High Burger",
                    description: "Our classic premium Angus beef patty, topped with American cheese and drizzled with our ranch and honey mustard sauce",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b063788372a33258167a081d4f863ec8.jpeg",
                    name: "The Spice Trip",
                    description: "Our premium beef patty topped with a secret spicy sauce, cheddar cheese, caramelized onion and pickled jalapenos",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/26e907f637334d6f629f1ff8198e25e6.jpeg",
                    name: "Double High",
                    description: "2 premium Angus beef patties, topped with 2 pieces of American cheese, diced onions, homemade pickles, and our signature Double High sauce",
                    price: "49.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/2db48b171a0dbd177b9d078eac6b8f32.jpeg",
                    name: "King Shroom",
                    description: "Premium Angus beef patty topped with sautéed mushrooms, melted provolone cheese, tempura mushrooms, and drizzled with our homemade aioli sauce.",
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/dbdb2a14865d251c470743068be2a944.jpeg",
                    name: "The Smokey",
                    description: "Premium Angus beef patty, beef bacon, melted pepper jack cheese, crispy tempura onions, drizzled with BBQ sauce, homemade ranch and chipotle sauce.",
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7a4524a05d2a16a50eb7248d5f3cf942.jpeg",
                    name: "Truffle Mushroom Burger",
                    description: "Juicy premium beef patty topped with caramelized onions, creamy truffle mushroom mix, provolone dolce cheese, and truffle cream cheese. Served in a soft potato bun with dill pickles.",
                    price: "49.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763147438/High_Jamz_fans_raise_your_hands___%EF%B8%8F___%EF%B8%8F_rfh2w5.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'no-sweets'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}, {slug: 'mild'}
                      ]
                    }
                  },
                ]
              }
            },
            {
              name: 'Chicken Burgers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a9a00c71787611e8ced1bbb0c71b2361.jpeg",
                    name: "High Chicken Burger",
                    description: "Crispy fried chicken, shredded iceberg lettuce and drizzled with cheese sauce, high sauce and honey mustard.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/96470b26961b55236d4f2ae3b727f9bb.jpeg",
                    name: "Spicy Mango",
                    description: "Crispy fried chicken, tossed in buffalo sauce, topped with pepper jack cheese, jalapenos, and mango slaw. Drizzled with spicy mayo.",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/86ca293567e0d6c5819bcba5e29bb777.jpeg",
                    name: "Southern High",
                    description: "Overnight buttermilk-brined chicken breast, deep-fried, coated in our signature BBQ sauce and ranch dressing, topped with grilled charred onions and crispy beef bacon.",
                    price: "46.00",
                  },
                ]
              }
            },
            {
              name: 'Vegetarian Burgers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/290630012446f1be9c772dde26c338f0.jpeg",
                    name: "Halloumi Katsu",
                    description: "Deep-fried halloumi cheese, with Katsu seasoning, topped with American cheese, tomatoes, onions and lettuce. Drizzled with homemade ranch and honey mustard.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b8768285c9abd817859e65350dfb5689.jpeg",
                    name: "High Leaf",
                    description: "Plant-based patty, topped with American cheese, roasted shimeji mushrooms and crispy tempura kale. Drizzled with homemade tomato chutney and date mayo,",
                    price: "47.00",
                  },
                ]
              }
            },
            {
              name: 'The High Meals',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4f31f147e87faf16f746743b4cfbd079.jpeg",
                    name: "The Spicy Mango Slaw Meal",
                    description: "Our signature crispy Chicken mango slaw burger tossed in buffalo sauce, fries, soft drink and choice of two homemade sauces",
                    price: "65.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/1bb2d9fdd20ec5fd622c40d2e1c4f6dd.jpeg",
                    name: "The Jamz Meal",
                    description: "Our award winning High Jamz burger, fries, soft drink and choice of two homemade sauces",
                    price: "78.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/9113865436c5be77e1c9450fae59a33e.jpeg",
                    name: "The High Chicken Meal",
                    description: "Our in-house fresh chicken burger, fries, soft drink and choice of two homemade sauces",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/e4314b8e1269cc0f2f523c8330c9a652.jpeg",
                    name: "The High Beef Meal",
                    description: "Our classic High beef burger, fries, soft drink and choice of two homemade sauces",
                    price: "56.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b1c74047bdf359f4aea47a31e5f745fd.jpeg",
                    name: "Ribeye Burger Meal",
                    description: "Our signature Ribeye burger, fries, soft drink and choice of two homemade sauces",
                    price: "69.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/31215dbfb86edad67ebfc83d18a8e8c8.jpeg",
                    name: "Tokyo Burger Meal",
                    description: "Our signature Tokyo burger, fries, soft drink and choice of two homemade sauces",
                    price: "68.00",
                  },
                ]
              }
            },
            {
              name: 'Fries & Appetizers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/e34019480bc5e0c1ee6760fbd7e464ee.jpeg",
                    name: "High Fries",
                    description: "Crispy fries tossed in our special high vinegar salt.",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0abdb437748ac510adb371d37de39857.jpeg",
                    name: "High Truffle Fries",
                    description: "Crispy fries drizzled with truffle mayo and sprinkled with parmesan cheese.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/291039b962d9a17524c356fab000f2f9.jpeg",
                    name: "Chicken Strips",
                    description: "Breaded chicken strips served with our signature maple buffalo dip",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b3e01c4212ce97dfce649d2fa749dcf3.jpeg",
                    name: "Hot Honey Chicken Strips",
                    description: "Crispy chicken strips tossed in Nashville butter, spicy honey, sesame seeds & spring onion.",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/9b2530875d5504e564d9491e10890c62.jpeg",
                    name: "Mac and cheese balls",
                    description: "Deep-fried balls filled with mac and cheese.",
                    price: "24.00",
                  },
                ]
              }
            },
            {
              name: 'The High Sliders',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/57a0bd662828d21430ddf3751dcfb317.jpeg",
                    name: "The Duo Slider",
                    description: "Choose your favourite duo slider.",
                    price: "39.00",
                  },
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/92eb70e29d1d85d1a2a5b8d055b89453.jpeg",
                    name: "Lotus Cheesecake Bun",
                    description: "A soft Korean-style bun filled with rich Lotus Biscoff cheesecake cream and topped with Lotus crumbs",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/8506c7d94a644dc36d8e69d78de1e786.jpeg",
                    name: "Tropical Bun",
                    description: "A soft Korean-style bun filled with a luscious blend of tropical passionfruit, mango and coconut cream",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7af27bd372d6ffb78cacd5a1565994f1.jpeg",
                    name: "Nutella Bun",
                    description: "A soft Korean-style bun filled with Nutella",
                    price: "19.00",
                  },
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/61f3dbf6f890ca88c8e311fb624d59e4.jpeg",
                    name: "Rose Lemonade",
                    description: "Rose Lemonade",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/43a5821f97e2865b4fdce845a0522436.jpeg",
                    name: "Curiosity Cola",
                    description: "Curiosity Cola",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/da64155e21c91d0884250d558fb03c6f.jpeg",
                    name: "Orange Ginger Mandarin",
                    description: "Orange ginger mandarin",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/32a3b7166515d9f344622521f47feafb.jpeg",
                    name: "Ginger Root Beer",
                    description: "Ginger root beer",
                    price: "23.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/9366d43a959edcdd822f799e72c11e80.jpeg",
                    name: "Kids Apple juice",
                    description: "Kids Apple juice",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/8a623b5e6c0d45aa8a11e52c7ff41431.jpeg",
                    name: "Kids orange juice",
                    description: "Kids orange juice",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b0858119d298a7f9665a4b266213b288.jpeg",
                    name: "Coca Cola Can 300Ml",
                    description: "Coca Cola Can 300Ml",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4f607ed9d305e8d313cb3f04f9434981.jpeg",
                    name: "Sprite Regular Can 300Ml",
                    description: "Sprite Regular Can 300Ml",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/be10bc9291f0b90001a11fc910f082fb.jpeg",
                    name: "Sprite Zero 300Ml",
                    description: "Sprite Zero 300Ml",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/584128b7900dc1f0c0aa4df3ec0c419f.jpeg",
                    name: "Fanta Regular Can 300Ml",
                    description: "Fanta Regular Can 300Ml",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/3749e0fb29a63d74558d315953131459.jpeg",
                    name: "Arwa Water 500Ml",
                    description: "Arwa Water 500Ml",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/96e2ec29324906bb58a52262bd5dfa09.jpeg",
                    name: "Sparkling Water",
                    description: "Sparkling Water",
                    price: "12.00",
                  }
                ]
              }
            },
            {
              name: 'Dips',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7930f97450f15f1b6e337bd77ce52f55.jpeg",
                    name: "High Sauces",
                    description: "Choose your favorite sauces",
                    price: "4.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  // {
  //   name: 'Sushiart',
  //   country: 'UAE',
  //   city: 'Abu Dhabi',
  //   address: 'The Galleria Al Maryah Island Hamouda Bin Ali Al Dhaheri Street',
  //   latitude: 24.5010275,
  //   longitude: 54.3902701,
  //   placeId: 'ChIJgWk47lRmXj4RhGTNlpyfU-Y',
  //   menu: {
  //     create: {
  //       categories: {
  //         create: [
  //           {
  //             name: 'Summer Recipes',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Summer_Box_of_the_Moment638879992576969735.jpg",
  //                   name: "Sushi Box Of The Moment 17 Pieces",
  //                   description: "Our sushi box of the moment bursts with sunny flavours, making a vibrant stop in Latin America beautifully paired with our all-time favorites.\n2 salmon sushi, 3 California chicken curry, 3 cooked tuna avocado spring roll, 3 avocado cheese maki, 6 California Cancun.",
  //                   price: "79.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Summer_Box_Gourmet638879992649858028.jpg",
  //                   name: "Summer Box Gourmet 22 Pieces",
  //                   description: "Delicious journey through beloved classics and bold new creations. This box blends our iconic recipes with three exciting, Latin-inspired innovations.\n2 Buenos Aires sushi, 3 Cancun roll, 6 cooked tuna avocado roll, 2 salmon sushi, 3 salmon Aburi roll, 6 Tulum spring roll",
  //                   price: "109.00",
  //                   highlighted: true,
  //                   video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763148605/How_often_do_you_crave_SushiArt_c7lyo9.mp4'
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tulum_Spring638879992870749183.jpg",
  //                   name: "Tulum Spring Roll 6 Pieces",
  //                   description: "Tulum is moment suspended in time wild coastline, whisper of palm leaves, and sense that anything is possible. This spring roll captures that spirit delicately wrapped with succulent Ebi shrimp and velvety guacamole, lifted by brightness of red onion and aromatic touch of coriander. Light, fresh, and full of life like Caribbean sunset on your plate. Shrimp, lettuce, coriander, guacamole, and red onion.",
  //                   price: "37.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cancun_Roll638879992923104439.jpg",
  //                   name: "Cancun Roll 6 Pieces",
  //                   description: "Cancun is bold, festive, and full of flavour. Where sea meets sunset, this roll captures spirit of celebration. Featuring rich salmon, creamy avocado, kick of spicy mayo, and the irresistible crunch of crispy chips. It's vibrant, sun-drenched creation made to satisfy your craving for warmth and joy. Salmon, spicy mayonnaise, white sesame seeds, avocado, and crisps.",
  //                   price: "35.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Mexico_City_Handroll638879992983044812.jpg",
  //                   name: "Mexico City Handroll 1 Piece",
  //                   description: "Bubbling energy of Mexico City is captured in this handroll, made with prawn tempura, guacamole, and enhanced by onion and fresh coriander. Quick getaway under vibrant sun of capital. Shrimp tempura, red onion, guacamole, coriander.",
  //                   price: "29.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Andes_Salad638879993104524390.jpg",
  //                   name: "Andes Salad",
  //                   description: "High in mountains of Latin America, quinoa has long been cherished staple. This salad pays tribute with blend of quinoa, sun-dried tomatoes, and fresh herbs refreshing pause, like crisp morning breeze in Andean peaks.\nQuinoa, Goma Ponzu Sauce, parsley, sundried tomatoes, mint, and coriander.",
  //                   price: "37.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Omakase Handroll by Chef Gregoire Berger',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Seabream_Crudo638965488374256810.jpg",
  //                   name: "Sea Bream Crudo",
  //                   description: "A delicate preparation of sea bream lifted with calamansi gel and dill, with a shiso, yuzu dressing to add a perfect balance of citrus and freshness",
  //                   price: "45.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Dynamite_Prawn_Tempura_Ha638965488351017836.jpg",
  //                   name: "Dynamite Prawn Tempura Handroll",
  //                   description: "Our signature dynamite shrimp reimagined crisp prawn tempura glazed with our bold dynamite sauce, paired with creamy guacamole, fresh coriander, sesame, and a touch of wasabi over delicate vinegared rice, wrapped in crisp nori.",
  //                   price: "22.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Tuna_Kimchi_Nomoto_Handro638965488366291657.jpg",
  //                   name: "Tuna Kimchi Nomoto Handroll",
  //                   description: "A reimagined take on our Omakase favorite, the Tuna Kimchi Nomoto fresh tuna with togarashi heat, kimchi sesame, and kimchi ginger, accented with a touch of wasabi over delicate vinegared rice, wrapped in crisp nori.",
  //                   price: "22.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Beef_Tartare_Handroll638965488701899476.jpg",
  //                   name: "Beef Tartare Handroll",
  //                   description: "Freshly prepared beef tartare with seared jalapeno, a touch of freshly crushed black pepper, and wasabi, layered over delicate vinegared rice and wrapped in crisp nori.",
  //                   price: "32.00",
  //                   highlighted: true,
  //                   video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472245/sushiartuae2_qxeaie.mp4',
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Salmon_Handroll638965488366270671.jpg",
  //                   name: "Salmon Handroll",
  //                   description: "Fresh salmon tartare with citrus yuzu and lemon zest, balanced with miso and a touch of wasabi, finished with spring onion and toasted sesame over delicate vinegared rice, wrapped in crisp nori.",
  //                   price: "22.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Omakase_Handroll_Box_638965488374341831.jpg",
  //                   name: "Omakase Handroll Box",
  //                   description: "A curated handroll experience by Chef Gregoire Berger featuring delicate sea bream crudo and your choice of four handcrafted hand rolls, wrapped fresh in crisp nori.",
  //                   price: "99.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Sushi Art Everyday Collection',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Little_Samurai_9pcs_638841014830527804.jpg",
  //                   name: "Little Samurai 9 Pcs",
  //                   description: "3 salmon avocado roll, 3 crispy kani roll and 3 prawn tempura roll.",
  //                   price: "39.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Little_Salmon_9pcs_638841014861578942.jpg",
  //                   name: "Little Salmon 9 Pcs",
  //                   description: "3 Salmon avocado roll, 3 salmon maki, 3 spicy salmon spring roll",
  //                   price: "39.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Sunny_Box_12pcs_638841014897447954.jpg",
  //                   name: "Sunny Box 12 Pcs",
  //                   description: "4 volcano roll, 3 prawn cucumber tempura roll, 3 surimi avocado and 2 salmon teriyaki.",
  //                   price: "49.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Best_Of_13pcs_638841014917500703.jpg",
  //                   name: "Best Of 13 Pcs",
  //                   description: "4 Exotic roll, 3 salmon avocado roll, 3 crispy kani roll, 3 chicken katsu roll.",
  //                   price: "49.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/Shrimpy_15_pcs_638841014956600016.jpg",
  //                   name: "Shrimpy 15 Pcs",
  //                   description: "4 Exotic roll, 6 prawn tempura roll, 3 prawn spring roll and 2 shrimp sushi.",
  //                   price: "49.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Under 500kcal',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/2226AFE09280DEBBD1325811C59B960F",
  //                   name: "Healthy  Salmon Platter - 12 pcs",
  //                   description: "377 Kcal, 40.6g Carbs, 0.3g Sugar, 21.8g Protein, 13.2g Fat, 1.8g Dietary Fibers\n\n6 Healthy Naked Salmon Avocado Spring Roll, 3  Healthy Salmon Maki, 3 Healthy Salmon Sashimi",
  //                   price: "79.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/990B25FBA2219A354AA5E5F5608C0D73",
  //                   name: "Healthy Best Mix Platter - 15 pcs",
  //                   description: "490 Kcal, 64.6g Carbs, 0.6g Sugar, 25.8g Protein, 12.6g Fat, 4.1g Dietary Fibers\n\n6 Healthy Tuna Avocado Roll, 6 Healthy Avocado Maki, 1 Healthy Shrimp Sushi, 1 Healthy Seabream Sushi, 1 Healthy Salmon Sushi",
  //                   price: "99.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/934837490D631EB9B76FCFF277A9798C",
  //                   name: "Healthy Shrimp Platter - 15 pcs",
  //                   description: "488 Kcal, 64.6g Carbs, 0.6g Sugar, 33.3g Protein, 9.2g Fat, 0.6g Dietary Fibers\n\n3 Healthy Shrimp Sushi, 6 Healthy Shrimp Maki, 6 Healthy Tuscan Spring Roll",
  //                   price: "99.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/0E092A195326C675D56FD20D758D28AB",
  //                   name: "Healthy Special Mix Platter - 15 pcs",
  //                   description: "498 Kcal, 62.4g Carbs, 0.7g Sugar, 34.9g Protein, 14.7g Fat, 1.4g Dietary Fibers\n\n3 Healthy Shrimp Sushi, 3 Healthy Seared Beef Sushi, 6 Healthy Tuna White Truffle Roll, 3 Healthy Salmon Avocado Roll",
  //                   price: "99.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/EDF7550BD39A4D7B2730FBE52F1BA670",
  //                   name: "Healthy Tuna Platter - 9 pcs",
  //                   description: "267 Kcal, 29.8g Carbs, 0.2g Sugar, 21.5g Protein, 5.7g Fat, 1.9g Dietary Fibers\n\n6 Healthy Tuna Avocado Roll, 2 Healthy Tuna Sashimi, 1 Healthy Tuna Sushi",
  //                   price: "59.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/1095B88FDCD2FCB9229E0A4E8FFA4D2A",
  //                   name: "Healthy Veggie Platter - 12 pcs",
  //                   description: "375 Kcal, 58.5g Carbs, 1.2g Sugar, 15.8g Protein, 7.1g Fat, 4.9g Dietary Fibers\n\n6 Healthy Cucumber Avocado Roll, 6 Healthy Maki Like Tabbouleh, Edamame",
  //                   price: "49.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Box By You - 100% Customizable Box',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/B78554128BE75503ED2E3D808B57EB56",
  //                   name: "Box By You For 2 (42 pieces)",
  //                   description: "The best box made by you! Your most favorite SushiArt pieces hand picked by you. Choose from a selection of Sushi, Maki and Rolls to created your unique box of 42 pieces. 6 Sushi Rolls (3x2 pieces). 36 California Rolls (6x6 pieces )",
  //                   price: "215.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D38438E1027B0283EEC5144B66A5FA3F",
  //                   name: "Box By You (18 pieces)",
  //                   description: "The best box made by you! Your most favorite SushiArt pieces hand picked by you. Choose from a selection of Sushi, Maki and Rolls to created your unique box of 18 pieces. 6 Sushi Rolls (3x2 pieces) 12 California Rolls (2x6 pieces)",
  //                   price: "112.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Platters',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/3B513D9E0592AC4B2A1F468DBA1CFB7C",
  //                   name: "Salmon Classic",
  //                   description: "10 Salmon Sushi",
  //                   price: "82.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/A75312C9FCA5CC9EDEC4F557A6FFEF43",
  //                   name: "Cooked 18",
  //                   description: "6 Prawn Tempura Rolls\n6 Crispy Kani Rolls\n6 Chicken Katsu Rolls",
  //                   price: "102.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/9C09344B7703ECC94C6847478D85BC60",
  //                   name: "Classic Mix",
  //                   description: "3 Salmon Sushi\n2 Tuna Sushi \n6 Salmon Avocado Rolls \n6 Tuna Maki",
  //                   price: "102.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/4F540886BB6E4E0B658FCC9C3976B9C2",
  //                   name: "Salmon Lovers",
  //                   description: "6 Salmon Avocado Spring Rolls\n6 Salmon Avocado Rolls\n6 Salmon Sushi",
  //                   price: "102.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/6B422E582DB648A443618C0F16F865E0",
  //                   name: "Super Salmon",
  //                   description: "6 Salmon Avocado Rolls 6 Salmon Avocado Spring Rolls 6 Salmon Roll Maki 6 Salmon Maki",
  //                   price: "112.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/C500DE866A0CE891C7A762960784DB25",
  //                   name: "California Dream",
  //                   description: "6 Salmon Avocado Rolls 6 Crispy Kani Rolls 6 Prawn Tempura Rolls 6 Chicken Katsu Rolls",
  //                   price: "112.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/8E1FC109AEC12EF85D1B6F3FCA7597CC",
  //                   name: "Sunset",
  //                   description: "5 Salmon Sashimi\n6 Prawn Tempura Rolls\n3 Salmon Sushi\n2 Salmon Teriyaki Sushi\n2 Tuna Sushi",
  //                   price: "122.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/7CC5257E2E11B8EF7FB6190B6108BF6A",
  //                   name: "Box For 2 Classic (42pcs)",
  //                   description: "2 Tuna Sushi 2 Salmon Sushi 2 Teriyaki Salmon Sushi 6 Salmon Maki 6 Salmon Roll Maki 6 Salmon Avocado Rolls 6 Chicken Katsu Rolls 6 Salmon Spring Rolls 6 Cooked Tuna Avocado Spring Rolls",
  //                   price: "205.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/A0753653FA7A24C246E2DA12AF16FE9A",
  //                   name: "Box For 2 Deluxe (44pcs)",
  //                   description: "2 Tuna Sushi\n2 Salmon Sushi\n2 Teriyaki Salmon Sushi\n6 Salmon Roll Maki\n6 Salmon Avocado Rolls\n6 Crispy Kani Rolls\n6 Salmon Tataki Spring Rolls\n6 Prawn Spring Rolls\n8 Rock N Roll Signature Rolls",
  //                   price: "255.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/18723EC9039BDC79E3D73AFAEDE12400",
  //                   name: "Cooked for Two",
  //                   description: "6 Prawn Tempura Rolls\n6 Surimi Avocado Rolls\n6 Chicken Katsu Rolls\n6 Salmon Aburi Rolls\n6 Cooked Tuna Avocado Rolls\n8 Dragon Signature Rolls\n3 Prawn Sushi\n3 Seared Beef  Sushi",
  //                   price: "245.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/950AF430CDED3EC9A497F9BAE56C4578",
  //                   name: "Blackbox Classic (58pcs)",
  //                   description: "2 Prawn Sushi\n4 Tuna Sushi\n4 Teriyaki Salmon Sushi\n6 Salmon Sushi\n6 Salmon Maki\n6 Salmon Roll Maki \n6 Salmon Avocado Rolls\n6 Cooked Tuna Avocado Rolls\n6 Chicken Katsu Rolls\n6 Salmon Avocado Spring Rolls\n6 Salmon Tataki Spring Rolls",
  //                   price: "325.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/A7E0FA8160D959663AB1BC0B34C502B6",
  //                   name: "Blackbox Deluxe (58 pieces)",
  //                   description: "2 Tuna Sushi 2 Seabream Jalapeno Sushi 2 Prawn Sushi 4 Salmon Sushi 4 Teriyaki Salmon Sushi 6 Salmon Roll Maki 6 Pacific Rolls 6 Citrus Salmon Rolls 6 6 Crispy Kani Rolls 6 Tuscan Spring Rolls 6 Salmon Tataki Spring Rolls 8 Rock N Roll Signature Rolls",
  //                   price: "425.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Signature Boxes',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/412F3F7DC188F207B8F669A6C6903106",
  //                   name: "Signature Box",
  //                   description: "4 Volcano Rolls 4 Fire Rolls 4 Dragon Rolls 4 Rainbow Rolls 4 Rock & Roll",
  //                   price: "155.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/6BC0CC0F23B193C4336D58BC39D765D2",
  //                   name: "Signature Box Deluxe (46pcs) - NEW",
  //                   description: "4 Volcano Roll 4 Fire Roll 4 Dragon Roll 4 Exotic Roll 4 Rock N Roll 4 Crazy Shrimp Tempura Roll 6 Salmon Avocado Roll 6 Spicy Tuna Maki 4 Salmon Sushi 4 Tuna Sushi 2 Salmon Teriyaki Sushi",
  //                   price: "285.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Starters',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/B90FE83AEA432E7F16E421CE342F43CE",
  //                   name: "Edamame",
  //                   description: "Rock Salt",
  //                   price: "23.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/A97838071603852FCAE4F7CCFE0AE3C5",
  //                   name: "Spicy Edamame",
  //                   description: "Chili Garlic Sauce",
  //                   price: "25.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Small Plates',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/5FD8B3355017EDD2C0F0671877947FC0",
  //                   name: "Yusu Miso Marinated Salmon",
  //                   description: "Salmon Marinated in Yuzu Miso Sauce, Sesame",
  //                   price: "61.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/44F3CD724D81F42BE8699AE85AE897EB",
  //                   name: "Salmon Tartare",
  //                   description: "Diced Salmon, Avocado, Japanese Mayonnaise, Salmon Roe, Dill, Seaweed",
  //                   price: "71.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/CBFEEC8364560B1D0F8EB744A2F278DB",
  //                   name: "Marinated Tartare",
  //                   description: "Diced Salmon & Tuna, Cucumber, Leek, Mint, Coriander, Marinade",
  //                   price: "65.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/6BFE5C3600681D3D1508D0EA9D01A609",
  //                   name: "Salmon Ceviche",
  //                   description: "Salmon, Lime Juice, Coriander, Cucumber, Red Onion, Chili",
  //                   price: "62.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/951EE67DA929EA815453C2682AE65E5E",
  //                   name: "Seabream Ceviche",
  //                   description: "Seabream, Lime Juice, Coriander, Cucumber, Red Onion, Chili",
  //                   price: "78.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Nigiri - 1 piece',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/FECC26F86D191C35F5CA7C93488CD1A5",
  //                   name: "Salmon",
  //                   description: "Salmon, butter, spices, lemon.",
  //                   price: "12.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/F3036C2EFB52627B48F50EEF3AF51D9E",
  //                   name: "Salmon Teriyaki",
  //                   description: "Seared Salmon, Teriyaki Sauce, Sesame",
  //                   price: "13.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D53CF87690D3D6E48532DA8E84EA1C6C",
  //                   name: "Tuna",
  //                   description: "Succulent and flavorful tuna",
  //                   price: "14.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/316AE478C1DD0019D56197D6E9E774FF",
  //                   name: "Salmon Roe",
  //                   description: "Salmon eggs.",
  //                   price: "38.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/84F5D8C96CD69A19AD624CC9C34830D1",
  //                   name: "Seabream Jalapeno",
  //                   description: "Yuzu Miso Sauce, Fresh Chili, Coriander",
  //                   price: "14.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/1E88A0F915AC647B080570ECFA3DB5E7",
  //                   name: "Shrimp",
  //                   description: "Yuzu Miso Sauce, Kumquat, Coriander",
  //                   price: "13.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/BA3FD84C817C7FA0727745DE7531614E",
  //                   name: "Seared Beef",
  //                   description: "Asparagus, Mild Chili, Goma Ponzu Sauce",
  //                   price: "18.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/A079ACBEE84A3CCBA8A47467AF6530BE",
  //                   name: "Kani Crab",
  //                   description: "Crab meat known as Kani.",
  //                   price: "12.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/AE2CE2719C2819AE5FE2BD077522D20D",
  //                   name: "Seared Scallops",
  //                   description: "Miso Yuzu Sauce",
  //                   price: "16.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/20D6D4CCC15A0A4D6EFB1D8810F3BFD3",
  //                   name: "Japanese Eel",
  //                   description: "Teriyaki Sauce, Sesame",
  //                   price: "20.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Signature Rolls - 8 pieces',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/96572B6F1E63F925255F8E718800FBB9",
  //                   name: "Volcano Roll",
  //                   description: "Topping: Surimi, Salmon, Spicy Mayonnaise, Sweet Chili Sauce, Masago, Chives, Coriander, Sesame\n\nInside: Salmon, Avocado",
  //                   price: "59.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D1891A5BEECC4BC0C6AE0EA31D87F01D",
  //                   name: "Rock N Roll",
  //                   description: "Topping: Glazed Salmon, Teriyaki Sauce, Chili, Crisps, Chives, Sesame\n\nInside: Tuna, Asparagus, Avocado, Masago, Spicy Mayonnaise",
  //                   price: "59.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/60DC58A7BC73C060B443BFB19814B50A",
  //                   name: "Fire Roll",
  //                   description: "Topping: Tuna, Spicy Mayonnaise, Chives, Sesame, Spring Onion\n\nInside: Prawn Tempura, Avocado, Goma Ponzu Mayonnaise",
  //                   price: "59.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/28_Rainbow_Roll638806697994723578.jpg",
  //                   name: "Rainbow roll",
  //                   description: "Topping: Salmon, Tuna, Avocado, Chili, Ponzu Sauce, Chives, Sesame,\n\nInside: Crab Meat, Avocado, Goma Ponzu Mayonnaise",
  //                   price: "59.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/6A4E76641CB16BCE5E10A42BE35BE858",
  //                   name: "Dragon Roll",
  //                   description: "Topping: Avocado, Salmon Roe, Chili, Teriyaki Mayonnaise, Chives, Sesame\n\nInside: Prawn Tempura, Asparagus, Goma Ponzu Mayonnaise",
  //                   price: "59.00",
  //                   highlighted: true,
  //                   video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763148449/Where_every_roll_tells_a_story_signaturebox_sushirolls_ybkux3.mp4',
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/B867F841825F5095C2D0477951D0047B",
  //                   name: "The Exotic Roll",
  //                   description: "Shrimp Tempura, Avocado, Coriander, Spicy Mayonnaise, Mango, Chives",
  //                   price: "59.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/2A9544F1A715397D9B7104BC8ED9D91A",
  //                   name: "Crazy Prawn Tempura",
  //                   description: "Shrimp Tempura, Kani, Avocado, Tempura Flakes, Spicy Mayonnaise",
  //                   price: "59.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/8D10228F05BD4FD4CDAC026A6BFD05FF",
  //                   name: "The Black Dragon",
  //                   description: "Shrimp Tempura, Eel, Avocado, Teriyaki Mayonnaise, Sesame",
  //                   price: "59.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Maki - 6 pieces',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D41FEF0DD5E2C2BB1CED6EE1B0937E20",
  //                   name: "Tuna",
  //                   description: "Succulent and flavorful tuna",
  //                   price: "34.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/B353F52F29100435446CC143E6208526",
  //                   name: "Spicy Tuna",
  //                   description: "Spicy Mayonnaise, Chives",
  //                   price: "36.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/4E23C077B56A1FE64465E04D11D5F84B",
  //                   name: "Salmon",
  //                   description: "Salmon, butter, spices, lemon.",
  //                   price: "32.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/3347E2A9A4C9BC62F661978F86676FBE",
  //                   name: "Salmon Roll",
  //                   description: "Rice, Cheese Wrapped in Salmon",
  //                   price: "38.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/BE0AD9E9A05846D4140082910951BA72",
  //                   name: "Avocado",
  //                   description: "Ripe avocado and packed with essential nutrients.",
  //                   price: "21.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/C636337B86ED24C4341C2580979215BD",
  //                   name: "Avocado & Cheese",
  //                   description: "Dish with avocado and cheese.",
  //                   price: "24.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/4872D51605A3E782BFA02AB22A668606",
  //                   name: "Cucumber Sesame",
  //                   description: "Cucumber with sesame seeds.",
  //                   price: "20.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/2FC8B2101194D4CB4E9D16507CBFAC8A",
  //                   name: "Eel Avocado",
  //                   description: "Eel and avocado sushi.",
  //                   price: "42.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Rolls - 6 pieces',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/0A749B2B282B773F295162DCF570FB41",
  //                   name: "Veggie",
  //                   description: "Cucumber, Chioggia Beetroot, Rocket, Carrot, Quinoa, Avocado, Olive Cream, Ponzu Sauce, Sesame Oil",
  //                   price: "31.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/4D93E578AB3669B1CF9AD2A42E824ACD",
  //                   name: "Cucumber Avocado",
  //                   description: "Sesame",
  //                   price: "26.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/BA77F9F9D0C1CDA0C240B00C038B4FCC",
  //                   name: "Salmon and Avocado",
  //                   description: "Sesame",
  //                   price: "35.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/72C37AAE6337E392BBEF0293C3F050DB",
  //                   name: "Tuna and Avocado",
  //                   description: "Sesame",
  //                   price: "37.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/965FA980F380693516097BA64218717A",
  //                   name: "Dynamite",
  //                   description: "Salmon, Spicy Mayonnaise, Masago, Cucumber, Sesame",
  //                   price: "37.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/A8BD950ADA4548B8AB24AF1AB560CF1D",
  //                   name: "Pacific",
  //                   description: "Salmon Tartare, Spicy Mayonnaise, Cheese, Avocado, Sesame",
  //                   price: "37.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/CB78E977D7CEE336330C639A5F1D1E3C",
  //                   name: "Chicken Katsu",
  //                   description: "Fried Chicken, Carrot, Rocket, Chives, Mayonnaise, Tonkatsu Sauce, Sesame",
  //                   price: "37.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/393D657934EEFBC0C66A6FBADDE35FCD",
  //                   name: "Cooked Tuna Avocado",
  //                   description: "Sesame",
  //                   price: "35.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/269EB0063A59D83A0542AA50E0CF7AAA",
  //                   name: "Citrus Salmon",
  //                   description: "Salmon, Avocado, Lime Mayonnaise, Sesame, Crusty Crouton, Chives, Masago",
  //                   price: "40.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/5FCEBA95EB630C57A531F8F84BE04FAE",
  //                   name: "Shrimp Tempura",
  //                   description: "Shrimp Tempura, Avocado, Spicy Mayonnaise, Sesame",
  //                   price: "42.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/1F630D18F117306A049C2E2DA573955C",
  //                   name: "Tuna & White Truffle",
  //                   description: "Tuna Tartare, Truffle Infused Mayonnaise, Chives",
  //                   price: "42.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/E7C553BB7FE5B5E14745F24A55181978",
  //                   name: "Crab Avocado",
  //                   description: "Crab Meat, Lime Mayonnaise, Masago",
  //                   price: "44.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/8153EC27BDA2B33A6CDC8F5F7A9BF796",
  //                   name: "Surimi Avocado",
  //                   description: "Masago",
  //                   price: "36.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/AA43A5EABDC891FB269DDB3BB9733427",
  //                   name: "Crispy Kani",
  //                   description: "Kani, Avocado, Tempura Flakes, Spicy Mayonnaise, Chives",
  //                   price: "42.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/9725F21F5676F6822EC0408B123F4C52",
  //                   name: "Salmon Aburi",
  //                   description: "Seared Salmon, Salmon, Cheese, Chives, 7 Spices",
  //                   price: "42.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/F25A9DD7542CD490EC8673B492ED6B97",
  //                   name: "Prawn Cucumber Tempura",
  //                   description: "Prawn Tempura, Cucumber, Spicy Mayonnaise, Sesame",
  //                   price: "38.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Sashimi & Tataki',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/7E50D37CFB9EAE73B787FBB52B75D56C",
  //                   name: "Salmon Sashimi 5pcs",
  //                   description: "Sashimi-grade salmon, wasabi, pickled ginger and soy sauce",
  //                   price: "46.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/41EB702455344CD59C2E45DFAD6957B8",
  //                   name: "Tuna Sashimi 5pcs",
  //                   description: "Five pieces of raw tuna, Soy sauce,Wasabi, Pickled ginger",
  //                   price: "55.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/4826012B188A1A3B95A7980CD37019A6",
  //                   name: "Seabream Sashimi 5pcs",
  //                   description: "Sea bream fillet, Wasabi, Pickled ginger, Soy sauce and Sesame seeds",
  //                   price: "46.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/220AE700DDE28016D5ADBF40A601DFC5",
  //                   name: "Shrimp Sashimi 5 pcs",
  //                   description: "Shrimp, rice vinegar, sugar, salt, wasabi paste, pickled ginger, nori, and soy sauce.",
  //                   price: "39.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/5E38B70EF209DA0C2A345E177EE6668F",
  //                   name: "Assortment 15 pcs",
  //                   description: "Salmon, Tuna, Seabream, Prawn",
  //                   price: "125.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/E971F95F37A9F87FE6C40F7E87D502B3",
  //                   name: "Salmon Tataki 10 pcs",
  //                   description: "Seared Salmon, Chili, Spring Onion, Yuzu Miso Sauce, Coriander, Chives",
  //                   price: "90.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/710D49692500C212C356CD4BCAD42E8B",
  //                   name: "Tuna Tataki 10 pcs",
  //                   description: "Seared Tuna, Chili, Chives, Yuzu Miso Sauce, Crisps",
  //                   price: "99.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/E2C78B8C21624A63867295D8BABF74FA",
  //                   name: "New Style Beef Tataki 10 pcs",
  //                   description: "Finely Sliced Seared Beef, Asparagus, Chili, Goma Ponzu Mayonnaise, Chives",
  //                   price: "99.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Spring Rolls - 6 pieces',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/5DA10370F55BB5F9AE40A14587DF7B4D",
  //                   name: "Salmon Avocado",
  //                   description: "Mint, Coriander, Lettuce",
  //                   price: "39.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/CD755AA6C17E5E6B6F449601026B26D3",
  //                   name: "Spicy Salmon",
  //                   description: "Salmon, Avocado, Masago, Spicy Mayonnaise",
  //                   price: "35.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/DA709AB6D47A17B29505753A5E9F74F5",
  //                   name: "Tuna Avocado",
  //                   description: "Mint, Coriander, Lettuce",
  //                   price: "39.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/7DEE3BBD3017DF44D313A1180F42AE84",
  //                   name: "Cooked Tuna and Avocado",
  //                   description: "Lettuce",
  //                   price: "35.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/8AC286CAF11916304F3202241C2E0802",
  //                   name: "Salmon Tataki",
  //                   description: "Seared Salmon, Radicchio, Chives, Sesame Oil Mayonnaise, Coriander, Sesame",
  //                   price: "39.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/65126F659A4A5CC1931C3393CFAA2C34",
  //                   name: "Shrimp",
  //                   description: "Avocado, Mint, Coriander, Lettuce",
  //                   price: "41.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/CA3DB657941350AEE45C3826ED56C097",
  //                   name: "Tuscan",
  //                   description: "Shrimp, Pine Nuts, Mesclun Salad, Truffle Infused Mayonnaise",
  //                   price: "39.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/826BA416560F1BB4210581FE853FC3B7",
  //                   name: "Avocado and Cheese",
  //                   description: "Lettuce",
  //                   price: "24.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/036228DEBDD12F69239119D9A4AC8E3C",
  //                   name: "Fried Chicken Avocado",
  //                   description: "Japanese Mayonnaise, Lettuce",
  //                   price: "32.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Bowls',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/E29F961D912A2E4AB68A0A400367F0AD",
  //                   name: "Salmon & Avocado Chirashi",
  //                   description: "Salmon & Avocado on a Bowl of Sushi Rice, Sesame",
  //                   price: "89.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/71AD8E3521BD045A37131D3CF442DB46",
  //                   name: "Marinated Chirashi",
  //                   description: "Diced Salmon & Tuna, Cucumber, Leek, Mint, Coriander & Marinade on a Bowl of Sushi Rice, Sesame",
  //                   price: "89.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/742275373B5DE8B5BE26234BAFF029BD",
  //                   name: "Veggie Poke Bowl",
  //                   description: "Avocado, Edamame, Crisp Vegetables, Rocket, Coriander, Mint, Chives, Lemon Juice, Sesame",
  //                   price: "58.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/16CA04964DF1569358883674C6F752CA",
  //                   name: "Teriyaki Salmon Poke Bowl",
  //                   description: "Salmon, Avocado, Cabbage Salad, Soy Sauce, Teriyaki Sauce, Furikake, Chives, Sesame",
  //                   price: "75.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/9B879F9CD7811DFEA5E23087C9DE10DE",
  //                   name: "Salmon Aburi Poke Bowl",
  //                   description: "Seared Salmon With Teriyaki Sauce, Avocado, Edamame, Crisp Vegetables, Rocket, 7 spices, Sesame",
  //                   price: "75.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/0DBB84568C92758E69829249AF43275B",
  //                   name: "Spicy Tuna Poke Bowl",
  //                   description: "Tuna, Avocado, Cabbage Salad, Masago, Spicy Mayonnaise, Coriander, Chives, Sesame",
  //                   price: "75.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/50B3EA2DF005EF789B128D7C383DE87F",
  //                   name: "Beef Poke Bowl",
  //                   description: "Beef, Teriyaki Sauce, Avocado, Edamame, Crisp Vegetables, Rocket, Fried Onions, Coriander, Chives, Lemon Juice, Sesame",
  //                   price: "98.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/025B3AAF6E687F80CC7B1F125FE8F879",
  //                   name: "Eel Donburi",
  //                   description: "Japanese rice bowl topped with eel.",
  //                   price: "128.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Soups',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/5EBFD67B162ECF46032F7D00FB9BFB9B",
  //                   name: "Miso Soup",
  //                   description: "Tofu, Dried Wakame, Chives",
  //                   price: "16.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/9920B774C5DCECCB08DD81845C74AA62",
  //                   name: "Spicy Miso Soup",
  //                   description: "Tofu, Dried Wakame, Chives, Togarashi",
  //                   price: "17.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Salads',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/226F5C6E6CADA7DDBAD71E989FF7A34E",
  //                   name: "Midori Salad",
  //                   description: "Baby Spinach, Cucumber, Snow Peas, Edamame, Fennel, Avocado, Chives & Sesame with Goma dressing",
  //                   price: "42.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/FE18B690513A0872B30523EAB4DA93C7",
  //                   name: "Crazy Salad",
  //                   description: "Shredded Crab, Cucumber, Carrot, Japanese Mayonnaise, Tempura Flakes, Tobiko",
  //                   price: "56.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/6B4A75E60540E21A640933B708AD686C",
  //                   name: "Sashimi Salad",
  //                   description: "Salmon, Seabream, Tuna, Daikon, Carrot, Rocket, Baby Spinach, Cucumber, Red Onion & Pomegranate with our Signature Sashimi Sauce",
  //                   price: "74.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/925AEF150C1206A636FEB620A147FBB5",
  //                   name: "Six Stars Shrimp Salad",
  //                   description: "Shrimp, Daikon, Carrot, Baby Spinach, Rocket, Cucumber, Onion, Coriander, Caramelized Walnuts, Six Stars Sauce",
  //                   price: "66.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/9AF1076340DA161752028925B1F74E01",
  //                   name: "Crispy Spicy Salmon",
  //                   description: "Fresh Salmon, Tempura Flakes, Spicy Sauce, Chives, Masago",
  //                   price: "67.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Sides',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/56A599CF7B93B06AB3B931DCF08CC052",
  //                   name: "Plain Rice",
  //                   description: "Perfectly cooked plain rice, fluffy and versatile",
  //                   price: "12.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/CB0316E7F2475EA4270B350D89A65413",
  //                   name: "Sushi Rice",
  //                   description: "Sesame",
  //                   price: "12.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/08E0C66977D74B1EFE1FFADA887A6D10",
  //                   name: "Vegetable Noodles",
  //                   description: "Udon Noodles with Cabbage, Carrot, Zucchini, Mushroom and Chives",
  //                   price: "30.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/7E8262BCB8B1564CD4A58CAC8591D086",
  //                   name: "Sauteed Vegetables",
  //                   description: "Blend of crisp and tender veggies, expertly seasoned and cooked to perfection",
  //                   price: "25.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/74854A6D384FEAFFC782A6702AEB7758",
  //                   name: "Cabbage Salad",
  //                   description: "A fresh and crunchy cabbage salad.",
  //                   price: "12.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/1CB2DD32D0179CD98B4F8D141AA7D9A3",
  //                   name: "Coleslaw Wasabi Salad",
  //                   description: "Sesame",
  //                   price: "17.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/E79892DAE9D8C0DAEA1580BF2192F7EC",
  //                   name: "Carrot Salad with Citrus Dressing",
  //                   description: "A carrot salad with citrus dressing.",
  //                   price: "17.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/39BBFF19D8155D1F35FC2E5479FD48ED",
  //                   name: "Baby Spinach Salad",
  //                   description: "Sesame Sauce",
  //                   price: "24.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/13B6EFD42A7FBC422198F261C8334F2C",
  //                   name: "Kani Salad Small",
  //                   description: "Shredded Crab, Cucumber, Carrots, Japanese Mayonnaise & Tobiko",
  //                   price: "36.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D7C75689952F88D0911300CBD0F411AA",
  //                   name: "Seaweed Salad",
  //                   description: "Sesame",
  //                   price: "34.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Gathering Boxes',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/8D5CF03412C7A0C42109BC484BE58164",
  //                   name: "Family Box Classic (108 pcs)",
  //                   description: "Includes (8) rainbow roll, (8) volcano roll, (8) rock and roll, (6) cooked tuna roll, (6) salmon avocado roll, (6) salmon maki roll, (6) crispy kani roll, (6) crab avocado roll, (6) prawn tempura roll, (6) chicken katsu roll, (6) salmon avocado spring roll, (6) salmon tataki spring roll, (6) cucumber maki, (6) chicken avocado spring roll, (10) salmon sashimi and (8) salmon sushi.",
  //                   price: "549.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/E65DF18F1A67E0817AE0B2C11DDB3EAB",
  //                   name: "Family Box Gourmet (110 pcs)",
  //                   description: "(12) Fresh salmon roll, (12) surimi avocado roll, (12) tuna avocado roll, (12) cucumber and avocado roll, (12) salmon avocado roll, (12) tuna maki, (12) salmon maki, (8) salmon sushi, (8) tuna sushi, (10) salmon sashimi",
  //                   price: "599.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/52DB38D900DF59132DD87AEA74F0A369",
  //                   name: "Family Box Deluxe (130 pcs)",
  //                   description: "(8) Rock and roll, (8) volcano roll, (8) dragon roll, (12) salmon aburi roll, (6) chicken katsu roll, (12) crispy kani roll, (6) crab avocado roll, (12) cucumber cheese roll, (6) salmon maki, (6) salmon avocado roll, (6) prawn tempura roll, (4) salmon sushi, (4) tuna sushi, (3) salmon teriyaki sushi, (3) tuna teriyaki sushi, (6) prawn sushi, (10) tuna sashimi, (10) salmon sashimi.",
  //                   price: "749.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Desserts',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/41AAC789114547EB8CD4EFCD4938DCAC",
  //                   name: "Yuzu Choux",
  //                   description: "A delightful and refreshing treat that combines the light and airy choux pastry with the bright and citrusy flavor of yuzu.",
  //                   price: "38.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/0483363619928DB97C59048EB435754E",
  //                   name: "Matcha Cheesecake",
  //                   description: "A Japanese-inspired dessert that combines the creaminess of cheesecake with the earthy and slightly bitter flavor of matcha green tea",
  //                   price: "44.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/70A9FC004976F1FA68053C611073EA67",
  //                   name: "Mochi",
  //                   description: "Glutinous rice flour, Water, Sugar and Sesame seeds",
  //                   price: "36.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D69B62512566714E165FB4B9204D48EF",
  //                   name: "Fresh Mango",
  //                   description: "Juicy and sweet mango fruit.",
  //                   price: "21.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/BF4EFE12C996A6107657EE92116BB1FC",
  //                   name: "Fresh Pineapple",
  //                   description: "Pineapple, sugar, Water",
  //                   price: "20.00",
  //                 },
  //               ]
  //             }
  //           },
  //           {
  //             name: 'Drinks',
  //             items: {
  //               create: [
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D01F34E980285438568F4E33ACD8107F",
  //                   name: "Pepsi",
  //                   description: "Carbonated soft drink",
  //                   price: "11.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/77FF5638505E309D15A2B0E31F48A089",
  //                   name: "Pepsi Diet",
  //                   description: "Carbonated soft drink with zero sugar and zero calories",
  //                   price: "11.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/4FFE09BD66BBAF217DD69C837BC84297",
  //                   name: "7Up",
  //                   description: "Non-caffeinated soft drink.",
  //                   price: "11.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/B00BE94CE19F723266DFF838757343E7",
  //                   name: "Diet 7Up",
  //                   description: "Soft Drink",
  //                   price: "11.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/EEE21EDF008C0A6C41E1897F90759085",
  //                   name: "Imported Mineral Water Small",
  //                   description: "Bottled mineral water, refreshing.",
  //                   price: "15.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/1F8EB9A7A8FB345E9419D30D715D947A",
  //                   name: "Imported Mineral Water Large",
  //                   description: "Mineral Water",
  //                   price: "22.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/CB246E8380EB34851FC05A78A09354F0",
  //                   name: "Local Mineral Water Small",
  //                   description: "Mineral Water",
  //                   price: "9.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/EF06E513214E3357A2415EAB35904592",
  //                   name: "Sparkling Water Large",
  //                   description: "Refreshing carbonated water",
  //                   price: "24.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/593E6BD380121FCBF5609EDE26EDC0F4",
  //                   name: "Coconut Water",
  //                   description: "330ml",
  //                   price: "36.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/E3CE32D61AEA6A8FC666E0AD4A2F0BB2",
  //                   name: "Fresh Mango Juice",
  //                   description: "Made from the freshest, ripest mangos",
  //                   price: "19.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/B6DE9FF0FF0373A65C7B2F90BA748807",
  //                   name: "Fresh Orange Juice",
  //                   description: "Made with freshly squeezed oranges, great source of vitamin c",
  //                   price: "19.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/D08CA3D43A246231E476F70F4AC8C037",
  //                   name: "Fresh Watermelon Juice",
  //                   description: "Made from freshly squeezed watermelon. It is a natural source of vitamins and minerals",
  //                   price: "24.00",
  //                 },
  //                 {
  //                   image: "https://images.deliveryhero.io/image/talabat/MenuItems/B8385D7EF1076C9AE2B997BA24DA0D0C",
  //                   name: "Organic Apple & Ginger",
  //                   description: "Refreshing organic apple and ginger drink.",
  //                   price: "25.00",
  //                 },
  //               ]
  //             }
  //           },
  //         ]
  //       }
  //     }
  //   }
  // },
  {
    name: 'Zaatar w Zeit', // https://www.talabat.com/uae/restaurant/626019/zaatar-w-zeit-sheikh-zayed-road-jumeirah-1?aid=1256
    country: 'UAE',
    city: 'Dubai',
    address: 'Zaatar w Zeit Ground Floor, Al Meraikhi Towers - Sheikh Zayed Rd - Trade Center First',
    latitude: 25.2086823,
    longitude: 55.2723451,
    placeId: 'ChIJN57CU4hCXz4RzXDrCsCEv9k',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Offers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/42F36A2AB36C3514D3FB71A8FB83318B",
                    name: "Gathering Box",
                    description: "Any 3 Wraps and 2 hot appetizers.",
                    price: "150.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/115E2BD7EC0833B91F963A89792CDD60",
                    name: "Chicken Escalope",
                    description: "Fried chicken escalope with lettuce, tomatoes, pickles and aioli sauce",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7579CFA3D0809FD15D843FDE015E246A",
                    name: "Halloumi & Beef Bacon",
                    description: "Halloumi cheese and beef bacon wrapped in oat dough and topped with tomatoes and mayo",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/548F7D7A7F8B115864BAA4220E0E3458",
                    name: "Simply Caesar",
                    description: "Romaine lettuce, parmesan cheese, and oven baked croutons. Served with Caesar dressing",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5A36901AB68CBE785B419B377CA58ECA",
                    name: "Halloumi Salad",
                    description: "A Blend Of Lettuce, Rocket Leaves, Baked Halloumi, Roasted Almonds, Sundried Tomato & Purslane. Best Enjoyed With Balsamic Dressing",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8E86049C17868650C2208297DF587D20",
                    name: "Cheese Balls",
                    description: "8 breaded pieces of our unique cheese mix & sprinkle of zaatar served with thousand island dipping sauce",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D1048DFF24B25CB592ADE961E8DECC62",
                    name: "Halloumi Sticks",
                    description: "4 pieces of halloumi cheese sticks breaded with Z crumbs served with thousand island dip on the side",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/461B89504304063A2D2DFEB3288052F8",
                    name: "Levantine Lentil Soup",
                    description: "A combination of blended yellow lentil with carrots, onion, & garlic. Served with oven baked croutons",
                    price: "18.00",
                  },
                ]
              }
            },
            {
              name: 'New Wraps',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8AFBB5ADB4F1FEE40129F5B98819280B",
                    name: "Butter Chicken Wrap",
                    description: "Bold, creamy, and bursting with flavour! Tender butter chicken thighs, pickled onion, and crisp lettuce, drizzled with our special mint chutney",
                    price: "36.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762791341/zaatwar_kebab_wv9yuy.mp4',
                    tags: {
                      connect: [
                        {slug: 'indian'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-beef'}, {slug: 'no-pork'},
                        {slug: 'no-shellfish'}, {slug: 'no-sweets'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'},
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6C79A594C39E1194BA35625BC3D03A67",
                    name: "Butter Paneer Wrap",
                    description: "A flavourful vegetarian delight! Creamy butter paneer, pickeled onion, and crisp lettuce, paired with our special mint chutney",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7554DCC4D47CB5470D2B8ADC56C0281C",
                    name: "Ranch Chicken Wrap",
                    description: "Indulge in the ultimate cheesy delight! Grilled chicken marinated in our special ranch sauce, with four cheese, tortilla sticks, iceberg & jalapenos",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/37E535DCAD05AC822533089D63F66880",
                    name: "Francisco Wrap",
                    description: "Our legendary Francisco chicken mixed with mozzarella cheese, iceberg lettuce, pickles, corn and our special Francisco sauce",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/067E82A29056FE36836655E07D2013A1",
                    name: "Soujouk Wrap",
                    description: "Deliciously spiced soujouk, flavoured with tomato, pickles, and mayo on top",
                    price: "34.00",
                  },
                ]
              }
            },
            {
              name: 'Deals',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/65E698D9C29DB481945A05A49B8360AC",
                    name: "Half Wrap Meal",
                    description: "1 Half Warp with Side Fries and Soft Drinks",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EBCC360F4453ADA1DA8A8AC3E8ACF4A7",
                    name: "Full Wrap Meal",
                    description: "Full wrap with side fries and soft drink for 39 AED",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DABCE5883A9FB4D8237DE430C0F5A34F",
                    name: "Pair & Share",
                    description: "Two wraps or Two salads or One Wrap and One Salad with fries and 2 soft drinks",
                    price: "79.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/42F36A2AB36C3514D3FB71A8FB83318B",
                    name: "Gathering Box",
                    description: "Any 3 Wraps and 2 hot appetizers.",
                    price: "150.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DA173218B76BC1DD0582F6A86A485C73",
                    name: "Breakfast Box",
                    description: "2 Labneh Wrap, 2 Zaatar, 2 Jebneh, 2 Lahmeh Bi Ajjine & 2 Wild Zaatar with 2  Vegetable Plates",
                    price: "160.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D86B02FEC56223D2B20EB95454D14FF4",
                    name: "Lunch / Dinner Box",
                    description: "2 Famous Chicken, 2 Mighty Kafta, 2 Turkey & Cheese & 2 Brown Baked Falafel \nwith Golden Wedges & fries",
                    price: "250.00",
                  },
                ]
              }
            },
            {
              name: 'Specialty Wraps',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1FE9062D51999AA3F1C749C38B934BDE",
                    name: "Spizy Chicken",
                    description: "Marinated chicken with bell pepper, rocket leaves, onions, melted cheese and our mild spicy sauce on top",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/19D7169A6A5F0D087E3CFED9FE54F5D6",
                    name: "Mighty Kafta",
                    description: "Kebab mix with cheese, tomatoes and mayo on top. Served as a flatbread or wrapped",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BC5E36010F1ED0F1FB268EF54692CE7D",
                    name: "Famous Chicken",
                    description: "Roasted chicken with melted cheese, lettuce, tomatoes, pickles and aioli sauce on top",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/115E2BD7EC0833B91F963A89792CDD60",
                    name: "Chicken Escalope",
                    description: "Fried chicken escalope with lettuce, tomatoes, pickles and aioli sauce",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/42262BFEAA83A54C3AA562BBEED6A2CA",
                    name: "Bbq Steak",
                    description: "Marinated beef with bell pepper, rocket leaves, onions, melted cheese and bbq sauce (with Mayo base) on top",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/824298BAA6966598F4E2B0A48CF9F43F",
                    name: "Brown Baked Falafel",
                    description: "Delicately spiced falafel mix & baked to perfection. Seasoned with tahini sauce & Topped with tomato, pickled turnip, Fresh Mint & Radish. Garnished with freshly chopped parsley mix, wrapped in multigrain flatbread",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/334A4836028C79A497F5E431046F1E85",
                    name: "Taouk Wrap",
                    description: "Marinated chicken known as Taouk, Roasted to Perfection & Paired with Fries, Pickles & Garlic paste",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6BA0B1017247D12666CD7B59A110AEC3",
                    name: "Classic Beef Shawarma",
                    description: "A taste of Lebanon in every bite! Traditional beef shawarma with biwaz mix, tomato, pickles and our homemade tarator sauce",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C1EB3DBDDCDDE088FC8B463F02ED35EC",
                    name: "Classic Chicken Shawarma",
                    description: "A taste of Lebanon in every bite! Traditional chicken shawarma with pickles, fries, lettuce and authentic garlic paste",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E5611896CCBA8A60E0097A024E3744A6",
                    name: "Classic batata",
                    description: "Crispy cut fries wrapped with coleslaw, pickles, ketchup & garlic mayo sauce",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/52E4FCCB988AF35281DE94C0724A588C",
                    name: "Turkey & Cheese",
                    description: "Melted cheese topped with slices of smoked turkey, pickles, lettuce and tomatoes and mustard mayo",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7579CFA3D0809FD15D843FDE015E246A",
                    name: "Halloumi & Beef Bacon",
                    description: "Halloumi cheese and beef bacon wrapped in oat dough and topped with tomatoes and mayo",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/95D375A1F0EB0EE3F965C24EAB3D075B",
                    name: "Steak N Mushroom",
                    description: "Marinated steak with juicy mushrooms, onion, mozzarella cheese & mayo sauce",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/77B3F8CDDB2E043CB9C2B2B1891398EE",
                    name: "Chicken Caesar Wrap",
                    description: "The perfect combination of grilled chicken, beef bacon, parmesan cheese, rocket leave, lettuce, mayo & our Caesar sauce",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/151E429C13B81411D4396AABE2ECB9DB",
                    name: "Egg n’ Cheese",
                    description: "Scrambled eggs, with melted cheese topped with mayo & wrapped in our freshly crafted potato dough",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/24CE4519FDADF7D768CAD7EA10A6FF9E",
                    name: "Crispy Beef Hotdog",
                    description: "A satisfying combination of beef hotdog, crispy chips, ketchup, mustard & melting cheese mix. Wrapped in our freshly crafted potato dough",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C3D8083AF19465EB3B64B8E4E6E62117",
                    name: "Crispy Chicken Hotdog",
                    description: "A satisfying combination of chicken hotdog, crispy chips, ketchup, mustard & melting cheese mix. Wrapped in our freshly crafted potato dough",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9390253FA60D592CA0B45E958ED9AF59",
                    name: "Super Tuna Wrap",
                    description: "Tune mixed with light mayo sauce with romaine lettuce, sesame seeds and corn. Wrapped in our freshly crafted protein dough",
                    price: "31.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EBE56063F3A6D6FD6E4CA5DE4189DAE6",
                    name: "Chicken Light",
                    description: "Irresistible roasted chicken topped with tomatoes, lettuce, pickles, and light garlic mayo sauce, wrapped in our freshly crafted protein dough",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/12EDEACD55230CC669FCC6561418EEBB",
                    name: "Low-Cal Turkey & Cheese",
                    description: "A classic combination of melted four cheeses topped with slices of smoked deli turkey, pickles, lettuce & tomato seasoned with our light mayo mustard sauce. Wrapped in our freshly crafted protein dough",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4BB516819E9A87338DFE9257C8470046",
                    name: "Hummus Avocado",
                    description: "Our signature hummus on oat flat bread with chili spread & topped with avocado, tomato, olive oil, basil & a mix of grilled eggplant, bell pepper & sesame seeds",
                    price: "27.00",
                  },
                ]
              }
            },
            {
              name: 'Salads',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BA7CE18CBFBE5B99E7AD3698DA38EEA5",
                    name: "Chicken Avocado Salad",
                    description: "A hearty blend of kale, red & white quinoa, grated carrots, black beans, coriander leaves, and pomegranate seeds. Topped with chicken paprika, avocado, and tortilla sticks",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/675E578F905D059B0F757AFD543F4342",
                    name: "Orzo Salad",
                    description: "Savor the Mediterranean flavors! A blend of orzo pasta, arugula, cherry tomato, cucumber, green bell pepper, diced onion, black olives, green thyme, topped with feta cheese. Served with our special orzo dressing",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F36CCA038B6FFF5AD8E1E08494DC7D9A",
                    name: "Zooza Salad (Chicken)",
                    description: "A Bright Mix Of Beans, Boiled Egg, Cherry Tomato, Corn, Black Olives, Grilled Chicken & A Blend Of Lettuce. Best Enjoyed With Mustard Vinegar Dressing",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F8A3EC5DE735F9560230486D21CC2820",
                    name: "Zooza Salad ( Tuna)",
                    description: "A Bright Mix Of Beans, Boiled Egg, Cherry Tomato, Corn, Black Olives, Tuna & A Blend Of Lettuce. Best Enjoyed With Mustard Vinegar Dressing",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BE92D1B7E0169DF73E93253CE43FF7AD",
                    name: "Chicken Salad",
                    description: "Lettuce, rocket leaves, roasted almonds, sun-dried tomato and purslane, topped with grilled chicken. Served with balsamic dressing",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C9846184F453193C1781417F19DE8018",
                    name: "Z Fattoush",
                    description: "Tomatoes, cucumbers, mint, parsley, green onions, green pepper, purslane, lettuce, halloumi cheese and oven baked bread squares. Served with our special vinaigrette dressing",
                    price: "27.00",
                  },
                ]
              }
            },
            {
              name: 'Teasers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/548F7D7A7F8B115864BAA4220E0E3458",
                    name: "Simply Caesar",
                    description: "Romaine lettuce, parmesan cheese, and oven baked croutons. Served with Caesar dressing",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F1D3ECADD678A231A6136EBBFC367FF1",
                    name: "Caesar Deluxe (grilled Chicken)",
                    description: "Simply Caesar with grilled chicken on top. Served with Caesar dressing",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8AA50F975CF8766FD38A0F0C2B30FCEF",
                    name: "Caesar Deluxe (fried Chicken)",
                    description: "Simply Caesar with Fried chicken on top. Served with Caesar dressing",
                    price: "35.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762792132/zaatawr_salad_duwvpe.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-beef'}, {slug: 'no-pork'},
                        {slug: 'no-shellfish'}, {slug: 'no-sweets'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5A36901AB68CBE785B419B377CA58ECA",
                    name: "Halloumi Salad",
                    description: "A Blend Of Lettuce, Rocket Leaves, Baked Halloumi, Roasted Almonds, Sundried Tomato & Purslane. Best Enjoyed With Balsamic Dressing",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5D3F1882AB5269AD30AF7447D2496026",
                    name: "Quinoa Tabbouleh",
                    description: "Quinoa, chopped tomatoes, green onions, parsley, and mint. Served with Tomato Lemon Dressing (small portion)",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1A16A3708CFA1A56BCD90BF200BF5651",
                    name: "Kale & Quinoa Feta",
                    description: "A fresh mix of kale, red quinoa, cranberry, sweet potatoes, almonds, chia seeds, topped with feta cheese. Served with our special lemon balsamic dressing",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/709B65EF79FB94240128B266FE5D77BA",
                    name: "Chicken Pasta Salad",
                    description: "A tasty bowl of fusilli pasta with greens, olives, sundried tomatoes, fresh basil, boiled eggs, and oregano. Topped with grilled chicken & served with honey garlic mustard dressing",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B60479CFF8727CE1E90E2DA854747A7A",
                    name: "Chicken Kale Salad",
                    description: "Kale, flax seeds, dried apricots, green thyme, purslane & grilled chicken. Served with Lemon Balsamic Dressing",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1B3DAC228AFB2BF97E6115746F9555B1",
                    name: "Quinoa & Halloumi Salad",
                    description: "Quinoa, grilled vegetables, black beans, peas, slices of cherry tomatoes, topped with grilled halloumi cubes, chia seeds & pumpkin seeds. Served with Tomato Lemon Dressing  (small portion)",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1A46A4134515ECB8DCA3072652B21605",
                    name: "Seasoned Chicken Salad",
                    description: "A bed of fresh lettuce & rocket leaves with oven roasted carrots & beetroot, cherry tomatoes, fresh green & red bell pepper topped with our signature grilled chicken. Served with our special honey garlic mustard dressing",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AD5DD95E8C63D8EE9158D59FF095B60F",
                    name: "Simply Caesar - Side Salad",
                    description: "Side Portion - Romaine lettuce, parmesan cheese, and oven baked croutons. Served with Caesar dressing",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6684F7D6F06DB75F2C12EEBD27952983",
                    name: "Z Fattoush - Side Salad",
                    description: "Side Portion - Tomatoes, cucumbers, mint, parsley, green onions, green pepper, purslane, lettuce, halloumi cheese and oven baked bread squares. Served with our special vinaigrette dressing",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/693749A9C12B03FCBE88A1BD3A5135E9",
                    name: "Hummus & Crackers",
                    description: "Our Version Of A National Dish. Chickpeas Pureed With Tahini Sauce, Lemon Juice & Spices. Served With Grilled Vegetables, Toasted Multigrain Crackers, Garnished With Tomato, Parsley, Sesame Seeds & Olive Oil",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/012C4CF6380341A8586F9793C9243740",
                    name: "Chicken Breaded",
                    description: "4 pieces of chicken fillet strips breaded with crumbs. Served with honey mustard dip",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8E86049C17868650C2208297DF587D20",
                    name: "Cheese Balls",
                    description: "8 breaded pieces of our unique cheese mix & sprinkle of zaatar served with thousand island dipping sauce",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D1048DFF24B25CB592ADE961E8DECC62",
                    name: "Halloumi Sticks",
                    description: "4 pieces of halloumi cheese sticks breaded with Z crumbs served with thousand island dip on the side",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7DA84A98DA2DE3AD975107811356DB93",
                    name: "Fries & Cheese",
                    description: "Fries topped with melted cheese. Served with sour cream on the side",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6B9D449160CAC021ADBE17D4C10FB7E1",
                    name: "Baked Potato & Cheese",
                    description: "Baked potato slices topped with melted cheese, pine seeds & a pinch of rosemary. Served with sour cream on the side",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/15B586EEA2FE36C7F576DD6B4C59F458",
                    name: "Golden Wedges",
                    description: "Fried potato wedges served with our signatures spicy sauce",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DE2E62E999852CCEA5141EA944716D91",
                    name: "Fries",
                    description: "A basket of french fries",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FA9D49C7CA6176A8B023FB33DEC47BDA",
                    name: "Tater Tots",
                    description: "Delicious potato creations made from premium & fresh potatoes. Perfectly seasoned for your enjoyment. Best enjoyed with Ketchup on the side.",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/11EF5344021B7B4DF927481AB9C4FEC3",
                    name: "Petal Fries",
                    description: "Enjoy our crispy & absolutely delicious petal fries made from premium potatoes. Served with our unique honey mustard dipping sauce.",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/461B89504304063A2D2DFEB3288052F8",
                    name: "Levantine Lentil Soup",
                    description: "A combination of blended yellow lentil with carrots, onion, & garlic. Served with oven baked croutons",
                    price: "18.00",
                  },
                ]
              }
            },
            {
              name: 'Manakeesh',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1E7051F43C7DD079CA2B018BC1CC7F92",
                    name: "Zaatar",
                    description: "Dried thyme mixed with sesame and oil",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/51EBBB688D9A43F13D784304FC1B98F9",
                    name: "Jebneh",
                    description: "The traditional melted cheese mankousheh",
                    price: "18.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762791637/zaatarw_pizza_nt0hhx.mp4',
                    tags: {
                      connect: [
                        {slug: 'breakfast'}, {slug: 'lunch'}, {slug: 'no-beef'}, {slug: 'no-pork'},
                        {slug: 'no-shellfish'}, {slug: 'vegetarian'}, {slug: 'no-sweets'}, {slug: 'no-tree-nuts'},
                        {slug: 'no-peanuts'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CBCC36AD0937E627B2E56FC0F0526621",
                    name: "Halloumi",
                    description: "The famous halloumi cheese",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EACD4F437C03B3E8AB5D7240F0069BE9",
                    name: "Kashkawan",
                    description: "Experience the heavenly taste of melted kashkawan cheese",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/895BF85B3E1821224BA9BCB53F90DF52",
                    name: "Labneh Wrap",
                    description: "Creamy yogurt mixed with tapenade, tomatoes, cucumbers and fresh mint leaves. Wrapped in oat dough",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4E9F45E1248D8324883188D6A455AEF3",
                    name: "Lahmeh Bi Ajine",
                    description: "Minced meat cooked with spices, onions and tomatoes",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/06D42C8FB0CA45D3B0860DDFFB4DD96F",
                    name: "Zaatar & Cheese",
                    description: "Zaatar on one half and cheese on the other",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3F3C68BEE80C31D1E3DF7C2A2602A767",
                    name: "Zaatar & Labneh",
                    description: "The traditional thyme mix with creamy yogurt spread",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/54DA09B50CF8B30AD606AF3054952CC6",
                    name: "Wild Zaatar",
                    description: "Zaatar w Zeit version of Wild thyme and our special onion and tomato sauce on multi-cereal dough",
                    price: "18.00",
                  },
                ]
              }
            },
            {
              name: 'All Day Breakfast',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ED2DA2F41FB3469D4215E02747E9D287",
                    name: "Halloumi Pan",
                    description: "Slices of baked halloumi cheese. Served with freshly baked bread, mint leaves, tomatoes, cucumbers and olives",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AEEF790740FB02FA3330792F7BC017E6",
                    name: "Eggs Your Way",
                    description: "3 eggs cooked your way. Served with freshly baked bread, mint leaves, tomatoes, cucumbers and olives",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6D84D1816C9EDE87F9F8C011064CFDEF",
                    name: "Labneh Plate",
                    description: "Creamy yogurt drizzled with olive oil. Served with freshly baked bread, mint leaves, tomatoes, cucumbers and olives",
                    price: "28.00",
                  },
                ]
              }
            },
            {
              name: 'Homemade Skillets',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AC192E999961BF96975DBC22286CD97F",
                    name: "Creamy Escalope Pasta",
                    description: "A taste sensation you don’t want to miss! Conchiglie pasta served in artichoke sauce, and topped with crunchy breaded chicken, a hint of truffle oil & sprinkled with parsley. Served with parmesan on the side",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B446A062656E10DDEE9B2C2A3153579E",
                    name: "Golden Taouk Skillet",
                    description: "Golden taouk served with fresh mushrooms & fries. Served with Hummus dip, pickles & authentic garlic paste & mini thyme bread on the side",
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/23ED206AF2C2DD0F8499D06BFF4315CC",
                    name: "Potato Chicken",
                    description: "Roasted chicken with baked potatoes & cherry tomatoes marinated in a garlic lemon and coriander sauce. Served with freshly baked bread on the side",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4613501916023E288B549C0336BA75CA",
                    name: "Kafta in the Pan",
                    description: "Deliciously Baked Kafta With Potato Slices, Fresh Tomato & Tomato Sauce. Garnished With Freshly Chopped Parsley Mix. Served With Freshly Baked Bread & Sour Cream On The Side",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BAD24572138546AB9B1182580D39CF01",
                    name: "Chicken Shawarma Skillet",
                    description: "Chicken shawarma mix garnished with parsley mix with petal fries. Served with pickles, authentic garlic paste & mini thyme bread on the side",
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6439F7A69A3289C5209831001F9D7EB6",
                    name: "Beef Shawarma Skillet",
                    description: "Shawarma meat mix with tater tots, served with biwaz, pickles, tarator dip & mini thyme bread on the side",
                    price: "49.00",
                  },
                ]
              }
            },
            {
              name: 'Boom Burgers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B4D6C3411FF46B7A5DB2B27A3FB83582",
                    name: "Angus Boom",
                    description: "An Explosive Creation! Grilled Black Angus Ground Beef Seasoned With Our Special Spice Mix & Topped With Melted Four Cheese, Tomato, Onion, Pickles, Ketchup & Mayo; Wrapped In Our Freshly Baked Bun Topped With Flax Seeds. Served With Side Coleslaw & Fries",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/33D27D2F5F46788FF09DD2171721644E",
                    name: "Chicken Boom",
                    description: "A Boom Of Flavours! Flaming Grilled Chicken Breast Topped With Melted Four Cheese, Tomato, Mushroom, Pickles & Garlic Mayo; Wrapped In Our Freshly Baked Bun Topped With Sesame Seeds. Served With Side Coleslaw & Fries",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/94B85400B99E9B41712B3D14FC35B1B1",
                    name: "Swiss Boom",
                    description: "Grilled black angus ground beef seasoned with our special spice mix, topped with melted swiss cheese & savory mix of grilled onions & mushrooms wrapped in our freshly baked bun. Served with side coleslaw & fries",
                    price: "48.00",
                  },
                ]
              }
            },
            {
              name: 'Pizzas',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/77C406D30332B004632FD05903541281",
                    name: "Meat Craze Pizza",
                    description: "Tomato sauce covered with a tasty mix of beef, onions and bell pepper, smothered in melted four cheese. Topped with beef pepperoni, cherry tomatoes, mushrooms and spring onions",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CFE408D4321FC7EDB5353792BB1EF700",
                    name: "Traditional Pizza",
                    description: "House-made tomato sauce with Mozzarella cheese, Slices of beef & fresh mushroom",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6EEF347622379C32BAA5B960DC81E0B1",
                    name: "Ultimate Cheese Pizza",
                    description: "Tomato sauce on dough smothered in four cheese",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C7F64F157626AAEA768851204CA699F1",
                    name: "Pepperoni Pizza",
                    description: "House-Made Tomato Sauce With Mozzarella Cheese, Topped With Premium Beef Pepperoni & Fresh Mushroom",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1123B8E3D6D4DB13D75F58155BC0391B",
                    name: "Bbq Chicken Pizza",
                    description: "Barbecue sauce, chicken, fresh mushroom, green pepper, cheddar & mozzarella cheese, coriander & olives",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4C7CC92AA42BC0C81DCE0E084F34B0FC",
                    name: "Veggie Pizza",
                    description: "Pesto sauce, zucchini, mozzarella & feta cheese, olives, hot green pepper, cherry tomatoes, rocket leaves & fresh onions",
                    price: "46.00",
                  },
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7751D2042EBA339FB12683E5611D45A6",
                    name: "Chocolate & Banana Wrap",
                    description: "Melted hazelnut milk chocolate spread, topped with slices of banana and hazelnut",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4548600294AC5495669CEA3CC492B329",
                    name: "Pistachio Chocolate Wrap",
                    description: "Our new pistachio dough, filled with nutella spread & creamy pistachio butter mixed with baked osmaliyeh. Drizzled with nutella, & a sprinkle of crushed pistachios",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C717BF477FA13569154A410CFDA74900",
                    name: "Strawberry Chessecake",
                    description: "Our famous cheesecake with a strawberry twist",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/627256A963A50FC347552F465289E573",
                    name: "Strawberry Jello",
                    description: "Wonderful wobbly fruitiness. Less guilt, more indulgence! Not suitable for sharing",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F5833CBE5A2441F19C6CCE278835F1D3",
                    name: "Blueberry Cheesecake",
                    description: "Our famous cheesecake with a blueberry twist. Less guilt, more indulgence! Not suitable for sharing",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/013DF214EC19544C8182616A43CB029C",
                    name: "Chocolate Mousse Cake",
                    description: "A delicious mix of chocolate cake & chocolate mousse. Less guilt, more indulgence! Not suitable for sharing",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E3E678328D5466187B293E6D0EF54A6C",
                    name: "Ktiramissu",
                    description: "Our heavenly version of the famous tiramisu dessert",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/23676EBCEBDC3EFFA98D02E293E34C5A",
                    name: "Oreo Cheesecake",
                    description: "A cup of delicious flavors! Our famous creamy cheesecake mixed & topped with Oreo cookies.",
                    price: "13.00",
                  },
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E5B0DFB25ABF9C245BA687BC72C2DD3B",
                    name: "Sunset Lemonade",
                    description: "Strawberry and Lemonade Supports healthy immune function, vision and skin and is an excellent source of hydration",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9F62201A241FCC00C6E70EE1C27C5DCB",
                    name: "Citrus Power",
                    description: "Orange, Lemon, Ginger, and Turmeric Improves skin health and acts as a natural anti-aging supplement while reducing blood sugar levels",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1A9B20DC6317BC8C3AC24AD0AEAA55A6",
                    name: "Orange Juice (330 Ml)",
                    description: "Cold-pressed Orange Juice",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1CA7818E49A83F681C1A3283A6F37CE2",
                    name: "Carrot Juice (330 Ml)",
                    description: "Cold-pressed carrot juice",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7A404432C875A478C8C625468B878FF0",
                    name: "Apple Juice (330 Ml)",
                    description: "Cold-pressed Apple Juice",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8D16DFDAD25B0A7D0FA577A6B7C14BD5",
                    name: "Lemonade (330 Ml)",
                    description: "Cold-pressed Lemonade",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CEF9071D4B4578B5468C79747DB643BA",
                    name: "Fresh Yoghurt (330 Ml)",
                    description: "Home-made Yogurt drink",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/42E4DFB377352B168B27863565F6D6C7",
                    name: "Evian Water",
                    description: "500 ml",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AC395A7B6A85AB9509B5416A73131E84",
                    name: "Rim Water",
                    description: "500 ml",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/01BDA77C415803D6BED8343CEF323F02",
                    name: "Sparkling Water",
                    description: "330 ml",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6091185EE12219F2C03F57F63F217DB9",
                    name: "Lipton Ice Tea Peach (330 Ml)",
                    description: "Can 330 ml",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5EA49EEAD1C5E7FECD8A90E7179A2930",
                    name: "Lipton Ice Tea Lemon (330 Ml)",
                    description: "Can 330 ml",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/93E0E6EBA58013AAA4AD4DFF35070342",
                    name: "Sugar Free Ice Tea Lemon",
                    description: "Can 320 ml",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0C57FE3E4BDE1A0382B8D9FE8DCC9AD9",
                    name: "Sugar Free Ice Tea Peach",
                    description: "Can 320 ml",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/499D3AFA6CE510627B9CC276A4F795F4",
                    name: "Pepsi",
                    description: "Can 300 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B45816295FB0D28CD533002C2D9E5687",
                    name: "Diet Pepsi",
                    description: "Can 300 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/907A32B1282ECD99B244476EACDA7109",
                    name: "7 UP",
                    description: "Can 300 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5ADC52A81525240E88F6D2A811DAAFE3",
                    name: "Diet 7up",
                    description: "Can 300 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/58AB555498F1AD35A113A780A67FB6C6",
                    name: "Mountain Dew",
                    description: "Can 300 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AB27C5623E610AF8595566F5BEE36808",
                    name: "Mirinda",
                    description: "Can 300 ml",
                    price: "9.00",
                  },
                ]
              }
            },
            {
              name: 'Mini Z',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4F64C20531CAC85599BE0CFA76B2538B",
                    name: "Kids Pizza",
                    description: "Tomato sauce on dough, smothered with four cheese  served with fries and Drink",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4646EBF8835126648806E93411C65E68",
                    name: "Kids Breaded Chicken",
                    description: "3 pieces of breaded chicken fillet strips served with honey mustard  served with fries and Drink",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2869B4E829D1E0778FA32D337D51DAD6",
                    name: "Kids Chicken Wrap",
                    description: "Marinated chicken with melted cheese, lettuce, tomatoes, mayo served with fries and Drink",
                    price: "27.00",
                  },
                ]
              }
            },
            {
              name: 'Add On\'s',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AF23C4E44B31E989E3010D8D5E6946A0",
                    name: "Garlic Mayo Dip",
                    description: null,
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7FCD5DD338C19536FFDD05DC1765C357",
                    name: "Honey Mustard Dip",
                    description: null,
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F8065EFAC23773520853AEBFF60AA1E2",
                    name: "Mayo Dip",
                    description: null,
                    price: "2.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/851F9F8357AFF9B22FC35B5591D1FBCC",
                    name: "Mustard Dip",
                    description: null,
                    price: "2.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/560DDFC69EAE8F3F78D7044D72D8E42A",
                    name: "Sour Cream Dip",
                    description: null,
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6151B3D49146D02D9C39C3BA09754ADA",
                    name: "Spizy Sauce Dip",
                    description: null,
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C0BF83D7A4AC751B7F658857D7289498",
                    name: "Thousand Island Dip",
                    description: null,
                    price: "3.00",
                  },
                ]
              }
            },
          ]
        }
      }
    }
  },
  {
    name: 'Common Grounds',
    country: 'UAE',
    city: 'Dubai',
    address: 'Common Grounds Mall of Level 2',
    latitude: 25.1191192,
    longitude: 55.2028445,
    placeId: 'ChIJgRgTOb9rXz4RSGLPQ7vmrhc',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'All Day Breakfast',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ACAI_EDITED_2638346291114973395.jpg",
                    name: "Açaí Bowl",
                    description: "Açaí blend, house-made granola, exotic fruits, coconut , plant based, seasame and nuts",
                    price: "64.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHIA_PUDDING__2638519013170154189.jpg",
                    name: "Chia Pudding",
                    description: "Coconut soaked chia seeds, mixed berries, strawberry granita and plant based",
                    price: "64.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FRENCH_TOAST638346271471908219.jpg",
                    name: "Our Signature French Toast D/G/V/E",
                    description: "Poached plum, salted caramel, crème anglaise, dairy, gluten, vegetarian and eggs",
                    price: "60.00"
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BLUEBERRY_HOTCAKES638346267539673643.jpg",
                    name: "Blueberry And Ricotta Hotcakes",
                    description: "Maple syrup, blueberry, whipped mascarpone, caramelized banana, dairy, vegetarian and eggs",
                    price: "68.00"
                  },
                ]
              }
            },
            {
              name: 'Milkshakes',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Salted Caramel Milkshake",
                    description: "creamy milkshake that is made with ice cream, milk, salted caramel sauce, and whipped cream.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FqYtQX9EnyMobiG_638430681972998703",
                    name: "Banana Milkshake",
                    description: "Made with ripe bananas and creamy milk",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DoccSaSs7doXdKF_638430647818854794",
                    name: "Strawberry Milkshake",
                    description: "Made with strawberries and creamy vanilla ice cream",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/RYHoFQpwCCdc2dF_638430647494860261",
                    name: "Chocolate Milkshake",
                    description: "Made with fresh milk, smooth chocolate for a creamy taste",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'Juices',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9xoxgnWnyt5awqa_638430647628226412",
                    name: "Fresh Orange Juice",
                    description: "Made with freshly squeezed oranges, great source of vitamin c",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/gwT75DcCWcEGD5s_638430683476995609",
                    name: "Fresh Apple Juice",
                    description: "Made with a blend of juicy apples",
                    price: "32.00",
                  },
                ]
              }
            },
            {
              name: 'Kombucha',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Ginger Kombucha",
                    description: null,
                    price: "34.00",
                  },
                ]
              }
            },
            {
              name: 'H20',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Still Large",
                    description: null,
                    price: "26.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Still Small",
                    description: null,
                    price: "20.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Sparkling Large",
                    description: null,
                    price: "28.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Sparkling Small",
                    description: null,
                    price: "22.00",
                  },
                ]
              }
            },
            {
              name: 'Fentimans Botanically Brewed Beverages',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Curiosity Cola",
                    description: "Soft Drink",
                    price: "32.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Rose Lemonade",
                    description: "A refreshing and fruity smoothie with tropical flavors.",
                    price: "32.00",
                  },
                ]
              }
            },
            {
              name: 'House-made Sodas',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Raspberry Soda",
                    description: null,
                    price: "34.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Passion Fruit Soda",
                    description: "Soda with passion fruit flavor",
                    price: "34.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Cucumber Mojito Soda",
                    description: null,
                    price: "34.00",
                  },
                ]
              }
            },
            {
              name: 'Lunch and dinner starters',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SOUP638519012891413483.jpg",
                    name: "Soup",
                    description: "Gluten, plant based, onion and garlic served with toasted sourdough",
                    price: '45.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHUNKY_AVO_FRIES__2638519012906561351.jpg",
                    name: "Chunky Avocado Fries",
                    description: "Gluten, plant based, onion and garlic, spicy red mojo sauce and black lime salt",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SIDE__SMASHED_AVOCADO638350411104147343.jpg",
                    name: "Freshly Smashed Avocado Dip",
                    description: "Plant based, onion and garlic, tortilla chips, tomatillo and mint salsa",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/VIETNAMESE_WRAPS__2638519013255216627.jpg",
                    name: "Vietnamese Rice Wraps",
                    description: "Plant based, onion and garlic, sesame, crisp raw vegetables, glass noodles, fresh herbs, sprouts, seaweed, black sesame dipping sauce",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHUNKY_CAULIFLOWER__2638519013122163480.jpg",
                    name: "Crunchy Cauliflower",
                    description: "Dairy, gluten, plant based, onion and garlic, mustard, nuts, eggs, cashew nut, ranch sauce, crispy sage, garlic chips, spiced almonds and barbecue sauce",
                    price: "46.00",
                  },
                ]
              }
            },
            {
              name: 'Lunch And Dinner Signature wraps',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHICKEN_+_AVO_WRAP638346268605826845.jpg",
                    name: "Chicken and Avocado Wrap",
                    description: "Dairy, gluten, plant based optional, onion and garlic, sesame,  nuts, Persian feta, avocado, spinach, red onion, grilled vegetables, sun-dried tomato beetroot hummus and macadamia pesto. Freshly made. Served with sea salt crisps",
                    price: "64.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763640809/Fresh_Vibrant_Delicious._Pick_from_our_signature_built_wraps_salads_to_go_or_build_your_own_p44g95.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'no-sweets'}, {slug: 'no-pork'}, {slug: 'gluten-free'}, {slug: 'lactose-free'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MEXICAN_WRAP_1638519012895161643.jpg",
                    name: "Mexican Wrap",
                    description: "Dairy, gluten, plant based optional onion and garlic, wild rice, corn, avocado, fresh greens, red onion, black beans, coriander, jalapeño, persian feta, toasted sunflower seeds and Mexican dressing. Freshly made. Served with sea salt crisps",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/KALE_CAESAR_WRAP638519013226658136.jpg",
                    name: "Kale Caesar Wrap",
                    description: "Dairy, gluten, onion and garlic, soy, mustard, seafood, lemon and thyme chicken, shredded kale, fresh greens, avocado, red onion, beef bacon, parmesan, boiled egg and caesar dressing. Freshly made. Served with sea salt crisps",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/HOISIN_DUCK_WRAP638519012930549463.jpg",
                    name: "Hoisin Duck Wrap",
                    description: "Gluten, plant based optional, onion and garlic, soy, sesame, Vietnamese slaw, charred corn, mango, spinach, wild rice, Chinese five spices, yuzu oil and chilli. Freshly made. Served with sea salt crisps",
                    price: "62.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/TANDOORI_CHICKEN_WRAP638519013022992570.jpg",
                    name: "Tandoori Chicken Wrap",
                    description: "Dairy, gluten, plant based optional, onion and garlic, fresh greens, spiced chickpeas, mango, mixed greens, red cabbage, coconut yoghurt raita and tomato. Freshly made. Served with sea salt crisps",
                    price: "64.00",
                  },
                ]
              }
            },
            {
              name: 'Lunch And Dinner Sides',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FRENCH_FRIES638519012637806977.jpg",
                    name: "French Fries",
                    description: "Gluten, plant base onion and garlic, mustard, and eggs.",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SWEET_POTATO_FRIES638519012784716104.jpg",
                    name: "Sweet Potato Fries",
                    description: "Gluten, onion and garlic, mustard and eggs",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/GARDEN_SALAD638519012916147992.jpg",
                    name: "Garden Salad",
                    description: "Gluten, plant based, mustad, nuts, with toasted sunflower seeds, croutons, macadamia pesto and apple cider vinaigrette",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SIDE__AVOCADO638350411069962767.jpg",
                    name: "Baked Avocado",
                    description: "Plant based, onion and garlic, sesame with beetroot hummus, black sesame and olive oil",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SAUTEED_GREEN_BEANS__2638519012701501613.jpg",
                    name: "Sautéed Green Beans",
                    description: "Dairy products, vegetarian, mustard with labneh and toasted hazelnut",
                    price: "27.00",
                  },
                ]
              }
            },
            {
              name: 'Lunch And Dinner Salads and bowls',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ROASTED_CHICKEN_SALAD638519013244835498.jpg",
                    name: "Roast Chicken Salad",
                    description: "Dairy, gluten, plant based optional, onion and garlic, mustard, nuts, fresh greens, spinach, cucumber, cherry tomato, avocado, Persian feta, corn, basil, sourdough croutons, herbs, green beans, macadamia pesto, toasted sunflower seeds and apple cider vinaigrette",
                    price: "72.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SATAY_BEEF_BOWL638519013188186649.jpg",
                    name: "Satay Beef Bowl",
                    description: "Plant based optional, onion and garlic, soy, nuts,  spicy satay sauce, glass noodles, carrot, cucumber, radish, edamame, toasted peanuts, fresh greens, cherry tomatoes, coriander, kaffir lime, citrus and ginger dressing",
                    price: "71.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763640428/Satay_Beef_Bowl_With_spicy_satay_sauce_glass_noodles_carrot_cucumber_radish_edamame_toas_yfbsl3.mp4',
                    tags: {
                      connect: [
                        {slug: 'thai'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'no-sweets'}, {slug: 'medium'}, {slug: 'lactose-free'}, {slug: 'spicy'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CHIPOTLE_CHICKEN_SALAD638519013160928583.jpg",
                    name: "Chipotle Chicken Salad",
                    description: "Dairy, plant based optional, onion and garlic , nuts, grilled corn, avocado, fresh greens, red onions, black beans, coriander, jalapeño, Persian feta, toasted sunflower seeds and Mexican dressing",
                    price: "71.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/SS_TUNA_BOWL__2638346282733720779.jpg",
                    name: "Sesame Seared Tuna Bowl",
                    description: "Onion and garlic, soy, sesame, mustard, seafood, sesame crusted seared tuna, fresh greens, wild rice, marinated kale, avocado, mango, kimchi, spring onion, pickled ginger, wakame, beetroot, zucchini, tofu, yuzu shoyu",
                    price: "78.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762854541/salad_bowl_oqq56x.mp4',
                    tags: {
                      connect: [
                        {slug: 'japanese'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-beef'},
                        {slug: 'no-sweets'}, {slug: 'medium'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AVO_CAESAR_SALAD638519013195157440.jpg",
                    name: "Avocado Caesar Salad",
                    description: "Dairy, gluten, onion and garlic, soy, mustard, eggs, seafood, lemon and thyme chicken, avocado, fresh greens, beef bacon, shredded kale, quinoa, red onion, cherry tomato, parmesan, sourdough croutons, boiled egg and caesar dressing",
                    price: "72.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AUTUMN_HARVEST_BOWL638519013213490432.jpg",
                    name: "Autumn Harvest Bowl",
                    description: "Dairy, onion and garlic, plant based optional, sesame, nuts, baked sweet potato, fresh greens, shredded kale, avocado, beetroot hummus, cucumber, parmesan, green beans, toasted cashews, wild rice, broccoli, red onion, roasted sunflower seeds, maple and balsamic dressing",
                    price: "69.00",
                  },
                ]
              }
            },
            {
              name: 'Lunch And Dinner Mains',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/PALM_HEART_TACOS_638346273531656048.jpg",
                    name: "Crispy Palm Heart and Lentil Tacos",
                    description: "Gluten, plant based, onion and garlic, mustard, tempura palm heart, house-made lentil tacos, avocado, pickled mango salsa, green papaya slaw, jalapeño, spicy red mojo sauce and pickled habanero",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/TULUM_PRAWN_TACOS638519012801110833.jpg",
                    name: "Tulum Prawn Tacos",
                    description: "Dairy, gluten, onion and garlic, seafood, grilled prawns, spicy red mojo sauce, jalapeño, Persian feta, mango slaw, fresh herbs and flour tortilla",
                    price: "78.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ZPG_LINGUINE__2638346284078359003.jpg",
                    name: "Zucchini, Pea and Green Chilli Linguine",
                    description: "Dairy, onion and garlic, plant based, plant based optional, nuts, preserved lemon, rocket leaves, mint, parsley, capers, toasted pine nuts, parmesan and olive oil",
                    price: "72.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MOROCCAN_SEARED_SALMON638519013163455518.jpg",
                    name: "Moroccan Seared Salmon",
                    description: "Dairy, onion and garlic, sesame, nuts, seafood, wild rice, charred leeks, green beans, labneh, lemon zest, toasted hazelnuts, almond dukkah, fresh herbs and chilli oil",
                    price: "94.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/KATSU_CHICKEN_BOWL638519013017675942.jpg",
                    name: "Katsu Chicken Bowl",
                    description: "Gluten, onion and garlic, soy, sesame, mustard, eggs, seafood, coconut rice, cucumber kimchi, pickled carrot, tonkatsu sauce, Japanese mayo, coriander and toasted seaweed",
                    price: "79.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/NH_JERK_CHICKEN638346273288818850.jpg",
                    name: "Notting Hill Jerk Chicken",
                    description: "Gluten, onion and garlic, soy, coconut rice, pickled capsicum, mango, mint, jalapeño, spring onion, lime, mango chutney and plantain chips",
                    price: "84.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AVO_BURGER638519012999802719.jpg",
                    name: "Avocado Burger",
                    description: "Gluten, onion and garlic, plant based, sesame, mustard, crumbed avocado and chickpea patty, beetroot hummus, pickled onion, vegan mayo, vegan potato bun, lettuce and choice of sweet potato fries or green salad option to replace bun with lettuce wrap",
                    price: "64.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/MEKONG_CHICKEN_BURGER638519012840018433.jpg",
                    name: "Mekong Chicken Burger",
                    description: "Dairy, gluten, onion garlic, soy, sesame, nuts, eggs, crispy panko chicken, chilli and lime aioli, satay sauce, kewpie mayo, Vietnamese slaw and sweet potato fries",
                    price: "74.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Tom and Serg Burger",
                    description: "Dairy, gluten, eggs, soy, mustard, aioli, potato bun, sliced tomato, pickles, onion, our sauce, Boston lettuce and American cheese served with a side of french fries",
                    price: '62.00',
                  },
                ]
              }
            },
            {
              name: 'Detox Juice',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Reboot",
                    description: "Beetroot, pomegranate, watermelon and strawberry",
                    price: "36.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Immunity",
                    description: "Carrot, orange, pineapple, lemon, turmeric and ginger",
                    price: "36.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Clean Green",
                    description: "Kale, cucumber, celery, apple, lemon and ginger",
                    price: "36.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Black Lemonade",
                    description: "Activated charcoal, organic lemon and agave",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'Soul Fuel Smoothies',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Surry Hills Smoothie",
                    description: "Plant based. Apple, kale, kiwi, avocado, passion fruit, pear and spirulina. reduces blood pressure",
                    price: "40.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Bells Beach Smoothie",
                    description: "Plant based. Mango, banana, pineapple, orange, date, macadamia, coconut milk and chia. reduces blood pressure",
                    price: "40.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "BONDI Smoothie",
                    description: "Vegetarian and nuts. Acai, strawberry, blueberry, banana, honey and almond milk. reduces blood pressure",
                    price: "40.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Double Bay Smoothie",
                    description: "Dairy, vegetarian, soy and nuts. Banana, vanilla protein, honey, almond milk, sea salt, cinnamon and greek yoghurt. reduces blood pressure",
                    price: "40.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Flinders Lane Smoothie",
                    description: "Plant based, soy and nuts. 70 % dark chocolate, almond milk, cacao nib, date, encounter espresso, banana, vanilla and peanut butter. reduces blood pressure",
                    price: "40.00",
                  },
                ]
              }
            },
            {
              name: 'Cold Drinks',
              items: {
                create: [
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Drinking Coconut",
                    description: null,
                    price: "32.00",
                  },
                ]
              }
            },
          ]
        }
      }
    }
  },
  {
    name: 'Malay Al tawak', // https://www.talabat.com/uae/restaurant/44678/malak-al-tawouk?aid=1176
    country: 'UAE',
    city: 'Dubai',
    address: 'Malay Al tawak Hessa St - Al Barsha',
    latitude: 25.0935306,
    longitude: 55.1853741,
    placeId: 'ChIJ8wtbooBrXz4RSBfRCkXxJBk',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Offers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/05487CBEA8964A0A4701EDACADC91D77",
                    name: "Tawouk large",
                    description: "Marinated chicken breast, garlic, coleslaw, fries, pickles and ketchup",
                    price: "28.00",
                    discount: 30
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A2D4E7C2A0EB50946FA43600116FE2F4",
                    name: "Mexican Salad",
                    description: "Grilled chicken breast,avocado,cheese, red beans,cherry tomato,icerberg lettuce,shredded carrot,corn, tortilla chips served with  mexican dressing",
                    price: "32.00",
                    discount: 30
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0DFFE77523AD81D9578FED0A5C2C5238",
                    name: "Lebanese burger",
                    description: "Grilled beef patty, tomato, grilled onions, coleslaw, fries and ketchup",
                    price: "29.00",
                    discount: 30
                  },
                ]
              }
            },
            {
              name: 'Healthy options',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E9DEDB4F41CE4EE75E5EACF72D38582A",
                    name: "Build Your Own",
                    description: "Build your own salad or bowl from your choice of ingredients",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/02F18397BEAFBA4D6F56F02CB5F2D597",
                    name: "Grilled Chicken Platter",
                    description: "*603 Kcal* Two Grilled Chicken breast, grilled potatoes, side salad",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9206FF0972BE5DA4EF50F33ECC378C5F",
                    name: "Mexican Bowl",
                    description: "*740 Kcal* Grilled chicken breast, steamed rice, avocado, cherry tomatoes, red beans, iceberg lettuce, and corn. Served with Mexican dressing",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A7CE129A877260253DCABA3B344E3189",
                    name: "Chicken Teriyaki Bowl",
                    description: "*522 Kcal* Grilled chicken breast, steamed rice, iceberg lettuce, cucumber, shredded red cabbage, onion, coriander and roasted sesame seeds. Served with teriyaki sauce",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/45607E5D71B56008BAB4E518F21884B6",
                    name: "Greek Chicken Bowl",
                    description: "*617 Kcal* Grilled chicken breast, steamed rice, iceberg lettuce, cucumber, cherry tomatoes, onions, olives and green capsicum. Topped with creamy Greek goat cheese and served with tzatziki dressing",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5DF52716BBFA87F25D8A9C050A54504E",
                    name: "Asian Chicken Salad",
                    description: "*483 Kcal* Grilled chicken breast, avocado, shredded red cabbage, romaine lettuce, coriander, shredded carrots, roasted sesame seed and crispy tortilla chips. Served with peanut honey vinaigrette dressing.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6348FB6F1E3112836338368345385C42",
                    name: "Quinoa Chicken Salad",
                    description: "*634 Kcal* Grilled chicken breast, quinoa, avocado, beetroot, rocca leaves, iceberg lettuce and seasoned roasted chickpeas. Served with balsamic dressing.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0D605C076B8547F987CCBE72EF7A4525",
                    name: "Mexican salad.",
                    description: "*667 Kcal* Grilled chicken breast,avocado,cheese, red beans,cherry tomato,icerberg lettuce,shredded carrot,corn, tortilla chips served with  mexican dressing",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5484EE493970F65DA9B33DFB359E764E",
                    name: "High Protein Salad",
                    description: "*572 Kcal* Grilled chicken breast, shredded Emmental cheese, smoked turkey, boiled egg, iceberg lettuce, corn and cherry tomatoes. Served with mayo-mustard dressing.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8FE583E294B87A57F4A1D8A629956277",
                    name: "Chicken Avocado salad",
                    description: "*467 Kcal* Grilled chicken breast,avocado,green mix ,cherry tomato served with balsamic dressing",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5BBDA5AF156F678367F07933D181E98E",
                    name: "Chicken Caesar Salad",
                    description: "*563 Kcal* Grilled chicken breast, parmesan cheese,croutons, romaine lettuce served with caesar dressing.",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2764503799DB774E002EEC357F67734B",
                    name: "Caesar salad",
                    description: "*392 Kcal* Romaine lettuce ,parmesan cheese,croutons served with  ceaser dressing",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7FE3FE6F02AF50C04C321D5E402D6DFF",
                    name: "Tabbouleh",
                    description: "*278 Kcal* Parsley, chopped tomatoes, onions, and mint. Served with Oil & Lemon Dressing.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D94CA1F3CE19878C6C30C6D57FDEAD73",
                    name: "Fattouch",
                    description: "*408 Kcal* Lettuce, Tomatoes, cucumbers, mint, radish, green pepper, Rocca, purslane, with vinaigrette dressing.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/583ACEA6E4740B5BCE2E3DC620AB84C5",
                    name: "Light Tawouk sandwich (28cm)",
                    description: "Charcoal griled tawouk, hummus, rocca leaves ,pickles served in brown bread",
                    price: "22.00",
                  },
                ]
              }
            },
            {
              name: 'Platters',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/89457B0ED38A74B944400CD2F9DF3BB0",
                    name: "*NEW* HALF portion grilled Tawouk platter meal",
                    description: "HALF portion grilled Tawouk platter meal",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F1DA2722AA3937CEF486B4D9142416EA",
                    name: "*NEW* HALF portion grilled chicken platter meal",
                    description: "HALF portion grilled chicken platter meal",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/95F6EBADFF71BBEA3AEBF50A24371798",
                    name: "Grilled Tawouk Meal",
                    description: "Grilled Tawouk Platter with your choice of side, dip & side salad. Served with Bread",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6A5141C2E0AA519898785C52470ACC0C",
                    name: "Grilled Chicken Platter",
                    description: "Two Grilled Chicken breast, grilled potatoes, side salad",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0E594C7C1C52CD6A3AB66D3601D591A6",
                    name: "Chicken Escalope Platter",
                    description: "Two crispy Chicken breast, French Fries, side Coleslaw and choice of dip",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2EC5FF7C2B9E6C93CABF37D3A8990E90",
                    name: "4 Tawouk skewers platter",
                    description: "4 tawouk skewers charcoal grilled  served with your choice of salad, French fries, hummus, garlic, pickles, and bread",
                    price: "70.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/92425DFC9A72C3692AAFF522FAEE3B9D",
                    name: "8 Tawouk skewers platter",
                    description: "8 tawouk skewers charcoal grilled   served with your choice of TWO salads, TWO French fries ONE Large Hummus, garlic , pickles, and bread",
                    price: "125.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B949BD7E1BB7C4BD9AA85399D006DE8A",
                    name: "Grilled Tawouk Platter",
                    description: "Charcoal grilled or regular Tawouk, fries, pickles, garlic",
                    price: "41.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6C9ACB5E009D456E0284D9F92D3BDC16",
                    name: "Chicken Shawarma platter",
                    description: "Grilled  chicken shawarma  platter  served  with garlic paste , pickles and  french fries",
                    price: "30.00",
                  },
                ]
              }
            },
            {
              name: 'Sandwiches',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/033BECA5FF2A6384EB0583F521C14103",
                    name: "2 chicken shawarma sandwiches offer",
                    description: "2 chicken shawarma sandwiches offer",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/623199A8DDAB2CD1E8550F8CFCEFF694",
                    name: "Tawouk Sandwich",
                    description: "Marinated chicken breast, garlic, coleslaw, fries, pickles and ketchup",
                    price: '28.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B8D02D87C584A20F73AD8C9648085AC0",
                    name: "Cheese Tawouk Sandwich",
                    description: "Marinated chicken breast, cheese, garlic, coleslaw, fries, pickles and ketchup",
                    price: '31.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/38D995A777FFA485744550175C65D70E",
                    name: "Special Tawouk Sandwich",
                    description: "Marinated chicken breast, cheese, turkey, garlic, coleslaw, fries, pickles and ketchup",
                    price: '34.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DA36DFCC64BDBCE53C7C915E276D93CC",
                    name: "Charcoal grilled tawouk (28cm)",
                    description: "Charcoal grilled Tawouk, fries, pickles, garlic",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6B531829A43F6960AA750460156FE0B8",
                    name: "Light Tawouk sandwich (28cm)",
                    description: "Charcoal griled tawouk, hummus, rocca leaves ,pickles served in brown bread",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2D3F9482630C5C230E795BF42411605A",
                    name: "Chicken Shawarma sandwich",
                    description: "Grilled chicken shawarma, garlic paste , pickles and  french fries",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8B31AD9DEC7446F7365FD74CCB33CED1",
                    name: "Hummus Sandwich",
                    description: "Hummus, pickles, fries , mint and tomato",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/767983CCFCFFE09B73A99D09F2FD907E",
                    name: "Fries sandwich",
                    description: "Fries, coleslaw, garlic, pickles and ketchup",
                    price: '16.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B627D6878DF5D66ECFA8477F7338BA07",
                    name: "Soujouk (Arabic Bread 28 cm)",
                    description: "Soujouk (spicy sausages), tomato, pickles, french fries and mayo in Arabic Bread",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5EADC8C9496479D316371D28A8D3B3C7",
                    name: "Chicken Liver (Arabic Bread 28 cm)",
                    description: "Chicken liver, tomato, pickles,  french fries, mint and garlic in Arabic Bread",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CA18BA5462B61ACFCAD947A46A93A543",
                    name: "Chicken Escalope Sandwich (28 cm)",
                    description: "Crispy chicken fillet with garlic, ketchup, coleslaw, pickles and French fries",
                    price: "23.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473787/malakaltawoukuae3_zjiyzn.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-beef'},
                        {slug: 'no-shellfish'}, {slug: 'no-sweets'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9FAFF384184792D21129BAF9469D9848",
                    name: "Mexican chicken sandwich",
                    description: "Marinated chicken breast, Mixed pepper, Onion, Lettuce, Tomatoes, Mayo, Cheese, and Mexican Sauce",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/00386CEF392A5DC2DBE99189CF429672",
                    name: "Francisco",
                    description: "Marinated chicken breast, Cheese, Lettuce, Corn, Soya Sauce & Mayo",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9F903757D99CE5A8BB23B183C4E1C749",
                    name: "Classic Tawouk (Baguette)",
                    description: "Marinated chicken breast, garlic and pickles",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D330DAC6B93E471FE682F254CAD46FC4",
                    name: "Soujouk (Baguette)",
                    description: "Soujouk (spicy sausages), tomato, pickles and mayo",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9F27FA47888082E7B1F7616707E34686",
                    name: "Chicken Liver (Baguette)",
                    description: "Chicken liver, tomato, pickles, mint and garlic",
                    price: "21.00",
                  },
                ]
              }
            },
            {
              name: 'Burgers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4BF6E00A5F9B3F1D723571AC49307DCC",
                    name: "Escalope Chicken Burger",
                    description: "Crispy chicken fillet with garlic aioli, ketchup, coleslaw, pickles and French fries.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/33117880EAF02589CDF1968813B1BA3F",
                    name: "Cheese Burger",
                    description: "Grilled beef burger patty, cheddar cheese, mayo, tomato, onions, lettuce, dill pickles and ketchup",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DEC5B204B298FCA672D727DC0F53533A",
                    name: "Crispy Chicken Burger",
                    description: "Breaded chicken breast, garlic mayo, cheddar cheese, tomato, lettuce and pickles",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/044C5599F7C4A378A3B3ED8207771BBD",
                    name: "Lebanese Burger Special",
                    description: "Grilled beef burger patty, cheese, turkey, tomato, grilled onions, coleslaw, fries and ketchup",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BAE6BF393466E84322F0B49D058F32A7",
                    name: "Lebanese Burger.",
                    description: "Grilled beef patty, tomato, grilled onions, coleslaw, fries and ketchup",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/18FFA00BB8584A3AC8F35F7EF0DFCC81",
                    name: "Chicken Burger",
                    description: "Grilled chicken breast, garlic mayo, tomato, lettuce, fries and pickles",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/262BB1AD4A1AEBC3719E97BEE65F3E00",
                    name: "Slider Box (3pcs)",
                    description: "Your Choice of 3 Sliders",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6D762650EE85240336B9EA9DA16A805A",
                    name: "Slider Box (6pieces)",
                    description: "Your Choice of 6 Sliders",
                    price: "74.00",
                  },
                ]
              }
            },
            {
              name: 'Shawarma',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9CA1355163D84C8A2F10AEDA1AFEDA70",
                    name: "Chicken Shawarma combo",
                    description: "Two grilled chicken shawarma served with side fries and soft drink",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/21F6B66EA6C07E55D4F2F6880E080261",
                    name: "Chicken Shawarma sandwich",
                    description: "Grilled chicken shawarma, garlic paste , pickles and  french fries",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FB45A3A71DC46D28DE3F15057BF18C6D",
                    name: "Chicken Shawarma combo for TWO",
                    description: "FOUR  grilled chicken shawarma served with TWO  side fries and TWO soft drinks",
                    price: "58.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/87DE2BF07E983A39DF9E5D7993839CDF",
                    name: "Chicken Shawarma platter",
                    description: "Grilled  chicken shawarma  platter  served  with garlic paste , pickles and  french fries",
                    price: "30.00",
                  },
                ]
              }
            },
            {
              name: 'Vegan',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3F9303DA5992B92615A7B8F8BD2F91AA",
                    name: "Switch™ Shawarma Sandwiches Combo",
                    description: "Two Sandwiches of Switch™ plant-based chicken shawarma  with one side french fries & your choice of one cold beverage",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C1CFD08C81948B118875ACC79A776B7C",
                    name: "Switch™ Shawarma Sandwich",
                    description: "Switch™ plant-based chicken shawarma sandwich, garlic paste, pickles & French fries",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4749BDE0C5253E6710AD7954679DA6DB",
                    name: "Switch™ Mexican Salad",
                    description: "Grilled Switch™ plant-based chicken chunks, avocado, red beans, cherry tomato,  iceberg lettuce, shredded carrot, corn, tortilla chips served with Mexican dressing",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/05CA07D8B9C387C009659235C07D73CA",
                    name: "Switch™ Teriyaki Bowl",
                    description: "Grilled Switch™  plant-based chicken chunks, steamed rice, iceberg lettuce, cucumber, shredded red cabbage, onion, coriander and roasted sesame, served with teriyaki sauce",
                    price: "34.00",
                  },
                ]
              }
            },
            {
              name: 'Kids Meal',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2137D995208CCC13AE115151BE0E8F7E",
                    name: "Mini Beef Burger",
                    description: "Grilled beef burger patty and ketchup (served with fries and juice)",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/34CC149AE850D791B893590FAAC37138",
                    name: "Mini Chicken Burger",
                    description: "Grilled chicken breast and mayo (served with fries and juice)",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/52FFACAD925993C718CCA1079C1CF679",
                    name: "Mini Tawouk Sandwich",
                    description: "Marinated chicken breast, garlic, coleslaw, fries and ketchup (served with fries and juice )",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DC8DFCFF50CC64E0EBAAC1BFEACC5199",
                    name: "Breaded Chicken Meal",
                    description: "Breaded chicken (served with fries and juice)",
                    price: "20.00",
                  },
                ]
              }
            },
            {
              name: 'Sides',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2BADAA63A1A17B0750B6170711879460",
                    name: "Breaded Tawouk",
                    description: "Breaded tawouk served with honey mustard dip",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4C152D8FDDB2CA2DF0A38CF94CAA50CA",
                    name: "French Fries",
                    description: "Really Crispy French Fries",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5F44E79EBB648DDBB1C9A18FF3553E08",
                    name: "Deluxe Rustic Fries",
                    description: "Premium fries served with special spices",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/622C6CFB223B0551237E56F249E64504",
                    name: "Hummus - Side Plate",
                    description: "Hummus - side portion served with bread and pickles",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B572ECFAF63CC5671396242D3500C30A",
                    name: "Side Green Salad",
                    description: "Lettuce, rocket leaves, purslane, Cucumber and Thyme served with mayo mustard dressing",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C1A530C126AE2D71830F0036378E41D6",
                    name: "Side Fattoush",
                    description: "Lettuce, Tomatoes, cucumbers, mint, radish, green pepper, purslane،Rocca, with oil vinegar dressing.",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7F6A81BF2EA26456A22E6FC7E42AB6FA",
                    name: "Side Tabbouleh",
                    description: "Parsley, chopped tomatoes, spring onion, and mint. Served with Lemon Oil Dressing.",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CE3900B5C143C8BC2D12478ED8E79434",
                    name: "Coleslaw",
                    description: "Cabbage and Mayonnaise",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/472FA7303BF5FFC6D7A39C65B4B181B6",
                    name: "Grilled Potato",
                    description: "Grilled Potato Slices",
                    price: "6.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8E1810AAAEA72F03ABF12A0F25C253FA",
                    name: "Honey Mustard Dip",
                    description: "Honey Mustard Sauce",
                    price: "2.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A7DCB67AE9242D51851370E514B0213F",
                    name: "Garlic And Mayonnaise Dip",
                    description: "Garlic Mayo Sauce",
                    price: "2.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1B88EBDBA57C93F3EBECFAB11D9347FF",
                    name: "Chili Dip",
                    description: "Chili Sauce",
                    price: "2.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9C81451BEA11B5D48D697F40F1C678B6",
                    name: "Pickles plate",
                    description: "Small Cucumber Pickles Plate",
                    price: "4.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C99FCDF0108F3FA147689D42FECDC942",
                    name: "Garlic Dip(Large)",
                    description: "Garlic Paste - Large",
                    price: "6.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/715455A94B3E421C92CF0BAA110191AD",
                    name: "Garlic Dip(Small)",
                    description: "Garlic Paste - Small",
                    price: "2.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CCD8520792488DA3207BEFE496727FE4",
                    name: "Small Chicken Liver",
                    description: "Chicken liver, tomato, pickles,  french fries, mint and garlic in Arabic Bread",
                    price: "14.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473787/malakaltawoukuae2_skcufp.mp4',
                    tags: {
                      connect: [
                        {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'no-sweets'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/075B49D0DD8362D1961819FF3BBAC52C",
                    name: "Small Tawouk",
                    description: "Marinated chicken breast, garlic, coleslaw, fries, pickles and ketchup",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D2DD71549BA6182F3CC3D2F1BE72F218",
                    name: "Small Soujouk",
                    description: "Soujouk (spicy sausages), tomato, pickles, french fries and mayo in Arabic Bread",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A53FB8E65762E5FE5A39CF399037084C",
                    name: "Small Fries Sandwich",
                    description: "Fries, coleslaw, garlic, pickles and ketchup",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E8A7FC579A7031EF43AD476A0C7F69DE",
                    name: "Side Chicken Teriyaki Bowl",
                    description: "Grilled chicken breast, steamed rice, iceberg lettuce, cucumber, shredded red cabbage, onion, coriander and roasted sesame seeds. Served with teriyaki sauce",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B4A52E1696C100FC5D193BE2CCE328D1",
                    name: "Side Mexican Bowl",
                    description: "Grilled chicken breast, steamed rice, avocado, cherry tomatoes, red beans, iceberg lettuce, and corn. Served with Mexican dressing",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/459431D444192764F644216B62A12C8B",
                    name: "Side Greek Chicken Bowl",
                    description: "Grilled chicken breast, steamed rice, iceberg lettuce, cucumber, cherry tomatoes, onions, olives and green capsicum. Topped with creamy Greek goat cheese and served with tzatziki dressing",
                    price: "22.00",
                  },
                ]
              }
            },
            {
              name: 'Beverages',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/92E12701108B8821E16127013F21438B",
                    name: "Local Water",
                    description: "Local Water",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DCE91394C03198626935729E5CF23597",
                    name: "Diet Pepsi",
                    description: "Diet Pepsi, 330ml",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B81C2433F031C6F1EA346B945C07FCC7",
                    name: "Pepsi",
                    description: "Pepsi, 330ml",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/65B6E072C0DDDC7C3DA0F47BABA74663",
                    name: "Pepsi Zero",
                    description: "Pepsi Diet, 330 ml",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BCCA5E321FA86A476A5773CD806CA57F",
                    name: "Orange Mirinda",
                    description: "Mirinda Orange, 330 ml",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FA0D26B480FBF78A4C08A7CB596F502B",
                    name: "7 Up",
                    description: "7up, 330 ml",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/30B982D464DF355067449AED98D2A37D",
                    name: "7up Zero",
                    description: "7up Diet, 330 ml",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F9CA207295C2AF0FE56219486CCBF4FA",
                    name: "Mountain Dew",
                    description: "Mountain Dew, 330 ml",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/41EEB155C32D006A8C5258E179DBA538",
                    name: "Orange Juice",
                    description: "Orange Juice, 350 ml",
                    price: "8.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DD0CFAB3AAEE6BB4F08FE53B6E2A8CA2",
                    name: "Laban",
                    description: "Laban Ayran, 225ml",
                    price: "6.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1B05A6BDF4D188BBFFE69352000AACBE",
                    name: "Ice Tea Peach",
                    description: "Lipton Peach Ice Tea, 320 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CC12B23FF6EFFDA873BB4D5C61D97C73",
                    name: "Ice Tea Peach Zero",
                    description: "Lipton Ice Tea Peach Zero Sugar, 320 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B0F773849895234A6E83A4A0B02A5068",
                    name: "Ice Tea Lemon",
                    description: "Lipton Lemon Ice Tea, 320 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ECD723F28761540A1D3E58BF411148C6",
                    name: "Tropical Ice Tea Zero",
                    description: "Lipton Ice Tea Tropical Zero Sugar, 320 ml",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4F5CFD107767EBD4FC6E69770ACAD2AA",
                    name: "Sparkling Water",
                    description: "San Pellegrino Sparkling Water, 250 ml",
                    price: "10.00",
                  },
                ]
              }
            },
            {
              name: 'Corporate Deals',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/84B1EDE5EEC65707A8D9C5043FC56B17",
                    name: "Group deal for 10- Small",
                    description: "Box of 10 small sandwiches of your choice",
                    price: "105.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6982926CAD60715B288F71635B14F558",
                    name: "Group deal for 15- Small",
                    description: "Box of 15 small sandwiches of your choice",
                    price: "147.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/80C2D01DA6C3D7E904BEA888A65912DF",
                    name: "Group deal for 10- Medium",
                    description: "Box of 10 medium sandwiches of your choice",
                    price: "182.00",
                  },
                ]
              }
            },
          ]
        }
      }
    }
  },
  {
    name: 'Find Salt', // https://www.talabat.com/uae/restaurant/49534/salt-bbq-box-dubai-marina?aid=1213
    country: 'UAE',
    city: 'Dubai',
    address: 'DMM-GF004 Marina Mall',
    latitude: 25.0768462,
    longitude: 55.1395452,
    placeId: 'ChIJd9jlX2QVXz4R2TFoyPfinxQ',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Hard Softies',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637577043431490819",
                    name: "Popsies Bag Of 6",
                    description: "A bag of your choice of 6 push pops. Choose what you like of our signature flavors: mango, mango coconut, mango lotus, chocolate brownie, salted caramel and lotus.",
                    price: "80.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637575464024351191",
                    name: "Popsies Bag Of 12",
                    description: "A bag of your choice of 12 push pops. Choose what you like of our signature flavors: mango, mango coconut, mango lotus, chocolate brownie, salted caramel and lotus.",
                    price: "120.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637558194598668917",
                    name: "Mango Pint",
                    description: "Mangoes have a rich texture that balance with lemon juice",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637558194817653300",
                    name: "Mango Lotus Pint",
                    description: "Dairy lotus ice cream, Mangos and crunchy lotus biscuits",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637558195258851696",
                    name: "Lotus Pint",
                    description: "Dairy lotus ice cream, lotus sauce and crunchy lotus biscuits",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637558195706590987",
                    name: "Chocolate Brownie Pint",
                    description: "Fully baked brownies chocolate ice creams and chocolate fudge at the core",
                    price: "55.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762856052/cake_tvzmg2.mp4',
                    tags: {
                      connect: [
                        {slug: 'dessert'}, {slug: 'snack'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'vegetarian'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}, {slug: 'mild'},
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637562562373098549",
                    name: "Salt Ice Cream Cone And Spoons",
                    description: "12 pieces wafer cone inside and spoons",
                    price: "30.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474304/findsalt1_wh9ehk.mp4',
                    tags: {
                      connect: [
                        {slug: 'dessert'}, {slug: 'snack'}, {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'},
                        {slug: 'vegetarian'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}, {slug: 'mild'},
                      ]
                    }
                  },
                ]
              }
            },
            {
              name: 'Sliders',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637881921545435863",
                    name: "Original Slider",
                    description: null,
                    price: "40.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762855813/burger_dlq3sk.mp4',
                    tags: {
                      connect: [
                        {slug: 'american'}, {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-shellfish'},
                        {slug: 'no-sweets'}, {slug: 'medium'}, {slug: 'mild'},
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637881922077384405",
                    name: "Jalapenos Slider",
                    description: null,
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637881922536457767",
                    name: "Truffle Slider",
                    description: null,
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637881924177898945",
                    name: "Crispy Chicken Slider",
                    description: "chicken, cheese, vegetables and served in bun",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637881924594188872",
                    name: "Chicken Cheetos Slider",
                    description: null,
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637881925987237900",
                    name: "Lettuce Wrap",
                    description: "Dish with lettuce wraps.",
                    price: "47.00",
                  },
                ]
              }
            },
            {
              name: 'Fries',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637883720929907766",
                    name: "Original Fries",
                    description: "Classic fries with spices",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637883721338492041",
                    name: "Cheetos Fries",
                    description: "Crunchy and cheesy with our cheetos fries, featuring crispy golden fries coated in a delectable layer of crushed cheetos.",
                    price: "31.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637883721730778022",
                    name: "Fire Fries",
                    description: null,
                    price: "31.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637883722260505376",
                    name: "Sweet Potato Fries",
                    description: "Indulge in the perfect balance of crispy and tender with our Sweet Potato Fries, expertly seasoned and lightly golden, delivering a mouthwatering experience that will have you craving their delightful sweetness with every bite.",
                    price: "27.00",
                  },
                ]
              }
            },
            {
              name: 'Ready To Cook',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/WhatsApp_Image_2021-_637500408307209166.jpg",
                    name: "Ready To Cook Salt Camp Kit",
                    description: "10 wagyu beef patties, 10 marinated chicken breast patties, 20 slider buns, lettuce, cheese slices, 12 small corn cobs, 6 potatoes,  chopped pickles, sliced onions, salt and pepper, buttered corn, salt and vinegar sauce, chic sauce, buffalo sauce, candy pepper sauce, truffle aioli sauce and proper sauce.",
                    price: "450.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/item_637213579386785335.jpg",
                    name: "Ready To Cook Salt Home Kit - Mini",
                    description: "10 wagyu beef patties, 10 buns, lettuce, cheese slices, jalapeno, pickles, chopped onions, tomato slices, original salt sauce, fire salt sauce, bbq sriracha sauce, salt and pepper.",
                    price: "210.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/item_637213579399257297.jpg",
                    name: "Ready To Cook Salt Home Kit - Large",
                    description: "20 wagyu beef patties, 20 buns, lettuce, cheese slices, jalapeno, pickles, chopped onions, tomato slices, original salt sauce, fire salt sauce, bbq sriracha sauce, salt and pepper.",
                    price: "375.00",
                  },
                ]
              }
            },
            {
              name: 'Salt Dips',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Original_Sauce_637209431271012625.jpg",
                    name: "Original Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cheese_sauce_637209431280091329.jpg",
                    name: "Cheese Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cheetos_Sauce_637209431290881673.jpg",
                    name: "Cheetos Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Chic_Sauce_637209431301331614.jpg",
                    name: "Chic Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Fire_sauce_637209431314138538.jpg",
                    name: "Fire Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Honey_mustard_sauce_637209431325549477.jpg",
                    name: "Honey Mustard Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Hook_Sauce_637209431339262623.jpg",
                    name: "Hook Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Labneh_Sauce2020_637214426548378000.jpg",
                    name: "Labneh Salt Sauce",
                    description: null,
                    price: "5.00",
                  },
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/blob_637629901301275831",
                    name: "Mango Milkshake",
                    description: "Made with mangoes, milk and ice cream, it's a perfect blend of sweet and creamy, perfect to enjoy on a hot summer day or any time you crave something sweet.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_637881930728361803",
                    name: "Mineral Water",
                    description: "330 ml.",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/black_lemonade_637214426580108446.jpg",
                    name: "Black Lemonade",
                    description: "Refreshing black lemonade drink.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Orange_juice_2020_637214426570018765.jpg",
                    name: "Orange Juice",
                    description: "Made capturing all the natural sweetness and tangy citrus flavor. Packed with Vitamin C, it's the perfect thirst quencher and a healthy addition to your daily diet.",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Coca-Cola_330ML_637283596545439188.jpg",
                    name: "Coca-Cola",
                    description: "Carbonated soft drink",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Coca_Cola_Zero_355_ml_637283596558541430.jpg",
                    name: "Coca-Cola Zero",
                    description: "Carbonated soft drink with zero sugar & zero calories",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Sprite_330ML_637283596567509814.jpg",
                    name: "Sprite",
                    description: "Non-caffeinated soft drink",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Fanta_orange_355_ml_637283597600014542.jpg",
                    name: "Fanta",
                    description: "Carbonated soft drink",
                    price: "13.00",
                  },
                ]
              }
            },
          ]
        }
      }
    }
  },
  {
    name: 'Rascals Bakehouse', // https://www.talabat.com/uae/restaurant/755105/rascals-bakehouse?aid=1304
    country: 'UAE',
    city: 'Dubai',
    address: 'Rascals Bakehouse Wasl Square Shop 32',
    latitude: 25.1860034,
    longitude: 55.2398387,
    placeId: 'ChIJl60FYihpXz4RbGxNjVdTyXg',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Pastry Counter',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638942350730907958",
                    name: "The Waffle",
                    description: "Almond Financière, pecan nut praline, maple syrup mouse, maple syrup glaze and burnt butter with miso ganache.",
                    price: "32.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763652183/We_re_obsessed_and_you_will_be_too_THE_WAFFLE_is_now_officially_on_the_menu_kbobzz.mp4',
                    tags: {
                      connect: [
                        {slug: 'dessert'}, {slug: 'snack'}, {slug: 'vegetarian'}, {slug: 'no-pork'}, {slug: 'no-beef'},
                        {slug: 'no-shellfish'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}, {slug: 'mild'}
                      ]
                    },
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/WhatsApp_Image_20251103_a638978339247966918.jpeg",
                    name: "Tiramisu",
                    description: "Layers of espresso-soaked ladyfingers and creamy mascarpone, topped with cocoa perfection.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638854277677478813",
                    name: "The PB and J",
                    description: "Our PB and J is a cheeky twist on the classic with layers of peanut butter cream, raspberry jam, brioche whipped ganache, peanut crunch, and caramelized French toast. It's not what it seems",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638768569834567199",
                    name: "Chocolate Cake",
                    description: "Ingredients: Chocolate sponge, cocoa syrup and double chocolate ganache, a rich, fluffy chocolate sponge cake soaked in cocoa syrup and topped with creamy double chocolate ganache.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638768569858715802",
                    name: "Honey Cake Sando",
                    description: "Ingredients: Honey sponge, honey cream and honey sable, a sweet and soft honey sponge cake layered with smooth honey cream, complemented by a crunchy honey sable.",
                    price: "28.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763652396/Every_bite_s_an_experience._Meet_our_Honey_Cake_now_available_zzvu4d.mp4',
                    tags: {
                      connect: [
                        {slug: 'dessert'}, {slug: 'snack'}, {slug: 'vegetarian'}, {slug: 'no-pork'}, {slug: 'no-beef'},
                        {slug: 'no-shellfish'}, {slug: 'mild'}
                      ]
                    },
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638768567827841612",
                    name: "Double Chocolate Cookie",
                    description: "A rich, chewy cookie packed with intense chocolate flavor, featuring a combination of cocoa and chunks of smooth chocolate throughout.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638768568186997128",
                    name: "Chocolate Chip Cookie",
                    description: "A classic, chewy cookie loaded with semi-sweet chocolate chips.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638768568847701910",
                    name: "Matcha White Choc Cookie",
                    description: "A soft, slightly earthy matcha cookie combined with sweet white chocolate chips.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638821474395219616",
                    name: "Snickerdoodle Cookie",
                    description: "Soft, chewy, and coated in perfect blend of cinnamon and sugar. A real melt in your mouth experience.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Ronnie%E2%80%99s_San_Sebasti%C3%A1n_Ch638755175810434840.jpg?idth172&amp;height=172",
                    name: "Ronnie's San Sebastian Cheesecake",
                    description: "A rich, creamy, and slightly caramelized cheesecake with a smooth texture and a deliciously tangy flavor, featuring a golden-brown top and a melt-in-your-mouth finish.",
                    price: "32.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763652268/One_slice_won_t_be_enough_Chef_Antonio_s_San_Sebastian_cheesecake_is_here_rich_creamy_and_rcjvol.mp4',
                    tags: {
                      connect: [
                        {slug: 'dessert'}, {slug: 'snack'}, {slug: 'vegetarian'}, {slug: 'no-pork'}, {slug: 'no-beef'},
                        {slug: 'no-shellfish'}, {slug: 'mild'}, {slug: "lactose-free",}
                      ]
                    },
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pistachio_Strawberry_Tart638755175978405620.jpg",
                    name: "Pistachio Strawberry Tart",
                    description: "Ingredients: Sable crust, pistachio frangipane, strawberry compote and white chocolate cream, a delicious tart with a buttery sable crust, filled with nutty pistachio frangipane, topped with tangy strawberry compote, and finished with smooth white chocolate cream for a perfect balance of flavors.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Ronnie%E2%80%99s_Apple_Crumble_638755180520841753.jpg",
                    name: "Ronnie's Apple Tart",
                    description: "Ingredients: Sable crust, poached apples in cinnamon sauce and ginger crumble, a warm, flavorful tart with a buttery sable crust, filled with poached apples in cinnamon sauce, and topped with a crunchy ginger crumble for a perfect mix of sweetness and spice.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638815824267453930",
                    name: "Vanilla Flan Parisienne",
                    description: "Ingredients sable crust, vanilla tahiti and custard cream",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lemon_Meringue_Tart638755198826831695.jpg",
                    name: "Lemon Tart",
                    description: "Ingredients: Sable crust, lemon curd and meringue flambee, a zesty lemon tart with a buttery sable crust, filled with smooth lemon curd and topped with a lightly caramelized meringue, offering a perfect balance of tart and sweet flavors.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Choco_Caramel_Tart638755198955320154.jpg",
                    name: "Choco Caramel Tart",
                    description: "Ingredients: Cocoa sable crust, caramel cream, chocolate ganache and mascarpone chantilly, a rich choco caramel tart with a cocoa sable crust, filled with smooth caramel cream, topped with velvety chocolate ganache and mascarpone chantilly for a luscious, indulgent treat.",
                    price: "30.00",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "San Sebastian Whole Cheesecake",
                    description: "Our san Sebastián cheesecake is smooth, rich and perfectly baked all the way through. No gooey centers just pure, creamy goodness in every bite.",
                    price: "240.00",
                  },
                ]
              }
            },
            {
              name: 'Viennoiserie',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638765044418153946",
                    name: "Mini Croissants Box",
                    description: "Choose a total of 12 mini croissants from our restaurant.",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cinnamon_Swirl638755182902017006.jpg",
                    name: "Cinamon Swirl",
                    description: "A sweet, soft pastry with layers of cinnamon filling, offering a perfect balance of warmth and spice, wrapped in a buttery, flaky dough.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Plain_Croissant_638755183692954335.jpg",
                    name: "Plain Croissant",
                    description: "A classic flaky pastry with a golden, crispy exterior and a light, airy interior, perfect for a simple, buttery treat.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pistachio_Double_Baked_Cr638755184217703315.jpg",
                    name: "Pistachio Double - Baked Croisant",
                    description: "A rich, buttery croissant filled with creamy pistachio paste, then baked again for extra crispiness.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Glazed_Croissant_638755184577216181.jpg",
                    name: "Glazed Croissant",
                    description: "A flaky, buttery croissant topped with a smooth, sweet glaze, adding a hint of sweetness to its crisp, golden exterior and soft interior.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cereal_Glazed_Croissant638755184645057368.jpg",
                    name: "Cereal Glazed Croissant",
                    description: "A buttery, flaky croissant topped with a crunchy cereal glaze, adding a satisfying crunch and a hint of sweetness to the soft, airy pastry.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cheese_Croissant638755185076135076.jpg",
                    name: "Cheese Croissant",
                    description: "A popular breakfast item, often found in bakeries and cafes.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638821464595227410",
                    name: "Almond Double-Baked Croissant",
                    description: "A buttery croissant filled with almond cream, then baked again for extra crispiness.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Pain_au_Chocolat_638755183973268451.jpg",
                    name: "Pain Au Chocolate",
                    description: "A classic French pastry with layers of buttery, flaky dough wrapped around rich, melty chocolate.",
                    price: "26.00",
                  },
                ]
              }
            },
            {
              name: 'Hot Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/PB_Oat_Latte638755191724304081.jpg",
                    name: "PB Oat Latte",
                    description: "A creamy and rich drink made with smooth oat milk and a hint of peanut butter, creating a nutty, comforting flavor.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Matcha_Latte_638755191838049827.jpg",
                    name: "Matcha Latte",
                    description: "A blend of vibrant green tea and steamed milk, offering a smooth, earthy flavor with natural sweetness.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Cappuccino_638755192126636994.jpg",
                    name: "Cappucino",
                    description: "A classic espresso-based drink with equal parts espresso, steamed milk, and frothy foam, creating a balanced and creamy texture.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Biscoff_Latte638755192226273504.jpg",
                    name: "Biscoff Latte",
                    description: "A drink infused with the sweet, caramelized flavor of cookies, combining a smooth espresso base with a touch of spiced sweetness.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Flat_white638755192355106330.jpg",
                    name: "Flat White",
                    description: "A smooth espresso drink with steamed milk and a thin layer of microfoam.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Americano638755196922837647.jpg",
                    name: "Americano",
                    description: "Espresso diluted with hot water, creating a smooth, bold coffee flavor without the intensity of a straight shot.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Latte638755197114072264.jpg",
                    name: "Latte",
                    description: "A creamy espresso drink made with steamed milk and a small amount of foam, offering a smooth and mild coffee flavor.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/V60638755197445477225.jpg",
                    name: "V60",
                    description: "A manual pour-over coffee brewed, delivering a clean, crisp, and flavorful cup with subtle notes.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Macchiato_638755197525462732.jpg",
                    name: "Macchiato",
                    description: 'An espresso "stained" with a small amount of steamed milk, offering a bold coffee flavor with a hint of creaminess.',
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638768571771777743",
                    name: "Cortado",
                    description: "A balanced espresso drink with equal parts espresso and steamed milk, creating a smooth and strong coffee flavor.",
                    price: "24.00",
                  },
                ]
              }
            },
            {
              name: 'Cold Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Iced_Americano638755424488962995.jpg",
                    name: "Iced Americano",
                    description: "A refreshing cold brew of espresso and water, offering a smooth and bold coffee flavor with a chilled finish.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Iced_Latte638755425324350155.jpg",
                    name: "Iced Latte",
                    description: "A cold version of the classic latte, made with espresso and chilled milk, offering a smooth and creamy coffee experience.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Iced_Biscoff_Latte638755424575179059.jpg",
                    name: "Iced Biscoff Latte",
                    description: "A chilled latte infused with the sweet, caramelized flavor of Biscoff cookies, offering a spiced sweetness in a refreshing iced drink.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Iced_PB_Oat_Latte638755425559082368.jpg",
                    name: "Iced PB Oat Latte",
                    description: "A refreshing iced latte made with oat milk and a hint of peanut butter, providing a nutty, creamy flavor.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Iced_Matcha_Latte638755425442121102.jpg",
                    name: "Iced Matcha Latte",
                    description: "A cold, vibrant blend of matcha green tea and chilled milk, delivering a smooth, earthy taste with natural sweetness.",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Lemon_Iced_Tea_638755425753215559.jpg",
                    name: "Lemon Iced Tea",
                    description: "A crisp, tangy iced tea made with fresh lemon, offering a zesty, refreshing flavor perfect for a hot day.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Arnold_Palmer638755420371268243.jpg",
                    name: "Arnold Palmer",
                    description: "A refreshing combination of iced tea and lemonade, creating a perfect balance of sweet and tangy flavors.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Strawberry_Dream638755427318652107.jpg",
                    name: "Strawberry Dream",
                    description: "A sweet and creamy strawberry-flavored iced drink, offering a refreshing burst of fruity sweetness.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638768571791876988",
                    name: "Iced V60",
                    description: "A cold pour-over coffee brewed using the V60 method, offering a clean, crisp flavor with a refreshing chill.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Iced_Freddo_Cap638755425151727203.jpg",
                    name: "Iced Freddo Cap",
                    description: "A cold, creamy espresso-based drink with frothed milk, offering a smooth texture and bold coffee flavor.",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/Fresh_OJ638755423973383252.jpg",
                    name: "Fresh OJ",
                    description: "A freshly squeezed orange juice served chilled, offering a naturally sweet and refreshing citrus flavor.",
                    price: "15.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Acai And Co', // https://www.talabat.com/uae/restaurant/698219/acai-and-co?aid=1973
    country: 'UAE',
    city: 'Sharjah',
    address: 'Acai And Co 8F39+RX - Muwaileh Commercial Industrial Area',
    latitude: 25.3045855,
    longitude: 55.4699,
    placeId: 'ChIJofRknztfXz4RhwjqEOVQBEY',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Combos',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FD10F449AE03F427FAC6CCC6F5D1D979",
                    name: "Toast & Mini Acai",
                    description: "Choice of toast, served with choice of small acai.",
                    price: "59.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/69ADE650D4659D2DCB6E2E1EA8413DAA",
                    name: "Power Duo",
                    description: "Choice of flatbread, served with choice of smoothie or protein shake.",
                    price: "59.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3DA2A20C50E6F57A4B6B7C865A816B36",
                    name: "Bowl Booster",
                    description: "Choice of overnight oats, served with choice of protein shake.",
                    price: "59.00",
                  },
                ]
              }
            },
            {
              name: 'NEW Signature Acai',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/28505121455BC14EFA484ECAB4088936",
                    name: "Peanut Banana Crunch",
                    description: "Acai blended with banana, topped with banana, peanut butter, paçoquita crumbs, condensed milk drizzle and granola on the side.",
                    price: "39.00",
                  },
                ]
              }
            },
            {
              name: 'NEW Flatbread Sandwiches',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7966028BE8595215F4E28D352138A3AA",
                    name: "Caprese Pesto",
                    description: "Toasted flatbread with basil pesto, arugula, ripe tomato, creamy mozzarella pearls, lightly seasoned.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/339D34612449C6E47606833A74481A67",
                    name: "Triple Cheese Melt",
                    description: "Toasted flatbread loaded with cheddar, mozzarella, silky cheese sauce; golden, gooey perfection inside.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E9664DEEBF18FA34C29B2EA53831C4C9",
                    name: "Grilled Chicken Avocado",
                    description: "Grilled chicken strips, garlic aioli, avocado, tomato, arugula in toasted flatbread, freshly made.",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FCDA8CE951579E3BFB8BDCAAA5AE10E5",
                    name: "Chipotle Steak & Cheese",
                    description: "Sliced steak, caramelized onions, melted cheese, chipotle aioli, jalapeno, arugula, smoky, spicy finish.",
                    price: "49.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/64A5E276D6121B398F51C8640E71D80C",
                    name: "Tuna Avocado Pesto",
                    description: "Creamy tuna salad, avocado, tomato, pesto, garlic aioli, lemon-olive oil on warm flatbread.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5915FE5FCFE729CAE4C7C32F86C0195A",
                    name: "Mediterranean Halloumi Pesto",
                    description: "Toasted flatbread with pesto, arugula, tomato, grilled halloumi, Kalamata olives; salty, savory balance.",
                    price: "38.00",
                  },
                ]
              }
            },
            {
              name: 'Signature Acai',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/48C9AFABB2B187FFB72581B7DA52DCF7",
                    name: "Tarek's Weak Spot",
                    description: "Açai with banana, strawberry, blueberry, and crushed Lotus Biscuit",
                    price: "39.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475026/acaiandco1_uun7f7.mp4',
                    tags: {
                      connect: [
                        {slug: 'breakfast'}, {slug: 'snack'}, {slug: 'dessert'}, {slug: 'vegetarian'}, {slug: 'vegan'},
                        {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'}, {slug: 'no-tree-nuts'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ECBA7B0271BA900970D8C4D2382544A3",
                    name: "Nuts For Acai",
                    description: "Acai blended with banana, topped with banana, peanut butter, fresh strawberries, sliced almonds and granola on the side.",
                    price: "38.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475027/acaiandco2_cohlof.mp4',
                    tags: {
                      connect: [
                        {slug: 'breakfast'}, {slug: 'snack'}, {slug: 'dessert'}, {slug: 'vegetarian'}, {slug: 'vegan'},
                        {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B98D4D7BEE7AED8DBA13F2FC1C141C23",
                    name: "Rainbow",
                    description: "Acai blended with banana and strawberries, topped with kiwi, dragon fruit, pomegranate, mango and granola on the side.",
                    price: "39.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763656045/Plan_with_your_summer_with_our_Acai_Co_f12sxz.mp4',
                    tags: {
                      connect: [
                        {slug: 'breakfast'}, {slug: 'snack'}, {slug: 'dessert'}, {slug: 'vegetarian'}, {slug: 'vegan'},
                        {slug: 'no-pork'}, {slug: 'no-beef'}, {slug: 'no-shellfish'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}, {slug: 'mild'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D909EAF809D224A6FA891350BBEC1D1E",
                    name: "The Magnifico",
                    description: "Acai blended with banana, topped with strawberry, banana, kiwi, chia seeds and granola on the side.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2C6E81005B2763B028EAC82A0CA5FC92",
                    name: "Coco-date",
                    description: "Acai blended with strawberries and banana, topped with dates, coconut flakes, pistachios, mango, pomegranate and granola on the side.",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/84CA223940A29E2BCF6927F9FEB7D4C0",
                    name: "BYO Acai Bowl",
                    description: "Pick your blend, 2 toppings, 1 crunch. Fresh, fast, customizable.",
                    price: "39.00",
                  },
                ]
              }
            },
            {
              name: 'Bowls & Parfaits',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3C4E077DA6AA6B513120503E5186039B",
                    name: "Fruity Parfait",
                    description: "Greek yogurt, granola, kiwi, strawberry, pineapple, honey, chia.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/98340B788DAD500FB3D4E7A1594104BA",
                    name: "Nutty Yogurt Parfait",
                    description: "Greek yogurt, banana, granola, strawberry, blueberries, honey, peanut butter.",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A88B2DFF33517DEB9437592CD6BF5154",
                    name: "Acai Chia Parfait",
                    description: "Banana-blend açaí base with almond-milk chia; berries, passion fruit; granola side.",
                    price: "49.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/41619DBA5A16A73965475518C6E9C7F9",
                    name: "Berry Oats",
                    description: "Almond-milk oats with Greek yogurt; strawberries, raspberries, blueberries.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7F2AC0DB012BCF2F243D25FC791E49C1",
                    name: "Mango & Berries Oats",
                    description: "Almond-milk oats; mango, green apple, strawberries, raspberries, blueberries.",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/76E1D5DACCA7C7A56E08A082CC2C83B6",
                    name: "Banana & Nuts Oats",
                    description: "Almond-milk oats layered with Greek yogurt; banana, mixed nuts, granola.",
                    price: "34.00",
                  },
                ]
              }
            },
            {
              name: 'Toasts',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3308FA04398D13090330A8620E3A56CE",
                    name: "Salmon Avo Delight",
                    description: "The classic combo of cream cheese, sliced avocado, red onion, smoked salmon, arugula, capers, and your choice of toasted bread.",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E4AED292202DA2ED39999F90FC341296",
                    name: "Avocado Bruschetta Bliss",
                    description: "The perfect combination of mashed avocado, cherry tomatoes, mozzarella balls, basil, balsamic glaze, black pepper on your choice of toasted bread.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B45992F8E9558A716638D95EEC075206",
                    name: "Mediterranean Avocado Toast",
                    description: "Mediterranean flavors of mashed avocado, cucumber, cherry tomatoes, kalamata olives, feta cheese, olive oil and zaatar on your choice of toasted bread.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/56DD76BA3EB89FA3B9FDD805C6BEF266",
                    name: "Avocado Egg Toast",
                    description: "Choice of toasted bread with avo mash, poached eggs, drizzled with olive oil.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4D4E9EC583ACDD9A2FC577D1F827AFD7",
                    name: "BYO Avo Toast",
                    description: "Choose bread, spread, 2 toppings, 3 seasonings. Vegan-friendly options available.",
                    price: "35.00",
                  },
                ]
              }
            },
            {
              name: 'The Protein Collection [NEW]',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/892D58FC12432C27060B68F74168552D",
                    name: "PB Oat Power Shake",
                    description: "Peanut butter, oats, almonds, raisins; milk choice; whey vanilla; creamy sustained energy blend.",
                    price: "33.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/853C5932CECC78A3900E540B5A0A0A28",
                    name: "Triple Berry Burst Shake",
                    description: "Strawberries, raspberries, blueberries; milk choice; whey vanilla; refreshing, bright, juicy antioxidant boost shake.",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/68E88F858F385B693FE717C706ECD1EF",
                    name: "Date-Chia Oat Booster",
                    description: "Dates, oats, chia, peanut butter, cinnamon; milk choice; whey chocolate; fiber-rich fuel shake.",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'Fresh Smoothies',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/943FCFF8AF519E90C2D79EDCA2CA05CB",
                    name: "Acai Berry",
                    description: "Acai, blueberry, mango, banana, apple juice.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/52EB1AF2E4FCE49987C428898E65C1F2",
                    name: "Detox Delight",
                    description: "Broccoli, spinach, celery, mango, pineapple, banana, apple juice.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7DB18D38DE1A22A126D6F424694B2D4E",
                    name: "Mango Madness",
                    description: "Mango, Passion Fruit, Pineapple, Apple Juice",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DBA67FFAAFA9F448B40FC37530017989",
                    name: "Strawberry Delight",
                    description: "Strawberry, banana, papaya, cherry, apple juice.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F30D4C2D360B0D53A720AC3F5AD877C4",
                    name: "Caribbean Chill",
                    description: "Mango, melon, strawberry, apple juice.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6D1740FECF11EA6B8920C2D6F632D208",
                    name: "Tropi-Colada",
                    description: "Coconut, pineapple, banana, apple juice.",
                    price: "27.00",
                  },
                ]
              }
            },
            {
              name: 'Healthy Desserts',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9F13242CCDB07ECA953C0FDDB6E642C4",
                    name: "Brookie Brownie",
                    description: "Fudgy vegan brookie—gluten-free brownie-cookie with dark chocolate chips, walnuts & mixed nuts.",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/26E79F50D3C9CE5DB83F54C04129A4BB",
                    name: "Brownie",
                    description: "Rich vegan brownie made gluten-free with cocoa, dark-chocolate chips, walnuts & a hint of coffee.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/ECD4237178A3721DC893A391355A482B",
                    name: "Choco Almond Cookies",
                    description: "Crunchy vegan choc-almond cookies—buckwheat & GF flours, dark-chocolate chunks, vanilla.",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/52EAF65E25CE6AF3522FADE4EF8C54D8",
                    name: "Chocolate Cookies",
                    description: "Soft vegan chocolate cookies with GF flour, coconut oil & chocolate chips, lightly sweetened.",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CAE097D31DDB116AECA2266E74DA588A",
                    name: "Chocolate Paste Cookies",
                    description: "Decadent vegan choc-paste cookies—GF flour, dark chocolate, cocoa & a touch of coffee.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/30924D3260BB6C16369524289D6EAF34",
                    name: "Rocky Road",
                    description: "Mini marshmallows, biscuits, dark chocolate.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D63FF3BA4ABD08D5F216CEC363DFABFD",
                    name: "Mango and Passion Fruit Panna Cotta",
                    description: "A cold Italian silky and creamy dessert serving the sweet and sour taste of the mango and the passion fruit.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/83E44DE4E04C7DFB1A098571A77D1BA8",
                    name: "Sunrise Chia Pudding",
                    description: "Almond-milk chia with agave, vanilla; topped with berries and pomegranate.",
                    price: "33.00",
                  },
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EA995C1C31174C9D43B3A0CD2E70EC20",
                    name: "Lemon Tea Cooler",
                    description: "A refreshing blend of zesty lemon and invigorating tea, perfect for a revitalizing sip.",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6D1E16C8F54A3D85F9A26B5E1C20D334",
                    name: "Ginger Tea Lemon Cooler",
                    description: "A harmonious fusion of spicy ginger, tangy lemon, and soothing tea, guaranteed to awaken your taste buds",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/90FAE2B0ADD353E52C3AE66CC29542D9",
                    name: "Hibiscus Cinnamon Tea Cooler",
                    description: "A dynamic trio of tangy lemon, tart hibiscus, and warm cinnamon, delivering a refreshing burst of flavor with every sip",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/78303571B55C1AFBEDDC8432E47E23A4",
                    name: "Basil Beetroot Cooler",
                    description: "A vibrant concoction of earthy beetroot infused with fresh basil, creating a cool and revitalizing beverage bursting with natural goodness",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FAC41256D2769B6A64156BF779411A02",
                    name: "Arwa Water - 500ml",
                    description: "Arwa Water",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EE56AE4FCF3B30D299C9DD44237E2356",
                    name: "Acqua Panna",
                    description: "Acqua Panna",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7C628EB1FA177A0AF9CBE53CC76B4870",
                    name: "San Pellegrino",
                    description: "San Pellegrino",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B29F8397B64E785F313F27D37611E387",
                    name: "Freshly Squeezed Orange Juice",
                    description: "Fresh orange juice.",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/200430C6A90A104F00D963E91A31BD49",
                    name: "Fresh Coconut Water",
                    description: "Whole coconut.",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/51DB9664C722560381EF48B31490E0AA",
                    name: "Coca-Cola Zero",
                    description: "Coca-Cola Zero",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CAB109DEB686C2687063213E94B02064",
                    name: "Coca-Cola Light",
                    description: "Coca-Cola Light",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EB20CEF91FED1CF59CA0B58D6FAC854E",
                    name: "Coca-Cola",
                    description: "Coca-Cola",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3128C2521030008DE47BF3F1EA3727EC",
                    name: "Fanta",
                    description: "Fanta",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BB3BB0617EADB2425384CB4D9698BD0E",
                    name: "Sprite",
                    description: "Sprite",
                    price: "9.00",
                  },
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'B.laban', // https://www.talabat.com/uae/restaurant/727564/blaban-al-rashidiya-1?aid=4177
    country: 'UAE',
    city: 'Ajman',
    address: 'B.laban 9FQ5+V3V - Al Rashidiya 1',
    latitude: 25.3896136,
    longitude: 55.45931599999999,
    placeId: 'ChIJCdNl20xZXz4R_P55D-m3Tkw',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Koti Koti',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5B6A4BF4B1338DD7EC109E8EFCAA6CFD",
                    name: "Koti Ftutti Chocolate",
                    description: "A layer of ganache cream topped with layers of chocolate cake, drizzled with Nutella sauce, white chocolate sauce, pistachio sauce, feuilletine chocolate, and M&M's",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FA4F6368D51A8A6CE8E3FB9D998C514B",
                    name: "Koti Ftutti Red Velvet",
                    description: "A layer of cream cheese topped with layers of red velvet cake, cream cheese, white chocolate sauce, raspberry sauce, and M&M's",
                    price: "45.00",
                  },
                ]
              }
            },
            {
              name: 'De Paris',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/215F97B1B7BD5519953CDDC1989843F9",
                    name: "De Paris Nutella S",
                    description: "Overall French Fudge, melted into rich French Chantilly cream, topped with a luxurious Valrhona-style ganache blending fine dark and milk French chocolate, and crowned with wild strawberries and a Parisian chocolate sauce",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B195F9B317E0A82509EA561106E4BCBF",
                    name: "De Paris kinder S",
                    description: "Overall French Fudge, melted into rich French Chantilly cream, topped with a luxurious Valrhona-style ganache blending fine dark and milk French chocolate, and crowned with wild strawberries and a Parisian chocolate sauce",
                    price: "54.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/217AEE356D023CC1DC79171317801791",
                    name: "De Paris Super-lux S",
                    description: "Overall French Fudge, melted into rich French Chantilly cream, topped with a luxurious Valrhona-style ganache blending fine dark and milk French chocolate, and crowned with wild strawberries and a Parisian chocolate sauce",
                    price: "54.00",
                  },
                ]
              }
            },
            {
              name: 'Al Fataaka',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/151442DCF30B81F8547F4249C3EAC705",
                    name: "Al Fataaka Plains",
                    description: "A combination of crunchy French butter cookies with Philadelphia cream cheese and raspberries",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3E7060FA02FA5CB291AE990693E8F552",
                    name: "Al Fataaka Nutella",
                    description: "A combination of crunchy French butter cookies with Philadelphia cream cheese and raspberries and Nutella",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/27995970C5FC9645E15D49D1B12CE545",
                    name: "Al Fataaka Nutella Pistachio",
                    description: "A combination of crunchy French butter cookies with Philadelphia cream cheese and raspberries and Nutella Pistachio",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/62295473607444D074AE8440E0ECDCE1",
                    name: "Al Fataaka Kinder",
                    description: "A combination of crunchy French butter cookies with Philadelphia cream cheese and raspberries and Kinder",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'New items',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/96670118B6991C08BB2E7855D75B2B12",
                    name: "Dabdob",
                    description: null,
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/37E906C741762E672560C9B4F492AD09",
                    name: "Lazy Cake Large",
                    description: null,
                    price: "60.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2930B407C19EA2A06613891E6D39570B",
                    name: "Lazy Cake Small",
                    description: null,
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F15DC2858967296E00789C949881415E",
                    name: "Rmontada",
                    description: null,
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EA732A368EEE58E5F62B00A65B87D558",
                    name: "Dabadibo London Box",
                    description: null,
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1B02CF62C10A73B89D6DD00150DE51AB",
                    name: "Boba Cheesecake Mango",
                    description: "Creamy Philadelphia cheesecake swirled with layers of classic French red velvet cake, drenched in juicy mango popping boba that bursts with flavor in every bite",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/88FBE79B82892E37616075D8E1C32D3C",
                    name: "Boba Cheesecake Strawberry",
                    description: "Creamy Philadelphia cheesecake swirled with layers of classic French red velvet cake, drenched in juicy Strawberry popping boba that bursts with flavor in every bite",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F14DEB900C1FD60EC45821255BAE84FC",
                    name: "Boba Cheesecake Green Apple",
                    description: "Creamy Philadelphia cheesecake swirled with layers of classic French red velvet cake, drenched in juicy Green Apple popping boba that bursts with flavor in every bite",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E1E09F017F3299AE5ED204FEB6801698",
                    name: "Choco burger",
                    description: null,
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F2F5C466E3151C5AF147B9805078D3E6",
                    name: "Labobo Mangogo",
                    description: null,
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B4D4B954F384F0F2D5A647BE3F9C98F3",
                    name: "Fazea Chocolate S",
                    description: "Fudge cake layered with a rich cream blend (pastry cream + ganache), drizzled with syrup, topped with another layer of cream, and finished with a crunchy chocolate feuilletine.",
                    price: "35.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763667248/%D8%B4%D9%88%D9%81%D8%AA_%D8%A7%D9%84%D9%81%D8%B2%D8%B9%D8%A9_%D9%88%D8%AD%D9%84%D8%A7%D9%88%D8%AA%D9%87%D8%A7_%D8%A8%D8%B3_%D8%A7%D9%86%D8%AA_%D8%A7%D9%83%D9%8A%D8%AF_%D9%85%D8%AC%D8%B1%D8%A8%D8%AA%D9%87%D8%A7%D8%B4_%D8%A8_%D8%A7%D9%84%D8%A7%D9%94%D9%8A%D8%B3_%D9%83%D8%B1%D9%8A%D9%85_ximwlv.mp4',
                    tags: {
                      connect: [
                        {slug: 'dessert'}, {slug: 'no-tree-nuts'}, {slug: 'no-peanuts'}
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/54FDF1830A3EE498C30CF4E58FC3E471",
                    name: "Fazea Chocolate Gold",
                    description: null,
                    price: "60.00",
                  },
                ]
              }
            },
            {
              name: 'Trending items',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8706F89A9B77F01CC260DA204518CD36",
                    name: "Cheese Bomb",
                    description: "Pistachio kunafa with cream cheese with cream inside and mixed with, the finest types of Belgian chocolate and luxurious pistachio sauce",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8A2CB372250104497E08A9F30B5E8329",
                    name: "Dubai Chocolate",
                    description: null,
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9B6755A1FC66D65ED18BE110B7AB6A58",
                    name: "Dubai Bomb Hazelnut",
                    description: null,
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F84E73DD0CBB8A7D912C2EDDD182B9B4",
                    name: "Dubai Bomb Plain",
                    description: null,
                    price: "25.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C62294002AA0E86A6BAC60DF1C23BF0E",
                    name: "Creme de la Creme Dubai",
                    description: null,
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2BC0BA733057CBD06C03F316ECCB280F",
                    name: "Eloqa",
                    description: null,
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3E855D64D2A43F5BBD43A1EF6CED203B",
                    name: "Frawlita Alniyta Kawanita",
                    description: null,
                    price: "27.60",
                  },
                ]
              }
            },
            {
              name: 'Hoba Tito Mambo',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E4531EDC0D3F637472893B83A83CB593",
                    name: "Hoba Tito Mambo Kinder Large",
                    description: "Super creamy Qeshtoota with Dubai Kunafa drowned in Pistachio, topped with a modern French touch of luxurious Crème Brûlée, and finished with Strawberry Kinder",
                    price: "35.40",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3B7798BF1B10CA62AFD6E9C104C65B9F",
                    name: "Hoba Tito Mambo Mango Large",
                    description: "Super creamy Qeshtoota with Dubai Kunafa drowned in Pistachio, topped with a modern French touch of luxurious Crème Brûlée, and finished with Mango",
                    price: "35.40",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BE6F0F823B1E02D6D5E21F5B120018A6",
                    name: "Hoba Tito Mambo Nutella Large",
                    description: "Super creamy Qeshtoota with Dubai Kunafa drowned in Pistachio, topped with a modern French touch of luxurious Crème Brûlée, and finished with Strawberry Nutella",
                    price: "35.40",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/33EC0ED5288587FCA7C9D3EA328B2CB6",
                    name: "Hoba Tito Mambo Pistachio Large",
                    description: "Super creamy Qeshtoota with Dubai Kunafa drowned in Pistachio, topped with a modern French touch of luxurious Crème Brûlée, and finished with Strawberry Pistachio",
                    price: "35.40",
                  },
                ]
              }
            },
            {
              name: 'AL Kabsa',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0086B4DF5EE76E89E84989F7AD0147CA",
                    name: "Kabsa Large",
                    description: "Fudge cake, kunafa mix with pistachio sauce, chocolate mousse, crispy rice and Belgian milk chocolate sauce.",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4D63523FED15C7436777A08B6B9E9605",
                    name: "Kabsa Medium",
                    description: "Fudge cake, kunafa mix with pistachio sauce, chocolate mousse, crispy rice and Belgian milk chocolate sauce.",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EAE1C42281F06088EC8AA11D79489D43",
                    name: "Kabsa Small",
                    description: "Fudge cake, kunafa mix with pistachio sauce, chocolate mousse, crispy rice and Belgian milk chocolate sauce.",
                    price: "30.00",
                  },
                ]
              }
            },
            {
              name: 'Al Haba',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/67BE7541DCA4CA38C777C9F5EDD237A2",
                    name: "Al Haba Fudge Chocolate",
                    description: "Fudge cake topped with a layer of kunafa mixture with pistachio sauce topped with belgian milk chocolate sauce and white chocolate",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C8C6B5146343D729115F8F3B6A5810B9",
                    name: "Al Haba Hazelnut Chocolate",
                    description: "Fudge cake topped with a layer of kunafa mixture with pistachio sauce topped with swiss milk chocolate sauce and hazelnut",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/239B13570A7D7D21634E78FCE6D9CC56",
                    name: "Al Haba Kinder Chocolate",
                    description: "Fudge cake with a layer of kunafa mixture with pistachio sauce covered with kinder sauce and pistachio",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/69F9392F8FCF393DA25E1B42BA387C8B",
                    name: "Al Haba Round Fudge Chocolate Large",
                    description: "Fudge cake topped with a layer of kunafa mixture with pistachio sauce topped with belgian milk chocolate sauce and white chocolate",
                    price: "66.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EC804B3D04BEE547BED0190F8AC0B660",
                    name: "Al Haba Round Hazelnut Chocolate Large",
                    description: "Fudge cake topped with a layer of kunafa mixture with pistachio sauce topped with swiss milk chocolate sauce and hazelnuts",
                    price: "66.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/2831A12EBA02D7087BDD4036C3EBE31D",
                    name: "Al Haba Round Kinder Chocolate Large",
                    description: "Fudge cake with a layer of kunafa mixture with pistachio sauce covered with kinder and pistachio sauce",
                    price: "66.00",
                  },
                ]
              }
            },
            {
              name: 'Qashtouta',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4F069600E8CC5196CB28A567101650E8",
                    name: "Dish of kings",
                    description: "cream, cream, Italian pistachio, pistachio. Calories 372",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/3938314D87CB5AE8671D462D0F10BFE0",
                    name: "Happiness dish",
                    description: "Chocolate cream Ferrero Rocher Italian nuts. Calories 380",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/72576DFB0A1AE8DE5B83984F93EF5C85",
                    name: "Italian super alefrrero",
                    description: "Cream cream and rice with milk Chocolate Ferrero Rocher Italian nuts. Calories 370",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E0E2FAFD12A86F1678CAD132EE387775",
                    name: "Nutella phobia",
                    description: "Cream cream and rice with milk Italian Nutella. Calories 411",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A7760C0EF634BAD5F4FDE40B1338D674",
                    name: "Qashtata cream + pecans",
                    description: "Calories 364",
                    price: "21.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/937D8ED96B977BDEED2B821DEF661759",
                    name: "Qashtota Caramel",
                    description: "220 Calories",
                    price: "19.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/770339B803F9F987D499EDAFAEC5A386",
                    name: "Qashtota cream",
                    description: "320 Calories",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C0C8ADB059DB753C0BF850E2A71340D5",
                    name: "Qashtota cream + Italian Nutella",
                    description: "Calories 364",
                    price: "21.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/F34EF4D5F26332607AF738B6008C31B3",
                    name: "Qashtota cream + mango butter pieces",
                    description: "372 Calories",
                    price: "21.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A2944DCF794E3168875C7DCAE482F125",
                    name: "Qashtota Ghost",
                    description: "Rice with milk topped with cream, cream, Belgian lotus biscuits, Belgian lotus, spread and mixed nuts, nuts, pistachios and almonds. Calories 411",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B71E4C2160461F80355385FC5311AA9E",
                    name: "Qashtota Lotus",
                    description: "A traditional dish made from lotus.",
                    price: "21.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0BDF3F1786F9A7C8E6E0915ACA0E9C0F",
                    name: "Qashtota Nuts",
                    description: "328 Calories",
                    price: "21.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/1051EE55DA0564947010C75C330F2564",
                    name: "Qashtota Rice with milk + lotus",
                    description: "410 Calories",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B79E70AD64D67DADC2D0916F2647A59E",
                    name: "Qashtota Rice with milk + mango butter pieces",
                    description: "380 Calories",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6688E44DBB895813B079D08216CF7CBF",
                    name: "Qashtota Rice with milk + nuts",
                    description: "380 Calories",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FFAA6F64F54D0174B9E561970A1EECBA",
                    name: "Qashtota Rice with milk plain",
                    description: "Calories 280",
                    price: "19.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DC043E1B1126802D69BB0EBBBD391BB5",
                    name: "Qashtouta Chocolate",
                    description: "cream cream and swiss chocolate sauce",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B36A1A77BB2B5D352CCABDBE2CF5FD54",
                    name: "Qashtouta Chocolate Crunchy",
                    description: "cream cream and swiss chocolate sauce and crunchy",
                    price: "23.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FBECFBE9A2915BAC9E2E801818419B29",
                    name: "Qashtouta Chocolate Crunchy Nuts",
                    description: "cream cream and swiss chocolate sauce, crunchy and nuts",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4F0ECEBEA2BD71F07F137B049B064823",
                    name: "sheklikleta Qashtata",
                    description: "Cream with rice with milk, Italian chocolate top, Italian nutella, American Oreo, Belgian white chocolate and nuts. Calories 390.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/FB55A55A258F5A9DDA445111325776D1",
                    name: "Super Kings",
                    description: "cream cream and rice with milk Italian Pistachio pistachios. Calories 406",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/98795BEC2BCE856AD789FF3D3765B65A",
                    name: "Super Lux Qashtota",
                    description: "Rice with milk and topped with cream cream and topped with Italian pistachio, Belgian lotus, Italian pecan, pistachio and chocolate chips.411 calories",
                    price: "37.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DB45A55C1B8DB23F2DCB87402FE27813",
                    name: "tri duala Qashtota",
                    description: "Lotus qashtuta, mango qashtuta, caramel nut qashtuta, strawberry and banana qashtuta",
                    price: "90.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9D694B1BF494B385E1D6E346C051AD80",
                    name: "tri duala Qashtota Super Lux",
                    description: "Caramel qashtuta, half Nutella qashtuta, half pecan, half lotus qashtota, half pistachio, half mango qashtota, half strawberry and banana",
                    price: "102.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AA2CB17B96606ECB5E779290E6BFA205",
                    name: "Dalaa dish",
                    description: null,
                    price: "24.00",
                  },
                ]
              }
            },
            {
              name: 'Rice',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/69A4C96EC5208D2E75D0C647E4822E4B",
                    name: "alshaklakilitat rice",
                    description: "Rice with milk, Italian nutella chocolate, American Oreo, Belgian white chocolate and nuts. Calories 380",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6BE9136FABE1F2F73F45014AFE71A6DF",
                    name: "Altabtaba",
                    description: "Rice with milk, 4 pieces basbousa, nuts, calories 400",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/662FE7C44E13923C7FE6D44F10CF0AF1",
                    name: "Rice with milk + Belgian lotus",
                    description: "Calories 297",
                    price: "20.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/56F6E543EAACC1EF177C3390868AB844",
                    name: "Rice with milk + Italian pistachio + aleppo pistachios",
                    description: ". Calories 285",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E717EEB217A32E78607A18B04B3FECFD",
                    name: "Rice with milk + Italian Rocher chocolate",
                    description: "Calories 275",
                    price: "20.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D98F9279830FF1D5D37301803A7D310C",
                    name: "Rice with milk + nuts",
                    description: "Calories 221",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/863058E0AF2647FAF0727D76E55D30F5",
                    name: "Rice with milk + nuts + Nutella",
                    description: "Calories 282",
                    price: "23.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A62904ABB3D2FCE920CFC0C31A87990B",
                    name: "Rice with milk + pecan",
                    description: "Calories 297",
                    price: "21.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4875D44C6ABF59F9C9BD33D4991B3636",
                    name: "Rice with milk Plain",
                    description: "Calories 206",
                    price: "12.00",
                  },
                ]
              }
            },
            {
              name: 'Koshari',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/EA195812176A6B83BCA2C9BF1C7DFF07",
                    name: "Koshari lotus + pistachio",
                    description: "Rice with milk, roasted kunafa, whipped cream, lotus powder, roasted goulash and pistachio. Calories411",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/12643DFF4A7F66716EF98B6376429DC6",
                    name: "Koshari mango",
                    description: "Rice with milk and roasted kunafa. Whipped cream, mango pieces and roasted goulash. Calories 411",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B83236A9B881F0D9EF8E25EAA13AD2D9",
                    name: "Koshari Nutella",
                    description: "Rice with milk, roasted kunafa, whipped cream, nutella and roasted goulash. 411 Calories",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/535311714006EBEDCB7CB2EDBE5C94EA",
                    name: "Koshari Oreo Nutella",
                    description: "Rice with milk and roasted napkin. Whipped cream, Nutella, Oreo, roasted goulash and white chocolate. Calories 411",
                    price: "27.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/07C9D439FC409CF0E01616790B93567A",
                    name: "Koshari pecan",
                    description: "Rice with milk, roasted kunafa, whipped cream, pecan and roasted goulash. 411 Calories",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/65C5282E1B6362C9008E1B77C4306B52",
                    name: "Koshari pistachio",
                    description: "Rice with milk and roasted kunafa. Whipped cream, pistachio and roasted goulash calories 411",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/97495A3ECFA217C98F145A32926C73E6",
                    name: "Koshary lotus",
                    description: "Rice with milk, roasted kunafa, whipped cream, lotus powder, roasted goulash and lotus sauce. Calories 411",
                    price: "26.50",
                  },
                ]
              }
            },
            {
              name: 'Salankate',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B78CA5C12D2FACEF9920CAE2059BF640",
                    name: "Salankata Oreo Nutella",
                    description: "Crème brulee topped with caramelized sugar and consistent cream Milk, kunafa, hazelnut chocolate and Oreo biscuits Calories 1064",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C175C5DB817F4DB8806D1B5AC7205AC3",
                    name: "Salankate Kinder",
                    description: "Cream burielée, caramelized sugar, cream, cream, knafeh and kinder sauce calories 875.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/082716BC38062EC9F0FB15E871825492",
                    name: "Salankate lotus",
                    description: "Cream burielée, caramelized sugar, cream, cream, knafeh and lotus calories 690.",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DE1EC0AD7FD5F67F56C7CA2B59E19CC6",
                    name: "Salankate mango",
                    description: "Crème brulee topped with caramelized sugar and topped with cream, milk and cream; Kunafa and mango calories 659.",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/DEC5B0D635BA00A1674E35B014A5D8C9",
                    name: "Salankate Nutella",
                    description: "Crème brulee topped with caramelized sugar and consistent cream Milk, kunafa and hazelnut chocolate Calories 875",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/9E5F618081D6D8CFE295E1EAA4BE92DC",
                    name: "Salankate pecan",
                    description: "Cream burielée with caramelized sugar and topped with cream Consistent milk, cream, knafeh and pecan sauce 810 calories",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/58DD66896A656EFA7BD638BA442C0955",
                    name: "Salankate pistachio",
                    description: "Cream Borlée with caramelized sugar and topped with consistent cream Milk, cream, Kunafa, Pistachio sauce and pistachio Calories 740",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CD897C50D82DACF5CCDEC9BAE3CC5541",
                    name: "Salankate Pistachio Lotus",
                    description: "Crème brulee topped with caramelized sugar and creamed with milk and lotus powder and pistachio calories 875",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CBA2EB1DD640C0D25056EF770D9D1FDD",
                    name: "Salankate Rocher",
                    description: "Crème brulee topped with caramelized sugar and consistent cream milk and chocolate Ferrero Rocher Italian nuts calories 1120.",
                    price: "30.00",
                  },
                ]
              }
            },
            {
              name: 'Ambaleeh',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AD12E959AD2748C6526DBD5AE2F86FF5",
                    name: "Ambaleeh chocolate hazelnut",
                    description: "Crème brulee topped with caramelized sugar and topped with whipped cream, milk, cream and hazelnut chocolate",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/12A690991B0B08A7A7CBEA69B653F9BC",
                    name: "Ambaleeh is banana",
                    description: "Crème brulee topped with caramelized sugar and topped with whipped cream, milk, cream and banana",
                    price: "21.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8B435543D71BE3368282F206DB49099E",
                    name: "Ambaleeh Kinder",
                    description: "Cream burielée with caramelized sugar and topped with cream with milk cream and kinder sauce",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C02261ADD06FD61121BBA3321C098905",
                    name: "Ambaleeh lotus",
                    description: "Cream of Borlais with caramelized sugar and topped with cream with milk cream and lotus",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/B62DDCC4E05C855871195E6736111003",
                    name: "Ambaleeh mango",
                    description: "Crème brulee topped with caramelized sugar and topped with whipped cream, milk, cream and mango.",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AFD9B32CFD24D8F038FC5CA37E24F4F7",
                    name: "Ambaleeh nuts",
                    description: "Crème brulee topped with caramelized sugar and topped with whipped cream, milk, cream and nuts.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4E60A6F9EDB8F3F25C87527198ADA3CC",
                    name: "Ambaleeh Oreo",
                    description: "Crème brulee topped with caramelized sugar and topped with whipped cream, milk, cream and oreo",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D1B836890BAFB6EB3163D78CD8EF8D66",
                    name: "Ambaleeh pecan",
                    description: "A delicious dessert made from walnuts.",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5442F6CAD3B0D9A7305217516C82C4FC",
                    name: "Ambaleeh Pistachio",
                    description: "Cream burielette with caramelized sugar and topped with cream with milk and cream and pistachio sauce",
                    price: "26.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/D48C764EA3A55A06E8692B6E2A7BD574",
                    name: "Ambaleeh Rocher",
                    description: null,
                    price: "26.50",
                  },
                  {
                    image: "https://www.talabat.com/assets/images/img-placeholder.svg",
                    name: "Ambaleeh strawberry",
                    description: null,
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/BCBBD038863D8857E56C24C6D9D53DA4",
                    name: "Ambaleeh strawberry + banana",
                    description: null,
                    price: "24.00",
                  },
                ]
              }
            },
            {
              name: 'Jar',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A2280DC49C163B9AB5BD3B427D63E372",
                    name: "Nutella Jar",
                    description: null,
                    price: "18.00",
                  },
                ]
              }
            },
            {
              name: 'umm ali',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CDD785A7D93CCFA125E21FC3603055FE",
                    name: "Belgian tagine",
                    description: null,
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C8113B0D69DDE82EEE3AA5F83F2F90D2",
                    name: "umm ali + nuts",
                    description: null,
                    price: "19.50",
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763666881/%D0%91%D0%B5%D0%B7%D1%96%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%B8%CC%86_xpxvfz.mp4',
                    highlighted: true,
                    tags: {connect: [{slug: 'dessert'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/A09A70D5293F7A58934D45B02606D9F0",
                    name: "Umm Ali nuts + Italian Nutella",
                    description: null,
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/41E80CD5848118C15F61376BB81512A5",
                    name: "umm ali plain",
                    description: null,
                    price: "17.00",
                  },
                ]
              }
            },
            {
              name: 'Crepe',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CDBBDC053C397580F025293B20CDE422",
                    name: "Choco crepe",
                    description: "Crepe and Belgian chocolate. 270 calories per 100 grams",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/6C7BE894F22798F8D7C31C6BA3254A53",
                    name: "Dubai Crepe",
                    description: "Stuffed with kunafa and pistachio with chocolate sauce hazelnut and white chocolate from the top",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/492F4BC94EE37CCC850F0F9CCC060E1B",
                    name: "Oreo chocolate nuts crepe",
                    description: "280 calories per 100 grams",
                    price: "26.50",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763666650/%D0%91%D0%B5%D0%B7%D1%96%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%B8%CC%86_khdtol.mp4',
                    tags: {connect: [{slug: 'dessert'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C57F31720BA24ACFCB4582F3155E8E4D",
                    name: "Magnum Crepe",
                    description: "Stuffed with kunafa and pistachio with chocolate sauce hazelnut and white chocolate from the top With fudge cake",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'Additions Blaban',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/70A4D2B7F570B278F5815AC34994DE19",
                    name: "Add Aleppo Pistachio",
                    description: "A traditional dessert made from pistachios.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/E5FEC038B492B7B82C5877A2D281E2AC",
                    name: "Add Banana",
                    description: "Fresh bananas, excellent for adding to dishes.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4EABA07717BD9B23878C4EACE47EF874",
                    name: "Add Basbousa",
                    description: "60 g candy semolina cake dipped in syrup.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C8711B134D57CEA3B78293D6BFEDD66E",
                    name: "Add Kinder",
                    description: null,
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C301507BD8A1647E43D6036F801FD026",
                    name: "Add Kunafa",
                    description: "Sweet pastries stuffed with cheese or nuts.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/AA19E79105ABB8FF96FFF74539276B61",
                    name: "Add Lotus Powder",
                    description: "Flavor made from lotus seeds.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8E3F3B2454D4F4C0348097AC70C2D8DE",
                    name: "Add Lotus Sauce",
                    description: "Sweet sauce made from lotus flowers.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/0009CF8000472F558475B30DC5C7D308",
                    name: "Add Mango",
                    description: "Fresh mango slices, perfect for desserts.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/31F3032D2194A29D93D9DEF2AC7D70CD",
                    name: "Add Nutella",
                    description: "Chocolate cream and hazelnut.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/5CE5EF1643887BA15911FA7AD88E2E9C",
                    name: "Add Nuts",
                    description: "A variety of nuts.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/CF4A203BAFFFFCE22F530D9BE59DCF53",
                    name: "Add Oreo",
                    description: "Add crushed Oreo biscuits for flavor",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/4336BF80041B4D0D00DA85C5259842AC",
                    name: "Add Pistachio Sauce",
                    description: "Creamy sauce made from pistachios.",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/7DF2BEB0D106B6FBC97F8223F78DC868",
                    name: "Add Rocher Sauce",
                    description: "Chocolate sauce inspired by Ferrero Rocher",
                    price: "7.50",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/01412A588C8EED20F4E106D4422D8224",
                    name: "Mineral Water",
                    description: "Refreshing water.",
                    price: "2.50",
                  },
                ]
              }
            },
          ]
        }
      }
    }
  },
  {
    name: 'Zaroob', // https://www.talabat.com/uae/restaurant/30281/zaroob-%D8%B2%D8%A7%D8%B1%D9%88%D8%A8-szr?aid=1256
    country: 'UAE',
    city: 'Dubai',
    address: 'Zaroob Restaurant - Sheikh Zayed Road Shop 1 - Sheikh Zayed Rd - Trade Center Second - DIFC',
    latitude: 25.2134595,
    longitude: 55.2776381,
    placeId: 'ChIJJ6ELNoxCXz4RdR1oqL6il1g',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Offers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4b130662e7f3261e3a183b7d74a96931.jpeg",
                    name: "NEW! Mini Sourdough Box",
                    description: "One box. Five flavors. Endless joy. Pick 5 of your favorite sourdoughs in mini size and taste them all in one go.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/6dfc6603269f90bc865877cb2137c712.jpeg",
                    name: "Shawarma Combo",
                    description: "Chicken shawarma platter served with fries or rice, and fattoush (half-portion).",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/db1f185c1a7cdb756a52c70b91def223.jpeg",
                    name: "Tawouk Platter Meal",
                    description: "2 skewers of charcoal-grilled chicken tawouk served with Zaroob's French fries, mixed pickles, garlic sauce, fresh bread, and a choice of side.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/70741fe80adaad7bb945f70cb3e5d45e.jpeg",
                    name: "BYO Slider Box",
                    description: "Enjoy 12 freshly baked sliders stuffed with your favourite shawarma, grills or falafel with your options of 3 sides",
                    price: "59.00",
                  },
                ]
              }
            },
            {
              name: 'Puck x Zaroob',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0a780505f525b669851175b310faf24f.jpeg",
                    name: "Puck Onion & Parsley Fateer",
                    description: "A Levantine classic with a twist - creamy Puck cheese mixed with white onion, parsley, and fresh thyme, all baked in soft traditional fateer bread and finished with a cheesy drizzle on top.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/930a890f3fef6825c19aa0a574589b32.jpeg",
                    name: "Puck & Chips Oman Fateer",
                    description: "The street snack everyone loves - creamy Puck cheese with crunchy Chips Oman, layered inside warm fateer bread and topped with extra cheese drizzle and a crunch that hits different.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/e2bc43f830b52620734f187642389ef6.jpeg",
                    name: "Puck Sujuk & Cheese Fateer",
                    description: "Bold and loaded creamy Puck cheese with juicy sujuk, mayo drizzle, diced tomatoes, and pickles, all wrapped in freshly baked fateer bread. Pure street flavor.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/de42a510ceb81647b30c8c015efa69c1.jpeg",
                    name: "Puck Turkey & Cheese Fateer",
                    description: "Creamy Puck cheese with turkey slices, melted mozzarella, and our secret mustard sauce - topped with diced tomato and pickles for that perfect bite every time.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/cf7402bf16b64c6d39cce5d09f7c8023.jpeg",
                    name: "Puck & Honey Fateer",
                    description: "Simple. Sweet. Addictive. Creamy Puck cheese with honey in a warm, flaky fateer that melts in your mouth.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/56779aeecb89989c972e5063f590c854.jpeg",
                    name: "Puck Choco Peanut Fateer",
                    description: "Nutella topped with Puck cheese drizzle, peanut butter, honey, and a sprinkle of fresh pistachio. A street dessert that slaps.",
                    price: "31.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/5309cb7cfc207bc9bad81d59340e8986.jpeg",
                    name: "Puck Dip",
                    description: "Smooth, creamy Puck cheese dip - perfect with anything (or everything).",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/ce066104d999c99b23131bfd2546e073.jpeg",
                    name: "Puck Zaatar Dip",
                    description: "Creamy Puck cheese blended with our special zaatar mix - tangy, herby, and seriously addictive.",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a358791b65bddcc2038717ce1815ffec.jpeg",
                    name: "Spicy Puck Dip",
                    description: "Creamy Puck cheese with a spicy kick - bold, fiery, and made for flavor chasers.",
                    price: "5.00",
                  },
                ]
              }
            },
            {
              name: 'Sourdough Manakeesh',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/fc36a161489150314bb0647e2c189ada.jpeg",
                    name: "Za'atar Sourdough",
                    description: "A vibrant mix of za’atar, olive oil, and sumac on sourdough, finished with chopped tomatoes and crisp onions for a fresh twist!",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/02f8ad7a4bbaf2f10f5833a460cfeead.jpeg",
                    name: "Cheese Sourdough",
                    description: "A secret cheese blend with a touch of fresh parsley, perfectly melted on crispy sourdough. Bite in and experience next-level cheesiness!",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/baa0350914b1acba326b1893597822fa.jpeg",
                    name: "Lahme & Debs Sourdough",
                    description: "Juicy minced beef, infused with warm spices and drizzled with rich pomegranate molasses and pomegranate seeds. A classic with a sourdough twist!",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0b408acb615fbfe812adb1fbf620bb11.jpeg",
                    name: "Mousakhan Sourdough",
                    description: "Sumac-spiced chicken, caramelized onions, special yoghurt sauce, and toasted pine nuts layered on a golden sourdough crust. A Palestinian favorite, reimagined!",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a3fc630eb7e71fb2e62cd41427d3ccf9.jpeg",
                    name: "Turkey & Cheese Sourdough",
                    description: "Smoked turkey + melted cheese = the ultimate comfort. Now with a crispy sourdough crunch, topped with cherry tomatoes and a drizzle of mayo-mustard.",
                    price: "33.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/91395880ecd0634207c0215678e57bcf.jpeg",
                    name: "Chocolate Peanut Butter Sourdough",
                    description: "Warm sourdough stacked with peanut butter, Nutella, melty cheese, banana slices, and a sprinkle of halawa. Sweet, salty, messy—and totally worth it.",
                    price: "29.00",
                  },
                ]
              }
            },
            {
              name: 'Mezza',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/701f73959b3c2027e3f5497358bdd9d5.jpeg",
                    name: "Hummus",
                    description: "Mashed chickpeas mixed with tahini, lemon, and drizzled with olive oil, served with fresh bread.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/077612b1463d3c50d315f34c15f49b4c.jpeg",
                    name: "Hummus w. Meat & Nuts",
                    description: "Hummus topped with meat and nuts, served with fresh bread",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/bde85aadb81f05d292fe038987bc1d82.jpeg",
                    name: "Moutabbal",
                    description: "Grilled eggplant blended with tahini, garlic, and lemon juice topped with pomegranate seeds, served with fresh bread",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/bfb5ab782da6477c08c1fdafe5cd2706.jpeg",
                    name: "Lentil Soup",
                    description: "Smoothly blended lentils drizzled with a squeeze of lemon, topped with fried pita bread.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/6d884fa53f1c2e0ae7519432fe073485.jpeg",
                    name: "Spicy Potatoes",
                    description: "Fried potato cubes tosed in our special shatta spices",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/6867c19327212158d23f589322cd20dd.jpeg",
                    name: "Tawouk Provencal",
                    description: "Juicy grilled chicken tawouk and potato cubes tossed with garlic and fresh coriander for a flavorful twist on a classic favorite.",
                    price: "33.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/e470c90ff0a4786643f383264d787042.jpeg",
                    name: "Zaroob's French Fries",
                    description: "A must try! Crispy French fries topped with Zaroob's spice mix",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b216d7cc3fbf05e8c9fae501f3d0fec5.jpeg",
                    name: "French Fries",
                    description: "Crispy French fries topped with sea salt",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/fc42eedbaae4bda44ea9ca7d3dc68b67.jpeg",
                    name: "Cheese Rolls",
                    description: "4 PCS of Cheese rolls, stuffed with mozarella, Akawi and parsley, rolled up in pastry dough",
                    price: "23.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/ee07993e640fbace1432e29ffd29e937.jpeg",
                    name: "Meat Sambousek",
                    description: "5 pieces of meat sambousek, stuffed with ground beef, onion, pine nuts, pomegranate molasses and mint stuffed.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b88241e1d97ae14d7e9292af8abb8bef.jpeg",
                    name: "Spinach Fatayer",
                    description: "5 pieces of spinach fatayer, stuffed with spinach, onion, lemon and pomegranate molasses.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/666add079113b00cfe209ed1de339f4a.jpeg",
                    name: "Grilled Halloumi",
                    description: "Grilled halloumi, cherry tomatoes, black sesame seeds, mint leaves, served with fresh bread.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f6efe185ce73ac1da828cd34743dc5d9.jpeg",
                    name: "Fried Halloumi",
                    description: "Fried halloumi cheese chunks served with cherry tomatoes, cucumber and olives on the side",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/c851b8c92b0960f84ff6905984fcc2dc.jpeg",
                    name: "Zaroob's Labneh",
                    description: "Labneh mixed with fresh vegetables, served with zaatar crackers",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/d7234dad273cccff291fbf014899b06e.jpeg",
                    name: "Mousakhan Rolls",
                    description: "4 pieces of Mousakhan rolls stuffed with chicken and onion, seasoned with sumac, and rolled inside our pita bread, served with plain yogurt on the side",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b7d8a11263ba47177379e941f98dd668.jpeg",
                    name: "Vine leaves",
                    description: "Vine leaves stuffed with seasoned rice, tomatoes, and parsley, garnished with a drizzle of olive oil.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7b57c0704ecce925f15d7560bd065488.jpeg",
                    name: "Makanek",
                    description: "Spiced Lebanese sausages cooked with pomegranate molasses, lemon juice, served with fresh bread.",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/dbb05a2562c8d94b4d985860f9f8afed.jpeg",
                    name: "Soujouk",
                    description: "Spicy beef Soujouk sausage with tomatoes and onions, served with fresh bread.",
                    price: "35.00",
                  },
                ]
              }
            },
            {
              name: 'Shawarma',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/376c6a3f2cc238197486c14a1fc0a799.jpeg",
                    name: "Chicken Shawarma Sandwich",
                    description: "Chicken shawarma, cucumber pickles, French fries, garlic sauce, wrapped in your choice of bread",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/6f4c682f3eeb6a66eed1a9e7769026eb.jpeg",
                    name: "Beef Shawarma Sandwich",
                    description: "Beef shawarma, cucumber pickles, tomato, biwaz, tahini sauce, wrapped in your choice of bread",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/3bce21e949aca2c785aea874a993867f.jpeg",
                    name: "Beef Shawarma Platter",
                    description: "Beef shawarma served with Zaroob's French fries, mixed pickles, biwaz, tahini sauce, and fresh bread on the side",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/8b1f135b24b7445b5fe9d5e4dc32d8a4.jpeg",
                    name: "Hummus w. Beef Shawarma",
                    description: "Hummus topped with beef shawarma and nuts, served with fresh bread",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f49e1507fc331c6f7a74e5a55350d3d7.jpeg",
                    name: "The Vegan Impossible™ Shawarma Pita",
                    description: "The first shawarma in the world made with Impossible™ meat, accompanied by cucumber pickles, tomatoes, biwaz, and drizzled with our vegan tahini sauce, all wrapped in pita bread",
                    price: "21.00",
                  },
                ]
              }
            },
            {
              name: 'Zaroob Subs',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/09582b6e3355b170aff0d79da5e85419.jpeg",
                    name: "The Vegan Impossible™ Shawarma Saj",
                    description: "The first shawarma in the world made with Impossible™ meat, accompanied by cucumber pickles, tomatoes, biwaz, and drizzled with our vegan tahini sauce, all wrapped in saj bread",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/d7f2abbdf517ee9ccb10de107c1e03ff.jpeg",
                    name: "The Vegan Impossible™ Shawarma Saj Platter",
                    description: "The first Shawarma in the world made with Impossible™ meat, wrapped in saj bread, served with Zaroob's French fries, mixed pickles, and our vegan tahini sauce on the side.",
                    price: "49.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/1a41d519fd191ee0f2651182f6ba2692.jpeg",
                    name: "NEW! Chicken Liver Sub",
                    description: "The latest addition to our Zaroobian Subs collection! Toasted bread layered with chicken liver, tomato slices, pickles, mint leaves, and a touch of garlic sauce.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/32c7e223948e671ff55593d40955ae22.jpeg",
                    name: "NEW! Roast Beef Sub",
                    description: "The latest addition to our Zaroobian Subs collection! Toasted bread filled with roast beef slices, tomatoes, pickles, mint leaves, and a blend of mayo and mustard.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f2c9e9279d5f081059bf89dcfeb43bcd.jpeg",
                    name: "Francisco Sub",
                    description: "Toasted bread stuffed with soya-marinated chicken, lettuce, pickles, corn, and a creamy mayo drizzle.",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/31640aca4fa46d6930dcf9b12adb6392.jpeg",
                    name: "Grilled Chicken",
                    description: "Zaroobian specialty ! Toasted bread filled with grilled chicken, pickles, and creamy garlic spread—perfectly balanced for a flavourful bite.",
                    price: "29.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762857452/sandwitch_zkop1c.mp4',
                    tags: {
                      connect: [
                        {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-beef'}, {slug: 'no-pork'}, {slug: 'no-shellfish'}, {slug: 'mild'},
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/8ecf967208be41bd3445df6b4fbc9de2.jpeg",
                    name: "Sujuk Sub",
                    description: "Zaroobian specialty !Toasted bread loaded with flavorful sujuk,  pickles, fresh tomatoes, and creamy mayonnaise !",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/2c478925a839135c2e366ed1227d8540.jpeg",
                    name: "Tawouk Sub",
                    description: "Zaroobian specialty ! Toasted stuffed with shish tawook, smoked turkey slices, melted cheese, crispy fries, coleslaw, pickles, and a mix of mayonnaise, garlic sauce, and ketchup—an explosion of flavours!",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/90fbcda593831164cd249b1a401c1e5c.jpeg",
                    name: "Kafta Sub",
                    description: "Zaroobian specialty ! Toasted bread with Kafta fresh tomatoes, pickles, and creamy mayonnaise—feel the crunch with every bit !",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b09d610a7b20b32ecd7c643bb3c8ee3e.jpeg",
                    name: "Makanek Ohannes Sandwich",
                    description: "Makanek, tomato, pickles & fries — dripping with molasses and attitude.",
                    price: "32.00",
                  },
                ]
              }
            },
            {
              name: 'Sliders Box',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/113d5ef2ec65d3914e4bffa87e2c88b4.jpeg",
                    name: "Slider Box for 1",
                    description: "Eating solo? Pick your favorite 6 freshly baked sliders, served with your choice of mezza and a dip.",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/2dfcaf70d4b4319e1b41fe5d2d062055.jpeg",
                    name: "Breakfast Slider Box",
                    description: "Enjoy 12 freshly baked sliders stuffed with your favourite breakfast items served with a side of mixed pickles, olives & mustard sauce.",
                    price: "66.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a06c2586ffcf84a0b7fcf24c2c097da7.jpeg",
                    name: "Shawarma Slider Box",
                    description: "Enjoy 12 freshly baked sliders stuffed with your favourite shawarma with your options of 3 sides",
                    price: "79.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b10d513f1faf1a6dc534063e9efdd986.jpeg",
                    name: "Grills Slider Box",
                    description: "Enjoy 12 freshly baked sliders stuffed with your favourite grills with your options of 3 sides",
                    price: "69.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7e9a5400b80921ddfe096abb3e56ce5f.jpeg",
                    name: "Falafel Slider Box",
                    description: "Enjoy 12 freshly baked sliders stuffed with your favourite falafel with your options of 3 sides",
                    price: "42.00",
                  },
                ]
              }
            },
            {
              name: 'Zaroob Pockets',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/2a5cbfb5de89361a76e14d3949dbb4b8.jpeg",
                    name: "Falafel Pocket",
                    description: "Crispy falafel, fresh veggies, pickles, and tahini, all tucked into warm Lebanese bread. Same classic taste, just easier to grab & go!",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/57a6eb9e301b3b1041cd281e7d530000.jpeg",
                    name: "Chicken Shawarma Pocket",
                    description: "The All-Time Favorite chicken shawarma, now pocket-sized! Juicy marinated chicken, crispy fries, garlic sauce, lettuce and pickles—all wrapped in soft Lebanese bread.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/ff091ee235a1b3bee4a564cc2efa211e.jpeg",
                    name: "Beef Shawarma Pocket",
                    description: "Big flavors, small package! Tender beef shawarma, biwaz, tomato, tahini, and pickles, packed inside fresh Lebanese bread.",
                    price: "24.00",
                  },
                ]
              }
            },
            {
              name: 'Grills',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/d374210ad6aae8fb5263952b325d97c2.jpeg",
                    name: "Tawouk Platter",
                    description: "2 skewers of charcoal-grilled chicken tawouk served with Zaroob's French fries, mixed pickles, garlic sauce, and fresh bread on the side",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0e4a8f35d71d1b9ca895f8211d74eebd.jpeg",
                    name: "Kafta Platter",
                    description: "3 skewers of charcoal-grilled kafta served with Zaroob's French fries, mixed pickles, biwaz, hummus, grilled tomatoes, grilled onions, and fresh bread on the side",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/86dbb20d329979cf17875f2cd193bcb9.jpeg",
                    name: "Mixed Grill Platter",
                    description: "1 chicken tawouk skewer, 1 kabab Khachkhach skewer, 1 kafta skewer served with Zaroob's French fries, mixed pickles, biwaz, hummus, garlic sauce, grilled tomatoes, grilled onions,  and fresh bread on the side",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/024cd86c248849f4fba7510f11887763.jpeg",
                    name: "Half Grilled Chicken",
                    description: "Half charcoal-grilled chicken served with Zaroob's French fries, mixed pickles, garlic sauce, spicy garlic sauce, and fresh bread on the side",
                    price: "47.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/6d74c2b787def2bef02ae7aabebc7e9b.jpeg",
                    name: "Full Grilled Chicken",
                    description: "Full charcoal-grilled chicken served with Zaroob's French fries, mixed pickles, garlic sauce, spicy garlic sauce, and fresh bread on the side",
                    price: "85.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0e2cfd3872cf9a5f26e146a9c8a4827a.jpeg",
                    name: "Tawouk Sandwich",
                    description: "Charcoal-grilled chicken tawouk, garlic sauce, cucumber pickles, and French fries, wrapped in pita bread.",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/c2a4bc3d0b2cfbb199be01c7e4251af0.jpeg",
                    name: "Kafta Sandwich",
                    description: "Charcoal-grilled kafta, hummus, grilled tomatoes, and cucumber pickles, wrapped in pita bread",
                    price: "25.00",
                  },
                ]
              }
            },
            {
              name: 'Zaroob\'s Boxes',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/74b66c98b72a7bca4cf2a17065ded55a.jpeg",
                    name: "The Baker's Box",
                    description: "3 manakeesh to share: akkawi cheese, za'atar and lahem b'ajeen - served with a yogurt dip.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/42f4192ddd404b90d4154989ee26f1d8.jpeg",
                    name: "Shawarma Sharing Box",
                    description: "Perfect for sharing! 15 pieces of beef or chicken Shawarma with 2 sides and dips of your choice",
                    price: "99.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4d5f75e1643f153bf4d319057a5f1b8e.jpeg",
                    name: "Shawarma Party Box",
                    description: "Perfect for parties! 25 pieces of chicken or beef shawarma.",
                    price: "109.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4d6a547cfba20d567737dbc13ba84916.jpeg",
                    name: "Giant Double Shawarma Sharing",
                    description: "Ready to conquer the giant? 40 pcs of chicken or beef shawarma",
                    price: "179.00",
                  },
                ]
              }
            },
            {
              name: 'Crave & Save!',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4b130662e7f3261e3a183b7d74a96931.jpeg",
                    name: "NEW! Mini Sourdough Box",
                    description: "One box. Five flavors. Endless joy. Pick 5 of your favorite sourdoughs in mini size and taste them all in one go.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/6dfc6603269f90bc865877cb2137c712.jpeg",
                    name: "Shawarma Combo",
                    description: "Chicken shawarma platter served with fries or rice, and fattoush (half-portion).",
                    price: "50.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/db1f185c1a7cdb756a52c70b91def223.jpeg",
                    name: "Tawouk Platter Meal",
                    description: "2 skewers of charcoal-grilled chicken tawouk served with Zaroob's French fries, mixed pickles, garlic sauce, fresh bread, and a choice of side.",
                    price: "52.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/70741fe80adaad7bb945f70cb3e5d45e.jpeg",
                    name: "BYO Slider Box",
                    description: "Enjoy 12 freshly baked sliders stuffed with your favourite shawarma, grills or falafel with your options of 3 sides",
                    price: "59.00",
                  },
                ]
              }
            },
            {
              name: 'Manakeesh',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/082609ea87a42d2ce248bdf87ff88b9a.jpeg",
                    name: "Za'atar Man'oushe",
                    description: "Za'atar mix, spread on freshly baked manakeesh dough",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a8e802eca77596d798fd4380e1bcc190.jpeg",
                    name: "Akkawi Cheese Man'oushe",
                    description: "Akkawi Cheese, spread on freshly baked manakeesh dough",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b7872c5fef7605ce32f0619256e28c54.jpeg",
                    name: "Double Decker Man'oushe",
                    description: "A MUST TRY! Two-layer man'oushe, filled with akkawi cheese and topped with a layer of our Za'atar mix",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a527694cec9befc5b0d6137526e3cb29.jpeg",
                    name: "Lahem B'ajeen Man'oushe",
                    description: "Freshly baked manakeesh dough, topped with a mixture of minced meat, tomatoes, and onions.",
                    price: "19.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/87b7dcc4c22d47d54781148d45aa9b9a.jpeg",
                    name: "Kashkaval Cheese Man'oushe",
                    description: "Kashkaval Cheese, spread on freshly baked manakeesh dough",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/515021204b5e46827b5a861c04eee5ef.jpeg",
                    name: "Zaroob's Cheese Mix Man'oushe",
                    description: "Freshly baked manakeesh dough topped with our own cheese mix of Akkawi, Halloumi, and Kashkaval cheese",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4383c6fabc4719668d8dcec27e6a9fd9.jpeg",
                    name: "Za'atar & Cheese Manoushe",
                    description: "Za'atar mix and akkawi cheese, spread on freshly baked manakeesh dough",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/8d71ad12675652cbebb1aa92978ea0c8.jpeg",
                    name: "Halloumi Cheese Man'oushe",
                    description: "Halloumi cheese, spread on freshly baked manakeesh dough",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/1891a5d1715e6fde00bfbf2d34c6289c.jpeg",
                    name: "Za'atar & Labneh Man'oushe",
                    description: "Za'atar mix and labneh, spread on freshly baked manakeesh dough",
                    price: "15.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/b591a935820b07965da7777135fae6b4.jpeg",
                    name: "Eggs & Awarma Man'oushe",
                    description: "Freshly baked manakeesh dough, topped with a mixture eggs, cheese & awarma",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'Wraps',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/aa47b989c7f847f1394ab2a841925e1d.jpeg",
                    name: "Dynamite Chicken Shawarma Wrap",
                    description: "Chicken shawarma, lettuce, cucumber pickles, cheese, French fries, garlic sauce and dynamite sauce wrapped in freshly baked manakeesh dough",
                    price: "34.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/79670836ca3e6732891e24aef4ef31a5.jpeg",
                    name: "Chicken Wrap",
                    description: "Marinated tender chicken, lettuce, tomatoes, and cucumber pickles served with garlic sauce, wrapped in freshly baked manakeesh dough",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/861f625880dcf649c526ad8567664062.jpeg",
                    name: "Kafta Wrap",
                    description: "Fresh lamb meat minced with onions and fresh parsley, topped with tomato, cucumber pickles and mayonnaise, wrapped in freshly baked manakeesh dough",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/149602bb1228c2c11dbf5b7f54b1511d.jpeg",
                    name: "Tawouk Wrap",
                    description: "Chicken tawouk , cucumber pickles, French fries, coleslaw, cheese, ketchup and garlic sauce, wrapped in freshly baked manakeesh dough.",
                    price: "34.00",
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763669469/%D0%91%D0%B5%D0%B7%D1%96%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%B8%CC%86_nxzvvo.mp4',
                    highlighted: true,
                    tags: {
                      connect: [
                        {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-beef'}, {slug: 'no-pork'}, {slug: 'no-shellfish'}, {slug: 'mild'},
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/2649cf970885982c4581cd3c7620b3e4.jpeg",
                    name: "Smoked Turkey Wrap",
                    description: "Sliced turkey deli meat, cheese, lettuce, tomato, cucumber pickles and mayo-mustard mix, wrapped in freshly baked manakeesh dough",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/2250a7babf84566bdde1925685b4836c.jpeg",
                    name: "Soujouk Wrap",
                    description: "Spicy soujouk ,tomato, cucumber pickles, lettuce and mayonnaise, wrapped in freshly baked manakeesh dough.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f4ab813ee0f7c9ce0a3167555d46ae0a.jpeg",
                    name: "Hotdog and Cheese Wrap",
                    description: "Hotdog, cheese, mayonnaise and ketchup, wrapped in freshly baked manakeesh dough",
                    price: "28.00",
                  },
                ]
              }
            },
            {
              name: 'Abou Shady\'s Forever Faves',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/be44c39939c50e095584c28c068bb762.jpeg",
                    name: "The Exclusive Abu Shadi Box 🥇",
                    description: "Pick any 3 of Abu Shady’s favorite dishes — served with a fresh veggie plate on the side. That’s the Abu Shady way.",
                    price: "59.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4bf81e67017326a1e20228a890fd66e9.jpeg",
                    name: "Foul",
                    description: "Fava beans with lemon & garlic — Abu Shady made it so good, they named him The Foul Man.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/d677c2566b47fc9383ca00b5f1fa752b.jpeg",
                    name: "Balila",
                    description: "Chickpeas with cumin and lemon — the snack Abu Shady eats while gossiping with the baker.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/cc37808a4216b7c7a04010d4a8d87731.jpeg",
                    name: "Musabaha",
                    description: "Chunky hummus with whole chickpeas — Abu Shady eats it straight from the pot, no plate.",
                    price: "25.00",
                  },
                ]
              }
            },
            {
              name: 'Zaroob Street Cups',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/68fae301e7369ad2d27278a9f176543f.jpeg",
                    name: "Koshary On-the-Go",
                    description: "Cairo’s street food king, now in a cup! A bold mix of lentils, rice, and macaroni, stacked with crispy fried onions, chickpeas, and that iconic tangy tomato sauce.",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/17a6f0a1d7d6d3f37c833ba87981788b.jpeg",
                    name: "Oriental Chicken On-the-Go",
                    description: "Pure comfort, the Zaroob way! Seasoned minced beef cooked with rice and loaded with juicy shredded chicken, crunchy almonds, and golden cashews, served with tangy yogurt and warm gravy.",
                    price: "32.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/9706b0f67206ac9eef4ca6115cbb0f78.jpeg",
                    name: "Oriental Beef On-the-Go",
                    description: "A true classic, leveled up! Spiced rice piled with tender beef, crunchy almonds, and golden cashews. Served with tangy yogurt and rich, warm gravy for that bold, homestyle taste.",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/3183bb50073212b39c6ff737aacfee10.jpeg",
                    name: "Mansaf On-the-Go",
                    description: "The Jordanian OG - Zaroobified! Fluffy yellow rice stacked with fall-off-the-bone lamb, crunchy nuts, and fresh herbs. Served with a side of rich, tangy jameed sauce for that extra Mansaf magic.",
                    price: "43.00",
                  },
                ]
              }
            },
            {
              name: 'Homemade Levant Dishes',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f876712c3316836fdba2ff6c06db6524.jpeg",
                    name: "Koshari",
                    description: "Vermicelli rice, lentils, macaroni, spaghetti, and chickpeas mixed together with tomato sauce, topped with crispy onions, served with koshari shatta and dukkah on the side.",
                    price: "27.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/ad143b9676aad0550ffb4ee6563f8f19.jpeg",
                    name: "Oriental Rice with Chicken",
                    description: "Lebanese seasoned minced beef cooked with rice and oriental spices, topped with mixed nuts and roasted chicken",
                    price: "42.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/121889e02acd6dbb09031d2be599391e.jpeg",
                    name: "Dawood Bacha",
                    description: "Levantine-style meatballs and caramelized onions cooked in tomato sauce, topped with mixed nuts, and served with vermicelli rice on the side",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/c358cbd5baf65ac2de05d88fecd84b09.jpeg",
                    name: "Okra & Rice",
                    description: "Stewed okra with tender meat chunks, topped with roasted nuts and fresh coriander, served with vermicelli rice.",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/19805fba06b392fc40b21726bda82c45.jpeg",
                    name: "Chicken Mouloukhiye",
                    description: "Traditional Mouloukhiye cooked with tender poached chicken, served with Egyptian rice, vinegar, and fresh Arabic Bread",
                    price: "48.00",
                  },
                ]
              }
            },
            {
              name: 'Falafel',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/493c90a598f8549a41a35959de7ecd18.jpeg",
                    name: "Falafel (6-12 PCS)",
                    description: "6 or 12 pieces of falafel, served with tahini sauce and turnip pickles on the side",
                    price: "9.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/e12d2b594d01b8751ceb0e2044714b43.jpeg",
                    name: "Falafel Sandwich",
                    description: "Falafel, turnip pickles, cucumber pickles, tomato, mint, lettuce, drizzled with tahini sauce, and wrapped in your choice of bread",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/bfd38c3844bbe7e3d62d8506d8663623.jpeg",
                    name: "Falafel Platter",
                    description: "Six falafel pieces served with mixed pickles, fresh vegetables, hummus, tahini, and fresh bread.",
                    price: "21.00",
                  },
                ]
              }
            },
            {
              name: 'Salads',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/ae83fdec18d737119f62dfe6524d9e34.jpeg",
                    name: "Fattoush",
                    description: "Lettuce, rocca, cucumber, radish, tomato, and purslane leaves mixed with pomegranate molasses dressing, topped with fried bread.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4255831d6b144a611e0c0b287b7e2118.jpeg",
                    name: "Tabbouleh",
                    description: "Chopped parsley mixed with tomatoes, onions and lemon oil dressing.",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/4e3844c85efabd4a0e2b07c8b43ebfd1.jpeg",
                    name: "Rocca Beetroot Salad",
                    description: "Fresh rocca leaves mixed with roasted beetroot, white sesame seeds, and sumac, drizzled with lemon juice and olive oil.",
                    price: "25.00",
                  },
                ]
              }
            },
            {
              name: 'All Day Breakfast & Eggs',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/cf6d23d285cf2fce2232defd814d9832.jpeg",
                    name: "Eggs Your Way",
                    description: "Your choice of scrambled, omelette, or sunny side up eggs, served with fresh bread.",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/449582eb46fede4d6dae61e0d98da5c7.jpeg",
                    name: "Eggs & Potato",
                    description: "Diced potatoes mixed with scrambled eggs and onions, topped with fresh parsley, served with fresh bread",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a0d40ec867885a103b6dc22345d27e60.jpeg",
                    name: "Shakshouka",
                    description: "Peeled fresh tomatoes scrambled with eggs, garlic and chili, served with fresh bread",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f370aa117358ec7ddc156d1f7b29131b.jpeg",
                    name: "Eggs & Soujouk",
                    description: "Soujouk sausage mixed with scrambled eggs, served with fresh bread",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/bdd63bafab8a0a478ea0778625053090.jpeg",
                    name: "Eggs & Awarma",
                    description: "Awarma mixed with scrambled eggs, served with fresh bread",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/954422e64165854b5759f50aa2ebe3d5.jpeg",
                    name: "Fresh & Pickled Vegetables platter",
                    description: "Fresh tomatoes, cucumber, mint leaves, olives and mixed pickles",
                    price: "7.00",
                  },
                ]
              }
            },
            {
              name: 'Moujjannet',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/fafaf2bea502f1a6a814f5c0feb75858.jpeg",
                    name: "Mini Hot Dog Bites",
                    description: "Your choice of 1, 3, 6 or 12 of Hot Dog Bites",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/42f0db3ff8363edbe8f642ea6073a012.jpeg",
                    name: "Mini Pizza",
                    description: "Your choice of 1, 3, 6 or 12 Mini Pizzas",
                    price: "4.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/1e61557b43e0fb6b98bcf99bb38fbfa8.jpeg",
                    name: "Mini Lahm Baajine",
                    description: "Your choice of 1, 3, 6 or 12 Mini Lahm Baajine",
                    price: "4.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a29c5c41ec1780d148dd27f55f8e533f.jpeg",
                    name: "Mini Spinach",
                    description: "Your choice of 1, 3, 6 or 12 Spinach",
                    price: "4.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0e9e9fc8a1be028b2fc791bf4a3e93b9.jpeg",
                    name: "Mini Zaatar",
                    description: "Your choice of 1, 3, 6 or 12 of Zaatar",
                    price: "2.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762858723/get_3_mbyvo8.mp4',
                  },
                ]
              }
            },
            {
              name: 'The Ultimate Gathering',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/c3a9ac7a7d10e9455fae853f300204e4.jpeg",
                    name: "The Ultimate Mezza ( Minimum 2)",
                    description: "A selection of two hot or cold mezzas — perfect for your next ultimate gathering experience!",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/156055f2d81967e40f04cb00177ee585.jpeg",
                    name: "The Ultimate Breakfast ( Minimum 2)",
                    description: "A selection of two Breakfast Items— perfect for your next ultimate gathering experience!",
                    price: "60.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/488ba2e5b1664e29880b1b00b5ae875b.jpeg",
                    name: "Shish Tawouk",
                    description: "Charcoal-grilled chicken tawouk served with Zaroob's French fries, mixed pickles, garlic sauce, and fresh bread on the side. Serves 4-6 People",
                    price: "125.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0db8701c2676439a35ebf3ded7edec4b.jpeg",
                    name: "Kafta",
                    description: "Charcoal-grilled kafta served with Zaroobs French fries, mixed pickles, biwaz, hummus, grilled tomatoes, grilled onions, and fresh bread on the side. Serves 4-6 People",
                    price: "155.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/1b327bbb41cb80cb911d662c2b175dd9.jpeg",
                    name: "Mixed Grill",
                    description: "tawouk ,kabab Khachkhach & kafta skewers served with Zaroobs French fries, mixed pickles, biwaz, hummus, garlic sauce, grilled tomatoes, grilled onions, and fresh bread on the side. Serves 4- 6 people",
                    price: "180.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7af53c3679c1d2a4b60fba565a70d0fb.jpeg",
                    name: "Oriental Chicken Rice",
                    description: "Seasoned minced beef cooked with rice and oriental spices, topped with mixed nuts and roasted chicken, served with laban and gravy sauce on the side. Serves 4-6 People",
                    price: "110.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/dc8cf7ae7965885c1163300cdd1bcac7.jpeg",
                    name: "Fattouch",
                    description: "Lettuce, cucumber, radish, tomato, fresh thyme, and purslane leaves mixed with pomegranate molasses dressing, topped with toasted sesame seeds, fried bread, and fresh pomegranate seeds. Serves 4 to 6 People",
                    price: "60.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7f33c7a094c987b0456d0dbbc8a315ef.jpeg",
                    name: "Tabboule",
                    description: "Chopped parsley mixed with tomatoes, onions and lemon oil dressing. Serves 4-6 People",
                    price: "65.00",
                  },
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/e00cb3396a9d5cea1b6305ca65e66dc5.jpeg",
                    name: "Lazy Cake Dabke",
                    description: "x4 pcs made with Dabke biscuits and rich chocolate, this classic brings you that perfect balance of crunch and fudgy goodness—simple, nostalgic, and irresistible",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/5a46097df86d6b46576de9fe313c4213.jpeg",
                    name: "Baskot w Raha",
                    description: "x3 Biscuits filled with silky Raha and fully dipped in rich chocolate! A perfect bite of Levantine sweetness with a chocolatey twist!",
                    price: "28.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/de0652ec3b20461b5a1e5dfbd6af5e0f.jpeg",
                    name: "Umm Ali",
                    description: "Baked puff pastry with sweetened milk and cream, topped with raisins.",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/3ba2888109433030cb3999daedacf69b.jpeg",
                    name: "Banana Nutella Fateer",
                    description: "Traditional baked Arabic pastry dough topped with Nutella chocolate spread and chunky banana pieces",
                    price: "24.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/bed096418ba091187fceda1b26f5d887.jpeg",
                    name: "Konafah",
                    description: "Sweet cheese topped with warm semolina dough and soaked in sugar syrup and orange blossom water, served with sugar syrup on the side",
                    price: "29.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/6a0a0df458f5f94e23249100cdc6ecbe.jpeg",
                    name: "Ashta with Fruits & Honey",
                    description: "Creamy Ashta topped with fresh strawberries, banana slices, and a sprinkle of crushed pistachios, drizzled with golden honey in Arabic",
                    price: "35.00",
                  },
                ]
              }
            },
            {
              name: 'Fruit Cocktails',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f06ad1c4b211a146502614fe140c9145.jpeg",
                    name: "Avocado & Ashta",
                    description: "Avocado juice mix topped with ashta, mixed nuts and honey",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/236c4c0b4c265758b03ce2f83b33b952.jpeg",
                    name: "The Zaroobian",
                    description: "Fresh mango, raspberry, kiwi, pomegranate, blueberry mixed with a mango, guava, strawberry, blueberry juice blend",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/9780a753d56146be05fc6a27aaf9b7b8.jpeg",
                    name: "The Exotic Zaroobian",
                    description: "Fresh apple, kiwi, mango, pineapple, banana, strawberry, pistachio, raisins mixed with an avocado, guava, strawberry juice blend, topped with ashta, mixed nuts and honey",
                    price: "35.00",
                  },
                ]
              }
            },
            {
              name: 'Fresh Juices',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/5447258d6cd494f63dd3a9a4fe1128a4.jpeg",
                    name: "Fresh Orange Juice",
                    description: "Freshly squeezed orange juice",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/a100f9242a331e3f8a62b8fb625b71a5.jpeg",
                    name: "Fresh Pomegranate Juice",
                    description: "Freshly squeezed pomegranate juice",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/9a4e0347c39957357d27ef0f1b8a9206.jpeg",
                    name: "Fresh Watermelon Juice",
                    description: "Freshley squeezed watermelon juice",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/fb2d2d3db07015a0c5dc64b0993fdcbf.jpeg",
                    name: "Fresh Lemon Mint",
                    description: "Fresh lemonade mixed with mint",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/357fc345c1e559b3fc3f0f8e93d5b061.jpeg",
                    name: "Fresh Mango Juice",
                    description: "Fresh Mango Juice",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0452ddb222512727e59c9617471c8511.jpeg",
                    name: "Fresh Guava Juice",
                    description: "Fresh Guava Juice",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/0908aa45614b08dee3f67a11511a5f39.jpeg",
                    name: "Fresh Lemonade",
                    description: "Fresh lemonade",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/1c986460d86cba8161e3e6e401884ea0.jpeg",
                    name: "Fresh Strawberry Juice",
                    description: "Fresh Strawberry Juice",
                    price: "25.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/2480efd9a75800b0ba2f9001c2299276.jpeg",
                    name: "Fresh Cocktail Juice",
                    description: "A smooth and refreshing blend of ripe bananas and juicy strawberries — sweet, creamy, and perfectly chilled for that fruity street-side vibe.",
                    price: "25.00",
                  },
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/184da3d17320bcd6ce16851e1632ef25.jpeg",
                    name: "Laban",
                    description: "Laban",
                    price: "11.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/82064507f2073e8e83fd8605c31dbcad.jpeg",
                    name: "Coca Cola",
                    description: "Coca Cola",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/30355c7e90b746454cdf75c28274a28f.jpeg",
                    name: "Diet Coca Cola",
                    description: "Diet Coca Cola",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/5bc6d2f5fec47a97c851ff087e65409e.jpeg",
                    name: "Sprite",
                    description: "Sprite",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/26b6490294209a907c22d30080e49a95.jpeg",
                    name: "Sprite Zero",
                    description: "Sprite Zero",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/88c814df11ea26f5226831adeb30c37c.jpeg",
                    name: "Fanta",
                    description: "Fanta",
                    price: "10.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/ea97e45126ffcaf93ed901c926b05fc8.jpeg",
                    name: "Water",
                    description: "Water",
                    price: "7.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/fd7744a8b27eda02bf3aceecacc19c74.jpeg",
                    name: "Sparkling Water",
                    description: "San Pellegrino 500ml",
                    price: "16.00",
                  },
                ]
              }
            },
            {
              name: 'Sauces',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/87c764c74ea0b967d7755e631537b8c0.jpeg",
                    name: "Garlic Sauce",
                    description: "Authentic garlic sauce",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/5a88cc8608cf00255a0a0511f7ec98ea.jpeg",
                    name: "Tahini Sauce",
                    description: "Authentic Tahini sauce made from sesame seeds mixed with parsley",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/55560c744720a236c0f7dad2926b24d0.jpeg",
                    name: "Pomegranate Molasses",
                    description: "Pomegranate Molasses",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/7fbe1a993ab98011b798b33662427875.jpeg",
                    name: "Ketchup",
                    description: "Ketchup",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/f25c314050afd8ab5c3d905a3b5ea6e2.jpeg",
                    name: "Mayo",
                    description: "Mayo",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/67e6a83cffe98765b113ac84dd42dff2.jpeg",
                    name: "Honey",
                    description: "Honey",
                    price: "3.00",
                  },
                ]
              }
            },
            {
              name: 'Mentos - Keep it Fresh Habibi!',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/ee456dd53422520528e706c0d30822a0.jpeg",
                    name: "Mentos nano bottle gum - Freshmint flavour",
                    description: "Mentos Pure Fresh Sugar Free Chewing Gum - Freshmint Flavour 10pcs",
                    price: "4.60",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/TLBT%20Kitopi%20Plugin-New/630cf2f6086360b7df589d5cfe1817e2.jpeg",
                    name: "Mentos nano bottle gum - Watermelon flavour",
                    description: "Mentos Pure Fresh Sugar Free Chewing Gum Watermelon Flavour 10pcs",
                    price: "4.60",
                  },
                ]
              }
            },
          ]
        }
      }
    }
  },
  {
    name: 'Low Calories',
    country: 'UAE',
    city: 'Dubai',
    address: 'Low Calories 780 Jumeirah Beach Rd - Umm Suqeim Second Jumeirah 3',
    latitude: 25.1505214,
    longitude: 55.1994264,
    placeId: 'ChIJfZAqZ3trXz4RrzDTI945p2A',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Offers',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638754717917632284",
                    name: "Chicken Magbous",
                    description: "Chicken pieces cooked with Arabic spices, saffron, and tomato with basmati rice (calories 601, pro 49, carb 45, fat 25 and  sodium 148)",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749678441490330",
                    name: "Fish Magbous",
                    description: "Fish cooked with Arabic spices, saffron and tomato with basmati rice (calories 587, pro 45, carb 46, fat 25 and  sodium 137)",
                    price: "38.00",
                  },
                ]
              }
            },
            {
              name: 'Combos',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/a2e085ae-9fe0-4f27-856d-a7d049ced199.jpg",
                    name: "Pizza Combo",
                    description: "1 Pizza with 100-gram Potato and a refreshing 330 ml Drink",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/26aac8eb-87c7-4595-88fa-c24b7aa2f4d8.jpg",
                    name: "Burger Combo",
                    description: "1 Burger + 1 Snack + 330 ml Drink",
                    price: "45.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/8dc4f22e-5161-40a8-b331-0f347183d89f.jpg",
                    name: "Chicken Meal Combo",
                    description: "150 gram of tender chicken served with 100 gram of fluffy rice and a refreshing drink. A satisfying meal that offers the perfect balance of protein and carbohydrates.",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/0f6cdfe3-63f4-434b-9366-eb06455e6a44.jpg",
                    name: "Fish Meal Combo",
                    description: "150 grams of fish served with 100 grams rice and a 330 ml drink. Perfect meal combination for seafood lovers",
                    price: "43.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/3373c4e0-71f0-4401-ab8c-5160a02d5052.jpg",
                    name: "Beef Meal Combo",
                    description: "150 gram tender Beef served with 100 gram fluffy Rice and a refreshing 330ml Drink",
                    price: "50.00",
                  },
                ]
              }
            },
            {
              name: 'Breakfast',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749949712357378",
                    name: "Burrito Beans",
                    description: "Beans, tomato, lemon, tobasco sauce, cheese, onion, salt, cumin, tortilla bread\nCalories 117, Protein 4, Carb 19, Fat 4 and Sodium 232",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836692156916.jpg",
                    name: "Pancake",
                    description: "your choice from the following flavors:Chocolate, caramel, strawberry.\nCalories 113, Pro 11, Carb 15, Fat 1 and Sodium 37.",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836696492583.jpg",
                    name: "Halloumi Sandwich",
                    description: "Brown Ciabatta Bread, roasted garlic, hallomi cheese, white honey, black pepper, Rocca leaves, sun dry tomatoes and chilli flex.\nCalories 629, Pro 30, Carb 64, Fat 28, Sodium 1504.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836687042328.jpg",
                    name: "Labneh and Zaatar Sandwich",
                    description: "Low fat labneh, thyme\nCalories 247, Pro 7, Carb 31, Fat 10 and Sodium 463.",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638973333009376640",
                    name: "Con Egg Protein",
                    description: "Protein Bread, EGG, Caramelized Onions, Cream Cheese, Honey Mustard Powder, Black Pepper, Chili Flakes (Calories 592, Pro 47, Carb 34, Fat 30, Sodium 1047)",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749657844746916",
                    name: "Balaleet with Honey",
                    description: "Vermicelli, cardamom, saffron, stevia suger, pine, egg white and honey.\nCalories 157, Pro 13, Carb 13, Fat 6, Sodium 352.",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638973333265368833",
                    name: "Spelt Truffle Cream Croissant",
                    description: "Croissant, Philadelphia cheese, Truffle powder,Red pepper sauce, Egg,  Chili flakes, Black sesame (Calories 693, Pro 19, Carb 45.96, Fat 49, Sodium 669.6)",
                    price: "31.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749658448642113",
                    name: "New Egg Burger",
                    description: "Burger bun, Egg white, labneh, truffle sauce, mayonnaise and chives.\nCalories 493, Pro 29, Carb 25, Fat 31, Sodium 1018",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749970424240502",
                    name: "Shakshouka Egg",
                    description: "Egg white, tomato, Parsley, onion, pepper and salt.\nCalories 280, Pro 21, Carb 6, Fat 18, Sodium 205",
                    price: "26.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/2372484620/a60ff791-e1ad-41ae-9fcc-24571abdba63.jpg",
                    name: "French Toast",
                    description: "Milk, Cinnamon powder,  Peanut butter , Philadelphia cheese , Blackberry jam , Dry fruit mix, French toast Brioche bread, EGG, Protein powder ( cal 651, protein 30, carbs 66, fat 34 , Sodium 588)",
                    price: "21.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638973333541205297",
                    name: "English Egg Croissant",
                    description: "Croissant, Red pepper sauce, Egg, Chili flakes, Black sesame, beefbacon, labneh ( cal 700, protein 27, carbs 68.6, fat 35)",
                    price: "35.00",
                  },
                ]
              }
            },
            {
              name: 'Soups',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749665096465647",
                    name: "Lentil Soup",
                    description: "Red lentil, carrot, onion, leeks, celery, garlic, cumin, turmeric and hot water.\n Calories 99, Pro 5, Carb 17, Fat 2, Sodium 413",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749665416964393",
                    name: "Minestrone Soup",
                    description: "Onions, leeks, celery, carrots, potatoes, red beans, tomato paste, tomatoes, oregano, basil, parmesan cheese and black pepper.\nCalories 57, Pro 2, Carb 8, Fat 2, Sodium 302",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749673551216497",
                    name: "Molokhia",
                    description: "Molokhia, garlic, salt, coriander, chicken stock and hot water.\nCalories 64, Pro 4, Carb 3, Fat 4, Sodium 29",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/22b833bb-1bbb-4b39-b21f-3e99760bad26.jpg",
                    name: "Broccoli Soup",
                    description: "Broccoli, onion, leek, celery, salt,\ncooked cream, chicken stock Calories 70.9, Pro 2.7, Carb 7.6, Fat 3.3",
                    price: "12.00",
                  },
                ]
              }
            },
            {
              name: 'Salads',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749670506845416",
                    name: "Salmon Salad",
                    description: "Salmon, paprika, pickled cucumber, iceberg lettuce, onion with vinegar and salt, watercress, broccoli, roasted white sesame, boiled white basmati rice and bread crumbs.\nCalories 301, Pro 22, Carb 18, Fat 16, Sodium 677",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749666894754677",
                    name: "Mossakhen Salad",
                    description: "Boiled chicken,onion, pomegranate molasses, sumac powder, iceberg lettuce, toasted tortilla bread, pomegranate, parsley\ncalories 250, pro 26, carb 24, fat 6, sodium 540",
                    price: "20.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749667054031911",
                    name: "Low Calories Chicken Salad",
                    description: "Chicken breasts, iceberg lettuce, rocca, pomegranate, eggplant, olive oil, paprika, salt, black pepper powder, feta cheese, roasted peanuts.\ncalories 290, pro 27, carb 13, fat 15, sodium 1005",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749667230163002",
                    name: "Arabic Salad",
                    description: "Cucumber, tomato, lettuce, lemon\nCalories 18, Pro 1, Carb 2, Fat 1, Sodium 254.",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749667292784868",
                    name: "Peri Peri Shrimp Salad",
                    description: "Shrimps, peri peri sauce, iceberg lettuce, cucumber, sweet potato, carrot, red capsicum, green coriander.\ncalories 115, pro 16, carb 10, fat 1, sodium 436",
                    price: "20.00",
                  },
                ]
              }
            },
            {
              name: 'Burger',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836689851831.jpg",
                    name: "Salmon burger",
                    description: "Salmon, onion, red bell pepper, green bell pepper, garlic, dill, parsley, Cajun seasoning, ground black pepper, panko breadcrumbs and egg whites.\nCalories 593, Pro 42, Carb 52, Fat 24, Sodium 859",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836685558032.jpg",
                    name: "Low Calories Beef Burger",
                    description: "Beef, brown bread, truffle mayonnaise, cheese, caramelized onions.\nCalories 539, Pro 36, Carb 30, Fat 31, Sodium 862",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/2372484589/dbc15972-4980-43de-b6d4-6f2533f67975.jpg",
                    name: "Truffle Burger",
                    description: "Beef, brown bun bread, truffle mayonnaise sauce, cheese, caramelized onion.\nCalories 355, Pro 31, Carb 31, Fat 12, Sodium 442.",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836679722815.jpg",
                    name: "Dynamite Burger",
                    description: "Chicken, spicy breadcrumbs, brown bread, dynamite sauce, cheese and iceberg lettuce \nCalories 360, Pro 39, Carb 31, Fat 9, Sodium 534",
                    price: "40.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836690734732.jpg",
                    name: "Buffalo Burger",
                    description: "Brown bread, chicken, paprika, buffalo sauce, lettuce, jalapeno and a slice of cheese.\nCalories 504, Pro 50, Carb 32, Fat 20, Sodium 349",
                    price: "38.00",
                  },
                ]
              }
            },
            {
              name: 'Sandwiches',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836650617494.jpg",
                    name: "Beef Shawarma",
                    description: "Tortilla bread, beef fillet, onion, tomato, parsley, pickled cucumber and tahini sauce.\nCalories 449, Pro 31, Carb 29, Fat 23, Sodium 518",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836690223307.jpg",
                    name: "Crazy Chicken Sandwich",
                    description: "Tortilla bread, chicken, spicy breadcrumbs, cream cheese, dynamite sauce, cheese, iceberg lettuce and jalapenos.\nCalories 79, Pro 10, Carb 6, Fat 2, Sodium 164",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836707069107.jpg",
                    name: "Chicken Tandoori",
                    description: "Tortilla bread, chicken breast, tandoori sauce, lettuce, tomato, cucumber and cheese.\nCalories 322, Pro 30, Carb 33, Fat 7, Sodium 759",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836697083911.jpg",
                    name: "Chicken Tikka",
                    description: "Tortilla bread, chicken breast, tikka sauce, lettuce, cucumber and tomato.\nCalories 318, Pro 29, Carb 33, Fat 9, Sodium 310",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836689705573.jpg",
                    name: "Shrimp Sandwich",
                    description: "Shrimp,  Egg white, cashews, bread crumbs, mozzarella cheese, iceberg lettuce, jalapeno, tortilla bread and mayonnaise truffle sauce.\nCalories 309, Pro 17, Carb 35, Fat 11, Sodium 608",
                    price: "48.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836678557386.jpg",
                    name: "Grak Chicken Shawarma",
                    description: "Marinated chicken breasts with Al Jarak shawarma spices, tortilla bread, pickled cucumber, pickled onions, yogurt.\nCalories 433, Pro 43, Carb 31, Fat 15, Sodium 626",
                    price: "33.00",
                  },
                ]
              }
            },
            {
              name: 'Beef Protein',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749969484305092",
                    name: "Smoked Grilled Steak",
                    description: "Beef slices, salt, hot pepper, paprika.\nCalories 239, Pro 30, Carb 0, Fat 15, Sodium 55",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/9e1ad163-c8d1-49ee-b617-d7145f8a8d6a.jpg",
                    name: "Beef Cheese Creamy",
                    description: "Minced Beef, Onions, BeefBacon, Garlic, Oregano, Cheddar Cheese Sauce, Demi plus, cream, salt, pepper, paprika, mustard Calories 290, Pro 31.5, Carb 18.7, Fat 9.2",
                    price: "41.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751357214135738",
                    name: "Mushroom Steak",
                    description: "Marinated steak with fresh mushroom and homemade demi-glace sauce.\nCalories 254, Pro 34, Carb 5, Fat 10, Sodium 85",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749964142060318",
                    name: "Beef Teryaki",
                    description: "Soy sauce, sweet pepper, ginger oyster sauce\nCalories 220, Pro 25, Carb 8, Fat 10, Sodium 77",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749961641940435",
                    name: "BBQ Steak",
                    description: "Grilled tenderloin steak marinated in barbecue sauce\nCalories 262, Pro 33, Carb 7, Fat 11, Sodium 328",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749964516946619",
                    name: "Kofta With Tomato Sauce",
                    description: "beef fillet marinated with arabic spices, grilled and cooked inside tomato sauce.\nCalories 130, Pro 11, Carb 4, Fat 8, Sodium 172",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749967523167467",
                    name: "Cheese Stuffed Beef",
                    description: "beef stuffed with onions, mushrooms, mozzarella cheese, parsley and special spices \nCalories 281, Pro 32, Carb 19, Fat 9, Sodium 81",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749964991136686",
                    name: "Beef Chili Con Carne",
                    description: "Minced beef with red beans, bell pepper, corn, tomato sauce\nCalories 234, Pro 27, Carb 19, Fat 8, Sodium 67",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749675508043327",
                    name: "Beef Mongolian",
                    description: "Julienne beef, soy sauce, oyster sauce, sesame oil, coriander, onion, garlic, red pepper, ginger, toasted sesame, green pepper, yellow pepper, carrot and broccoli.\nCalories 151, Pro 22, Carb 9, Fat 3, Sodium 389",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749965982330587",
                    name: "Meat Balls",
                    description: "Marinated meatballs cooked with brown sauce and cream.\nCalories 132, Pro 12, Carb 5, Fat 7, Sodium 199",
                    price: '41.00',
                  },
                ]
              }
            },
            {
              name: 'Chicken Protein',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749950515864294",
                    name: "Chicken Mizoo",
                    description: "Marinated chicken cube with bread crumb, buffalo sauce, dynamite sauce, onion, capsicum, parsley, paprika, and Cajun spices Calories: 257, Protein: 24 g, Carb: 6 g, Fat: 15 g, Sodium: 683 mg",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749974561762064",
                    name: "Smoked Grilled Chicken",
                    description: "salt, chili, paprika Calories 152, Pro 30, Carb 0, Fat 4, Sodium 50",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749680703379611",
                    name: "Sun Mushroom Chicken",
                    description: "Chicken breast, Sun dry tomato, onion, mushroom, cooking cream, black pepper, garlic, oregano Calories 153g, Pro 20g, Carb 3g, Fat 7g, Sodium 244mg",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749951502416110",
                    name: "Saffron Chicken",
                    description: "chicken, paprika, cumin, ginger, coriander, pepper, garlic, onions, saffron, parsley, green olives, pickled lemon, cream Lebanese Calories 196g, Pro 25g, Carb 5g, Fat 9g, Sodium 535mg",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749953501636082",
                    name: "Chicken Celery Creamy",
                    description: "Chicken, kraft, garlic, cream cheese, tobacco Calories 189, Pro 25, Carb 3, Fat 8, Sodium 309",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749680675015072",
                    name: "Dynamite Chicken",
                    description: "Chicken, hot breadcrumbs, dynamite sauce Calories 209, Pro 29, Carb 10, Fat 6, Sodium 874",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749955685817062",
                    name: "Buffalo Chicken",
                    description: "Marinated chicken cube with bread crumb, served with our special buffalo sauce Calories 209, Pro 29, Carb 10, Fat 6, Sodium 874",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749956832157227",
                    name: "Spinach Chicken",
                    description: "chicken balls mixed with spinach tomato sauce Calories 158, Pro 26, Carb 8, Fat 3, Sodium 306",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749972383089381",
                    name: "Chicken Tandoori",
                    description: "Traditional Indian tandoori chicken breasts Calories 149, Pro 25, Carb 6, Fat 2, Sodium 500",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751357140755064",
                    name: "Chicken Butter Curry",
                    description: "Chicken, onion, garlic , ginger , tomato paste , Cajun , coriander , turmeric , paprika , curry , curry leaves , yoghurt , cooking cream Calories 240, Pro 26, Carb 16, Fat 8, Sodium 755",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749957732583020",
                    name: "Nuggets Chicken",
                    description: "chicken, garlic, onions, salt, paprika, bread crumbs kees, black pepper, lemon juice Calories 184, Pro 28, Carb 6, Fat 5, Sodium 535",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749956628670759",
                    name: "Cajun Chicken Creamy",
                    description: "chicken, cajun spiced, onion, garlic, chicken stock, apple vinegar, parsley, cooking creamy Calories 179, Pro 24, Carb 6, Fat 5, Sodium 73",
                    price: '32.00',
                    discount: 30
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749957087844887",
                    name: "Mexican Chicken",
                    description: "marinated Mexican style chicken strips with colored capsicum and fresh herbs Calories 184, Pro 25, Carb 16, Fat 2, Sodium 404",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/9cd30311-2eab-4283-b537-c4409b758552.jpg",
                    name: "Chicken Pesto",
                    description: "Chicken, Cooking Cream, Pesto Basil, Garlic, Onion, Black Pepper (Calories 174, Protein 24, Carb 5.7, Fat 6 - 100g)",
                    price: "32.00",
                  },
                ]
              }
            },
            {
              name: 'Seafood',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638810903741594380",
                    name: "Grilled Fish",
                    description: "Fish fillet,garlic, mustard, lemon, salt, pepper Calories 122, Pro 20, Carb 4, Fat 1, Sodium 392",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749975632520438",
                    name: "Fish Tartar",
                    description: "Fish fillet, taco seasoning , paprika, lemon juice, garlic ,panko bread,  tartar sauce  Calories 191, Pro 22, Carb 10, Fat 7",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751359338974226",
                    name: "Fish Coconut",
                    description: "Fish , pepper , lemon juice , mix batter , panko bread , coconut milk , saffron , kiwi juice Calories 104, Pro 12, Carb 7, Fat 3, Sodium 82",
                    price: '32.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749978080589194",
                    name: "Salmon Avocado",
                    description: "Grilled salmon cajun marinated served with healthy slice avocado calories 226, pro 26, carb 5, fat 11, sodium 475",
                    price: '39.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749978343105650",
                    name: "Salmon Gasheed",
                    description: "onion,  lemon dry, Arabic spices, green coriander Calories 293, Pro 28, Carb 7, Fat 17, Sodium 352",
                    price: '39.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749979696075533",
                    name: "Salmon Dill Sauce",
                    description: "salt, pepper, paprika, lemon, dill sauce Calories 200, Pro 26, Carb 6, Fat 8, Sodium 488",
                    price: '39.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749981874385396",
                    name: "Dynamite Shrimp",
                    description: "Healthy style dynamite shrimp coat with dynamite sauce Calories 20, Pro 3, Carb 19, Fat 9",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638752968257401895",
                    name: "BBQ Shrimp",
                    description: "Marinated shrimp mix with BBQ sauce Calories 15, Pro 3, Carb 0, Fat 0, Sodium 100",
                    price: '41.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749983290465512",
                    name: "Cacciatore Shrimp",
                    description: "Shrimp cooked with herbs , tomato sauce , sweet pepper , and cheese Calories 22, Pro 3, Carb 1, Fat 1, Sodium 76",
                    price: '41.00',
                  },
                ]
              }
            },
            {
              name: 'Carbs And Sides',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638752216704484460",
                    name: "Oats",
                    description: "Calories 61, pro 2, carb 11, fat 1 and sodium 119",
                    price: '16.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751415545212718",
                    name: "Basmati Rice",
                    description: "White basmati rice. Calories 137, pro 3, carb 29, fat 1 and sodium 1",
                    price: '9.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638752256305361796",
                    name: "Egyptian Rice",
                    description: "Egyptian rice Calories 137, Pro 3, Carb 29, Fat 1, Sodium 1",
                    price: '9.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751414101929887",
                    name: "Green Rice",
                    description: "Rice cooking with dill, parsley, garlic, green coriander, olive oil and salt. Calories 130, pro 2, carb 28, fat 2 and sodium 50",
                    price: '9.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751416069274134",
                    name: "Biryani Rice",
                    description: "Indian masala and basmati rice calories 124, protein 3, carb 27, fat 0, sodium 4",
                    price: '9.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751416775261619",
                    name: "Bulgur",
                    description: "Onions, garlic, tomatoes, cumin, cinnamon, salt, pepper Calories 137, Protein 3, Carbs 29, Fat 1",
                    price: '9.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751417078552136",
                    name: "Mixed Vegetables",
                    description: "Carrot, zucchini, broccoli and green beans boiled with salt (calories 41, pro 2, carb 7, fat 0, sodium 42)",
                    price: '9.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751421048480241",
                    name: "Roasted Potatoes",
                    description: "Cajun spice, garlic, olive oil, herbs. Calories 152, pro 2, carb 20, fat 7 and sodium 161",
                    price: '9.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751418449946802",
                    name: "Mashed Potatoes",
                    description: "Saltwater potato Calories 92, Pro 2, Carb 15, Fat 0",
                    price: '10.00',
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751419537923053",
                    name: "Sweet Potatoes",
                    description: "Sweet potato oregano & garlic olive oil (calories 87, protein 2, carbs 20, fat 0, sodium 55)",
                    price: '10.00',
                  },
                ]
              }
            },
            {
              name: 'Biryani',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749677302241026",
                    name: "Chicken Biryani",
                    description: "Chicken breast cooked with Indian masala and basmati rice (calories 309, pro 28, carb 35, fat 6 and  sodium 155)",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836707076208.jpg",
                    name: "Chicken With Bulgur",
                    description: "Chicken, burghul, black pepper, cumin, paprika, cinnamon, onion, garlic, tomato, coriander and mansaf masala (calories 486, pro 54.9, carb 50, fat 6.6 - 300g)",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749677644404166",
                    name: "Shrimp Biryani",
                    description: "Shrimp cooked with Indian masala and basmati rice (calories 415, pro 32, carb 55, fat 3 - 300g)",
                    price: "55.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638754717917632284",
                    name: "Chicken Magbous",
                    description: "Chicken pieces cooked with Arabic spices, saffron, and tomato with basmati rice (calories 601, pro 49, carb 45, fat 25 and  sodium 148)",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749678441490330",
                    name: "Fish Magbous",
                    description: "Fish cooked with Arabic spices, saffron and tomato with basmati rice (calories 587, pro 45, carb 46, fat 25 and  sodium 137)",
                    price: "38.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749677963432720",
                    name: "Magbous Shrimp",
                    description: "Shrimp cooked with Arabic spices, saffron and tomato with basmati rice (calories 540, pro 63, carb 25, fat 20 - 300g)",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749678826438550",
                    name: "Portuguese Style Chicken And Rice",
                    description: "Chicken peri peri, basmati rice, red sweet pepper, turmeric, green peas and tomato sauce (calories 645, Pro 42, carb 78, fat 15 - 300g)",
                    price: "36.00",
                  },
                ]
              }
            },
            {
              name: 'Pizza',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836698605352.jpg",
                    name: "Seafood Pizza",
                    description: "Pizza bread, fish, shrimp, salmon, lemon juice, bechamel sauce, onion, tomato, mozzarella cheese and Caesar sauce  (Calories 807, Pro 45, Carb 77, Fat 35, Sodium 1332)",
                    price: "53.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836696336278.jpg",
                    name: "Buffalo Pizza",
                    description: "Pizza bread, chicken, tomato sauce , mozzarella cheese, paprika, pepper, black olives, jalapeno, capsicum and buffalo sauce (Calories 944, Pro 58, Carb 119, Fat 23, Sodium 1250)",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836687080066.jpg",
                    name: "Dynamite Pizza",
                    description: "Chicken, hot breadcrumbs, brown pizza dough, dynamite sauce, mozzarella cheese, jalapeno and black olives (Calories 954, Pro 73, Carb 120, Fat 21, Sodium 915)",
                    price: "44.00",
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763671665/Gather_with_your_loved_ones_and_enjoy_with_our_pizza_lowcaloriesae_diet_mealplan_healhty_rjbcnj.mp4',
                    tags: {
                      connect: [
                        {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-beef'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'medium'}, {slug: 'spicy'},
                      ]
                    }
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836695469347.jpg",
                    name: "Beef Pizza",
                    description: "Pizza bread, minced beef, onion, oregano, tomato sauce, capsicum, black pepper, mozzarella cheese and truffle oil (Calories 978, Pro 57, Carb 81, Fat 47, Sodium 1179)",
                    price: "53.00",
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763672037/Happy_World_Pizza_day_pizzaday_worldpizzaday_lowcalories_lowcaloriesae_healthypizza_bu_vnmtsm.mp4',
                    highlighted: true,
                    tags: {
                      connect: [
                        {slug: 'lunch'}, {slug: 'dinner'}, {slug: 'no-pork'}, {slug: 'no-shellfish'},
                        {slug: 'mild'},
                      ]
                    }
                  },
                ]
              }
            },
            {
              name: 'Risotto And Paella',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749678341793070",
                    name: "Shrimp Risotto",
                    description: "Pan-seared shrimp cooked with rice, and cheese (Calories 519, Pro 42, Carb 47, Fat 24, Sodium 389)",
                    price: "44.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749674024510889",
                    name: "Chicken Risotto",
                    description: "Roasted chicken breast cooked with, rice, mushroom and parmesan cheese (Calories 435, Pro 42, Carb 48, Fat 8, Sodium 108)",
                    price: "36.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749675677571375",
                    name: "Paella Seafood",
                    description: "Fish, salmon, shrimp, onion, garlic, low-fat cooking cream, saffron, colored pepper and parmesan cheese (Calories 252, Pro 20, Carb 22, Fat 9, Sodium 405)",
                    price: "54.00",
                  },
                ]
              }
            },
            {
              name: 'Pasta And Lasagna',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749676823231807",
                    name: "Low Calorie Spaghetti",
                    description: "Spaghetti, beef, bolognese sauce and parmesan cheese on top (Calories 473, Pro 41, Carb 41, Fat 16, Sodium 162)",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749675624671927",
                    name: "Fettuccine Chicken Alfredo Sauce",
                    description: "Alfredo sauce, chicken, cream, mushroom and parmesan cheese on top (Calories 522, Pro 38, Carb 49, Fat 20, Sodium 74)",
                    price: "46.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749676384395676",
                    name: "Chicken Pasta Pink Sauce",
                    description: "Chunky tomato sauce, cream, penne pasta, chicken, spinach and parmesan cheese (Calories 447, Pro 50, Carb 38, Fat 11, Sodium 131)",
                    price: "39.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749676348264628",
                    name: "Beef Lasagna",
                    description: "Traditional Italian beef lasagna with bolognese sauce (Calories 579, Pro 45, Carb 52, Fat 37, Sodium 236)",
                    price: "46.00",
                  },
                ]
              }
            },
            {
              name: 'Sweets',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836674846202.jpg",
                    name: "Carrot Cake",
                    description: "Cinnamon, salt, eggs, vanilla, carrots, cheese, stevia sugar and flour (Calories 152, Pro 2, Carb 15, Fat 9, Sugar 7.1)",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836707266196.jpg",
                    name: "Dates Choco Balls",
                    description: "Oats, coffee, dates, chocolate powder, cinnamon, vanilla and coconut oil (Calories 110, Pro 2, Carb 21, Fat 3, Sugar 12)",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836678476527.jpg",
                    name: "Chia Karak Ball",
                    description: "Oats, milk, coconut, dates, tea, saffron and cinnamon (Calories 125, Pro 2, Carb 26, Fat 3, Sugar 13.3)",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836686496733.jpg",
                    name: "Lemon Chia Cake",
                    description: "Eggs, water, oil, chia, cheese and flour (Calories 72, Pro 1, Carb 9, Fat 3, Sugar 0.032)",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/1f770a36-a2e9-4199-ab83-9bd59fa9c30a.jpg",
                    name: "Coconut Latte Bar",
                    description: "Coconut powder, almond batter, coconuts oil, Turkish caffe, almond powder, vanilla protein (Calories 261, Pro 4.5, Carb 9, Fat 25, Sugar 2.3)",
                    price: "17.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/b77d1160-ba61-4d99-9619-ec9bf8922d5c.jpg",
                    name: "Saffron Tiramisu",
                    description: "Philadelphia cheese, Wapping cream, Saffron, Cardamom powder, Biscuit digestive, Mix granola, Vanilla protein\n (Calories 220, Pro 4, Carb 13, Fat 17.5, Sugar 5)",
                    price: "33.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836682693831.jpg",
                    name: "Milk Cake",
                    description: "Biscuit digestive, milk, Philadelphia cheese, protein powder, caramel powder, sugar stevia and cacao (Calories 694, Pro 39, Carb 52, Fat 36, Sugar 22.4)",
                    price: "30.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638753935107121008",
                    name: "Corn Flakes Chocolate",
                    description: "Corn flakes crushed, peanut butter, honey, melted chocolate and chocolate protein (Calories 198, Pro 4, Carb 38, Fat 4, Sugar 8.5)",
                    price: "18.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/20250214_TALABAT_UAE__Low638753836691610561.jpg",
                    name: "Brownies",
                    description: "Cocoa powder, butter, chocolate, stevia and eggs (Calories 153, Pro 2, Carb 6, Fat 13, Sugar 3.6)",
                    price: "22.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/2372484701/0c14c119-fd7d-4a8c-b6a3-c4cd8618657f.jpg",
                    name: "Cheesecake",
                    description: "Cream cheese, cream, protein, biscuit, stevia sugar, chocolate, caramel, cappuccino, strawberry and lotus (Calories 364, Pro 14, Carb 11, Fat 29, Sugar 7.7)",
                    price: "35.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/4d844299-4b89-43cf-8dca-c978d88f91b0.jpg",
                    name: "Crunchy Pecan Bar",
                    description: "Corn flax, vanilla protein, almond batter, dark chocolate, Pecan nuts (Calories 196, Pro 8.5, Carb 23.4, Fat 8.5)",
                    price: "14.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749677096353954",
                    name: "Chocolate Cookie",
                    description: "Flour, stevia sugar, butter, egg, salt, dark chocolate and protein powder (Calories 226, Pro 3, Carb 34, Fat 10, Sugar 4)",
                    price: "13.00",
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763672155/Melting_moment_of_joy_newonthemenu_lowcalories_lowcaloriesae_cookieart_healthysnack_uaer_mlw6je.mp4',
                    highlighted: true,
                    tags: {connect: [{slug: 'snack'}, {slug: 'dessert'}, {slug: 'no-peanuts'}]}
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749675811319131",
                    name: "Peanut Butter Cookie",
                    description: "Flour, stevia sugar, butter, egg, salt, peanut butter and protein powder (Calories 233, Pro 4, Carb 31, Fat 11, Sugar 0.7)",
                    price: "13.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638749676686429909",
                    name: "Acai Berry Peanut Butter And Chia Seed",
                    description: "Pure acai with banana, strawberry, berry and peanut butter (Calories 328, Pro 10, Carb 27, Fat 20, Sugar 4)",
                    price: "32.00",
                  },
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751391308850869",
                    name: "Green Cola",
                    description: "No Calories, No Sugar, Natural Caffeine from green coffee beans and naturally sweetened with stevia",
                    price: "12.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751391271009364",
                    name: "Coca-Cola Zero",
                    description: "Carbonated soft drink with zero sugar and zero calories 330ml",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751392230379914",
                    name: "Sprite Zero",
                    description: "Carbonated soft drink with zero sugar and zero calories 330ml",
                    price: "5.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638751383629553352",
                    name: "Mineral Water",
                    description: "Arwa mineral water (500ml)",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638752970709968722",
                    name: "Apple Juice",
                    description: "100% pure, naturally sweet and refreshing.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638752971198286813",
                    name: "Carrot Juice",
                    description: "Fresh, naturally sweet, and packed with nutrients.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638752971684580557",
                    name: "Orange Juice",
                    description: "100% pure freshly squeezed oranges for a naturally sweet and refreshing boost of vitamin C.",
                    price: "16.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638752972155044659",
                    name: "Watermelon Juice",
                    description: "Hydrating, naturally sweet, and refreshingly crisp.",
                    price: "16.00",
                  },
                ]
              }
            },
            {
              name: 'Side Sauces',
              items: {
                create: [
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/cf060a81-d9da-476f-9456-a4c85d4a719d.jpg",
                    name: "Avocado Sauce",
                    description: "Creamy avocado sauce blended with fresh herbs and zesty lime for a perfect accompaniment to your favorite dishes",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/665dfced-c19d-4b61-bed9-7fff5d13b4a5.jpg",
                    name: "Buffalo Sauce",
                    description: "Tangy and spicy Buffalo Sauce served separately to add your desired heat level to any dish",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/c7ea3845-89ef-42c5-8dcb-41891b8fd5ae.jpg",
                    name: "Cocktail Sauce",
                    description: "A tangy tomato-based sauce with horseradish and spices that adds zesty flavor to seafood dishes",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/1bff584d-a234-4e8b-a3d9-36c60bc50487.jpg",
                    name: "Crazy Sauce",
                    description: "A bold and zesty sauce with a unique blend of spices that adds an exciting kick to any dish Perfect for dipping or drizzling",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/ac67dfc3-5a57-4ae5-a372-aceac3f75edb.jpg",
                    name: "Dynamite Sauce",
                    description: "Spicy and flavorful Dynamite Sauce served separately to add an explosive kick to your meal",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/94a223fb-59c2-4d76-938f-d9344e6a44ea.jpg",
                    name: "Dill Sauce",
                    description: "Fresh dill herb blended into a creamy sauce with hints of garlic and lemon Perfect for fish dishes and vegetables",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/795f829c-c20e-4e4d-bb20-4334ff37292c.jpg",
                    name: "Low Calories Sauce",
                    description: "A guilt-free flavor enhancer that adds zest to your meal without the extra calories Perfect for health-conscious diners who refuse to compromise on taste",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/47a67de0-6ec6-4062-ba3b-cd621ad97b3a.jpg",
                    name: "Nuggets Sauce",
                    description: "A creamy dipping sauce with a tangy flavor profile specially crafted to complement our crispy nuggets perfectly",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/ec2ef0a6-4d23-4add-95f9-00519f963b29.jpg",
                    name: "Peri Peri Sauce",
                    description: "Spicy African-Portuguese sauce made with bird's eye chili peppers and aromatic herbs Perfect for adding a fiery kick to your favorite dishes",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/8236c187-ca87-4775-865d-1fed66253b25.jpg",
                    name: "Spicy Sauce",
                    description: "Spicy and flavorful hot sauce that adds a fiery kick to any dish Perfect for those who enjoy an extra burst of heat",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/f4372536-e095-4294-a906-33aaf0c94af9.jpg",
                    name: "Tandoori Sauce",
                    description: "A rich and aromatic sauce with authentic tandoori spices Perfect for dipping or as a marinade for grilled meats and vegetables",
                    price: "3.00",
                  },
                  {
                    image: "https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/609959/PRODUCT/5d22e3aa-f2bd-4d2b-bfa2-f7cd3912c25d.jpg",
                    name: "Truffle Sauce",
                    description: "Luxurious truffle sauce served on the side to enhance your meal with its rich earthy aroma and distinctive gourmet flavor",
                    price: "3.00",
                  },
                ]
              }
            },
          ]
        }
      }
    }
  }
]
