# React Navigation Contactlist

Deze applicatie bevat 4 screens:

- Feed
- UserDetail
- Me
- Settings

Daarnaast wordt alle data van de contacten bijgehouden in `config/data.js`

Het rootcomponent van deze app is het App-component

## Externe library

### React Native Elements

Deze React Native applicatie maakt gebruikt van de externe library React Native Elements =>
https://github.com/react-native-training/react-native-elements

React Native Elements bevat heel wat voorgedefinieerde en gestylde componenten die je kan gebruiken in je eigen React Native applicatie.

### Hoe voeg je de React Native Elements library toe aan je React Native project:

Zie volgende link: https://react-native-training.github.io/react-native-elements/docs/getting_started.html (**1ste tabblad**: Expo | Create React Native App)

> Expo projects include react-native-vector-icons out of the box, so all you need to do is install react-native-elements.

Open de Command Line in de root van je project en voer volgende commando's uit:

```
npm install --save react-native-elements
```

Controleer dat `react-native-elements` zijn toegevoegd in je `package.json`

## Doel van deze opdracht

React Navigation implementeren in deze bestaande applicatie.

Maak hierbij gebruik van:

- StackNavigator
- TabNavigator
- Modal
- Nested navigators
- Passing parameters

### Toevoegen react-navigation library

https://reactnavigation.org/docs/en/getting-started.html#start-from-a-template

```
expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
```

Controleer dat react-navigation, react-native-gesture-handler, react-native-reanimated zijn toegevoegd in je `package.json`

## Resultaat

**Voeg onder `/config` een `router.js` bestand toe met hierin alle react navigation configuratie**

Zodat onderstaande verwezenlijkt wordt:

- Bij het openen van de app ziet de gebruiker het Feed screen.
- Het scherm is onderverdeeld in 2 tabs: Feed en Me
- Bij het klikken op de tab Me: ziet de gebruiker uiteraard het Me screen
- Bij het klikken op de tab Feed: ziet de gebruiker uiteraard het Feed screen
- Bij het doorklikken op een contact in het Feed screen krijgt de gebruiker het UserDetail screen te zien met de correcte data van de geselecteerde gebruiker (dit via een StackNavigator)
- Ten slotte, op het Me screen, staat een button Settings. Klikken op deze button zal het Settings screen tonen als een **modal**
