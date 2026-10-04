const spotsVisit = [
    { name: 'Promenade Beach', note: 'Sea-facing boulevard lined with French-era buildings — best for the evening walk.', tag: '10 min from venue' },
    { name: 'French Quarter (White Town)', note: 'Mustard-and-bougainvillea streets, quiet cafés, hardly any traffic.', tag: 'Best at golden hour' },
    { name: 'Auroville', note: 'The Matrimandir and township gardens — worth the early start.', tag: '~40 min drive' },
    { name: 'Sri Aurobindo Ashram', note: "A calm break from the wedding buzz — gardens and a reading room.", tag: '10 min from venue' },
    { name: 'Matrimandir', note: "Auroville's golden meditation chamber — viewing needs a booked slot, arrive early.", tag: '~40 min drive', link: 'https://www.google.com/maps/search/?api=1&query=Matrimandir%2C+Auroville%2C+Puducherry' },
    { name: 'Pichavaram Mangrove Forest', note: 'Boat through the world’s second-largest mangrove forest.', tag: '~1.5 hr drive', link: 'https://www.google.com/maps/search/?api=1&query=Pichavaram+Mangrove+Forest' },
    { name: 'Arikamedu Ruins', note: 'Quiet ruins of an ancient Indo-Roman trading port.', tag: '~20 min drive', link: 'https://www.google.com/maps/search/?api=1&query=Arikamedu%2C+Puducherry' },
    { name: 'Arulmigu Manakula Vinayagar Temple', note: "Pondicherry's best-loved Ganesha temple, right in White Town.", tag: '10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Arulmigu+Manakula+Vinayagar+Temple%2C+Puducherry' },
    { name: 'Pondy Ocean Park', note: 'Water park and rides on the East Coast Road — a fun half-day out.', tag: '~1 hr drive', link: 'https://www.google.com/maps/search/?api=1&query=Pondy+Ocean+Park' },
    { name: 'Paradise Beach', note: 'Golden sand reached by a short boat ride from Chunnambar.', tag: '~20 min + boat', link: 'https://www.google.com/maps/search/?api=1&query=Paradise+Beach%2C+Puducherry' },
    { name: 'Rock Beach', note: 'The rocky stretch of the Promenade by the war memorial.', tag: '10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Rock+Beach%2C+Puducherry' },
    { name: 'Serenity Beach', note: 'Surf, cafés, and a quieter shoreline north of town.', tag: '~25 min drive', link: 'https://www.google.com/maps/search/?api=1&query=Serenity+Beach%2C+Puducherry' },
    { name: 'Eden Beach', note: 'A calmer backwater-side beach near Chunnambar.', tag: '~20 min + boat', link: 'https://www.google.com/maps/search/?api=1&query=Eden+Beach%2C+Puducherry' }
];
const spotsEat = [
    { name: 'Cuisine de Pondy', note: 'Biryani spot right by the venue — first stop if you are hungry and haven’t left yet.', tag: '2 min walk from venue', link: 'https://www.google.com/maps/search/?api=1&query=Cuisine+de+Pondy%2C+Puducherry' },
    { name: 'Villa Shanti', note: 'French-Tamil fusion in a restored colonial villa — go for dinner in White Town.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Villa+Shanti%2C+Puducherry' },
    { name: 'Coromandel Cafe', note: 'Heritage-building café in White Town, popular for weekend brunch.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Coromandel+Cafe%2C+Puducherry' },
    { name: 'Surguru', note: 'Reliable South Indian vegetarian — good for a filter coffee and dosa fix.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Surguru%2C+Puducherry' },
    { name: 'Cafe Xtasi', note: 'Rooftop seating and continental plates in the French Quarter.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Cafe+Xtasi%2C+Puducherry' },
    { name: 'Baker’s Street', note: 'French bakery chain — croissants and pastries worth the stop.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Bakers+Street%2C+Puducherry' },
    { name: 'GMT Gelato', note: 'Small-batch gelato, a favourite after a Promenade walk.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=GMT+Gelato%2C+Puducherry' },
    { name: 'Sicily’s', note: 'Casual Italian-leaning menu in White Town.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Sicilys%2C+Puducherry' },
    { name: 'Blueline', note: 'Laid-back spot for a relaxed meal in town.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Blueline%2C+Puducherry' },
    { name: 'Zuka', note: 'Local chocolate café — good for dessert or a coffee break.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Zuka+Chocolate%2C+Puducherry' },
    { name: 'Cafe Des Arts', note: 'Garden courtyard café, a favourite brunch spot in White Town.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Cafe+Des+Arts%2C+Puducherry' },
    { name: 'Bread and Chocolate', note: 'French bakery-café known for fresh croissants and quiches — go early before things sell out.', tag: '~10 min from venue', link: 'https://www.google.com/maps/search/?api=1&query=Bread+and+Chocolate%2C+Puducherry' }
];