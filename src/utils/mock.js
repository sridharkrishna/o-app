const names = [
  { id: 1234561, name: 'Smith, Jim', codeType: 'Prospect', state: 'Incliner', tier: 'Legend', market: 'Local', daySince: 15},
  { id: 1234562, name: 'Amelia, James', codeType: 'Main', state: 'Decliner', tier: 'Legend', market: 'Local', daySince: 15},
  { id: 1234563, name: 'Esther,Gardner', codeType: 'Prospect', state: 'Incliner', tier: 'Hall of Fame', market: 'Out of Town', daySince: 15},
  { id: 1234564, name: 'Theodore, Ross', codeType: 'Main', state: 'Incliner', tier: 'Legend', market: 'Local', daySince: 15},
  { id: 1234565, name: 'Paula, Soto', codeType: 'Prospect', state: 'Incliner', tier: 'Legend', market: 'Local', daySince: 15},
  { id: 1234566, name: 'Valentin, Rolland', codeType: 'Prospect', state: 'Decliner', tier: 'Hall of Fame', market: 'Out of Town', daySince: 15},
  { id: 1234567, name: 'Nanna, Christensen', codeType: 'Main', state: 'Incliner', tier: 'Legend', market: 'Local', daySince: 15},
  { id: 1234568, name: 'Marta, Oehler', codeType: 'Prospect', state: 'Incliner', tier: 'Hall of Fame', market: 'Local', daySince: 15},
  { id: 1234569, name: 'Josefina, Montero', codeType: 'Main', state: 'Decliner', tier: 'Legend', market: 'Out of Town', daySince: 15}, 
  { id: 1234570, name: 'Gunnar, Schalk', codeType: 'Prospect', state: 'Incliner', tier: 'Hall of Fame', market: 'Local', daySince: 15},
];

export const exceptionTypes = [
  { text: 'Comp Assist Not used', value: 'Comp Assist Not used',},
  { text: 'Not Qualified', value: 'Not Qualified' },
  { text: 'Qualified - Exceeds Policy', value: 'Qualified - Exceeds Policy' }
];

export const data = [];
export const engageData = [];

const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const mockData = (max) => {
  for (let i = 0; i < max; i++) {
    const idx = Math.floor((Math.random() * 10));
    let rDate = randomDate(new Date(2020, 0, 1), new Date());
    rDate = rDate.toUTCString().split(' ');
    const obj = {
      key: `${i+1}`,
      exception: `${Math.floor((Math.random() * 20) + 1)}%`,
      compDate: `${rDate[2]} ${rDate[1]}, ${rDate[3]}`,
      guestId: names[idx].id,
      status: 'Open',
      name: names[idx].name,
      issuer: 'Fimuara, Brooke',
      sourceCompAmount: `${'$'}${Math.floor((Math.random() * 10000) + 1)}`,
      exceptionType: exceptionTypes[Math.floor((Math.random() * 3))].value,
      index: i,
    }
    data.push(obj);
  }
}

export const engageMockData = (max) => {
  for (let i = 0; i < max; i++) {
    const idx = Math.floor((Math.random() * 10));
    const obj = {
      key: `${i+1}`,
      codeType: names[idx].codeType,
      state: names[idx].state,
      guestId: names[idx].id,
      tier: names[idx].tier,
      name: names[idx].name,
      market: names[idx].market,
      daySince: names[idx].daySince,
      index: i,
    }
    engageData.push(obj);
  }
}