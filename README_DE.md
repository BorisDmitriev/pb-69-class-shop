# :shopping_cart: Mini Online-Shop

**Diese Übung behandelt die JavaScript-Konzepte von Klassen und Instanzobjekten**

Deine Aufgabe ist es, eine Produkt- und eine Warenkorbklasse zu erstellen, die einen Online-Shop darstellen.

---

## 1. Produkt

Schreibe eine Klasse `Product`, die 2 Eigenschaften haben soll

- einen `name` als String
- einen `price` als Zahl

Der Konstruktor sollte 2 Parameter haben, die diese Eigenschaften initialisieren. Für Beispiele

```js
const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4,99)
```

Die Klasse sollte außerdem 2 Methoden haben

- `toText()` - gibt einen String mit dem Produktnamen, dem Bruttopreis und der enthaltenen Mehrwertsteuer zurück.
- `containedVAT()` - gibt 16% des Produktpreises als VAT (Mehrwertsteuer) zurück

```js
tracksuit.toText() // Adidas Trainingsanzug 150,00 € insgesamt. 24,00 € inkl. MwSt. (16%).
tracksuit.containedVAT() // 24,00 € inkl. MwSt.
```

## 2. Warenkorb

Schreibe eine weitere Klasse `Cart`, die eine Eigenschaft haben sollte

- `products`, ein Array von Produkten

Wenn du eine Instanz von Cart erstellst, gibt es keine Produkte, also ist das Array leer. Dein Konstruktor nimmt keine Parameter an.

Erstelle drei Methoden für die Klasse Cart:

- `addProduct(shoppedProduct)`, die einen Parameter benötigt
  - Die Methode sollte zuerst testen, ob `gekauftesProdukt` eine Instanz der Klasse `Product` ist [mdn instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
  - wenn `shoppedProduct` eine Instanz von Product ist, füge es zum Array der Produkte hinzu und gib einen String mit der Anzahl der Produkte im Warenkorb zurück.
  - wenn `shoppedProduct` keine Instanz von Product ist, wird ein String zurückgegeben, der besagt, dass das Produkt nicht im Shop verfügbar ist
- `getProductInfoCart()`, die keine Parameter benötigt
  - die Methode sollte über das Array der Produkte iterieren
  - für jedes in der Liste enthaltene Produkt die Methode `toText()` aufrufen und auf der Konsole ausgeben.
- `getTotalItemsPrice()`, die keine Parameter benötigt
  - Die Methode sollte das Array mit den Produkten durchlaufen und den Gesamtpreis der Artikel im Warenkorb berechnen und als String zurückgeben.

## 3. Teste deinen Warenkorb mit Produkten

Hinweis: Du musst eventuell `console.log()` verwenden, um zu sehen, was zurückgegeben wurde.

Erstelle zunächst eine Instanz von Cart und lege deine Produkte in deinen Warenkorb. Zum Beispiel:

```js
const cart = new Cart()
cart.addProduct("potato") // Diese ist in unserem Shop nicht erhältlich!
cart.addProduct(tracksuit) // Dein Warenkorb enthält jetzt 1 Produkt
cart.addProduct(shoes) // Dein Warenkorb enthält jetzt 2 Produkte
cart.addProduct(socks) // Dein Einkaufswagen enthält jetzt 3 Produkte
```

Rufe dann die Methoden `getProductInfoCart()` und `getTotalItemsPrice()` deines Warenkorbs auf. Zum Beispiel:

```js
cart.getProductInfoCart()
// Adidas Laufschuhe 150,00 € insgesamt. 24,00 € inkl. MwSt. (16%).
// Puma Trainingsanzug 85,99 € insgesamt. 13,76 € inkl. MwSt. (16%).

cart.getTotalItemsPrice()
// Die Gesamtsumme für 3 Artikel in deinem Warenkorb beträgt 240,98 €.
```
