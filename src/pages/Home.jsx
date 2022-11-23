import React from "react";
import "./Home.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonInput,
  IonItem,
} from "@ionic/react";

import { personAddSharp } from "ionicons/icons";

function Home() {
  return (
    <>
      <IonHeader>
        <IonToolbar color="custom" fill="outline">
          <IonTitle className="ion-text-center">
            <h2>
              <IonIcon md={personAddSharp} />
              &nbsp; User Authentication&nbsp;
              <IonIcon md={personAddSharp} />
            </h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol sizeLg="6" offsetLg="3">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>
                    <b>Login</b>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="ion-padding-vertical">
                  <IonItem fill="outline" className="ion-margin-top ">
                    <IonLabel position="floating">Server Name</IonLabel>
                    {/* // <ion-input [(ngModel)]="serverName" type="text" required="true"></ion-input> */}
                    <IonInput
                      type="text"
                      className="grey"
                      required="true"
                    ></IonInput>
                  </IonItem>

                  <IonItem fill="outline" className="ion-margin-top">
                    <IonLabel position="floating">User Name</IonLabel>
                    {/* // <ion-input [(ngModel)]="serverName" type="text" required="true"></ion-input> */}
                    <IonInput type="text" required="true"></IonInput>
                  </IonItem>

                  <IonItem fill="outline" className="ion-margin-top">
                    <IonLabel position="floating">Password</IonLabel>
                    {/* // <ion-input [(ngModel)]="serverName" type="text" required="true"></ion-input> */}
                    <IonInput type="text" required="true"></IonInput>
                  </IonItem>
                  {/* <ion-item fill="outline" class="ion-margin-top">
            <ion-label position="floating">User Name</ion-label>
            <ion-input [(ngModel)]="userName" type="text" required="true"></ion-input>
          </ion-item> */}
                  {/* <IonItem class="ion-margin-top" fill="outline">
            <ion-label position="floating">Password</ion-label>
            // <ion-input [(ngModel)]="serverPassword" type="text" required="true"></ion-input>
            <IonInput type="text" required="true"></IonInput>
          </IonItem> */}
                </IonCardContent>
              </IonCard>
              {/* <IonButton shape="round" size="large" color="custom" (click)="onSubmit()" expand="block"> */}
              <IonButton
                shape="round"
                size="large"
                color="custom"
                expand="block"
              >
                SUBMIT
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

export default Home;
