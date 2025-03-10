const stripe = Stripe('pk_test_51QzaeAHQM970ZN23BJQW7nFuK6K7DhItDHcZu1cYwPdDehpSZWjn1IwcoM56wiiNGjWdj5kapJd8GuJGgyHoDNiw008dz3Gzk0');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});