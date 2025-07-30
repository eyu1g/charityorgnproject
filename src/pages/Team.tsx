import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const founder = {
    name: "Yewoinshet Masresha",
    role: "Founder & Visionary Leader",
    bio: "Yewoinshet Masresha founded Hope for Children Organization in November 2000. Born in Babile, Harari region, she holds a Master's degree in Social Psychology from Addis Ababa University. With over 18 years of dedicated service, she established a revolutionary group-home model that has nurtured over 130 children. Her legacy continues to inspire the organization's mission of creating families built on love and commitment.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
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
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full aspect-square object-cover rounded-lg shadow-medium"
                      />
                      <div className="mt-4 space-y-2">
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
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-3xl font-bold mb-2 text-foreground">{founder.name}</h3>
                      <Badge variant="secondary" className="mb-4">{founder.role}</Badge>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {founder.bio}
                      </p>
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