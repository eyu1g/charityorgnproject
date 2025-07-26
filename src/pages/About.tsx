import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every situation with empathy and understanding, putting human dignity at the center of all our work."
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We maintain the highest standards of transparency and accountability in all our operations and partnerships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and work closely with communities to create sustainable solutions."
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We continuously seek creative and effective approaches to address humanitarian challenges."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About HFC Foundation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Building bridges of hope and creating sustainable change in communities across the globe
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Founded in 2014, HFC Foundation emerged from a simple yet powerful belief: 
                  that every individual deserves access to basic human needs and opportunities 
                  for growth. What started as a small community initiative has grown into a 
                  comprehensive humanitarian organization serving communities across multiple continents.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began when our founder witnessed the urgent need for sustainable 
                  development solutions in underserved communities. Recognizing that temporary 
                  aid alone was not enough, we committed to creating long-term, sustainable 
                  programs that empower communities to thrive independently.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, HFC Foundation operates in 15 countries, working alongside local 
                  partners to implement projects in healthcare, education, emergency relief, 
                  and sustainable development. Our approach is community-centered, ensuring 
                  that local voices guide our efforts and that our impact endures long after 
                  our initial involvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create sustainable positive change in communities worldwide by addressing 
                    critical needs in healthcare, education, emergency relief, and development. 
                    We work in partnership with local communities to build capacity, foster 
                    self-reliance, and promote human dignity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-accent">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A world where every community has the resources, knowledge, and opportunities 
                    needed to thrive. We envision sustainable development that respects local 
                    cultures, protects the environment, and ensures that future generations 
                    inherit a more equitable and prosperous world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Organizational Structure</h2>
              <p className="text-lg text-muted-foreground mb-12">
                HFC Foundation operates under a transparent governance structure that ensures 
                accountability, effectiveness, and alignment with our mission and values.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <Card className="shadow-medium">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Board of Directors</h3>
                    <p className="text-muted-foreground">
                      Provides strategic oversight and governance, ensuring the organization 
                      stays true to its mission while maintaining financial responsibility.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-medium">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-accent">Executive Team</h3>
                    <p className="text-muted-foreground">
                      Manages day-to-day operations, program implementation, and organizational 
                      development across all focus areas and geographic regions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-medium">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-secondary">Field Teams</h3>
                    <p className="text-muted-foreground">
                      Works directly with communities to implement programs, build partnerships, 
                      and ensure sustainable impact at the grassroots level.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;