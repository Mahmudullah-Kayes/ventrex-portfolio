import PageTransition from "@/components/animations/PageTransition";
import AnimatedSection from "@/components/animations/AnimatedSection";
import ContactForm from "@/components/sections/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        
        {/* Background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="container-wide relative z-10">
          <AnimatedSection type="fade" className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
              <Mail className="h-4 w-4" />
              <span>Let's Start Your Growth Journey</span>
            </div>
            <h1 className="gradient-text mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              Ready to Accelerate Your Business?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get in touch with our marketing experts to discuss your goals and discover how we can help you achieve remarkable growth through data-driven strategies.
            </p>
            
            {/* Quick response time indicator */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Average response time: 2 hours</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">500+</span>
                <span>Successful campaigns launched</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection type="slide-right">
              <div className="space-y-12">
                <div>
                  <h2 className="mb-6 text-3xl font-bold">Let's Connect</h2>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Choose your preferred way to reach out. Our marketing strategists are ready to discuss your growth opportunities and create a custom plan for your business success.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="group hover:shadow-md hover:-translate-y-1 transition-all duration-300 border hover:border-primary/30">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold mb-1 text-base">Our HQ</h3>
                          <p className="text-muted-foreground text-sm leading-snug">
                          Dhaka Badda 1212<br />
                          Dhaka, Bangladesh
                          </p>
                          <p className="text-xs text-primary mt-1 font-medium">Visit us for strategy sessions</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-md hover:-translate-y-1 transition-all duration-300 border hover:border-primary/30">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold mb-1 text-base">Call Us Direct</h3>
                          <p className="text-muted-foreground font-mono text-sm">
                          +88 01795789511
                          </p>
                          <p className="text-xs text-primary mt-1 font-medium">Mon-Thu: 9am - 5pm GMT</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-md hover:-translate-y-1 transition-all duration-300 border hover:border-primary/30">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold mb-1 text-base">Email Us</h3>
                          <a 
                            href="mailto:support.ventrexglobal@gmail.com" 
                            className="text-muted-foreground text-xs sm:text-sm leading-snug break-all hover:text-primary transition-colors block"
                          >
                            support.ventrexglobal@gmail.com
                          </a>
                          <p className="text-xs text-primary mt-1 font-medium">Response within 1 hours</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-md hover:-translate-y-1 transition-all duration-300 border hover:border-primary/30">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold mb-1 text-base">Business Hours</h3>
                          <p className="text-muted-foreground text-sm leading-snug">
                          Monday - Thursday<br />
                          9am - 5pm GMT
                          </p>
                          <p className="text-xs text-primary mt-1 font-medium">Emergency support available</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Follow Our Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with our latest marketing insights, case studies, and industry trends.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href="https://www.facebook.com/ventrexglobal" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-background rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <FacebookIcon className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link 
                      href="https://www.instagram.com/ventrexmediaglobal" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-background rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <InstagramIcon className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/ventrex-global-9128b7377/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-background rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link 
                      href="https://wa.me/8801795789511?text=Hi! I found your website and would like to discuss my marketing needs."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-background rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="transition-colors"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                      </svg>
                      <span className="sr-only">WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection type="slide-left">
              <ContactForm
                title="Send Us a Message"
                subtitle="GET IN TOUCH"
                description="Fill out the form below and we'll get back to you as soon as possible."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-wide">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-3xl font-bold">Visit Our Office</h2>
            <p className="text-muted-foreground text-lg">
              Located in Badda, Dhaka 1212, Bangladesh. Schedule a visit for an in-person strategy session and discover how we can help your business grow.
            </p>
          </AnimatedSection>

          <AnimatedSection type="scale">
            <div className="relative">
              {/* Map container with enhanced styling */}
              <div className="rounded-lg overflow-hidden shadow-lg h-[500px] relative border-2 border-primary/20">
                <iframe
                  title="Ventrex Office Location Map - Dhaka Badda 1212"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.123!2d90.4255!3d23.7808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79234b6b1dd%3A0x28976b91c13d803!2sBadda%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700150544087!5m2!1sen!2sbd&zoom=14"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Location badge overlay */}
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-10">
                  <MapPin className="h-4 w-4" />
                  <span className="font-semibold text-sm">Ventrex Office</span>
                </div>
              </div>
              
              {/* Location details below map */}
              <div className="mt-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Exact Location</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Address:</strong> Dhaka Badda 1212<br />
                      <strong>Division:</strong> Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl font-bold">Common Questions</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about partnering with our marketing agency.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                id: "faq-1",
                question: "How quickly can we start seeing results?",
                answer: "Most clients see initial improvements within 30-60 days, with significant growth typically occurring within 3-6 months. We provide detailed analytics and monthly reports to track your progress and ROI from day one."
              },
              {
                id: "faq-2",
                question: "What marketing channels do you specialize in?",
                answer: "We offer comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email campaigns, and conversion optimization. We'll recommend the best mix for your specific goals and budget."
              },
              {
                id: "faq-3",
                question: "Do you work with businesses of all sizes?",
                answer: "Yes! We work with startups, SMBs, and enterprise companies. Our strategies are tailored to your business size, industry, and growth stage. Whether you're launching your first campaign or scaling existing efforts, we have solutions for you."
              },
              {
                id: "faq-4",
                question: "How do you measure campaign success?",
                answer: "We track key performance indicators (KPIs) that matter to your business: lead generation, conversion rates, ROI, customer acquisition cost, and revenue growth. You'll receive detailed reports showing exactly how our efforts impact your bottom line."
              },
              {
                id: "faq-5",
                question: "What's included in your marketing audit?",
                answer: "Our comprehensive audit analyzes your current digital presence, competitor landscape, target audience, conversion funnel, and growth opportunities. You'll receive a detailed report with actionable recommendations and a strategic roadmap."
              },
              {
                id: "faq-6",
                question: "Do you require long-term contracts?",
                answer: "We offer flexible engagement options including project-based work, monthly retainers, and performance-based partnerships. Our goal is to earn your trust through results, not lock you into lengthy contracts."
              }
            ].map((faq) => (
              <AnimatedSection
                key={faq.id}
                type="slide-up"
                delay={0.1}
              >
                <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/20 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{faq.answer}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
