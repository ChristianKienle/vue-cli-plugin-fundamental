
module.exports = [
  {
    name: `layoutType`,
    type: 'list',
    message: 'Which layout do you want to use?',
    default: 0,
    choices: [
      {
        name: 'Full App (Shell, Side Navigation, …)',
        value: 'full',
        short: "Full",
      },
      {
        name: 'None',
        value: 'none'
      }
    ],
  }
];
