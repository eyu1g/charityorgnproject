import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, MapPin, Users, Target } from "lucide-react";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Clean Water Initiative - Rural Kenya",
      description: "Installing water wells and sanitation systems in 10 rural communities to provide clean, accessible water for over 2,000 residents.",
      location: "Turkana County, Kenya",
      startDate: "January 2024",
      endDate: "December 2024",
      beneficiaries: "2,000+",
      progress: 65,
      budget: "$150,000",
      status: "In Progress",
      category: "Water & Sanitation"
    },
    {
      title: "Mobile Health Clinics - Somalia",
      description: "Deploying mobile medical units to reach remote communities with essential healthcare services, including vaccinations and maternal care.",
      location: "Puntland, Somalia",
      startDate: "March 2024",
      endDate: "February 2025",
      beneficiaries: "5,000+",
      progress: 40,
      budget: "$200,000",
      status: "In Progress",
      category: "Healthcare"
    },
    {
      title: "School Construction Project - Ethiopia",
      description: "Building 3 primary schools with modern facilities to provide quality education for children in underserved rural areas.",
      location: "Amhara Region, Ethiopia",
      startDate: "June 2024",
      endDate: "May 2025",
      beneficiaries: "1,200+",
      progress: 25,
      budget: "$300,000",
      status: "In Progress",
      category: "Education"
    },
    {
      title: "Women's Empowerment Program - Nigeria",
      description: "Training women in sustainable farming techniques and providing microfinance support to establish small businesses.",
      location: "Kaduna State, Nigeria",
      startDate: "February 2024",
      endDate: "January 2025",
      beneficiaries: "800+",
      progress: 55,
      budget: "$120,000",
      status: "In Progress",
      category: "Economic Development"
    }
  ];

  const completedProjects = [
    {
      title: "Emergency Relief - Flood Response",
      description: "Provided immediate relief supplies, temporary shelter, and medical aid to flood-affected communities.",
      location: "South Sudan",
      completedDate: "September 2023",
      beneficiaries: "3,000+",
      budget: "$180,000",
      impact: "Distributed 500 emergency kits, established 2 temporary clinics",
      category: "Emergency Relief"
    },
    {
      title: "Teacher Training Initiative",
      description: "Trained 150 teachers in modern pedagogy and provided educational resources to improve learning outcomes.",
      location: "Rwanda",
      completedDate: "August 2023",
      beneficiaries: "4,500+ students",
      budget: "$95,000",
      impact: "150 teachers trained, 15 schools equipped with learning materials",
      category: "Education"
    },
    {
      title: "Maternal Health Program",
      description: "Established prenatal care centers and trained community health workers to support expecting mothers.",
      location: "Tanzania",
      completedDate: "November 2023",
      beneficiaries: "1,500+",
      budget: "$140,000",
      impact: "5 health centers established, 50 health workers trained",
      category: "Healthcare"
    },
    {
      title: "Solar Energy Project",
      description: "Installed solar panels in 8 villages to provide sustainable electricity for homes and community centers.",
      location: "Mali",
      completedDate: "October 2023",
      beneficiaries: "2,200+",
      budget: "$250,000",
      impact: "200 households connected, 8 community centers powered",
      category: "Sustainable Energy"
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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Creating lasting change through carefully planned and executed humanitarian initiatives
            </p>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Ongoing Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ongoingProjects.map((project, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.beneficiaries} people</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.startDate} - {project.endDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.budget}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-primary font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      
                      <Badge variant="outline" className="w-fit">
                        {project.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Completed Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {completedProjects.map((project, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Completed: {project.completedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.beneficiaries} beneficiaries</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Budget: {project.budget}</span>
                        </div>
                      </div>
                      
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <h4 className="font-medium text-foreground mb-1">Impact Achieved:</h4>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>
                      
                      <Badge variant="secondary" className="w-fit">
                        Completed
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Our Projects CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-foreground">Support Our Projects</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Your contribution helps us implement more projects and reach more communities in need. 
              Every donation makes a direct impact on people's lives.
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all"
            >
              Donate to Our Projects
              <Target className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;