/* =====================================================
   VAL MAR — Interactive Script & Multilingual Engine
   Theme: Clean Marine Bio-Tech Enterprise
   ===================================================== */

/* --------------------------------------------------
   1. TRANSLATION DICTIONARIES (5 LANGUAGES)
   -------------------------------------------------- */
const translations = {
    ar: {
        "nav-about": "من نحن",
        "nav-raw": "المادة الأولية",
        "nav-products": "المنتجات",
        "nav-process": "مراحل العمل",
        "nav-contact": "تواصل معنا",
        "brand-sub": "تثمين الموارد البحرية والزيوت الطبيعية",
        "hero-title": "VAL MAR",
        "hero-title-sub": "تثمين الموارد البحرية والزيوت الطبيعية",
        "hero-explanation": "مؤسسة ناشئة متخصصة في تثمين البقايا العضوية للأسماك وتحويلها إلى منتجات عالية القيمة: زيوت أوميغا 3، بروتين سمكي، وحلول صناعية صديقة للبيئة تدعم الاقتصاد الدائري.",
        "hero-desc": "حلول بيوتكنولوجية مستدامة من الموارد البحرية.",
        "stat1-label": "استغلال كامل للموارد",
        "stat2-label": "مستخلصات طبيعية",
        "stat3-label": "حلول صناعية وغذائية",
        "founders-heading": "مؤسسو المشروع",
        "slider-badge": "معرض الأنشطة والتطوير",
        "zoom-hint": "اضغط للتكبير",
        "video-badge": "عرض توضيحي للمشروع",
        "cta-btn": "اكتشف الحلول",
        "about-title": "من نحن",
        "about-desc": "مؤسسة ناشئة متخصصة في تثمين المنتجات الثانوية للصيد البحري، نقوم باستخلاص الزيوت الطبيعية والبروتينات البحرية وتطوير حلول صناعية تدعم الاقتصاد الدائري وحماية البيئة البحرية.",
        "pillar1-title": "الاقتصاد الدائري",
        "pillar1-desc": "إعادة تدوير المخلفات العضوية للأسماك وتحويلها إلى موارد مستدامة ذات قيمة مضافة.",
        "pillar2-title": "هندسة علوم البحار",
        "pillar2-desc": "تطبيق منهجيات علمية وتقنيات استخلاص دقيقة ومدروسة لضمان جودة المنتجات.",
        "pillar3-title": "قيمة اقتصادية وصناعية",
        "pillar3-desc": "توفير بدائل محلية عالية الجودة لقطاعات التغذية، الصيدلة، والصناعات المختلفة.",
        "raw-title": "المادة الأولية",
        "raw-desc": "نعتمد على موارد بحرية عضوية طازجة يتم اختيارها وفرزها بعناية لضمان نقاء وجودة المنتجات النهائية.",
        "raw-cap1": "بقايا عضوية بحرية طازجة",
        "raw-cap2": "موارد عضوية منتقاة بعناية",
        "raw-cap3": "فرز وتحضير أولي للمعالجة",
        "raw-cap4": "مواد أولية غنية بالأوميغا والبروتين",
        "raw-cap5": "حفظ وتخزين بيئي آمن",
        "raw-cap6": "جاهزية كاملة لخط الاستخلاص",
        "products-title": "المنتجات والحلول",
        "products-subtitle": "منتجات طبيعية مستخلصة بدقة لتلبية متطلبات الصناعات الغذائية، الصيدلانية، والأعلاف.",
        "invest-banner-title": "شراكات استثمارية واستراتيجية",
        "invest-banner-desc": "نرحب بالتعاون مع المستثمرين والموزعين والمؤسسات الصناعية الراغبة في تطوير مشاريع مشتركة والاستفادة من عوائد المنتجات البحرية ذات القيمة المضافة.",
        "prod1-title": "زيوت الأسماك الطبيعية (أوميغا 3)",
        "prod1-desc": "زيت سمك طبيعي غني بأحماض أوميغا 3، موجه للمكملات الغذائية والصناعات الصيدلانية ومستحضرات التجميل.",
        "prod1-spec1": "تركيز طبيعي لأحماض EPA و DHA",
        "prod1-spec2": "عملية استخلاص دقيقة للمحافظة على الخصائص الحيوية",
        "prod1-spec3": "منتج عالي الجودة للقطاع الصيدلاني والتجميلي",
        "prod2-title": "بروتين وفرينة الأسماك",
        "prod2-desc": "مسحوق بروتيني عالي الجودة مستخلص من الأسماك، مخصص لصناعة أعلاف الحيوانات المائية والمواشي.",
        "prod2-spec1": "نسبة بروتين مركزة وقابلة للهضم",
        "prod2-spec2": "غني بالأحماض الأمينية الأساسية والمعادن",
        "prod2-spec3": "بديل محلي مستدام للأعلاف المستوردة",
        "prod5-title": "حلول بيئية وصناعية",
        "prod5-desc": "تطوير حاويات مبردة ومواد أولية طبيعية تلبي الاحتياجات اللوجستية والصناعية لقطاع الصيد البحري.",
        "prod3-spec1": "حاويات تبريد ملائمة لتقليل الفاقد أثناء النقل",
        "prod3-spec2": "مواد أولية مخصصة للاستخدامات الصناعية",
        "prod3-spec3": "حلول موجهة لتعزيز كفاءة سلاسل الإمداد",
        "prod-invest-btn": "تواصل للشراكة والاستثمار",
        "process-title": "مراحل العمل",
        "process-subtitle": "مسار متكامل ومدروس من مرحلة جمع المادة الأولية إلى المنتج النهائي.",
        "step1-title": "1. جمع وفرز المادة الأولية",
        "step1-desc": "اختيار وتأمين البقايا العضوية الطازجة من مصادر موثوقة.",
        "step2-title": "2. المعالجة والتحضير",
        "step2-desc": "تجهيز الموارد وتطبيق المعايير الصحية والتقنية اللازمة.",
        "step3-title": "3. الاستخلاص والفصل",
        "step3-desc": "استخلاص الزيوت والبروتينات عبر تقنيات دقيقة ومضبوطة.",
        "step4-title": "4. المنتج النهائي",
        "step4-desc": "الحصول على منتجات نقية جاهزة للاستخدام الصناعي والغذائي.",
        "contact-title": "تواصل معنا",
        "contact-desc": "نسعد باستقبال استفساراتكم ومناقشة فرص التعاون والشراكة.",
        "contact-official-title": "معلومات الاتصال الرسمية",
        "contact-official-sub": "قنوات التواصل العامة للمؤسسة",
        "contact-founders-title": "فريق التأسيس",
        "contact-founders-sub": "تواصل مباشر مع مهندسي المشروع",
        "contact-email-label": "البريد الإلكتروني",
        "contact-phone-label": "الهاتف / واتساب",
        "contact-location-label": "المقر",
        "contact-location": "الجزائر، الشلف",
        "follow-us": "تابعنا على الشبكات الاجتماعية",
        "founder1-role": "مهندس دولة – علوم البحر",
        "founder2-role": "مهندسة دولة – علوم البحر",
        "form-name": "الاسم الكامل",
        "form-email": "البريد الإلكتروني",
        "form-message": "رسالتك...",
        "form-submit": "إرسال الرسالة",
        "footer-text": "© 2026 VAL MAR. جميع الحقوق محفوظة.",
        "founder1-name": "عبد النور صلواتشي",
        "founder1-desc": "مهندس دولة في علوم البحر ، لدي إهتمام خاص بالإبتكار وتثمين الموارد البحرية ، أعمل حاليا على تطوير حلول عملية ومستدامة لإستغلال المنتجات السمكية، ومن أبرز مشاريعي تحويل بقايا الأسماك النافقة أو المستهلكة التي تعتبر نفايات عضوية إلى منتجات ذات قيمة مضافة، تساهم في دعم الإقتصاد الأزرق و حماية البيئة، مع توفير حلول للمستثمرين المميزين ذوي النظرة الثاقبة .",
        "founder2-name": "فاطمة الزهراء شويب",
        "founder2-desc": "مهندسة دولة في علوم البحر، أهتم بريادة الأعمال البيئية وتطوير المشاريع المبتكرة في مجال الإستغلال المستدام للموارد البحرية ، كما أسعى للمساهمة في إيجاد حلول عملية تعزز التنمية المستدامة وتدعم المبادرات البيئية",
        "read-more": "نبذة تعريفية",
        "footer-dev": "بِوَاسِطَة"
    },
    en: {
        "nav-about": "About Us",
        "nav-raw": "Raw Materials",
        "nav-products": "Products",
        "nav-process": "Process",
        "nav-contact": "Contact",
        "brand-sub": "Marine Bio-Valorization & Natural Oils",
        "hero-title": "VAL MAR",
        "hero-title-sub": "Marine Bio-Valorization & Natural Oils",
        "hero-explanation": "A startup specialized in valorizing fish organic by-products into high-value products: Omega-3 oils, fish protein, and eco-friendly industrial solutions supporting the circular economy.",
        "hero-desc": "Sustainable biotechnological solutions from marine resources.",
        "stat1-label": "Full Resource Utilization",
        "stat2-label": "Natural Extracts",
        "stat3-label": "Industrial & Feed Solutions",
        "founders-heading": "Founding Team",
        "slider-badge": "Development & Activity Gallery",
        "zoom-hint": "Click to Zoom",
        "video-badge": "Project Overview",
        "cta-btn": "Discover Solutions",
        "about-title": "About Us",
        "about-desc": "A startup dedicated to valorizing fisheries by-products, extracting natural marine oils and proteins, and developing industrial solutions that support circular economy and marine environmental protection.",
        "pillar1-title": "Circular Economy",
        "pillar1-desc": "Transforming marine organic by-products into sustainable, high-value resources.",
        "pillar2-title": "Marine Sciences",
        "pillar2-desc": "Applying rigorous scientific methodologies and precise extraction techniques.",
        "pillar3-title": "Industrial Value",
        "pillar3-desc": "Providing high-grade local alternatives for nutrition, pharmaceuticals, and industry.",
        "raw-title": "Raw Materials",
        "raw-desc": "We select and sort fresh organic marine resources to ensure optimal purity and quality in our final products.",
        "raw-cap1": "Fresh Marine Organic Residues",
        "raw-cap2": "Carefully Selected Resources",
        "raw-cap3": "Initial Sorting & Preparation",
        "raw-cap4": "Raw Materials Rich in Omega & Protein",
        "raw-cap5": "Eco-Friendly Storage",
        "raw-cap6": "Extraction Line Readiness",
        "products-title": "Products & Solutions",
        "products-subtitle": "Natural products carefully extracted to meet the demands of food, pharmaceutical, and animal feed industries.",
        "invest-banner-title": "Investment & Strategic Partnerships",
        "invest-banner-desc": "We welcome collaboration with investors, distributors, and industrial partners looking to develop joint ventures and capitalize on marine bio-products.",
        "prod1-title": "Natural Fish Oils (Omega-3)",
        "prod1-desc": "Natural fish oil rich in Omega-3 fatty acids, formulated for dietary supplements, pharmaceuticals, and cosmetics.",
        "prod1-spec1": "Natural concentration of EPA & DHA fatty acids",
        "prod1-spec2": "Controlled extraction process preserving vital properties",
        "prod1-spec3": "High-grade material for pharmaceutical and skincare sectors",
        "prod2-title": "Fish Protein & Fish Meal",
        "prod2-desc": "High-protein meal extracted from fish, specialized for aquaculture feed and livestock nutrition.",
        "prod2-spec1": "High digestible protein concentration",
        "prod2-spec2": "Rich in essential amino acids and minerals",
        "prod2-spec3": "Sustainable local alternative to imported feed",
        "prod5-title": "Eco-Industrial Solutions",
        "prod5-desc": "Refrigerated containers and natural raw materials tailored to support logistics and industrial supply chains.",
        "prod3-spec1": "Refrigerated containers to reduce transport loss",
        "prod3-spec2": "Natural raw materials for industrial applications",
        "prod3-spec3": "Targeted solutions to enhance supply chain efficiency",
        "prod-invest-btn": "Contact for Partnership & Investment",
        "process-title": "Process",
        "process-subtitle": "A structured, scientific pipeline from raw material collection to final delivery.",
        "step1-title": "1. Sourcing & Sorting",
        "step1-desc": "Careful collection and sorting of fresh marine by-products.",
        "step2-title": "2. Preparation",
        "step2-desc": "Technical conditioning under controlled sanitary standards.",
        "step3-title": "3. Extraction & Separation",
        "step3-desc": "Precise extraction of oils and proteins using proven methods.",
        "step4-title": "4. Final Output",
        "step4-desc": "Standardized, high-purity products ready for industrial use.",
        "contact-title": "Contact Us",
        "contact-desc": "We look forward to discussing collaboration, investment, and supply opportunities.",
        "contact-official-title": "Official Contact Details",
        "contact-official-sub": "General corporate communication channels",
        "contact-founders-title": "Founding Team",
        "contact-founders-sub": "Direct contact with project engineers",
        "contact-email-label": "Email",
        "contact-phone-label": "Phone / WhatsApp",
        "contact-location-label": "Location",
        "contact-location": "Algeria, Chlef",
        "follow-us": "Follow us on social media",
        "founder1-role": "State Engineer – Marine Sciences",
        "founder2-role": "State Engineer – Marine Sciences",
        "form-name": "Full Name",
        "form-email": "Email Address",
        "form-message": "Your Message...",
        "form-submit": "Send Message",
        "footer-text": "© 2026 VAL MAR. All rights reserved.",
        "founder1-name": "Abdennour Salaouatchi",
        "founder1-desc": "State Engineer in Marine Sciences, with a special interest in innovation and the valorization of marine resources. I am currently working on developing practical and sustainable solutions to exploit fish products. My main projects involve transforming dead or consumed fish remains into value-added products that support the blue economy and protect the environment.",
        "founder2-name": "Fatima Zohra Chouieb",
        "founder2-desc": "State Engineer in Marine Sciences, interested in environmental entrepreneurship and the development of innovative projects in the sustainable exploitation of marine resources. I also strive to contribute to finding practical solutions that promote sustainable development and support environmental initiatives.",
        "read-more": "Biography",
        "footer-dev": "BY"
    },
    fr: {
        "nav-about": "À Propos",
        "nav-raw": "Matière Première",
        "nav-products": "Produits",
        "nav-process": "Procédé",
        "nav-contact": "Contact",
        "brand-sub": "Valorisation des Ressources Marines & Huiles Naturelles",
        "hero-title": "VAL MAR",
        "hero-title-sub": "Valorisation des Ressources Marines & Huiles Naturelles",
        "hero-explanation": "Startup spécialisée dans la valorisation des sous-produits organiques de la pêche en produits à haute valeur ajoutée : huiles Oméga-3, protéines marines et solutions industrielles écologiques soutenant l'économie circulaire.",
        "hero-desc": "Solutions biotechnologiques durables issues des ressources marines.",
        "stat1-label": "Valorisation Intégrale",
        "stat2-label": "Extraits Naturels",
        "stat3-label": "Solutions Industrielles & Nutritionnelles",
        "founders-heading": "Équipe Fondatrice",
        "slider-badge": "Galerie d'Activités et Développement",
        "zoom-hint": "Cliquer pour agrandir",
        "video-badge": "Aperçu du Projet",
        "cta-btn": "Découvrir les Solutions",
        "about-title": "À Propos",
        "about-desc": "Startup dédiée à la valorisation des co-produits de la pêche, extrayant des huiles et protéines marines naturelles et développant des solutions industrielles soutenant l'économie circulaire et la protection de l'environnement marin.",
        "pillar1-title": "Économie Circulaire",
        "pillar1-desc": "Transformation des co-produits marins en ressources durables à haute valeur ajoutée.",
        "pillar2-title": "Ingénierie Maritime",
        "pillar2-desc": "Application de méthodes scientifiques et de procédés d'extraction rigoureux.",
        "pillar3-title": "Valeur Industrielle",
        "pillar3-desc": "Fourniture d'alternatives locales de qualité pour la nutrition, la pharmacie et l'industrie.",
        "raw-title": "Matière Première",
        "raw-desc": "Sélection rigoureuse de co-produits marins frais pour garantir la pureté et la qualité des produits finis.",
        "raw-cap1": "Co-produits Marins Frais",
        "raw-cap2": "Ressources Sélectionnées",
        "raw-cap3": "Tri et Préparation Initiale",
        "raw-cap4": "Matières Riches en Oméga et Protéines",
        "raw-cap5": "Stockage Sécurisé",
        "raw-cap6": "Prêt pour l'Extraction",
        "products-title": "Produits & Solutions",
        "products-subtitle": "Extraits naturels élaborés pour répondre aux exigences des industries agroalimentaires, pharmaceutiques et de l'alimentation animale.",
        "invest-banner-title": "Partenariats & Investissement",
        "invest-banner-desc": "Nous accueillons les investisseurs, distributeurs et industriels souhaitant développer des projets conjoints et valoriser le potentiel des bio-ressources marines.",
        "prod1-title": "Huiles de Poisson Naturelles (Oméga-3)",
        "prod1-desc": "Huile naturelle riche en acides gras Oméga-3, destinée aux compléments alimentaires, à la pharmacie et aux cosmétiques.",
        "prod1-spec1": "Teneur naturelle en acides gras EPA et DHA",
        "prod1-spec2": "Procédé d'extraction contrôlé préservant les composés actifs",
        "prod1-spec3": "Qualité adaptée aux secteurs pharmaceutique et cosmétique",
        "prod2-title": "Protéines & Farine de Poisson",
        "prod2-desc": "Farine protéique de haute qualité destinée à l'aquaculture et à l'alimentation animale.",
        "prod2-spec1": "Concentration protéique élevée et digestible",
        "prod2-spec2": "Riche en acides aminés essentiels et minéraux",
        "prod2-spec3": "Alternative locale durable réduisant les importations",
        "prod5-title": "Solutions Éco-Industrielles",
        "prod5-desc": "Conteneurs réfrigérés et matières premières naturelles adaptés aux besoins logistiques et industriels de la filière pêche.",
        "prod3-spec1": "Conteneurs réfrigérés réduisant les pertes lors du transport",
        "prod3-spec2": "Matières premières naturelles pour usages industriels",
        "prod3-spec3": "Solutions visant l'optimisation des chaînes d'approvisionnement",
        "prod-invest-btn": "Contacter pour Partenariat & Investissement",
        "process-title": "Procédé",
        "process-subtitle": "Un processus structuré et méthodique, de la collecte au produit fini.",
        "step1-title": "1. Collecte et Tri",
        "step1-desc": "Sélection et tri minutieux des co-produits marins frais.",
        "step2-title": "2. Préparation",
        "step2-desc": "Conditionnement selon les normes sanitaires et techniques.",
        "step3-title": "3. Extraction et Séparation",
        "step3-desc": "Extraction précise des huiles et protéines par des méthodes adaptées.",
        "step4-title": "4. Produit Fini",
        "step4-desc": "Obtention de produits standardisés prêts pour l'utilisation industrielle.",
        "contact-title": "Contact",
        "contact-desc": "À votre disposition pour échanger sur vos projets, partenariats et approvisionnements.",
        "contact-official-title": "Coordonnées Officielles",
        "contact-official-sub": "Canaux institutionnels de l'entreprise",
        "contact-founders-title": "Équipe Fondatrice",
        "contact-founders-sub": "Contact direct avec les ingénieurs cofondateurs",
        "contact-email-label": "Email",
        "contact-phone-label": "Téléphone / WhatsApp",
        "contact-location-label": "Emplacement",
        "contact-location": "Algérie, Chlef",
        "follow-us": "Suivez-nous sur les réseaux sociaux",
        "founder1-role": "Ingénieur d'État – Sciences de la Mer",
        "founder2-role": "Ingénieure d'État – Sciences de la Mer",
        "form-name": "Nom Complet",
        "form-email": "Adresse Email",
        "form-message": "Votre Message...",
        "form-submit": "Envoyer le Message",
        "footer-text": "© 2026 VAL MAR. Tous droits réservés.",
        "founder1-name": "Abdennour Salaouatchi",
        "founder1-desc": "Ingénieur d'État en Sciences de la Mer, passionné par l'innovation et la valorisation des ressources marines. Je travaille actuellement au développement de solutions pratiques et durables pour l'exploitation des produits de la pêche afin de soutenir l'économie bleue et la protection de l'environnement.",
        "founder2-name": "Fatima Zohra Chouieb",
        "founder2-desc": "Ingénieur d'État en Sciences de la Mer, intéressée par l'entrepreneuriat environnemental et le développement de projets innovants dans l'exploitation durable des ressources marines. Je m'efforce de contribuer à des solutions pratiques qui favorisent le développement durable et les initiatives environnementales.",
        "read-more": "Biographie",
        "footer-dev": "PAR"
    },
    es: {
        "nav-about": "Quiénes Somos",
        "nav-raw": "Materia Prima",
        "nav-products": "Productos",
        "nav-process": "Proceso",
        "nav-contact": "Contacto",
        "brand-sub": "Valorización de Recursos Marinos y Aceites Naturales",
        "hero-title": "VAL MAR",
        "hero-title-sub": "Valorización de Recursos Marinos y Aceites Naturales",
        "hero-explanation": "Startup especializada en la valorización de subproductos orgánicos de la pesca en productos de alto valor agregado: aceites Omega-3, proteína marina y soluciones industriales ecológicas que apoyan la economía circular.",
        "hero-desc": "Soluciones biotecnológicas sostenibles a partir de recursos marinos.",
        "stat1-label": "Aprovechamiento Integral",
        "stat2-label": "Extractos Naturales",
        "stat3-label": "Soluciones Industriales y de Piensos",
        "founders-heading": "Equipo Fundador",
        "slider-badge": "Galería de Actividades y Desarrollo",
        "zoom-hint": "Clic para ampliar",
        "video-badge": "Visión del Proyecto",
        "cta-btn": "Descubrir Soluciones",
        "about-title": "Quiénes Somos",
        "about-desc": "Startup dedicada a la valorización de subproductos pesqueros, extrayendo aceites y proteínas marinas naturales y desarrollando soluciones industriales que apoyan la economía circular.",
        "pillar1-title": "Economía Circular",
        "pillar1-desc": "Transformación de subproductos marinos en recursos sostenibles de alto valor.",
        "pillar2-title": "Ciencias del Mar",
        "pillar2-desc": "Aplicación de metodologías científicas y técnicas de extracción precisas.",
        "pillar3-title": "Valor Industrial",
        "pillar3-desc": "Alternativas locales de alta calidad para nutrición, farmacéutica e industria.",
        "raw-title": "Materia Prima",
        "raw-desc": "Seleccionamos recursos marinos frescos para asegurar máxima pureza y calidad en los productos finales.",
        "raw-cap1": "Subproductos Marinos Frescos",
        "raw-cap2": "Recursos Seleccionados",
        "raw-cap3": "Clasificación y Preparación",
        "raw-cap4": "Materia Rica en Omega y Proteínas",
        "raw-cap5": "Almacenamiento Seguro",
        "raw-cap6": "Listo para Extracción",
        "products-title": "Productos y Soluciones",
        "products-subtitle": "Extractos naturales elaborados para satisfacer los requerimientos de las industrias alimentaria, farmacéutica y de piensos.",
        "invest-banner-title": "Alianzas e Inversión",
        "invest-banner-desc": "Damos la bienvenida a inversores, distribuidores y socios industriales para desarrollar proyectos conjuntos y aprovechar el potencial de los biorecursos marinos.",
        "prod1-title": "Aceites Naturales de Pescado (Omega-3)",
        "prod1-desc": "Aceite natural de pescado rico en ácidos grasos Omega-3, formulado para suplementos, farmacia y cosmética.",
        "prod1-spec1": "Concentración natural de ácidos grasos EPA y DHA",
        "prod1-spec2": "Extracción controlada preservando propiedades bioactivas",
        "prod1-spec3": "Calidad adecuada para el sector farmacéutico y cosmético",
        "prod2-title": "Proteína y Harina de Pescado",
        "prod2-desc": "Harina proteica de alta calidad para acuicultura y nutrición animal.",
        "prod2-spec1": "Alta concentración de proteína digestible",
        "prod2-spec2": "Rica en aminoácidos esenciales y minerales",
        "prod2-spec3": "Alternativa local sostenible que sustituye importaciones",
        "prod5-title": "Soluciones Eco-Industriales",
        "prod5-desc": "Contenedores refrigerados y materias primas naturales adaptadas a las necesidades logísticas e industriales del sector pesquero.",
        "prod3-spec1": "Contenedores refrigerados para reducir pérdidas en transporte",
        "prod3-spec2": "Materias primas naturales para aplicaciones industriales",
        "prod3-spec3": "Soluciones para optimizar las cadenas de suministro",
        "prod-invest-btn": "Contactar para Alianzas e Inversión",
        "process-title": "Proceso",
        "process-subtitle": "Un proceso estructurado desde la recolección hasta la entrega final.",
        "step1-title": "1. Recolección y Clasificación",
        "step1-desc": "Selección rigurosa de subproductos marinos frescos.",
        "step2-title": "2. Preparación",
        "step2-desc": "Acondicionamiento según estándares técnicos y sanitarios.",
        "step3-title": "3. Extracción y Separación",
        "step3-desc": "Extracción precisa de aceites y proteínas.",
        "step4-title": "4. Producto Final",
        "step4-desc": "Productos estandarizados listos para uso industrial.",
        "contact-title": "Contacto",
        "contact-desc": "Estamos a su disposición para analizar colaboraciones, inversiones y suministros.",
        "contact-official-title": "Datos Oficiales de Contacto",
        "contact-official-sub": "Canales corporativos de comunicación",
        "contact-founders-title": "Equipo Fundador",
        "contact-founders-sub": "Contacto directo con los ingenieros fundadores",
        "contact-email-label": "Correo electrónico",
        "contact-phone-label": "Teléfono / WhatsApp",
        "contact-location-label": "Ubicación",
        "contact-location": "Argelia, Chlef",
        "follow-us": "Síguenos en redes sociales",
        "founder1-role": "Ingeniero de Estado – Ciencias del Mar",
        "founder2-role": "Ingeniera de Estado – Ciencias del Mar",
        "form-name": "Nombre Completo",
        "form-email": "Correo Electrónico",
        "form-message": "Tu Mensaje...",
        "form-submit": "Enviar Mensaje",
        "footer-text": "© 2026 VAL MAR. Todos los derechos reservados.",
        "founder1-name": "Abdennour Salaouatchi",
        "founder1-desc": "Ingeniero de Estado en Ciencias del Mar, con especial interés en la innovación y valorización de los recursos marinos. Actualmente desarrollo soluciones prácticas y sostenibles para la explotación de productos pesqueros que apoyan la economía azul y protegen el medio ambiente.",
        "founder2-name": "Fatima Zohra Chouieb",
        "founder2-desc": "Ingeniera de Estado en Ciencias del Mar, interesada en el emprendimiento ambiental y el desarrollo de proyectos innovadores en la explotación sostenible de los recursos marinos para promover el desarrollo sostenible.",
        "read-more": "Biografía",
        "footer-dev": "POR"
    },
    ru: {
        "nav-about": "О нас",
        "nav-raw": "Сырье",
        "nav-products": "Продукция",
        "nav-process": "Процесс",
        "nav-contact": "Контакты",
        "brand-sub": "Валоризация морских биоресурсов и натуральные масла",
        "hero-title": "VAL MAR",
        "hero-title-sub": "Валоризация морских биоресурсов и натуральные масла",
        "hero-explanation": "Стартап, специализирующийся на переработке органических побочных продуктов рыболовства в высокоценную продукцию: масла Омега-3, рыбный белок и экологичные промышленные решения для циркулярной экономики.",
        "hero-desc": "Устойчивые биотехнологические решения на основе морских ресурсов.",
        "stat1-label": "Полное использование сырья",
        "stat2-label": "Натуральные экстракты",
        "stat3-label": "Промышленные и кормовые решения",
        "founders-heading": "Основатели проекта",
        "slider-badge": "Галерея деятельности и развития",
        "zoom-hint": "Нажмите для увеличения",
        "video-badge": "Обзор проекта",
        "cta-btn": "Узнать о решениях",
        "about-title": "О нас",
        "about-desc": "Стартап, ориентированный на валоризацию побочных продуктов рыбного промысла, экстракцию натуральных морских масел и белков, а также разработку промышленных решений для циркулярной экономики.",
        "pillar1-title": "Циркулярная экономика",
        "pillar1-desc": "Превращение органических морских остатков в устойчивые ресурсы с высокой добавленной стоимостью.",
        "pillar2-title": "Морские науки",
        "pillar2-desc": "Применение строгих научных методов и точных технологий экстракции.",
        "pillar3-title": "Промышленная ценность",
        "pillar3-desc": "Поставка качественных локальных альтернатив для питания, фармацевтики и промышленности.",
        "raw-title": "Сырье",
        "raw-desc": "Мы тщательно отбираем свежие органические морские ресурсы для обеспечения максимальной чистоты и качества конечной продукции.",
        "raw-cap1": "Свежие морские органические остатки",
        "raw-cap2": "Отобранное сырье",
        "raw-cap3": "Первичная сортировка и подготовка",
        "raw-cap4": "Сырье, богатое омега-3 и белком",
        "raw-cap5": "Безопасное хранение",
        "raw-cap6": "Готовность к экстракции",
        "products-title": "Продукция и решения",
        "products-subtitle": "Натуральная продукция, полученная путем точной экстракции для пищевой, фармацевтической и кормовой промышленности.",
        "invest-banner-title": "Инвестиции и партнерство",
        "invest-banner-desc": "Мы открыты к сотрудничеству с инвесторами, дистрибьюторами и промышленными партнерами для совместных проектов и использования потенциала морских биоресурсов.",
        "prod1-title": "Натуральный рыбий жир (Омега-3)",
        "prod1-desc": "Натуральный рыбий жир, богатый жирными кислотами Омега-3, для биодобавок, фармацевтики и премиальной косметики.",
        "prod1-spec1": "Натуральная концентрация кислот EPA и DHA",
        "prod1-spec2": "Контролируемый процесс экстракции с сохранением свойств",
        "prod1-spec3": "Высокое качество для фармацевтического и косметического секторов",
        "prod2-title": "Рыбный белок и рыбная мука",
        "prod2-desc": "Высокобелковая мука из рыбы для специализированных кормов в аквакультуре и животноводстве.",
        "prod2-spec1": "Высокая концентрация усвояемого белка",
        "prod2-spec2": "Богат незаменимыми аминокислотами и минералами",
        "prod2-spec3": "Устойчивая локальная альтернатива импортным кормам",
        "prod5-title": "Эко-промышленные решения",
        "prod5-desc": "Охлаждаемые контейнеры и натуральное сырье для поддержки логистических и производственных цепочек в рыбной отрасли.",
        "prod3-spec1": "Рефрижераторные контейнеры для минимизации потерь при транспортировке",
        "prod3-spec2": "Натуральное сырье для промышленного применения",
        "prod3-spec3": "Решения для повышения эффективности цепочек поставок",
        "prod-invest-btn": "Связаться для партнерства и инвестиций",
        "process-title": "Процесс",
        "process-subtitle": "Последовательный и выверенный процесс от сбора сырья до готового продукта.",
        "step1-title": "1. Сбор и сортировка",
        "step1-desc": "Отбор и сортировка свежих органических биоресурсов.",
        "step2-title": "2. Подготовка",
        "step2-desc": "Технологическая подготовка с соблюдением санитарных норм.",
        "step3-title": "3. Экстракция и разделение",
        "step3-desc": "Точная экстракция масел и белков проверенными методами.",
        "step4-title": "4. Готовый продукт",
        "step4-desc": "Стандартизированная продукция, готовая к промышленному применению.",
        "contact-title": "Контакты",
        "contact-desc": "Будем рады ответить на ваши вопросы и обсудить возможности сотрудничества.",
        "contact-official-title": "Официальные контакты",
        "contact-official-sub": "Корпоративные каналы связи",
        "contact-founders-title": "Основатели проекта",
        "contact-founders-sub": "Прямая связь с ведущими инженерами",
        "contact-email-label": "Эл. почта",
        "contact-phone-label": "Телефон / WhatsApp",
        "contact-location-label": "Местоположение",
        "contact-location": "Алжир, Шлеф",
        "follow-us": "Следите за нами в соцсетях",
        "founder1-role": "Государственный инженер – Морские науки",
        "founder2-role": "Государственный инженер – Морские науки",
        "form-name": "Полное имя",
        "form-email": "Электронная почта",
        "form-message": "Ваше сообщение...",
        "form-submit": "Отправить сообщение",
        "footer-text": "© 2026 VAL MAR. Все права защищены.",
        "founder1-name": "Абденнур Салауатчи",
        "founder1-desc": "Государственный инженер в области морских наук, с особым интересом к инновациям и валоризации морских ресурсов. В настоящее время разрабатываю практические и устойчивые решения по использованию рыбной продукции для поддержки синей экономики и защиты окружающей среды.",
        "founder2-name": "Фатима Зохра Шуиб",
        "founder2-desc": "Государственный инженер в области морских наук, интересуюсь экологическим предпринимательством и разработкой инновационных проектов в сфере устойчивого освоения морских ресурсов для содействия устойчивому развитию.",
        "read-more": "Биография",
        "footer-dev": "РАЗРАБОТАНО"
    }
};

