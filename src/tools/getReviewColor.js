export const getReviewColor = percentage => {
  let color = '';
  switch (true) {
    case percentage >= 70:
      color = '#1cb114';
      break;
    case percentage > 30:
      color = '#c3c737';
      break;
    case percentage === 0:
      color = '#64645b';
      break;
    default:
      color = '#8BD538';
  }
  return color;
};
