import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "New Partnership Announced with International Development Agency",
      excerpt: "HFC Foundation forms strategic partnership to expand healthcare initiatives across East Africa, bringing medical services to 50,000+ more people.",
      content: "We are excited to announce our new partnership with the International Development Agency, which will significantly expand our healthcare reach across East Africa. This collaboration will enable us to establish 15 new mobile health clinics and train 200 additional community health workers over the next two years.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Clean Water Project Reaches Major Milestone",
      excerpt: "Successfully completed installation of 50th water well, providing clean water access to over 25,000 people across rural communities.",
      content: "Today marks a significant milestone in our clean water initiative as we celebrate the completion of our 50th water well installation. This achievement represents years of dedicated work and community partnership, directly impacting the lives of over 25,000 people who now have reliable access to clean, safe drinking water.",
      author: "David Thompson",
      date: "March 10, 2024",
      category: "Project Update",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Annual Impact Report 2023 Released",
      excerpt: "Comprehensive review of our humanitarian efforts shows record-breaking year with 75,000 beneficiaries reached across 15 countries.",
      content: "Our 2023 Annual Impact Report showcases unprecedented growth in our humanitarian reach. Last year, we successfully implemented 45 projects across 15 countries, directly benefiting 75,000 individuals and families. Key achievements include the construction of 12 schools, establishment of 25 health clinics, and emergency relief for 5,000 disaster-affected families.",
      author: "Lisa Park",
      date: "March 5, 2024",
      category: "Annual Report",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Emergency Response Team Deploys to Disaster Zone",
      excerpt: "Rapid response deployment to cyclone-affected regions in Madagascar, providing immediate relief to 2,000 families.",
      content: "Our emergency response team has been deployed to Madagascar following the recent cyclone that affected thousands of families. Within 48 hours of the disaster, our team was on the ground distributing emergency supplies, setting up temporary shelters, and providing medical assistance to those in need.",
      author: "Ahmed Al-Rashid",
      date: "February 28, 2024",
      category: "Emergency Response",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Women's Empowerment Program Graduates 200 Participants",
      excerpt: "Celebrating the success of our microfinance and skills training program as 200 women start their own businesses.",
      content: "We are proud to celebrate the graduation of 200 women from our comprehensive empowerment program. Over the past year, these remarkable women have completed skills training in agriculture, business management, and financial literacy. Each graduate has received microfinance support to launch their own sustainable businesses.",
      author: "Fatima Okonkwo",
      date: "February 20, 2024",
      category: "Program Success",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Solar Energy Initiative Powers 1,000 Homes",
      excerpt: "Sustainable energy project brings electricity to remote villages, transforming daily life for families and enabling evening education.",
      content: "Our solar energy initiative has reached a major milestone, successfully providing clean electricity to 1,000 homes across 20 remote villages. This sustainable solution is transforming lives by enabling children to study after dark, powering small businesses, and improving overall quality of life in these communities.",
      author: "Michael Chen",
      date: "February 15, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Partnership": "bg-purple-100 text-purple-800",
      "Project Update": "bg-blue-100 text-blue-800",
      "Annual Report": "bg-green-100 text-green-800",
      "Emergency Response": "bg-red-100 text-red-800",
      "Program Success": "bg-orange-100 text-orange-800",
      "Sustainability": "bg-teal-100 text-teal-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay informed about our latest projects, partnerships, and impact stories
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Featured Story</h2>
              <Card className="max-w-4xl mx-auto shadow-strong overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className={`mb-4 ${getCategoryColor(featuredArticle.category)}`}>
                      {featuredArticle.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {featuredArticle.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredArticle.date}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <Badge className={`w-fit mb-2 ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg text-foreground line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Admin Panel Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Admin Dashboard</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Content management system for adding news articles and updates. 
              Admin authentication required for access.
            </p>
            <Card className="max-w-md mx-auto shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  Admin dashboard for creating and managing news articles will be available in the next update.
                </p>
                <Button variant="outline" disabled>
                  Admin Login
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-foreground">Stay Updated</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest updates about our projects, 
              impact stories, and ways to get involved.
            </p>
            <a 
              href="mailto:newsletter@hfc.org?subject=Newsletter Subscription" 
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all"
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default News;