import nodeFetch from "node-fetch";

export const getAll = () => {
  try {
    return nodeFetch(`https://judge.me/api/v1/reviews?shop_domain=naduvistore.myshopify.com&api_token=Cl4o2l0qDvVG-mv7_JK1SeoxQ2c`)
  } catch (e) {
    console.log(e);
  }
};

export const createReview = () => {
  try {
    return nodeFetch("https://judge.me/api/v1/reviews", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        shop_domain: "naduvistore.myshopify.com",
        platform: "shopify",
        email: "john@example.com",
        name: "John Smith",
        rating: 4,
        id: "6551608655960",
        title: "Rocket Team",
        body: "I really love this product. It fits my corner and i really love to use it. Thanks!"
      })
    })
  } catch (e) {
    return e;
  }
};
