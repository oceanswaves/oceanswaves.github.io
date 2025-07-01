function showMessage() {
  const name = document.getElementById("name").value;
  document.getElementById("submit").innerText =
    "Terima kasih " + name + " telah membeli!";
  return false;
}
