import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Target, Users, Shield, Activity } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Wholeness",
      description: "In working with children, every aspect of their growth & development must be addressed, including their physical and psychological wellbeing."
    },
    {
      icon: Users,
      title: "Inclusion and Equity",
      description: "Ensuring that every individual regardless of gender, age, disability, ethnicity, social status, or background has fair access to resources and opportunities."
    },
    {
      icon: Target,
      title: "Integrity and Accountability",
      description: "Acting with honesty, ethics, and transparency in all activities and decisions while being responsible for our actions and using resources appropriately."
    },
    {
      icon: Activity,
      title: "Participation",
      description: "Actively involving community members, especially beneficiaries, in planning, decision-making, and implementation of development initiatives."
    },
    {
      icon: Shield,
      title: "Respect and Dignity",
      description: "Treating all people with fairness, empathy, and appreciation for their humanity while recognizing and honouring cultural diversity."
    },
    {
      icon: Eye,
      title: "Resilience and Empowerment",
      description: "Building people's capacity to overcome challenges and lead independent, fulfilling lives through knowledge, skills, and confidence building."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About Hope for Children Organization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A country where every individual lives in a joyful and healthy environment within a transparent and just society
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
                  Hope for Children Organization (HFC) is an indigenous, non-political, non-faith-based 
                  local NGO, established in November 2000 in Ethiopia with the key objectives of sustainable 
                  and comprehensive community based care and support for children and families affected by HIV/AIDS.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The organization has 25 years' experience on OVC addressing their education, health and care 
                  and support aspects. In relation to this, HFC has managed to reach about 27,000 OVC and more 
                  than 10,000 PLWHA through mobilizing 450 volunteer service providers.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently, HFC provides holistic support to HIV-AIDS infected and affected children including 
                  residential care, psychosocial services, educational support, and community mobilization. 
                  We have active projects in Addis Ababa City Administration, Oromia and Harari regional states.
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
                    HFCO has a mission, dedicated to fostering the development of highly vulnerable 
                    Community members, children, women, youth, and their caregivers, empowering them 
                    to become empowered, self-sufficient and responsible members of their communities 
                    through a participatory and holistic approach.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-accent">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "A country where every individual lives in a joyful and healthy environment 
                    within a transparent and just society"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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