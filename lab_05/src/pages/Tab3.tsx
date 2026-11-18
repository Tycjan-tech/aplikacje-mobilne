import { IonGrid, IonRow, IonCol, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const slideChange = (s: SwiperType) => {
    setDisablePrev(s.isBeginning);
    setDisableNext(s.isEnd);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Prezentacja - pokaz slajdów</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Prezentacja - pokaz slajdów</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Swiper
          className="slajdy"
          initialSlide={0}
          speed={300}
          onSwiper={setSwiper}
          onSlideChange={slideChange}
        >
          <SwiperSlide>
            <div >
              <img src="/img/las.jpg" alt="Las" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div >
              <img src="/img/rzeka.jpg" alt="Rzeka" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/img/miasto.jpg" alt="Miasto" />
            </div>
          </SwiperSlide>
        </Swiper>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                disabled={disablePrev}
                onClick={() => swiper?.slidePrev()}
              >
                PREV
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                expand="block"
                disabled={disableNext}
                onClick={() => swiper?.slideNext()}
              >
                NEXT
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;