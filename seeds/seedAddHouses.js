
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('houses').del(),

    // Inserts seed entries
    knex('houses').insert({id: 1, name: "House Roa", imagePath: "http://www.kuragallery.co.nz/images/kiwi-small-file.jpg", description: "House Roa is a noble House, and one of the youngest in the realm of the Seven Kingdoms.  House Roa are the watchers of the wall, and the protectors of the realms of men.", created_at: Date.now(), updated_at: Date.now()}),
    knex('houses').insert({id: 2, name: "House Hihi", imagePath: "http://www.sanctuarymountain.co.nz/vdb/image/i89", description: "House Hihi is an ancient House, and are soon travelling north of the Wall, to become wildings.  Fierce intellect, and coding prowess opitmises House Hihi.", created_at: Date.now(), updated_at: Date.now()}),
    knex('houses').insert({id: 3, name: "House EDA", imagePath: "http://devacademy.co.nz/wp-content/uploads/2015/06/EDA-square-hires-180x180.png", description: "House EDA is a new house in the seven Kingdoms, but it is rapidly making a name for itself by defeating education houses.", created_at: Date.now(), updated_at: Date.now()}),
    knex('houses').insert({id: 4, name: "House Kotare", imagePath: "http://www.shanehansen.co.nz/wp-content/uploads/2013/08/hansens_TaKotareWaikato.jpg", description: "House Kotare is a happy house, forging it's own unique path in the Seven Kingdoms.  It's loyal members are from Westeros, as well as across the narrow seas. It is becoming one of the oldest houses in in the Seven Kingdoms.", created_at: Date.now(), updated_at: Date.now()})

  );
};
