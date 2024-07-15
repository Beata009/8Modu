const json = '{"name":"Mango","age":3,"isHappy":true}';

// Konwersja ciągu JSON na obiekt JavaScript
const obj = JSON.parse(json);

// Wydrukowanie obiektu w konsoli
console.log(obj);

// Weryfikacja właściwości obiektu
console.log("Czy właściwości obiektu są zgodne z JSON?");
console.log("name:", obj.name === "Mango");
console.log("age:", obj.age === 3)


// JSON.parse konwertuje ciąg JSON na obiekt JavaScript. 
// Json jest konwertowany na obiekt o właściwościach name, age i isHappy
// obj.name === "Mango" sprawdza, czy wartość właściwości name jest równa "Mango".
// obj.age === 3 sprawdza, czy wartość właściwości age jest równa 3.
// obj.isHappy === true sprawdza, czy wartość właściwości isHappy jest równa true.



// Nieprawidłowy ciąg JSON
const invalidJson = '{"name": "Mango", "age": 3, "isHappy": true,'; // Brakujący zamykający nawias

try {
  // Próba parsowania nieprawidłowego ciągu JSON
  const obj = JSON.parse(invalidJson);
  console.log(obj); 
//   Jeśli parsowanie się powiedzie, wyświetli obiekt
} catch (error) {
  // Obsługa błędu
  console.error("Wystąpił błąd podczas parsowania JSON:");
  console.error("Nazwa błędu:", error.name);
  console.error("Wiadomość błędu:", error.message);
}

console.log("Skrypt działa dalej mimo wystąpienia błędu.");

// Blok try próbuje wykonać parsowanie nieprawidłowego ciągu JSON.
// Jeśli wystąpi błąd, kontrola przechodzi do bloku catch, szczegóły błędu są wydrukowane w konsoli.

// Wystąpił błąd podczas parsowania JSON:
// Nazwa błędu: SyntaxError
// Wiadomość błędu: Unexpected end of JSON input
// Skrypt działa dalej mimo wystąpienia błędu.

