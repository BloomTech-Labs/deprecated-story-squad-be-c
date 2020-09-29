const faker = require('faker');

module.exports = {
  // enumerated data types
  avatars: [
    { Location: faker.internet.avatar() },
    { Location: faker.internet.avatar() },
    { Location: faker.internet.avatar() },
  ],
  gradeLevels: [
    { GradeLevel: '3' },
    { GradeLevel: '4' },
    { GradeLevel: '5' },
    { GradeLevel: '6' },
  ],
  parents: [
    {
      Name: 'Danny Pudi',
      Email: 'danny@pu.di',
      PIN: '1jkkj0f89n2083n9fnq23rbn',
    },
    {
      Name: 'Joel McHale',
      Email: 'joel@mcha.le',
      PIN: '1jkkj0f89n2083n9fnq22rbn',
    },
  ],
  children: [
    {
      Name: 'Alison Brie',
      PIN: '1jkkj0f89n2083n9fnq23rbf',
      AvatarID: 1,
      ParentID: 1,
      GradeLevelID: 1,
      IsDyslexic: true,
    },
    {
      Name: 'Gillian Jacobs',
      PIN: '1jkkj0f89n2083n9fnq23rba',
      AvatarID: 2,
      ParentID: 1,
      GradeLevelID: 2,
      IsDyslexic: false,
    },
  ],
  newParentName: 'Abed Nadir',
  newChildName: 'Annie Edison',
  newStoryTitle: 'Studies in Modern Movement',
  stories: [
    {
      Title: 'Studies in Modern Movement',
      URL:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      WritingPrompt:
        "Explain the symbolism of the juxtaposition of Kiss From a Rose with Pierce's Hallucination and Annie and Shirley's hitchhiker.",
      DrawingPrompt:
        "Draw your favorite background image from Jeff and the Dean's karaoke session.",
    },
    {
      Title: 'Remedial Chaos Theory',
      URL:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      WritingPrompt:
        'Explain the importance of the alternate timelines to the main storyline, as well as the significance of the darkest timeline moving forward.',
      DrawingPrompt:
        'Draw a scene from your favorite of the alternate timelines.',
    },
  ],
  badRequest: { bad: 'field' },
  submission: {
    ID: 1,
    ChildID: 1,
    StoryID: 1,
    HasRead: false,
    HasWritten: false,
    HasDrawn: false,
    Complexity: null,
  },
};
