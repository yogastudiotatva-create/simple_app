export default function WhyTatva() {
  const values = [
    {
      icon: "🎯",
      title: "Honesty",
      description: "No fake promises or shortcuts. Real results through real practices."
    },
    {
      icon: "👤",
      title: "Personal Attention",
      description: "Small batches and personalized instruction. You're never just a number."
    },
    {
      icon: "📈",
      title: "Results",
      description: "Clear, measurable progress through structured programs and tracking."
    },
    {
      icon: "🔬",
      title: "Science + Tradition",
      description: "Blending ancient yoga wisdom with modern nutrition science."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "A safe, welcoming space for all ages and fitness levels."
    },
    {
      icon: "⚙️",
      title: "Smart Operations",
      description: "WhatsApp automation, CRM tracking, seamless payment experience."
    }
  ];

  return (
    <section className="why-tatva">
      <div className="container">
        <h2>Why Choose Tatva?</h2>
        <p className="section-intro">
          We believe simplicity heals. Here's what sets us apart:
        </p>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-box">
          <h3>Modern Fitness, Built Right</h3>
          <p>
            WhatsApp Lead Automation • CRM System • Online Payments • 
            Automated Membership Tracking • Smart Follow-ups
          </p>
          <p className="subtitle">
            We run like a professional fitness business so you can focus on your wellness journey.
          </p>
        </div>
      </div>
    </section>
  )
}
