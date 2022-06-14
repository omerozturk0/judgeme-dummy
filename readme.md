# Judgeme Api Calls

## Steps
1. Fetch the repo.
2. Run `npm install` or `yarn install` in your terminal.
3. Run `npm run start` or `yarn start` in your terminal.

## For listing all the reviews:
Visit `/list` path in your browser.

## For creating a review:
Visit `/create` path in your browser.

## For customizing the review that you want to create:
Customize the function that below which is included `api-call.js` file.
```node
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
```
