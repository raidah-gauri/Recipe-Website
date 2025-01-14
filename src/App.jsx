import React, { useState } from 'react';
import Navbar from './Navbar';

const recipes = [
  {
    id: 1,
    name: 'Pancakes',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Hearty-Multigrain-Pancakes_EXPS_CF219_27535_B12_13_6b-4.jpg', // Replace with actual image URL
    description: 'Fluffy breakfast pancakes.',
    longDescription: 'These fluffy pancakes are perfect for breakfast. Mix flour, milk, eggs, and a pinch of sugar to make the batter. Cook on a non-stick pan until golden brown on both sides.',
  },
  {
    id: 2,
    name: 'Spaghetti',
    image: 'https://i.pinimg.com/originals/ef/9f/2d/ef9f2dbf0e5a5ae2c98272bd37347db5.jpg', // Replace with actual image URL
    description: 'Classic Italian pasta.',
    longDescription: 'A classic Italian pasta dish made with a rich tomato sauce and perfectly cooked spaghetti. Top with Parmesan cheese for an authentic experience.',
  },
  {
    id: 3,
    name: 'Brownies',
    image: 'https://www.piesandtacos.com/wp-content/uploads/2021/04/Macaron-Flour-Brownie-5-360x361.jpg', // Replace with actual image URL
    description: 'Chewy chocolate brownies.',
    longDescription: 'Rich and chewy chocolate brownies made with cocoa powder and chocolate chips. Perfect as a dessert or snack.',
  },
];

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredRecipes(filtered);
  };

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe); // Show the popup with recipe details
  };

  const closePopup = () => {
    setSelectedRecipe(null); // Close the popup
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div style={{ marginTop: '80px', padding: '20px' }}>
        <h2>Recipes</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '15px',
                  width: '200px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
                onClick={() => openRecipe(recipe)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
                <h3 style={{ fontSize: '18px', margin: '10px 0' }}>
                  {recipe.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  {recipe.description}
                </p>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedRecipe && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
              maxHeight: '90%',
              overflowY: 'auto',
              textAlign: 'center',
            }}
          >
            <h2>{selectedRecipe.name}</h2>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }}
            />
            <p>{selectedRecipe.longDescription}</p>
            <button
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#2b2b2b',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


