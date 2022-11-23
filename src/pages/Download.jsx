import React from "react";
import "./Upload.css";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonButton,
  IonInput,
  IonItem,
  IonCard,
  IonFooter,
  IonText,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import { serverSharp } from "ionicons/icons";

function Download() {
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
        <IonGrid fixed>
          <IonRow>
            <IonCol sizeLg="6" offsetLg="3">
              <IonCard>
                <IonItem fill="outline">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <h6>
                          <IonLabel>Select Database</IonLabel>
                        </h6>
                      </IonCol>

                      <IonCol>
                        <IonItem fill="outline">
                          <IonSelect
                            multiple="false"
                            placeholder="Select Database"
                          >
                            <IonSelectOption>Database</IonSelectOption>
                          </IonSelect>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>

                {/*  */}
                <IonItem fill="outline">
                  <IonLabel>Select View</IonLabel>
                  <IonSelect
                    value="view"
                    multiple="true"
                    placeholder="Select Table"
                  >
                    {/* <IonSelectOption>{{ t }}</IonSelectOption> */}
                    <IonSelectOption>Table</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem fill="outline">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <h6>
                          <IonLabel>Select Tables Or Views</IonLabel>
                        </h6>
                      </IonCol>
                      <IonCol>
                        <IonItem fill="outline">
                          <IonSelect
                            value="table"
                            multiple="true"
                            placeholder="Select Tables Or Views"
                          >
                            <IonSelectOption>table</IonSelectOption>
                          </IonSelect>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>

                {/*  */}
                <IonItem fill="outline">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <h6>
                          <IonLabel>Select File Format</IonLabel>
                        </h6>
                      </IonCol>
                      <IonCol>
                        <IonItem fill="outline">
                          <IonSelect
                            multiple="false"
                            placeholder="Select File Format"
                          >
                            <IonSelectOption value="csv">CSV</IonSelectOption>
                            <IonSelectOption value="xls">Excel</IonSelectOption>
                            <IonSelectOption value="tsv">TSV</IonSelectOption>
                            <IonSelectOption value="json">JSON</IonSelectOption>
                            <IonSelectOption value="txt">TEXT</IonSelectOption>
                          </IonSelect>
                        </IonItem>

                        {/*  */}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>

                <IonItem fill="outline">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <h6>
                          <IonLabel>Select Field Separator</IonLabel>
                        </h6>
                      </IonCol>
                      <IonCol>
                        <IonItem fill="outline">
                          <IonSelect
                            value=""
                            multiple="false"
                            placeholder="Select Separator"
                          >
                            <IonSelectOption value=",">,</IonSelectOption>
                            <IonSelectOption value="|">|</IonSelectOption>
                            <IonSelectOption value=":">:</IonSelectOption>
                            <IonSelectOption value=";">;</IonSelectOption>
                            <IonSelectOption value="-">-</IonSelectOption>
                            <IonSelectOption value="">Tab</IonSelectOption>
                            <IonSelectOption value="Others">
                              Others
                            </IonSelectOption>
                          </IonSelect>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>

                {/*  */}
                <IonItem fill="outline">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <h6>
                          <IonLabel> Select Qualifier </IonLabel>
                        </h6>
                      </IonCol>
                      <IonCol>
                        <IonItem fill="outline">
                          <IonInput
                            type="text"
                            value=""
                            placeholder="Enter Qualifier"
                          ></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
                {/*  */}

                <IonItem fill="outline">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <h6>
                          <IonLabel> Download Directory </IonLabel>
                        </h6>
                      </IonCol>
                      <IonCol>
                        <IonItem fill="outline">
                          <IonInput
                            type="text"
                            value=""
                            placeholder="Enter the Download Directory"
                          ></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>

                {/*  */}
              </IonCard>

              <IonButton
                color="custom"
                expand="block"
                size="large"
                shape="round"
              >
                DOWNLOAD
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      {/* <IonFooter id="footer" className="footer text-muted">
        Copyright © 2010-2019 ForgeRock AS. All rights reserved.
      </IonFooter> */}
    </>
  );
}

export default Download;