const flagMap = {
    ar: "./assets/flags/dz.svg",
    en: "./assets/flags/us.svg",
    fr: "./assets/flags/fr.svg",
    es: "./assets/flags/es.svg",
    ru: "./assets/flags/ru.svg"
};

const labelMap = {
    ar: "عر",
    en: "EN",
    fr: "FR",
    es: "ES",
    ru: "RU"
};

/* --------------------------------------------------
   2. LANGUAGE SWITCHER HANDLER
   -------------------------------------------------- */
const initLanguage = () => {
    const langBtn = document.getElementById('current-lang-btn');
    const langMenu = document.getElementById('lang-menu');
    const dropdownWrapper = langBtn ? langBtn.closest('.lang-dropdown-wrapper') : null;

    const setLanguage = (lang) => {
        const t = translations[lang] || translations.ar;
        const isRtl = (lang === 'ar');

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
        localStorage.setItem('valmar_lang', lang);

        // Update Text Nodes with [data-i18n]
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                const childIcons = el.querySelectorAll('img, svg, .icon-inline, .check-icon');
                if (childIcons.length > 0) {
                    Array.from(el.childNodes).forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) node.remove();
                    });
                    el.appendChild(document.createTextNode(' ' + t[key]));
                } else {
                    el.textContent = t[key];
                }
            }
        });

        // Update dropdown button label and flag
        if (langBtn) {
            const flagImg = langBtn.querySelector('.flag-icon');
            const labelSpan = langBtn.querySelector('.lang-label');
            if (flagImg) flagImg.src = flagMap[lang] || flagMap.ar;
            if (labelSpan) labelSpan.textContent = labelMap[lang] || "عر";
        }

        // Update active class in menu
        if (langMenu) {
            langMenu.querySelectorAll('li').forEach(li => {
                const itemLang = li.getAttribute('data-lang');
                if (itemLang === lang) {
                    li.classList.add('active');
                } else {
                    li.classList.remove('active');
                }
            });
        }
    };

    if (langBtn && langMenu && dropdownWrapper) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langMenu.classList.toggle('show');
            dropdownWrapper.classList.toggle('open', isOpen);
            langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        langMenu.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                const chosenLang = li.getAttribute('data-lang');
                setLanguage(chosenLang);
                langMenu.classList.remove('show');
                dropdownWrapper.classList.remove('open');
                langBtn.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (e) => {
            if (!dropdownWrapper.contains(e.target)) {
                langMenu.classList.remove('show');
                dropdownWrapper.classList.remove('open');
                langBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Auto-detect browser language on first visit
    const savedLang = localStorage.getItem('valmar_lang');
    let initialLang;
    if (savedLang) {
        initialLang = savedLang;
    } else {
        const navLang = (navigator.language || (navigator.languages && navigator.languages[0]) || 'ar').toLowerCase();
        const code = navLang.split('-')[0];
        const supported = ['ar', 'en', 'fr', 'es', 'ru'];
        initialLang = supported.includes(code) ? code : 'ar';
    }
    setLanguage(initialLang);
};

/* --------------------------------------------------
   3. THEME TOGGLE (DARK / LIGHT MODE)
   -------------------------------------------------- */
const initTheme = () => {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('valmar_theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('valmar_theme', theme);
    };

    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    });
};

