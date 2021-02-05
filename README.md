<!-- @format -->

# Amazon Clone

<p align="center">
  <img alt="AmazonClone" src="./AmazonLogo.png">
</p>

Visit the App Here [Amazon_clone](https://challenge-77580.web.app/)

### Deployment

- [x] set up (create react app , firebase-app(Hosting+DB+cloud functions for checkout stripe))
- [x] Home page
- [x] checkout page
- [x] Total price in cart
- [x] More checkout Page
- [x] The Login page
- [x] user Auth
- [x] userName in checkout page
- [x] deploy our App
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

```

──Login/Register
  |
  |___FrontEnd
  |    |____Header [LoginLine]
  |            |
  |            |__LoginPage
  |
  |__BackEnd [Firebase Auth->With Email/password Enables]
  |     |
  |     |___Register
  |     |
  |     |___Login




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
