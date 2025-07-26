import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: [
        "HFC Foundation",
        "Bole Road, Addis Ababa",
        "Ethiopia, 1000"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+251 11 123 4567",
        "+251 91 234 5678 (Mobile)",
        "Emergency: +251 91 999 8888"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@hfc.org",
        "programs@hfc.org",
        "emergency@hfc.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Emergency only"
      ]
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#", handle: "@HFCFoundation" },
    { icon: Twitter, name: "Twitter", url: "#", handle: "@HFC_Official" },
    { icon: Linkedin, name: "LinkedIn", url: "#", handle: "HFC Foundation" },
    { icon: Instagram, name: "Instagram", url: "#", handle: "@hfcfoundation" }
  ];

  const departments = [
    {
      name: "General Inquiries",
      email: "info@hfc.org",
      description: "Questions about our organization and programs"
    },
    {
      name: "Partnership & Collaboration",
      email: "partnerships@hfc.org",
      description: "Working together on humanitarian initiatives"
    },
    {
      name: "Media & Press",
      email: "media@hfc.org",
      description: "Interview requests and press inquiries"
    },
    {
      name: "Career Opportunities",
      email: "careers@hfc.org",
      description: "Job applications and volunteer positions"
    },
    {
      name: "Donations & Support",
      email: "donations@hfc.org",
      description: "Financial contributions and fundraising"
    },
    {
      name: "Emergency Response",
      email: "emergency@hfc.org",
      description: "Urgent humanitarian assistance requests"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our team to learn more about our work or explore collaboration opportunities
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <info.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+251 91 234 5678" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button variant="cta" className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Find Us</CardTitle>
                  <p className="text-muted-foreground">
                    Visit our headquarters in Addis Ababa, Ethiopia.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Embedded Google Map */}
                  <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3623920134383!2d38.75068731479443!3d9.025147093485593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f4c5d8b3c1f%3A0x5c7b5c5c5c5c5c5c!2sBole%20Rd%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="HFC Foundation Location"
                    ></iframe>
                  </div>
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Office Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Our headquarters is located in the heart of Addis Ababa, easily accessible 
                      by public transportation. Parking is available on-site for visitors.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Department Contacts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {dept.description}
                    </p>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-primary hover:text-primary-light text-sm font-medium flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {dept.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-secondary-foreground">Follow Our Journey</h2>
            <p className="text-xl mb-12 text-secondary-foreground/90 max-w-3xl mx-auto">
              Stay connected with us on social media for daily updates, stories from the field, 
              and ways to get involved in our mission.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all transform hover:-translate-y-1"
                >
                  <social.icon className="w-8 h-8 text-secondary-foreground mb-3" />
                  <span className="text-secondary-foreground font-medium text-sm">
                    {social.name}
                  </span>
                  <span className="text-secondary-foreground/70 text-xs">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-destructive">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-destructive-foreground">Emergency Contact</h2>
            <p className="text-lg mb-8 text-destructive-foreground/90 max-w-2xl mx-auto">
              For urgent humanitarian assistance requests or emergency situations, 
              please contact our 24/7 emergency response team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+251919998888"
                className="inline-flex items-center px-6 py-3 bg-white text-destructive rounded-lg shadow-medium hover:shadow-strong transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </a>
              <a 
                href="mailto:emergency@hfc.org"
                className="inline-flex items-center px-6 py-3 bg-white text-destructive rounded-lg shadow-medium hover:shadow-strong transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Emergency Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;