
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('characters').del(),

    // Inserts seed entries
    knex('characters').insert({id: 1, name: "Olly", house: "Roa", houseId: "1", imagePath: "./public/images/profile-pics/olly.jpg", description: "I love podcasts, exercise, scifi, surfing and code! I'm a 1,2,3 type of guy.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 2, name: "Hape", house: "Roa", houseId: "1", imagePath: "./public/images/profile-pics/hape.jpg", description: "Food, music, sports, the outdoors, health & fitness, family.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 3, name: "Uili", house: "Roa", houseId: "1", imagePath: "./public/images/profile-pics/uili.jpg", description: "I like making stuff. - out of wood mainly.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 4, name: "Surya", house: "Roa", houseId: "1", imagePath: "./public/images/profile-pics/surya.jpg", description: "I am a deep thinker and  I like music, dance and programming.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 5, name: "Tony", house: "Hihi", houseId: "2", imagePath: "./public/images/profile-pics/tony.jpg", description: "I loved Star Trek before it was cool to love Star Trek.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 6, name: "Ben", house: "Hihi", houseId: "2", imagePath: "./public/images/profile-pics/ben.jpg", description: "Activist app appropriator, passionate 'Zip' aficionado.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 7, name: "Ollie", house: "Hihi", houseId: "2", imagePath: "./public/images/profile-pics/olll2.jpg", description: "Hobbies: Singing duets with Vicken.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 8, name: "Keanu", house: "Hihi", houseId: "2", imagePath: "./public/images/profile-pics/keanu.jpg", description: "I am a deep thinker and  I like music, dance and programming.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 9, name: "Piet", house: "House EDA", houseId: "3", imagePath: "./public/images/profile-pics/piet.jpg", description: "Piet is a great teacher, panther trainer and a former hardware nerd.  General legend and learning friend, he is loyal to House EDA.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 10, name: "Simon", house: "House EDA", houseId: "3", imagePath: "./public/images/profile-pics/simon.jpg", description: "Simon is a loyal teacher and developer for House EDA.  He is incredibly reliable, carrying out high risk missions for his EDA lords.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 11, name: "Joshua", house: "House EDA", houseId: "3", imagePath: "./public/images/profile-pics/joshua.jpg", description: "Joshua is a puzzle solver, and one of the original founders of House EDA.  An intelligent Lord with a quick witt, he will not be out thought.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 12, name: "Mix", house: "House EDA", houseId: "3", imagePath: "./public/images/profile-pics/mix.jpg", description: "Mix is a Knight of Valour, teacher and a self described open source nerd.  He serves House EDA with loyalty, and will defend his house with blood.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 13, name: "Lizzie", house: "House Kotare", houseId: "4", imagePath: "./public/images/profile-pics/lizzie.jpg", description: "Lizzie embraces change, and has faith in the peolpe of the Seven Kingdoms to make their own destiny.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 14, name: "Rahmona", house: "House Kotare", houseId: "4", imagePath: "./public/images/profile-pics/rahmona.jpg", description: "Rahmonda is originally from  Essos, across the narrow sea from Westeros. She is a dog lover, technology enthusiast, and loyal to the throne.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 15, name: "Jess", house: "House Kotare", houseId: "4", imagePath: "....", description: "Jess is an artist, a coder, a linux nerd and a forest druid. She is also a worg, able to communicate with animals.", created_at: Date.now(), updated_at: Date.now()}),
    knex('characters').insert({id: 16, name: "Heidi", house: "House Kotare", houseId: "4", imagePath: "....", description: "Heidi loves change, just not today.  She is a mystic.", created_at: Date.now(), updated_at: Date.now()})

  );
};





