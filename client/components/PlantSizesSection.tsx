export default function PlantSizesSection() {
  const sizes = [
    {
      name: "Small",
      description: "Perfect for desks & shelves",
      height: "6-12 inches",
      gradient: "from-green-200 to-green-300",
    },
    {
      name: "Medium",
      description: "Great for side tables",
      height: "12-24 inches",
      gradient: "from-green-300 to-green-400",
    },
    {
      name: "Large",
      description: "Floor statement pieces",
      height: "24-48 inches",
      gradient: "from-green-400 to-green-500",
    },
    {
      name: "Huge",
      description: "Dramatic room accents",
      height: "48+ inches",
      gradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available in Any Size
          </h2>
          <p className="text-xl text-muted-foreground">
            From desktop companions to floor statement pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className={`h-48 bg-gradient-to-br ${size.gradient} p-6 flex items-end`}
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1">{size.name}</h3>
                  <p className="text-white text-opacity-90 text-sm">
                    {size.height}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{size.description}</p>
                <button className="mt-3 text-primary font-medium hover:text-secondary transition-colors">
                  Shop {size.name} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Collections Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 group cursor-pointer bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-primary via-secondary to-green-dark p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-4">Collections</h3>
                <p className="text-xl text-white text-opacity-90 mb-6">
                  Curated plant sets for every space
                </p>
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Explore Collections
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
