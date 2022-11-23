import "./Options.css";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonButton,
  IonText,
} from "@ionic/react";

import { serverSharp } from "ionicons/icons";

function Options() {
  return (
    <>
      <IonHeader>
        <IonToolbar color="custom" className="ion-text-center">
          <IonText className="ion-text-center">
            <h1>
              <IonIcon md={serverSharp} />
              &nbsp; Welcome to our Server&nbsp;
              <IonIcon md={serverSharp} />
            </h1>
          </IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-text-center" color="#f7f7f7">
        <br />
        <br />
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol sizeLg="6" offsetLg="3">
              <IonButton color="custom" shape="round" expand="block">
                <h4>
                  <b>UPLOAD</b>
                </h4>
              </IonButton>
              <br />
              <IonButton color="custom" shape="round" expand="block">
                <h4>
                  <b>DOWNLOAD</b>
                </h4>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <footer id="footer" className="footer text-muted">
        Copyright © 2010-2019 ForgeRock AS. All rights reserved.
      </footer>
    </>
  );
}

export default Options;
