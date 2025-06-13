export const nepalSambat = () => {
    // Approximate year of NS based on AD; not accurate, will reset on Jan 1 every year
    return (new Date().getFullYear()) - 879;
}

export const nepalSambatLatin = (nepalSambat: number) => {
    return nepalSambat.toString();
}

export const nepalSambatDevanagari = (nepalSambat: number) => {
    const devMap = ['०','१','२','३','४','५','६','७','८','९'];
    return String(nepalSambat).split('').map(d => devMap[+d] || d).join('');
}

export const nepalSambatNewa = (nepalSambat: number) => {
    const devMap = ['𑑐','𑑑','𑑒','𑑓','𑑔','𑑕','𑑖','𑑗','𑑘','𑑙']
    return String(nepalSambat).split('').map(d => devMap[+d] || d).join('');
}