export type Language = 'en' | 'fr';

export interface Translations {
  common: {
    home: string;
    about: string;
    services: string;
    contact: string;
    quote: string;
    pricing: string;
    features: string;
    team: string;
    testimonial: string;
    blog: string;
    blogGrid: string;
    blogDetail: string;
    readMore: string;
    backToBlog: string;
    visitSite: string;
    viewProject: string;
    sendMessage: string;
    requesting: string;
    sending: string;
    yourName: string;
    yourEmail: string;
    subject: string;
    message: string;
    selectAService: string;
    webDevelopment: string;
    mobileAppDevelopment: string;
    digitalMarketing: string;
    close: string;
    searchKeyword: string;
    language: string;
    english: string;
    french: string;
    readMoreShort: string;
    pageNotFound: string;
    pageNotFoundText: string;
    backToHome: string;
  };
  navbar: {
    home: string;
    about: string;
    services: string;
    contact: string;
    blog: string;
    pages: string;
    pricingPlan: string;
    ourFeatures: string;
    teamMembers: string;
    testimonial: string;
    freeQuote: string;
  };
  footer: {
    about: string;
    newsletterPlaceholder: string;
    signUp: string;
    sending: string;
    getInTouch: string;
    quickLinks: string;
    popularLinks: string;
    copyright: string;
  };
  home: {
    happyClients: string;
    projectsDone: string;
    winAwards: string;
    aboutUs: string;
    aboutTitle: string;
    aboutText: string;
    awardWinning: string;
    professionalStaff: string;
    support247: string;
    fairPrices: string;
    callQuestion: string;
    requestAQuote: string;
    whyChooseUs: string;
    growBusiness: string;
    bestInIndustry: string;
    bestInIndustryText: string;
    awardWinningTitle: string;
    awardWinningText: string;
    professionalStaffTitle: string;
    professionalStaffText: string;
    support247Title: string;
    support247Text: string;
    ourServices: string;
    customSolutions: string;
    callUsForQuote: string;
    callUsText: string;
    pricingPlans: string;
    flexiblePlans: string;
    requestAQuoteSection: string;
    freeQuoteTitle: string;
    reply24h: string;
    telephoneSupport: string;
    quoteText: string;
    callQuestions: string;
    testimonials: string;
    clientsSay: string;
    teamMembers: string;
    professionalStuffs: string;
    ourBlog: string;
    insights: string;
    vendor: string;
  };
  about: {
    aboutUs: string;
    aboutTitle: string;
    aboutText: string;
    awardWinning: string;
    professionalStaff: string;
    support247: string;
    fairPrices: string;
    callQuestion: string;
    requestAQuote: string;
    teamMembers: string;
    professionalStuffs: string;
  };
  service: {
    ourServices: string;
    customSolutions: string;
    callUsForQuote: string;
    callUsText: string;
  };
  contact: {
    contactUs: string;
    weLoveHear: string;
    getInTouch: string;
    ourLocation: string;
    emailAddress: string;
    phoneNumber: string;
    yourName: string;
    yourEmail: string;
    subject: string;
    message: string;
    sendMessage: string;
  };
  quote: {
    freeQuote: string;
    requestAQuote: string;
    freeQuoteTitle: string;
    reply24h: string;
    telephoneSupport: string;
    quoteText: string;
    callQuestions: string;
    requestAQuoteBtn: string;
  };
  features: {
    ourFeatures: string;
    whyChooseUs: string;
    growBusiness: string;
    bestInIndustry: string;
    bestInIndustryText: string;
    awardWinning: string;
    awardWinningText: string;
    professionalStaff: string;
    professionalStaffText: string;
    support247: string;
    support247Text: string;
  };
  team: {
    teamMembers: string;
    professionalStuffs: string;
  };
  testimonial: {
    testimonials: string;
    clientsSay: string;
  };
  blog: {
    ourBlog: string;
    insights: string;
    all: string;
    webDevelopment: string;
    digitalStrategy: string;
    technology: string;
    ourProjects: string;
    solutionsWeBuild: string;
    availablePublic: string;
    clientProjects: string;
    howToBuild: string;
    howToBuildExcerpt: string;
    whyStartup: string;
    whyStartupExcerpt: string;
    choosingTech: string;
    choosingTechExcerpt: string;
  };
  pages: {
    privacyPolicy: string;
    termsOfService: string;
  };
  detail: {
    blogDetail: string;
    backToBlog: string;
    relatedPosts: string;
    defineGoals: string;
    defineGoalsText: string;
    choosePlatform: string;
    choosePlatformText: string;
    userExperience: string;
    userExperienceText: string;
    seo: string;
    seoText: string;
    launchMaintain: string;
    launchMaintainText: string;
  };
  project: {
    publicProduct: string;
    clientWork: string;
    availablePublic: string;
    clientProjects: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      quote: 'Free Quote',
      pricing: 'Pricing Plan',
      features: 'Our Features',
      team: 'Team Members',
      testimonial: 'Testimonial',
      blog: 'Blog',
      blogGrid: 'Blog Grid',
      blogDetail: 'Blog Detail',
      readMore: 'Read More',
      backToBlog: 'Back to Blog',
      visitSite: 'Visit Site',
      viewProject: 'View Project',
      sendMessage: 'Send Message',
      requesting: 'Requesting...',
      sending: 'Sending...',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      selectAService: 'Select A Service',
      webDevelopment: 'Web Development',
      mobileAppDevelopment: 'Mobile App Development',
      digitalMarketing: 'Digital Marketing',
      close: 'Close',
      searchKeyword: 'Type search keyword',
      language: 'Language',
      english: 'English',
      french: 'French',
      readMoreShort: 'Read more',
      pageNotFound: 'Page Not Found',
      pageNotFoundText: 'The page you are looking for does not exist or has been moved.',
      backToHome: 'Back to Home',
    },
    navbar: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      blog: 'Blog',
      pages: 'Pages',
      pricingPlan: 'Pricing Plan',
      ourFeatures: 'Our Features',
      teamMembers: 'Team Members',
      testimonial: 'Testimonial',
      freeQuote: 'Free Quote',
    },
    footer: {
      about:
        'LogiaSpace is a digital solutions company specializing in web design, web development, and digital marketing. We help businesses build a strong online presence through innovative, secure, and performance-driven digital products.',
      newsletterPlaceholder: 'Your Email',
      signUp: 'Sign Up',
      sending: 'Sending...',
      getInTouch: 'Get In Touch',
      quickLinks: 'Quick Links',
      popularLinks: 'Popular Links',
      copyright: 'LogiaSpace. All Rights Reserved.',
    },
    home: {
      happyClients: 'Happy Clients',
      projectsDone: 'Projects Done',
      winAwards: 'Win Awards',
      aboutUs: 'About Us',
      aboutTitle: 'The Best IT Solution With 10 Years of Experience',
      aboutText:
        'LOGIASPACE is a forward-thinking digital solutions startup dedicated to helping businesses thrive online. With a focus on innovative web development, modern UI/UX design, and scalable technology, we deliver solutions that increase visibility, engage users, and drive measurable results. Our mission is to transform ideas into impactful digital experiences for clients worldwide.',
      awardWinning: 'Award Winning',
      professionalStaff: 'Professional Staff',
      support247: '24/7 Support',
      fairPrices: 'Fair Prices',
      callQuestion: 'Call to ask any question',
      requestAQuote: 'Request A Quote',
      whyChooseUs: 'Why Choose Us',
      growBusiness: 'We Are Here to Grow Your Business Exponentially',
      bestInIndustry: 'Best In Industry',
      bestInIndustryText:
        'LOGIASPACE delivers cutting-edge web and digital solutions using the latest technologies, ensuring your business stays ahead of the competition.',
      awardWinningTitle: 'Award Winning',
      awardWinningText:
        'Our commitment to excellence has earned recognition in the industry, reflecting our dedication to creating high-quality, reliable digital solutions.',
      professionalStaffTitle: 'Professional Staff',
      professionalStaffText:
        'Our skilled team of developers, designers, and strategists bring expertise and creativity to every project, ensuring your vision comes to life.',
      support247Title: '24/7 Support',
      support247Text:
        'We provide round-the-clock support to address your queries, resolve issues, and ensure smooth operations for your digital solutions.',
      ourServices: 'Our Services',
      customSolutions: 'Custom IT Solutions for Your Successful Business',
      callUsForQuote: 'Call Us For Quote',
      callUsText:
        'Get a personalized IT solution for your business. Our experts are ready to discuss your needs and provide a tailored plan.',
      pricingPlans: 'Pricing Plans',
      flexiblePlans: 'Flexible Plans to Fit Every Business Need',
      requestAQuoteSection: 'Request A Quote',
      freeQuoteTitle: 'Looking for a Free Quote? Get in Touch with Us Today',
      reply24h: 'We reply within 24 hours',
      telephoneSupport: '24/7 Telephone Support',
      quoteText:
        'LOGIASPACE offers personalized IT solutions for your business. Our experts are ready to understand your requirements, provide a tailored plan, and ensure your project succeeds. Contact us today to get expert advice and a detailed quote for your next digital project.',
      callQuestions: 'Call us for any questions',
      testimonials: 'Testimonials',
      clientsSay: "What Our Clients Say About Working With Logia Space",
      teamMembers: 'Team Members',
      professionalStuffs: 'Professional Stuffs Ready to Help Your Business',
      ourBlog: 'Our Blog',
      insights: "Insights, Tips & Updates from the Logia Space Team",
      vendor: '',
    },
    about: {
      aboutUs: 'About Us',
      aboutTitle: 'The Best IT Solution With 10 Years of Experience',
      aboutText:
        'LOGIASPACE is a forward-thinking digital solutions startup dedicated to helping businesses thrive online. With a focus on innovative web development, modern UI/UX design, and scalable technology, we deliver solutions that increase visibility, engage users, and drive measurable results. Our mission is to transform ideas into impactful digital experiences for clients worldwide.',
      awardWinning: 'Award Winning',
      professionalStaff: 'Professional Staff',
      support247: '24/7 Support',
      fairPrices: 'Fair Prices',
      callQuestion: 'Call to ask any question',
      requestAQuote: 'Request A Quote',
      teamMembers: 'Team Members',
      professionalStuffs: 'Professional Stuffs Ready to Help Your Business',
    },
    service: {
      ourServices: 'Our Services',
      customSolutions: 'Custom IT Solutions for Your Successful Business',
      callUsForQuote: 'Call Us For Quote',
      callUsText:
        'Get a personalized IT solution for your business. Our experts are ready to discuss your needs and provide a tailored plan.',
    },
    contact: {
      contactUs: 'Contact Us',
      weLoveHear: "We'd Love to Hear From You",
      getInTouch: 'Get In Touch',
      ourLocation: 'Our Location',
      emailAddress: 'Email Address',
      phoneNumber: 'Phone Number',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
    },
    quote: {
      freeQuote: 'Free Quote',
      requestAQuote: 'Request A Quote',
      freeQuoteTitle: 'Looking for a Free Quote? Get in Touch with Us Today',
      reply24h: 'We reply within 24 hours',
      telephoneSupport: '24/7 Telephone Support',
      quoteText:
        'LOGIASPACE offers personalized IT solutions for your business. Our experts are ready to understand your requirements, provide a tailored plan, and ensure your project succeeds. Contact us today to get expert advice and a detailed quote for your next digital project.',
      callQuestions: 'Call us for any questions',
      requestAQuoteBtn: 'Request A Quote',
    },
    features: {
      ourFeatures: 'Our Features',
      whyChooseUs: 'Why Choose Us',
      growBusiness: 'We Are Here to Grow Your Business Exponentially',
      bestInIndustry: 'Best In Industry',
      bestInIndustryText:
        'LOGIASPACE delivers cutting-edge web and digital solutions using the latest technologies, ensuring your business stays ahead of the competition.',
      awardWinning: 'Award Winning',
      awardWinningText:
        'Our commitment to excellence has earned recognition in the industry, reflecting our dedication to creating high-quality, reliable digital solutions.',
      professionalStaff: 'Professional Staff',
      professionalStaffText:
        'Our skilled team of developers, designers, and strategists bring expertise and creativity to every project, ensuring your vision comes to life.',
      support247: '24/7 Support',
      support247Text:
        'We provide round-the-clock support to address your queries, resolve issues, and ensure smooth operations for your digital solutions.',
    },
    team: {
      teamMembers: 'Team Members',
      professionalStuffs: 'Professional Stuffs Ready to Help Your Business',
    },
    testimonial: {
      testimonials: 'Testimonials',
      clientsSay: "What Our Clients Say About Working With Logia Space",
    },
    blog: {
      ourBlog: 'Our Blog',
      insights: "Insights, Tips & Updates from the Logia Space Team",
      all: 'all',
      webDevelopment: 'Web Development',
      digitalStrategy: 'Digital Strategy',
      technology: 'Technology',
      ourProjects: 'Our Projects',
      solutionsWeBuild: 'Solutions We Build & Deliver',
      availablePublic: 'Available for the General Public',
      clientProjects: 'Projects Done for Our Clients',
      howToBuild: 'How to Build a Professional Business Website',
      howToBuildExcerpt:
        'Learn the key steps, tools, and best practices to create a modern, secure, and scalable website that attracts customers and grows your brand.',
      whyStartup: 'Why Every Startup Needs a Digital Presence',
      whyStartupExcerpt:
        'Discover how websites, SEO, and digital tools help startups increase visibility, build trust, and reach the right customers faster.',
      choosingTech: 'Choosing the Right Technology for Your Project',
      choosingTechExcerpt:
        'From frontend frameworks to backend solutions, learn how to choose the right technologies based on performance, budget, and scalability.',
    },
    pages: {
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
    detail: {
      blogDetail: 'Blog Detail',
      backToBlog: 'Back to Blog',
      relatedPosts: 'Related Posts',
      defineGoals: '1. Define Your Goals',
      defineGoalsText:
        'Before you start designing or developing, clearly define what you want your website to achieve. Are you looking to generate sales, capture leads, or simply provide information about your services?',
      choosePlatform: '2. Choose the Right Platform',
      choosePlatformText:
        'Select a platform that aligns with your technical skills and business needs. Whether it\'s a CMS like WordPress, a website builder, or a custom React application, the right choice makes all the difference.',
      userExperience: '3. Focus on User Experience',
      userExperienceText:
        'A professional website must be fast, mobile-responsive, and easy to navigate. Users should find what they\'re looking for within seconds.',
      seo: '4. Optimize for SEO',
      seoText:
        'Implement SEO best practices including proper meta tags, heading structure, image optimization, and quality content to improve your search engine visibility.',
      launchMaintain: '5. Launch and Maintain',
      launchMaintainText:
        'Once your website is live, monitor its performance, gather user feedback, and keep content updated to maintain relevance and security.',
    },
    project: {
      publicProduct: 'Public Product',
      clientWork: 'Client Work',
      availablePublic: 'Available to the Public',
      clientProjects: 'Client Project',
    },
  },
  fr: {
    common: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      quote: 'Devis gratuit',
      pricing: 'Forfaits',
      features: 'Nos fonctionnalités',
      team: 'Notre équipe',
      testimonial: 'Témoignages',
      blog: 'Blog',
      blogGrid: 'Grille du blog',
      blogDetail: 'Détail du blog',
      readMore: 'Lire la suite',
      backToBlog: 'Retour au blog',
      visitSite: 'Visiter le site',
      viewProject: 'Voir le projet',
      sendMessage: 'Envoyer le message',
      requesting: 'En cours...',
      sending: 'Envoi...',
      yourName: 'Votre nom',
      yourEmail: 'Votre email',
      subject: 'Sujet',
      message: 'Message',
      selectAService: 'Sélectionner un service',
      webDevelopment: 'Développement web',
      mobileAppDevelopment: 'Développement d\'applications mobiles',
      digitalMarketing: 'Marketing digital',
      close: 'Fermer',
      searchKeyword: 'Tapez le mot-clé de recherche',
      language: 'Langue',
      english: 'Anglais',
      french: 'Français',
      readMoreShort: 'En savoir plus',
      pageNotFound: 'Page non trouvée',
      pageNotFoundText: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
      backToHome: 'Retour à l\'accueil',
    },
    navbar: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      blog: 'Blog',
      pages: 'Pages',
      pricingPlan: 'Forfaits',
      ourFeatures: 'Nos fonctionnalités',
      teamMembers: 'Notre équipe',
      testimonial: 'Témoignages',
      freeQuote: 'Devis gratuit',
    },
    footer: {
      about:
        'LogiaSpace est une entreprise de solutions numériques spécialisée dans le web design, le développement web et le marketing digital. Nous aidons les entreprises à construire une présence en ligne solide grâce à des produits numériques innovants, sécurisés et performants.',
      newsletterPlaceholder: 'Votre email',
      signUp: "S'inscrire",
      sending: 'Envoi...',
      getInTouch: 'Contactez-nous',
      quickLinks: 'Liens rapides',
      popularLinks: 'Liens populaires',
      copyright: 'LogiaSpace. Tous droits réservés.',
    },
    home: {
      happyClients: 'Clients satisfaits',
      projectsDone: 'Projets réalisés',
      winAwards: 'Prix remportés',
      aboutUs: 'À propos',
      aboutTitle: 'La meilleure solution informatique avec 10 ans d\'expérience',
      aboutText:
        'LOGIASPACE est une start-up de solutions numériques avant-gardiste dédiée à aider les entreprises à prospérer en ligne. Axé sur le développement web innovant, le design UI/UX moderne et la technologie évolutive, nous délivrons des solutions qui augmentent la visibilité, engagent les utilisateurs et produisent des résultats mesurables. Notre mission est de transformer les idées en expériences numériques percutantes pour nos clients du monde entier.',
      awardWinning: 'Primé',
      professionalStaff: 'Personnel professionnel',
      support247: 'Support 24/7',
      fairPrices: 'Prix équitables',
      callQuestion: 'Appelez pour toute question',
      requestAQuote: 'Demander un devis',
      whyChooseUs: 'Pourquoi nous choisir',
      growBusiness: 'Nous sommes là pour faire croître votre entreprise de façon exponentielle',
      bestInIndustry: 'Le meilleur de l\'industrie',
      bestInIndustryText:
        'LOGIASPACE délivre des solutions web et numériques de pointe utilisant les dernières technologies, assurant que votre entreprise garde une avance sur la concurrence.',
      awardWinningTitle: 'Primé',
      awardWinningText:
        'Notre engagement envers l\'excellence nous a valu une reconnaissance dans l\'industrie, reflétant notre dévouement à créer des solutions numériques de haute qualité et fiables.',
      professionalStaffTitle: 'Personnel professionnel',
      professionalStaffText:
        'Notre équipe qualifiée de développeurs, concepteurs et stratèges apporte expertise et créativité à chaque projet, assurant que votre vision prend vie.',
      support247Title: 'Support 24/7',
      support247Text:
        'Nous offrons un support 24/7 pour répondre à vos questions, résoudre les problèmes et assurer le bon fonctionnement de vos solutions numériques.',
      ourServices: 'Nos services',
      customSolutions: 'Solutions informatiques personnalisées pour votre entreprise prospère',
      callUsForQuote: 'Appelez-nous pour un devis',
      callUsText:
        'Obtenez une solution informatique personnalisée pour votre entreprise. Nos experts sont prêts à discuter de vos besoins et à vous proposer un plan sur mesure.',
      pricingPlans: 'Forfaits',
      flexiblePlans: 'Des forfaits flexibles pour répondre aux besoins de chaque entreprise',
      requestAQuoteSection: 'Demander un devis',
      freeQuoteTitle: 'Vous cherchez un devis gratuit ? Contactez-nous dès aujourd\'hui',
      reply24h: 'Nous répondons sous 24 heures',
      telephoneSupport: 'Assistance téléphonique 24/7',
      quoteText:
        'LOGIASPACE propose des solutions informatiques personnalisées pour votre entreprise. Nos experts sont prêts à comprendre vos besoins, vous proposer un plan sur mesure et garantir la réussite de votre projet. Contactez-nous aujourd\'hui pour obtenir des conseils d\'expert et un devis détaillé pour votre prochain projet numérique.',
      callQuestions: 'Appelez-nous pour toute question',
      testimonials: 'Témoignages',
      clientsSay: "Ce que nos clients disent de leur collaboration avec Logia Space",
      teamMembers: 'Membres de l\'équipe',
      professionalStuffs: 'Des professionnels prêts à aider votre entreprise',
      ourBlog: 'Notre blog',
      insights: "Actualités, conseils et mises à jour de l'équipe Logia Space",
      vendor: '',
    },
    about: {
      aboutUs: 'À propos',
      aboutTitle: 'La meilleure solution informatique avec 10 ans d\'expérience',
      aboutText:
        'LOGIASPACE est une start-up de solutions numériques avant-gardiste dédiée à aider les entreprises à prospérer en ligne. Axé sur le développement web innovant, le design UI/UX moderne et la technologie évolutive, nous délivrons des solutions qui augmentent la visibilité, engagent les utilisateurs et produisent des résultats mesurables. Notre mission est de transformer les idées en expériences numériques percutantes pour nos clients du monde entier.',
      awardWinning: 'Primé',
      professionalStaff: 'Personnel professionnel',
      support247: 'Support 24/7',
      fairPrices: 'Prix équitables',
      callQuestion: 'Appelez pour toute question',
      requestAQuote: 'Demander un devis',
      teamMembers: 'Membres de l\'équipe',
      professionalStuffs: 'Des professionnels prêts à aider votre entreprise',
    },
    service: {
      ourServices: 'Nos services',
      customSolutions: 'Solutions informatiques personnalisées pour votre entreprise prospère',
      callUsForQuote: 'Appelez-nous pour un devis',
      callUsText:
        'Obtenez une solution informatique personnalisée pour votre entreprise. Nos experts sont prêts à discuter de vos besoins et à vous proposer un plan sur mesure.',
    },
    contact: {
      contactUs: 'Contactez-nous',
      weLoveHear: "Nous serions ravis de vous entendre",
      getInTouch: 'Contactez-nous',
      ourLocation: 'Notre localisation',
      emailAddress: 'Adresse email',
      phoneNumber: 'Numéro de téléphone',
      yourName: 'Votre nom',
      yourEmail: 'Votre email',
      subject: 'Sujet',
      message: 'Message',
      sendMessage: 'Envoyer le message',
    },
    quote: {
      freeQuote: 'Devis gratuit',
      requestAQuote: 'Demander un devis',
      freeQuoteTitle: 'Vous cherchez un devis gratuit ? Contactez-nous dès aujourd\'hui',
      reply24h: 'Nous répondons sous 24 heures',
      telephoneSupport: 'Assistance téléphonique 24/7',
      quoteText:
        'LOGIASPACE propose des solutions informatiques personnalisées pour votre entreprise. Nos experts sont prêts à comprendre vos besoins, vous proposer un plan sur mesure et garantir la réussite de votre projet. Contactez-nous aujourd\'hui pour obtenir des conseils d\'expert et un devis détaillé pour votre prochain projet numérique.',
      callQuestions: 'Appelez-nous pour toute question',
      requestAQuoteBtn: 'Demander un devis',
    },
    features: {
      ourFeatures: 'Nos fonctionnalités',
      whyChooseUs: 'Pourquoi nous choisir',
      growBusiness: 'Nous sommes là pour faire croître votre entreprise de façon exponentielle',
      bestInIndustry: 'Le meilleur de l\'industrie',
      bestInIndustryText:
        'LOGIASPACE délivre des solutions web et numériques de pointe utilisant les dernières technologies, assurant que votre entreprise garde une avance sur la concurrence.',
      awardWinning: 'Primé',
      awardWinningText:
        'Notre engagement envers l\'excellence nous a valu une reconnaissance dans l\'industrie, reflétant notre dévouement à créer des solutions numériques de haute qualité et fiables.',
      professionalStaff: 'Personnel professionnel',
      professionalStaffText:
        'Notre équipe qualifiée de développeurs, concepteurs et stratèges apporte expertise et créativité à chaque projet, assurant que votre vision prend vie.',
      support247: 'Support 24/7',
      support247Text:
        'Nous offrons un support 24/7 pour répondre à vos questions, résoudre les problèmes et assurer le bon fonctionnement de vos solutions numériques.',
    },
    team: {
      teamMembers: 'Membres de l\'équipe',
      professionalStuffs: 'Des professionnels prêts à aider votre entreprise',
    },
    testimonial: {
      testimonials: 'Témoignages',
      clientsSay: "Ce que nos clients disent de leur collaboration avec Logia Space",
    },
    blog: {
      ourBlog: 'Notre blog',
      insights: "Actualités, conseils et mises à jour de l'équipe Logia Space",
      all: 'tous',
      webDevelopment: 'Développement web',
      digitalStrategy: 'Stratégie digitale',
      technology: 'Technologie',
      ourProjects: 'Nos projets',
      solutionsWeBuild: 'Solutions que nous construisons et délivrons',
      availablePublic: 'Disponible pour le grand public',
      clientProjects: 'Projets réalisés pour nos clients',
      howToBuild: 'Comment créer un site web professionnel pour entreprise',
      howToBuildExcerpt:
        'Apprenez les étapes clés, les outils et les meilleures pratiques pour créer un site web moderne, sécurisé et évolutif qui attire les clients et fait croître votre marque.',
      whyStartup: 'Pourquoi chaque startup a besoin d\'une présence digitale',
      whyStartupExcerpt:
        'Découvrez comment les sites web, le référencement et les outils digitaux aident les startups à augmenter leur visibilité, bâtir la confiance et atteindre les bons clients plus rapidement.',
      choosingTech: 'Choisir la bonne technologie pour votre projet',
      choosingTechExcerpt:
        'Des frameworks frontend aux solutions backend, apprenez à choisir les bonnes technologies en fonction de la performance, du budget et de l\'évolutivité.',
    },
    pages: {
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: 'Conditions d\'utilisation',
    },
    detail: {
      blogDetail: 'Détail du blog',
      backToBlog: 'Retour au blog',
      relatedPosts: 'Articles connexes',
      defineGoals: '1. Définir vos objectifs',
      defineGoalsText:
        'Avant de commencer à concevoir ou développer, définissez clairement ce que vous voulez que votre site web accomplisse. Cherchez-vous à générer des ventes, capter des leads, ou simplement fournir des informations sur vos services ?',
      choosePlatform: '2. Choisir la bonne plateforme',
      choosePlatformText:
        'Sélectionnez une plateforme alignée avec vos compétences techniques et les besoins de votre entreprise. Qu\'il s\'agisse d\'un CMS comme WordPress, un constructeur de site web, ou une application React personnalisée, le bon choix fait toute la différence.',
      userExperience: '3. Se concentrer sur l\'expérience utilisateur',
      userExperienceText:
        'Un site web professionnel doit être rapide, adaptable aux mobiles et facile à naviguer. Les utilisateurs doivent trouver ce qu\'ils cherchent en quelques secondes.',
      seo: '4. Optimiser pour le référencement (SEO)',
      seoText:
        'Mettez en œuvre les meilleures pratiques SEO incluant les balises meta appropriées, la structure des titres, l\'optimisation des images et un contenu de qualité pour améliorer votre visibilité sur les moteurs de recherche.',
      launchMaintain: '5. Lancer et maintenir',
      launchMaintainText:
        'Une fois votre site en ligne, surveillez ses performances, recueillez les retours utilisateurs et tenez le contenu à jour pour maintenir la pertinence et la sécurité.',
    },
    project: {
      publicProduct: 'Produit public',
      clientWork: 'Travail client',
      availablePublic: 'Disponible pour le public',
      clientProjects: 'Projet client',
    },
  },
};
