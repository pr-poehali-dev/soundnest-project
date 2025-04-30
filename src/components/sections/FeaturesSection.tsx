import { Feature } from "@/data/features";

interface FeaturesSectionProps {
  features: Feature[];
  title: string;
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="bg-card p-6 rounded-lg">
      <div className="w-12 h-12 rounded-full bg-[#9b87f5]/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-[#9b87f5]" />
      </div>
      <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">
        {feature.description}
      </p>
    </div>
  );
};

const FeaturesSection = ({ features, title }: FeaturesSectionProps) => {
  return (
    <section className="py-12 bg-accent/50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
