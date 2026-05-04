import type { Payload } from 'payload'

export async function seedHomePage(payload: Payload) {
  const layout: any[] = [
    {
      blockType: 'hero',
      name: 'Hero',
      headlinePrefix: 'VI BYGGER',
      rotatingWords: [{ word: 'WEBSITES.' }, { word: 'SYSTEMER.' }, { word: 'PLATFORME.' }, { word: 'VÆRKTØJ.' }],
      headlineSuffix: 'MED AI. FRA BUNDEN.',
      subheadline:
        'Websites. Management systemer. Platforme. Alt specialudviklet. Alt AI-drevet. Ingen licenser. Ingen bullshit.',
      meta: {
        line1: 'RIFT / 2026',
        line2: 'Specialudvikling. Fremtidssikret. AI i alt.',
        statusLabel: 'ACCEPTING_PROJECTS',
      },
    },
    {
      blockType: 'stats',
      items: [
        { key: 'YEARS_EXPERIENCE', value: '38' },
        { key: 'COMPANIES_BUILT', value: '04' },
        { key: 'COMPANIES_SOLD', value: '03' },
        { key: 'LICENSES', value: '00' },
      ],
    },
    {
      blockType: 'process',
      sectionTag: '01 — PROCESS',
      title: 'HVORDAN VI BRUGER AI TIL AT UDVIKLE',
      tabs: [
        { id: 'training', label: 'Training' },
        { id: 'testing', label: 'Testing' },
        { id: 'deploying', label: 'Deploying' },
        { id: 'integration', label: 'Integration' },
        { id: 'monitoring', label: 'Monitoring' },
      ],
      caption: 'AI system demonstration / Live processing example',
      leftText:
        'Vi koder ikke alt manuelt. AI håndterer det der kan automatiseres. Vi fokuserer på det der kræver præcision og erfaring.',
      rightText:
        'Hurtigere udvikling. Færre fejl. Bedre resultater. Se hvordan vi træner, tester, deployer og integrerer med AI som værktøj.',
    },
    {
      blockType: 'chat',
      sectionTag: '01.5 — THE RIFT',
      title: 'PLATFORMEN DU ENDER MED',
      paragraphs: [
        { text: 'THE RIFT er fundamentet. Det du får når vi er færdige. AI indbygget i hele systemet.' },
        { text: 'Bed AI om at lave en ny side. Rette et element. Skrive tekster. Optimere SEO. Det bliver bedre over tid, ikke værre.' },
      ],
    },
    {
      blockType: 'services',
      name: 'Capabilities / Services Grid',
      sectionTag: '02 — CAPABILITIES',
      title: 'HVAD VI BYGGER',
      supportText: 'Fem typer løsninger. Alle på THE RIFT. AI indbygget.',
      showAccentCard: true,
      services: [
        {
          id: 'websites',
          number: '01',
          title: 'Websites',
          description:
            'Bygget til det du skal bruge. Intet andet. Hurtigt. Sikkert. Med AI indbygget til vedligehold og optimering.',
          icon: 'cpu',
        },
        {
          id: 'management-systemer',
          number: '02',
          title: 'Management systemer',
          description:
            'Ordrehåndtering. Lagerstyring. CRM. Hvad du skal bruge til dit workflow. Ikke et standard system tilpasset dig.',
          icon: 'layers',
        },
        {
          id: 'the-rift',
          number: '03',
          title: 'THE RIFT',
          description:
            'Platformen bag det hele. AI indbygget. Bed den om at bygge, rette, optimere. Det du ender med når vi er færdige.',
          icon: 'database',
        },
        {
          id: 'e-commerce',
          number: '04',
          title: 'E-commerce',
          description:
            'Webshops der performer. Hurtige. Sikre. Tilpasset dine produkter. Ingen Shopify-licens. Du ejer det.',
          icon: 'zap',
        },
        {
          id: 'b2b-saas',
          number: '05',
          title: 'B2B & SaaS',
          description: 'Komplekse platforme. Portaler. SaaS-produkter. Bygget til at skalere. Ikke kludret sammen med plugins.',
          icon: 'cloud',
        },
      ],
    },
    {
      blockType: 'statement',
      quote:
        'Standardplatforme er døende. Wordpress, Shopify, Wix — de tjener penge på at holde dig fast. Vi bygger præcis hvad du skal bruge, og så ejer du det. Ingen licenser. Ingen plugins. Kun kode der virker.',
      meta: 'RIFT / 2026',
      label: 'TECHNICAL PHILOSOPHY',
    },
    {
      blockType: 'differentiators',
      sectionTag: '03 — DIFFERENTIATORS',
      title: 'HVORFOR OS',
      items: [
        {
          code: 'DIFF_01',
          tag: 'TECHNICAL_DEPTH',
          title: 'AI indbygget',
          body: 'Din løsning kommer med AI. Bed den om at lave nye sider. Rette elementer. Skrive tekster. Optimere SEO. Det bliver bedre med tiden, ikke værre.',
          dark: true,
        },
        {
          code: 'DIFF_02',
          tag: 'EXECUTION_FOCUS',
          title: 'Det holder',
          body: 'Vi bygger ikke systemer der skal genskrives om 3 år. Clean code. Solid arkitektur. Vedligehold dig selv med AI, eller lad os gøre det.',
          dark: false,
        },
        {
          code: 'DIFF_03',
          tag: 'FULL_STACK_CAPABILITY',
          title: 'Ingen licenser',
          body: 'Sitecore, Dynamicweb, Umbraco — alle vil have månedlige penge for software du ikke ejer. Vi bygger det du skal bruge. Du ejer det. Færdig.',
          dark: false,
        },
      ],
    },
    {
      blockType: 'approach',
      sectionTag: '04 — APPROACH',
      title: 'KONSTANT I PROCESS',
      phases: [
        {
          tag: 'PHASE_01',
          title: 'Discovery & Definition',
          body: 'Vi starter med at forstå problemet fuldstændigt. Ikke hvad du tror du har brug for, men hvad der faktisk skal løses. Vi analyserer workflows, identificerer flaskehalse, og designer arkitekturen før en enkelt linje kode skrives.',
          quote: 'Løsningen eksisterer ikke før problemet er fuldstændigt forstået.',
        },
        {
          tag: 'PHASE_02',
          title: 'Architecture & Planning',
          body: 'Vi designer systemarkitekturen med fokus på skalerbarhed, vedligeholdelse og performance. Hver komponent bliver planlagt til at håndtere både nuværende krav og fremtidig vækst.',
          quote: 'God arkitektur er usynlig, indtil den bliver kritisk.',
        },
        {
          tag: 'PHASE_03',
          title: 'Development & Integration',
          body: 'Her bygges systemet. Custom models trænes, APIs designes, interfaces udvikles. Alt bliver skrevet specifikt til dit use case, ikke tilpasset fra en skabelon.',
          quote: 'Vi skriver hver linje med intentionen om at den skal vedligeholdes i årevis.',
        },
      ],
      metaTitle: 'Iterativ udvikling med konstant feedback',
      metaBody1:
        'Hver fase flyder naturligt ind i den næste. Vi arbejder ikke i isolerede sprints eller stive deadlines, men i kontinuerlig udvikling hvor kvalitet aldrig kompromitteres for hastighed.',
      metaBody2:
        'Det betyder tættere samarbejde, hurtigere iteration på det der virker, og evnen til at ændre kurs når data viser en bedre retning.',
    },
    {
      blockType: 'caseStudies',
      sectionTag: '05 — WORK',
      title: 'UDVALGTE PROJEKTER',
      recordingTypes: [
        { id: 'demo', label: 'Demo' },
        { id: 'testing', label: 'Testing' },
        { id: 'deployment', label: 'Deployment' },
        { id: 'integration', label: 'Integration' },
      ],
      cases: [
        {
          id: 'finance',
          label: 'Tapas For Dig',
          project: 'PROJECT.001',
          sector: 'FOOD_SERVICE',
          title: 'Komplet ordre management system',
          description:
            'Nyt website med fuld ordrehåndtering, bestillingssystem der kommunikerer med køkken, alle udleveringssteder og butikker. THE RIFT platform med AI integreret til løbende opdateringer og optimering.',
          challenge:
            'Manglede et samlet system til at håndtere ordre på tværs af køkken, butikker og udleveringssteder. Eksisterende løsninger var for generiske og dyre.',
          solution:
            'Specialbygget order management system på THE RIFT. Real-time kommunikation mellem alle touchpoints, AI til forecast og optimering. Nul licenser.',
          deployed: '2026.Q1',
          duration: '3_MONTHS',
          type: 'FULL_PLATFORM',
          images: [
            { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1080&q=80' },
          ],
        },
        {
          id: 'healthcare',
          label: 'E-commerce',
          project: 'PROJECT.002',
          sector: 'RETAIL_COMMERCE',
          title: 'Webshop med AI-drevet SEO',
          description:
            'Specialdesignet e-commerce platform med AI integreret til automatisk SEO-optimering, indholdsproduktion og performance tracking. THE RIFT sikrer løbende forbedringer baseret på data.',
          challenge:
            'Shopify var for dyrt og langsomt. Manglede mulighed for præcis tilpasning til deres specifikke produkter og workflow.',
          solution:
            'Custom webshop på THE RIFT. AI skriver og optimerer produkttekster, håndterer SEO teknisk, laver split-tests automatisk. Ingen månedlige licenser.',
          deployed: '2025.Q4',
          duration: '2_MONTHS',
          type: 'E_COMMERCE',
          images: [
            { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1080&q=80' },
          ],
        },
        {
          id: 'logistics',
          label: 'B2B Platform',
          project: 'PROJECT.003',
          sector: 'B2B_TECH',
          title: 'Kunde portal med AI integration',
          description:
            'B2B portal hvor kunder kan logge ind, se ordre, fakturae og kommunikere. AI-assistent besvarer spørgsmål automatisk og håndterer rutine-kommunikation.',
          challenge:
            'Mange manuelle processer i kundeservice. Kunder skulle vente på svar til simple spørgsmål. Ingen centraliseret platform.',
          solution:
            'THE RIFT platform med indbygget AI-assistent. Automatisk besvarelse af 80% af kundehenvendelser. Real-time data fra ERP-system.',
          deployed: '2025.Q3',
          duration: '4_MONTHS',
          type: 'B2B_PORTAL',
          images: [
            { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1080&q=80' },
          ],
        },
        {
          id: 'retail',
          label: 'SaaS Platform',
          project: 'PROJECT.004',
          sector: 'SAAS_PRODUCT',
          title: 'Management tool til kreative teams',
          description:
            'SaaS-produkt til projektledelse for kreative bureauer. AI hjælper med estimering, ressourceplanlægning og automatisk rapportering til kunder.',
          challenge:
            'Eksisterende tools var for generiske. Manglede funktioner specifikt til kreativ industri. Dyre månedlige licenser per bruger.',
          solution:
            'Custom SaaS på THE RIFT. AI lærer fra historiske projekter og optimerer estimater. Skalerbar infrastruktur uden per-user pricing.',
          deployed: '2025.Q2',
          duration: '5_MONTHS',
          type: 'SAAS_PLATFORM',
          images: [
            { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1551288259-cd19b8d51713?w=1080&q=80' },
          ],
        },
        {
          id: 'manufacturing',
          label: 'Corporate Site',
          project: 'PROJECT.005',
          sector: 'CORPORATE_WEB',
          title: 'Virksomhedssite med AI-content',
          description:
            'Corporate website der dynamisk tilpasser indhold baseret på besøgende. AI genererer relevante case studies, testimonials og produktbeskrivelser per segment.',
          challenge:
            'Wordpress var langsomt og krævede konstant vedligehold. Indhold blev hurtigt forældet. Manglende personalisering til forskellige målgrupper.',
          solution:
            'THE RIFT platform med AI-drevet content. Automatisk SEO-optimering, dynamisk indhold per besøgende, lynhurtig performance. Nul vedligeholdelse.',
          deployed: '2025.Q1',
          duration: '2_MONTHS',
          type: 'CORPORATE_SITE',
          images: [
            { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080&q=80' },
            { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1080&q=80' },
          ],
        },
      ],
    },
    {
      blockType: 'tech',
      sectionTag: '06 — TECH',
      title: 'HVAD VI BRUGER',
      items: [
        { name: 'PyTorch' },
        { name: 'TensorFlow' },
        { name: 'OpenAI' },
        { name: 'LangChain' },
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'Node.js' },
        { name: 'Payload CMS' },
        { name: 'PostgreSQL' },
        { name: 'AWS' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
      ],
    },
    {
      blockType: 'team',
      sectionTag: '07 — TEAM',
      title: 'HVEM VI ER',
      members: [
        {
          role: 'CO-FOUNDER / 01',
          name: 'Joakim Willemoes',
          initials: 'JW',
          paragraphs: [
            { text: '18 års erfaring med digital marketing. Solgt 2 virksomheder. Kendt som en af Danmarks skarpeste indenfor SEO.' },
            { text: 'Håndterer forretning, strategi og kunder. Forstår hvad der skal til for at det faktisk virker i praksis.' },
          ],
        },
        {
          role: 'CO-FOUNDER / 02',
          name: 'Mikkel Høst',
          initials: 'MH',
          paragraphs: [
            { text: '20 års erfaring med udvikling. Bygget og solgt ADHUB. Medejer af 1stweb (solgt til Visma). Early adopter af AI.' },
            { text: 'Arkitekten bag RIFT. Bygger alt med AI som værktøj. Kode, arkitektur, deployment — hele stakken.' },
          ],
        },
      ],
    },
    {
      blockType: 'cta',
      sectionTag: '08 — FREMAD',
      title: 'Det bliver kun bedre',
      paragraphs: [
        { text: 'AI udvikler sig hver dag. Vi bygger hurtigere. Billigere. Bedre. Det du får i dag er bare starten — din løsning udvikler sig med.' },
        { text: 'Standardplatforme stagnerer. Specialløsninger accelererer. Vi bygger sidstnævnte.' },
      ],
    },
    {
      blockType: 'footer',
      showLogo: true,
    },
  ]

  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
    depth: 0,
  })

  if (existing.docs.length > 0) {
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: { title: 'Home', slug: 'home', layout },
    })
    return
  }

  await payload.create({
    collection: 'pages',
    data: { title: 'Home', slug: 'home', layout },
  })
}
