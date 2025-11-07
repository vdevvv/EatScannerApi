import {Prisma} from "@prisma/client";

export const restaurants: Prisma.RestaurantCreateInput[] = [
  {
    name: 'pickl.mena',
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762464069/get_bgiptr.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762467559/WEEKLY_CONTEST_the_thing_that_keeps_happening_even_though_your_brain_swears_last_Monday_was_y_gwcu8m.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762467667/Why_are_french_fries_called_french_fries_So_apparently_French_fries_weren_t_actually_French._Or_m5eznz.mp4'
    ],
    country: 'UAE',
    city: 'Khalifa',
    address: 'Khalifa City',
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762505292/pickl-burder_krnzuk.jpg'],
                    description: 'Single or double chuck patty, cheese, potato bun & your choice of toppings'
                  },
                  {
                    name: 'The New Yorker Cheeseburger',
                    price: '32',
                    description: 'Double chuck patty, cheese, tomato, lettuce, secret sauce & potato bun'
                  },
                  {
                    name: 'The Original Cheeseburger',
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
                    price: '38',
                    description: 'fresh fried chicken, comeback sauce, dill pickles, lettuce, potato bun'
                  },
                  {
                    name: 'The chicken caesar sando',
                    price: '37',
                    description: 'fresh fried chicken, caesar sauce, parmesan, cheese, lettuce, potato bun',
                  },
                  {
                    name: 'Buffalo chicken sando',
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468009/Who_remembers_our_Pitfire_records_blastfromthepast_PitfirePizza_PitfireDubai_PitfirePizzaDuba_knojwk.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468734/The_weather_s_testing_us_these_days._PitfirePizza_PitfireDubai_BestPizzaDubai_HellsKitchen_D_ytdkbu.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762468631/Lunch_deal_More_like_the_real_deal._PitfirePizza_PitfireDubai_DubaiPizza_BestPizzaDubai_xujf40.mp4',
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Dubai Hills Estate Hadaeq Sheikh Mohammed Bin Rashid',
    latitude: 25.1077023,
    longitude: 55.2404672,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762506720/pitfireh-pizza_sdidqm.webp']
                  },
                  {
                    name: 'Margherita 10"',
                    price: '60',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762506769/margarita-pifire_y2elah.webp'],
                    description: 'Pitfire’s own seasoned tomato sauce, topped with hand torn mozzarella, a drizzle of olive oil, a dash of parmesan and a handful of fresh basil after bake.'
                  },
                  {
                    name: 'Bresaola & Rocket 10',
                    price: '62',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762506828/Bresaola_Rocket10_22_p0w5cx.webp'],
                    description: 'Seasoned tomato sauce with mozzarella, baked then topped withdeli-thin sliced bresaola (air dried beef) and piled high with fresh rocket and shaved parmesan, the rocket arrives packaged separately'
                  },
                  {
                    name: 'Buffalo Chicken 10"',
                    price: '65',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762506868/buffalo-chicken_vhabav.webp'],
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762506911/coke_uct2d6.webp'],
                    description: 'Coke 500mL'
                  },
                  {
                    name: 'Sprite 500mL',
                    price: '15',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762506911/sprite_eopqbq.webp'],
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762469219/_Happy_international_Chef_s_Day_%D9%86%D9%87%D9%86%D9%8A%D9%94%D9%83%D9%85_%D8%A8%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D8%B4%D9%8A%D9%81_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A_%D9%85%D9%86_%D8%A7%D9%84%D8%B5%D9%81%D8%AF%D9%8A_alsafadi_%D8%A7%D9%84%D8%B5%D9%81%D8%AF%D9%8A____ex2e0b.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762469294/Chef_Omar_introduces_this_month_s_special-_Fish_Kibbeh_A_delicious_harmony_of_fish_grains_and_mvspi1.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762469392/Now_Open_in_Dubai_Festival_City_Mall_We_are_thrilled_to_announce_the_opening_of_our_newest_Al_Sa_gvz85i.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Al Rigga Rd Deira',
    latitude: 25.2632045,
    longitude: 55.3250661,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762504337/566120962_18532510414058656_3158066376928602230_n_m1dcap.jpg']
                  },
                  {
                    name: 'Shish Tawouk',
                    price: '76',
                    description: 'Marinated and grilled to perfection.',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762504406/569310420_18533101867058656_3080983263939563066_n_b3aru8.jpg']
                  },
                  {
                    name: 'Grilled Sea Bass',
                    price: '80',
                    description: 'Simple, fresh, and full of flavor.',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762504505/GrilledSeaBass_vokbxo.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762504743/DebsTahiniIceCream_tmex6n.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762504572/FreshFruitCocktail_inbqcx.jpg']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470110/gazeborestaurant1_dys2s4.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470184/gazeborestaurant2_hjaq1a.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470240/gazeborestaurant3_mqnak4.mp4'
    ],
    country: 'UAE',
    city: 'Ras Al Khaimah',
    address: 'Al Manar Mall Dafan Al Nakheel',
    latitude: 25.7824396,
    longitude: 55.9649878,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762507252/AFGHANI-MURGH_rtg2ri.webp']
                  },
                  {
                    name: 'Murgh Gilafi Seekh',
                    price: '80',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762507604/Murgh-Gilafi-Seekh-700x456_tksl2l.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762507828/Samosa-Platter-2-700x456_odef3r.webp']
                  },
                  {
                    name: 'Subzi Samoza',
                    price: '23',
                    description: 'An all time favourite, fried pastry pyramids stuffed with steamed potatoes and green peas tempered with cumin, ginger, green chillies and coriander seeds',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762507948/Subzi-Samosa-700x456_kzxm1g.jpg']
                  },
                  {
                    name: 'Makai Cheese Tikki',
                    price: '28',
                    description: 'A seasoned mixture of potatoes, fresh corn, and green peas, formed into small patties stuffed with cheese; shallow fried',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762507948/MAKAI-CHEESE-TIKKI-2-700x456_vv70m9.webp']
                  },
                  {
                    name: 'Papdi Chat',
                    price: '18',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762507947/PAPDI-CHAAT-700x456_d56yd6.webp'],
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470753/couqley1_ey0rqp.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470812/couqley2_souer9.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762470865/couqley3_qr4ior.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Marasi Dr Business Bay',
    latitude: 25.1868174,
    longitude: 55.2715879,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762508637/free-with-meat_opx3nb.jpg'],
                  },
                  {
                    name: 'Tartar',
                    price: '63',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/tartare_vmk8ik.jpg']
                  },
                  {
                    name: 'Mussels',
                    price: '43',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762508638/mussles_klgfbd.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/secret-coctail_uyap7a.jpg']
                  },
                  {
                    name: 'Secret Cocktail 2',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/uknown-coctail-2_inrfz9.jpg']
                  },
                  {
                    name: 'Kaiken Wine',
                    price: '60',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762508639/kaiken-wine_g50yqm.jpg']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762471335/hightjoint1_la97hw.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762471437/hightjoin2_xxlw0y.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762471438/hightjoin3_f4dq4l.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'High joint Al Manara',
    latitude: 25.1482786,
    longitude: 55.2129476,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762509460/burger1_uxw3d6.jpg'],
                  },
                  {
                    name: 'Burger',
                    price: '33',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762509461/burger2_fjicb7.jpg'],
                  },
                  {
                    name: 'Burger',
                    price: '32',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762509461/burger3_ijax5k.jpg'],
                  },
                  {
                    name: 'Croissant',
                    price: '33',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762509497/croissant_lutqne.jpg']
                  },
                  {
                    name: 'French fries',
                    price: '28',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762509497/french_fries_phhlcr.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762509498/lotus-desert_cwprbc.jpg']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472245/sushiartuae2_qxeaie.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472245/sushiartuae1_ighcmk.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472247/sushiartuae3_pfhola.mp4'
    ],
    country: 'UAE',
    city: 'Abu Dhabi',
    address: '107 Hamouda Bin Ali Al Dhaheri St Al Maryah Island MI10',
    latitude: 24.494728,
    longitude: 54.382669,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762510224/Machu_Picchu_Poke_vhabcd.jpg'],
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762510227/sushi-set2_azwyzi.jpg']
                  },
                  {
                    name: 'Summer Box',
                    price: '70',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762510225/sushi-set_qg6grk.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762510223/ikura-spring-roll_zcv4rq.jpg'],
                  },
                  {
                    name: 'PacMan roll',
                    price: '42',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762510224/pac-man-roll_wi6rap.jpg']
                  },
                  {
                    name: 'Tempura roll',
                    price: '39',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762510227/tempura-tango-roll_cvcxla.jpg']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472903/zaatarwzeituae1_qaizqy.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472904/zaatarwzeituae3_x06ce1.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762472904/zaatarwzeituae2_p27lwq.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Trade Center First',
    latitude: 25.2086823,
    longitude: 55.2697648,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511161/kebab_ptnmmt.jpg'],
                  },
                  {
                    name: 'Pizza',
                    price: '42',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511162/pizza_deqyh9.jpg'],
                  },
                  {
                    name: 'Salad',
                    price: '48',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511163/salad_thbb0o.jpg'],
                  },
                  {
                    name: 'Salad King',
                    price: '45',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511167/salad_king_geml4v.jpg'],
                  },
                  {
                    name: 'Taco',
                    price: '39',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511167/taco_s6ykdc.jpg'],
                  },
                  {
                    name: 'Sunshine bowl',
                    price: '50',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511170/sunshine-bowl_aeabus.jpg'],
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473435/commongrounds1_yni7tf.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473436/commongrounds2_mer5or.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473437/commongrounds3_eqfvyj.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Mall of the Emirates',
    latitude: 25.1246352,
    longitude: 55.199564,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511574/bowl_of_sunshine_j3xfry.jpg'],
                  },
                  {
                    name: 'Hight protein kebab',
                    price: '45',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511577/Hight_protein_kebab_c1zuq5.jpg'],
                  },
                  {
                    name: 'Toast',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511577/toast_tgvzsl.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511575/fresh_pvxih6.jpg'],
                  },
                  {
                    name: 'Coffee',
                    price: '15',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511574/coffee_uuejrr.jpg'],
                  },
                  {
                    name: 'Energy booster',
                    price: '22',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762511574/energy_booster_eepeen.jpg'],
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473786/malakaltawoukuae1_x3mthp.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473787/malakaltawoukuae2_skcufp.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762473787/malakaltawoukuae3_zjiyzn.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Hessa St Al Barsha',
    latitude: 25.0935607,
    longitude: 55.1828425,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512105/burger_combo_fanegc.jpg']
                  },
                  {
                    name: 'Sandwitch combo',
                    price: '40',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512108/sandwich_nx0dd2.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512106/sandiwch2_gsx2f2.jpg']
                  },
                  {
                    name: 'Bowl',
                    price: '33',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512104/bowl_vyw2gt.jpg'],
                  },
                  {
                    name: 'Kebab',
                    price: '33',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512105/kebab_k3cbtg.jpg'],
                  },
                  {
                    name: 'Soup',
                    price: '33',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512109/soup_r9ohax.jpg']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474304/findsalt1_wh9ehk.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474306/findsalt2_wae7nx.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474307/findsalt3_slslum.mp4',
    ],
    country: 'UAE',
    city: 'Abu Dhabi',
    address: 'Mohamed Bin Zayed City - Z4',
    latitude: 24.3643495,
    longitude: 54.555376,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512671/burger_boxvzb.jpg'],
                  },
                  {
                    name: 'French fries',
                    price: '27',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512674/french_fries_uk5glw.jpg'],
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512672/cake_he6fgn.jpg'],
                  },
                  {
                    name: 'Ice cream',
                    price: '20',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512675/ice-cream_dqhvuy.jpg'],
                  },
                  {
                    name: 'Cookie',
                    price: '10',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512672/cookie_bj67ou.jpg'],
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762512676/MANGO_SLUSHYy_ugucxa.jpg']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474706/rascalsdeli1_utx5fd.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474707/rascalsdeli2_du1jur.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762474708/rascalsdeli3_wt5ie5.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Wasl Square , Block 7',
    latitude: 25.1859602,
    longitude: 55.237091,
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
                    price: '25',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514002/burger_y8jfua.jpg'],
                  }, {
                    name: 'Burger',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514003/burger2_ghtahj.jpg'],
                  }, {
                    name: 'Sandwitch',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514008/sandwitch_mevyyz.jpg'],
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514006/donut_muevdm.jpg']
                  },
                  {
                    name: 'Cake',
                    price: 25,
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514004/cake_ixvel8.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514007/protein_coctail_dhl2ny.jpg']
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
    name: 'Acaiandco',
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475026/acaiandco1_uun7f7.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475027/acaiandco2_cohlof.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475028/acaiandco3_qobvqf.mp4'
    ],
    country: 'UAE',
    city: 'Sharjah',
    address: 'Muwaileh Commercial - Industrial Area',
    latitude: 25.3045932,
    longitude: 55.4672761,
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762513215/acia_bowl_lpkmem.jpg'],
                  }, {
                    name: 'Bowl',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762513216/bowl2_dl3krm.jpg'],
                  }, {
                    name: 'Bowl',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762513215/bowl_x5akin.jpg'],
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762513220/ice_cream_gwydf7.jpg']
                  },
                  {
                    name: 'Ice cream with fruits',
                    price: 25,
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762513217/dessert_kg2mgg.jpg']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762513221/sandwitch_e6eczl.jpg']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475479/b.laban.uae3_c91esy.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475477/b.laban.uae2_ywfiqw.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475481/b.laban.uae1_mi1zcf.mp4'
    ],
    country: 'UAE',
    city: 'Ajman',
    address: 'Al Rashidiya 1',
    latitude: 25.3903827,
    longitude: 55.4583494,
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Desserts',
              items: {
                create: [
                  {
                    name: 'Sweat burger',
                    price: '25',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514967/sweat_burger_um0hz2.jpg'],
                  },
                  {
                    name: 'Chocolate cake',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514966/chocolate_cream_skzujs.jpg'],
                  },
                  {
                    name: 'Chocolate cake',
                    price: '40',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514963/chocolate_cake_xgerzc.jpg'],
                  },
                  {
                    name: 'Bowl',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514963/cake_igpcgg.jpg'],
                  },
                  {
                    name: 'Bowl',
                    price: '30',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514960/bowl_kymenp.jpg'],
                  },
                  {
                    name: 'Cake with cream',
                    price: '40',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514961/cake_cream_e0bbvm.jpg'],
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
    name: 'zaroob',
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475860/zaroob1_gudzkv.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475862/zaroob3_uwxg02.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762475864/zaroob2_kmdiye.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'DIFC',
    latitude: 25.2134595,
    longitude: 55.2750632,
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Breakfast',
              items: {
                create: [
                  {
                    name: 'Eggs',
                    price: '22',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514376/eggs_dbqdxa.webp'],
                  }
                ]
              }
            },
            {
              name: 'Main Dishes',
              items: {
                create: [
                  {
                    name: 'French fries',
                    price: '15',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514376/frenchfries_hlf57p.webp']
                  },
                  {
                    name: 'Kebab',
                    price: '35',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514379/kebab_exqadl.webp']
                  },
                  {
                    name: 'Sandwitch',
                    price: '35',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514382/RoastBeef_qehr0a.webp']
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
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514377/Jam_Butter_burger_jpd4kz.webp']
                  },
                  {
                    name: 'Nutella Banana Burger',
                    price: '20',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762514380/Nutella_Banana_burger_lramim.webp']
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
    videos: [
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762476254/Lowcalories3_ckce8h.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762476252/Lowcalories2_x5ktpn.mp4',
      'https://res.cloudinary.com/doe6zvkod/video/upload/v1762476250/Lowcalories1_yrspqa.mp4'
    ],
    country: 'UAE',
    city: 'Dubai',
    address: 'Jumeirah 3',
    latitude: 25.1505214,
    longitude: 55.1968515,
    menu: {
      create: {
        categories: {
          create: [
            {
              name: 'Breakfast',
              items: {
                create: [
                  {
                    name: 'Beans burrito',
                    price: '12.5',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762515433/Beans_burrito_1759930953_pwsjew.jpg'],
                  },
                  {
                    name: 'Egg Cocktail',
                    price: '23',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762515435/Egg_Cocktail_1759934024_ru5713.jpg'],
                  },
                  {
                    name: 'Pan Cake',
                    price: '33.5',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762515437/Pancake_1759931324_kswdug.jpg'],
                  },
                  {
                    name: 'New Halloumi Sandwich',
                    price: '31.5',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762515437/Halloumi_Sandwich_1759932633_hnenno.jpg'],
                  },
                  {
                    name: 'Spinash Omlet',
                    price: '23',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762515440/Spanish_Omlette_1759934721_mdpfeb.jpg'],
                  },
                  {
                    name: 'New egg burger',
                    price: '26.5',
                    images: ['https://res.cloudinary.com/doe6zvkod/image/upload/v1762515440/New_Egg_Burger_1759934632_gzrbpo.jpg'],
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