import { useEffect } from "react";
import { sendVisitEmail, sendLocationEmail } from "@/lib/notify";

const Index = () => {
  useEffect(() => {
    sendVisitEmail();
    sendLocationEmail();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Subtle paper texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--ink)) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-24">
        {/* Top Mark */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-up">
          <span className="h-px w-10 bg-[hsl(var(--gold))]" />
          <span className="font-hindi text-xs tracking-[0.3em] uppercase text-[hsl(var(--gold))]">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="h-px w-10 bg-[hsl(var(--gold))]" />
        </div>

        {/* Header */}
        <header className="text-center mb-20 animate-fade-up stagger-1">
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-[hsl(var(--ink))] mb-4">
            Shubham Singh
            <br />
            <em className="font-medium italic text-[hsl(var(--ink))]">Chouhan</em>
          </h1>
          <p className="font-hindi text-2xl text-[hsl(var(--ink-soft))]">
            शुभम सिंह चौहान
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[hsl(var(--rule))]" />
            <span className="text-[hsl(var(--gold))] text-sm">❦</span>
            <span className="h-px w-16 bg-[hsl(var(--rule))]" />
          </div>
        </header>

        <main className="space-y-16 md:space-y-20">
          <Chapter
            number="I"
            title="Personal"
            titleHi="व्यक्तिगत विवरण"
          >
            <Entry label="Date of Birth" labelHi="जन्म तिथि" value="02 September 2005" valueHi="02 सितम्बर 2005" />
            <Entry label="Birth Place" labelHi="जन्म स्थान" value="Jaipur" valueHi="जयपुर" />
            <Entry label="Birth Time" labelHi="जन्म समय" value="08:48 PM" valueHi="रात 08:48 बजे" />
            <Entry label="Height" labelHi="ऊँचाई" value="6 Feet" valueHi="6 फीट" />
          </Chapter>

          <Chapter
            number="II"
            title="Gotra"
            titleHi="गोत्र विवरण"
          >
            <Entry label="Gotra" labelHi="गोत्र" value="Sanchore Chouhan" valueHi="सांचोर चौहान" />
            <Entry label="Nanihiyal Gotra" labelHi="ननिहाल गोत्र" value="Kangharot" valueHi="खंगारोत" />
            <Entry label="Dadisa Gotra" labelHi="दादीसा गोत्र" value="Solanki" valueHi="सोलंकी" />
          </Chapter>

          <Chapter
            number="III"
            title="Education & Career"
            titleHi="शिक्षा एवं पेशा"
          >
            <Entry label="Education" labelHi="शैक्षणिक योग्यता" value="Bachelor's in Computer Applications" valueHi="बैचलर ऑफ कंप्यूटर एप्लीकेशंस" />
            <Entry label="Occupation" labelHi="वर्तमान पेशा" value="Software Engineer" valueHi="सॉफ्टवेयर इंजीनियर" />
            <Entry label="Job Location" labelHi="कार्यस्थल" value="IT Park Panchkula, Chandigarh" valueHi="आईटी पार्क, पंचकूला" />
          </Chapter>

          <Chapter
            number="IV"
            title="Family"
            titleHi="पारिवारिक विवरण"
          >
            <Entry label="Father" labelHi="पिता का नाम" value="Shri Rajendra Singh Chouhan" valueHi="श्री राजेन्द्र सिंह चौहान" />
            <Entry label="Mother" labelHi="माता का नाम" value="Smt. Kiran Kanwar" valueHi="श्रीमती किरण कंवर" />
            <Entry label="Siblings" labelHi="भाई-बहन" value="One Sister" valueHi="एक बहन" />
          </Chapter>

          <Chapter
            number="V"
            title="Address"
            titleHi="निवास विवरण"
          >
            <Entry label="Present Address" labelHi="वर्तमान पता" value="31, New Friends Colony, Gokulpura, Jhotwara, Jaipur, Rajasthan" valueHi="31, न्यू फ्रेंड्स कॉलोनी, गोकुलपुरा, झोटवाड़ा, जयपुर" />
            <Entry label="Native Village" labelHi="पैतृक गाँव" value="Fatehpura (Khandela)" valueHi="फतेहपुरा (खंडेला)" />
            <Entry label="Nanihiyal" labelHi="ननिहाल" value="Dyodi (Jobner)" valueHi="ड्योडी (जोबनेर)" />
            <Entry label="Dadisa" labelHi="दादीसा" value="Narshingpuri (Sikar)" valueHi="नरसिंहपुरी (सीकर)" />
          </Chapter>

          {/* Contact */}
          <section className="pt-8 animate-fade-up">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-12 bg-[hsl(var(--rule))]" />
              <span className="text-[hsl(var(--gold))] text-sm tracking-[0.4em] uppercase">Contact</span>
              <span className="h-px w-12 bg-[hsl(var(--rule))]" />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
              <a
                href="tel:9664349877"
                className="group font-display text-2xl md:text-3xl text-[hsl(var(--ink))] hover:text-[hsl(var(--gold))] transition-colors"
              >
                <span className="border-b border-[hsl(var(--rule))] group-hover:border-[hsl(var(--gold))] pb-1">
                  9664349877
                </span>
              </a>
              <span className="hidden sm:block text-[hsl(var(--gold))]">✦</span>
              <a
                href="tel:9799571509"
                className="group font-display text-2xl md:text-3xl text-[hsl(var(--ink))] hover:text-[hsl(var(--gold))] transition-colors"
              >
                <span className="border-b border-[hsl(var(--rule))] group-hover:border-[hsl(var(--gold))] pb-1">
                  9799571509
                </span>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

/* — Chronicle Chapter Section — */
interface ChapterProps {
  number: string;
  title: string;
  titleHi?: string;
  children: React.ReactNode;
}

const Chapter = ({ number, title, titleHi, children }: ChapterProps) => (
  <section className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 animate-fade-up">
    {/* Section heading column */}
    <div className="md:col-span-4">
      <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1">
        <span className="font-display italic text-3xl text-[hsl(var(--gold))]">
          {number}.
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-[hsl(var(--ink))] leading-tight">
            {title}
          </h2>
          {titleHi && (
            <p className="font-hindi text-sm text-[hsl(var(--ink-muted))] mt-1">
              {titleHi}
            </p>
          )}
        </div>
      </div>
    </div>
    {/* Entries column */}
    <div className="md:col-span-8 divide-y divide-[hsl(var(--rule))] border-t border-[hsl(var(--rule))]">
      {children}
    </div>
  </section>
);

/* — Single labelled entry row — */
interface EntryProps {
  label: string;
  labelHi?: string;
  value: string;
  valueHi?: string;
}

const Entry = ({ label, labelHi, value, valueHi }: EntryProps) => (
  <div className="grid grid-cols-3 gap-4 py-4">
    <div className="col-span-1">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--ink-muted))] font-medium">
        {label}
      </p>
      {labelHi && (
        <p className="font-hindi text-xs text-[hsl(var(--ink-muted))]/80 mt-0.5">
          {labelHi}
        </p>
      )}
    </div>
    <div className="col-span-2">
      <p className="font-display text-base md:text-lg text-[hsl(var(--ink))] leading-snug">
        {value}
      </p>
      {valueHi && (
        <p className="font-hindi text-sm text-[hsl(var(--ink-soft))] mt-0.5">
          {valueHi}
        </p>
      )}
    </div>
  </div>
);

export default Index;
