const listings = [
    {
      id: 1,
      type: "Plastic",
      quantity: "50 tons",
      location: "New York City",
      contact: "John Smith",
      email: "john.smith@example.com"
    },
    {
      id: 2,
      type: "Paper",
      quantity: "20 tons",
      location: "Los Angeles",
      contact: "Jane Doe",
      email: "jane.doe@example.com"
    },
    {
      id: 3,
      type: "Metal",
      quantity: "100 tons",
      location: "Chicago",
      contact: "Bob Johnson",
      email: "bob.johnson@example.com"
    }
    // Add more listings here
  ];
  
  const listingContainer = document.getElementById("listings");
  
  function renderListings(listings) {
    listingContainer.innerHTML = "";
    listings.forEach((listing) => {
      const listingElement = document.createElement("li");
      listingElement.innerHTML = `
        <h3>${listing.type}</h3>
        <p><strong>Type:</strong> ${listing.type}</p>
        <p><strong>Quantity:</strong> ${listing.quantity}</p>
        <p><strong>Location:</strong> ${listing.location}</p>
        <a href="mailto:${listing.email}">Contact the Waste Generator</a>
      `;
      listingContainer.appendChild(listingElement);
    });
  }
  
  renderListings(listings);
  