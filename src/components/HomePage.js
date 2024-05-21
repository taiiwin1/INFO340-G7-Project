import React, { useState } from 'react';
import {Footer} from './Footer';
import '../style.css';

const items = [
  { title: 'Olive green button-up', description: 'Olive green button-up sweater; work twice; size M', category: 'Clothing', imgSrc: 'img/shirt.jpg' },
  { title: 'Snow white winter jacket', description: 'Snow white winter jacket; worn 4 times; size L', category: 'Clothing', imgSrc: 'img/00Jacket.webp' },
  { title: 'Triple Desgined Braeclet', description: 'Comes with all 3 braecelets; entangled custom designs', category: 'Bracelets', imgSrc: 'img/bracelet.webp' },
  { title: 'Kirby Keycap', description: 'Custom Kirby Moon keycap; fits on all keys', category: 'Custom Keycaps', imgSrc: 'img/keycaps2.webp' },
  { title: 'Baby blue dinosaur', description: 'Baby blue dinosaur crochet; hand knit with homemade materials', category: 'Croches', imgSrc: 'img/crochet2.jpeg' },
  { title: 'Brown bear crochet', description: 'Cute brown bear basket crochet', category: 'Croches', imgSrc: 'img/00crochets.jpeg' },
  { title: 'Small pickle crochet', description: 'Small pickle holding sign crochet', category: 'Croches', imgSrc: 'img/01crochets.webp' },
  { title: 'Baby elephant crochet', description: 'Mini baby elephant crochet', category: 'Croches', imgSrc: 'img/02crochets.webp' },
  { title: 'Koi fish keycap', description: 'Colored koi fish keycap', category: 'Custom Keycaps', imgSrc: 'img/01keycaps.webp' },
  { title: 'Starter pokemon keycaps', description: 'start pokemons: pikachu, charmander, squirtle, bulbasaur', category: 'Custom Keycaps', imgSrc: 'img/02keycaps.webp' },
  { title: 'Connected hearts bracelet', description: '5 hearts entangled--3 bracelets', category: 'Bracelets', imgSrc: 'img/00bracelet.avif' },
  { title: 'Marble bracelet', description: 'Marble collected from local shops in Hawaii', category: 'Bracelets', imgSrc: 'img/01bracelet.jpg' },
  { title: 'Designer inspired bracelet', description: 'Elegant bracelet, inspired by existing bracelets', category: 'Bracelets', imgSrc: 'img/02bracelet.webp' },
  { title: 'Denim Jacket', description: 'Denim jean jacket, long sleeve, with customed deisgned; brand new', category: 'Clothing', imgSrc: 'img/01clothes.avif' }
];    

export function HomePage() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter(item => item.category.includes(filter));

  return (
    <div>
      <main>
        <section>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="category-dropdown">
            <select defaultValue="" onChange={handleFilterChange}>
              <option value="" disabled>Select Type</option>
              <option value="Croches">Crocheting</option>
              <option value="Custom Keycaps">Custom Keycaps</option>
              <option value="Clothing">Clothing</option>
              <option value="Bracelets">Bracelets</option>
            </select>
          </div>
        </section>
        <section className="card-container">
          {filteredItems.map(item => (
            <div key={item.id} className="card">
              <img src={item.imgSrc} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </section>
    </main>
    <Footer />
    </div>
  );
}