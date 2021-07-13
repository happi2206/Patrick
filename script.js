const togglediv = document.getElementById('togglediv');

togglediv.addEventListener('change', function () {
  if (togglediv.value == 'Yes') {
    document.getElementById('#hide').style.display = 'Block';
  }
});
