const origamidLink = document.getElementById('origamid') as HTMLAnchorElement
const origamidLink2 = document.getElementById('origamid')

if (origamidLink2 instanceof HTMLAnchorElement) {
  origamidLink2.href = origamidLink?.href.replace('http', 'https')
}
// console.log(origamidLink?.href.replace('http', 'https'))
