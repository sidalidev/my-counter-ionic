import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonText
} from "@ionic/react";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function renderBelowZeroAlert() {
    if (count < 1) {
      return <IonText style={{ color: "red" }}>Can't go below 0</IonText>;
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={styles.container}>
          <IonText style={styles.title}>Counter App</IonText>
          <div style={styles.countContainer}>
            <IonText>{count}</IonText>
            <div style={styles.actionButtons}>
              <IonButton onClick={decrementCounter}>-</IonButton>
              <IonButton onClick={incrementCounter}>+</IonButton>
            </div>
            {renderBelowZeroAlert()}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  countContainer: {
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20
  },
  actionButtons: {
    justifyContent: "center",
    alignItems: "center"
  }
};
