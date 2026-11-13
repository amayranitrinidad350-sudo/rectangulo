function calcular() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);
  let area = base * altura;
  let perimetro = 2 * (base + altura);
  document.getElementById("area").innerHTML = "El área es: " + area;
  document.getElementById("perimetro").innerHTML = "El perímetro es: " + perimetro;
}