export const frText = {
  ui: {
    htmlLang: 'fr',
    pageAria: 'Livre interactif de Yonec',
    toggleLabel: 'NL',
    heroEyebrow: 'Marie de France',
    heroTitle: 'Yonec, livre interactif',
    heroIntro: 'Tourne les pages comme un vrai livre, puis clique sur des mots importants dans le texte.',
    heroImageAlt: 'Illustration du lai de Yonec',
    openBook: 'Ouvrir le livre',
    bookLayoutAria: 'Livre et panneau explicatif',
    bookWrapperAria: 'Livre a pages',
    bookSideAria: 'Information du mot selectionne',
    bookKicker: 'Mot ou expression',
    bookImageAltPrefix: 'Illustration',
    prevPage: 'Page precedente',
    nextPage: 'Page suivante',
    pagesLabel: 'Pages',
    quizAria: 'Quiz comprehension',
    quizTitle: 'Quiz de comprehension',
    scoreLabel: 'Score',
    retryQuiz: 'Recommencer',
  },
  tags: [
    { key: 'donjon', label: 'donjon' },
    { key: 'yonec', label: 'yonec' },
    { key: 'autour', label: 'autour' },
    { key: 'piege', label: 'piege' },
    { key: 'anneau', label: 'anneau' },
    { key: 'epee', label: 'epee' },
    { key: 'tombe', label: 'tombe' },
    { key: 'muldumarec', label: 'muldumarec' },
  ],
  insights: {
    start: {
      title: 'Point de depart',
      image: '/images/revelation.svg',
      info: 'Clique sur un mot dans le livre pour commencer l exploration.',
      quote: 'Selectionne un mot cle dans le texte pour afficher son explication ici.',
    },
    donjon: {
      title: 'Donjon',
      image: '/images/donjon.svg',
      info: 'Le donjon incarne l enfermement et le controle du vieillard jaloux sur la dame.',
      quote: 'Je suis prisonniere dans ce donjon et n en sortirai que morte.',
    },
    yonec: {
      title: 'Yonec',
      image: '/images/yonec.jpg',
      info: 'La plainte est le moment declencheur: la parole de la dame ouvre l aventure merveilleuse.',
      quote: 'Dieu tout-puissant, exauce mon desir!',
    },
    autour: {
      title: 'L autour',
      image: '/images/autour.svg',
      info: 'Muldumarec apparait sous forme d oiseau, melange de merveilleux medieval et de desir courtois.',
      quote: 'Elle apercoit l ombre d un grand oiseau... puis il devient un beau chevalier.',
    },
    piege: {
      title: 'Le piege',
      image: '/images/piege.svg',
      info: 'Le piege de broches marque la trahison et le basculement vers la tragedie.',
      quote: 'Il fait forger de grandes broches de fer aux pointes acerees.',
    },
    anneau: {
      title: 'L anneau',
      image: '/images/cite.svg',
      info: 'L anneau protege la dame en effacant la memoire du mari.',
      quote: 'Aussi longtemps qu elle l aura au doigt, son mari n aura aucun souvenir.',
    },
    epee: {
      title: 'L epee',
      image: '/images/revelation.svg',
      info: 'L epee transmise au fils porte la verite familiale et la vengeance.',
      quote: 'Elle remettra l epee a son fils.',
    },
    tombe: {
      title: 'La tombe',
      image: '/images/revelation.svg',
      info: 'La tombe transforme le secret intime en revelation publique devant toute la communaute.',
      quote: 'Devant la tombe, elle raconte toute l aventure.',
    },
    muldumarec: {
      title: 'Muldumarec',
      image: '/images/revelation.svg',
      info: 'Muldumarec transforme le secret intime en revelation publique devant toute la communaute.',
      quote: 'Devant Muldumarec, elle raconte toute l aventure.',
    },
  },
  quizQuestions: [
    {
      question: "Pourquoi Muldumarec ne pouvait-il pas venir avant l'appel de la dame?",
      answers: [
        { label: 'Il etait prisonnier dans son royaume sans appel', correct: true },
        { label: 'Il avait oublie le chemin du donjon', correct: false },
        { label: "La vieille surveillante l'en empechait", correct: false },
      ],
      feedback: {
        correct: "Exact ! Dans le lai, il dit qu'il ne pouvait venir qu'apres son appel.",
        wrong: 'Pas encore. Relis le passage de la rencontre dans la chambre du donjon.',
      },
    },
    {
      question: 'Sous quelle forme Muldumarec apparait-il a la dame pour la premiere fois?',
      answers: [
        { label: "Un chevalier vetu d'or", correct: false },
        { label: 'Un autour (faucon)', correct: true },
        { label: 'Un vieillard sage', correct: false },
      ],
      feedback: {
        correct: 'Bien joue ! Il se transforme en autour avant de prendre forme humaine.',
        wrong: 'Relis le debut du conte : il entre par la fenetre sous une forme animale.',
      },
    },
    {
      question: 'Que laisse Muldumarec a la dame avant de mourir?',
      answers: [
        { label: 'Son epee et un anneau magique', correct: true },
        { label: 'Une lettre pour leur fils', correct: false },
        { label: 'Son cheval et son manteau', correct: false },
      ],
      feedback: {
        correct: "Exact ! L'anneau lui permettra d'oublier et l'epee vengera sa mort.",
        wrong: 'Relis la scene de la mort de Muldumarec dans le donjon.',
      },
    },
    {
      question: "Comment s'appelle le fils de la dame et de Muldumarec?",
      answers: [
        { label: 'Guigemar', correct: false },
        { label: 'Lanval', correct: false },
        { label: 'Yonec', correct: true },
      ],
      feedback: {
        correct: 'Correct ! C est Muldumarec lui-meme qui choisit ce nom avant de mourir.',
        wrong: 'Relis les recommandations de Muldumarec a la dame mourante.',
      },
    },
    {
      question: 'Comment le seigneur jaloux pieges-t-il Muldumarec?',
      answers: [
        { label: 'Il place des lames de fer aux barreaux de la fenetre', correct: true },
        { label: 'Il enferme la dame dans un autre chateau', correct: false },
        { label: 'Il tend un filet magique dans la chambre', correct: false },
      ],
      feedback: {
        correct: 'Oui ! Des broches de fer garnies de pointes le blessent a mort en entrant.',
        wrong: 'Relis la scene ou la vieille decouvre le secret et le raconte au seigneur.',
      },
    },
  ],
}
