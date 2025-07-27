-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table for admin users
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'admin',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  completion_date DATE,
  beneficiaries INTEGER DEFAULT 0,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  budget DECIMAL(12,2),
  status TEXT NOT NULL DEFAULT 'planning' CHECK (status IN ('planning', 'ongoing', 'completed', 'paused')),
  category TEXT NOT NULL,
  image_url TEXT,
  impact TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create news articles table
CREATE TABLE public.news_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.profiles(id),
  category TEXT NOT NULL,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create team members table
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  email TEXT,
  phone TEXT,
  image_url TEXT,
  department TEXT,
  expertise TEXT[],
  social_links JSONB DEFAULT '{}',
  member_type TEXT NOT NULL DEFAULT 'staff' CHECK (member_type IN ('founder', 'board', 'staff')),
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create thematic areas table
CREATE TABLE public.thematic_areas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  details TEXT,
  icon TEXT,
  key_activities TEXT[],
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gallery table
CREATE TABLE public.gallery_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  project_id UUID REFERENCES public.projects(id),
  featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create donations table
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payment_method TEXT,
  payment_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  message TEXT,
  anonymous BOOLEAN DEFAULT false,
  project_id UUID REFERENCES public.projects(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.thematic_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Public can view published projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public can view published news articles" ON public.news_articles FOR SELECT USING (published = true);
CREATE POLICY "Public can view active team members" ON public.team_members FOR SELECT USING (active = true);
CREATE POLICY "Public can view active thematic areas" ON public.thematic_areas FOR SELECT USING (active = true);
CREATE POLICY "Public can view gallery items" ON public.gallery_items FOR SELECT USING (true);

-- Create RLS policies for admin access
CREATE POLICY "Admins can manage profiles" ON public.profiles FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage projects" ON public.projects FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can manage news articles" ON public.news_articles FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can manage team members" ON public.team_members FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can manage thematic areas" ON public.thematic_areas FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can manage gallery items" ON public.gallery_items FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can manage contact submissions" ON public.contact_submissions FOR UPDATE USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can view donations" ON public.donations FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

-- Create policies for public submissions
CREATE POLICY "Anyone can submit contact forms" ON public.contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can make donations" ON public.donations FOR INSERT WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_news_articles_updated_at BEFORE UPDATE ON public.news_articles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON public.team_members FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_thematic_areas_updated_at BEFORE UPDATE ON public.thematic_areas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_gallery_items_updated_at BEFORE UPDATE ON public.gallery_items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON public.contact_submissions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_donations_updated_at BEFORE UPDATE ON public.donations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email),
    'admin'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create storage buckets for file uploads
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('projects', 'projects', true),
  ('news', 'news', true),
  ('team', 'team', true),
  ('gallery', 'gallery', true);

-- Create storage policies
CREATE POLICY "Public can view project images" ON storage.objects FOR SELECT USING (bucket_id = 'projects');
CREATE POLICY "Admins can upload project images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'projects' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can update project images" ON storage.objects FOR UPDATE USING (bucket_id = 'projects' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can delete project images" ON storage.objects FOR DELETE USING (bucket_id = 'projects' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Public can view news images" ON storage.objects FOR SELECT USING (bucket_id = 'news');
CREATE POLICY "Admins can upload news images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'news' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can update news images" ON storage.objects FOR UPDATE USING (bucket_id = 'news' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can delete news images" ON storage.objects FOR DELETE USING (bucket_id = 'news' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Public can view team images" ON storage.objects FOR SELECT USING (bucket_id = 'team');
CREATE POLICY "Admins can upload team images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'team' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can update team images" ON storage.objects FOR UPDATE USING (bucket_id = 'team' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can delete team images" ON storage.objects FOR DELETE USING (bucket_id = 'team' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Public can view gallery images" ON storage.objects FOR SELECT USING (bucket_id = 'gallery');
CREATE POLICY "Admins can upload gallery images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can update gallery images" ON storage.objects FOR UPDATE USING (bucket_id = 'gallery' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can delete gallery images" ON storage.objects FOR DELETE USING (bucket_id = 'gallery' AND EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));