import { User, Calendar, MapPin, Ruler, BookOpen, Briefcase, Building2, Users, Home, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mandala-bg py-8 px-4 md:py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold"></span>
            <span className="font-hindi text-gold text-lg tracking-wide">॥ श्री गणेशाय नमः ॥</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold"></span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text mb-2">
            Biodata
          </h1>
          <p className="font-hindi text-primary/70 text-xl">विवाह परिचय पत्र</p>
        </header>

        {/* Main Card */}
        <main className="floating-card p-6 md:p-10 animate-fade-up stagger-1">
          
          {/* Photo & Name Section */}
          <div className="flex flex-col items-center mb-10">
            {/* Photo */}
            <div className="photo-frame mb-6 animate-scale-in stagger-2">
              <div className="photo-inner">
                <div className="text-center">
                  <User className="w-16 h-16 text-primary/40 mx-auto mb-1" />
                  <span className="font-hindi text-sm text-muted-foreground">फोटो</span>
                </div>
              </div>
            </div>
            
            {/* Name */}
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                Shubham Singh Chouhan
              </h2>
              <p className="font-hindi text-xl text-primary/70">शुभम सिंह चौहान</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Personal Details */}
            <section className="section-card animate-fade-up stagger-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Personal Details</h3>
                  <p className="font-hindi text-sm text-muted-foreground">व्यक्तिगत विवरण</p>
                </div>
              </div>
              <div className="space-y-0">
                <DataRow 
                  icon={<Calendar className="w-4 h-4" />}
                  label="Date of Birth" 
                  labelHi="जन्म तिथि"
                  value="02 September 2005" 
                  valueHi="02 सितम्बर 2005"
                />
                <DataRow 
                  icon={<MapPin className="w-4 h-4" />}
                  label="Birth Place" 
                  labelHi="जन्म स्थान"
                  value="Jaipur" 
                  valueHi="जयपुर"
                />
                <DataRow 
                  icon={<Calendar className="w-4 h-4" />}
                  label="Birth Time" 
                  labelHi="जन्म समय"
                  value="08:48 PM" 
                  valueHi="रात 08:48 बजे"
                />
                <DataRow 
                  icon={<Ruler className="w-4 h-4" />}
                  label="Height" 
                  labelHi="ऊँचाई"
                  value="6 Feet 1 Inch" 
                  valueHi="6 फीट 1 इंच"
                />
              </div>
            </section>

            {/* Gotra Details */}
            <section className="section-card animate-fade-up stagger-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Gotra Details</h3>
                  <p className="font-hindi text-sm text-muted-foreground">गोत्र विवरण</p>
                </div>
              </div>
              <div className="space-y-0">
                <DataRow 
                  label="Gotra" 
                  labelHi="गोत्र"
                  value="Sanchore Chouhan" 
                  valueHi="सांचोर चौहान"
                />
                <DataRow 
                  label="Nanihiyal Gotra" 
                  labelHi="ननिहाल गोत्र"
                  value="Kangharot" 
                  valueHi="खंगारोत"
                />
                <DataRow 
                  label="Dadisa Gotra" 
                  labelHi="दादीसा गोत्र"
                  value="Solanki" 
                  valueHi="सोलंकी"
                />
              </div>
            </section>

            {/* Education & Career */}
            <section className="section-card animate-fade-up stagger-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Education & Career</h3>
                  <p className="font-hindi text-sm text-muted-foreground">शिक्षा एवं पेशा</p>
                </div>
              </div>
              <div className="space-y-0">
                <DataRow 
                  icon={<BookOpen className="w-4 h-4" />}
                  label="Education" 
                  labelHi="शैक्षणिक योग्यता"
                  value="Bachelor's in Computer Applications" 
                  valueHi="बैचलर ऑफ कंप्यूटर एप्लीकेशंस"
                />
                <DataRow 
                  icon={<Briefcase className="w-4 h-4" />}
                  label="Occupation" 
                  labelHi="वर्तमान पेशा"
                  value="Software Engineer" 
                  valueHi="सॉफ्टवेयर इंजीनियर"
                />
                <DataRow 
                  icon={<Building2 className="w-4 h-4" />}
                  label="Job Location" 
                  labelHi="कार्यस्थल"
                  value="IT Park Panchkula, Chandigarh" 
                  valueHi="आईटी पार्क, पंचकूला"
                />
              </div>
            </section>

            {/* Family Details */}
            <section className="section-card animate-fade-up stagger-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Family Details</h3>
                  <p className="font-hindi text-sm text-muted-foreground">पारिवारिक विवरण</p>
                </div>
              </div>
              <div className="space-y-0">
                <DataRow 
                  label="Father's Name" 
                  labelHi="पिता का नाम"
                  value="Shri Rajendra Singh Chouhan" 
                  valueHi="श्री राजेन्द्र सिंह चौहान"
                />
                <DataRow 
                  label="Mother's Name" 
                  labelHi="माता का नाम"
                  value="Smt. Kiran Kanwar" 
                  valueHi="श्रीमती किरण कंवर"
                />
                <DataRow 
                  label="Siblings" 
                  labelHi="भाई-बहन"
                  value="One Sister" 
                  valueHi="एक बहन"
                />
              </div>
            </section>
          </div>

          {/* Address Section - Full Width */}
          <section className="section-card mt-6 animate-fade-up stagger-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">Address Details</h3>
                <p className="font-hindi text-sm text-muted-foreground">निवास विवरण</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-6">
              <DataRow 
                label="Present Address" 
                labelHi="वर्तमान पता"
                value="31, New Friends Colony, Gokulpura, Jhotwara, Jaipur, Rajasthan" 
                valueHi="31, न्यू फ्रेंड्स कॉलोनी, गोकुलपुरा, झोटवाड़ा, जयपुर"
              />
              <DataRow 
                label="Native Village" 
                labelHi="पैतृक गाँव"
                value="Fatehpura (Khandela)" 
                valueHi="फतेहपुरा (खंडेला)"
              />
              <DataRow 
                label="Nanihiyal" 
                labelHi="ननिहाल"
                value="Dyodi (Jobner)" 
                valueHi="ड्योडी (जोबनेर)"
              />
              <DataRow 
                label="Dadisa" 
                labelHi="दादीसा"
                value="Narshingpuri (Sikar)" 
                valueHi="नरसिंहपुरी (सीकर)"
              />
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-10 text-center animate-fade-up stagger-6">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/50"></span>
              <h3 className="font-display text-xl font-semibold text-primary title-decorated">Contact</h3>
              <span className="h-px w-8 bg-gold/50"></span>
            </div>
            <p className="font-hindi text-muted-foreground mb-6">संपर्क विवरण</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9664349877" className="contact-btn">
                <Phone className="w-5 h-5" />
                <span>9664349877</span>
              </a>
              <a href="tel:9799571509" className="contact-btn">
                <Phone className="w-5 h-5" />
                <span>9799571509</span>
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-10 animate-fade-up stagger-6">
          <div className="inline-flex items-center gap-4">
            <span className="text-gold text-2xl">❀</span>
            <span className="font-hindi text-xl gold-gradient-text font-medium">॥ शुभ विवाह ॥</span>
            <span className="text-gold text-2xl">❀</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Data Row Component
interface DataRowProps {
  icon?: React.ReactNode;
  label: string;
  labelHi?: string;
  value: string;
  valueHi?: string;
}

const DataRow = ({ icon, label, labelHi, value, valueHi }: DataRowProps) => (
  <div className="data-row">
    <div className="flex items-start gap-2">
      {icon && <span className="text-gold mt-0.5 flex-shrink-0">{icon}</span>}
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {labelHi && <p className="font-hindi text-xs text-muted-foreground/70">{labelHi}</p>}
      </div>
    </div>
    <div className="text-right">
      <p className="font-medium text-foreground">{value}</p>
      {valueHi && <p className="font-hindi text-sm text-muted-foreground">{valueHi}</p>}
    </div>
  </div>
);

export default Index;
