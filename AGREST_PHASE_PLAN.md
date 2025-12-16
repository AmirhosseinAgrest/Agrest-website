agrest-website/
├── public/
│   ├── fonts/
│   │   └── (font files)
│   ├── images/
│   │   ├── logo.svg
│   │   └── og-image.png
│   ├── locales/
│   │   ├── ar/
│   │   │   └── translation.json
│   │   ├── de/
│   │   │   └── translation.json
│   │   ├── en/
│   │   │   └── translation.json
│   │   ├── es/
│   │   │   └── translation.json
│   │   ├── fa/
│   │   │   └── translation.json
│   │   ├── fr/
│   │   │   └── translation.json
│   │   ├── ja/
│   │   │   └── translation.json
│   │   ├── ko/
│   │   │   └── translation.json
│   │   ├── pt/
│   │   │   └── translation.json
│   │   └── zh/
│   │       └── translation.json
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   │
|   App.tsx
|   main.tsx
|   vite-env.d.ts
|
+---components
|   |   index.ts
|   |
|   +---common
|   |   |   index.ts
|   |   |
|   |   +---Accordion
|   |   |       Accordion.tsx
|   |   |       Accordion.types.ts
|   |   |       index.ts
|   |   |
|   |   +---Badge
|   |   |       Badge.tsx
|   |   |       Badge.types.ts
|   |   |       index.ts
|   |   |
|   |   +---Button
|   |   |       Button.tsx
|   |   |       Button.types.ts
|   |   |       index.ts
|   |   |
|   |   +---Card
|   |   |       Card.tsx
|   |   |       Card.types.ts
|   |   |       index.ts
|   |   |
|   |   +---Divider
|   |   |       Divider.tsx
|   |   |       Divider.types.ts
|   |   |       index.ts
|   |   |
|   |   +---ErrorBoundary
|   |   |       ErrorBoundary.tsx
|   |   |       index.ts
|   |   |
|   |   +---Icon
|   |   |       Icon.tsx
|   |   |       Icon.types.ts
|   |   |       icons.tsx
|   |   |       index.ts
|   |   |
|   |   +---Image
|   |   |       Image.tsx
|   |   |       Image.types.ts
|   |   |       index.ts
|   |   |
|   |   +---Input
|   |   |       index.ts
|   |   |       Input.tsx
|   |   |       Input.types.ts
|   |   |
|   |   +---LanguageSwitcher
|   |   |       index.ts
|   |   |       LanguageSwitcher.tsx
|   |   |       LanguageSwitcher.types.ts
|   |   |
|   |   +---Link
|   |   |       index.ts
|   |   |       Link.tsx
|   |   |       Link.types.ts
|   |   |
|   |   +---Loading
|   |   |       index.ts
|   |   |       Loading.tsx
|   |   |
|   |   +---Meta
|   |   |       index.ts
|   |   |       Meta.tsx
|   |   |
|   |   +---ScrollToTop
|   |   |       index.ts
|   |   |       ScrollToTop.tsx
|   |   |
|   |   +---SEO
|   |   |       Breadcrumbs.tsx
|   |   |       index.ts
|   |   |       StructuredData.tsx
|   |   |
|   |   +---Skeleton
|   |   |       index.ts
|   |   |       Skeleton.tsx
|   |   |       Skeleton.types.ts
|   |   |
|   |   +---SkipLink
|   |   |       index.ts
|   |   |       SkipLink.tsx
|   |   |
|   |   +---TextArea
|   |   |       index.ts
|   |   |       TextArea.tsx
|   |   |       TextArea.types.ts
|   |   |
|   |   \---Typography
|   |           Heading.tsx
|   |           index.ts
|   |           Label.tsx
|   |           Text.tsx
|   |           Typography.types.ts
|   |
|   +---layout
|   |   |   index.ts
|   |   |
|   |   +---AppLayout
|   |   |       AppLayout.tsx
|   |   |       index.ts
|   |   |
|   |   +---Container
|   |   |       Container.tsx
|   |   |       Container.types.ts
|   |   |       index.ts
|   |   |
|   |   +---Footer
|   |   |       Footer.tsx
|   |   |       index.ts
|   |   |
|   |   +---Header
|   |   |       Header.tsx
|   |   |       Header.types.ts
|   |   |       index.ts
|   |   |
|   |   +---MobileMenu
|   |   |       index.ts
|   |   |       MobileMenu.tsx
|   |   |
|   |   +---Navigation
|   |   |       index.ts
|   |   |       Navigation.tsx
|   |   |
|   |   \---Section
|   |           index.ts
|   |           Section.tsx
|   |           Section.types.ts
|   |
|   +---motion
|   |   |   index.ts
|   |   |
|   |   +---AnimatePresence
|   |   |       AnimatePresence.tsx
|   |   |       index.ts
|   |   |
|   |   +---FadeIn
|   |   |       FadeIn.tsx
|   |   |       index.ts
|   |   |
|   |   +---MotionDiv
|   |   |       index.ts
|   |   |       MotionDiv.tsx
|   |   |
|   |   +---MotionSection
|   |   |       index.ts
|   |   |       MotionSection.tsx
|   |   |
|   |   +---MotionText
|   |   |       index.ts
|   |   |       MotionText.tsx
|   |   |
|   |   +---PageTransition
|   |   |       index.ts
|   |   |       PageTransition.tsx
|   |   |
|   |   +---ScaleIn
|   |   |       index.ts
|   |   |       ScaleIn.tsx
|   |   |
|   |   +---SlideUp
|   |   |       index.ts
|   |   |       SlideUp.tsx
|   |   |
|   |   \---StaggerContainer
|   |           index.ts
|   |           StaggerContainer.tsx
|   |
|   \---sections
|       |   index.ts
|       |
|       +---About
|       |       AboutIntro.tsx
|       |       AboutStory.tsx
|       |       index.ts
|       |
|       +---Achievements
|       |       AchievementCard.tsx
|       |       Achievements.tsx
|       |       index.ts
|       |
|       +---Blog
|       |       Blog.tsx
|       |       BlogAuthor.tsx
|       |       BlogCard.tsx
|       |       BlogGrid.tsx
|       |       BlogPost.tsx
|       |       BlogSidebar.tsx
|       |       index.ts
|       |
|       +---Contact
|       |       Contact.tsx
|       |       ContactForm.tsx
|       |       ContactInfo.tsx
|       |       ContactMap.tsx
|       |       index.ts
|       |
|       +---Experience
|       |       Experience.tsx
|       |       ExperienceCard.tsx
|       |       ExperienceTimeline.tsx
|       |       index.ts
|       |
|       +---FAQ
|       |       FAQ.tsx
|       |       FAQItem.tsx
|       |       index.ts
|       |
|       +---Gallery
|       |       Gallery.tsx
|       |       GalleryItem.tsx
|       |       GalleryLightbox.tsx
|       |       index.ts
|       |
|       +---Hero
|       |       Hero.tsx
|       |       HeroActions.tsx
|       |       HeroBackground.tsx
|       |       HeroContent.tsx
|       |       index.ts
|       |       ScrollIndicator.tsx
|       |
|       +---Philosophy
|       |       index.ts
|       |       Philosophy.tsx
|       |       PhilosophyPrinciple.tsx
|       |       PhilosophyQuote.tsx
|       |
|       +---ProjectDetail
|       |       index.ts
|       |       ProjectContent.tsx
|       |       ProjectDetail.tsx
|       |       ProjectGallery.tsx
|       |       ProjectHero.tsx
|       |
|       +---Projects
|       |       index.ts
|       |       ProjectCard.tsx
|       |       ProjectFilter.tsx
|       |       ProjectGrid.tsx
|       |       ProjectModal.tsx
|       |       Projects.tsx
|       |
|       +---Resume
|       |       index.ts
|       |       Resume.tsx
|       |       ResumeDownload.tsx
|       |       ResumeEducation.tsx
|       |       ResumeExperience.tsx
|       |       ResumeHeader.tsx
|       |       ResumeSection.tsx
|       |       ResumeSkills.tsx
|       |
|       +---Services
|       |       index.ts
|       |       ServiceCard.tsx
|       |       Services.tsx
|       |
|       +---Skills
|       |       index.ts
|       |       SkillBar.tsx
|       |       SkillCategory.tsx
|       |       Skills.tsx
|       |
|       +---SocialLinks
|       |       index.ts
|       |       SocialLinks.tsx
|       |
|       +---Stats
|       |       index.ts
|       |       StatItem.tsx
|       |       Stats.tsx
|       |
|       +---Testimonials
|       |       index.ts
|       |       TestimonialCard.tsx
|       |       Testimonials.tsx
|       |       TestimonialsCarousel.tsx
|       |
|       \---Values
|               index.ts
|               ValueCard.tsx
|               Values.tsx
|
+---config
|       index.ts
|       navigation.ts
|       routes.ts
|       seo.ts
|
+---constants
|       animations.ts
|       breakpoints.ts
|       design-tokens.ts
|       index.ts
|
+---context
|   |   index.ts
|   |
|   \---LanguageContext
|           index.ts
|           LanguageContext.tsx
|           LanguageProvider.tsx
|           useLanguage.ts
|
+---data
|       achievements.ts
|       blog.ts
|       experience.ts
|       faq.ts
|       gallery.ts
|       index.ts
|       personal.ts
|       philosophy.ts
|       projects.ts
|       resume.ts
|       services.ts
|       skills.ts
|       testimonials.ts
|       values.ts
|
+---hooks
|       index.ts
|       useDocumentTitle.ts
|       useFocusTrap.ts
|       useForm.ts
|       useInView.ts
|       useKeyboardNavigation.ts
|       useMediaQuery.ts
|       useReducedMotion.ts
|       useScrollAnimation.ts
|
+---i18n
|       config.ts
|       index.ts
|       languages.ts
|
+---lib
|       analytics.ts
|       framer.ts
|       index.ts
|       performance.ts
|       seo.ts
|       utils.ts
|
+---pages
|   |   index.ts
|   |
|   +---About
|   |       About.tsx
|   |       index.ts
|   |
|   +---Blog
|   |       Blog.tsx
|   |       index.ts
|   |
|   +---BlogPost
|   |       BlogPost.tsx
|   |       index.ts
|   |
|   +---Contact
|   |       Contact.tsx
|   |       index.ts
|   |
|   +---Home
|   |       Home.tsx
|   |       index.ts
|   |
|   +---NotFound
|   |       index.ts
|   |       NotFound.tsx
|   |
|   +---Philosophy
|   |       index.ts
|   |       Philosophy.tsx
|   |
|   +---ProjectDetail
|   |       index.ts
|   |       ProjectDetail.tsx
|   |
|   +---Projects
|   |       index.ts
|   |       Projects.tsx
|   |
|   +---Resume
|   |       index.ts
|   |       Resume.tsx
|   |
|   \---Services
|           index.ts
|           Services.tsx
|
+---router
|       index.ts
|       Router.tsx
|       routes.tsx
|
+---styles
|       animations.css
|       fonts.css
|       globals.css
|       print.css
|
\---types
        common.ts
        index.ts
│
├── .env
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── AGREST_PHASE_PLAN.md
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts