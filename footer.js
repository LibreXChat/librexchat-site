export function setupFooter(t) {
  const footer = document.createElement('footer');
  footer.className = "text-center py-6 text-sm text-gray-400";
  footer.innerHTML = `<span>${t.footer}</span>`;
  document.body.appendChild(footer);
}