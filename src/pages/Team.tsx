import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Twitter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import founderImage from "@/assets/foundeerpic.jpg";
const FounderBio = ({ bio }: { bio: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedBio = bio.slice(0, 400) + "...";
  
  return (
    <div className="space-y-4">
      <p className="text-lg text-muted-foreground leading-relaxed">
        {isExpanded ? bio : truncatedBio}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center text-primary hover:text-primary-light transition-colors font-medium"
      >
        {isExpanded ? (
          <>
            Read Less
            <ChevronUp className="w-4 h-4 ml-1" />
          </>
        ) : (
          <>
            Read More
            <ChevronDown className="w-4 h-4 ml-1" />
          </>
        )}
      </button>
    </div>
  );
};

const Team = () => {
  const founder = {
    name: "Yewoinshet Masresha",
    role: "Founder & Visionary Leader",
    bio: "Yewoinshet Masresha, the visionary founder of Hope for Children Organization (HFCO), is a woman whose life has been shaped by compassion, courage, and a deep love for humanity. Born in Babile, a town nestled between Jigjiga and Harar in Ethiopia's Harari region, Yewoinshet grew up with a natural sense of empathy and a passion for helping those in need. From a young age, she demonstrated critical thinking, an unwavering sense of justice, and an unshakable commitment to the well-being of others.\n\nShe pursued her undergraduate studies in Literature at Addis Ababa University, and later earned a Master's degree in Social Psychology. Her academic journey strengthened her understanding of human behavior and deepened her resolve to serve the most vulnerable members of society. Before founding HFCO, Yewoinshet worked with a Catholic missionary charity as a social worker, where she provided care and support to disadvantaged individuals and families.\n\nIn the early 2000s, Ethiopia was among the countries hardest hit by the HIV/AIDS epidemic, a crisis that not only caused widespread loss of life but also left thousands of children orphaned and stigmatized. Witnessing the despair faced by affected families, Yewoinshet was moved to act. With grace, courage, and determination, she began offering home-based care services to bedridden HIV/AIDS patients bringing comfort, dignity, and hope into their lives.\n\nStarting with just one group home sheltering eight children, she envisioned a new kind of family one built not by blood, but by love, commitment, and care. Each group home was led by a dedicated mother caring for 8–10 children as her own. Over time, this heartfelt initiative grew to 12 group homes, nurturing 130 children in a safe and loving environment. Through HFCO, Yewoinshet created not just shelters, but homes filled with hope and healing.\n\nFor more than 18 years, she served HFCO in multiple roles volunteer, psychologist, project manager, and executive director often sacrificing her personal interests and comfort to ensure the organization's success. Though she now resides in Australia for retirement due to her service for long years, Yewoinshet continues to guide HFCO's strategic direction and supports the organization through personal donations and mentorship.\n\nTo this day, the lives of over 130 children she raised through HFCO stand as a living testament to her compassion. Many have grown into independent, accomplished individuals holding key positions in society. Her legacy lives on through the hearts she's touched, the lives she's transformed, and the enduring family she built through love.",
    image: founderImage,
    email: "founder@hfc.org",
    linkedin: "#",
    twitter: "#"
  };

  const boardMembers = [
    {
      name: "Michael Chen",
      role: "Board Chair",
      expertise: "International Finance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Vice Chair",
      expertise: "Public Health",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "James Rodriguez",
      role: "Treasurer",
      expertise: "Financial Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Prof. Eleanor Wright",
      role: "Secretary",
      expertise: "Education Policy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const staff = [
    {
      name: "David Thompson",
      role: "Program Director",
      department: "Operations",
      location: "Ethiopia",
      email: "david@hfc.org"
    },
    {
      name: "Maria Santos",
      role: "Project Manager",
      department: "Education",
      location: "Kenya",
      email: "maria@hfc.org"
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Field Coordinator",
      department: "Healthcare",
      location: "Somalia",
      email: "ahmed@hfc.org"
    },
    {
      name: "Lisa Park",
      role: "Communications Manager",
      department: "Outreach",
      location: "Headquarters",
      email: "lisa@hfc.org"
    },
    {
      name: "Robert Johnson",
      role: "Finance Officer",
      department: "Administration",
      location: "Headquarters",
      email: "robert@hfc.org"
    },
    {
      name: "Fatima Okonkwo",
      role: "Community Liaison",
      department: "Operations",
      location: "Nigeria",
      email: "fatima@hfc.org"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Meet the dedicated individuals who drive our mission forward every day
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Founder</h2>
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-strong">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <div className="aspect-square w-full max-w-md mx-auto">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover rounded-lg shadow-medium"
                      />
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a href={`mailto:${founder.email}`} className="text-primary hover:text-primary-light">
                        <Mail className="w-5 h-5" />
                      </a>
                      <a href={founder.linkedin} className="text-primary hover:text-primary-light">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={founder.twitter} className="text-primary hover:text-primary-light">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-foreground">{founder.name}</h3>
                      <Badge variant="secondary" className="mb-4">{founder.role}</Badge>
                    </div>
                    <FounderBio bio={founder.bio} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Board of Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-soft"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                    <Badge variant="outline" className="mb-2">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Staff</h2>
            <div className="max-w-6xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-lg shadow-medium">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Location</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map((member, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-foreground font-medium">{member.name}</td>
                        <td className="px-6 py-4 text-muted-foreground">{member.role}</td>
                        <td className="px-6 py-4">
                          <Badge variant="outline">{member.department}</Badge>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{member.location}</td>
                        <td className="px-6 py-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-foreground">Join Our Team</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Are you passionate about humanitarian work and creating positive change? 
              We're always looking for dedicated individuals to join our mission.
            </p>
            <a 
              href="mailto:careers@hfc.org" 
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all"
            >
              View Open Positions
              <Mail className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;