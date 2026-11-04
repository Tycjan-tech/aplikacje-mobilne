import { useState } from 'react';
import { IonCard,IonCardContent, IonButton,IonGrid,IonRow,IonCol } from '@ionic/react';
const Kalkulator: React.FC = () => {
const [wynik, setWynik] = useState('0');
const [poprzedniaLiczba, setPoprzedniaLiczba] = useState<number | null>(null);
const [dzialanie, setDzialanie] = useState<string | null>(null);
const [nowaLiczba, setNowaLiczba] = useState(true);
const wpiszLiczbe = (liczba: string) => {
if (nowaLiczba) {
setWynik(liczba);
setNowaLiczba(false);
}
else if (wynik === '0') {
setWynik(liczba);
}
else {
setWynik(wynik + liczba);
}
};
const wpiszKropke = () => {
if (nowaLiczba) {
setWynik('0.');
setNowaLiczba(false);
}
else if (!wynik.includes('.')) {
setWynik(wynik + '.');
}
};
const wybierzDzialanie = (operator: string) => {
if (poprzedniaLiczba !== null && dzialanie !== null && !nowaLiczba) {
const drugaLiczba = Number(wynik);
let rezultat = 0;
switch (dzialanie) {
case '+':
rezultat = poprzedniaLiczba + drugaLiczba;
break;
case '-':
rezultat = poprzedniaLiczba - drugaLiczba;
break;
case '×':
rezultat = poprzedniaLiczba * drugaLiczba;
break;
case '÷':
if (drugaLiczba === 0) {
setWynik('Zakaz dzielenia przez zero!!1');
setPoprzedniaLiczba(null);
setDzialanie(null);
setNowaLiczba(true);
return;
}
rezultat = poprzedniaLiczba / drugaLiczba;
break;
}
rezultat = parseFloat(rezultat.toFixed(10));
setWynik(String(rezultat));
setPoprzedniaLiczba(rezultat);
}
else if (poprzedniaLiczba === null) {
setPoprzedniaLiczba(Number(wynik));
}
setDzialanie(operator);
setNowaLiczba(true);
};
const oblicz = () => {
if (poprzedniaLiczba === null || dzialanie === null) {
return;
}
const drugaLiczba = Number(wynik);
let rezultat = 0;
switch (dzialanie) {
case '+':
rezultat = poprzedniaLiczba + drugaLiczba;
break;
case '-':
rezultat = poprzedniaLiczba - drugaLiczba;
break;
case '×':
rezultat = poprzedniaLiczba * drugaLiczba;
break;
case '÷':
if (drugaLiczba === 0) {
setWynik('Nie można dzielić przez zero');
setPoprzedniaLiczba(null);
setDzialanie(null);
setNowaLiczba(true);
return;
}
rezultat = poprzedniaLiczba / drugaLiczba;
break;
}
setWynik(String(parseFloat(rezultat.toFixed(10))));
setPoprzedniaLiczba(null);
setDzialanie(null);
setNowaLiczba(true);
};

const wyczysc = () => {

setWynik('0');
setPoprzedniaLiczba(null);
setDzialanie(null);
setNowaLiczba(true);

};

return (
<IonCard>
<IonCardContent>

<h2>Kalkulator</h2>

<IonCard>
<IonCardContent>
<h1 style={{ textAlign: 'right' }}>{wynik}</h1>
</IonCardContent>
</IonCard>
<IonGrid>
<IonRow>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('7')}>7</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('8')}>8</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('9')}>9</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wybierzDzialanie('÷')}>÷</IonButton>
</IonCol>
</IonRow>
<IonRow>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('4')}>4</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('5')}>5</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('6')}>6</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wybierzDzialanie('×')}>×</IonButton>
</IonCol>
</IonRow>
<IonRow>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('1')}>1</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('2')}>2</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('3')}>3</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wybierzDzialanie('-')}>-</IonButton>
</IonCol>
</IonRow>
<IonRow>
<IonCol>
<IonButton expand="block" color="danger" onClick={wyczysc}>C</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wpiszLiczbe('0')}>0</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={wpiszKropke}>.</IonButton>
</IonCol>
<IonCol>
<IonButton expand="block" onClick={() => wybierzDzialanie('+')}>+</IonButton>
</IonCol>
</IonRow>
<IonRow>
<IonCol>
<IonButton expand="block" color="success" onClick={oblicz}>=</IonButton>
</IonCol>
</IonRow>
</IonGrid>
</IonCardContent>
</IonCard>
);
};
export default Kalkulator;
