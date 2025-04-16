export function setupRulesPage(t) {
  const section = document.createElement('section');
  section.className = "max-w-3xl mx-auto px-4 py-8 text-left";
  section.style.display = "none";
  section.innerHTML = \`
    <h2 class="text-2xl font-semibold mb-4">\${t.rules}</h2>
    <ul class="list-disc pl-6 space-y-2">\${t.ruleItems.map(i => `<li>\${i}</li>`).join('')}</ul>
    <div class="text-center mt-6">
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">\${t.back}</button>
    </div>\`;
  document.getElementById("app").appendChild(section);
}