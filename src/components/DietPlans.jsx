export default function DietPlans() {
  const benefits = [
    "Gut-Friendly",
    "Low-FODMAP",
    "Low in Anti-nutrients",
    "High Natural Protein",
    "Simple to Follow",
    "Limited Ingredients Only"
  ];

  const forWhom = [
    "Low stomach acid",
    "Slow recovery",
    "Bloating or poor digestion",
    "Busy schedules",
    "Difficulty with complex diets",
    "Sustainable fat loss goals"
  ];

  return (
    <section className="diet-plans">
      <div className="container">
        <h2>Personalized Diet Plans</h2>
        <p className="section-intro">
          Based on the SIMS Method (Single Ingredient Meals + 70/30 macro split)
        </p>

        <div className="diet-content">
          <div className="diet-column">
            <h3>Plan Benefits</h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>✓ {benefit}</li>
              ))}
            </ul>
          </div>

          <div className="diet-column">
            <h3>Designed For</h3>
            <ul className="forwhom-list">
              {forWhom.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="diet-column">
            <h3>Simple Ingredients</h3>
            <div className="ingredients">
              <span className="ingredient">Eggs</span>
              <span className="ingredient">Chicken</span>
              <span className="ingredient">Curd</span>
              <span className="ingredient">Bone Broth</span>
              <span className="ingredient">Rice</span>
              <span className="ingredient">Fresh Fruits</span>
              <span className="ingredient">And More...</span>
            </div>
            <p className="results">
              <strong>Result:</strong> Better recovery, better digestion, sustainable fat loss
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
