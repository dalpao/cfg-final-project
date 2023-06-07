export const ButtonClick = () => {
    
    const handleClickMe = () => {
      alert("We're working hard to bring you the best content. Please check back later for updates.");
    };
    return (
      <button className="card-btn" onClick={handleClickMe}>
        Discover Recipes 
      </button>
    );
  };