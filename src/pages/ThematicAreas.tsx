import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, GraduationCap, Droplet, Zap, Sprout, Shield, Users, Building } from "lucide-react";

const ThematicAreas = () => {
  const thematicAreas = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Improving access to quality healthcare services in underserved communities",
      details: "We focus on establishing mobile health clinics, training healthcare workers, maternal and child health programs, and disease prevention initiatives. Our healthcare projects aim to reduce mortality rates and improve overall health outcomes in rural and remote areas.",
      keyActivities: [
        "Mobile health clinic deployment",
        "Healthcare worker training programs", 
        "Maternal and child health services",
        "Disease prevention and vaccination campaigns",
        "Health infrastructure development"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Providing quality education opportunities for children and adults",
      details: "Our education initiatives include building schools, training teachers, providing learning materials, and adult literacy programs. We believe education is the foundation for sustainable development and breaking the cycle of poverty.",
      keyActivities: [
        "School construction and renovation",
        "Teacher training and development",
        "Educational material distribution",
        "Adult literacy programs",
        "Scholarship programs for vulnerable children"
      ]
    },
    {
      icon: Droplet,
      title: "Water & Sanitation",
      description: "Ensuring access to clean water and proper sanitation facilities",
      details: "We work to provide sustainable water solutions through well drilling, water system installation, and sanitation facility construction. Clean water access is fundamental to health, education, and economic development.",
      keyActivities: [
        "Water well drilling and maintenance",
        "Water treatment system installation",
        "Sanitation facility construction",
        "Hygiene education programs",
        "Community water management training"
      ]
    },
    {
      icon: Zap,
      title: "Sustainable Energy",
      description: "Providing renewable energy solutions for sustainable development",
      details: "Our energy projects focus on solar power installation, energy-efficient technologies, and capacity building for local maintenance. Reliable energy access improves quality of life and enables economic opportunities.",
      keyActivities: [
        "Solar panel installation for households",
        "Community center electrification",
        "Energy-efficient cookstove distribution",
        "Technical training for maintenance",
        "Renewable energy advocacy"
      ]
    },
    {
      icon: Sprout,
      title: "Food Security & Agriculture",
      description: "Enhancing agricultural productivity and food security",
      details: "We support communities through improved farming techniques, drought-resistant crops, livestock programs, and nutrition education. Our goal is to ensure sustainable food production and improved nutrition.",
      keyActivities: [
        "Agricultural training and extension services",
        "Drought-resistant seed distribution",
        "Livestock support programs",
        "Nutrition education initiatives",
        "Market linkage facilitation"
      ]
    },
    {
      icon: Shield,
      title: "Emergency Relief",
      description: "Providing rapid response to disasters and humanitarian crises",
      details: "Our emergency response includes immediate relief supplies, temporary shelter, medical aid, and post-disaster recovery support. We maintain rapid response capabilities for natural disasters and conflict situations.",
      keyActivities: [
        "Emergency supply distribution",
        "Temporary shelter establishment",
        "Emergency medical services",
        "Evacuation and rescue operations",
        "Post-disaster recovery programs"
      ]
    },
    {
      icon: Users,
      title: "Economic Development",
      description: "Empowering communities through economic opportunities",
      details: "We provide microfinance, vocational training, small business support, and women's empowerment programs. Economic development creates sustainable livelihoods and reduces dependency on aid.",
      keyActivities: [
        "Microfinance and credit programs",
        "Vocational skills training",
        "Small business development support",
        "Women's empowerment initiatives",
        "Youth employment programs"
      ]
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Building essential infrastructure for community development",
      details: "Our infrastructure projects include road construction, bridge building, community centers, and market facilities. Good infrastructure connects communities to opportunities and essential services.",
      keyActivities: [
        "Rural road construction and repair",
        "Bridge and culvert construction",
        "Community center development",
        "Market facility construction",
        "Communication infrastructure support"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Thematic Areas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive humanitarian programs addressing critical needs across multiple sectors
            </p>
          </div>
        </section>

        {/* Thematic Areas Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {thematicAreas.map((area, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <area.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl text-foreground">{area.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-lg">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{area.details}</p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {area.keyActivities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Detailed Thematic Focus
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {thematicAreas.map((area, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <area.icon className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{area.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{area.details}</p>
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Our Approach:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {area.keyActivities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-sm text-muted-foreground">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-foreground">
              Support Our Thematic Areas
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Your support enables us to work across all these critical areas and create comprehensive 
              impact in the communities we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/donate" 
                className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all"
              >
                Support Our Work
                <Heart className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/projects" 
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all"
              >
                View Our Projects
                <Building className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ThematicAreas;