import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Eye } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Water Well Inauguration - Kenya",
      location: "Turkana County, Kenya",
      date: "March 2024",
      category: "Water & Sanitation",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
      description: "Community members celebrate the completion of a new water well providing clean water access."
    },
    {
      id: 2,
      title: "Mobile Health Clinic in Action",
      location: "Somalia",
      date: "February 2024",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=400&fit=crop",
      description: "Medical team providing essential healthcare services in remote communities."
    },
    {
      id: 3,
      title: "School Construction Progress",
      location: "Ethiopia",
      date: "January 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=400&fit=crop",
      description: "Construction workers and community volunteers building a new primary school."
    },
    {
      id: 4,
      title: "Women's Empowerment Workshop",
      location: "Nigeria",
      date: "December 2023",
      category: "Economic Development",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop",
      description: "Women participating in skills training and microfinance program."
    },
    {
      id: 5,
      title: "Emergency Relief Distribution",
      location: "South Sudan",
      date: "November 2023",
      category: "Emergency Relief",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=400&fit=crop",
      description: "Distribution of emergency supplies to flood-affected families."
    },
    {
      id: 6,
      title: "Teacher Training Session",
      location: "Rwanda",
      date: "October 2023",
      category: "Education",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      description: "Local teachers participating in modern pedagogy training workshop."
    },
    {
      id: 7,
      title: "Solar Panel Installation",
      location: "Mali",
      date: "September 2023",
      category: "Sustainable Energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=400&fit=crop",
      description: "Technical team installing solar panels for community electricity access."
    },
    {
      id: 8,
      title: "Community Health Workers",
      location: "Tanzania",
      date: "August 2023",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop",
      description: "Newly trained community health workers ready to serve their communities."
    },
    {
      id: 9,
      title: "Children at New School",
      location: "Ethiopia",
      date: "July 2023",
      category: "Education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=400&fit=crop",
      description: "Happy students at the newly constructed primary school facility."
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Healthcare": "bg-red-100 text-red-800",
      "Education": "bg-blue-100 text-blue-800",
      "Water & Sanitation": "bg-cyan-100 text-cyan-800",
      "Emergency Relief": "bg-orange-100 text-orange-800",
      "Economic Development": "bg-green-100 text-green-800",
      "Sustainable Energy": "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Capturing moments of hope, progress, and transformation in our communities
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((item) => (
                <Card key={item.id} className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <Badge 
                      className={`absolute top-4 left-4 ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upload Section for Admin */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Admin Panel</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Gallery management system for uploading and organizing project photos. 
              Admin login required for access.
            </p>
            <div className="bg-card p-8 rounded-lg shadow-medium max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Coming Soon</h3>
              <p className="text-muted-foreground">
                Admin dashboard for photo uploads and gallery management will be available in the next update.
              </p>
            </div>
          </div>
        </section>

        {/* Share Your Story CTA */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-secondary-foreground">Share Your Story</h2>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-3xl mx-auto">
              Have photos or stories from our projects? We'd love to feature them in our gallery 
              to showcase the impact of our collective efforts.
            </p>
            <a 
              href="mailto:gallery@hfc.org" 
              className="inline-flex items-center px-8 py-4 bg-white text-secondary rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all"
            >
              Submit Photos
              <Eye className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;