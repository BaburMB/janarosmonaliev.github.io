<script type="text/javascript">
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
for (j = 0; j < alphabet.length; j++){
  var letter = alphabet[j];
  document.getElementById('empsearch_emp').value = letter;
  for (i = 0; i < document.getElementsByClassName("data").length; i++){
    console.log(document.getElementsByClassName('data')[i].innerText)
  };
};
document.conds.submit();
  </script>