import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Users, Scale, Shield, Zap, TreePine, Activity, ArrowRight } from "lucide-react";

const PriorityAreas = () => {
  const priorityAreas = [
    {
      icon: Heart,
      title: "Human Development - Child and Youth Development",
      description: "Comprehensive support for children and youth focusing on health, education, and nutrition.",
      details: "Our human development programs address the holistic needs of children and youth, ensuring they have access to quality healthcare, education opportunities, and proper nutrition for healthy growth and development.",
      keyActivities: [
        "Group home care for orphaned children",
        "Educational support and sponsorship programs",
        "Health and nutrition services",
        "Psychosocial support and counseling",
        "Youth learning centers and skills development"
      ]
    },
    {
      icon: Users,
      title: "Community Empowerment - Livelihoods",
      description: "Building sustainable livelihoods and strengthening community capacity for economic independence.",
      details: "We empower communities through economic strengthening initiatives, capacity building programs, and sustainable livelihood opportunities that promote self-reliance and long-term development.",
      keyActivities: [
        "Village Savings and Loan Associations (VSLA)",
        "Vocational training and skills development",
        "Income generation activities",
        "Community-based organizations capacity building",
        "Microfinance and economic strengthening"
      ]
    },
    {
      icon: Scale,
      title: "Good Governance and Human Rights",
      description: "Promoting transparency, accountability, and civic engagement for democratic governance.",
      details: "Our governance programs focus on strengthening democratic institutions, promoting human rights, and enhancing civic participation for transparent and accountable governance systems.",
      keyActivities: [
        "Social accountability initiatives",
        "Civic engagement and participation programs",
        "Human rights advocacy and protection",
        "Gender responsive budgeting",
        "Civil society strengthening"
      ]
    },
    {
      icon: Shield,
      title: "Social Cohesion and Community Resilience",
      description: "Building stronger, more resilient communities through social integration and conflict resolution.",
      details: "We work to strengthen social bonds, promote peaceful coexistence, and build community resilience against various shocks and stresses through inclusive development approaches.",
      keyActivities: [
        "Conflict prevention and resolution",
        "Community dialogue and mediation",
        "Social integration programs",
        "Peace building initiatives",
        "Community resilience building"
      ]
    },
    {
      icon: Zap,
      title: "Humanitarian Aid and Emergency Preparedness",
      description: "Rapid response to emergencies and building community preparedness for disasters.",
      details: "Our emergency response programs provide immediate relief during crises while building long-term preparedness and resilience in vulnerable communities.",
      keyActivities: [
        "Emergency relief distribution",
        "Disaster risk reduction",
        "Emergency preparedness training",
        "Early warning systems",
        "Post-emergency recovery support"
      ]
    },
    {
      icon: Activity,
      title: "Gender Equality and Social Inclusion (GESI)",
      description: "Promoting gender equality and ensuring inclusive participation of all community members.",
      details: "We mainstream gender equality and social inclusion across all our programs to ensure equal opportunities and participation for all, regardless of gender, age, disability, or social status.",
      keyActivities: [
        "Women's empowerment programs",
        "Girls' education and protection",
        "Disability inclusion initiatives",
        "LGBTI+ rights advocacy",
        "Age-inclusive programming"
      ]
    },
    {
      icon: TreePine,
      title: "Environmental Sustainability and Climate Resilience",
      description: "Protecting the environment and building resilience to climate change impacts.",
      details: "Our environmental programs focus on sustainable natural resource management, climate adaptation, and building community resilience to environmental challenges.",
      keyActivities: [
        "Environmental conservation projects",
        "Climate adaptation initiatives",
        "Sustainable agriculture promotion",
        "Renewable energy programs",
        "Green space development"
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
              Our Priority Areas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Comprehensive approaches to addressing the multifaceted needs of vulnerable populations 
              through sustainable development and humanitarian intervention
            </p>
          </div>
        </section>

        {/* Thematic Areas Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {priorityAreas.map((area, index) => (
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
              Detailed Priority Areas
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {priorityAreas.map((area, index) => (
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
              Support Our Priority Areas
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
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PriorityAreas;