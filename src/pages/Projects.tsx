import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, MapPin, Users, Target } from "lucide-react";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Sponsorship for Children Foster Care",
      description: "Providing comprehensive support for children in foster care through sponsored care programs that ensure their basic needs, education, and emotional well-being.",
      location: "Multiple Regions, Ethiopia",
      startDate: "January 2020",
      endDate: "Ongoing",
      beneficiaries: "130",
      progress: 85,
      budget: "$200,000",
      status: "In Progress",
      category: "Child Development"
    },
    {
      title: "Group Home Program",
      description: "Operating family-style group homes where dedicated mothers care for 8-10 children, providing them with a loving family environment and comprehensive support.",
      location: "Addis Ababa & Surrounding Areas",
      startDate: "2005",
      endDate: "Ongoing",
      beneficiaries: "120",
      progress: 90,
      budget: "$300,000",
      status: "In Progress",
      category: "Child Development"
    },
    {
      title: "Youth Learning Center",
      description: "Providing skills training, education support, and capacity building programs for youth to enhance their employability and life skills.",
      location: "Addis Ababa",
      startDate: "September 2023",
      endDate: "Ongoing",
      beneficiaries: "200",
      progress: 70,
      budget: "$150,000",
      status: "In Progress",
      category: "Education"
    },
    {
      title: "Urban Productive Safety Net",
      description: "Supporting street adults, children, and women with children through productive safety net programs and job creation initiatives.",
      location: "Urban Areas, Ethiopia",
      startDate: "March 2024",
      endDate: "February 2026",
      beneficiaries: "500",
      progress: 45,
      budget: "$250,000",
      status: "In Progress",
      category: "Economic Development"
    },
    {
      title: "Inclusive Social and Behavior Change",
      description: "Empowering communities through inclusive social and behavior change interventions that promote positive community transformation.",
      location: "Various Communities, Ethiopia",
      startDate: "June 2024",
      endDate: "May 2025",
      beneficiaries: "1,500",
      progress: 30,
      budget: "$180,000",
      status: "In Progress",
      category: "Community Development"
    }
  ];

  const completedProjects = [
    {
      title: "Ethiopian Social Accountability Project (ESAP2, ESAP3)",
      description: "Promoted transparency, accountability, and citizen participation in governance and public service delivery across multiple phases.",
      location: "Multiple Regions, Ethiopia",
      completedDate: "December 2022",
      beneficiaries: "5,000",
      budget: "$400,000",
      impact: "Strengthened citizen engagement and improved public service delivery in target communities",
      category: "Governance"
    },
    {
      title: "Ethiopian Civic Engagement (ECE)",
      description: "Enhanced civic participation and democratic governance through capacity building and community engagement initiatives.",
      location: "Various Regions, Ethiopia",
      completedDate: "September 2021",
      beneficiaries: "3,000",
      budget: "$300,000",
      impact: "Increased civic awareness and participation in democratic processes",
      category: "Governance"
    },
    {
      title: "Civil Society Support Program (CSSP2)",
      description: "Strengthened civil society organizations through gender responsive budgeting initiatives and capacity building support.",
      location: "National, Ethiopia",
      completedDate: "June 2020",
      beneficiaries: "1,500",
      budget: "$250,000",
      impact: "Enhanced organizational capacity and gender-responsive programming among CSOs",
      category: "Governance"
    },
    {
      title: "Integrated Community Based HIV/AIDS Program",
      description: "Provided comprehensive HIV/AIDS prevention, care, and support services in communities affected by the epidemic.",
      location: "Multiple Regions, Ethiopia",
      completedDate: "December 2019",
      beneficiaries: "8,000",
      budget: "$500,000",
      impact: "Reduced HIV transmission and improved quality of life for affected individuals and families",
      category: "Healthcare"
    },
    {
      title: "Village Saving and Loan (VSLA)",
      description: "Empowered vulnerable community members through village savings and loan associations to improve economic resilience.",
      location: "Rural Communities, Ethiopia",
      completedDate: "March 2018",
      beneficiaries: "1,200",
      budget: "$120,000",
      impact: "Established sustainable community-based financial systems and improved household incomes",
      category: "Economic Development"
    },
    {
      title: "Girls Empowerment Project",
      description: "Promoted girls' education, protection, and empowerment through comprehensive support programs.",
      location: "Various Regions, Ethiopia",
      completedDate: "August 2017",
      beneficiaries: "800",
      budget: "$150,000",
      impact: "Increased girls' school enrollment and completion rates while reducing harmful practices",
      category: "Education"
    },
    {
      title: "SCRHA/PATH Project",
      description: "Collaborated with SCRHA and PATH to improve reproductive health and family planning services.",
      location: "Somali Region, Ethiopia",
      completedDate: "November 2016",
      beneficiaries: "2,500",
      budget: "$200,000",
      impact: "Improved access to reproductive health services and family planning education",
      category: "Healthcare"
    },
    {
      title: "Home Based Care for HIV/AIDS Patients",
      description: "Provided dignified home-based care services for bedridden HIV/AIDS patients, bringing comfort and hope to families.",
      location: "Urban and Rural Areas, Ethiopia",
      completedDate: "December 2015",
      beneficiaries: "1,500",
      budget: "$180,000",
      impact: "Improved quality of life and dignity for terminally ill patients and reduced stigma",
      category: "Healthcare"
    },
    {
      title: "Hospice Project",
      description: "Established hospice services for terminally ill individuals, providing compassionate end-of-life care and family support.",
      location: "Addis Ababa, Ethiopia",
      completedDate: "June 2014",
      beneficiaries: "500",
      budget: "$100,000",
      impact: "Provided dignified end-of-life care and supported grieving families",
      category: "Healthcare"
    },
    {
      title: "Lion Kids Kindergarten and Primary School",
      description: "Operated a free formal kindergarten and primary school as a social service to support vulnerable children's education.",
      location: "Addis Ababa, Ethiopia",
      completedDate: "July 2013",
      beneficiaries: "300",
      budget: "$250,000",
      impact: "Provided quality free education and prepared children for successful academic futures",
      category: "Education"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Healthcare": "bg-red-100 text-red-800",
      "Education": "bg-blue-100 text-blue-800",
      "Child Development": "bg-purple-100 text-purple-800",
      "Governance": "bg-indigo-100 text-indigo-800",
      "Economic Development": "bg-green-100 text-green-800",
      "Community Development": "bg-orange-100 text-orange-800"
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