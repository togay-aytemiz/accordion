import FaqElement from "./faqElement";

const App = () => {
  const faqData = [
    {
      id: 1,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      id: 2,
      question: "How long does shipping usually take?",
      answer:
        "Shipping times vary depending on your location. Generally, orders are processed within 1-2 business days, and shipping can take anywhere from 3-10 business days.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on the destination.",
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you are not satisfied with your purchase, you may return it within 30 days for a full refund, minus shipping costs.",
    },
    {
      id: 5,
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery.",
    },
  ];

  const renderedFaqData = faqData.map((faq) => {
    return <FaqElement faq={faq} key={faq.id} />;
  });

  return (
    <>
      <main>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">{renderedFaqData}</div>
      </main>
    </>
  );
};
export default App;
