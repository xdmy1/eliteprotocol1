export const translations = {
  ro: {
    nav: {
      home: 'ACASĂ',
      services: 'PROGRAME',
      investment: 'CURSURI',
      philosophy: 'DESPRE INSTITUT',
      contact: 'CONTACT',
    },
    hero: {
      tagline: 'Elite Protocol — Institutul de Etichetă, Imagine & Prezență',
      headingLine1: 'Transformăm Imaginea și Comportamentul',
      headingLine2: 'în Brand Personal',
      description:
        'Institut privat dedicat educației în etichetă, imagine și prezență, pentru persoane și organizații care își doresc excelență și autenticitate.',
      cta1: 'PROGRAMEAZĂ CONSULTAȚIE',
      cta2: 'VEZI PROGRAMELE',
    },
    services: {
      tag: 'Programele Noastre',
      heading: 'Programe de Excelență',
      description:
        'De la copii la executivi — programe structurate pe vârste și obiective, fiecare cu o programă detaliată și practică intensivă. Apasă „Află mai mult" pentru curriculumul complet.',
      cards: [
        {
          title: 'Little Ambassadors',
          audience: 'Copii · 8–12 ani · Nivel II',
          description:
            'Un program de descoperire — copilul explorează lumea eleganței prin jocuri, povești, punere în scenă și activități practice. Totul este conceput pentru a fi memorabil, nu moralizator: copilul pleacă acasă nu cu reguli, ci cu obiceiuri frumoase.',
          features: [
            '6 module · grupă de maximum 8–10 copii',
            'Învățare prin joc, povești și punere în scenă',
            'Sesiuni săptămânale de 90–120 minute',
            'Certificat Elithropical & sesiune pentru părinți',
          ],
          curriculum: [
            {
              label: 'Programa · 6 module',
              items: [
                { name: 'Magia primei impresii', detail: 'Cum se fac prezentările, saluturile corecte, privirea și zâmbetul — limbajul nonverbal al unui copil sigur.' },
                { name: 'Arta conversației', detail: 'Cum vorbim cu adulții și cu colegii. Regula „te rog" și „mulțumesc" — dincolo de cuvinte.' },
                { name: 'La masă cu eleganță', detail: 'Eticheta mesei: tacâmuri, șervețel, comportament la restaurant și acasă — teatru de masă distractiv.' },
                { name: 'Stilul meu personal', detail: 'Culorile care se potrivesc, ținuta pentru diferite ocazii, îngrijirea personală ca respect față de sine.' },
                { name: 'Prietenie și relații frumoase', detail: 'Empatie, respect, cum să fii un prieten de calitate, eticheta în social media pentru copii.' },
                { name: 'Micul lider', detail: 'Cum să conduci un proiect, să-ți exprimi opinia cu grație, să fii model pentru cei din jur.' },
              ],
            },
          ],
          outcomes: [
            'Se prezintă elegant în orice context',
            'Mănâncă formal la masă',
            'Comunică cu adulții cu naturalețe',
            'Alege ținuta potrivită pentru ocazie',
            'Construiește relații frumoase',
            'Demonstrează calități de lider mic',
          ],
          priceNote: 'Little Ambassadors 350 € · upgrade la Young Elites: 300 € în loc de 350 € pentru absolvenți',
        },
        {
          title: 'Young Elites',
          audience: 'Adolescenți · 13–17 ani · Nivel III',
          description:
            'Un program de formare a identității și prezenței, pentru adolescenții care vor să fie mai mult decât buni — vor să fie memorabili. Combină eticheta internațională, stilul personal, comunicarea de impact și leadershipul autentic într-un parcurs transformator.',
          features: [
            '8 module · Nivel III — Seniors',
            'Fine dining, public speaking & digital elegance',
            'Nivel avansat Pro disponibil (stil, machiaj, garderobă)',
            'Grupe mici · certificat Elithropical',
          ],
          curriculum: [
            {
              label: 'Young Elites · Nivel III',
              items: [
                { name: 'Identitate și imagine personală', detail: 'Cine ești dincolo de haine. Personal branding la vârsta ta, eleganța și rolul etichetei în viața modernă.' },
                { name: 'Protocol social internațional', detail: 'Prezentări formale, eticheta la eveniment, saluturi în diferite culturi, ordinea de precedență, comportament în public.' },
                { name: 'Fine Dining & eticheta mesei', detail: 'Cina formală cu mai multe servicii, conversația la masă, eticheta pentru restaurant de lux — 2 lecții practice.' },
                { name: 'Comunicare cu impact', detail: 'Public speaking pentru adolescenți, cum prezinți un proiect, limbajul corpului, vocea ca instrument de influență.' },
                { name: 'Digital Elegance', detail: 'Eticheta pe rețele sociale, LinkedIn junior, emailuri profesionale — o prezență digitală respectabilă.' },
                { name: 'Leadership cu caracter', detail: 'Tipuri de leadership, cum influențezi fără să manipulezi, inteligență emoțională, rezolvarea conflictelor cu eleganță.' },
                { name: 'Prezența ca putere', detail: 'Cum intri într-o cameră, cum conduci o conversație, cum formezi încredere prin stil și imagine.' },
              ],
            },
            {
              label: 'Young Elites Pro · module suplimentare (750 €)',
              items: [
                { name: 'Eleganța — un stil de viață', detail: 'Obiceiurile, hobby-urile și mentalitatea unei fete elegante. Eleganța nu este o ținută, este o alegere zilnică.' },
                { name: 'Construirea imaginii de succes', detail: 'Pilonii imaginii de succes, construiți pas cu pas. Bonus: lecție practică de mers elegant.' },
                { name: 'Îngrijire personală — practică', detail: 'Automachiaj zilnic și de ocazie, manichiură impecabilă, coafură — 2 lecții complet practice.' },
                { name: 'Stilul personal ca limbaj', detail: 'Tipuri de stiluri, coloristică, tipul de corp, dress codes de la Smart Casual la Black Tie — 4 lecții.' },
                { name: 'Garderoba capsulă', detail: 'Crearea garderobei capsulă personale: piese esențiale, lookuri complete, cumpărături inteligente.' },
              ],
            },
          ],
          outcomes: [
            'Se prezintă cu autoritate și grație',
            'Navighează orice cină formală',
            'Vorbește în public cu naturalețe',
            'Comunică elegant — digital și fizic',
            'Conduce cu caracter și inteligență',
            'Lasă o impresie memorabilă oriunde',
          ],
          priceNote: 'Young Elites 350 € · Young Elites Pro 750 € · pachet complet 1.000 € în loc de 1.100 €',
        },
        {
          title: 'The Executive Edge™',
          audience: 'Adulți & Corporate · 3 zile',
          description:
            'Programul complet de etichetă profesională, protocol de afaceri, imagine și leadership — structurat pe 3 zile pentru o absorbție reală și o transformare durabilă. 11 module, grupe de maximum 12 participanți, instrumente pentru 15+ culturi de afaceri.',
          features: [
            '11 module · 3 zile · max. 12 participanți',
            'Practică intensivă: role-play, video feedback, business lunch',
            'Inteligență culturală — 15+ culturi de negociere',
            'Certificat Elite Protocol™ & follow-up online la 30 zile',
          ],
          curriculum: [
            {
              label: 'Ziua I — Imagine · Comunicare · Instrumente',
              items: [
                { name: 'Eticheta în spațiul de afaceri & colectivul de muncă', detail: 'Reguli ale spațiului comun, ospitalitate la birou, organizarea negocierilor, eticheta ședinței și ierarhia nescrisă.' },
                { name: 'Autoprezentarea & instrumentele de comunicare', detail: 'Elevator pitch, cărți de vizită, corespondență oficială, eticheta apelurilor — cu simulare și feedback video.' },
                { name: 'Comunicarea în afaceri & eticheta verbală', detail: 'Verbal, paraverbal, nonverbal; formule de adresare, small talk, comportament la evenimente corporative.' },
                { name: 'Imaginea profesională & codurile vestimentare', detail: 'Business Formal → Casual, codul culorilor, accesorii și un audit individual de imagine.' },
              ],
            },
            {
              label: 'Ziua II — Protocol · Leadership · Negociere',
              items: [
                { name: 'Eticheta liderului & comportamentul de statut', detail: 'Protocol cu conducerea, executive presence, ordinea de precedență, relația șef–subordonat.' },
                { name: 'Desfășurarea negocierilor & bazele conflictologiei', detail: 'Pregătire și BATNA, fazele negocierii, dezamorsarea conflictelor, refuzul elegant — cu simulare în perechi.' },
                { name: 'Prânzul de afaceri — protocol complet', detail: 'Structura mesei formale, comportament și conversație la masă, cine plătește și cum se încheie elegant — exercițiu la masă.' },
                { name: 'Cultura corporativă, recepții & cadouri de afaceri', detail: 'Etică și cultură corporativă, comportament la recepții, cadouri potrivite, managementul impresiei și comunicarea nonverbală.' },
              ],
            },
            {
              label: 'Ziua III — Culturi · Digital · Brand Personal',
              items: [
                { name: 'Diferențe culturale & stiluri naționale de negociere', detail: 'Europa de Vest, SUA, Orientul Mijlociu, Asia — ierarhie, relație și timp, cu studii de caz reale.' },
                { name: 'Corespondența electronică & reputația digitală', detail: 'E-mail de business, mesagerie, LinkedIn cu audit live, videoconferință și ce nu postezi niciodată.' },
                { name: 'Brandul personal & sesiunea finală de integrare', detail: 'Coerența imaginii online–offline, mesajul de brand în 3 adjective, prezentare finală și plan personal de acțiune.' },
              ],
            },
          ],
          outcomes: [
            'Autoritate vizuală în orice context',
            'Prima impresie controlată',
            'Negocieri mai eficiente în 15+ culturi',
            'Zero stres la masa de afaceri',
            'Comunicare verbală și nonverbală cu impact',
            'Brand personal clar și memorabil',
          ],
          priceNote: 'Individual 690 € (≈ 13.800 MDL) · Corporate (până la 10 pers.) 4.200 € · VIP Executive 1:1 1.100 €',
        },
      ],
      learnMore: 'AFLĂ MAI MULT',
      bottomCtaText: 'Nu ești sigur(ă) care program ți se potrivește?',
      bottomCtaButton: 'PROGRAMEAZĂ UN APEL DE DESCOPERIRE',
    },
    serviceModal: {
      price: 'Preț personalizat',
      curriculumLabel: 'Programa detaliată',
      outcomesLabel: 'Ce vei stăpâni la final',
      cta: 'SOLICITĂ OFERTĂ',
      nameLabel: 'Nume complet *',
      namePlaceholder: 'Ion Popescu',
      emailLabel: 'Email *',
      emailPlaceholder: 'ion@exemplu.com',
      submit: 'TRIMITE SOLICITAREA',
      successHeading: 'Mulțumim!',
      successMessage: 'Solicitarea ta a fost trimisă. Te vom contacta în cel mai scurt timp.',
    },
    pricing: {
      tag: 'Cursuri',
      heading: 'Alege-ți Programul',
      description: 'Programe pentru fiecare vârstă și obiectiv — de la copii la executivi.',
      recommended: 'RECOMANDAT',
      customPrice: 'Personalizat',
      ctaGetStarted: 'ÎNCEPE ACUM',
      ctaContactUs: 'CONTACTEAZĂ-NE',
      plans: [
        {
          name: 'Little Ambassadors',
          tagline: 'Copii · 8–12 ani',
          priceSub: 'Nivel II — Juniors',
          period: '6 module · grupă mică',
          description:
            'Descoperirea eleganței prin joc, povești și activități practice — obiceiuri frumoase, nu reguli.',
          features: [
            '6 module de etichetă, stil și comunicare',
            'Grupă de maximum 8–10 copii',
            'Sesiuni săptămânale de 90–120 minute',
            'Sesiune de feedback pentru părinți',
            'Certificat Elithropical de absolvire',
            'Upgrade la Young Elites: 300 € (în loc de 350 €)',
          ],
        },
        {
          name: 'Young Elites',
          tagline: 'Adolescenți · 13–17 ani',
          priceSub: 'Nivel III — Seniors',
          period: '8 module · Pro disponibil (750 €)',
          description:
            'Formarea identității și prezenței: etichetă internațională, stil personal, comunicare de impact și leadership autentic.',
          features: [
            'Identitate, imagine și protocol internațional',
            'Fine dining, public speaking & digital elegance',
            'Leadership cu caracter și executive presence',
            'Nivel Pro: stil, coloristică, machiaj, garderobă capsulă',
            'Pachet complet Young Elites + Pro: 1.000 € (în loc de 1.100 €)',
            'Certificat Elithropical de absolvire',
          ],
        },
        {
          name: 'The Executive Edge™',
          tagline: 'Adulți & Corporate · 3 zile',
          priceSub: '≈ 13.800 MDL · max. 12 participanți',
          period: '11 module · 3 zile intensive',
          description:
            'Etichetă profesională, protocol de afaceri, imagine și leadership — 3 zile, 11 module, instrumente pentru 15+ culturi.',
          features: [
            '11 module pe 3 zile, practică intensivă',
            'Role-play, video feedback și business lunch inclus',
            'Inteligență culturală — 15+ culturi de negociere',
            'Manual Elite Protocol™ & audit individual de imagine',
            'Corporate (până la 10 pers.) 4.200 € · VIP 1:1 1.100 €',
            'Certificat Elite Protocol™ & follow-up la 30 zile',
          ],
        },
      ],
      paymentInfo:
        'Early bird: înscriere cu 3 săptămâni înainte — reducere 10%  \u2022  3+ persoane din aceeași companie — reducere 15%  \u2022  Facturare disponibilă pentru persoane juridice',
      testimonialQuote: '\u201ERafinamentul nu este un lux, ci o cultură a comportamentului\u201D',
      testimonialAuthor: 'NATALIA CROITOR',
      testimonialRole: 'Fondatoare, Elite Protocol',
    },
    reviews: {
      tag: 'Testimoniale',
      heading: 'Ce Spun Clienții Noștri',
      description:
        'Experiențele celor care au ales să investească în propria imagine și prezență.',
      items: [
        {
          quote:
            'Programul Elite a fost o revelație. Am descoperit cum să mă prezint cu eleganță și încredere în orice context profesional. Transformarea a depășit toate așteptările mele.',
          name: 'Alexandra Ionescu',
          role: 'Director Executiv, Sector Financiar',
        },
        {
          quote:
            'Natalia are un talent deosebit de a scoate la lumină ce e mai bun din fiecare persoană. Datorită cursului de etichetă și imagine, am câștigat o siguranță de sine pe care nu o credeam posibilă.',
          name: 'Mihai Dumitrescu',
          role: 'Antreprenor & Consultant de Afaceri',
        },
        {
          quote:
            'Am apelat la Elite Protocol pentru echipa noastră de management și rezultatele au fost remarcabile. Profesionalismul și atenția la detalii sunt excepționale.',
          name: 'Elena Marinescu',
          role: 'VP Resurse Umane, Companie Multinațională',
        },
      ],
    },
    about: {
      tag: 'Despre Institut',
      headingLine1: 'Cine Suntem',
      headingLine2: '',
      story: [
        'Elite Protocol – Institute of Etiquette, Image & Presence este un institut privat dedicat educației în domeniul etichetei, imaginii personale și dezvoltării prezenței sociale și profesionale.',
        'Institutul nostru promovează cultura bunelor maniere, eleganța comportamentală și crearea unei imagini autentice și coerente, capabile să reflecte valorile și identitatea fiecărei persoane.',
        'Prin programele noastre de formare, participanții învață nu doar regulile etichetei moderne, ci și arta de a-și construi o prezență distinctă și un brand personal autentic, bazat pe eleganță, credibilitate și impact.',
        'Programele sunt adresate copiilor, adolescenților, adulților și organizațiilor care își doresc să dezvolte imagine, comportament și prezență la standarde înalte.',
      ],
      missionLabel: 'MISIUNEA NOASTRĂ',
      mission:
        'Misiunea Elite Protocol – Institute of Etiquette, Image & Presence este de a promova cultura etichetei, eleganța comportamentală și dezvoltarea unei imagini personale autentice, contribuind la formarea unor oameni capabili să se reprezinte cu rafinament și credibilitate în societate și în mediul profesional.',
      visionLabel: 'VIZIUNEA NOASTRĂ',
      vision:
        'Ne propunem să devenim un reper regional în educația etichetei, imaginii și reprezentării profesionale, contribuind la formarea unei noi generații de oameni care îmbină eleganța, cultura comportamentală și autenticitatea personală.',
      cta: 'ÎNCEPE-ȚI CĂLĂTORIA',
      stats: [
        { label: 'Ani de Excelență' },
        { label: 'Clienți Transformați' },
        { label: 'Rată de Satisfacție' },
        { label: 'Parteneri Corporativi' },
      ],
      principlesHeading: 'Valorile Noastre',
      principlesDescription:
        'Cinci valori fundamentale ghidează fiecare program, interacțiune și transformare pe care o facilităm.',
      principles: [
        {
          title: 'Eleganța',
          desc: 'Exprimată prin comportament, stil și atitudine. Eleganța este fundația unei prezențe memorabile și a unui brand personal autentic.',
        },
        {
          title: 'Respectul',
          desc: 'Baza relațiilor sociale și profesionale. Respectul ghidează fiecare interacțiune și stă la baza etichetei moderne.',
        },
        {
          title: 'Autenticitatea',
          desc: 'Dezvoltarea unei identități personale coerente. Credem în construirea unui brand personal care reflectă cu adevărat valorile și personalitatea fiecăruia.',
        },
        {
          title: 'Rafinamentul',
          desc: 'Atenția la detalii și calitatea reprezentării. Rafinamentul transformă fiecare gest și fiecare cuvânt într-o expresie a excelenței.',
        },
        {
          title: 'Profesionalismul',
          desc: 'Standarde înalte în educație și formare. Ne angajăm să oferim programe de cea mai înaltă calitate, cu rezultate măsurabile.',
        },
      ],
      founderLabel: 'FONDATOARE',
      founderName: 'Natalia Croitor',
      founderBio: [
        'Natalia Croitor este fondatoarea Elite Protocol – Institute of Etiquette, Image & Presence și expertă în etichetă, imagine personală și dezvoltare a brandului personal.',
        'Discipolă a Swiss Academy of Education și cu formare profesională în domeniul etichetei și imaginii personale în Rusia și Europa, Natalia are peste 5 ani de experiență în formarea și consilierea persoanelor, oferind și consultanță punctuală organizațiilor interesate de dezvoltarea imaginii și a prezenței profesionale.',
        'A creat un program complet care combină eticheta socială și de business, imaginea autentică și prezența memorabilă, oferind participanților instrumentele necesare pentru a se reprezenta cu rafinament și credibilitate.',
        'Prin activitatea sa, Natalia și-a propus să transforme comportamentul, stilul și imaginea în brand personal unic, pentru femei și bărbați, precum și pentru organizații interesate să-și dezvolte imaginea și prezența profesională.',
      ],
      certificationsHeading: 'ACREDITAT DE INSTITUȚII DE PRESTIGIU',
      certifications: [
        'International Association of Professions Career College',
        'British School of Excellence',
        'Global Protocol Academy',
        'Association of Image Consultants International',
      ],
    },
    contact: {
      tag: 'Contactează-ne',
      heading: 'Începe-ți Transformarea',
      description: 'Programează o consultație confidențială pentru a discuta obiectivele tale.',
      emailLabel: 'EMAIL',
      phoneLabel: 'TELEFON',
      officeLabel: 'BIROU',
      businessHoursLabel: 'PROGRAM DE LUCRU',
      phoneNote: 'Luni \u2013 Vineri, 9:00 \u2013 18:00 EET',
      appointmentOnly: 'Doar cu programare',
      hours: {
        monFri: 'Luni \u2013 Vineri',
        monFriTime: '9:00 \u2013 18:00',
        sat: 'Sâmbătă',
        satTime: '10:00 \u2013 16:00',
        sun: 'Duminică',
        closed: 'Închis',
      },
      form: {
        nameLabel: 'Nume Complet *',
        namePlaceholder: 'Ion Popescu',
        emailLabel: 'Adresă Email *',
        emailPlaceholder: 'ion@exemplu.com',
        phoneLabel: 'Număr de Telefon',
        phonePlaceholder: '+40 712 345 678',
        serviceLabel: 'Serviciu de Interes *',
        servicePlaceholder: 'Selectează un serviciu',
        serviceOptions: [
          { value: 'little-ambassadors', label: 'Little Ambassadors · Copii 8–12' },
          { value: 'young-elites', label: 'Young Elites · Adolescenți 13–17' },
          { value: 'executive-edge', label: 'The Executive Edge™ · Adulți & Corporate' },
        ],
        messageLabel: 'Mesajul Tău *',
        messagePlaceholder:
          'Te rugăm să ne împărtășești obiectivele tale și orice domenii specifice pe care ai dori să le abordezi...',
        privacyConsent:
          'Sunt de acord ca Elite Protocol să mă contacteze cu privire la solicitarea mea. Toate consultațiile se desfășoară cu confidențialitate și discreție totală.',
        submit: 'TRIMITE SOLICITAREA',
      },
      successHeading: 'Mulțumim',
      successMessage:
        'Solicitarea ta a fost primită. Un membru al echipei noastre te va contacta în 24 de ore pentru a-ți programa consultația.',
      confidentiality: 'Confidențialitate Completă',
      confidentialityNote: 'Toate solicitările sunt gestionate cu cea mai mare discreție',
    },
    footer: {
      tagline: 'Institutul de Etichetă, Imagine & Prezență',
      description:
        'Promovăm cultura etichetei, eleganța comportamentală și dezvoltarea unei imagini personale autentice.',
      navigate: 'NAVIGARE',
      navAbout: 'Despre Institut',
      navServices: 'Programe',
      navInvestment: 'Cursuri',
      navContact: 'Contact',
      connect: 'CONECTARE',
      copyright: '\u00A9 2026 Elite Protocol. Toate drepturile rezervate.',
      privacy: 'Confidențialitate',
      terms: 'Termeni',
      mobileMenuLabel: 'ELITE PROTOCOL',
    },
  },

  en: {
    nav: {
      home: 'HOME',
      services: 'PROGRAMS',
      investment: 'COURSES',
      philosophy: 'ABOUT',
      contact: 'CONTACT',
    },
    hero: {
      tagline: 'Elite Protocol \u2014 Institute of Etiquette, Image & Presence',
      headingLine1: 'Transforming Image and Behavior',
      headingLine2: 'into Personal Brand',
      description:
        'A private institute dedicated to education in etiquette, image, and presence, for individuals and organizations seeking excellence and authenticity.',
      cta1: 'SCHEDULE CONSULTATION',
      cta2: 'VIEW PROGRAMS',
    },
    services: {
      tag: 'Our Programs',
      heading: 'Programs of Excellence',
      description:
        'From children to executives — programs structured by age and goals, each with a detailed curriculum and intensive practice. Tap "Learn more" for the full curriculum.',
      cards: [
        {
          title: 'Little Ambassadors',
          audience: 'Children · ages 8–12 · Level II',
          description:
            'A program of discovery — the child explores the world of elegance through games, stories, role-play, and hands-on activities. Everything is designed to be memorable, not preachy: the child goes home not with rules, but with beautiful habits.',
          features: [
            '6 modules · group of max. 8–10 children',
            'Learning through play, stories, and role-play',
            'Weekly sessions of 90–120 minutes',
            'Elithropical certificate & parent feedback session',
          ],
          curriculum: [
            {
              label: 'Curriculum · 6 modules',
              items: [
                { name: 'The magic of first impressions', detail: 'How introductions are made, correct greetings, eye contact and the smile — the nonverbal language of a confident child.' },
                { name: 'The art of conversation', detail: 'How we talk with adults and peers. The "please" and "thank you" rule — beyond the words.' },
                { name: 'At the table with elegance', detail: 'Table etiquette: cutlery, napkin, behavior at the restaurant and at home — fun table theatre.' },
                { name: 'My personal style', detail: 'Colors that suit you, the right outfit for each occasion, personal grooming as self-respect.' },
                { name: 'Friendship and beautiful relationships', detail: 'Empathy, respect, how to be a quality friend, social media etiquette for children.' },
                { name: 'The little leader', detail: 'How to lead a project, express your opinion gracefully, and be a role model for others.' },
              ],
            },
          ],
          outcomes: [
            'Introduce themselves elegantly in any context',
            'Dine formally at the table',
            'Communicate naturally with adults',
            'Choose the right outfit for the occasion',
            'Build beautiful relationships',
            'Show the qualities of a young leader',
          ],
          priceNote: 'Little Ambassadors €350 · upgrade to Young Elites: €300 instead of €350 for graduates',
        },
        {
          title: 'Young Elites',
          audience: 'Teens · ages 13–17 · Level III',
          description:
            'A program for shaping identity and presence, for teenagers who want to be more than good — they want to be memorable. It combines international etiquette, personal style, impactful communication, and authentic leadership into a transformative journey.',
          features: [
            '8 modules · Level III — Seniors',
            'Fine dining, public speaking & digital elegance',
            'Advanced Pro level available (style, makeup, wardrobe)',
            'Small groups · Elithropical certificate',
          ],
          curriculum: [
            {
              label: 'Young Elites · Level III',
              items: [
                { name: 'Identity and personal image', detail: 'Who you are beyond clothes. Personal branding at your age, elegance, and the role of etiquette in modern life.' },
                { name: 'International social protocol', detail: 'Formal introductions, event etiquette, greetings across cultures, order of precedence, behavior in public.' },
                { name: 'Fine dining & table etiquette', detail: 'The multi-course formal dinner, table conversation, etiquette for fine restaurants — 2 practical lessons.' },
                { name: 'Communication with impact', detail: 'Public speaking for teens, how to present a project, body language, the voice as an instrument of influence.' },
                { name: 'Digital Elegance', detail: 'Etiquette on social media, junior LinkedIn, professional emails — a respectable digital presence.' },
                { name: 'Leadership with character', detail: 'Types of leadership, how to influence without manipulating, emotional intelligence, resolving conflict with elegance.' },
                { name: 'Presence as power', detail: 'How to enter a room, how to lead a conversation, how to build trust through style and image.' },
              ],
            },
            {
              label: 'Young Elites Pro · additional modules (€750)',
              items: [
                { name: 'Elegance — a way of life', detail: 'The habits, hobbies, and mindset of an elegant young woman. Elegance is not an outfit, it is a daily choice.' },
                { name: 'Building a successful image', detail: 'The pillars of a successful image, built step by step. Bonus: a practical lesson in elegant walking.' },
                { name: 'Personal grooming — hands-on', detail: 'Everyday and occasion makeup, impeccable manicure, hairstyling — 2 fully practical lessons.' },
                { name: 'Personal style as a language', detail: 'Style types, color analysis, body type, dress codes from Smart Casual to Black Tie — 4 lessons.' },
                { name: 'The capsule wardrobe', detail: 'Building a personal capsule wardrobe: essential pieces, complete looks, smart shopping.' },
              ],
            },
          ],
          outcomes: [
            'Introduce themselves with authority and grace',
            'Navigate any formal dinner',
            'Speak in public with ease',
            'Communicate elegantly — digital and physical',
            'Lead with character and intelligence',
            'Leave a memorable impression anywhere',
          ],
          priceNote: 'Young Elites €350 · Young Elites Pro €750 · complete package €1,000 instead of €1,100',
        },
        {
          title: 'The Executive Edge™',
          audience: 'Adults & Corporate · 3 days',
          description:
            'The complete program in professional etiquette, business protocol, image, and leadership — structured over 3 days for real absorption and lasting transformation. 11 modules, groups of max. 12 participants, tools for 15+ business cultures.',
          features: [
            '11 modules · 3 days · max. 12 participants',
            'Intensive practice: role-play, video feedback, business lunch',
            'Cultural intelligence — 15+ negotiation cultures',
            'Elite Protocol™ certificate & online follow-up at 30 days',
          ],
          curriculum: [
            {
              label: 'Day I — Image · Communication · Tools',
              items: [
                { name: 'Etiquette in the workplace & the team', detail: 'Rules of the shared space, office hospitality, organizing negotiations, meeting etiquette, and the unwritten hierarchy.' },
                { name: 'Self-presentation & communication tools', detail: 'Elevator pitch, business cards, official correspondence, call etiquette — with simulation and video feedback.' },
                { name: 'Business communication & verbal etiquette', detail: 'Verbal, paraverbal, nonverbal; forms of address, small talk, behavior at corporate events.' },
                { name: 'Professional image & dress codes', detail: 'Business Formal → Casual, the code of colors, accessories, and an individual image audit.' },
              ],
            },
            {
              label: 'Day II — Protocol · Leadership · Negotiation',
              items: [
                { name: 'Leader etiquette & status behavior', detail: 'Protocol with leadership, executive presence, order of precedence, the boss–subordinate relationship.' },
                { name: 'Conducting negotiations & conflict basics', detail: 'Preparation and BATNA, negotiation phases, defusing conflict, the elegant refusal — with paired simulation.' },
                { name: 'The business lunch — full protocol', detail: 'Structure of the formal table, behavior and conversation at the table, who pays and how to close elegantly — table exercise.' },
                { name: 'Corporate culture, receptions & business gifts', detail: 'Business ethics and corporate culture, behavior at receptions, appropriate gifts, impression management, and nonverbal communication.' },
              ],
            },
            {
              label: 'Day III — Cultures · Digital · Personal Brand',
              items: [
                { name: 'Cultural differences & national negotiation styles', detail: 'Western Europe, the US, the Middle East, Asia — hierarchy, relationship, and time, with real case studies.' },
                { name: 'Electronic correspondence & digital reputation', detail: 'Business email, messaging, LinkedIn with a live audit, video conferencing, and what you never post.' },
                { name: 'Personal brand & final integration session', detail: 'Online–offline image coherence, your brand message in 3 adjectives, final presentation, and a personal action plan.' },
              ],
            },
          ],
          outcomes: [
            'Visual authority in any context',
            'A controlled first impression',
            'More effective negotiations across 15+ cultures',
            'Zero stress at the business table',
            'Verbal and nonverbal communication with impact',
            'A clear and memorable personal brand',
          ],
          priceNote: 'Individual €690 (≈ 13,800 MDL) · Corporate (up to 10 people) €4,200 · VIP Executive 1:1 €1,100',
        },
      ],
      learnMore: 'LEARN MORE',
      bottomCtaText: 'Not sure which program suits you best?',
      bottomCtaButton: 'SCHEDULE A DISCOVERY CALL',
    },
    serviceModal: {
      price: 'Personalized pricing',
      curriculumLabel: 'Detailed curriculum',
      outcomesLabel: 'What you will master',
      cta: 'REQUEST OFFER',
      nameLabel: 'Full name *',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email *',
      emailPlaceholder: 'john@example.com',
      submit: 'SUBMIT REQUEST',
      successHeading: 'Thank You!',
      successMessage: 'Your request has been sent. We will contact you shortly.',
    },
    pricing: {
      tag: 'Courses',
      heading: 'Select Your Program',
      description: 'Programs for every age and goal — from children to executives.',
      recommended: 'RECOMMENDED',
      customPrice: 'Custom',
      ctaGetStarted: 'GET STARTED',
      ctaContactUs: 'CONTACT US',
      plans: [
        {
          name: 'Little Ambassadors',
          tagline: 'Children · ages 8–12',
          priceSub: 'Level II — Juniors',
          period: '6 modules · small group',
          description:
            'Discovering elegance through play, stories, and hands-on activities — beautiful habits, not rules.',
          features: [
            '6 modules of etiquette, style, and communication',
            'Group of max. 8–10 children',
            'Weekly sessions of 90–120 minutes',
            'Parent feedback session',
            'Elithropical completion certificate',
            'Upgrade to Young Elites: €300 (instead of €350)',
          ],
        },
        {
          name: 'Young Elites',
          tagline: 'Teens · ages 13–17',
          priceSub: 'Level III — Seniors',
          period: '8 modules · Pro available (€750)',
          description:
            'Shaping identity and presence: international etiquette, personal style, impactful communication, and authentic leadership.',
          features: [
            'Identity, image, and international protocol',
            'Fine dining, public speaking & digital elegance',
            'Leadership with character and executive presence',
            'Pro level: style, color analysis, makeup, capsule wardrobe',
            'Complete Young Elites + Pro package: €1,000 (instead of €1,100)',
            'Elithropical completion certificate',
          ],
        },
        {
          name: 'The Executive Edge™',
          tagline: 'Adults & Corporate · 3 days',
          priceSub: '≈ 13,800 MDL · max. 12 participants',
          period: '11 modules · 3 intensive days',
          description:
            'Professional etiquette, business protocol, image, and leadership — 3 days, 11 modules, tools for 15+ cultures.',
          features: [
            '11 modules over 3 days, intensive practice',
            'Role-play, video feedback, and business lunch included',
            'Cultural intelligence — 15+ negotiation cultures',
            'Elite Protocol™ manual & individual image audit',
            'Corporate (up to 10 people) €4,200 · VIP 1:1 €1,100',
            'Elite Protocol™ certificate & follow-up at 30 days',
          ],
        },
      ],
      paymentInfo:
        'Early bird: register 3 weeks in advance — 10% off  \u2022  3+ people from the same company — 15% off  \u2022  Invoicing available for legal entities',
      testimonialQuote:
        '\u201CRefinement is not a luxury, but a culture of behavior\u201D',
      testimonialAuthor: 'NATALIA CROITOR',
      testimonialRole: 'Founder, Elite Protocol',
    },
    reviews: {
      tag: 'Testimonials',
      heading: 'What Our Clients Say',
      description:
        'The experiences of those who chose to invest in their image and presence.',
      items: [
        {
          quote:
            'The Elite program was a revelation. I discovered how to present myself with elegance and confidence in any professional context. The transformation exceeded all my expectations.',
          name: 'Alexandra Ionescu',
          role: 'Executive Director, Financial Sector',
        },
        {
          quote:
            'Natalia has a remarkable talent for bringing out the best in every person. Thanks to the etiquette and image course, I gained a self-assurance I never thought possible.',
          name: 'Mihai Dumitrescu',
          role: 'Entrepreneur & Business Consultant',
        },
        {
          quote:
            'We turned to Elite Protocol for our management team and the results were remarkable. The professionalism and attention to detail are exceptional.',
          name: 'Elena Marinescu',
          role: 'VP Human Resources, Multinational Company',
        },
      ],
    },
    about: {
      tag: 'About the Institute',
      headingLine1: 'Who We Are',
      headingLine2: '',
      story: [
        'Elite Protocol \u2013 Institute of Etiquette, Image & Presence is a private institute dedicated to education in the field of etiquette, personal image, and the development of social and professional presence.',
        'Our institute promotes the culture of good manners, behavioral elegance, and the creation of an authentic and coherent image, capable of reflecting the values and identity of each person.',
        'Through our training programs, participants learn not only the rules of modern etiquette, but also the art of building a distinct presence and an authentic personal brand, based on elegance, credibility, and impact.',
        'Our programs are designed for children, teenagers, adults, and organizations that wish to develop image, behavior, and presence to the highest standards.',
      ],
      missionLabel: 'OUR MISSION',
      mission:
        'The mission of Elite Protocol \u2013 Institute of Etiquette, Image & Presence is to promote the culture of etiquette, behavioral elegance, and the development of an authentic personal image, contributing to the formation of people capable of representing themselves with refinement and credibility in society and the professional environment.',
      visionLabel: 'OUR VISION',
      vision:
        'We aim to become a regional benchmark in etiquette education, image, and professional representation, contributing to the formation of a new generation of people who combine elegance, behavioral culture, and personal authenticity.',
      cta: 'BEGIN YOUR JOURNEY',
      stats: [
        { label: 'Years of Excellence' },
        { label: 'Clients Transformed' },
        { label: 'Satisfaction Rate' },
        { label: 'Corporate Partners' },
      ],
      principlesHeading: 'Our Values',
      principlesDescription:
        'Five core values guide every program, interaction, and transformation we facilitate.',
      principles: [
        {
          title: 'Elegance',
          desc: 'Expressed through behavior, style, and attitude. Elegance is the foundation of a memorable presence and an authentic personal brand.',
        },
        {
          title: 'Respect',
          desc: 'The foundation of social and professional relationships. Respect guides every interaction and is at the core of modern etiquette.',
        },
        {
          title: 'Authenticity',
          desc: 'The development of a coherent personal identity. We believe in building a personal brand that truly reflects the values and personality of each individual.',
        },
        {
          title: 'Refinement',
          desc: 'Attention to detail and the quality of representation. Refinement transforms every gesture and every word into an expression of excellence.',
        },
        {
          title: 'Professionalism',
          desc: 'High standards in education and training. We are committed to delivering programs of the highest quality, with measurable results.',
        },
      ],
      founderLabel: 'FOUNDER',
      founderName: 'Natalia Croitor',
      founderBio: [
        'Natalia Croitor is the founder of Elite Protocol \u2013 Institute of Etiquette, Image & Presence and an expert in etiquette, personal image, and personal brand development.',
        'A disciple of the Swiss Academy of Education with professional training in etiquette and personal image in Russia and Europe, Natalia has over 5 years of experience in training and counseling individuals, also providing targeted consulting to organizations interested in developing their image and professional presence.',
        'She created a comprehensive program that combines social and business etiquette, authentic image, and memorable presence, providing participants with the tools needed to represent themselves with refinement and credibility.',
        'Through her work, Natalia has set out to transform behavior, style, and image into a unique personal brand, for both women and men, as well as for organizations interested in developing their image and professional presence.',
      ],
      certificationsHeading: 'ACCREDITED BY LEADING INSTITUTIONS',
      certifications: [
        'International Association of Professions Career College',
        'British School of Excellence',
        'Global Protocol Academy',
        'Association of Image Consultants International',
      ],
    },
    contact: {
      tag: 'Get in Touch',
      heading: 'Begin Your Transformation',
      description: 'Schedule a confidential consultation to discuss your goals.',
      emailLabel: 'EMAIL',
      phoneLabel: 'PHONE',
      officeLabel: 'OFFICE',
      businessHoursLabel: 'BUSINESS HOURS',
      phoneNote: 'Monday \u2013 Friday, 9:00 AM \u2013 6:00 PM EST',
      appointmentOnly: 'By appointment only',
      hours: {
        monFri: 'Monday \u2013 Friday',
        monFriTime: '9:00 AM \u2013 6:00 PM',
        sat: 'Saturday',
        satTime: '10:00 AM \u2013 4:00 PM',
        sun: 'Sunday',
        closed: 'Closed',
      },
      form: {
        nameLabel: 'Full Name *',
        namePlaceholder: 'John Doe',
        emailLabel: 'Email Address *',
        emailPlaceholder: 'john@example.com',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+1 (555) 123-4567',
        serviceLabel: 'Service Interest *',
        servicePlaceholder: 'Select a service',
        serviceOptions: [
          { value: 'little-ambassadors', label: 'Little Ambassadors · Children 8–12' },
          { value: 'young-elites', label: 'Young Elites · Teens 13–17' },
          { value: 'executive-edge', label: 'The Executive Edge™ · Adults & Corporate' },
        ],
        messageLabel: 'Your Message *',
        messagePlaceholder:
          "Please share your goals and any specific areas you'd like to address...",
        privacyConsent:
          'I consent to Elite Protocol contacting me regarding my inquiry. All consultations are conducted with complete confidentiality and discretion.',
        submit: 'SUBMIT INQUIRY',
      },
      successHeading: 'Thank You',
      successMessage:
        'Your inquiry has been received. A member of our team will contact you within 24 hours to schedule your consultation.',
      confidentiality: 'Complete Confidentiality',
      confidentialityNote:
        'All inquiries are handled with the utmost discretion',
    },
    footer: {
      tagline: 'Institute of Etiquette, Image & Presence',
      description:
        'Promoting the culture of etiquette, behavioral elegance, and the development of an authentic personal image.',
      navigate: 'NAVIGATE',
      navAbout: 'About',
      navServices: 'Programs',
      navInvestment: 'Courses',
      navContact: 'Contact',
      connect: 'CONNECT',
      copyright: '\u00A9 2026 Elite Protocol. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      mobileMenuLabel: 'ELITE PROTOCOL',
    },
  },

  ru: {
    nav: {
      home: 'ГЛАВНАЯ',
      services: 'ПРОГРАММЫ',
      investment: 'КУРСЫ',
      philosophy: 'ОБ ИНСТИТУТЕ',
      contact: 'КОНТАКТ',
    },
    hero: {
      tagline: 'Elite Protocol \u2014 Институт Этикета, Имиджа и Присутствия',
      headingLine1: 'Превращаем Имидж и Поведение',
      headingLine2: 'в Персональный Бренд',
      description:
        'Частный институт, посвящённый образованию в области этикета, имиджа и присутствия, для людей и организаций, стремящихся к совершенству и подлинности.',
      cta1: 'ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ',
      cta2: 'СМОТРЕТЬ ПРОГРАММЫ',
    },
    services: {
      tag: 'Наши Программы',
      heading: 'Программы Совершенства',
      description:
        'От детей до руководителей — программы, структурированные по возрасту и целям, каждая с подробной программой и интенсивной практикой. Нажмите «Подробнее» для полной программы.',
      cards: [
        {
          title: 'Little Ambassadors',
          audience: 'Дети · 8–12 лет · Уровень II',
          description:
            'Программа открытия — ребёнок исследует мир элегантности через игры, истории, ролевые сценки и практические занятия. Всё построено так, чтобы быть запоминающимся, а не назидательным: ребёнок уходит домой не с правилами, а с красивыми привычками.',
          features: [
            '6 модулей · группа максимум 8–10 детей',
            'Обучение через игру, истории и ролевые сценки',
            'Еженедельные занятия по 90–120 минут',
            'Сертификат Elithropical и сессия обратной связи для родителей',
          ],
          curriculum: [
            {
              label: 'Программа · 6 модулей',
              items: [
                { name: 'Магия первого впечатления', detail: 'Как делать представления, правильные приветствия, взгляд и улыбка — невербальный язык уверенного ребёнка.' },
                { name: 'Искусство беседы', detail: 'Как разговаривать со взрослыми и сверстниками. Правило «пожалуйста» и «спасибо» — за пределами слов.' },
                { name: 'За столом с элегантностью', detail: 'Столовый этикет: приборы, салфетка, поведение в ресторане и дома — весёлый застольный театр.' },
                { name: 'Мой личный стиль', detail: 'Подходящие цвета, наряд для разных случаев, уход за собой как уважение к себе.' },
                { name: 'Дружба и красивые отношения', detail: 'Эмпатия, уважение, как быть хорошим другом, этикет в социальных сетях для детей.' },
                { name: 'Маленький лидер', detail: 'Как вести проект, изящно выражать своё мнение и быть примером для других.' },
              ],
            },
          ],
          outcomes: [
            'Элегантно представляться в любом контексте',
            'Формально вести себя за столом',
            'Естественно общаться со взрослыми',
            'Выбирать подходящий наряд для случая',
            'Строить красивые отношения',
            'Проявлять качества маленького лидера',
          ],
          priceNote: 'Little Ambassadors 350 € · переход на Young Elites: 300 € вместо 350 € для выпускников',
        },
        {
          title: 'Young Elites',
          audience: 'Подростки · 13–17 лет · Уровень III',
          description:
            'Программа формирования личности и присутствия для подростков, которые хотят быть больше, чем просто хорошими, — хотят быть запоминающимися. Сочетает международный этикет, личный стиль, влиятельное общение и подлинное лидерство в трансформирующем путешествии.',
          features: [
            '8 модулей · Уровень III — Seniors',
            'Fine dining, публичные выступления и digital elegance',
            'Доступен продвинутый уровень Pro (стиль, макияж, гардероб)',
            'Малые группы · сертификат Elithropical',
          ],
          curriculum: [
            {
              label: 'Young Elites · Уровень III',
              items: [
                { name: 'Идентичность и персональный имидж', detail: 'Кто ты вне одежды. Персональный брендинг в твоём возрасте, элегантность и роль этикета в современной жизни.' },
                { name: 'Международный социальный протокол', detail: 'Формальные представления, этикет на мероприятии, приветствия в разных культурах, порядок старшинства, поведение на публике.' },
                { name: 'Fine dining и столовый этикет', detail: 'Формальный ужин из нескольких блюд, беседа за столом, этикет для ресторана высокой кухни — 2 практических занятия.' },
                { name: 'Общение с влиянием', detail: 'Публичные выступления для подростков, как презентовать проект, язык тела, голос как инструмент влияния.' },
                { name: 'Digital Elegance', detail: 'Этикет в соцсетях, LinkedIn для юниоров, профессиональные письма — достойное цифровое присутствие.' },
                { name: 'Лидерство с характером', detail: 'Типы лидерства, как влиять без манипуляций, эмоциональный интеллект, изящное разрешение конфликтов.' },
                { name: 'Присутствие как сила', detail: 'Как войти в комнату, как вести беседу, как формировать доверие через стиль и имидж.' },
              ],
            },
            {
              label: 'Young Elites Pro · дополнительные модули (750 €)',
              items: [
                { name: 'Элегантность — образ жизни', detail: 'Привычки, увлечения и мышление элегантной девушки. Элегантность — это не наряд, а ежедневный выбор.' },
                { name: 'Построение успешного имиджа', detail: 'Опоры успешного имиджа, выстроенные шаг за шагом. Бонус: практическое занятие по элегантной походке.' },
                { name: 'Уход за собой — практика', detail: 'Повседневный и торжественный макияж, безупречный маникюр, укладка волос — 2 полностью практических занятия.' },
                { name: 'Личный стиль как язык', detail: 'Типы стилей, колористика, тип фигуры, дресс-коды от Smart Casual до Black Tie — 4 занятия.' },
                { name: 'Капсульный гардероб', detail: 'Создание личного капсульного гардероба: базовые вещи, готовые образы, умные покупки.' },
              ],
            },
          ],
          outcomes: [
            'Представляться с авторитетом и грацией',
            'Уверенно вести себя на любом формальном ужине',
            'Естественно выступать на публике',
            'Элегантно общаться — в цифре и вживую',
            'Вести за собой с характером и интеллектом',
            'Оставлять запоминающееся впечатление везде',
          ],
          priceNote: 'Young Elites 350 € · Young Elites Pro 750 € · полный пакет 1.000 € вместо 1.100 €',
        },
        {
          title: 'The Executive Edge™',
          audience: 'Взрослые и Corporate · 3 дня',
          description:
            'Полная программа профессионального этикета, делового протокола, имиджа и лидерства — структурированная на 3 дня для реального усвоения и устойчивой трансформации. 11 модулей, группы максимум 12 участников, инструменты для 15+ деловых культур.',
          features: [
            '11 модулей · 3 дня · максимум 12 участников',
            'Интенсивная практика: ролевые игры, видео-разбор, бизнес-ланч',
            'Культурный интеллект — 15+ культур переговоров',
            'Сертификат Elite Protocol™ и онлайн-сопровождение через 30 дней',
          ],
          curriculum: [
            {
              label: 'День I — Имидж · Общение · Инструменты',
              items: [
                { name: 'Этикет в деловом пространстве и коллективе', detail: 'Правила общего пространства, гостеприимство в офисе, организация переговоров, этикет совещания и негласная иерархия.' },
                { name: 'Самопрезентация и инструменты общения', detail: 'Elevator pitch, визитные карточки, официальная переписка, этикет звонков — с симуляцией и видео-разбором.' },
                { name: 'Деловое общение и вербальный этикет', detail: 'Вербальное, паравербальное, невербальное; формы обращения, small talk, поведение на корпоративных мероприятиях.' },
                { name: 'Профессиональный имидж и дресс-коды', detail: 'Business Formal → Casual, код цветов, аксессуары и индивидуальный аудит имиджа.' },
              ],
            },
            {
              label: 'День II — Протокол · Лидерство · Переговоры',
              items: [
                { name: 'Этикет лидера и поведение статуса', detail: 'Протокол с руководством, executive presence, порядок старшинства, отношения «начальник–подчинённый».' },
                { name: 'Ведение переговоров и основы конфликтологии', detail: 'Подготовка и BATNA, фазы переговоров, разрядка конфликтов, элегантный отказ — с парной симуляцией.' },
                { name: 'Деловой обед — полный протокол', detail: 'Структура формального стола, поведение и беседа за столом, кто платит и как изящно завершить — упражнение за столом.' },
                { name: 'Корпоративная культура, приёмы и деловые подарки', detail: 'Деловая этика и корпоративная культура, поведение на приёмах, уместные подарки, управление впечатлением и невербальное общение.' },
              ],
            },
            {
              label: 'День III — Культуры · Цифра · Персональный бренд',
              items: [
                { name: 'Культурные различия и национальные стили переговоров', detail: 'Западная Европа, США, Ближний Восток, Азия — иерархия, отношения и время, с реальными кейсами.' },
                { name: 'Электронная переписка и цифровая репутация', detail: 'Деловая почта, мессенджеры, LinkedIn с живым аудитом, видеоконференции и то, что никогда не публикуют.' },
                { name: 'Персональный бренд и финальная интеграционная сессия', detail: 'Целостность имиджа онлайн–офлайн, послание бренда в 3 прилагательных, финальная презентация и личный план действий.' },
              ],
            },
          ],
          outcomes: [
            'Визуальный авторитет в любом контексте',
            'Контролируемое первое впечатление',
            'Более эффективные переговоры в 15+ культурах',
            'Ноль стресса за деловым столом',
            'Вербальное и невербальное общение с влиянием',
            'Чёткий и запоминающийся персональный бренд',
          ],
          priceNote: 'Индивидуально 690 € (≈ 13.800 MDL) · Corporate (до 10 чел.) 4.200 € · VIP Executive 1:1 1.100 €',
        },
      ],
      learnMore: 'ПОДРОБНЕЕ',
      bottomCtaText: 'Не уверены, какая программа подходит вам лучше всего?',
      bottomCtaButton: 'ЗАПЛАНИРОВАТЬ ОЗНАКОМИТЕЛЬНЫЙ ЗВОНОК',
    },
    serviceModal: {
      price: 'Индивидуальная цена',
      curriculumLabel: 'Подробная программа',
      outcomesLabel: 'Что вы освоите',
      cta: 'ЗАПРОСИТЬ ПРЕДЛОЖЕНИЕ',
      nameLabel: 'Полное имя *',
      namePlaceholder: 'Иван Иванов',
      emailLabel: 'Email *',
      emailPlaceholder: 'ivan@example.com',
      submit: 'ОТПРАВИТЬ ЗАПРОС',
      successHeading: 'Спасибо!',
      successMessage: 'Ваш запрос отправлен. Мы свяжемся с вами в ближайшее время.',
    },
    pricing: {
      tag: 'Курсы',
      heading: 'Выберите Программу',
      description: 'Программы для любого возраста и цели — от детей до руководителей.',
      recommended: 'РЕКОМЕНДОВАНО',
      customPrice: 'Индивидуально',
      ctaGetStarted: 'НАЧАТЬ',
      ctaContactUs: 'СВЯЗАТЬСЯ С НАМИ',
      plans: [
        {
          name: 'Little Ambassadors',
          tagline: 'Дети · 8–12 лет',
          priceSub: 'Уровень II — Juniors',
          period: '6 модулей · малая группа',
          description:
            'Открытие элегантности через игру, истории и практические занятия — красивые привычки, а не правила.',
          features: [
            '6 модулей этикета, стиля и общения',
            'Группа максимум 8–10 детей',
            'Еженедельные занятия по 90–120 минут',
            'Сессия обратной связи для родителей',
            'Сертификат Elithropical об окончании',
            'Переход на Young Elites: 300 € (вместо 350 €)',
          ],
        },
        {
          name: 'Young Elites',
          tagline: 'Подростки · 13–17 лет',
          priceSub: 'Уровень III — Seniors',
          period: '8 модулей · Pro доступен (750 €)',
          description:
            'Формирование личности и присутствия: международный этикет, личный стиль, влиятельное общение и подлинное лидерство.',
          features: [
            'Идентичность, имидж и международный протокол',
            'Fine dining, публичные выступления и digital elegance',
            'Лидерство с характером и executive presence',
            'Уровень Pro: стиль, колористика, макияж, капсульный гардероб',
            'Полный пакет Young Elites + Pro: 1.000 € (вместо 1.100 €)',
            'Сертификат Elithropical об окончании',
          ],
        },
        {
          name: 'The Executive Edge™',
          tagline: 'Взрослые и Corporate · 3 дня',
          priceSub: '≈ 13.800 MDL · максимум 12 участников',
          period: '11 модулей · 3 интенсивных дня',
          description:
            'Профессиональный этикет, деловой протокол, имидж и лидерство — 3 дня, 11 модулей, инструменты для 15+ культур.',
          features: [
            '11 модулей за 3 дня, интенсивная практика',
            'Ролевые игры, видео-разбор и бизнес-ланч включены',
            'Культурный интеллект — 15+ культур переговоров',
            'Пособие Elite Protocol™ и индивидуальный аудит имиджа',
            'Corporate (до 10 чел.) 4.200 € · VIP 1:1 1.100 €',
            'Сертификат Elite Protocol™ и сопровождение через 30 дней',
          ],
        },
      ],
      paymentInfo:
        'Early bird: запись за 3 недели — скидка 10%  \u2022  3+ человека из одной компании — скидка 15%  \u2022  Выставление счетов для юридических лиц',
      testimonialQuote:
        '\u00ABИзысканность \u2014 это не роскошь, а культура поведения\u00BB',
      testimonialAuthor: 'НАТАЛИЯ КРОИТОР',
      testimonialRole: 'Основательница, Elite Protocol',
    },
    reviews: {
      tag: 'Отзывы',
      heading: 'Что Говорят Наши Клиенты',
      description:
        'Опыт тех, кто решил инвестировать в собственный имидж и присутствие.',
      items: [
        {
          quote:
            'Программа Elite стала для меня настоящим открытием. Я научилась представлять себя с элегантностью и уверенностью в любом профессиональном контексте. Трансформация превзошла все мои ожидания.',
          name: 'Александра Ионеску',
          role: 'Исполнительный директор, Финансовый сектор',
        },
        {
          quote:
            'У Наталии удивительный талант раскрывать лучшее в каждом человеке. Благодаря курсу этикета и имиджа я обрёл уверенность в себе, которую считал невозможной.',
          name: 'Михай Думитреску',
          role: 'Предприниматель и Бизнес-консультант',
        },
        {
          quote:
            'Мы обратились в Elite Protocol для нашей команды менеджмента, и результаты были замечательными. Профессионализм и внимание к деталям — исключительные.',
          name: 'Елена Маринеску',
          role: 'VP по персоналу, Международная компания',
        },
      ],
    },
    about: {
      tag: 'Об Институте',
      headingLine1: 'Кто Мы',
      headingLine2: '',
      story: [
        'Elite Protocol \u2013 Institute of Etiquette, Image & Presence \u2014 это частный институт, посвящённый образованию в области этикета, персонального имиджа и развития социального и профессионального присутствия.',
        'Наш институт продвигает культуру хороших манер, поведенческую элегантность и создание подлинного и целостного образа, способного отражать ценности и идентичность каждого человека.',
        'Через наши образовательные программы участники осваивают не только правила современного этикета, но и искусство создания выраженного присутствия и подлинного персонального бренда, основанного на элегантности, доверии и влиянии.',
        'Наши программы предназначены для детей, подростков, взрослых и организаций, стремящихся развить имидж, поведение и присутствие на высочайшем уровне.',
      ],
      missionLabel: 'НАША МИССИЯ',
      mission:
        'Миссия Elite Protocol \u2013 Institute of Etiquette, Image & Presence \u2014 продвижение культуры этикета, поведенческой элегантности и развития подлинного персонального имиджа, содействуя формированию людей, способных представлять себя с изысканностью и достоверностью в обществе и профессиональной среде.',
      visionLabel: 'НАШЕ ВИДЕНИЕ',
      vision:
        'Мы стремимся стать региональным ориентиром в образовании в области этикета, имиджа и профессионального представительства, содействуя формированию нового поколения людей, сочетающих элегантность, поведенческую культуру и личную подлинность.',
      cta: 'НАЧНИТЕ СВОЙ ПУТЬ',
      stats: [
        { label: 'Лет Безупречности' },
        { label: 'Преображённых Клиентов' },
        { label: 'Уровень Удовлетворённости' },
        { label: 'Корпоративных Партнёров' },
      ],
      principlesHeading: 'Наши Ценности',
      principlesDescription:
        'Пять основных ценностей направляют каждую программу, взаимодействие и трансформацию, которую мы содействуем.',
      principles: [
        {
          title: 'Элегантность',
          desc: 'Выражается через поведение, стиль и отношение. Элегантность — основа запоминающегося присутствия и подлинного персонального бренда.',
        },
        {
          title: 'Уважение',
          desc: 'Основа социальных и профессиональных отношений. Уважение направляет каждое взаимодействие и лежит в основе современного этикета.',
        },
        {
          title: 'Подлинность',
          desc: 'Развитие целостной личной идентичности. Мы верим в создание персонального бренда, который по-настоящему отражает ценности и личность каждого человека.',
        },
        {
          title: 'Изысканность',
          desc: 'Внимание к деталям и качество представительства. Изысканность превращает каждый жест и каждое слово в выражение совершенства.',
        },
        {
          title: 'Профессионализм',
          desc: 'Высокие стандарты в образовании и подготовке. Мы стремимся предоставлять программы высочайшего качества с измеримыми результатами.',
        },
      ],
      founderLabel: 'ОСНОВАТЕЛЬНИЦА',
      founderName: 'Наталия Кроитор',
      founderBio: [
        'Наталия Кроитор — основательница Elite Protocol \u2013 Institute of Etiquette, Image & Presence и эксперт в области этикета, персонального имиджа и развития персонального бренда.',
        'Ученица Swiss Academy of Education, с профессиональной подготовкой в области этикета и персонального имиджа в России и Европе, Наталия имеет более 5 лет опыта в обучении и консультировании людей, а также предоставляет консалтинг организациям, заинтересованным в развитии имиджа и профессионального присутствия.',
        'Она создала комплексную программу, сочетающую социальный и деловой этикет, подлинный имидж и запоминающееся присутствие, предоставляя участникам инструменты для представления себя с изысканностью и достоверностью.',
        'Своей деятельностью Наталия стремится превратить поведение, стиль и имидж в уникальный персональный бренд — как для женщин и мужчин, так и для организаций, заинтересованных в развитии своего имиджа и профессионального присутствия.',
      ],
      certificationsHeading: 'АККРЕДИТОВАНО ВЕДУЩИМИ ИНСТИТУТАМИ',
      certifications: [
        'International Association of Professions Career College',
        'British School of Excellence',
        'Global Protocol Academy',
        'Association of Image Consultants International',
      ],
    },
    contact: {
      tag: 'Свяжитесь с Нами',
      heading: 'Начните Трансформацию',
      description: 'Запланируйте конфиденциальную консультацию для обсуждения ваших целей.',
      emailLabel: 'EMAIL',
      phoneLabel: 'ТЕЛЕФОН',
      officeLabel: 'ОФИС',
      businessHoursLabel: 'ЧАСЫ РАБОТЫ',
      phoneNote: 'Понедельник \u2013 Пятница, 9:00 \u2013 18:00 EST',
      appointmentOnly: 'Только по записи',
      hours: {
        monFri: 'Понедельник \u2013 Пятница',
        monFriTime: '9:00 \u2013 18:00',
        sat: 'Суббота',
        satTime: '10:00 \u2013 16:00',
        sun: 'Воскресенье',
        closed: 'Закрыто',
      },
      form: {
        nameLabel: 'Полное Имя *',
        namePlaceholder: 'Иван Иванов',
        emailLabel: 'Адрес Электронной Почты *',
        emailPlaceholder: 'ivan@example.com',
        phoneLabel: 'Номер Телефона',
        phonePlaceholder: '+7 (999) 123-45-67',
        serviceLabel: 'Интересующая Услуга *',
        servicePlaceholder: 'Выберите услугу',
        serviceOptions: [
          { value: 'little-ambassadors', label: 'Little Ambassadors · Дети 8–12' },
          { value: 'young-elites', label: 'Young Elites · Подростки 13–17' },
          { value: 'executive-edge', label: 'The Executive Edge™ · Взрослые и Corporate' },
        ],
        messageLabel: 'Ваше Сообщение *',
        messagePlaceholder:
          'Пожалуйста, поделитесь своими целями и конкретными областями, которые вы хотели бы проработать...',
        privacyConsent:
          'Я даю согласие на то, чтобы Elite Protocol связалась со мной по поводу моего запроса. Все консультации проводятся с полной конфиденциальностью и тактичностью.',
        submit: 'ОТПРАВИТЬ ЗАПРОС',
      },
      successHeading: 'Спасибо',
      successMessage:
        'Ваш запрос получен. Член нашей команды свяжется с вами в течение 24 часов для назначения консультации.',
      confidentiality: 'Полная Конфиденциальность',
      confidentialityNote:
        'Все запросы обрабатываются с максимальной деликатностью',
    },
    footer: {
      tagline: 'Институт Этикета, Имиджа и Присутствия',
      description:
        'Продвижение культуры этикета, поведенческой элегантности и развития подлинного персонального имиджа.',
      navigate: 'НАВИГАЦИЯ',
      navAbout: 'Об Институте',
      navServices: 'Программы',
      navInvestment: 'Курсы',
      navContact: 'Контакт',
      connect: 'СВЯЗЬ',
      copyright: '\u00A9 2026 Elite Protocol. Все права защищены.',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      mobileMenuLabel: 'ELITE PROTOCOL',
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations['en'];
