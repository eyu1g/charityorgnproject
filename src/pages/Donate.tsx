import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Smartphone, CreditCard, DollarSign, Users, Target, CheckCircle } from "lucide-react";

const Donate = () => {
  const donationTiers = [
    {
      amount: "$25",
      title: "Supporter",
      description: "Provides school supplies for one child for a month",
      impact: "Educational materials, notebooks, pencils",
      popular: false
    },
    {
      amount: "$50",
      title: "Advocate",
      description: "Funds clean water access for one family",
      impact: "Water purification tablets, hygiene kits",
      popular: true
    },
    {
      amount: "$100",
      title: "Champion",
      description: "Sponsors healthcare for a rural community",
      impact: "Medical supplies, basic treatment for 5 people",
      popular: false
    },
    {
      amount: "$250",
      title: "Hero",
      description: "Provides emergency relief package for one family",
      impact: "Food, shelter materials, medical care",
      popular: false
    }
  ];

  const impactStats = [
    {
      icon: Users,
      number: "75,000+",
      label: "Lives Impacted",
      description: "People who have received direct assistance"
    },
    {
      icon: Target,
      number: "45",
      label: "Active Projects",
      description: "Ongoing humanitarian initiatives"
    },
    {
      icon: Heart,
      number: "15",
      label: "Countries",
      description: "Nations where we operate programs"
    },
    {
      icon: CheckCircle,
      number: "200+",
      label: "Partners",
      description: "Local organizations and stakeholders"
    }
  ];

  const whereMoneyGoes = [
    {
      percentage: "75%",
      category: "Direct Programs",
      description: "Healthcare, education, emergency relief, and development projects"
    },
    {
      percentage: "15%",
      category: "Operations",
      description: "Staff salaries, logistics, and program management"
    },
    {
      percentage: "10%",
      category: "Fundraising",
      description: "Donor outreach, communications, and development activities"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Make a Difference
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Your donation directly transforms lives and builds stronger communities worldwide
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Donate Now
              <Heart className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Your Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Choose Your Impact Level</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {donationTiers.map((tier, index) => (
                <Card key={index} className={`shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 ${
                  tier.popular ? 'border-2 border-secondary shadow-glow' : ''
                }`}>
                  <CardHeader className="text-center">
                    {tier.popular && (
                      <Badge className="w-fit mx-auto mb-2 bg-secondary text-secondary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    <CardTitle className="text-3xl font-bold text-primary mb-2">
                      {tier.amount}
                    </CardTitle>
                    <h3 className="text-xl font-semibold text-foreground">{tier.title}</h3>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{tier.description}</p>
                    <div className="bg-accent/10 p-3 rounded-lg mb-6">
                      <p className="text-sm text-foreground font-medium">Impact:</p>
                      <p className="text-sm text-muted-foreground">{tier.impact}</p>
                    </div>
                    <Button 
                      variant={tier.popular ? "cta" : "outline"} 
                      className="w-full"
                    >
                      Donate {tier.amount}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Payment Options</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Local Payment Methods */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Smartphone className="w-6 h-6 mr-2 text-primary" />
                    Ethiopian Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Telebirr</h4>
                        <p className="text-sm text-muted-foreground">Mobile money transfer</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Donate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">CBE Birr</h4>
                        <p className="text-sm text-muted-foreground">Bank transfer</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Donate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* International Payment Methods */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <CreditCard className="w-6 h-6 mr-2 text-primary" />
                    International Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <h4 className="font-medium text-foreground mb-2">Coming Soon</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      International payment options including credit cards, PayPal, and wire transfers will be available soon.
                    </p>
                    <Badge variant="secondary">In Development</Badge>
                  </div>
                  
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Contact Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      For international donations, please contact us directly:
                    </p>
                    <a 
                      href="mailto:donations@hfc.org" 
                      className="text-secondary hover:text-secondary-light text-sm font-medium"
                    >
                      donations@hfc.org
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Where Money Goes */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">How We Use Your Donation</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {whereMoneyGoes.map((item, index) => (
                  <Card key={index} className="shadow-medium text-center">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold text-primary mb-4">
                        {item.percentage}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">
                        {item.category}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="shadow-medium">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Financial Transparency</h3>
                  <p className="text-muted-foreground mb-6">
                    We believe in complete transparency. Our annual financial reports and audited 
                    statements are available for review, ensuring your donations are used effectively 
                    and efficiently to create maximum impact.
                  </p>
                  <Button variant="outline">
                    View Financial Reports
                    <DollarSign className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Form Preview */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary-foreground">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-center mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
              Every donation, no matter the size, creates ripple effects of positive change 
              that transform lives and strengthen communities.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                    Thank You Message Preview
                  </h3>
                  <div className="bg-accent/10 p-6 rounded-lg text-center">
                    <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2 text-foreground">
                      Thank You for Your Generosity!
                    </h4>
                    <p className="text-muted-foreground">
                      Your donation has been received and will make a direct impact on the lives 
                      of those we serve. You will receive a confirmation email with details about 
                      how your contribution is being used.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Donate;