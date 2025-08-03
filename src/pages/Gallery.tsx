import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Gallery = () => {
  const galleryAlbums = [
    {
      category: "Child Development",
      description: "Our programs supporting children's health, education, and wellbeing",
      images: [
        {
          id: 1,
          title: "Group Home Activities",
          location: "Addis Ababa, Ethiopia",
          date: "March 2024",
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
          description: "Children in our group homes participating in educational activities and playtime."
        },
        {
          id: 2,
          title: "Educational Support Program",
          location: "Addis Ababa, Ethiopia", 
          date: "February 2024",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          description: "Children receiving educational support and tutoring assistance."
        },
        {
          id: 3,
          title: "Health Checkup Day",
          location: "Oromia, Ethiopia",
          date: "January 2024",
          image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
          description: "Regular health checkups for children in our care programs."
        },
        {
          id: 4,
          title: "Nutrition Program",
          location: "Harari, Ethiopia",
          date: "December 2023",
          image: "https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=800&h=600&fit=crop",
          description: "Providing nutritional support and healthy meals to vulnerable children."
        },
        {
          id: 5,
          title: "Youth Learning Center",
          location: "Addis Ababa, Ethiopia",
          date: "November 2023",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
          description: "Young people participating in skills development programs at our learning center."
        }
      ]
    },
    {
      category: "Community Empowerment",
      description: "Empowering communities through livelihood and capacity building programs",
      images: [
        {
          id: 6,
          title: "Village Saving and Loan Program",
          location: "Oromia, Ethiopia",
          date: "March 2024",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
          description: "Women participating in VSLA training and economic empowerment activities."
        },
        {
          id: 7,
          title: "Skills Training Workshop",
          location: "Addis Ababa, Ethiopia",
          date: "February 2024",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
          description: "Community members learning new vocational skills for income generation."
        },
        {
          id: 8,
          title: "Community Meeting",
          location: "Harari, Ethiopia",
          date: "January 2024",
          image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          description: "Community leaders and members discussing development priorities."
        },
        {
          id: 9,
          title: "Livelihood Support",
          location: "Oromia, Ethiopia",
          date: "December 2023",
          image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=800&h=600&fit=crop",
          description: "Supporting community members with tools and resources for sustainable livelihoods."
        }
      ]
    },
    {
      category: "HIV/AIDS Support",
      description: "Comprehensive care and support for people living with HIV/AIDS",
      images: [
        {
          id: 10,
          title: "Home-Based Care Services",
          location: "Addis Ababa, Ethiopia",
          date: "March 2024",
          image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
          description: "Providing compassionate home-based care for HIV/AIDS patients."
        },
        {
          id: 11,
          title: "Support Group Meeting",
          location: "Oromia, Ethiopia",
          date: "February 2024",
          image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
          description: "PLHIV attending support group sessions for psychosocial wellbeing."
        },
        {
          id: 12,
          title: "Awareness Campaign",
          location: "Harari, Ethiopia",
          date: "January 2024",
          image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop",
          description: "Community awareness campaign on HIV prevention and stigma reduction."
        },
        {
          id: 13,
          title: "Medical Support",
          location: "Addis Ababa, Ethiopia",
          date: "December 2023",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
          description: "Providing medical support and treatment adherence counseling."
        }
      ]
    },
    {
      category: "Social Accountability",
      description: "Promoting transparency, accountability, and good governance",
      images: [
        {
          id: 14,
          title: "Community Dialogue Session",
          location: "Various Woredas, Ethiopia",
          date: "March 2024",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
          description: "Facilitating dialogue between communities and local government officials."
        },
        {
          id: 15,
          title: "Civic Education Training",
          location: "Oromia, Ethiopia", 
          date: "February 2024",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
          description: "Training community members on their rights and civic responsibilities."
        },
        {
          id: 16,
          title: "Social Audit Workshop",
          location: "Multiple Regions, Ethiopia",
          date: "January 2024",
          image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
          description: "Conducting social audits to promote transparency in public service delivery."
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Child Development": "bg-blue-100 text-blue-800",
      "Community Empowerment": "bg-green-100 text-green-800",
      "HIV/AIDS Support": "bg-red-100 text-red-800",
      "Social Accountability": "bg-purple-100 text-purple-800"
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

        {/* Photo Gallery Albums */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {galleryAlbums.map((album, albumIndex) => (
                <div key={albumIndex} className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{album.category}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{album.description}</p>
                  </div>
                  
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {album.images.map((image) => (
                        <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                          <Card className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative">
                              <img
                                src={image.image}
                                alt={image.title}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <Badge 
                                className={`absolute top-4 left-4 ${getCategoryColor(album.category)}`}
                              >
                                {album.category}
                              </Badge>
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                                {image.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 text-sm">
                                {image.description}
                              </p>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center space-x-2">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span className="text-muted-foreground">{image.location}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4 text-primary" />
                                  <span className="text-muted-foreground">{image.date}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
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