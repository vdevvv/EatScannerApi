import {Prisma} from "@prisma/client";

export const restaurants: Prisma.RestaurantCreateInput[] = [
  {
    name: 'pickl.mena',
    country: 'UAE',
    city: 'Khalifa',
    address: 'Khalifa City',
    googleRating: '3.3',
    trustpilotRating: '4',
    latitude: 24.4327658,
    longitude: 54.5655734,
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762464069/get_bgiptr.mp4',
                    description: 'Single or double chuck patty, cheese, potato bun & your choice of toppings'
                  },
                  {
                    name: 'The New Yorker Cheeseburger',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762787739/chessburger2_jxoqvo.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762467559/WEEKLY_CONTEST_the_thing_that_keeps_happening_even_though_your_brain_swears_last_Monday_was_y_gwcu8m.mp4',
                    price: '32',
                    description: 'Double chuck patty, cheese, tomato, lettuce, secret sauce & potato bun'
                  },
                  {
                    name: 'The Original Cheeseburger',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762787739/chessburger3_uxwz7n.jpg',
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
    name: 'pitfirepizzabakers',
    country: 'UAE',
    city: 'Dubai',
    address: 'Dubai Hills Estate Hadaeq Sheikh Mohammed Bin Rashid',
    latitude: 25.1077023,
    longitude: 55.2404672,
    googleRating: '5',
    trustpilotRating: '5',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Pizza',
              items: {
                create: [
                  {
                    name: 'Pepperoni Primo 10"',
                    price: '67',
                    description: 'A staple pie we rock like no other in Dubai. Need we say more?',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506720/pitfireh-pizza_sdidqm.webp',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468009/Who_remembers_our_Pitfire_records_blastfromthepast_PitfirePizza_PitfireDubai_PitfirePizzaDuba_knojwk.mp4',
                  },
                  {
                    name: 'Margherita 10"',
                    price: '60',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506769/margarita-pifire_y2elah.webp',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468734/The_weather_s_testing_us_these_days._PitfirePizza_PitfireDubai_BestPizzaDubai_HellsKitchen_D_ytdkbu.mp4',
                    description: 'Pitfire’s own seasoned tomato sauce, topped with hand torn mozzarella, a drizzle of olive oil, a dash of parmesan and a handful of fresh basil after bake.'
                  },
                  {
                    name: 'Bresaola & Rocket 10',
                    price: '62',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762506828/Bresaola_Rocket10_22_p0w5cx.webp',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468631/Lunch_deal_More_like_the_real_deal._PitfirePizza_PitfireDubai_DubaiPizza_BestPizzaDubai_xujf40.mp4',
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
    name: 'Alsafadi restaurant',
    country: 'UAE',
    city: 'Dubai',
    address: 'Al Rigga Rd Deira',
    latitude: 25.2632045,
    longitude: 55.3250661,
    googleRating: '4.4',
    trustpilotRating: '4.4',
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Main dishes',
              items: {
                create: [
                  {
                    name: 'Juicy grilled chicken',
                    price: '80',
                    description: 'Marinated with spices and char-grilled to perfection. A simple dish, rich in authentic flavor.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504337/566120962_18532510414058656_3158066376928602230_n_m1dcap.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762469219/_Happy_international_Chef_s_Day_%D9%86%D9%87%D9%86%D9%8A%D9%94%D9%83%D9%85_%D8%A8%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D8%B4%D9%8A%D9%81_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A_%D9%85%D9%86_%D8%A7%D9%84%D8%B5%D9%81%D8%AF%D9%8A_alsafadi_%D8%A7%D9%84%D8%B5%D9%81%D8%AF%D9%8A____ex2e0b.mp4',
                  },
                  {
                    name: 'Shish Tawouk',
                    price: '76',
                    description: 'Marinated and grilled to perfection.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504406/569310420_18533101867058656_3080983263939563066_n_b3aru8.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762469294/Chef_Omar_introduces_this_month_s_special-_Fish_Kibbeh_A_delicious_harmony_of_fish_grains_and_mvspi1.mp4',
                  },
                  {
                    name: 'Grilled Sea Bass',
                    price: '80',
                    description: 'Simple, fresh, and full of flavor.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762504505/GrilledSeaBass_vokbxo.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762469392/Now_Open_in_Dubai_Festival_City_Mall_We_are_thrilled_to_announce_the_opening_of_our_newest_Al_Sa_gvz85i.mp4',
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
    city: 'Ras Al Khaimah',
    address: 'Al Manar Mall Dafan Al Nakheel',
    latitude: 25.7824396,
    longitude: 55.9649878,
    googleRating: '3.3',
    trustpilotRating: '3.4',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470110/gazeborestaurant1_dys2s4.mp4',
                  },
                  {
                    name: 'Murgh Gilafi Seekh',
                    price: '80',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507604/Murgh-Gilafi-Seekh-700x456_tksl2l.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470184/gazeborestaurant2_hjaq1a.mp4',
                  }
                ]
              }
            },
            {
              name: 'Kuch Naram Kuch Garam',
              items: {
                create: [
                  {
                    name: 'Samosa Platter',
                    price: '28',
                    description: 'An assortment of cheese, veg. and your choice of samosas-mutton mince/chicken mince.',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762507828/Samosa-Platter-2-700x456_odef3r.webp',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470240/gazeborestaurant3_mqnak4.mp4'
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
    address: 'Marasi Dr Business Bay',
    latitude: 25.1868174,
    longitude: 55.2715879,
    googleRating: '4.8',
    trustpilotRating: '4.6',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470753/couqley1_ey0rqp.mp4',
                  },
                  {
                    name: 'Tartar',
                    price: '63',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/tartare_vmk8ik.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470812/couqley2_souer9.mp4',
                  },
                  {
                    name: 'Mussels',
                    price: '43',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508638/mussles_klgfbd.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470865/couqley3_qr4ior.mp4'
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
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/secret-coctail_uyap7a.jpg'
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
    longitude: 55.2129476,
    googleRating: '5',
    trustpilotRating: '5',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762471335/hightjoint1_la97hw.mp4',
                  },
                  {
                    name: 'Burger',
                    price: '33',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509461/burger2_fjicb7.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762471437/hightjoin2_xxlw0y.mp4',
                  },
                  {
                    name: 'Burger',
                    price: '32',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762509461/burger3_ijax5k.jpg',
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
    name: 'Sushiart UAE',
    country: 'UAE',
    city: 'Abu Dhabi',
    address: '107 Hamouda Bin Ali Al Dhaheri St Al Maryah Island MI10',
    latitude: 24.494728,
    longitude: 54.382669,
    googleRating: '2.3',
    trustpilotRating: '2',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472245/sushiartuae1_ighcmk.mp4',
                  },
                  {
                    name: 'Summer Box',
                    price: '70',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762510225/sushi-set_qg6grk.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472247/sushiartuae3_pfhola.mp4'
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
    name: 'Zaatarwzeit UAE',
    country: 'UAE',
    city: 'Dubai',
    address: 'Trade Center First',
    latitude: 25.2086823,
    longitude: 55.2697648,
    googleRating: '3.3',
    trustpilotRating: '4',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762791341/zaatwar_kebab_wv9yuy.mp4',
                  },
                  {
                    name: 'Pizza',
                    price: '42',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511162/pizza_deqyh9.jpg',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762791637/zaatarw_pizza_nt0hhx.mp4',
                  },
                  {
                    name: 'Salad',
                    price: '48',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511163/salad_thbb0o.jpg',
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
    address: 'Mall of the Emirates',
    latitude: 25.1246352,
    longitude: 55.199564,
    googleRating: '3.3',
    trustpilotRating: '4.4',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762853911/fresh_ow8n3j.mp4'
                  },
                  {
                    name: 'Coffee',
                    price: '15',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762511574/coffee_uuejrr.jpg',
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
    address: 'Hessa St Al Barsha',
    latitude: 25.0935607,
    longitude: 55.1828425,
    googleRating: '2.3',
    trustpilotRating: '2',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473787/malakaltawoukuae3_zjiyzn.mp4'
                  },
                  {
                    name: 'Asian Bowl',
                    price: '33',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512104/bowl_vyw2gt.jpg',
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
    address: 'Mohamed Bin Zayed City - Z4',
    latitude: 24.3643495,
    longitude: 54.555376,
    googleRating: '5',
    trustpilotRating: '5',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762856052/cake_tvzmg2.mp4',
                  },
                  {
                    name: 'Ice cream',
                    price: '20',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762512675/ice-cream_dqhvuy.jpg',
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
    name: 'Rascalsdeli',
    country: 'UAE',
    city: 'Dubai',
    address: 'Wasl Square , Block 7',
    latitude: 25.1859602,
    longitude: 55.237091,
    googleRating: '4.3',
    trustpilotRating: '4',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474708/rascalsdeli3_wt5ie5.mp4'
                  }, {
                    name: 'Burger',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514003/burger2_ghtahj.jpg',
                  }, {
                    name: 'Sandwitch',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514008/sandwitch_mevyyz.jpg',
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
    address: 'Muwaileh Commercial - Industrial Area',
    latitude: 25.3045932,
    longitude: 55.4672761,
    googleRating: '3.3',
    trustpilotRating: '3',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475026/acaiandco1_uun7f7.mp4',
                  }, {
                    name: 'Bowl',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762513216/bowl2_dl3krm.jpg',
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
                    name: '',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762856465/One_stack_endless_flavors_Our_NEW_flatbreads_are_here_to_steal_the_spotlight_are_you_ready_to_ukggrw.jpg',
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
    name: 'b.laban.uae1',
    country: 'UAE',
    city: 'Ajman',
    address: 'Al Rashidiya 1',
    latitude: 25.3903827,
    longitude: 55.4583494,
    googleRating: '1',
    trustpilotRating: '1',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475477/b.laban.uae2_ywfiqw.mp4',
                  },
                  {
                    name: 'Qashtota',
                    price: '30',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762857077/get_shcxcy.mp4',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514966/chocolate_cream_skzujs.jpg',
                  },
                  {
                    name: 'Chocolate cake',
                    price: '40',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762514963/chocolate_cake_xgerzc.jpg',
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
    address: 'DIFC',
    latitude: 25.2134595,
    longitude: 55.2750632,
    googleRating: '3.3',
    trustpilotRating: '4',
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
    address: 'Jumeirah 3',
    latitude: 25.1505214,
    longitude: 55.1968515,
    googleRating: '4',
    trustpilotRating: '4',
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
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762859555/cheescake_pjs95b.mp4'
                  },
                  {
                    name: 'Ice Cream',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762861273/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-11-11_%D0%BE_13.40.55_fahdyo.png',
                    video: 'https://res.cloudinary.com/doe6zvkod/video/upload/v1762861342/Enjoy_every_bite_of_our_refreshing_high-protein_ice_cream_transporting_you_to_paradise_l_en1nvl.mp4'
                  },
                  {
                    name: 'Cake',
                    price: '30',
                    image: 'https://res.cloudinary.com/doe6zvkod/image/upload/v1762861544/cake_jfk4qm.png',
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