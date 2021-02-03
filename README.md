<!-- @format -->

# Amazon Clone

<p align="center">
  <img alt="AmazonClone" src="./AmazonLogo.png">
</p>

Visit the App Here [Amazon_clone]()

### Deployment

- [x] set up (create react app , firebase-app(Hosting+DB+cloud functions for checkout stripe))
- [x] Home page
- [ ] checkout page
- [ ] Total price in cart
- [ ] More checkout Page
- [ ] The Login page
- [ ] user Auth
- [ ] userName in checkout page
- [ ] deploy our App
- [ ] React flib animation
- [ ] payment page
- [ ] payment processing
- [ ] The order history page [real time DB]
- [ ]

### Some Details

```
Home Page
|
│____Header component
│    │
│    |___Logo
|    |
|    |___Search
|    |
|    |___HeaderOptions
|         |__SignIn
|         |__Orders
|         |__Cart
|
|───Home
|   |__Container
|      |__Image [show case]
|      |__HomeRow
|         |__Product
│
|


```

```
Checkout

──Checkout
       |__CheckoutLeft
       |    |____CheckoutItem [checkoutProduct]
       |
       |__CheckoutRight
       |     |__subtotal
       |
       |__DataLayer [React context API]




```

## Technologies && Libraries

- firebase
- MaterialUiIcons
- React-router
- React-currency-format
- Link so no need to refresh the page when use hyperlink
- react-currency-format [React component to format number in an input or as a text]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
