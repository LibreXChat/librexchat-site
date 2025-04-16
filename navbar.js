export function setupNavbar(t) {
  const nav = document.createElement('nav');
  nav.className = "flex justify-between items-center bg-gray-800 px-6 py-4 text-sm";
  nav.innerHTML = \`
    <div class="flex space-x-6">
      <a href="#" class="nav-item hover:text-blue-400">\${t.nav[0]}</a>
      <a href="#" class="nav-item hover:text-blue-400">\${t.nav[1]}</a>
      <a href="#" id="rules-link" class="nav-item hover:text-blue-400">\${t.nav[2]}</a>
      <a href="#" class="nav-item hover:text-blue-400">\${t.nav[3]}</a>
    </div>
    <div class="flex items-center space-x-3">
      <button class="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600">EN / RU</button>
    </div>\`;
  document.body.insertBefore(nav, document.getElementById("app"));
}