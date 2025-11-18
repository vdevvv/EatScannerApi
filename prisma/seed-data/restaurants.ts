import {Prisma} from "@prisma/client";

export const restaurants: Prisma.RestaurantCreateInput[] = [
  {
    name: 'Pickl Gardens Plaza',
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
              name: 'Cheeseburgers',
              items: {
                create: [
                  {
                    name: 'Bespoke Your Cheeseburger',
                    price: '34',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762505292/pickl-burder_krnzuk.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762464069/get_bgiptr.mp4',
                    description: 'Single or double chuck patty, cheese, potato bun & your choice of toppings'
                  },
                  {
                    name: 'The New Yorker Cheeseburger',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762787739/chessburger2_jxoqvo.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762467559/WEEKLY_CONTEST_the_thing_that_keeps_happening_even_though_your_brain_swears_last_Monday_was_y_gwcu8m.mp4',
                    price: '32',
                    description: 'Double chuck patty, cheese, tomato, lettuce, secret sauce & potato bun'
                  },
                  {
                    name: 'The Original Cheeseburger',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762787739/chessburger3_uxwz7n.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762787089/pickl_burger_3_flrprg.mp4',
                    description: 'Double chuck patty, cheese, dill pickles, white onion, mustard, ketchup & potato bun',
                    price: '32'
                  }
                ]
              }
            },
            {
              name: 'Chicken',
              items: {
                create: [
                  {
                    name: 'The chicken sando',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762787905/chicken1_sgvhcm.jpg',
                    price: '38',
                    description: 'fresh fried chicken, comeback sauce, dill pickles, lettuce, potato bun'
                  },
                  {
                    name: 'The chicken caesar sando',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762787905/chicken2_ibdcbr.jpg',
                    price: '37',
                    description: 'fresh fried chicken, caesar sauce, parmesan, cheese, lettuce, potato bun',
                  },
                  {
                    name: 'Buffalo chicken sando',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762787905/chicken3_ueubbx.jpg',
                    description: 'buffalo fried chicken, ranch sauce, lettuce, parmesan, potato bun',
                    price: '37'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Pitfire Pizza',
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
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Baked Mac and Cheese',
                    price: '14',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1763126515/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-14_%D0%BE_15.21.31_tweiqs.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763126302/Baked_Mac_and_Cheese_tzjxtf.mp4'
                  }
                ]
              }
            },
            {
              name: 'Pizza',
              items: {
                create: [
                  {
                    name: 'IYKYK',
                    price: '67',
                    description: 'Mozzarella, Pitfire Bolognese, Red Wine Vinegar, Fresh Basil',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506720/pitfireh-pizza_sdidqm.webp',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763127015/iykyk_fedz3p.mp4',
                  },
                  {
                    name: 'Margherita 10"',
                    price: '60',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506769/margarita-pifire_y2elah.webp',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468734/The_weather_s_testing_us_these_days._PitfirePizza_PitfireDubai_BestPizzaDubai_HellsKitchen_D_ytdkbu.mp4',
                    description: 'Pitfire’s own seasoned tomato sauce, topped with hand torn mozzarella, a drizzle of olive oil, a dash of parmesan and a handful of fresh basil after bake.'
                  },
                  {
                    name: 'Bresaola & Rocket 10',
                    price: '62',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506828/Bresaola_Rocket10_22_p0w5cx.webp',
                    description: 'Seasoned tomato sauce with mozzarella, baked then topped withdeli-thin sliced bresaola (air dried beef) and piled high with fresh rocket and shaved parmesan, the rocket arrives packaged separately'
                  },
                  {
                    name: 'Buffalo Chicken 10"',
                    price: '65',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506868/buffalo-chicken_vhabav.webp',
                    description: 'Crushed tomato base topped with provolone and gorgonzola cheese, jalapeno peppers, grilled chicken and finished with a drizzle of house-made spicy buffalo chicken wing sauce.'
                  }
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    name: 'Coke 500mL',
                    price: '15',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506911/coke_uct2d6.webp',
                    description: 'Coke 500mL'
                  },
                  {
                    name: 'Sprite 500mL',
                    price: '15',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506911/sprite_eopqbq.webp',
                    description: 'Sprite 500mL'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Alsafadi',
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
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Sandwitch',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1763144736/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-14_%D0%BE_20.25.22_qqisk3.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763134324/sandwitch_muaeuk.mp4'
                  },
                  {
                    name: 'Juicy grilled chicken',
                    price: '80',
                    description: 'Marinated with spices and char-grilled to perfection. A simple dish, rich in authentic flavor.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504337/566120962_18532510414058656_3158066376928602230_n_m1dcap.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763145465/_%D9%84%D8%A7_%D8%AA%D9%81%D9%88%D9%91%D8%AA_%D8%B9%D9%8E_%D8%AD%D8%A7%D9%84%D9%83_%D8%A7%D9%84%D9%84%D8%B0%D9%91%D8%A9_%D8%A7%D8%AA%D9%91%D8%B5%D9%84_%D9%88%D8%A7%D8%B7%D9%84%D8%A8_%D8%A7%D9%84%D8%A7%D9%93%D9%86_%D8%B9%D9%84%D9%89600_500_601Rumor_has_it_that_this_season_our_delici_icdjkn.mp4',
                  },
                  {
                    name: 'Shish Tawouk',
                    price: '76',
                    description: 'Marinated and grilled to perfection.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504406/569310420_18533101867058656_3080983263939563066_n_b3aru8.jpg',
                  },
                  {
                    name: 'Grilled Sea Bass',
                    price: '80',
                    description: 'Simple, fresh, and full of flavor.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504505/GrilledSeaBass_vokbxo.jpg',
                  }
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Debs & Tahini Ice Cream',
                    price: '55',
                    description: 'unique, rich, and unforgettable. Don’t miss it!',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504743/DebsTahiniIceCream_tmex6n.jpg'
                  },
                  {
                    name: 'Black Forest cake',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1763144976/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-14_%D0%BE_20.29.26_opfieq.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763144988/Black_forest_cake_vp4zpb.mp4'
                  }
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    name: 'Fresh Fruit Cocktail',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504572/FreshFruitCocktail_inbqcx.jpg'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Gazebo',
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
              name: 'Kebab',
              items: {
                create: [
                  {
                    name: 'Afghani Murgh',
                    price: '60',
                    description: 'Classic grilled chicken marinated in traditional spices, cream and yoghurt; served bone-in.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507252/AFGHANI-MURGH_rtg2ri.webp',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470110/gazeborestaurant1_dys2s4.mp4',
                  },
                  {
                    name: 'Murgh Gilafi Seekh',
                    price: '80',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507604/Murgh-Gilafi-Seekh-700x456_tksl2l.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470184/gazeborestaurant2_hjaq1a.mp4',
                  }
                ]
              }
            },
            {
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Samosa Platter',
                    price: '28',
                    description: 'An assortment of cheese, veg. and your choice of samosas-mutton mince/chicken mince.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507828/Samosa-Platter-2-700x456_odef3r.webp',
                  },
                  {
                    name: 'Subzi Samoza',
                    price: '23',
                    description: 'An all time favourite, fried pastry pyramids stuffed with steamed potatoes and green peas tempered with cumin, ginger, green chillies and coriander seeds',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507948/Subzi-Samosa-700x456_kzxm1g.jpg'
                  },
                  {
                    name: 'Makai Cheese Tikki',
                    price: '28',
                    description: 'A seasoned mixture of potatoes, fresh corn, and green peas, formed into small patties stuffed with cheese; shallow fried',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507948/MAKAI-CHEESE-TIKKI-2-700x456_vv70m9.webp'
                  },
                  {
                    name: 'Papdi Chat',
                    price: '18',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507947/PAPDI-CHAAT-700x456_d56yd6.webp',
                    description: 'Papdi topped with grated mashed potato, whipped yoghurt, green chutney, and tamarind chutney, sprinkled with chaat masala'
                  },
                  {
                    name: 'Shami Kebab',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1763145971/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-14_%D0%BE_20.45.56_sdatoc.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763145921/shami_kebab_wuj0vw.mp4'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Couqley',
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
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'French fries with meat',
                    price: '60',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508637/free-with-meat_opx3nb.jpg',
                  },
                  {
                    name: 'Tartar',
                    price: '63',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/tartare_vmk8ik.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763146986/tartar_qvbxz9.mp4',
                  },
                  {
                    name: 'Mussels',
                    price: '43',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508638/mussles_klgfbd.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763146503/%D0%91%D0%B5%D0%B7%D1%96%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%B8%CC%86_stauoa.mp4'
                  }
                ]
              }
            },
            {
              name: 'Alcohol',
              items: {
                create: [
                  {
                    name: 'Secret Cocktail',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1763146795/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-14_%D0%BE_20.59.31_wjneli.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763146802/coctail_ccydbv.mp4'
                  },
                  {
                    name: 'Secret Cocktail 2',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/uknown-coctail-2_inrfz9.jpg'
                  },
                  {
                    name: 'Kaiken Wine',
                    price: '60',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/kaiken-wine_g50yqm.jpg'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'High Joint',
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
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Burger',
                    price: '34',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509460/burger1_uxw3d6.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763147440/get_1_mnlrxu.mp4',
                  },
                  {
                    name: 'Burger',
                    price: '33',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509461/burger2_fjicb7.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763147438/High_Jamz_fans_raise_your_hands___%EF%B8%8F___%EF%B8%8F_rfh2w5.mp4',
                  },
                  {
                    name: 'Burger',
                    price: '32',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509461/burger3_ijax5k.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762471438/hightjoin3_f4dq4l.mp4'
                  },
                  {
                    name: 'Croissant',
                    price: '33',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509497/croissant_lutqne.jpg'
                  },
                  {
                    name: 'French fries',
                    price: '28',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509497/french_fries_phhlcr.jpg'
                  }
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Lotus',
                    price: 35,
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509498/lotus-desert_cwprbc.jpg'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Sushiart',
    country: 'UAE',
    city: 'Abu Dhabi',
    address: 'The Galleria Al Maryah Island Hamouda Bin Ali Al Dhaheri Street',
    latitude: 24.5010275,
    longitude: 54.3902701,
    placeId: 'ChIJgWk47lRmXj4RhGTNlpyfU-Y',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Machu Picchu Poke',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762510224/Machu_Picchu_Poke_vhabcd.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472245/sushiartuae2_qxeaie.mp4',
                    price: 50
                  }
                ]
              }
            },
            {
              name: 'Sushi sets',
              items: {
                create: [
                  {
                    name: 'Popular set',
                    price: '70',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762510227/sushi-set2_azwyzi.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763148449/Where_every_roll_tells_a_story_signaturebox_sushirolls_ybkux3.mp4',
                  },
                  {
                    name: 'Summer Box',
                    price: '70',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762510225/sushi-set_qg6grk.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1763148605/How_often_do_you_crave_SushiArt_c7lyo9.mp4'
                  }
                ]
              }
            },
            {
              name: 'Rolls',
              items: {
                create: [
                  {
                    name: 'Ikura Spring Roll',
                    price: '40',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762510223/ikura-spring-roll_zcv4rq.jpg',
                  },
                  {
                    name: 'PacMan roll',
                    price: '42',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762510224/pac-man-roll_wi6rap.jpg'
                  },
                  {
                    name: 'Tempura roll',
                    price: '39',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762510227/tempura-tango-roll_cvcxla.jpg'
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
    name: 'Zaatar w Zeit',
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
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Kebab',
                    price: '40',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511161/kebab_ptnmmt.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762791341/zaatwar_kebab_wv9yuy.mp4',
                  },
                  {
                    name: 'Pizza',
                    price: '42',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511162/pizza_deqyh9.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762791637/zaatarw_pizza_nt0hhx.mp4',
                  },
                  {
                    name: 'Salad',
                    price: '48',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511163/salad_thbb0o.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762792132/zaatawr_salad_duwvpe.mp4'
                  },
                  {
                    name: 'Salad King',
                    price: '45',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511167/salad_king_geml4v.jpg',
                  },
                  {
                    name: 'Taco',
                    price: '39',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511167/taco_s6ykdc.jpg',
                  },
                  {
                    name: 'Sunshine bowl',
                    price: '50',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511170/sunshine-bowl_aeabus.jpg',
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
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Bowl of sunshine',
                    price: '50',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762854648/bowl_feia9b.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762854541/salad_bowl_oqq56x.mp4',
                  },
                  {
                    name: 'Hight protein wrap',
                    price: '45',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511577/Hight_protein_kebab_c1zuq5.jpg',
                  },
                  {
                    name: 'Toast',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511577/toast_tgvzsl.jpg',
                  }
                ]
              }
            },
            {
              name: 'drinks',
              items: {
                create: [
                  {
                    name: 'Fresh',
                    price: '20',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511575/fresh_pvxih6.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762853911/fresh_ow8n3j.mp4'
                  },
                  {
                    name: 'Coffee',
                    price: '15',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511574/coffee_uuejrr.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762854732/coffee_bdqvb0.mp4'
                  },
                  {
                    name: 'Energy booster',
                    price: '22',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511574/energy_booster_eepeen.jpg',
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Malay Al tawak',
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
              name: 'Combo',
              items: {
                create: [
                  {
                    name: 'Burger combo',
                    price: '50',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512105/burger_combo_fanegc.jpg',
                  },
                  {
                    name: 'Sandwitch combo',
                    price: '40',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512108/sandwich_nx0dd2.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473787/malakaltawoukuae2_skcufp.mp4',
                  }
                ]
              }
            },
            {
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Hommus sandwich',
                    price: '35',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512106/sandiwch2_gsx2f2.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473787/malakaltawoukuae3_zjiyzn.mp4'
                  },
                  {
                    name: 'Asian Bowl',
                    price: '33',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512104/bowl_vyw2gt.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762855435/asian_bowl_oduzud.mp4'
                  },
                  {
                    name: 'Kebab',
                    price: '33',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512105/kebab_k3cbtg.jpg',
                  },
                  {
                    name: 'Soup',
                    price: '33',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512109/soup_r9ohax.jpg'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Find Salt',
    country: 'UAE',
    city: 'Abu Dhabi',
    address: 'Find Salt 9H85+4Q9 - Mohamed Bin Zayed City - Z4',
    latitude: 24.3643496,
    longitude: 54.5602469,
    placeId: 'ChIJIQQGCABHXj4RDR77cAl28e0',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Burger',
                    price: '40',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512671/burger_boxvzb.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762855813/burger_dlq3sk.mp4'
                  },
                  {
                    name: 'French fries',
                    price: '27',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512674/french_fries_uk5glw.jpg',
                  }
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Cake',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512672/cake_he6fgn.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762856052/cake_tvzmg2.mp4',
                  },
                  {
                    name: 'Ice cream',
                    price: '20',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512675/ice-cream_dqhvuy.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474304/findsalt1_wh9ehk.mp4',
                  },
                  {
                    name: 'Cookie',
                    price: '10',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512672/cookie_bj67ou.jpg',
                  }
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    name: 'Mango Slushy',
                    price: '25',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512676/MANGO_SLUSHYy_ugucxa.jpg'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Rascals Deli',
    country: 'UAE',
    city: 'Dubai',
    address: 'Rascals Deli Wasl Square , Block 7',
    latitude: 25.1859602,
    longitude: 55.2396659,
    placeId: 'ChIJBYSglqxdXz4RbRkYX3LRrVE',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'French Dip',
                    price: '25',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514002/burger_y8jfua.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474708/rascalsdeli3_wt5ie5.mp4'
                  }, {
                    name: 'Burger',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514003/burger2_ghtahj.jpg',
                  }, {
                    name: 'Sandwitch',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514008/sandwitch_mevyyz.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474706/rascalsdeli1_utx5fd.mp4',
                  },
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Donut',
                    price: 15,
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514006/donut_muevdm.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762856292/donut_kyxgop.mp4'
                  },
                  {
                    name: 'Cake',
                    price: 25,
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514004/cake_ixvel8.jpg'
                  }
                ]
              }
            },
            {
              name: 'Drinks',
              items: {
                create: [
                  {
                    name: 'Protein coctail',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514007/protein_coctail_dhl2ny.jpg'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'Acai And Co',
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
              name: 'Bowls',
              items: {
                create: [
                  {
                    name: 'Asia bowl',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762513215/acia_bowl_lpkmem.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475026/acaiandco1_uun7f7.mp4',
                  }, {
                    name: 'Bowl',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762513216/bowl2_dl3krm.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475027/acaiandco2_cohlof.mp4',
                  }, {
                    name: 'Bowl',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762513215/bowl_x5akin.jpg',
                  },
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Ice cream',
                    price: 25,
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762513220/ice_cream_gwydf7.jpg'
                  },
                  {
                    name: 'Ice cream with fruits',
                    price: 25,
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762513217/dessert_kg2mgg.jpg'
                  }
                ]
              }
            },
            {
              name: 'Sandwitch',
              items: {
                create: [
                  {
                    name: 'Sandwitch',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762856465/One_stack_endless_flavors_Our_NEW_flatbreads_are_here_to_steal_the_spotlight_are_you_ready_to_ukggrw.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475028/acaiandco3_qobvqf.mp4'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    name: 'B.laban',
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
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Choco burger',
                    price: '25',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514967/sweat_burger_um0hz2.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475477/b.laban.uae2_ywfiqw.mp4',
                  },
                  {
                    name: 'Qashtota',
                    price: '30',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762857077/get_shcxcy.mp4',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514966/chocolate_cream_skzujs.jpg',
                  },
                  {
                    name: 'Chocolate cake',
                    price: '40',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514963/chocolate_cake_xgerzc.jpg',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762857218/6_flavour_from_Gelatoty_Roma...From_Italian_gelato_to_Belgian_cake_dart2v.mp4'
                  },
                  {
                    name: 'Bowl',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514963/cake_igpcgg.jpg',
                  },
                  {
                    name: 'Bowl',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514960/bowl_kymenp.jpg',
                  },
                  {
                    name: 'Cake with cream',
                    price: '40',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514961/cake_cream_e0bbvm.jpg',
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
    name: 'Zaroob',
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
              name: 'Breakfast',
              items: {
                create: [
                  {
                    name: 'Zaroobian Breakfast Tray For 2',
                    price: '88',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762858622/zaroobianbreakfasttrayfor2n_iavwnz.webp',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762858543/get_2_sg2szc.mp4'
                  }
                ]
              }
            },
            {
              name: 'Main Dishes',
              items: {
                create: [
                  {
                    name: 'Zaatar',
                    price: '15',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762858755/zaatar_gz7b3n.webp',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762858723/get_3_mbyvo8.mp4',
                  },
                  {
                    name: 'Kebab',
                    price: '35',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514379/kebab_exqadl.webp',
                    // video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762857583/get_1_kdg2ka.mp4'
                  },
                  {
                    name: 'Sandwitch',
                    price: '35',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514382/RoastBeef_qehr0a.webp',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762857452/sandwitch_zkop1c.mp4'
                  }
                ]
              }
            },
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Jam Burger',
                    price: '20',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514377/Jam_Butter_burger_jpd4kz.webp'
                  },
                  {
                    name: 'Nutella Banana Burger',
                    price: '20',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514380/Nutella_Banana_burger_lramim.webp'
                  }
                ]
              }
            }
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
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Cake',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762859453/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-11_%D0%BE_13.10.26_vbozs0.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762859555/cheescake_pjs95b.mp4'
                  },
                  {
                    name: 'Ice Cream',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762861273/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-11_%D0%BE_13.40.55_fahdyo.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762861342/Enjoy_every_bite_of_our_refreshing_high-protein_ice_cream_transporting_you_to_paradise_l_en1nvl.mp4'
                  },
                  {
                    name: 'Cake',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762861544/cake_jfk4qm.png',
                    highlighted: true,
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762861532/cake_qfej2o.mp4'
                  }
                ]
              }
            },
            {
              name: 'Breakfast',
              items: {
                create: [
                  {
                    name: 'New Halloumi Sandwich',
                    price: '31.5',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762515437/Halloumi_Sandwich_1759932633_hnenno.jpg',
                  },
                  {
                    name: 'Spinash Omlet',
                    price: '23',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762515440/Spanish_Omlette_1759934721_mdpfeb.jpg',
                  },
                  {
                    name: 'New egg burger',
                    price: '26.5',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762515440/New_Egg_Burger_1759934632_gzrbpo.jpg',
                  },
                ]
              }
            }
          ]
        }
      }
    }
  }
]
