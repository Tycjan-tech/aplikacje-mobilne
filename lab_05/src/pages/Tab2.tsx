import { useState } from 'react';
import {
  IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonToast,
} from '@ionic/react';
import './Tab2.css';
// sprawdzanie liczby 1 
const czyPierwsze = (n: number): boolean => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// tablica liczb 1 
const kolejnePierwsze = (od: number, ile: number): number[] => {
  const wyniki: number[] = [];
  let aktualna = od;
  while (wyniki.length < ile) {
    if (czyPierwsze(aktualna)) {
      wyniki.push(aktualna);
    }
    aktualna++;
  }
  return wyniki;
};

const Tab2: React.FC = () => {
  const [liczby, setLiczby] = useState<number[]>(kolejnePierwsze(2, 30));
  const [present] = useIonToast();
  const dodaj = () => {
    const ostatnia = liczby[liczby.length - 1];
    const nowe = kolejnePierwsze(ostatnia + 1, 20);
    setLiczby([...liczby, ...nowe]);
    present({
      message: `Załadowano liczby do ${nowe[nowe.length - 1]}`, duration: 1500,
      position: 'top'
    });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Generator liczb pierwszych.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Generator liczb pierwszych</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {liczby.map((liczba, i) => (
            <IonItem key={liczba}>
              <span className="numerporzadkowy">{i + 1}.</span>
              <span className="liczbapierwsza">{liczba}</span>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            dodaj();
            ev.target.complete();
          }}
        >
          <IonInfiniteScrollContent loadingText="Liczę kolejne liczby..." />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
