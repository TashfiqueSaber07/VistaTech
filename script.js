const addOnItems = [
    { name: "Keyboard", price: 0 },
    { name: "Mouse", price: 150 },
    { name: "Microsoft Package", price: 100 }
  ];
  
  function createAddOnsList(addOnsListId, totalPriceId) {
    const addOnsList = document.getElementById(addOnsListId);
  
    addOnsList.innerHTML = "";
  
    addOnItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = "list-group-item";  
      li.textContent = item.name;
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = item.price;
      checkbox.name = "add-ons";
      checkbox.addEventListener("change", updateTotalPrice.bind(null, totalPriceId));
  
      li.appendChild(checkbox);
      addOnsList.appendChild(li);
    });
  }
  
  function updateTotalPrice(totalPriceId) {
    const checkboxes = document.querySelectorAll('input[name="add-ons"]:checked');
    let totalPrice = 21000; // Base price of the bundle
  
    checkboxes.forEach((checkbox) => {
      totalPrice += parseInt(checkbox.value);
    });
  
    document.getElementById(totalPriceId).textContent = `$${totalPrice}`;
  }
  
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const brand = btn.dataset.brand;
      const selectedAddOns = [];
  
      const checkboxes = document.querySelectorAll('input[name="add-ons"]:checked');
      checkboxes.forEach((checkbox) => {
        selectedAddOns.push(checkbox.parentNode.textContent.trim());
      });
  
      const params = new URLSearchParams();
      selectedAddOns.forEach((addOn) => {
        params.append("add-on", addOn);
      });
  
      const url = `cart.html?brand=${brand}&${params.toString()}`;
      window.location.href = url;
    });
  });
  
  createAddOnsList("microsoft-addons", "microsoft-total-price");
  createAddOnsList("dell-addons", "dell-total-price");
  createAddOnsList("hp-addons", "hp-total-price");
  createAddOnsList("acer-addons", "lenovo-total-price");
   