/* --------------------------------------------------
   4. MOBILE NAVIGATION
   -------------------------------------------------- */
const initNavigation = () => {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;

    const closeNav = () => {
        navMenu.classList.remove('nav-active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navMenu.classList.toggle('nav-active');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeNav();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('nav-active')) {
            closeNav();
        }
    });
};

/* --------------------------------------------------
   5. SCROLL REVEAL & COUNTER ANIMATIONS
   -------------------------------------------------- */
const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (revealElements.length === 0) return;

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;
        const duration = 1200;
        const frameRate = 30;
        const totalFrames = Math.round(duration / (1000 / frameRate));
        let frame = 0;

        const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.round(target * Math.sin((progress * Math.PI) / 2));
            el.textContent = current;
            if (frame >= totalFrames) {
                el.textContent = target;
                clearInterval(timer);
            }
        }, 1000 / frameRate);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                entry.target.querySelectorAll('.counter').forEach(counter => {
                    if (!counter.dataset.animated) {
                        counter.dataset.animated = 'true';
                        animateCounter(counter);
                    }
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
};

/* --------------------------------------------------
   6. HERO SLIDESHOW
   -------------------------------------------------- */
const initHeroSlider = () => {
    const slides = document.querySelectorAll('.profile-slide');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval = null;

    const showSlide = (index) => {
        slides.forEach((s, idx) => {
            if (idx === index) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    const resetTimer = () => {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 3800);
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
            resetTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
            resetTimer();
        });
    }

    resetTimer();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoSlideInterval);
        } else {
            resetTimer();
        }
    });
};

