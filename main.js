export function setupMainPage(t) {
  const main = document.createElement('main');
  main.className = "max-w-3xl mx-auto px-4 py-8 text-center";
  main.innerHTML = \`
    <h2 class="text-2xl font-semibold mb-4">\${t.whatIs}</h2>
    <p class="text-lg leading-relaxed">\${t.description}</p>\`;
  document.getElementById("app").appendChild(main);
}