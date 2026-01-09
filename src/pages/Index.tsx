import OrnateCard from "@/components/OrnateCard";
import OrnateDivider from "@/components/OrnateDivider";
import SectionTitle from "@/components/SectionTitle";
import InfoRow from "@/components/InfoRow";
import { Phone, MapPin, Calendar, Briefcase, GraduationCap, Users, Home } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-2">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-maroon font-bold tracking-wide mb-2">
            Biodata
          </h1>
          <p className="font-hindi text-maroon/80 text-lg">परिचय पत्र</p>
        </div>

        {/* Main Card */}
        <OrnateCard className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Photo Section */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-gold p-1 bg-gradient-to-br from-gold/20 to-maroon/10">
                {/* Inner ring */}
                <div className="w-full h-full rounded-full border-2 border-maroon/30 p-1">
                  {/* Photo container */}
                  <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-gold/50">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-1">👤</div>
                      <p className="text-xs font-hindi">फोटो</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 text-gold text-xl">❀</div>
              <div className="absolute -top-2 -right-2 text-gold text-xl">❀</div>
              <div className="absolute -bottom-2 -left-2 text-gold text-xl">❀</div>
              <div className="absolute -bottom-2 -right-2 text-gold text-xl">❀</div>
            </div>
          </div>

          {/* Name Section */}
          <div className="text-center mb-6">
            <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold mb-1">
              Shubham Singh Chouhan
            </h2>
            <p className="font-hindi text-xl text-maroon/80">
              शुभम सिंह चौहान
            </p>
          </div>

          <OrnateDivider symbol="✦" />

          {/* Personal Details */}
          <SectionTitle title="Personal Details" titleHindi="व्यक्तिगत विवरण" />
          
          <div className="space-y-1">
            <InfoRow 
              label="Date of Birth" 
              labelHindi="जन्म तिथि"
              value="02 September 2005" 
              valueHindi="02 सितम्बर 2005"
            />
            <InfoRow 
              label="Birth Place" 
              labelHindi="जन्म स्थान"
              value="Jaipur" 
              valueHindi="जयपुर"
            />
            <InfoRow 
              label="Birth Time" 
              labelHindi="जन्म समय"
              value="08:48 PM" 
              valueHindi="रात 08:48 बजे"
            />
            <InfoRow 
              label="Height" 
              labelHindi="ऊँचाई"
              value="6 Feet 1 Inch" 
              valueHindi="6 फीट 1 इंच"
            />
          </div>

          <OrnateDivider />

          {/* Gotra Details */}
          <SectionTitle title="Gotra Details" titleHindi="गोत्र विवरण" />
          
          <div className="space-y-1">
            <InfoRow 
              label="Gotra" 
              labelHindi="गोत्र"
              value="Sanchore Chouhan" 
              valueHindi="सांचोर चौहान"
            />
            <InfoRow 
              label="Nanihiyal Gotra" 
              labelHindi="ननिहाल गोत्र"
              value="Kangharot" 
              valueHindi="खंगारोत"
            />
            <InfoRow 
              label="Dadisa Gotra" 
              labelHindi="दादीसा गोत्र"
              value="Solanki" 
              valueHindi="सोलंकी"
            />
          </div>

          <OrnateDivider />

          {/* Education & Career */}
          <SectionTitle title="Education & Career" titleHindi="शिक्षा एवं पेशा" />
          
          <div className="space-y-1">
            <InfoRow 
              label="Education" 
              labelHindi="शैक्षणिक योग्यता"
              value="Bachelor's in Computer Applications" 
              valueHindi="बैचलर ऑफ कंप्यूटर एप्लीकेशंस"
            />
            <InfoRow 
              label="Occupation" 
              labelHindi="वर्तमान पेशा"
              value="Software Engineer" 
              valueHindi="सॉफ्टवेयर इंजीनियर"
            />
            <InfoRow 
              label="Job Location" 
              labelHindi="कार्यस्थल"
              value="IT Park Panchkula (Chandigarh)" 
              valueHindi="आईटी पार्क, पंचकूला (चंडीगढ़)"
            />
          </div>

          <OrnateDivider />

          {/* Family Details */}
          <SectionTitle title="Family Details" titleHindi="पारिवारिक विवरण" />
          
          <div className="space-y-1">
            <InfoRow 
              label="Father's Name" 
              labelHindi="पिता का नाम"
              value="Shri Rajendra Singh Chouhan" 
              valueHindi="श्री राजेन्द्र सिंह चौहान"
            />
            <InfoRow 
              label="Mother's Name" 
              labelHindi="माता का नाम"
              value="Smt. Kiran Kanwar" 
              valueHindi="श्रीमती किरण कंवर"
            />
            <InfoRow 
              label="Siblings" 
              labelHindi="भाई-बहन"
              value="One Sister" 
              valueHindi="एक बहन"
            />
          </div>

          <OrnateDivider />

          {/* Address Details */}
          <SectionTitle title="Address Details" titleHindi="निवास विवरण" />
          
          <div className="space-y-1">
            <InfoRow 
              label="Present Address" 
              labelHindi="वर्तमान पता"
              value="31, New Friends Colony, Gokulpura, Jhotwara, Jaipur, Rajasthan" 
              valueHindi="31, न्यू फ्रेंड्स कॉलोनी, गोकुलपुरा, झोटवाड़ा, जयपुर"
            />
            <InfoRow 
              label="Native Village" 
              labelHindi="पैतृक गाँव"
              value="Fatehpura (Khandela)" 
              valueHindi="फतेहपुरा (खंडेला)"
            />
            <InfoRow 
              label="Maternal Home (Nanihiyal)" 
              labelHindi="ननिहाल"
              value="Dyodi (Jobner)" 
              valueHindi="ड्योडी (जोबनेर)"
            />
            <InfoRow 
              label="Maternal Home (Dadisa)" 
              labelHindi="दादीसा"
              value="Narshingpuri (Sikar)" 
              valueHindi="नरसिंहपुरी (सीकर)"
            />
          </div>

          <OrnateDivider symbol="❀" />

          {/* Contact Details */}
          <div className="text-center">
            <SectionTitle title="Contact Details" titleHindi="संपर्क विवरण" />
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <a 
                href="tel:9664349877" 
                className="flex items-center gap-2 bg-maroon text-primary-foreground px-6 py-3 rounded-md hover:bg-maroon-dark transition-colors font-display tracking-wide"
              >
                <Phone className="w-4 h-4" />
                9664349877
              </a>
              <a 
                href="tel:9799571509" 
                className="flex items-center gap-2 bg-maroon text-primary-foreground px-6 py-3 rounded-md hover:bg-maroon-dark transition-colors font-display tracking-wide"
              >
                <Phone className="w-4 h-4" />
                9799571509
              </a>
            </div>
          </div>
        </OrnateCard>

        {/* Footer */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="font-hindi text-gold text-lg">॥ शुभ विवाह ॥</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-gold">✦</span>
            <span className="text-gold">✦</span>
            <span className="text-gold">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