/* --------------------------------------------------
   7. PRODUCTS SLIDERS
   -------------------------------------------------- */
const initProductSliders = () => {
    document.querySelectorAll('.product-slider').forEach(slider => {
        const slides = slider.querySelectorAll('.product-img');
        const prevBtn = slider.querySelector('.prod-slider-btn.prev');
        const nextBtn = slider.querySelector('.prod-slider-btn.next');
        if (slides.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }

        let currentIndex = 0;
        let slideTimer = null;

        const showSlide = (index) => {
            slides.forEach((s, idx) => {
                if (idx === index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        };

        const resetTimer = () => {
            if (slideTimer) clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, 4200 + Math.random() * 800);
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
                resetTimer();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
                resetTimer();
            });
        }

        resetTimer();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(slideTimer);
            } else {
                resetTimer();
            }
        });
    });
};

/* --------------------------------------------------
   8. FOUNDER BIO MODAL
   -------------------------------------------------- */
const initBioModal = () => {
    const modal = document.getElementById('bio-modal');
    const overlay = document.getElementById('bio-modal-overlay');
    const closeBtn = document.getElementById('bio-modal-close');
    const modalImg = document.getElementById('bio-modal-img');
    const modalName = document.getElementById('bio-modal-name');
    const modalRole = document.getElementById('bio-modal-role');
    const modalText = document.getElementById('bio-modal-text');
    if (!modal) return;

    const openModal = (btn) => {
        const card = btn.closest('.founder-card');
        const img = card.querySelector('.founder-img').src;
        const nameKey = card.querySelector('.founder-name').getAttribute('data-i18n');
        const roleKey = card.querySelector('.founder-role').getAttribute('data-i18n');
        const textKey = btn.getAttribute('data-bio');

        const lang = localStorage.getItem('valmar_lang') || 'ar';
        const t = translations[lang] || translations.ar;

        modalImg.src = img;
        modalName.textContent = t[nameKey] || card.querySelector('.founder-name').textContent;
        modalRole.textContent = t[roleKey] || card.querySelector('.founder-role').textContent;
        modalText.textContent = t[textKey] || '';

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.founder-bio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(btn);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
};

/* --------------------------------------------------
   9. INTERACTIVE LIGHTBOX
   -------------------------------------------------- */
const initLightbox = () => {
    const modal = document.getElementById('lightbox-modal');
    const overlay = document.getElementById('lightbox-overlay');
    const closeBtn = document.getElementById('lightbox-close');
    const imgWrapper = document.getElementById('lightbox-wrapper');
    const lightboxImg = document.getElementById('lightbox-img');
    const zoomIndicator = document.getElementById('zoom-indicator');
    if (!modal || !lightboxImg) return;

    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const updateTransform = () => {
        lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        if (zoomIndicator) zoomIndicator.textContent = `${Math.round(scale * 100)}%`;
    };

    const resetZoom = () => {
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
    };

    const openLightbox = (src, alt) => {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "صورة مكبرة";
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        resetZoom();
    };

    const closeLightbox = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.lightbox-trigger, .profile-slide').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(item.src, item.alt);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) overlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLightbox();
        }
    });

    if (imgWrapper) {
        imgWrapper.addEventListener('wheel', (e) => {
            if (!modal.classList.contains('active')) return;
            e.preventDefault();
            const delta = e.deltaY * -0.0015;
            scale = Math.min(Math.max(0.6, scale + delta), 4.5);
            updateTransform();
        }, { passive: false });

        imgWrapper.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            imgWrapper.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            if (imgWrapper) imgWrapper.style.cursor = 'grab';
        });

        let touchStartDist = 0;
        imgWrapper.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                startX = e.touches[0].clientX - translateX;
                startY = e.touches[0].clientY - translateY;
            } else if (e.touches.length === 2) {
                isDragging = false;
                touchStartDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
            }
        });

        window.addEventListener('touchmove', (e) => {
            if (!modal.classList.contains('active')) return;
            if (e.touches.length === 2) {
                e.preventDefault();
                const dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                if (touchStartDist > 0) {
                    scale = Math.min(Math.max(0.6, scale * (dist / touchStartDist)), 4.5);
                    touchStartDist = dist;
                    updateTransform();
                }
            } else if (isDragging && e.touches.length === 1) {
                translateX = e.touches[0].clientX - startX;
                translateY = e.touches[0].clientY - startY;
                updateTransform();
            }
        }, { passive: false });

        window.addEventListener('touchend', () => {
            isDragging = false;
            touchStartDist = 0;
        });
    }
};

/* --------------------------------------------------
   10. BACK TO TOP BUTTON
   -------------------------------------------------- */
const initBackToTop = () => {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 380) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

/* --------------------------------------------------
   11. INITIALIZATION ON DOM READY
   -------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initTheme();
    initNavigation();
    initScrollReveal();
    initHeroSlider();
    initProductSliders();
    initBioModal();
    initLightbox();
    initBackToTop();
});
