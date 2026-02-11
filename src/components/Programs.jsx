export default function Programs() {
  const programs = [
    {
      title: "Daily Group Yoga Sessions",
      description: "Functional yoga combining traditional practices with modern movement therapy"
    },
    {
      title: "Women-Only Batches",
      description: "Special morning sessions exclusively for ladies in a safe, supportive environment"
    },
    {
      title: "Specialized Programs",
      description: "Designed for weight loss, thyroid support, PCOD, joint pain, stress relief & more"
    },
    {
      title: "Trial Sessions",
      description: "Experience our trainers and studio atmosphere with a complimentary trial"
    }
  ];

  const outcomes = [
    "Weight Loss",
    "Thyroid & PCOD Support",
    "Joint Pain & Back Pain Relief",
    "Stress & Anxiety Reduction",
    "Better Energy & Endurance",
    "Overall Fitness"
  ];

  const plans = [
    { duration: "1 Month", price: "Starting at ₹1,500" },
    { duration: "3 Months", price: "Best Value" },
    { duration: "6 Months", price: "Freeze Option" },
    { duration: "12 Months", price: "Unlimited Sessions" }
  ];

  return (
    <section className="programs">
      <div className="container">
        <h2>Studio Programs</h2>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>

        <div className="outcomes">
          <h3>What You'll Achieve</h3>
          <div className="outcomes-grid">
            {outcomes.map((outcome, index) => (
              <div key={index} className="outcome-badge">{outcome}</div>
            ))}
          </div>
        </div>

        <div className="membership-plans">
          <h3>Membership Plans</h3>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div key={index} className="plan-card">
                <h4>{plan.duration}</h4>
                <p className="plan-price">{plan.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
